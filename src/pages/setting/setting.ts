/**
 * Created by zhangjing on 2017/6/29.
 */
import {Component, OnInit} from "@angular/core";
import {ActionSheetController, AlertController, Events, NavController} from "ionic-angular";
import {ConfigService} from "../../providers/ConfigService";
import {GlobalService} from "../../providers/GlobalService";
import {StorageService} from "../../providers/StorageService";
import {FileService} from "../../providers/FileService";

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})

export class SettingPage implements OnInit {
  private readonly tag: string = "[SettingPage]";
  title: string = '系统参数';
  public isGrid: boolean;//是否是九宫格样式
  isOuterNet: boolean;//是否是外网
  netWorkUri: string;//数据地址
  keepAlive: number;//心跳频率
  alermStyle: string = '仅铃声';//提醒方式
  isChrome;//是否是浏览器执行

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public actionsheetCtrl: ActionSheetController,
              public configService: ConfigService,
              public globalService: GlobalService,
              public storageService: StorageService,
              public fileService: FileService,
              public events: Events) {
  }

  ngOnInit() {
    this.isChrome = this.globalService.isChrome;
    this.isGridStyle();
    this.isOuterNetwork();
    this.getNetworkUri();
    this.getKeepAlive();
    this.getAlermStyle();
  }


  /**
   * 切换九宫格
   */
  private notifyIsGrid() {
    console.log(this.tag + "Toggled:" + this.isGrid);
    if (this.isChrome) {
      this.storageService.write('isGridStyle', this.isGrid);
    } else {
      this.configService.systemConfig.isGridStyle = this.isGrid;
      this.fileService.editIsGridStyle(this.isGrid);
    }
    let gridStyle = this.isGrid;
    this.events.publish(this.globalService.mainUpdateEvent, {type: 'gridStyle', gridStyle});
  }

  /**
   * 切换内外网
   */
  private notifyIsOutNet() {
    console.log(this.tag + "Toggled:" + this.isOuterNet);
    if (this.isChrome) {
      this.storageService.write('isOuterNet', this.isOuterNet);
    } else {
      this.configService.systemConfig.isOuterNetwork = this.isOuterNet;
      this.fileService.editIsOuterNet(this.isOuterNet);
    }
  }

  /**
   * 是否是九宫格样式
   */
  private isGridStyle() {
    if (this.isChrome) {
      (this.storageService.read('isGridStyle') == null || undefined) ?
        this.isGridStyleFromFile() : this.isGrid = this.storageService.read<boolean>('isGridStyle');
      return;
    }
    this.isGridStyleFromFile();
  }

  /**
   * 从文件中读取是否是九宫格
   */
  private isGridStyleFromFile() {
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
    if (this.isChrome) {
      (this.storageService.read('isOuterNet') == null || undefined) ?
        this.isOuterNetFromFile() : this.isOuterNet = this.storageService.read<boolean>('isOuterNet');
      return;
    }
    this.isOuterNetFromFile();
  }

  /**
   * 从文件中读取是否是外网
   */
  private isOuterNetFromFile() {
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
    if (this.isChrome) {
      (this.storageService.read('netWorkUri') == null || undefined) ?
        this.getNetworkUriFromFile() : this.netWorkUri = this.storageService.read<string>('netWorkUri');
      return;
    }
    this.getNetworkUriFromFile();
  }

  /**
   * 从文件读取数据地址
   */
  private getNetworkUriFromFile() {
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
    if (this.isChrome) {
      (this.storageService.read('keepAlive') == null || undefined) ?
        this.getKeepAliveFromFile() : this.keepAlive = this.storageService.read<number>('keepAlive');
      return;
    }
    this.getKeepAliveFromFile();
  }

  /**
   * 读取文件的心跳频率
   */
  private getKeepAliveFromFile() {
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
   * 获取提醒方式
   */
  private getAlermStyle() {
    if (this.isChrome) {
      (this.storageService.read('alermStyle') == null || undefined) ?
        this.alermStyle = '仅铃声' : this.alermStyle = this.storageService.read<string>('alermStyle');
      return;
    }
  }

  /**
   * 网络设置
   */
  showNetwork() {
    let prompt = this.alertCtrl.create({
      title: '网络设置',
      message: '数据访问地址',
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
            if (this.isChrome) {
              this.storageService.write('netWorkUri', data)
            } else {
              this.fileService.editSystemUri(data);
            }
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
    let alert = this.alertCtrl.create({
      title: '心跳设置',
      message: '心跳频率(毫秒):',
      inputs: [
        {
          name: 'heartBeat',
          placeholder: '请输入心跳频率',
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: data => {
            console.log(this.tag + 'showHeartSetting Cancel clicked');
          }
        },
        {
          text: '保存',
          handler: data => {
            this.keepAlive = data.heartBeat;
            console.log(this.tag + 'showHeartSetting' + data.heartBeat);
            if (this.isChrome) {
              this.storageService.write('keepAlive', this.keepAlive);
            } else {
              this.configService.systemConfig.keepAliveInterval = this.keepAlive;
              this.fileService.editheartBeat(this.keepAlive);
            }
          }
        }
      ]
    });
    alert.present();
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
            this.storageService.write('alermStyle', 'onlyRing');
            console.log(this.tag + 'showAlermType onlyRing clicked');
          }
        },
        {
          text: '仅震动',
          icon: 'pulse',
          handler: () => {
            this.alermStyle = '仅震动';
            this.storageService.write('alermStyle', 'onlyShake');
            console.log(this.tag + 'showAlermType onlyShake clicked');
          }
        },
        {
          text: '铃声+震动',
          icon: 'arrow-dropright-circle',
          handler: () => {
            this.alermStyle = '铃声+震动';
            this.storageService.write('alermStyle', 'ringShake');
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

