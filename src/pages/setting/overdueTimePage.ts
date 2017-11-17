import {Component} from "@angular/core";
import {ToastController, ViewController} from "ionic-angular";
import {ConfigService} from "../../providers/ConfigService";
import {OverdueTime} from "../../model/OverdueTime";


@Component({
  template: `
    <ion-list>
      <ion-list-header color="primary">超期设置(单位:毫秒)</ion-list-header>
      
      <ion-item>
        <ion-label color="label">到场超期</ion-label>
      </ion-item>
      <ion-item>
        <ion-input type="text" [(ngModel)]="arrivedDeadLine" clearInput></ion-input>
      </ion-item>
      
      <ion-item>
        <ion-label color="label">处理超期</ion-label>
      </ion-item>
      <ion-item>
        <ion-input type="text" [(ngModel)]="replyDeadLine" clearInput></ion-input>
      </ion-item>
      
      <ion-item>
        <ion-label color="label">检查频率</ion-label>
      </ion-item>
      <ion-item>
        <ion-input type="text" [(ngModel)]="checkInterval" clearInput></ion-input>
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

export class OverdueTimePage {
  private readonly tag: string = "[OverdueTimePage]";
  private overdueTime: OverdueTime;
  arrivedDeadLine: number;
  replyDeadLine: number;
  checkInterval: number;

  constructor(public configService: ConfigService,
              private toastCtrl: ToastController,
              public viewCtrl: ViewController) {
  }

  ngOnInit() {
    this.getOverdueTime();
  }

  private getOverdueTime(): Promise<any> {
    return this.configService.getOverdueTime()
      .then(overdueTime => this.overdueTime = overdueTime)
      .catch(err => console.error(this.tag + err))
      .then(() => {
        if (!this.overdueTime) {
          this.overdueTime = {
            arrived: 1800000,
            reply: 1800000,
            delayReply: 1800000,
            checkInterval: 60000
          }
        } else {
          if (!this.overdueTime.arrived) {
            this.overdueTime.arrived = 1800000;
          }

          if (!this.overdueTime.reply) {
            this.overdueTime.reply = 1800000;
          }

          if (!this.overdueTime.delayReply) {
            this.overdueTime.delayReply = 1800000;
          }

          if (!this.overdueTime.checkInterval) {
            this.overdueTime.checkInterval = 60000;
          }
        }
      })
      .then(() => {
        this.arrivedDeadLine = this.overdueTime.arrived;
        this.replyDeadLine = this.overdueTime.reply;
        this.checkInterval = this.overdueTime.checkInterval;
      });
  }

  onOk(ev: any): void {
    let toast = this.toastCtrl.create({
      duration: 2000,
      position: 'bottom',
    });

    if (!this.arrivedDeadLine || this.arrivedDeadLine <= 0
      || !this.replyDeadLine || this.replyDeadLine <= 0
      || !this.checkInterval || this.checkInterval <= 0) {
      toast.setMessage('请输入有效数值').present();
      return;
    }

    this.overdueTime.arrived = this.arrivedDeadLine;
    this.overdueTime.reply = this.replyDeadLine;
    this.overdueTime.checkInterval = this.checkInterval;
    this.configService.setOverdueTime(this.overdueTime)
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
