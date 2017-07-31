import {Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {NavController, Content, InfiniteScroll} from "ionic-angular";
import {DataService} from '../../providers/DataService';
import {HistoryEx} from "../../model/History";
import {RejectInfo} from "../../model/RejectInfo";
import {CancelInfo} from "../../model/CancelInfo";
import {GlobalService} from "../../providers/GlobalService";

@Component({
  selector: 'page-myhistory',
  templateUrl: 'myhistory.html'
})


export class MyHistory implements OnInit, OnDestroy {
  private readonly tag: string = "[Myhistory]";

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

  ngOnInit(): void {
    console.log(this.tag, 'ngOnInit');
    this.since = this.items.length;
    this.getHistory(this.since, this.count, this.searchKey)
      .then(flag => {
        this.infiniteScroll.enable(flag);
      })
      .catch(error => console.error(error));
  }

  ngOnDestroy(): void {
    console.log(this.tag, 'ngOnDestroy');
  }

  constructor(public navCtrl: NavController,
              private dataService: DataService,
              private globalService: GlobalService) {
  }

  //搜索
  onInput(ev: any): void {
    debugger;
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
    debugger;
    this.getHistory(this.since, this.count, this.searchKey)
      .then(data => {
        this.infiniteScroll.enable(data);
      })
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


  /*
  doRefresh(refresher) {
    this.searchKey = '';
    refresher.completed();
  }*/

  /**
   * 上拉加载更多
   * @param infiniteScroll
   */
  doInfinite(infiniteScroll) {
    console.log(this.tag, 'doInfinite begin');

    setTimeout(() => {
      this.isDownloadFinished = false;
      this.showFab = false;
      this.getHistory(this.since, this.count, this.searchKey)
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

  private getHistory(since: number, count: number, key: string): Promise<boolean> {
    return this.dataService
      .getHistory(since, count, key)
      .then(historys => {
        console.log(this.tag + "getHistory" + historys.length);
        if (historys.length <= 0) {
          return Promise.resolve(false);
        } else {
          debugger;
          HistoryEx.transformToHistoryEx(this.items, historys);
          this.since = this.items.length;
          return Promise.resolve(true);
        }
      });
  }

  toRejectedInfo(item: any): RejectInfo {
    return <RejectInfo>item;
  }

  toReplyInfo(item: any): CancelInfo {
    return <CancelInfo>item;
  }
}
