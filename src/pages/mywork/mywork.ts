import { Component, ViewChild } from '@angular/core';
import { Content, NavController } from 'ionic-angular';

@Component({
  selector: 'page-mywork',
  templateUrl: 'mywork.html'
})

export class MyWorkPage {
  @ViewChild(Content) content: Content;
  title: string = '任务列表';
  showToolbar: boolean = false;
  showFab: boolean = false;
  private dark: string = 'dark';
  private gray: string = 'gray';

  items: any[] = [];

  // listItems = {
  //   header: { name: '任务描述', value: '上海市杨浦区控江路1555号水管维修'},
  //   content: [
  //     { name: '创建时间', value: '2017-06-01 12:30:00', show: true, color: 'gray' },
  //     { name: '派发时间', value: '2017-06-01 13:00:00', show: true, color: 'gray' },
  //     { name: '接单时间', value: '', show: true, color: 'dark' },
  //     { name: '出发时间', value: '', show: false, color: 'dark' },
  //     { name: '到场时间', value: '', show: false, color: 'dark' },
  //     { name: '回复时间', value: '', show: false, color: 'dark' },
  //     { name: '退单时间', value: '', show: false, color: 'dark' },
  //     { name: '延迟时间', value: '', show: false, color: 'dark' },
  //     { name: '销单时间', value: '', show: false, color: 'dark' }
  //     // { name: '完工时间', value: ''},
  // ]};

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 10; i++) {
      this.items.push({
        id: this.items.length,
        type: '热线工单',
        describe: "上海市杨浦区控江路1555号水管维修",
        create: { time: '2017-06-01 12:30:00', show: true, color: 'gray' },
        dispatch: { time: '2017-06-01 12:30:00', show: true, color: 'gray' },
        accept: { time: '', show: true, color: 'dark', done: false },
        go: { time: '', show: false, color: 'dark', done: false },
        arrive: { time: '', show: false, color: 'dark', done: false },
        reply: { time: '', show: false, color: 'dark', done: false },
        reject: { time: '', show: false, color: 'dark', done: false, lastOperate: '' },
        delay: { time: '', show: false, color: 'dark', done: false, lastOperate:'' },
        cancel: { time: '', show: false, color: 'dark', done: false }
      });
    }
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  toggleToolbar(ev: any) {
    this.showToolbar = !this.showToolbar;
    this.content.resize();
  }

  getItems(ev: any) {

  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push({
          id: this.items.length,
          type: '热线工单',
          create: { time: '2017-06-01 12:30:00', show: true, color: 'gray' },
          dispatch: { time: '2017-06-01 12:30:00', show: true, color: 'gray' },
          accept: { time: '', show: true, color: 'dark' },
          go: { time: '', show: false, color: 'dark' },
          arrive: { time: '', show: false, color: 'dark' },
          reply: { time: '', show: false, color: 'dark' },
          reject: { time: '', show: false, color: 'dark', lastOperate: '' },
          delay: { time: '', show: false, color: 'dark', lastOperate: '' },
          cancel: { time: '', show: false, color: 'dark' }
        });
      }

      this.showFab = true;

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }


  doScroll2Top(ev: any) {
    this.content.scrollToTop();
  }

  /**
   *
   */
  accept(work: any) {
    if (!work.accept.done) {
      work.accept.time = new Date();
      work.accept.color = this.gray;
      work.accept.done = true;
      work.go.show = true;
      work.reject.show = true;
      work.delay.show = true;
      work.cancel.show = true;
    }
  }

  go(work: any) {
    if (!work.go.done) {
      work.go.time = new Date();
      work.go.color = this.gray;
      work.go.done = true;
      work.arrive.show = true;
      work.reject.show = true;
      work.delay.show = true;
      work.cancel.show = true;
    }
  }

  arrive(work: any) {
    if (!work.arrive.done) {
      work.arrive.time = new Date();
      work.arrive.color = this.gray;
      work.arrive.done = true;
      work.reply.show = true;
      work.reject.show = true;
      work.delay.show = true;
      work.cancel.show = true;
    }
  }

  reply(work: any) {
    if (!work.reply.done) {
      work.reply.time = new Date();
      work.reply.color = this.gray;
      work.reply.done = true;
      work.reject.show = false;
      work.delay.show = work.delay.done;
      work.cancel.show = true;
    }
  }

  /**
   * 退单
   * @param work
   */
  reject(work: any) {
    if (!work.reject.done) {
      work.reject.time = new Date();
      work.reject.color = this.gray;
      work.reject.done = true;

      work.go.show = work.go.done;
      work.arrive.show = work.arrive.done;
      work.reply.show = work.reply.done;
      work.delay.show = work.delay.done;
      work.cancel.show = false;

      if (work.accept.done) {
        work.reject.lastOperate = '接单';
      }

      if (work.go.done) {
        work.reject.lastOperate = '出发';
      }

      if (work.arrive.done) {
        work.reject.lastOperate = '到场';
      }

      if (work.delay.done) {
        work.reject.lastOperate = '延迟';
      }
    }
  }

  delay(work: any) {
    if (!work.delay.done) {
      work.delay.time = new Date();
      work.delay.color = this.gray;
      work.delay.done = true;

      if (work.accept.done) {
        work.delay.lastOperate = '接单';
      }

      if (work.go.done) {
        work.delay.lastOperate = '出发';
      }

      if (work.arrive.done) {
        work.delay.lastOperate = '到场';
      }
    }
  }

  cancel(work: any) {
    if (!work.cancel.done) {
      work.cancel.time = new Date();
      work.cancel.color = this.gray;
      work.cancel.done = true;

      work.go.show = work.go.done;
      work.arrive.show = work.arrive.done;
      work.reply.show = work.reply.done;
      work.reject.show = work.reject.done;
      work.delay.show = work.delay.done;
    }
  }
}
