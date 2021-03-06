import {Injectable} from "@angular/core";
import {AndroidPermissions} from "@ionic-native/android-permissions";
import {GlobalService, MyPluginMock} from "../providers/GlobalService";
import {FileService} from "../providers/FileService";
import {MyPlugin, PageIntent} from "@ionic-native/my-plugin";
import {MyHistory} from "../pages/history/myhistory";
import {MapPage} from "../pages/map/map";
import {SearchPage} from "../pages/search/search";
import {StationWorkPage} from "../pages/stationwork/stationwork";
import {NewsPage} from "../pages/news/news";
import {MaterialsPage} from "../pages/materials/materials";
import {SettingPage} from "../pages/setting/setting";
import {MyWorkPage} from "../pages/mywork/mywork";
import {DataService} from "../providers/DataService";
import {ConfigService} from "../providers/ConfigService";

@Injectable()
export class AppComponentService {
  constructor(private androidPermissions: AndroidPermissions,
              private globalService: GlobalService,
              private fileService: FileService,
              private dataService: DataService,
              private myPlugin: MyPlugin,
              private configService: ConfigService) {
  }

  /**
   * 初始化
   * @returns {Promise<any>}
   */
  public init(): Promise<any> {
    if (this.globalService.isChrome) {
      this.myPlugin = this.globalService.getMyPluginMock();
      return this.dataService.init()
        .then(result => this.parsePageIntent());
    } else {
      return this.checkPermissions()
        .then(result => this.fileService.createDirRoot())
        .then(result => this.dataService.init())
        .then(result => this.parsePageIntent());
    }
  }

  public downloadConstantData(): Promise<any> {
    if (this.globalService.isChrome) {
      return this.dataService.downloadWords()
      .then(result => this.dataService.downloadMaterials())
      .then(result => /*this.globalService.isWorker ? true : */this.dataService.downloadPersonnels());
    } else {
      return this.dataService.checkIfDownloadWords()
      .then(result => this.dataService.checkIfDownloadMaterials())
      .then(result => /*this.globalService.isWorker ? true : */this.dataService.checkIfDownloadPersonnels());
    }
  }

  /**
   * 检查权限
   * @returns {Promise<Promise<any>|void>|Promise<void>|Promise<TResult>|Promise<any>}
   */
  private checkPermissions(): Promise<any> {
    let permissions: string[] = [
      this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION,
      this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,
      this.androidPermissions.PERMISSION.ACCESS_WIFI_STATE,
      this.androidPermissions.PERMISSION.CHANGE_WIFI_STATE,
      this.androidPermissions.PERMISSION.READ_PHONE_STATE,
      this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
      this.androidPermissions.PERMISSION.INTERNET,
      this.androidPermissions.PERMISSION.CAMERA,
      this.androidPermissions.PERMISSION.RECORD_AUDIO
    ];

    return this.androidPermissions.requestPermissions(permissions)
      .then(success => console.log('Permission granted'),
        err => console.error(err));
  }

  /**
   * 解析参数
   * @returns {Promise<Page>|Promise<PageIntent>|Promise<TResult2|Page>}
   */
  private parsePageIntent(): Promise<any> {
    return this.myPlugin.getPageIntent()
      .then(pageIntent => {
        console.log(pageIntent);
        if (!pageIntent.roles) {
          pageIntent.roles = this.globalService.worker;
        } else if (pageIntent.roles.includes('PDA热线管理人员')) {
          pageIntent.roles = this.globalService.manager;
        } else {
          pageIntent.roles = this.globalService.worker;
        }

        // TBD
        pageIntent.departmentAndId = `${this.globalService.department}#${this.globalService.departmentId}`;

        if (!pageIntent.account
          || !pageIntent.userName
          || !pageIntent.departmentAndId
          //|| !pageIntent.roles
          || !pageIntent.params
          || pageIntent.params.length <= 0) {
          pageIntent = MyPluginMock.pageIntent;
        }

        return AppComponentService.getExtendedInfo(pageIntent.extendedInfo)
          .then(extendedInfo => {
            if (extendedInfo
              && extendedInfo.hasOwnProperty("network")
              && extendedInfo['network'] !== undefined
              && extendedInfo['network'] !== null) {
              if (extendedInfo.hasOwnProperty('pushMessage')) {
                this.globalService.needDownloadTasks = extendedInfo['pushMessage'];
              }
              return this.configService.setIsOuterNet(extendedInfo['network']);
            } else {
              return Promise.resolve(true);
            }
          })
          .then(() => this.setUserDetailInfo(pageIntent))
          .then(result => {
            let params: string[] = pageIntent.params.split('#');
            let page: any;
            switch (params[0]) {
              case 'MyHistory':
                page = MyHistory;
                break;
              case 'MapPage':
                page = MapPage;
                break;
              case 'SearchPage':
                page = SearchPage;
                break;
              case 'StationWorkPage':
                page = StationWorkPage;
                break;
              case 'NewsPage':
                page = NewsPage;
                break;
              case 'MaterialsPage':
                page = MaterialsPage;
                break;
              case 'SettingPage':
                page = SettingPage;
                break;
              case 'MyWorkPage':
              default:
                page = MyWorkPage;
                break;
            }
            return Promise.resolve(page);
          });
      });
  }

  /**
   *
   * @param pageIntent
   * @returns {Promise<TResult|boolean>}
   */
  private setUserDetailInfo(pageIntent: PageIntent): Promise<any> {
    debugger;
    return this.configService.getSysRegion()
      .catch(error => console.error(error))
      .then(region => {
        if (region && region === ConfigService.fushunRegion) {
          return this.globalService.getUserDetailInfo()
            .then(userDetailInfo => {
              // userId passed from main shell is not same as saved id
              // it will be changed in future
              //pageIntent.userId = userDetailInfo.userId;
              if (pageIntent.account === userDetailInfo.account
                && pageIntent.userId === userDetailInfo.userId
                && pageIntent.userName === userDetailInfo.userName) {
                return Promise.resolve(true);
              } else {
                return Promise.reject('different user');
              }
            })
            .catch(error => {
              console.error(error);
              return this.dataService.doLogin({
                userName: pageIntent.account,
                password: pageIntent.password,
                role: pageIntent.roles
              }).then(userResult => this.globalService.saveUserDetailInfo({
                account: pageIntent.account,
                password: pageIntent.password,
                userId: userResult.userId,
                userName: pageIntent.userName,
                roles: pageIntent.roles,
                department: userResult.Department,
                departmentId: this.globalService.departmentValidId
              })).catch(error => {
                console.error(error);
                this.globalService.account = pageIntent.account;
                this.globalService.password = pageIntent.password;
                this.globalService.userId = pageIntent.userId;
                this.globalService.userName = pageIntent.userName;
                this.globalService.isWorker = pageIntent.roles === this.globalService.worker;
              });
            });
        } else {
          let departmentAndId: string[] = pageIntent.departmentAndId.split('#');
          let department: string = departmentAndId[0];
          let departmentId: number = Number.parseInt(departmentAndId[1]);
          return this.globalService.saveUserDetailInfo({
            account: pageIntent.account,
            password: pageIntent.password,
            userId: pageIntent.userId,
            userName: pageIntent.userName,
            roles: pageIntent.roles,
            department: department,
            departmentId: departmentId
          }).catch(error => {
            console.error(error);
            this.globalService.account = pageIntent.account;
            this.globalService.password = pageIntent.password;
            this.globalService.userId = pageIntent.userId;
            this.globalService.userName = pageIntent.userName;
            this.globalService.isWorker = pageIntent.roles === this.globalService.worker;
          });
        }
      });
  }

  private static getExtendedInfo(extendedInfo: string): Promise<any> {
    let info: any;
    try {
      if (extendedInfo) {
        info = JSON.parse(extendedInfo);
      }
    } catch (e) {
      console.error(e);
    }

    return Promise.resolve(info);
  }
}
