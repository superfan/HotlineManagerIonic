import {Component} from "@angular/core";
import {ViewController, Events, NavParams} from "ionic-angular";
import {DataService} from "../../providers/DataService";
import {GlobalService} from "../../providers/GlobalService";

@Component({
  template: `
    <ion-list>
      <!--<ion-list-header color="primary">录音</ion-list-header>-->
      <ion-row>
        <ion-col style="display: flex; justify-content: center; align-items: center; margin-top: 10px;">
          <img src="assets/img/ic_record.png" width="64" height="64">
        </ion-col>
      </ion-row>
      
      <ion-row *ngIf="isRecording">
        <ion-col style="display: flex; justify-content: center; align-items: center;">
          <ion-spinner name="dots"></ion-spinner>
        </ion-col>
      </ion-row>
      
      <button ion-item style="text-align:center; color:#f53d3d;" (click)="onStart($event)" [class.selected]="isRecording" *ngIf="!isRecording">开始</button>
      <button ion-item style="text-align:center; color:#f53d3d;" (click)="onEnd($event)" *ngIf="isRecording">结束</button>
      <!--<button ion-item style="text-align:center; color:#488aff;" (click)="onOk($event)">确定</button>-->
      <button ion-item style="text-align:center; color:#488aff;" (click)="onCancel($event)">取消</button>
    </ion-list>
  `,
  styles: [
    `.selected {
      font-weight: bold;
    }`
  ]
})
export class PopoverRecordPage {
  isRecording: boolean = false;
  private taskId: string;
  private file: any;
  private name: string;
  private time: number;

  constructor(public viewCtrl: ViewController,
              private navParams: NavParams,
              private events: Events,
              private dataService: DataService,
              private globalService: GlobalService) {
  }

  ngOnInit() {
    if (this.navParams.data) {
      this.taskId = this.navParams.data.taskId;
    }
  }

  /**
   * 开始录音
   * @param ev
   */
  onStart(ev: any): void {
    this.dataService.startRecordAudio()
      .then(result => {
        ({file: this.file, name: this.name} = result);
        if (this.file && this.name) {
          this.isRecording = true;
          this.time = new Date().getTime();
        } else {
          console.error('failure to record audio');
        }
      })
      .catch(error => console.error(error));
  }

  /**
   * 结束录音&保存
   * @param ev
   */
  onEnd(ev: any): void {
    this.close(true);
  }

  // onOk(ev: any): void {
  //   this.viewCtrl.dismiss();
  // }

  /**
   * 取消录音&不保存
   * @param ev
   */
  onCancel(ev: any): void {
    this.close(false);
  }

  /**
   *
   * @param needSave
   */
  private close(needSave: boolean): void {
    if (this.file) {
      this.time = new Date().getTime() - this.time;
      this.dataService.endRecordAudio(this.file)
        .then(result => result && needSave && this.time > 0 ? this.dataService.saveAudio(this.taskId, this.name) : Promise.resolve(false))
        .then(result => result ? this.events.publish(this.globalService.recordAudioFinishEvent, this.name, this.time) : Promise.resolve([]))
        .catch(error => console.error(error))
        .then(() => this.viewCtrl.dismiss());
    } else {
      this.viewCtrl.dismiss();
    }
  }
}
