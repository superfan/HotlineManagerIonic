import {Component, OnInit} from '@angular/core';
import {LoadingController, NavController, ToastController, ViewController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {FileService} from "../../providers/FileService";
import {AppVersion} from "@ionic-native/app-version";
import {GlobalService} from "../../providers/GlobalService";
import {DataService} from "../../providers/DataService";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})

export class WelcomePage implements OnInit {
  private readonly tag: string = "[WelcomePage]";
  public loading;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              private viewCtrl: ViewController,
              public fileService: FileService,
              private appVersion: AppVersion,
              private toastCtrl: ToastController,
              private globalService: GlobalService,
              public dataService: DataService) {
  }

  ngOnInit() {
    this.viewCtrl.didEnter.subscribe(() => this.onDidEnter());
  }

  /**
   * 进入页面回调
   */
  onDidEnter() {
    this.loading = this.loadingCtrl.create({
      content: '加载中...',
      dismissOnPageChange: true
    });
    this.loading.present();

    //判断是否是安卓平台
    if (!this.globalService.isChrome) {
      console.log("platform is on android");
      this.fileService.createDirRoot()
        .then((result) => {
          console.log(this.tag + 'onDidEnter:' + result);
          this.getVersionCode();
        })
        .catch(err => {
          console.log("initial files failed" + err);
        })
    } else {
      console.log("platform is on chrome");
      this.loading.dismiss();
      this.navCtrl.push(LoginPage, {});
    }
  }

  /**
   * 获得版本号
   */
  private getVersionCode() {
    this.appVersion.getVersionCode()
      .then(versionCode => {
        this.checkUpdate(versionCode);
      })
      .catch(err => {
        console.log("getVersionCode:" + err);
      });
  }

  /**
   * 检查更新(app和data)
   * @param version
   */
  private checkUpdate(version: number) {
    Promise.all([this.checkAppVersion(version), this.checkDataVersion(version)])
      .then(result => {
        console.log(this.tag + 'checkUpdate:' + result);
        this.jump2Login();
      })
      .catch(error => {
        console.log(this.tag + 'checkUpdate:' + error);
      })
  }

  /**
   * 检查app更新
   * @param version
   * @returns {Promise<TResult|TResult2|TResult1>}
   */
  private checkAppVersion(version: number): Promise<string> {
    return new Promise((resolve, reject) => {
      this.dataService.checkAppVersion(version)
        .then(appVersion => {
          if (appVersion && appVersion.url) {
            resolve(this.fileService.downloadFile(false, appVersion.url));
          } else {
            resolve('no update app');
          }
        })
        .catch(error => {
          let toast = this.toastCtrl.create({
            duration: 2000,
            position: 'bottom',
            message: error
          });
          toast.present();
          resolve(error);
        })
    })
  }

  /**
   * 检查数据包更新
   * @param version
   * @returns {Promise<TResult|TResult2|TResult1>}
   */
  private checkDataVersion(version: number): Promise<string> {
    return new Promise((resolve, reject) => {
      this.dataService.checkDataVersion(version)
        .then(dataVersion => {
          if (dataVersion && dataVersion.url) {
            resolve(this.fileService.downloadFile(true, dataVersion.url));
          } else {
            resolve('no update data');
          }
        })
        .catch(error => {
          let toast = this.toastCtrl.create({
            duration: 2000,
            position: 'bottom',
            message: error
          });
          toast.present();
          resolve(error);
        })
    })
  }

  /**
   * 跳转至登录界面
   */
  private jump2Login() {
    this.loading.dismiss();
    this.navCtrl.push(LoginPage, {});
  }
}
