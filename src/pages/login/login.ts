import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {MainPage} from "../main/main";
import {Http, RequestOptions} from "@angular/http";
import {StorageService} from "../../providers/StorageService";
import {Observable} from "rxjs/Observable";
import {ConfigSevice} from "../../providers/ConfigSevice";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
  // username: any;
  // password: any;

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public storageSevice: StorageService,
              private configService: ConfigSevice,
              private http: Http,
              private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      'LoginID': ['zj', Validators.compose([Validators.minLength(2), Validators.maxLength(11), Validators.required,Validators.pattern('[a-zA-Z ]*')])],
      'LoginPwd': ['1111', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    // this.username = this.loginForm.controls['username'];
    // this.password = this.loginForm.controls['password'];
    // this.loginForm = new FormGroup({
    //   LoginID: new FormControl('zj'),
    //   LoginPwd:new FormControl('1111')
    // });

    // let storedUserName = storageSevice.read<string>("userName");
    // let storedPassword = storageSevice.read<string>("password");
    // if (storedUserName != null && storedPassword != null) {
    //   this.user.username = storedUserName;
    //   this.user.password = storedPassword;
    // }
  }

  login(value) {
    // if (value.username == "手机号码" && value.password == 123456) {
    //   this.storage.setUser(value);
    //   this.navCtrl.push(TabsPage);
    // } else {
    //   console.log("登录失败");
    // }

  }

  /**
   * 登录
   */
  loginClick() {
    // let toast = this.toastCtrl.create({
    //   message: '输入账号' + this.user.username + '输入密码' + this.user.password
    //   + '选择类型' + this.user.type,
    //   duration: 2000
    // });
    // let test = JSON.stringify({code: "mk200"});
    // let url = "http://210.13.106.207:8021/MobileApi/wap/v2/mobile/auth";
    // let headers = new Headers({'Content-Type': 'application/json'});

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
    // this.http.get("http://210.13.106.207:8021/MobileApi/wap/v2/mobile/user/4292")
    //   .subscribe(data => {
    //     console.log(data.json());
    //   }, error => {
    //     console.log(error)
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
    this.navCtrl.push(MainPage, {})
  }
}
