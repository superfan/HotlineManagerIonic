import {Component} from '@angular/core';
import {LoadingController, NavController, Platform, ViewController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {FileSevice} from "../../providers/FileSevice";
import {AppVersion} from "@ionic-native/app-version";
import {Http} from "@angular/http";
import {ConfigSevice} from "../../providers/ConfigSevice";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})

export class WelcomePage {

  appVersionCode: string;
  loading;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              private viewCtrl: ViewController,
              public platform: Platform,
              public fileSevice: FileSevice,
              private appVersion: AppVersion,
              private http: Http,
              private configService: ConfigSevice) {
    viewCtrl.didEnter.subscribe(() => this.onDidEnter());
  }

  /**
   * 进入页面回调
   */
  onDidEnter() {
    this.loading = this.loadingCtrl.create({
      content: '加载中...',
      dismissOnPageChange: true
    })
    this.loading.present();

    //判断是否是安卓平台
    if (this.platform.is('android')) {
      this.appVersion.getVersionCode()
        .then(result => {
          this.onGetVersionCode(result);
        });
    } else {
      this.loading.dismiss();
      this.navCtrl.push(LoginPage, {});
    }
  }

  /**
   * 获取版本号
   * @param data
   */
  onGetVersionCode(data) {
    this.appVersionCode = data.toString();
    console.log(data.toString());
    this.fileSevice.createDirs()
      .then(() => {
        this.getServerUri();
      });
  }

  /**
   * 获得服务器地址
   */
  getServerUri() {
    this.configService.getServerBaseUri()
      .then(result => {
        this.checkVersion(result);
      });
  }

  /**
   * 检查版本
   * @param result
   */
  checkVersion(result) {
    let serveruri = result.server_outer_baseuri + "wap/v1/system/update/app/check?version=" + this.appVersionCode;
    console.log("welcome: serveruri:" + serveruri);
    this.http.get(serveruri)
      .subscribe(data => {
          this.updateApp(data.json())
            .then(() => {
              this.loading.dismiss();
              this.navCtrl.push(LoginPage, {});
              console.log("go go go success");
            }).catch(err => console.log(err));
        }
        , error => {
          console.log(error);
        })
  }

  /**
   * 更新App
   * @param result
   * @returns {Promise<TResult2|TResult1>}
   */
  updateApp(result) {
    let downloadUrl;
    if (result.Code == 0 && result.StatusCode == 200 && result.Data != null) {
      downloadUrl = result.Data.url;
      console.log("downloadZipUrl:" + downloadUrl);
      return this.fileSevice.downloadFile(downloadUrl);
    }
  }
}
