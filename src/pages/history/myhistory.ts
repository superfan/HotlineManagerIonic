import {Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {NavController, Content, InfiniteScroll} from "ionic-angular";
import {DataService} from '../../providers/DataService';
import {HistoryEx} from "../../model/History";
import {RejectInfo} from "../../model/RejectInfo";
import {CancelInfo} from "../../model/CancelInfo";

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
  private since: number = 1;
  private isDownloadFinished: boolean = true;
  count: number = 0;
  searchKey: string = '';

  ngOnDestroy(): void {
    console.log(this.tag, 'ngOnDestroy');
  }

  ngOnInit(): void {
    console.log(this.tag, 'ngOnInit');
    this.since = this.items.length;
    //todo
    this.getHistory(this.since, this.count, this.searchKey)
      .then(flag => {
        this.infiniteScroll.enable(flag);
      })
      .catch(error => console.error(error));
  }

  constructor(public navCtrl: NavController,
              private dataService: DataService) {
  }

  //搜索
  getItems(ev: any) {
  }

  /**
   *下拉同步
   * @param refresher
   */
  doRefresh(refresher) {
    refresher.completed();
  }

  /**
   * 上拉加载更多
   * @param infiniteScroll
   */
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.isDownloadFinished = false;
      this.showFab = false;
      //todo
      infiniteScroll.complete();
      this.isDownloadFinished = true;
      this.showFab = true;
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
        if (historys.length < 0) {
          return Promise.resolve(false);
        }
        else {
          HistoryEx.transformToHistoryEx(this.items, historys);
          since = this.items.length;
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
