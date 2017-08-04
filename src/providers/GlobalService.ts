import {Injectable} from '@angular/core';
import {ToastController, LoadingController, Loading} from "ionic-angular";
import {TaskEx} from "../model/Task";

export interface MainUpdateEvent {
  type: 'myWorkCount' | 'newsCount' | 'stationWorkCount' | 'gridStyle';
  count: number;
  gridStyle: boolean;
}

export interface MyWorkUpdateEvent {
  type: 'reply' | 'cancel' | 'reject',
  taskEx?: TaskEx;
  time?: number;
}

@Injectable()
export class GlobalService {
  readonly isChrome: boolean = true;
  readonly httpCode: number = 0;
  readonly httpSuccessStatusCode: number = 200;
  readonly taskSinceDefault: number = 0;
  readonly taskCountDefault10: number = 10;
  readonly taskCountDefault100: number = 100;
  readonly uploadedFlagForLocal: number = 0;
  readonly uploadedFlagForUploading: number = 1;
  readonly uploadedFlagForUploaded: number = 2;
  userName: string = "sh3h";//"王超";
  userId: number = 1;//60;5005
  department: string = "东河营业分公司";//"滨河营业分公司";
  departmentId: number = 10;
  isWorker: boolean;//是否是外勤人员
  readonly mainUpdateEvent: string = "main:update";
  readonly myWorkDownloadFinishEvent: string = "mywork:download:finish"; // task & detail
  readonly historyUploadFinishEvent: string = "history:upload:finish"; // history & media
  readonly myWorkUpdateEvent: string = "mywork:update";
  readonly stationWorkUpdateEvent: string = "stationwork:update";
  readonly materialsUpdateEvent: string = "addMaterials:update";
  readonly recordAudioFinishEvent: string = "record:audio:finish";
  private loading: Loading;

  constructor(private toastCtrl: ToastController,
              private loadingCtrl: LoadingController) {

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
  public showLoading(content: string, duration?: number): void {
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

  private padLeftZero(name: string): string {
    return name.length === 1 ? "0" + name : name;
  }
}
