import {Injectable} from "@angular/core";
import {Platform} from "ionic-angular";
import {AndroidPermissions} from "@ionic-native/android-permissions";
import {GlobalService} from "../../providers/GlobalService";
import {FileService} from "../../providers/FileService";
import {MyPlugin, PageIntent} from "@ionic-native/my-plugin";
import {Page} from "ionic-angular/navigation/nav-util";
import {MyHistory} from "../history/myhistory";
import {MapPage} from "../map/map";
import {SearchPage} from "../search/search";
import {StationWorkPage} from "../stationwork/stationwork";
import {NewsPage} from "../news/news";
import {MaterialsPage} from "../materials/materials";
import {SettingPage} from "../setting/setting";
import {MyWorkPage} from "../mywork/mywork";
import {UserDetailInfo} from "../../model/UserDetailInfo";

class MyPluginMock extends MyPlugin {
  getPageIntent(): Promise<PageIntent> {
    let pageIntent: PageIntent = {
      account: 'ss1',
      userId: 3,
      userName: 'ss1',
      departmentAndId: '上水#1',
      role: 'work',
      params: 'MyHistory'

    };
    return Promise.resolve(pageIntent);
  }

  getLocation(): Promise<any> {
    return Promise.reject('err');
  }
}

@Injectable()
export class LauncherService {
  constructor(private platform: Platform,
              private androidPermissions: AndroidPermissions,
              private globalService: GlobalService,
              private fileService: FileService,
              private myPlugin: MyPlugin) {
  }

  /**
   *
   * @returns {Promise<any>}
   */
  public getPage(): Promise<any> {
    if (this.globalService.isChrome) {
      this.myPlugin = new MyPluginMock();
    }

    let promise: Promise<any> = this.platform.ready();
    if (this.globalService.isChrome) {
      promise.then(readySource => this.checkPage());
    } else {
      promise
        .then(readySource => this.checkPermissions())
        .then(result => this.fileService.createDirRoot())
        .then(result => this.checkPage())
    }
    return promise;
  }

  /**
   * 检查权限
   * @returns {Promise<Promise<any>|void>|Promise<void>|Promise<TResult>|Promise<any>}
   */
  private checkPermissions(): Promise<any> {
    return this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA)
      .then(success => console.log('Permission granted'),
        err => this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.CAMERA));
  }

  /**
   *
   * @returns {Promise<Page>|Promise<PageIntent>|Promise<TResult2|Page>}
   */
  private checkPage(): Promise<any> {
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
            let page: Page;
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
