import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, ToastController} from 'ionic-angular';
import {MainPage} from "../main/main";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppPreferences} from "@ionic-native/app-preferences";
import {Network} from "@ionic-native/network";
import {GlobalService} from "../../providers/GlobalService";
import {UserInfo} from "../../model/UserInfo";
import {DataService} from "../../providers/DataService";
import {UserResult} from "../../model/UserResult";
import {Device} from "@ionic-native/device";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage implements OnInit {

  private readonly tag: string = "[LoginPage]";
  public user = new UserInfo();
  public loginForm: FormGroup;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              private formBuilder: FormBuilder,
              private appPreferences: AppPreferences,
              private network: Network,
              private toastCtrl: ToastController,
              public globalService: GlobalService,
              public dataService: DataService,
              public device: Device) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'LoginID': [this.globalService.userName, Validators.compose([Validators.minLength(2), Validators.maxLength(11),
        Validators.required, Validators.pattern('[0-9a-zA-Z ]*')])],
      'LoginPwd': ['0000', Validators.compose([Validators.required, Validators.minLength(4)])],
      'LoginSelect': ['worker', Validators.compose([Validators.required])]
    });
    if (!this.globalService.isChrome) {
      this.getPreferences();
    }
  }

  /**
   * 获得app preferences
   */
  getPreferences() {
    //用户名
    this.appPreferences.fetch("userinfo", 'username')
      .then(result => {
        this.user.userName = result.toString();
        this.loginForm.patchValue({LoginID: this.user.userName});
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
        this.user.role = result.toString();
        this.loginForm.patchValue({LoginSelect: result.toString()})
      }).catch(err => {
      console.log(err);
    })
  }

  /**
   * 登录事件
   * @param user
   */
  loginClick(user) {
    //判断网络
    if (this.network.type == 'none' || this.network.type == 'unknow') {
      //有网就连网登录，无网判断本地是否有存储信息,有则离线登录
      if (!this.globalService.isChrome) {
        let toastInfo: string;
        let toast = this.toastCtrl.create({
          duration: 2000,
          position: 'bottom'
        });
        if (user['LoginID'] == this.user.userName && user['LoginPwd'] == this.user.password) {
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
    }

    //在线登录
    this.user.userName = user['LoginID'];
    this.user.password = user['LoginPwd'];
    this.user.role = user['LoginSelect'];
    this.doLogin();
  }

  /**
   * 登录操作
   * @param baseurl
   * @param userName
   * @param password
   */
  doLogin() {
    if (this.user.userName && this.user.password) {
      this.dataService.doLogin(this.user)
        .then(userResult => {
          this.onSuccessCallBack(this.user.userName, userResult);
        })
        .catch(err => {
          this.onErrorCallBack(err);
        });
    }
  }

  /**
   * 成功回调
   * @param data
   */
  onSuccessCallBack(userName: string, userResult: UserResult) {
    this.globalService.userName = userName;
    this.globalService.userId = userResult.userId;
    this.globalService.department = userResult.Department;
    this.globalService.isWorker = (this.user.role == 'worker');
    //外勤
    if (this.globalService.isWorker) {
      this.dataService.getWorkInfo()
        .then(userWorkInfo => {
          console.log(userWorkInfo);
          this.onSuccessLogin();
        })
        .catch(err => {
          this.onErrorCallBack(err);
        });
      return;
    }

    //管理
    this.dataService.getManageInfo()
      .then(managerInfo => {
        console.log(managerInfo);
        this.onSuccessLogin();
      })
      .catch(err => {
        this.onErrorCallBack(err);
      })
  }

  /**
   * 最终成功登录
   */
  private onSuccessLogin() {
    let toast = this.toastCtrl.create({
      duration: 2000,
      message: '在线登录成功',
      position: 'bottom',
    });
    toast.present();
    this.saveAppPreferences();
    this.navCtrl.push(MainPage, {})
  }

  /**
   * 保存参数
   */
  private saveAppPreferences() {
    Promise.all([this.saveUserInfo('username', this.user.userName),
      this.saveUserInfo('pwd', this.user.password),
      this.saveUserInfo('role', this.user.role)])
      .then(result => {
        console.log(this.tag + 'saveAppPreferences:' + result);
      })
      .catch(error => {
        console.log(this.tag + 'saveAppPreferences:' + error);
      })
  }

  /**
   * 用户信息
   * @param infoType
   * @param valueInfo
   * @returns {Promise<TResult|TResult2|TResult1>}
   */
  private saveUserInfo(infoType: string, valueInfo: string): Promise<any> {
    return this.appPreferences.store('userinfo', infoType, valueInfo)
      .then(result => {
        console.log(this.tag + ':saveUserName:' + result);
      })
      .catch(error => {
        console.log(this.tag + ':saveUserName:' + error);
      })
  }


  /**
   * 失败回调
   * @param error
   */
  onErrorCallBack(error) {
    console.log(error);
    let alert = this.alertCtrl.create({
      title: '提示：',
      subTitle: error ? error : '登录失败',
      buttons: ['确定']
    });
    alert.present();
  }
}
