import {Component, ViewChild, OnInit} from '@angular/core';
import {Content, NavController, InfiniteScroll} from 'ionic-angular';
import {WorkDetailPage} from "../workdetail/workdetail";
import {DataService} from "../../providers/DataService";
import {TaskEx} from "../../model/TaskEx";

@Component({
  selector: 'page-mywork',
  templateUrl: 'mywork.html'
})

export class MyWorkPage implements OnInit {
  private tag: string = "[MyWorkPage]";
  private disableColor: string = 'gray';
  //private enableColor: string = 'primary';

  @ViewChild(Content) content: Content;
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  title: string = '任务列表';
  showToolbar: boolean = false;
  showFab: boolean = false;

  items: TaskEx[] = [];
  private since: number = 1;
  private count: number = 2;

  constructor(public navCtrl: NavController, private dataService: DataService) {

  }

  /**
   * 初始化
   */
  ngOnInit() {
    console.log(this.tag + 'ngOnInit');
    this.getTasks(this.since, this.count)
      .then(length => {
        if (length <= 0) {
          this.infiniteScroll.enable(false);
        }
      })
      .catch(error => console.error(error));
  }

  /**
   * 下拉同步
   * @param refresher
   */
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  /**
   * 上拉，加载更多项
   * @param infiniteScroll
   */
  doInfinite(infiniteScroll) {
    console.log(this.tag + 'doInfinite begin');

    setTimeout(() => {
      this.since += this.count;
      this.getTasks(this.since, this.count)
        .then(length => {
          this.showFab = true;
          if (length <= 0) {
            infiniteScroll.enable(false);
          } else {
            infiniteScroll.complete();
          }
          console.log(this.tag + 'doInfinite end');
        })
        .catch(error => console.error(error));
    }, 100);
  }

  /**
   * 处理各个操作
   * @param work
   * @param index
   */
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
   * 获取任务列表
   * @param since
   * @param count
   * @returns {Promise<T>}
   */
  private getTasks(since: number, count: number): Promise<number> {
    return this.dataService.getTasks(since, count)
      .then(tasks => {
        TaskEx.transform(tasks, this.items);
        console.log(this.tag + "getTasks: " + tasks.length);
        return tasks.length;
      })
  }

  /**
   * 接单
   * @param work
   */
  private accept(taskEx: TaskEx) {
    let processes = {};
    if (!this.transformProcesses(taskEx, processes)) {
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
      taskEx.lastProcess = 'accept';

      this.dataService.accept({
        acceptTime: processes['accept'].time,
        location: {
          type: "bd09ll",
          lng: "121.525766",
          lat: "31.280693"
        },
        taskId: taskEx.id,
        userId: 1
      }).then(data => {
        console.log(data);
      }).catch(error => console.error(this.tag + error));
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
        processes[i].event = processes[i - 1].event;
        processes[i].name = processes[i - 1].name;
        processes[i].time = processes[i - 1].time;
        processes[i].show = processes[i - 1].show;
        processes[i].color = processes[i - 1].color;
        processes[i].done = processes[i - 1].done;
      }

      processes[lastIndex + 1].event = curEvent;
      processes[lastIndex + 1].name = curName;
      return true;
    }

    return false;
  }
}
