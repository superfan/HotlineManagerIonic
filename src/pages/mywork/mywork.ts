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
  dark: string = 'dark';
  gray: string = 'gray';

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
        processes: [
          { event: 'create', time: '2017-06-01 12:30:00', show: true, color: 'gray' },
          { event: 'dispatch', time: '2017-06-01 12:30:00', show: true, color: 'gray' },
          { event: 'accept', time: '', show: true, color: 'dark', done: false },
          { event: 'go', time: '', show: false, color: 'dark', done: false },
          { event: 'arrive', time: '', show: false, color: 'dark', done: false },
          { event: 'reply', time: '', show: false, color: 'dark', done: false },
          { event: 'reject', time: '', show: false, color: 'dark', done: false },
          { event: 'delay', time: '', show: false, color: 'dark', done: false },
          { event: 'cancel', time: '', show: false, color: 'dark', done: false }
        ],
        lastProcess: ''
        // create: { time: '2017-06-01 12:30:00', show: true, color: 'gray' },
        // dispatch: { time: '2017-06-01 12:30:00', show: true, color: 'gray' },
        // accept: { time: '', show: true, color: 'dark', done: false },
        // go: { time: '', show: false, color: 'dark', done: false },
        // arrive: { time: '', show: false, color: 'dark', done: false },
        // reply: { time: '', show: false, color: 'dark', done: false },
        // reject: { time: '', show: false, color: 'dark', done: false, lastOperate: '' },
        // delay: { time: '', show: false, color: 'dark', done: false, lastOperate:'' },
        // cancel: { time: '', show: false, color: 'dark', done: false }
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
          processes: [
            { event: 'create', time: '2017-06-01 12:30:00', show: true, color: 'gray' },
            { event: 'dispatch', time: '2017-06-01 12:30:00', show: true, color: 'gray' },
            { event: 'accept', time: '', show: true, color: 'dark', done: false },
            { event: 'go', time: '', show: false, color: 'dark', done: false },
            { event: 'arrive', time: '', show: false, color: 'dark', done: false },
            { event: 'reply', time: '', show: false, color: 'dark', done: false },
            { event: 'reject', time: '', show: false, color: 'dark', done: false },
            { event: 'delay', time: '', show: false, color: 'dark', done: false },
            { event: 'cancel', time: '', show: false, color: 'dark', done: false }
          ],
          lastProcess: ''
          // create: { time: '2017-06-01 12:30:00', show: true, color: 'gray' },
          // dispatch: { time: '2017-06-01 12:30:00', show: true, color: 'gray' },
          // accept: { time: '', show: true, color: 'dark' },
          // go: { time: '', show: false, color: 'dark' },
          // arrive: { time: '', show: false, color: 'dark' },
          // reply: { time: '', show: false, color: 'dark' },
          // reject: { time: '', show: false, color: 'dark', lastOperate: '' },
          // delay: { time: '', show: false, color: 'dark', lastOperate: '' },
          // cancel: { time: '', show: false, color: 'dark' }
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
    let processes = {};
    if (!this.transformProcesses(work, processes)) {
      return;
    }

    if (!processes['accept'].done) {
      processes['accept'].time = new Date();
      processes['accept'].color = this.gray;
      processes['accept'].done = true;
      processes['go'].show = true;
      processes['reject'].show = true;
      processes['delay'].show = true;
      processes['cancel'].show = true;
      work.lastProcess = 'accept';
    }
  }

  go(work: any) {
    let processes = {};
    if (!this.transformProcesses(work, processes)) {
      return;
    }

    if (!processes['go'].done) {
      processes['go'].time = new Date();
      processes['go'].color = this.gray;
      processes['go'].done = true;
      processes['arrive'].show = true;
      processes['reject'].show = true;
      processes['delay'].show = true;
      processes['cancel'].show = true;
      work.lastProcess = 'go';
    }
  }

  arrive(work: any) {
    let processes = {};
    if (!this.transformProcesses(work, processes)) {
      return;
    }

    if (!processes['arrive'].done) {
      processes['arrive'].time = new Date();
      processes['arrive'].color = this.gray;
      processes['arrive'].done = true;
      processes['reply'].show = true;
      processes['reject'].show = true;
      processes['delay'].show = true;
      processes['cancel'].show = true;
      work.lastProcess = 'arrive';
    }
  }

  reply(work: any) {
    let processes = {};
    if (!this.transformProcesses(work, processes)) {
      return;
    }

    if (!processes['reply'].done) {
      processes['reply'].time = new Date();
      processes['reply'].color = this.gray;
      processes['reply'].done = true;
      processes['reject'].show = false;
      processes['delay'].show = processes['delay'].done;
      processes['cancel'].show = true;
      work.lastProcess = 'reply';
    }
  }

  /**
   * 退单
   * @param work
   */
  reject(work: any) {
    let processes = {};
    if (!this.transformProcesses(work, processes)) {
      return;
    }

    if (!processes['reject'].done) {
      processes['reject'].time = new Date();
      processes['reject'].color = this.gray;
      processes['reject'].done = true;

      processes['go'].show = processes['go'].done;
      processes['arrive'].show = processes['arrive'].done;
      processes['reply'].show = processes['reply'].done;
      processes['delay'].show = processes['delay'].done;
      processes['cancel'].show = false;

      // if (work.accept.done) {
      //   work.reject.lastOperate = '接单';
      // }
      //
      // if (work.go.done) {
      //   work.reject.lastOperate = '出发';
      // }
      //
      // if (work.arrive.done) {
      //   work.reject.lastOperate = '到场';
      // }
      //
      // if (work.delay.done) {
      //   work.reject.lastOperate = '延迟';
      // }
    }
  }

  /**
   * 延迟
   * @param work
   */
  delay(work: any) {
    let processes = {};
    if (!this.transformProcesses(work, processes)) {
      return;
    }

    if (!processes['delay'].done) {
      processes['delay'].time = new Date();
      processes['delay'].color = this.gray;
      processes['delay'].done = true;

      if (work.lastProcess === 'accept') {

      }

      if (work.lastProcess === 'go') {

      }

      if (work.lastProcess === 'arrive') {

      }

      // if (work.accept.done) {
      //   work.delay.lastOperate = '接单';
      // }
      //
      // if (work.go.done) {
      //   work.delay.lastOperate = '出发';
      // }
      //
      // if (work.arrive.done) {
      //   work.delay.lastOperate = '到场';
      // }
    }
  }

  cancel(work: any) {
    // if (!work.cancel.done) {
    //   work.cancel.time = new Date();
    //   work.cancel.color = this.gray;
    //   work.cancel.done = true;
    //
    //   work.go.show = work.go.done;
    //   work.arrive.show = work.arrive.done;
    //   work.reply.show = work.reply.done;
    //   work.reject.show = work.reject.done;
    //   work.delay.show = work.delay.done;
    // }
  }

  private transformProcesses(work: any, processes: object): boolean {
    if (work.processes instanceof Array && work.processes.length > 0) {
      for (let i of work.processes) {
        processes[i.event] = i;
      }

      return true;
    }

    return false;
  }

  private sortProcesses(work: any, lastEvent: string, curEvent: string): boolean {
    if (work.processes instanceof Array && work.processes.length > 0) {
      let processes = [];
      let curProcess;
      for (let i of work.processes) {
        if (i.event === curEvent) {
          curProcess = i;
          continue;
        }

        processes.push(i);
      }

      for (let i of processes) {

      }

      return true;
    }

    return false;
  }
}
