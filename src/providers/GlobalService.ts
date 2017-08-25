import {Injectable} from '@angular/core';
import {ToastController, LoadingController, Loading} from "ionic-angular";
import {TaskEx} from "../model/Task";
import {UserDetailInfo} from "../model/UserDetailInfo";
import {Storage} from '@ionic/storage';
import {MyPlugin, PageIntent, MyLocation} from "@ionic-native/my-plugin";
import {Location, LocationEx} from "../model/Location";
import {History} from "../model/History";

export interface MainUpdateEvent {
  type: 'myWorkCount' | 'newsCount' | 'stationWorkCount' | 'gridStyle';
  count: number;
  gridStyle: boolean;
}

export interface MyWorkUpdateEvent {
  type: 'reply' | 'cancel' | 'reject',
  taskEx?: TaskEx;
  history?: History;
}

export class MyPluginMock extends MyPlugin {
  public static pageIntent: PageIntent = {
    account: 'ss1',
    password: '0000',
    userId: 3,
    userName: 'ss1',
    departmentAndId: '上水#1',
    roles: 'worker',
    params: 'MyWorkPage',
    accessToken: '',
    extendedInfo: ''
  };

  public static myLocation: MyLocation = {
    lng: 121.524808,
    lat: 31.280823
  };

  getPageIntent(): Promise<PageIntent> {
    return Promise.resolve(MyPluginMock.pageIntent);
  }

  getLocation(): Promise<any> {
    return Promise.resolve(MyPluginMock.myLocation);
  }
}

@Injectable()
export class GlobalService {
  readonly isChrome: boolean = false;
  readonly httpCode: number = 0;
  readonly httpSuccessStatusCode: number = 200;
  readonly taskSinceDefault: number = 0;
  readonly taskCountDefault10: number = 10;
  readonly taskCountDefault100: number = 100;
  readonly uploadedFlagForLocal: number = 0;
  readonly uploadedFlagForUploading: number = 1;
  readonly uploadedFlagForUploaded: number = 2;
  account: string = "admin";
  userName: string = "admin";
  userId: number = 1;
  department: string = "上海三高";
  departmentId: number = 1;
  isWorker: boolean = false;//是否是外勤人员
  readonly mainUpdateEvent: string = "main:update";
  readonly myWorkDownloadFinishEvent: string = "mywork:download:finish"; // task & detail
  readonly historyUploadFinishEvent: string = "history:upload:finish"; // history & media
  readonly myWorkUpdateEvent: string = "mywork:update";
  readonly stationWorkUpdateEvent: string = "stationwork:update";
  readonly materialsUpdateEvent: string = "addMaterials:update";
  readonly recordAudioFinishEvent: string = "record:audio:finish";
  private loading: Loading;
  private readonly userDetailInfoStorageName: string = 'userDetailInfo';
  readonly locationType: string = 'bd09ll';
  private myPluginMock: MyPluginMock;
  readonly worker: string = 'worker';
  readonly photoSuffix: string = '.jpg';
  readonly audioSuffix: string = '.mp3';

  constructor(private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private storage: Storage,
              private myPlugin: MyPlugin) {
  }

  public getMyPluginMock(): MyPluginMock {
    return this.myPluginMock ? this.myPluginMock : this.myPluginMock = new MyPluginMock();
  }

  public saveUserDetailInfo(userDetailInfo: UserDetailInfo): Promise<any> {
    return userDetailInfo && userDetailInfo.account && userDetailInfo.userName && userDetailInfo.roles && userDetailInfo.department
      ? this.storage.set(this.userDetailInfoStorageName, JSON.stringify(userDetailInfo))
        .then(result => {
          this.account = userDetailInfo.account;
          this.userId = userDetailInfo.userId;
          this.userName = userDetailInfo.userName;
          this.isWorker = userDetailInfo.roles === this.worker;
          this.department = userDetailInfo.department;
          this.departmentId = userDetailInfo.departmentId;
          return Promise.resolve(result);
        })
      : Promise.reject('userDetailInfo is error');
  }

  public getUserDetailInfo(): Promise<any> {
    return this.storage.get(this.userDetailInfoStorageName)
      .then(userDetailInfo => {
        if (userDetailInfo) {
          userDetailInfo = JSON.parse(userDetailInfo);
        }

        if (userDetailInfo
          && userDetailInfo.account
          && userDetailInfo.userName
          && userDetailInfo.roles
          && userDetailInfo.department) {
          this.account = userDetailInfo.account;
          this.userId = userDetailInfo.userId;
          this.userName = userDetailInfo.userName;
          this.isWorker = userDetailInfo.roles === this.worker;
          this.department = userDetailInfo.department;
          this.departmentId = userDetailInfo.departmentId;
          return userDetailInfo;
        } else {
          return Promise.reject('userDetailInfo is not valid');
        }
      });
  }

  public getLocationEx(): Promise<LocationEx> {
    if (this.isChrome) {
      this.myPlugin = this.getMyPluginMock();
    }

    return this.myPlugin.getLocation()
      .then(location => ({
        type: this.locationType,
        lng: location.lng,
        lat: location.lat
      }))
      .catch(error => {
        console.error(error);
        return this.myPluginMock.getLocation()
          .then(location => ({
            type: this.locationType,
            lng: location.lng,
            lat: location.lat
          }));
      });
  }

  public getLocation(): Promise<Location> {
    if (this.isChrome) {
      this.myPlugin = this.getMyPluginMock();
    }

    return this.myPlugin.getLocation()
      .then(location => ({
        type: this.locationType,
        lng: location.lng.toString(),
        lat: location.lat.toString()
      }))
      .catch(error => {
        console.error(error);
        return this.myPluginMock.getLocation()
          .then(location => ({
            type: this.locationType,
            lng: location.lng.toString(),
            lat: location.lat.toString()
          }));
      });
  }

  /**
   * 转换时间格式
   * @param date
   * @returns {string}
   */
  public getFormatTime(date: Date): string {
    let year = date.getFullYear().toString();
    let month = this.padLeftZero((date.getMonth() + 1).toString());
    let day = this.padLeftZero(date.getDate().toString());
    let hour = this.padLeftZero(date.getHours().toString());
    let minute = this.padLeftZero(date.getMinutes().toString());
    let second = this.padLeftZero(date.getSeconds().toString());

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }

  /**
   * toast
   * @param message
   */
  public showToast(message: string): void {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });

    toast.present(toast);
  }

  /**
   * 显示加载对话框
   * @param content
   * @param duration
   */
  public showLoading(content: string = '加载中...', duration?: number): void {
    if (this.loading) {
      this.loading.dismissAll();
    }
    this.loading = duration > 0 ? this.loadingCtrl.create({content, duration}) : this.loadingCtrl.create({content});
    this.loading.present();
  }

  /**
   * 隐藏加载对话框
   */
  public hideLoading() {
    if (this.loading) {
      this.loading.dismiss();
    }
    this.loading = undefined;
  }

  public static string2Int(value: string): number {
    try {
      return Number.parseInt(value);
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  private padLeftZero(name: string): string {
    return name.length === 1 ? "0" + name : name;
  }
}
