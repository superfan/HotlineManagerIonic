import {Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {NavController, Content, InfiniteScroll, Events, Refresher, AlertController} from "ionic-angular";
import {DataService} from '../../providers/DataService';
import {History, HistoryEx} from "../../model/History";
import {RejectInfo} from "../../model/RejectInfo";
import {CancelInfo} from "../../model/CancelInfo";
import {GlobalService} from "../../providers/GlobalService";
import {WorkDetailPage} from "../workdetail/workdetail";
import {TaskEx, TaskState} from "../../model/Task";
import {MapPage} from "../map/map";
import {MapParam, MapType} from "../../model/MapParam";
import {DelayInfo} from "../../model/DelayInfo";

@Component({
  selector: 'page-myhistory',
  templateUrl: 'myhistory.html'
})


export class MyHistory implements OnInit, OnDestroy {
  private readonly tag: string = "[Myhistory]";

  @ViewChild(Refresher) refresher: Refresher;
  @ViewChild(Content) content: Content;
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  title: string = '历史记录';
  showToolbar: boolean = false;
  showFab: boolean = false;
  items: HistoryEx[] = [];
  private isDownloadFinished: boolean = true;
  private since: number = this.globalService.taskSinceDefault;
  private count: number = this.globalService.taskCountDefault10;
  searchKey: string = '';
  private isOperationBusy: boolean = false;
  private replyHistories: History[] = [];
  onServerFlag: number;

  constructor(public navCtrl: NavController,
              private dataService: DataService,
              private alertCtrl: AlertController,
              private globalService: GlobalService,
              private events: Events) {
    this.onServerFlag = this.globalService.uploadedFlagForUploaded;
  }

  ngOnInit(): void {
    console.log(this.tag, 'ngOnInit');
    this.subscribeEvent(this.events);
    this.getHistories(this.since, this.count, this.searchKey)
      .then(flag => this.infiniteScroll.enable(flag))
      .catch(error => console.error(error));
  }

  ngOnDestroy(): void {
    console.log(this.tag, 'ngOnDestroy');
    this.events.unsubscribe(this.globalService.historyUploadFinishEvent);
  }

  //搜索
  onInput(ev: any): void {
    if (this.isOperationBusy) {
      return this.globalService.showToast('后台繁忙...');
    }
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.searchKey = val;
    } else {
      this.searchKey = '';
    }
    this.isOperationBusy = true;
    this.since = this.globalService.taskSinceDefault;
    while (this.items.shift()) ;
    this.showFab = false;
    this.replyHistories = [];
    this.getHistories(this.since, this.count, this.searchKey)
      .then(data => this.infiniteScroll.enable(data))
      .catch(error => {
        console.error(error);
      }).then(() => this.isOperationBusy = false);
  }

  /**
   *
   * @param ev
   */
  onCancel(ev: any): void {
    console.log(this.tag, 'onCancel');
  }


  doRefresh(refresher): void {
    console.log(this.tag, 'doRefresh');
    this.dataService.uploadHistoriesAndMedias();
  }

  /**
   * 上拉加载更多
   * @param infiniteScroll
   */
  doInfinite(infiniteScroll) {
    console.log(this.tag, 'doInfinite begin');

    setTimeout(() => {
      this.isDownloadFinished = false;
      this.showFab = false;
      this.getHistories(this.since, this.count, this.searchKey)
        .then(data => {
          if (!data) {
            infiniteScroll.enable(false);
          } else {
            infiniteScroll.complete();
          }
          console.log(this.tag, 'doInfinite end');
        }).catch(error => {
        console.error(error);
        infiniteScroll.complete();
      }).then(() => {
        this.isDownloadFinished = true;
        this.showFab = this.items.length > this.count;
      });
    }, 100);
  }

  /**
   *滑动到顶部
   * @param ev
   */
  doScroll2Top(ev: any) {
    this.showFab = false;
    this.content.scrollToTop();
  }

  toggleToolbar(ev: any) {
    this.showToolbar = !this.showToolbar;
    this.content.resize();
  }

  private getHistories(since: number, count: number, key: string): Promise<boolean> {
    return this.dataService
      .getHistories(since, count, key)
      .then(histories => {
        console.log(this.tag + "getHistory" + histories.length);
        if (histories.length <= 0) {
          return Promise.resolve(false);
        } else {
          HistoryEx.transformToHistoryEx(this.items, histories);
          this.since = this.items.length;
          return Promise.resolve(histories.map(history => history.taskId))
            .then(taskIds => this.dataService.getReplyHistories(taskIds))
            .then(histories => {
              let result: boolean = false;
              try {
                this.replyHistories.push(...histories);
                this.replyHistories.forEach(history => {
                  if (history.mediaNames && history.mediaNames.length > 0) {
                    let historyEx: HistoryEx = this.items.find(historyEx => historyEx.taskId === history.taskId);
                    if (historyEx) {
                      let mediaNames = history.mediaNames;
                      historyEx.photoCount = mediaNames.filter(name => name.lastIndexOf(this.globalService.photoSuffix) !== -1).length;
                      historyEx.audioCount = mediaNames.filter(name => name.lastIndexOf(this.globalService.audioSuffix) !== -1).length;
                    }
                  }
                });
                result = true;
              } catch (err) {
                console.error(err);
              }

              return Promise.resolve(result);
            });
        }
      });
  }

  toRejectedInfo(item: any): RejectInfo {
    return <RejectInfo>item;
  }

  toReplyInfo(item: any): CancelInfo {
    return <CancelInfo>item;
  }

  onDelay(historyEx: HistoryEx): void {
    this.dataService.getHistory(historyEx.taskId, TaskState.Delay)
      .then(history => {
        if (history.reply as DelayInfo) {
          let delayInfo: DelayInfo = history.reply as DelayInfo;
          if (delayInfo.comment) {
            this.globalService.showToast(`延迟原因: ${delayInfo.comment}`);
          }
        }
      })
      .catch(err => console.error(err));
  }

  onReply(historyEx: HistoryEx): void {
    let taskEx: TaskEx = new TaskEx(historyEx.task);
    taskEx.isPreview = true;
    let history: History = this.findReplyHistory(taskEx.id);
    this.navCtrl.push(WorkDetailPage, [taskEx, history]);
  }

  onReject(historyEx: HistoryEx): void {
    let rejectInfo: RejectInfo = this.toRejectedInfo(historyEx.reply);
    if (rejectInfo && rejectInfo.rejectReason) {
      this.globalService.showToast(`退单原因: ${rejectInfo.rejectReason}`);
    }
  }

  onLocate(historyEx: HistoryEx): void {
    this.navCtrl.push(MapPage, new MapParam(MapType.Locate, historyEx.task.location, historyEx.task.taskId));
  }

  onDelete(historyEx: HistoryEx): void {
    let alert = this.alertCtrl.create({
      title: '删除任务',
      message: '是否删除该任务及其所有操作?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            console.log('Ok clicked');
            this.dataService.deleteOneTaskWithAllInfos(historyEx.taskId)
              .then(result => this.resetList())
              .catch(err => console.error(err));
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * 订阅事件
   * @param events
   */
  private subscribeEvent(events: Events): void {
    events.subscribe(this.globalService.historyUploadFinishEvent, () => {
      this.refresher.complete();
      this.resetList()
    });
  }

  private findReplyHistory(taskId: string): History {
    return this.replyHistories.find(history => history.taskId === taskId);
  }

  private resetList(): void {
    this.isOperationBusy = false;
    this.searchKey = '';
    this.since = this.globalService.taskSinceDefault;
    while (this.items.shift()) ;
    this.showFab = false;
    this.replyHistories = [];
    this.getHistories(this.since, this.count, this.searchKey)
      .then(data => this.infiniteScroll.enable(data))
      .catch(error => console.error(error));
  }
}
