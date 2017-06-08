import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {MainPage} from "../main/main";

export class User {
  constructor(public username: string,
              public password: string,
              public type: string) {
  }
}

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {

  user = new User('zj', '1111', 'outside');

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {
  }

  /**
   * 登录
   */
  loginClick() {
    let toast = this.toastCtrl.create({
      message: '输入账号' + this.user.username + '输入密码' + this.user.password
      + '选择类型' + this.user.type,
      duration: 2000
    });
    toast.present();

    this.navCtrl.push(MainPage, {})
  }
}
