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
        <ion-label color="label">数据服务外网地址:</ion-label>
      </ion-item>
      <ion-item>
        <ion-input type="text" [(ngModel)]="hotLineOuterBaseUri" clearInput></ion-input>
      </ion-item>
      
      <ion-item>
        <ion-label color="label">数据服务内网地址:</ion-label>
      </ion-item>
      <ion-item>
        <ion-input type="text" [(ngModel)]="hotLineInnerBaseUri" clearInput></ion-input>
      </ion-item>
      
      <ion-item *ngIf="showMaterial">
        <ion-label color="label">材料服务外网地址:</ion-label>
      </ion-item>
      <ion-item *ngIf="showMaterial">
        <ion-input type="text" [(ngModel)]="materialsOuterBaseUri" clearInput></ion-input>
      </ion-item>
      
      <ion-item *ngIf="showMaterial">
        <ion-label color="label">材料服务内网地址:</ion-label>
      </ion-item>
      <ion-item *ngIf="showMaterial">
        <ion-input type="text" [(ngModel)]="materialsInnerBaseUri" clearInput></ion-input>
      </ion-item>
      
      <ion-item>
        <ion-checkbox [(ngModel)]="isOuterNet"></ion-checkbox>
        <ion-label>使用外网</ion-label>
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

  //private readonly tag: string = "[NetworkSetPage]";
  isOuterNet: boolean;//是否是外网
  // public serverBaseUri: string;//热线地址
  // public materialsBaseUri: string;//材料地址

  hotLineOuterBaseUri: string;
  hotLineInnerBaseUri: string;
  materialsOuterBaseUri: string;
  materialsInnerBaseUri: string;
  showMaterial: boolean;

  constructor(public configService: ConfigService,
              private toastCtrl: ToastController,
              public viewCtrl: ViewController) {
  }

  ngOnInit() {
    Promise.all([this.configService.getServerBaseUris(), this.configService.getMaterialsBaseUris()])
      .then(([[hotLineOuterBaseUri, hotLineInnerBaseUri], [materialsOuterBaseUri, materialsInnerBaseUri]]) => {
        this.hotLineOuterBaseUri = hotLineOuterBaseUri;
        this.hotLineInnerBaseUri = hotLineInnerBaseUri;
        this.materialsOuterBaseUri = materialsOuterBaseUri;
        this.materialsInnerBaseUri = materialsInnerBaseUri;
      })
      .then(() => this.configService.isOuterNetwork())
      .then(result => this.isOuterNet = result)
      .then(() => this.showOrHideMaterial())
      .catch(err => console.log(err));
  }

  private showOrHideMaterial(): Promise<any> {
    return this.configService.getSysRegion()
      .then(region => {
        if (region && region === ConfigService.fushunRegion) {
          this.showMaterial = true;
        }
      })
      .catch(error => console.error(error))
      .then(() => this.showMaterial = false);
  }

  /**
   * 切换内外网
   */
  // notifyIsOutNet(): void {
  //   this.isOuterNet = !this.isOuterNet;
  //   // console.log(this.tag + "Toggled:" + this.isOuterNet);
  //   // this.configService.setIsOuterNet(this.isOuterNet)
  //   //   .then(result => {
  //   //     if (!result) {
  //   //       this.isOuterNet = !this.isOuterNet;
  //   //     } else {
  //   //       this.getServerBaseUri();
  //   //     }
  //   //   })
  //   //   .catch(error => {
  //   //     console.log(error);
  //   //   })
  // }

  // /**
  //  * 数据服务地址
  //  */
  // private getServerBaseUri() {
  //   Promise.all([this.getHotlineNetwork(), this.getMaterialNetwork()])
  //     .then(result => {
  //       console.log(this.tag, result);
  //       this.serverBaseUri = result[0];
  //       this.materialsBaseUri = result[1];
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }
  //
  // /**
  //  * 热线地址
  //  * @returns {Promise<T>}
  //  */
  // private getHotlineNetwork(): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     this.configService.getServerBaseUri()
  //       .then(uri => {
  //         resolve(uri);
  //       })
  //       .catch(err => {
  //         reject(err);
  //       })
  //   })
  // }
  //
  // /**
  //  * 材料地址
  //  * @returns {Promise<T>}
  //  */
  // private getMaterialNetwork(): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     this.configService.getMaterialsBaseUri()
  //       .then(uri => {
  //         resolve(uri);
  //       })
  //       .catch(err => {
  //         reject(err);
  //       })
  //   })
  // }

  onOk(ev: any): void {
    let toast = this.toastCtrl.create({
      duration: 2000,
      position: 'bottom',
    });

    if (!this.hotLineOuterBaseUri
      || !this.hotLineInnerBaseUri
      || !this.materialsOuterBaseUri
      || !this.materialsInnerBaseUri) {
      toast.setMessage('请输入有效地址').present();
      return;
    }

    Promise.all([this.configService.setServerBaseUris(this.hotLineOuterBaseUri, this.hotLineInnerBaseUri, this.isOuterNet),
      this.configService.setMaterialBaseUris(this.materialsOuterBaseUri, this.materialsInnerBaseUri, this.isOuterNet)])
      .then(result => {
        toast.setMessage('保存成功').present();
      })
      .catch(error => {
        console.error(error);
        toast.setMessage('保存失败').present();
      })
      .then(() => this.viewCtrl.dismiss());
  }

  onCancel(ev: any): void {
    this.viewCtrl.dismiss();
  }
}
