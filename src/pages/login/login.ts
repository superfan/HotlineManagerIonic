import {Component} from '@angular/core';
import {AlertController, NavController, ToastController} from 'ionic-angular';
import {MainPage} from "../main/main";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Headers, Http} from "@angular/http";
import {AppPreferences} from "@ionic-native/app-preferences";
import {ConfigService} from "../../providers/ConfigService";
import {Network} from "@ionic-native/network";
import {GlobalService} from "../../providers/GlobalService";

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

  public user = new User('zj', '1111', 'outside');
  public loginForm: FormGroup;
  public successCode: number = 0;
  public statusCode: number = 200;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              private formBuilder: FormBuilder,
              private configService: ConfigService,
              private http: Http,
              private appPreferences: AppPreferences,
              private network: Network,
              private toastCtrl: ToastController,
              public globalService: GlobalService) {

    this.loginForm = this.formBuilder.group({
      'LoginID': ['admin', Validators.compose([Validators.minLength(2), Validators.maxLength(11),
        Validators.required, Validators.pattern('[0-9a-zA-Z ]*')])],
      'LoginPwd': ['0000', Validators.compose([Validators.required, Validators.minLength(4)])],
      'LoginSelect': [this.user.type, Validators.compose([Validators.required])]
    });
    this.getPreferences();
  }

  /**
   * 获得app preferences
   */
  getPreferences() {
    //用户名
    this.appPreferences.fetch("userinfo", 'username')
      .then(result => {
        this.user.username = result.toString();
        this.loginForm.patchValue({LoginID: this.user.username});
      }).catch(err => {
      console.log(err);
    });
    //密码
    this.appPreferences.fetch("userinfo", 'pwd')
      .then(result => {
        this.user.password = result.toString();
        this.loginForm.patchValue({LoginPwd: result.toString()});
      }).catch(err => {
      console.log(err);
    });
    //角色
    this.appPreferences.fetch("userinfo", 'role')
      .then(result => {
        console.log(result.toString());
      }).catch(err => {
      console.log(err);
    })
  }

  /**
   * 登录事件
   * @param user
   */
  loginClick(user) {
    this.user.type = user['LoginSelect'];

    if (this.user.type == null
      || this.user.type == '') {
      console.log("没有选择人员");
      return;
    }

    //判断网络
    if (this.network.type == 'none' || this.network.type == 'unknow') {
      //有网就连网登录，无网判断本地是否有存储信息,有则离线登录
      let toastInfo: string;
      let toast = this.toastCtrl.create({
        duration: 2000,
        position: 'bottom'
      });
      if (user['LoginID'] == this.user.username && user['LoginPwd'] == this.user.password) {
        toastInfo = '离线登录';
        console.log(toastInfo);
        toast.setMessage(toastInfo);
        this.navCtrl.push(MainPage, {})
      } else {
        toastInfo = '账号和密码未保存，请连网认证';
        console.log(toastInfo);
        toast.setMessage(toastInfo);
      }
      toast.present();
      return;
    }

    //在线登录
    this.configService.getServerBaseUri()
      .then(result => {
        this.user.username = user["LoginID"];
        this.user.password = user['LoginPwd'];
        this.doLogin(result, this.user.username, this.user.password);
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
    this.appPreferences.store('userinfo', 'userid', data.Data.userId);
    this.globalService.userName = this.user.username;
    this.globalService.userId = data.Data.userId;
    // this.globalService.userId = data.Data.userId;
    this.configService.getServerBaseUri()
      .then(result => {
        this.doGetUserInfo(result, data.Data.userId);
        console.log(result);
      })

  }

  /**
   * 操作获取用户信息
   * @param result
   * @param userId
   */
  doGetUserInfo(result: string, userId: string) {
    let url = result + "wap/v1/mobile/resource/user/" + userId;
    console.log(url);
    let deviceId = 'cd8a8f6441b3e3d8';
    let headers = new Headers({'X-Access-Token': '', 'X-Device-ID': deviceId});
    this.http.get(url, {headers: headers}).subscribe(data => {
      this.onGetUserInfo(data);
    }, error => {
      console.log(error);
    });
  }

  /**
   * 获得用户信息
   * @param data
   */
  onGetUserInfo(data) {
    if (data.json().Code == this.successCode && data.json().StatusCode == this.statusCode) {
      console.log(data.json().Data);
      let arrRoles = data.json().Data.roles;
      this.appPreferences.store('userinfo', 'role', arrRoles);
      console.log(arrRoles);
      let toast = this.toastCtrl.create({
        duration: 2000,
        message: '在线登录成功',
        position: 'bottom',
      });
      toast.present();
      this.navCtrl.push(MainPage, {})
    }
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
