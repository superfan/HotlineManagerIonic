import {Injectable} from "@angular/core";
import {AndroidPermissions} from "@ionic-native/android-permissions";
import {GlobalService} from "../providers/GlobalService";
import {FileService} from "../providers/FileService";
import {MyPlugin} from "@ionic-native/my-plugin";
import {MyHistory} from "../pages/history/myhistory";
import {MapPage} from "../pages/map/map";
import {SearchPage} from "../pages/search/search";
import {StationWorkPage} from "../pages/stationwork/stationwork";
import {NewsPage} from "../pages/news/news";
import {MaterialsPage} from "../pages/materials/materials";
import {SettingPage} from "../pages/setting/setting";
import {MyWorkPage} from "../pages/mywork/mywork";
import {UserDetailInfo} from "../model/UserDetailInfo";
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
        .then(result => this.dataService.downloadWords())
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

    let promise: Promise<any>;
    for (let permission of permissions) {
      if (!permission) {
        continue;
      }

      if (promise) {
        promise.then(() => this.androidPermissions.checkPermission(permission))
          .then(success => console.log('Permission granted'),
            err => this.androidPermissions.requestPermission(permission))
          .catch(error => console.error(error));
      } else {
        promise =
          this.androidPermissions.checkPermission(permission)
            .then(success => console.log('Permission granted'),
              err => this.androidPermissions.requestPermission(permission))
            .catch(error => console.error(error));
      }
    }

    // return this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA)
    //   .then(success => console.log('Permission granted'),
    //     err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.CAMERA));

    return promise;
  }

  /**
   * 解析参数
   * @returns {Promise<Page>|Promise<PageIntent>|Promise<TResult2|Page>}
   */
  private parsePageIntent(): Promise<any> {
    return this.myPlugin.getPageIntent()
      .then(pageIntent => {
        if (!pageIntent.account
          || !pageIntent.userName
          || !pageIntent.departmentAndId
          || !pageIntent.role
          || !pageIntent.params
          || pageIntent.params.length <= 0) {
          return Promise.reject('params of the page are error');
        }

        let userDetailInfo: UserDetailInfo = {
          account: pageIntent.account,
          userId: pageIntent.userId,
          userName: pageIntent.userName,
          role: pageIntent.role,
          department: '',
          departmentId: 0
        };
        let departmentAndId: string[] = pageIntent.departmentAndId.split('#');
        if (departmentAndId[0]) {
          userDetailInfo.department = departmentAndId[0]
        }

        userDetailInfo.departmentId = GlobalService.string2Int(departmentAndId[1]);
        return this.globalService.saveUserDetailInfo(userDetailInfo)
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
}
