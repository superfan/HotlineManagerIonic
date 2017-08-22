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

@Injectable()
export class AppComponentService {
  constructor(private androidPermissions: AndroidPermissions,
              private globalService: GlobalService,
              private fileService: FileService,
              private dataService: DataService,
              private myPlugin: MyPlugin) {
  }

  /**
   * 初始化
   * @returns {Promise<any>}
   */
  public init(): Promise<any> {
    if (this.globalService.isChrome) {
      this.myPlugin = this.globalService.getMyPluginMock();
      return this.dataService.init()
        .then(result => this.dataService.downloadWords())
        .then(result => this.parsePageIntent());
    } else {
      return this.checkPermissions()
        .then(result => this.fileService.createDirRoot())
        .then(result => this.dataService.init())
        .then(result => this.dataService.checkIfDownloadWords())
        .then(result=> this.dataService.downloadMaterials())
        .then(result => this.parsePageIntent());
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
        if (!pageIntent.roles) {
          pageIntent.roles = this.globalService.worker;
        }

        if (!pageIntent.account
          || !pageIntent.userName
          || !pageIntent.departmentAndId
          //|| !pageIntent.roles
          || !pageIntent.params
          || pageIntent.params.length <= 0) {
          pageIntent = MyPluginMock.pageIntent;
        }

        return this.setUserDetailInfo(pageIntent)
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
    return this.globalService.getUserDetailInfo()
      .then(userDetailInfo => {
        // userId passed from main shell is not same as saved id
        // it will be changed in future
        pageIntent.userId = userDetailInfo.userId;

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
          userId: userResult.userId,
          userName: pageIntent.userName,
          roles: pageIntent.roles,
          department: userResult.Department,
          departmentId: 0
        }));
      });
  }
}
