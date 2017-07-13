import {Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {Content, NavController, InfiniteScroll, AlertController, Events} from 'ionic-angular';
import {WorkDetailPage} from "../workdetail/workdetail";
import {DataService} from "../../providers/DataService";
import {TaskEx, TaskState} from "../../model/Task";
import {ProcessEx, DelayExtend, RejectExtend, CancelExtend} from "../../model/Process";
import {GlobalService, MyWorkUpdateEvent} from "../../providers/GlobalService";

@Component({
  selector: 'page-mywork',
  templateUrl: 'mywork.html'
})

export class MyWorkPage implements OnInit, OnDestroy {
  private readonly tag: string = "[MyWorkPage]";
  private readonly disableColor: string = 'gray';
  //private enableColor: string = 'primary';

  @ViewChild(Content) content: Content;
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  title: string = '任务列表';
  showToolbar: boolean = false;
  showFab: boolean = false;

  items: TaskEx[] = [];
  private since: number = 1;
  private count: number = 10;
  private isDownloadFinished: boolean = true;

  constructor(public navCtrl: NavController,
              private dataService: DataService,
              private alertCtrl: AlertController,
              private events: Events,
              private globalService: GlobalService) {
  }

  /**
   * 初始化
   */
  ngOnInit() {
    console.log(this.tag, 'ngOnInit');
    this.subscribeEvent(this.events);
    this.getTasks(this.since, this.count)
      .then(data => {
        this.infiniteScroll.enable(data);
        //this.downloadTasks();
        this.getTaskCount();
      })
      .catch(error => {
        console.error(error);
        //this.downloadTasks();
      });
  }

  /**
   * 销毁
   */
  ngOnDestroy() {
    console.log(this.tag, 'ngOnDestroy');
    this.events.unsubscribe(this.globalService.myWorkUpdateEvent);
  }

  /**
   * 下拉同步
   * @param refresher
   */
  doRefresh(refresher) {
    console.log(this.tag, 'doRefresh');
    this.downloadTasks()
      .then(data => {
        refresher.complete();
        this.getTaskCount();
      });
  }

  /**
   * 上拉，加载更多项
   * @param infiniteScroll
   */
  doInfinite(infiniteScroll) {
    console.log(this.tag, 'doInfinite begin');

    setTimeout(() => {
      this.since += this.count;
      this.getTasks(this.since, this.count)
        .then(data => {
          this.showFab = true;
          if (!data) {
            infiniteScroll.enable(false);
          } else {
            infiniteScroll.complete();
          }
          console.log(this.tag, 'doInfinite end');
        })
        .catch(error => {
          console.error(error);
          infiniteScroll.complete();
        });
    }, 100);
  }

  /**
   * 处理各个操作
   * @param taskEx
   * @param index
   */
  itemSelected(taskEx: TaskEx, index: number) {
    console.log(this.tag, "Selected Item " + index);
    switch (taskEx.processes[index].event) {
      case 'accept':
        this.accept(taskEx);
        break;
      case 'go':
        this.go(taskEx);
        break;
      case 'arrive':
        this.arrive(taskEx);
        break;
      case 'reply':
        this.reply(taskEx);
        break;
      case 'reject':
        this.rejectPrompt(taskEx);
        break;
      case 'delay':
        this.delayPrompt(taskEx);
        break;
      case 'cancel':
        this.cancelPrompt(taskEx);
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
   * @param taskEx
   */
  onPreview(taskEx: TaskEx) {
    taskEx.isPreview = true;
    this.navCtrl.push(WorkDetailPage, taskEx);
  }

  /**
   * 下载任务
   */
  private downloadTasks(): Promise<boolean> {
    this.isDownloadFinished = false;
    return this.dataService.downloadTasks()
      .then(data => {
        this.since = 1;
        while (this.items.shift());
        return this.getTasks(this.since, this.count);
      })
      .then(data => {
        this.infiniteScroll.enable(data);
        this.isDownloadFinished = true;
        return Promise.resolve(data);
      })
      .catch(error => {
        console.error(error);
        this.isDownloadFinished = true;
        return Promise.resolve(false);
      });
  }

  /**
   * 获取任务列表
   * @param since
   * @param count
   * @returns {Promise<T>}
   */
  private getTasks(since: number, count: number): Promise<boolean> {
    return this.dataService.getTasks(since, count)
      .then(tasks => {
        console.log(this.tag + "getTasks: " + tasks.length);

        if (tasks.length <= 0) {
          return Promise.resolve(false)
        } else {
          TaskEx.transform(tasks, this.items);
          return this.setProcesses(this.items);
        }
      });
  }

  /**
   *
   * @param taskExs
   * @returns {Promise<T>}
   */
  private setProcesses(taskExs: Array<TaskEx>): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let result: boolean = false;
      for (let taskEx of taskExs) {
        let processEx: ProcessEx = new ProcessEx();
        if (!this.transform2ProcessEx(taskEx, processEx)) {
          continue;
        }

        if (processEx.accept.time) {
          processEx.accept.show = true;
          processEx.accept.color = this.disableColor;
          processEx.accept.done = true;
          taskEx.lastProcess = 'accept';
        }

        if (processEx.go.time) {
          processEx.go.show = true;
          processEx.go.color = this.disableColor;
          processEx.go.done = true;
          if (taskEx.lastProcess != 'accept') {
            processEx.accept.show = true;
            processEx.accept.color = this.disableColor;
            processEx.accept.done = true;
          }
          taskEx.lastProcess = 'go';
        }

        if (processEx.arrive.time) {
          processEx.arrive.show = true;
          processEx.arrive.color = this.disableColor;
          processEx.arrive.done = true;
          if (taskEx.lastProcess != 'go') {
            processEx.go.show = true;
            processEx.go.color = this.disableColor;
            processEx.go.done = true;
          }
          taskEx.lastProcess = 'arrive';
        }

        if (processEx.reply.time) {
          processEx.reply.show = true;
          processEx.reply.color = this.disableColor;
          processEx.reply.done = true;
          if (taskEx.lastProcess != 'arrive') {
            processEx.arrive.show = true;
            processEx.arrive.color = this.disableColor;
            processEx.arrive.done = true;
          }
          taskEx.lastProcess = 'reply';
        }

        if (processEx.reject.time) {
          processEx.reject.show = true;
          processEx.reject.color = this.disableColor;
          processEx.reject.done = true;
          taskEx.lastProcess = 'reject';
        }

        if (processEx.delay.time) {
          processEx.delay.show = true;
          processEx.delay.color = this.disableColor;
          processEx.delay.done = true;
          taskEx.lastProcess = 'delay';
        }

        if (processEx.cancel.time) {
          processEx.cancel.show = true;
          processEx.cancel.color = this.disableColor;
          processEx.cancel.done = true;
          taskEx.lastProcess = 'cancel';
        }

        switch (taskEx.lastProcess) {
          case 'accept':
            processEx.go.show = true;
            processEx.reject.show = true;
            processEx.delay.show = true;
            break;
          case 'go':
            processEx.arrive.show = true;
            processEx.reject.show = true;
            processEx.delay.show = true;
            break;
          case 'arrive':
            processEx.reply.show = true;
            processEx.reject.show = true;
            processEx.delay.show = true;
            break;
          case 'reply':
            processEx.reject.show = false;
            processEx.delay.show = processEx.delay.done;
            processEx.cancel.show = true;
            break;
          case 'reject':
            processEx.go.show = processEx.go.done;
            processEx.arrive.show = processEx.arrive.done;
            processEx.reply.show = processEx.reply.done;
            processEx.delay.show = processEx.delay.done;
            break;
          case 'delay':
            break;
          case 'cancel':
            break;
          default:
            break;
        }

        result = true;
      }

      resolve(result);
    });
  }

  /**
   * 获取任务数
   */
  private getTaskCount(): void {
    this.dataService.getTaskCount()
      .then(count => {
        this.events.publish(this.globalService.mainUpdateEvent, {type: 'myWorkCount', count});
      })
      .catch(error => console.error(error));
  }

  /**
   * 接单
   * @param taskEx
   */
  private accept(taskEx: TaskEx) {
    let processEx: ProcessEx = new ProcessEx();
    if (!this.transform2ProcessEx(taskEx, processEx)) {
      return;
    }

    if (!processEx.accept.done) {
      let time = new Date();
      this.dataService.accept({
        acceptTime: time.getTime(),
        location: {
          type: "bd09ll",
          lng: "121.525766",
          lat: "31.280693"
        },
        taskId: taskEx.id,
        userId: this.globalService.userId
      }).then(data => {
        processEx.accept.time = time;
        processEx.accept.color = this.disableColor;
        processEx.accept.done = true;
        processEx.go.show = true;
        processEx.reject.show = true;
        processEx.delay.show = true;
        //processEx.cancel.show = true;
        taskEx.lastProcess = 'accept';
        taskEx.state = TaskState.Accept;
      }).catch(error => {
        console.error(this.tag + error);
        this.globalService.showToast(error);
      });
    }
  }

  /**
   * 出发
   * @param taskEx
   */
  private go(taskEx: TaskEx) {
    let processEx: ProcessEx = new ProcessEx();
    if (!this.transform2ProcessEx(taskEx, processEx)) {
      return;
    }

    if (!processEx.go.done) {
      let time = new Date();
      this.dataService.go({
        goTime: time.getTime(),
        location: {
          type: "bd09ll",
          lng: "121.525766",
          lat: "31.280693"
        },
        taskId: taskEx.id,
        userId: this.globalService.userId
      }).then(data => {
        processEx.go.time = new Date();
        processEx.go.color = this.disableColor;
        processEx.go.done = true;
        processEx.arrive.show = true;
        processEx.reject.show = true;
        processEx.delay.show = true;
        //processEx.cancel.show = true;
        taskEx.lastProcess = 'go';
        taskEx.state = TaskState.Go;
      }).catch(error => {
        console.error(this.tag + error);
        this.globalService.showToast(error);
      });
    }
  }

  /**
   * 到场
   * @param taskEx
   */
  private arrive(taskEx: TaskEx) {
    let processEx: ProcessEx = new ProcessEx();
    if (!this.transform2ProcessEx(taskEx, processEx)) {
      return;
    }

    if (!processEx.arrive.done) {
      let time = new Date();
      this.dataService.arrive({
        arrivedTime: time.getTime(),
        location: {
          type: "bd09ll",
          lng: "121.525766",
          lat: "31.280693"
        },
        taskId: taskEx.id,
        userId: this.globalService.userId
      }).then(data => {
        processEx.arrive.time = time;
        processEx.arrive.color = this.disableColor;
        processEx.arrive.done = true;
        processEx.reply.show = true;
        processEx.reject.show = true;
        processEx.delay.show = true;
        //processEx.cancel.show = true;
        taskEx.lastProcess = 'arrive';
        taskEx.state = TaskState.Arrived;
      }).catch(error => {
        console.error(this.tag + error);
        this.globalService.showToast(error);
      });
    }
  }

  /**
   * 回复
   * @param taskEx
   */
  private reply(taskEx: TaskEx) {
    let processEx: ProcessEx = new ProcessEx();
    if (!this.transform2ProcessEx(taskEx, processEx)) {
      return;
    }

    if (!processEx.reply.done) {
      taskEx.isPreview = false;
      this.navCtrl.push(WorkDetailPage, taskEx);
    }
  }

  /**
   * 退单
   * @param taskEx
   */
  private reject(taskEx: TaskEx) {
    let processEx: ProcessEx = new ProcessEx();
    if (!this.transform2ProcessEx(taskEx, processEx)) {
      return;
    }

    if (!processEx.reject.done) {
      let time = new Date();
      let rejectExtend: RejectExtend = processEx.reject.extend as RejectExtend;
      this.dataService.reject({
        rejectTime: time.getTime(),
        rejectReason: rejectExtend.reason,
        location: {
          type: "bd09ll",
          lng: "121.525766",
          lat: "31.280693"
        },
        taskId: taskEx.id,
        userId: this.globalService.userId
      }).then(data => {
        processEx.reject.time = time;
        processEx.reject.color = this.disableColor;
        processEx.reject.done = true;

        processEx.go.show = processEx.go.done;
        processEx.arrive.show = processEx.arrive.done;
        processEx.reply.show = processEx.reply.done;
        processEx.delay.show = processEx.delay.done;
        //processEx.cancel.show = false;
        taskEx.lastProcess = 'reject';
        taskEx.state = TaskState.Reject;
      }).catch(error => {
        console.error(this.tag + error);
        this.globalService.showToast(error);
      });
    }
  }

  /**
   * 延迟
   * @param taskEx
   */
  private delay(taskEx: TaskEx) {
    let processEx: ProcessEx = new ProcessEx();
    if (!this.transform2ProcessEx(taskEx, processEx)) {
      return;
    }

    if (!processEx.delay.done) {
      let isSuccess: boolean = false;
      let lastProcess: string = "accept";
      let curEvent: string = "delay";
      let curName: string = "延迟时间";
      let extend: DelayExtend = processEx.delay.extend as DelayExtend;
      if (taskEx.lastProcess === lastProcess
        && this.sortDelayProcess(taskEx, lastProcess, curEvent, curName, extend)
        && this.transform2ProcessEx(taskEx, processEx = new ProcessEx())) {
        isSuccess = true;
      }

      lastProcess = "go";
      if (taskEx.lastProcess === lastProcess
        && this.sortDelayProcess(taskEx, lastProcess, curEvent, curName, extend)
        && this.transform2ProcessEx(taskEx, processEx = new ProcessEx())) {
        isSuccess = true;
      }

      lastProcess = "arrive";
      if (taskEx.lastProcess === lastProcess
        && this.sortDelayProcess(taskEx, lastProcess, curEvent, curName, extend)
        && this.transform2ProcessEx(taskEx, processEx = new ProcessEx())) {
        isSuccess = true;
      }

      if (isSuccess) {
        let time = new Date();
        let delayExtend: DelayExtend = processEx.delay.extend as DelayExtend;
        this.dataService.delay({
          delayTime: time.getTime(),
          deadline: delayExtend.deadline.getTime(),
          comment: delayExtend.comment,
          location: {
            type: "bd09ll",
            lng: "121.525766",
            lat: "31.280693"
          },
          taskId: taskEx.id,
          userId: this.globalService.userId
        }).then(data => {
          processEx.delay.time = time;
          processEx.delay.color = this.disableColor;
          processEx.delay.done = true;
          taskEx.lastProcess = 'delay';
          taskEx.state = TaskState.Delay;
        }).catch(error => {
          console.error(this.tag + error);
          this.globalService.showToast(error);
        });
      }
    }
  }

  /**
   * 销单
   * @param taskEx
   */
  private cancel(taskEx: TaskEx) {
    let processEx: ProcessEx = new ProcessEx();
    if (!this.transform2ProcessEx(taskEx, processEx)) {
      return;
    }

    if (!processEx.cancel.done) {
      let time = new Date();
      let cancelExtend: CancelExtend = processEx.cancel.extend as CancelExtend;
      this.dataService.cancel({
        destroyTime: time.getTime(),
        destroyRemark: cancelExtend.remark,
        location: {
          type: "bd09ll",
          lng: "121.525766",
          lat: "31.280693"
        },
        taskId: taskEx.id,
        userId: this.globalService.userId
      }).then(data => {
        processEx.cancel.time = time;
        processEx.cancel.color = this.disableColor;
        processEx.cancel.done = true;

        processEx.go.show = processEx.go.done;
        processEx.arrive.show = processEx.arrive.done;
        processEx.reply.show = processEx.reply.done;
        processEx.reject.show = processEx.reject.done;
        processEx.delay.show = processEx.delay.done;
        taskEx.lastProcess = 'cancel';
        taskEx.state = TaskState.Cancel;

        this.events.publish(this.globalService.myWorkUpdateEvent, {type: 'cancel'});
      }).catch(error => {
        console.error(this.tag + error);
        this.globalService.showToast(error);
      });
    }
  }

  /**
   * 处理步骤数组转对象
   * @param taskEx
   * @param processEx
   * @returns {boolean}
   */
  private transform2ProcessEx(taskEx: TaskEx, processEx: ProcessEx): boolean {
    if (!taskEx && !processEx) {
      return false;
    }

    for (let i of taskEx.processes) {
      switch (i.event) {
        case 'create':
          processEx.create = i;
          break;
        case 'dispatch':
          processEx.dispatch = i;
          break;
        case 'accept':
          processEx.accept = i;
          break;
        case 'go':
          processEx.go = i;
          break;
        case 'arrive':
          processEx.arrive = i;
          break;
        case 'reply':
          processEx.reply = i;
          break;
        case 'reject':
          processEx.reject = i;
          break;
        case 'delay':
          processEx.delay = i;
          break;
        case 'cancel':
          processEx.cancel = i;
          break;
        default:
          console.error(this.tag, i.event);
          break;
      }
    }

    return !!(processEx && processEx.create && processEx.dispatch && processEx.accept && processEx.go && processEx.arrive
    && processEx.reply && processEx.reject && processEx.delay && processEx.cancel);
  }

  /**
   *
   * @param taskEx
   * @param lastEvent
   * @param curEvent
   * @param curName
   * @param curExtend
   * @returns {boolean}
   */
  private sortDelayProcess(taskEx: TaskEx, lastEvent: string, curEvent: string, curName: string, curExtend: any): boolean {
    if (taskEx.processes.length > 0 && lastEvent && curEvent && curName && curExtend) {
      let lastIndex, curIndex;
      let processes = taskEx.processes;
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
        processes[i].extend = processes[i - 1].extend;
      }

      processes[lastIndex + 1].event = curEvent;
      processes[lastIndex + 1].name = curName;
      processes[lastIndex + 1].extend = curExtend;
      return true;
    }

    return false;
  }

  /**
   * 退单对话框
   * @param taskEx
   */
  private rejectPrompt(taskEx: TaskEx): void {
    let processEx: ProcessEx = new ProcessEx();
    if (!this.transform2ProcessEx(taskEx, processEx) || processEx.reject.done) {
      return;
    }

    let prompt = this.alertCtrl.create({
      title: '退单申请',
      message: "请填写退单信息!",
      inputs: [
        {
          name: 'reason',
          placeholder: '原因'
        }
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
          }
        },
        {
          text: '确定',
          handler: data => {
            console.log(this.tag, data);
            if (!data.reason) {
              return this.globalService.showToast("请填写原因!");
            }

            processEx.reject.extend = {
              reason: data.reason
            };

            this.reject(taskEx);
          }
        }
      ]
    });
    prompt.present();
  }

  /**
   * 延迟对话框
   * @param taskEx
   */
  private delayPrompt(taskEx: TaskEx): void {
    let processEx: ProcessEx = new ProcessEx();
    if (!this.transform2ProcessEx(taskEx, processEx) || processEx.delay.done) {
      return;
    }

    let prompt = this.alertCtrl.create({
      title: '延迟申请',
      message: "请填写延迟信息!",
      inputs: [
        {
          name: 'day',
          placeholder: '天数',
          type: 'number'
        },
        {
          name: 'hour',
          placeholder: '小时',
          type: 'number'
        },
        {
          name: 'minute',
          placeholder: '分钟',
          type: 'number'
        },
        {
          name: 'reason',
          placeholder: '原因'
        }
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
          }
        },
        {
          text: '确定',
          handler: data => {
            console.log(this.tag, data);
            if (Number.isNaN(data.day)
              && Number.isNaN(data.hour)
              && Number.isNaN(data.minute)) {
              return this.globalService.showToast("请填写有效的时间!");
            } else if (!data.reason) {
              return this.globalService.showToast("请填写原因!");
            } else {
              let day: number = Number.parseInt(data.day);
              let hour: number = Number.parseInt(data.hour);
              let minute: number = Number.parseInt(data.minute);
              if ((Number.isFinite(day) && day < 0)
                || (Number.isFinite(hour) && hour < 0)
                || (Number.isFinite(minute) && minute < 0)) {
                return this.globalService.showToast("填写的时间必须大于零!");
              }

              let time: number = 0;
              if (Number.isFinite(day)) {
                time += day * 24 * 60;
              }

              if (Number.isFinite(hour)) {
                time += hour * 60;
              }

              if (Number.isFinite(minute)) {
                time += minute;
              }

              let deadline: Date = new Date(new Date().getTime() + time * 60000);
              processEx.delay.extend = {
                comment: data.reason,
                deadline
              };
              this.delay(taskEx);
            }
          }
        }
      ]
    });
    prompt.present();
  }

  /**
   * 销单对话框
   * @param taskEx
   */
  private cancelPrompt(taskEx: TaskEx): void {
    let processEx: ProcessEx = new ProcessEx();
    if (!this.transform2ProcessEx(taskEx, processEx) || processEx.cancel.done) {
      return;
    }

    let prompt = this.alertCtrl.create({
      title: '销单申请',
      message: "请填写销单信息!",
      inputs: [
        {
          name: 'remark',
          placeholder: '备注'
        }
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
          }
        },
        {
          text: '确定',
          handler: data => {
            console.log(this.tag, data);
            if (!data.remark) {
              return this.globalService.showToast("请填写备注!");
            }

            processEx.cancel.extend = {
              remark: data.remark
            };

            this.cancel(taskEx);
          }
        }
      ]
    });
    prompt.present();
  }

  private subscribeEvent(events: Events): void {
    events.subscribe(this.globalService.myWorkUpdateEvent, (myWorkUpdateEvent: MyWorkUpdateEvent) => {
      console.log("my work need to update");

      if (myWorkUpdateEvent.type === 'reply' && myWorkUpdateEvent.taskEx && myWorkUpdateEvent.time) {
        let processEx: ProcessEx = new ProcessEx();
        if (!this.transform2ProcessEx(myWorkUpdateEvent.taskEx, processEx)) {
          return;
        }

        processEx.reply.time = new Date(myWorkUpdateEvent.time);
        processEx.reply.color = this.disableColor;
        processEx.reply.done = true;
        processEx.reject.show = false;
        processEx.delay.show = processEx.delay.done;
        processEx.cancel.show = true;
        myWorkUpdateEvent.taskEx.lastProcess = 'reply';
        myWorkUpdateEvent.taskEx.state = TaskState.Reply;
      } else if (myWorkUpdateEvent.type === 'cancel') {
        this.since = 1;
        while (this.items.shift());
        this.getTasks(this.since, this.count);
      }
    });
  }
}
