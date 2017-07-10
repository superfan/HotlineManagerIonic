/**
 * Created by zhangjing on 2017/6/29.
 */
import {Component, OnInit} from "@angular/core";
import {ActionSheetController, AlertController, NavController} from "ionic-angular";
import {ConfigService} from "../../providers/ConfigService";
import {FileService} from "../../providers/FileService";

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})

export class SettingPage implements OnInit {
  private readonly tag: string = "[SettingPage]";
  title: string = '系统参数';
  isGrid: boolean;//是否是九宫格样式
  isOuterNet: boolean;//是否是外网
  netWorkUri: string;//数据地址
  keepAlive: number;//心跳频率
  alermStyle: string = '仅铃声';//提醒方式

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public actionsheetCtrl: ActionSheetController,
              public configService: ConfigService,
              public fileService: FileService) {

  }

  ngOnInit() {
    this.isGridStyle();
    this.isOuterNetwork();
    this.getNetworkUri();
    this.getKeepAlive();
  }

  /**
   * 切换九宫格
   */
  private notifyIsGrid() {
    console.log(this.tag + "Toggled:" + this.isGrid);
    this.fileService.editIsGridStyle(this.isGrid);
  }

  /**
   * 切换内外网
   */
  private notifyIsOutNet() {
    console.log(this.tag + "Toggled:" + this.isOuterNet);
  }

  /**
   * 是否是九宫格样式
   */
  private isGridStyle() {
    this.configService.isGridStyle()
      .then(data => {
        console.log(this.tag + data);
        this.isGrid = data;
      }).catch(err => {
      console.log(this.tag + err);
    })
  }

  /**
   * 是否是外网
   */
  private isOuterNetwork() {
    this.configService.isOuterNetwork()
      .then(data => {
        console.log(this.tag + data);
        this.isOuterNet = data;
      })
      .catch(err => {
        console.log(this.tag + err);
      })
  }

  /**
   * 获取数据地址
   */
  private getNetworkUri() {
    this.configService.getServerBaseUri()
      .then(data => {
        console.log(this.tag + data);
        this.netWorkUri = data;
      })
      .catch(err => {
        console.log(this.tag + err);
      })
  }

  /**
   * 获得心跳频率
   */
  private getKeepAlive() {
    this.configService.getKeepAliveInterval()
      .then(data => {
        console.log(this.tag + data);
        this.keepAlive = data;
      })
      .catch(err => {
        console.log(this.tag + err);
      })
  }

  /**
   * 网络设置
   */
  showNetwork() {
    let prompt = this.alertCtrl.create({
      title: '网络设置',
      inputs: [
        {
          value: this.netWorkUri,
          placeholder: '数据访问地址',
        }
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log(this.tag + 'showNetwork cancel');
          }
        },
        {
          text: '保存',
          handler: data => {
            console.log(this.tag + data);
          }
        }
      ]
    });
    prompt.present();
  }

  /**
   * 心跳设置
   */
  showHeartSetting() {
    let prompt = this.alertCtrl.create({
      title: '心跳设置',
      message: '心跳频率(毫秒):',
      inputs: [
        {
          name: '心跳',
          placeholder: '心跳频率',
        }
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log(this.tag + 'showHeartSetting Cancel clicked');
          }
        },
        {
          text: '保存',
          handler: data => {
            this.keepAlive=data;
            console.log(this.tag + 'showHeartSetting' + data);
          }
        }
      ]
    });
    prompt.present();
  }

  /**
   * 提醒方式
   */
  showAlermType() {
    let actionSheet = this.actionsheetCtrl.create({
      title: '提醒方式',
      // cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '仅铃声',
          role: 'destructive',
          icon: 'notifications',
          handler: () => {
            this.alermStyle = '仅铃声';
            console.log(this.tag + 'showAlermType Delete clicked');
          }
        },
        {
          text: '仅震动',
          icon: 'pulse',
          handler: () => {
            this.alermStyle = '仅震动';
            console.log(this.tag + 'showAlermType Share clicked');
          }
        },
        {
          text: '铃声+震动',
          icon: 'arrow-dropright-circle',
          handler: () => {
            this.alermStyle = '铃声+震动';
            console.log(this.tag + 'showAlermType Play clicked');
          }
        },
        {
          text: '取消',
          role: '取消', // will always sort to be on the bottom
          icon: 'close',
          handler: () => {
            console.log(this.tag + 'showAlermType Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  /**
   * 恢复出厂设置
   */
  showRevertSetting() {
    let confirm = this.alertCtrl.create({
      title: '警告',
      message: '数据都上传了吗？确定要恢复出厂设置吗？回复后请重新登录！',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log(this.tag + '取消 clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            console.log(this.tag + '保存 clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}

