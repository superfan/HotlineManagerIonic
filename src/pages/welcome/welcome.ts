import {Component} from '@angular/core';
import {LoadingController, NavController, Platform, ViewController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {FileSevice} from "../../providers/FileSevice";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})

export class WelcomePage {

  version = '1.1.0';

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              private viewCtrl: ViewController,
              public platform: Platform,
              public fileSevice: FileSevice) {
    viewCtrl.didEnter.subscribe(() => this.onDidEnter());
  }

  /**
   * 进入页面回调
   */
  onDidEnter() {
    //判断是否是安卓平台
    if (this.platform.is('android')) {
      let loading = this.loadingCtrl.create({
        content: '加载中...',
        dismissOnPageChange: true
      })
      loading.present();
      // this.fileSevice.downloadFile()
      //   .then(() => console.log("success"))
      //   .catch(err => console.log("error" + err));
      this.fileSevice.createDirs()
        .then(() => {
          loading.dismiss();
          this.navCtrl.push(LoginPage, {});
          console.log('jump success');
        })
        .catch(err => console.log(err));
    } else {
      this.navCtrl.push(LoginPage, {});
    }
  }
}
