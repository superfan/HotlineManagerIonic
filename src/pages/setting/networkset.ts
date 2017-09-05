import {Component} from "@angular/core";
import {ToastController, ViewController} from "ionic-angular";
import {ConfigService} from "../../providers/ConfigService";
/**
 * 网络设置
 * Created by zhangjing on 2017/8/24.
 */
@Component({
  template: `
    <ion-list>
      <ion-list-header color="primary">网络设置</ion-list-header>
      <ion-item>
        <ion-label color="label">热线数据后台地址:</ion-label>
      </ion-item>
      <ion-item>
        <ion-input type="text" [(ngModel)]="serverBaseUri" clearInput></ion-input>
      </ion-item>
      <ion-item>
        <ion-label color="label">材料数据后台地址:</ion-label>
      </ion-item>
      <ion-item>
        <ion-input type="text" [(ngModel)]="materialsBaseUri" clearInput></ion-input>
      </ion-item>
      <ion-item>
        <ion-toggle [(ngModel)]="isOuterNet" (ionChange)="notifyIsOutNet()"></ion-toggle>
        <ion-label>是否使用外网</ion-label>
      </ion-item>

      <button ion-item style="text-align:center; color:#488aff;" (click)="onOk($event)">确定</button>
      <button ion-item style="text-align:center; color:#488aff;" (click)="onCancel($event)">取消</button>
    </ion-list>
  `,
  styles: [
    `.selected {
      font-weight: bold;
    }`
  ]
})

export class NetworkSetPage {

  private readonly tag: string = "[NetworkSetPage]";
  public isOuterNet: boolean;//是否是外网
  public serverBaseUri: string;//热线地址
  public materialsBaseUri: string;//材料地址

  constructor(public configService: ConfigService,
              private toastCtrl: ToastController,
              public viewCtrl: ViewController) {
  }

  ngOnInit() {
    this.getIsOuterNet();
  }

  private getIsOuterNet() {
    this.configService.isOuterNetwork()
      .then(data => {
        this.isOuterNet = data;
        this.getServerBaseUri();
      })
      .catch(err => {
        console.log(this.tag, err);
      })
  }

  /**
   * 切换内外网
   */
  notifyIsOutNet(): void {
    console.log(this.tag + "Toggled:" + this.isOuterNet);
    this.configService.setIsOuterNet(this.isOuterNet)
      .then(result => {
        if (!result) {
          this.isOuterNet = !this.isOuterNet;
        } else {
          this.getServerBaseUri();
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  /**
   * 数据服务地址
   */
  private getServerBaseUri() {
    Promise.all([this.getHotlineNetwork(), this.getMaterialNetwork()])
      .then(result => {
        console.log(this.tag, result);
        this.serverBaseUri = result[0];
        this.materialsBaseUri = result[1];
      })
      .catch(err => {
        console.log(err);
      })
  }

  /**
   * 热线地址
   * @returns {Promise<T>}
   */
  private getHotlineNetwork(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(uri => {
          resolve(uri);
        })
        .catch(err => {
          reject(err);
        })
    })
  }

  /**
   * 材料地址
   * @returns {Promise<T>}
   */
  private getMaterialNetwork(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.configService.getMaterialsBaseUri()
        .then(uri => {
          resolve(uri);
        })
        .catch(err => {
          reject(err);
        })
    })
  }

  onOk(ev: any): void {
    console.log(this.tag, this.serverBaseUri);
    console.log(this.tag, this.materialsBaseUri);
    let toast = this.toastCtrl.create({
      duration: 2000,
      position: 'bottom',
    });
    Promise.all([this.configService.setSystemUrl(this.serverBaseUri), this.configService.setMaterialUrl(this.materialsBaseUri)])
      .then(result => {
        this.closePopUp();
        toast.setMessage('保存成功');
        toast.present();
      })
      .catch(error => {
        this.closePopUp();
        toast.setMessage('保存失败');
        toast.present();
      })
  }

  onCancel(ev: any): void {
    this.closePopUp();
  }

  private closePopUp() {
    this.viewCtrl.dismiss();
  }
}
