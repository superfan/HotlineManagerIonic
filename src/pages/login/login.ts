import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {MainPage} from "../main/main";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Headers, Http} from "@angular/http";
import {AppPreferences} from "@ionic-native/app-preferences";
import {ConfigService} from "../../providers/ConfigService";

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
  loginForm: FormGroup;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              private formBuilder: FormBuilder,
              private configService: ConfigService,
              private http: Http,
              private appPreferences: AppPreferences) {

    this.loginForm = this.formBuilder.group({
      'LoginID': ['', Validators.compose([Validators.minLength(2), Validators.maxLength(11),
        Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      'LoginPwd': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'LoginSelect': [this.user.type, Validators.compose([Validators.required])]
    });
    this.getPreferences();
  }

  /**
   * 获得app preferences
   */
  getPreferences() {
    this.appPreferences.fetch("userinfo", 'username')
      .then(result => {
        this.user.username = result.toString();
        this.loginForm.patchValue({LoginID: this.user.username});
      }).catch(err => {
      console.log(err);
    });

    this.appPreferences.fetch("userinfo", 'pwd')
      .then(result => {
        this.user.password = result.toString();
        this.loginForm.patchValue({LoginPwd: result.toString()});
      }).catch(err => {
      console.log(err);
    })
  }


  loginClick(user) {
    this.user.type = user['LoginSelect'];

    if (this.user.type == null
      || this.user.type == '') {
      console.log("没有选择人员");
      return;
    }

    this.configService.getServerBaseUri()
      .then(result => {
        this.user.username = user["LoginID"];
        this.user.password = user['LoginPwd'];
        this.doLogin(result, user["LoginID"], user['LoginPwd']);
      })
      .catch(err => {
        console.log(err);
      })
  }

  /**
   * 登录操作
   * @param baseurl
   * @param userName
   * @param password
   */
  doLogin(baseurl: string, userName: string, password: string) {
    let url = baseurl + "wap/v1/auth/" + userName + "/" + password + "?appIdentity=cc";
    console.log(url);
    let deviceId = 'cd8a8f6441b3e3d8';
    let headers = new Headers({'X-Access-Token': '', 'X-Device-ID': deviceId});
    this.http.get(url, {headers: headers})
      .subscribe(data => {
        this.onSuccessCallBack(data.json());
      }, error => {
        this.onErrorCallBack(error);
      });
  }

  /**
   * 成功回调
   * @param data
   */
  onSuccessCallBack(data) {
    console.log(data.Data.userId);
    // console.log("access-token:" + );
    this.appPreferences.store('userinfo', 'username', this.user.username);
    this.appPreferences.store('userinfo', 'pwd', this.user.password);
    this.navCtrl.push(MainPage, {})
  }

  /**
   * 失败回调
   * @param error
   */
  onErrorCallBack(error) {
    console.log(error.json().Message);
    let alert = this.alertCtrl.create({
      title: '提示：',
      subTitle: error.json().Message,
      buttons: ['确定']
    });
    alert.present();
  }
}
