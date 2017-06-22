import {Component} from '@angular/core';
import {LoadingController, NavController, Platform, ViewController, Config} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {FileService} from "../../providers/FileService";
import {AppVersion} from "@ionic-native/app-version";
import {Http} from "@angular/http";
import {ConfigService} from "../../providers/ConfigService";

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
              public fileService: FileService,
              private appVersion: AppVersion,
              private http: Http,
              private configService: ConfigService,
              private config: Config) {
    viewCtrl.didEnter.subscribe(() => this.onDidEnter());
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
    if (!this.config.get('isChrome')) {
      console.log("platform is on android");
      this.fileService.createDirs()
        .then(() => {
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
  getVersionCode() {
    this.appVersion.getVersionCode()
      .then(result => {
        this.onGetVersionCode(result);
      })
      .catch(err => {
        console.log("getVersionCode:" + err);
      });
  }

  /**
   * 获取服务器地址
   * @param data
   */
  onGetVersionCode(data) {
    this.appVersionCode = data.toString();
    this.configService.getServerBaseUri()
      .then(result => {
        console.log(result);
        this.checkVersion(result);
      })
      .catch(err => {
        console.log(err)
      });
  }


  /**
   * 访问服务器检查version
   * @param result
   */
  checkVersion(result: string) {
    let serveruri = result + "wap/v1/system/update/app/check?version=" + this.appVersionCode;
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
      return this.fileService.downloadFile(downloadUrl);
    }
  }
}
