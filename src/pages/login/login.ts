import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {MainPage} from "../main/main";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Headers, Http} from "@angular/http";

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
              private http: Http) {

    this.loginForm = this.formBuilder.group({
      'LoginID': ['zj', Validators.compose([Validators.minLength(2), Validators.maxLength(11),
        Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      'LoginPwd': ['1111', Validators.compose([Validators.required, Validators.minLength(4)])],
      'LoginSelect': ['outside', Validators.compose([Validators.required])]
    });

    // let storedUserName = storageSevice.read<string>("userName");
    // let storedPassword = storageSevice.read<string>("password");
    // if (storedUserName != null && storedPassword != null) {
    //   this.user.username = storedUserName;
    //   this.user.password = storedPassword;
    // }
  }

  loginClick(user, _event) {
    this.user.username = this.loginForm.controls['LoginID'].value;
    this.user.password = this.loginForm.controls['LoginPwd'].value;
    this.user.type = this.loginForm.controls['LoginSelect'].value;
    console.log("username:" + this.user.username);
    console.log("password:" + this.user.password);
    console.log("type:" + this.user.type);

    if (this.user.type == null
      || this.user.type == '') {
      console.log("没有选择人员");
      return;
    }

    let url = "http://1.24.190.190:6001/wap/v1/auth/" + this.user.username + "/" +
      this.user.password + "?appIdentity=cc";
    console.log(url);
    // let url = "http://1.24.190.190:6001/wap/v1/auth/admin/0000?appIdentity=cc";
    let deviceId = 'cd8a8f6441b3e3d8';
    let headers = new Headers({'X-Access-Token': '', 'X-Device-ID': deviceId});
    this.http.get(url, {headers: headers})
      .subscribe(data => {
        this.onSuccessCallBack(data.json());
      }, error => {
        this.onErrorCallBack(error);
      });

    // this.configService.getServerBaseUri()
    //   .then(result => {
    //     this.callback(result);
    //   });
    // console.log(uri);
    // let body = '{"account":"3h_test1","appIdentify":"plt","pwd":"1111"}';
    // this.http.post(url, {"account": "3h_test1", "appIdentify": "plt", "pwd": "1111"},
    //       {"headers": headers})
    //   .subscribe(data => {
    //     console.log(data.json());
    //   }, error => {
    //     console.log(error);
    //   });
    // this.storageSevice.write("userName", this.user.username);
    // console.log(this.user.username);
    // this.storageSevice.write("password", this.user.password);
    // console.log(this.user.password);
    // this.navCtrl.push(MainPage, {})
    // }
    //
    // callback(result) {
    //   console.log(result.server_inner_baseuri);
  }

  /**
   * 成功回调
   * @param data
   */
  onSuccessCallBack(data) {
    console.log(data.Data.userId);
    // console.log("access-token:" + );
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
