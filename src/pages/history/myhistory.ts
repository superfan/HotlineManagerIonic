import {Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {NavController, Content, InfiniteScroll} from "ionic-angular";
import {Task, TaskEx} from '../../model/Task';

@Component({
  selector: 'page-myhistory',
  templateUrl: 'myhistory.html'
})


export class MyHistory implements OnInit, OnDestroy {
  private readonly tag: string = "[Myhistory]";

  @ViewChild(Content) content: Content;
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  tasks: Task[] = [{
    acceptTime: 12345678, arrivedTime: 34512790, assignTime: 26378940, compltedTime: 87654238,
    createTime: 87654238, desc: 'asdf', goTime: 12345678, location: {type: 'qwe', lng: '12.45', lat: '15.80'},
    replyTime: 87654238, source: '热线', state: 1, taskId: '12345678sdf', taskType: '热线'
  }, {
    acceptTime: 12345678, arrivedTime: 34512790, assignTime: 26378940, compltedTime: 87654238,
    createTime: 87654238, desc: 'asdf', goTime: 12345678, location: {type: 'qwe', lng: '12.45', lat: '15.80'},
    replyTime: 87654238, source: '热线', state: 1, taskId: '12345678sdf', taskType: '热线'
  }, {
    acceptTime: 12345678, arrivedTime: 34512790, assignTime: 26378940, compltedTime: 87654238,
    createTime: 87654238, desc: 'asdf', goTime: 12345678, location: {type: 'qwe', lng: '12.45', lat: '15.80'},
    replyTime: 87654238, source: '热线', state: 1, taskId: '12345678sdf', taskType: '热线'
  }, {
    acceptTime: 12345678, arrivedTime: 34512790, assignTime: 26378940, compltedTime: 87654238,
    createTime: 87654238, desc: 'asdf', goTime: 12345678, location: {type: 'qwe', lng: '12.45', lat: '15.80'},
    replyTime: 87654238, source: '热线', state: 1, taskId: '12345678sdf', taskType: '热线'
  }, {
    acceptTime: 12345678, arrivedTime: 34512790, assignTime: 26378940, compltedTime: 87654238,
    createTime: 87654238, desc: 'asdf', goTime: 12345678, location: {type: 'qwe', lng: '12.45', lat: '15.80'},
    replyTime: 87654238, source: '热线', state: 1, taskId: '12345678sdf', taskType: '热线'
  }];

  title: string = '历史记录';
  showToolbar: boolean = false;
  showFab: boolean = false;
  items: TaskEx[] = [];
  private since: number = 1;
  private isDownloadFinished: boolean = true;

  ngOnDestroy(): void {
    console.log(this.tag, 'ngOnDestroy');
  }

  ngOnInit(): void {
    console.log(this.tag, 'ngOnInit');
    TaskEx.transformCompletedData(this.tasks, this.items);
    this.since = this.items.length;
  }

  constructor(public navCtrl: NavController) {
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
      TaskEx.transformCompletedData(this.tasks, this.items);
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
}
