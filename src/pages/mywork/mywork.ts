import { Component, ViewChild } from '@angular/core';
import { Content, NavController } from 'ionic-angular';
import {WorkDetailPage} from "../workdetail/workdetail";

@Component({
  selector: 'page-mywork',
  templateUrl: 'mywork.html'
})

export class MyWorkPage {
  @ViewChild(Content) content: Content;
  title: string = '任务列表';
  showToolbar: boolean = false;
  showFab: boolean = false;
  // dark: string = 'dark';
  // gray: string = 'gray';

  disableColor: string = 'gray';
  enableColor: string = 'primary';

  items: any[] = [];

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 10; i++) {
      this.items.push({
        id: this.items.length,
        type: '热线工单',
        describe: "上海市杨浦区控江路1555号水管维修",
        processes: [
          { event: 'create', name: '创建时间', time: '2017-06-01 12:30:00', show: true, color: this.disableColor },
          { event: 'dispatch', name: '派发时间', time: '2017-06-01 12:30:00', show: true, color: this.disableColor },
          { event: 'accept', name: '接单时间', time: '', show: true, color: this.enableColor, done: false },
          { event: 'go', name: '出发时间', time: '', show: false, color: this.enableColor, done: false },
          { event: 'arrive', name: '到场时间', time: '', show: false, color: this.enableColor, done: false },
          { event: 'reply', name: '回复时间', time: '', show: false, color: this.enableColor, done: false },
          { event: 'reject', name: '退单时间', time: '', show: false, color: this.enableColor, done: false },
          { event: 'delay', name: '延迟时间', time: '', show: false, color: this.enableColor, done: false },
          { event: 'cancel', name: '销单时间', time: '', show: false, color: this.enableColor, done: false }
        ],
        lastProcess: '',
        photoCount: 0,
        audioCount: 0,
        videoCount: 0
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

  itemSelected(work: any, index: number) {
    console.log("Selected Item", index);
    switch (work.processes[index].event) {
      case 'accept':
        this.accept(work);
        break;
      case 'go':
        this.go(work);
        break;
      case 'arrive':
        this.arrive(work);
        break;
      case 'reply':
        this.reply(work);
        break;
      case 'reject':
        this.reject(work);
        break;
      case 'delay':
        this.delay(work);
        break;
      case 'cancel':
        this.cancel(work);
        break;
    }
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
            { event: 'create', name: '创建时间', time: '2017-06-01 12:30:00', show: true, color: this.disableColor },
            { event: 'dispatch', name: '派发时间', time: '2017-06-01 12:30:00', show: true, color: this.disableColor },
            { event: 'accept', name: '接单时间', time: '', show: true, color: this.enableColor, done: false },
            { event: 'go', name: '出发时间', time: '', show: false, color: this.enableColor, done: false },
            { event: 'arrive', name: '到场时间', time: '', show: false, color: this.enableColor, done: false },
            { event: 'reply', name: '回复时间', time: '', show: false, color: this.enableColor, done: false },
            { event: 'reject', name: '退单时间', time: '', show: false, color: this.enableColor, done: false },
            { event: 'delay', name: '延迟时间', time: '', show: false, color: this.enableColor, done: false },
            { event: 'cancel', name: '销单时间', time: '', show: false, color: this.enableColor, done: false }
          ],
          lastProcess: '',
          photoCount: 0,
          audioCount: 0,
          videoCount: 0
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
   * 预览工单
   * @param work
   */
  onPreview(work: any) {
    this.navCtrl.push(WorkDetailPage);
  }

  /**
   * 接单
   * @param work
   */
  private accept(work: any) {
    let processes = {};
    if (!this.transformProcesses(work, processes)) {
      return;
    }

    if (!processes['accept'].done) {
      processes['accept'].time = new Date();
      processes['accept'].color = this.disableColor;
      processes['accept'].done = true;
      processes['go'].show = true;
      processes['reject'].show = true;
      processes['delay'].show = true;
      //processes['cancel'].show = true;
      work.lastProcess = 'accept';
    }
  }

  /**
   * 出发
   * @param work
   */
  private go(work: any) {
    let processes = {};
    if (!this.transformProcesses(work, processes)) {
      return;
    }

    if (!processes['go'].done) {
      processes['go'].time = new Date();
      processes['go'].color = this.disableColor;
      processes['go'].done = true;
      processes['arrive'].show = true;
      processes['reject'].show = true;
      processes['delay'].show = true;
      //processes['cancel'].show = true;
      work.lastProcess = 'go';
    }
  }

  /**
   * 到场
   * @param work
   */
  private arrive(work: any) {
    let processes = {};
    if (!this.transformProcesses(work, processes)) {
      return;
    }

    if (!processes['arrive'].done) {
      processes['arrive'].time = new Date();
      processes['arrive'].color = this.disableColor;
      processes['arrive'].done = true;
      processes['reply'].show = true;
      processes['reject'].show = true;
      processes['delay'].show = true;
      //processes['cancel'].show = true;
      work.lastProcess = 'arrive';
    }
  }

  /**
   * 回复
   * @param work
   */
  private reply(work: any) {
    let processes = {};
    if (!this.transformProcesses(work, processes)) {
      return;
    }

    if (!processes['reply'].done) {
      processes['reply'].time = new Date();
      processes['reply'].color = this.disableColor;
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
  private reject(work: any) {
    let processes = {};
    if (!this.transformProcesses(work, processes)) {
      return;
    }

    if (!processes['reject'].done) {
      processes['reject'].time = new Date();
      processes['reject'].color = this.disableColor;
      processes['reject'].done = true;

      processes['go'].show = processes['go'].done;
      processes['arrive'].show = processes['arrive'].done;
      processes['reply'].show = processes['reply'].done;
      processes['delay'].show = processes['delay'].done;
      //processes['cancel'].show = false;
      work.lastProcess = 'reject';
    }
  }

  /**
   * 延迟
   * @param work
   */
  private delay(work: any) {
    let processes = {};
    if (!this.transformProcesses(work, processes)) {
      return;
    }

    if (!processes['delay'].done) {
      let isSuccess: boolean = false;
      if (work.lastProcess === 'accept'
        && this.sortProcesses(work, "accept", "delay", "延迟时间")
        && this.transformProcesses(work, processes = {})) {
        isSuccess = true;
      }

      if (work.lastProcess === 'go'
        && this.sortProcesses(work, "go", "delay", "延迟时间")
        && this.transformProcesses(work, processes = {})) {
        isSuccess = true;
      }

      if (work.lastProcess === 'arrive'
        && this.sortProcesses(work, "arrive", "delay", "延迟时间")
        && this.transformProcesses(work, processes = {})) {
        isSuccess = true;
      }

      if (isSuccess) {
        processes['delay'].time = new Date();
        processes['delay'].color = this.disableColor;
        processes['delay'].done = true;
        work.lastProcess = 'delay';
      }
    }
  }

  /**
   * 销单
   * @param work
   */
  private cancel(work: any) {
    let processes = {};
    if (!this.transformProcesses(work, processes)) {
      return;
    }

    if (!processes['cancel'].done) {
      processes['cancel'].time = new Date();
      processes['cancel'].color = this.disableColor;
      processes['cancel'].done = true;

      processes['go'].show = processes['go'].done;
      processes['arrive'].show = processes['arrive'].done;
      processes['reply'].show = processes['reply'].done;
      processes['reject'].show = processes['reject'].done;
      processes['delay'].show = processes['delay'].done;
      work.lastProcess = 'cancel';
    }
  }

  /**
   * 处理步骤数组转对象
   * @param work
   * @param processes
   * @returns {boolean}
   */
  private transformProcesses(work: any, processes: object): boolean {
    if (work.processes instanceof Array && work.processes.length > 0) {
      for (let i of work.processes) {
        processes[i.event] = i;
      }

      return true;
    }

    return false;
  }

  /**
   *
   * @param work
   * @param lastEvent
   * @param curEvent
   * @returns {boolean}
   */
  private sortProcesses(work: any, lastEvent: string, curEvent: string, curName: string): boolean {
    if (work.processes instanceof Array
      && work.processes.length > 0
      && lastEvent && curEvent && curName) {
      let lastIndex, curIndex;
      let processes = work.processes;
      for (let i = 0; i < processes.length; i++) {
        if (processes[i].event === lastEvent) {
          lastIndex = i;
        } else if (processes[i].event === curEvent) {
          curIndex = i;
        }
      }

      if (lastIndex >= curIndex) {
        return false;
      }

      for (let i = curIndex; i > lastIndex; i--) {
        processes[i].event = processes[i-1].event;
        processes[i].name = processes[i-1].name;
        processes[i].time = processes[i-1].time;
        processes[i].show = processes[i-1].show;
        processes[i].color = processes[i-1].color;
        processes[i].done = processes[i-1].done;
      }

      processes[lastIndex + 1].event = curEvent;
      processes[lastIndex + 1].name = curName;
      return true;
    }

    return false;
  }
}
