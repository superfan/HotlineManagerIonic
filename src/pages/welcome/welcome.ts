import {Component} from '@angular/core';
import {LoadingController, NavController, ViewController} from 'ionic-angular';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})

export class WelcomePage {

  version = '1.1.0';

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              private viewCtrl: ViewController) {
    viewCtrl.didEnter.subscribe(() => this.onDidEnter());
  }

  /**
   * 进入页面回调
   */
  onDidEnter() {
    let loading = this.loadingCtrl.create({
      content: '加载中...',
      dismissOnPageChange: true
    })
    loading.present();
    setTimeout(() => {
      this.navCtrl.push(LoginPage, {})
    }, 3000);
  }
}
