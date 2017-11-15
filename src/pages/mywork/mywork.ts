import {Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {Content, NavController, InfiniteScroll, AlertController, Events, Refresher} from 'ionic-angular';
import {WorkDetailPage} from "../workdetail/workdetail";
import {DataService} from "../../providers/DataService";
import {Task, TaskEx, TaskState, transform2ProcessEx, transform2Task} from "../../model/Task";
import {ProcessEx, DelayExtend, RejectExtend, CancelExtend, DisableColor} from "../../model/Process";
import {GlobalService, MyWorkUpdateEvent} from "../../providers/GlobalService";
import {AcceptInfo} from "../../model/AcceptInfo";
import {GoInfo} from "../../model/GoInfo";
import {ArriveInfo} from "../../model/ArriveInfo";
import {RejectInfo} from "../../model/RejectInfo";
import {DelayInfo} from "../../model/DelayInfo";
import {CancelInfo} from "../../model/CancelInfo";
import {MapPage} from "../map/map";
import {MapParam, MapType} from "../../model/MapParam";
import {Location} from "../../model/Location";
import {MaterialsPage} from "../materials/materials";
import {History} from "../../model/History";
import {ReplyInfo} from "../../model/ReplyInfo";
import {ConfigService} from "../../providers/ConfigService";
import {OverdueTime} from "../../model/OverdueTime";

enum FromWhere {
  Download,
    //CancelOrReject,
  ReplyOrReject,
  Search,
  Delete
}

@Component({
  selector: 'page-mywork',
  templateUrl: 'mywork.html'
})

export class MyWorkPage implements OnInit, OnDestroy {
  private readonly tag: string = "[MyWorkPage]";
  //private readonly disableColor: string = 'gray';
  //private enableColor: string = 'primary';

  @ViewChild(Refresher) refresher: Refresher;
  @ViewChild(Content) content: Content;
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  title: string = '任务列表';
  showToolbar: boolean = false;
  showFab: boolean = false;

  items: TaskEx[] = [];
  private overdueTime: OverdueTime = null;//超期时限
  private since: number = this.globalService.taskSinceDefault;
  private count: number = this.globalService.taskCountDefault10;
  private isOperationBusy: boolean = false;
  private key: string = '';
  private replyHistories: History[] = [];
  private isCheckingOverdueTime: boolean = false;
  private intervalId: number;
  private isActivePage: boolean;

  constructor(public navCtrl: NavController,
              private dataService: DataService,
              private alertCtrl: AlertController,
              private events: Events,
              private globalService: GlobalService,
              public configService: ConfigService) {
  }

  /**
   * 初始化
   */
  ngOnInit(): void {
    console.log(this.tag, 'ngOnInit');
    this.subscribeEvent(this.events);
    this.showFab = false;
    this.getOverdueTime()
      .then(() => this.getTasks(this.since, this.count, this.key))
      .then(data => {
        this.infiniteScroll.enable(data);
        this.getTaskCount();
        this.intervalId = setInterval(() => {
          if (this.isActivePage) {
            this.checkOverdueTimeTasks();
          }
        }, this.overdueTime.checkInterval);
      })
      .catch(error => console.error(error));
  }

  /**
   * 销毁
   */
  ngOnDestroy(): void {
    console.log(this.tag, 'ngOnDestroy');
    this.events.unsubscribe(this.globalService.myWorkDownloadFinishEvent);
    this.events.unsubscribe(this.globalService.myWorkUpdateEvent);
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ionViewDidEnter(): void {
    console.log("ionViewDidEnter");
    this.isActivePage = true;
  }

  ionViewWillLeave(): void {
    console.log("ionViewWillLeave");
    this.isActivePage = false;
  }

  /**
   * 下拉同步
   * @param refresher
   */
  doRefresh(refresher): void {
    console.log(this.tag, 'doRefresh');

    // if (this.showToolbar) {
    //   this.showToolbar = false;
    //   this.content.resize();
    // }
    this.key = '';
    this.dataService.downloadTasksAndDetails();
  }

  /**
   * 上拉，加载更多项
   * @param infiniteScroll
   */
  doInfinite(infiniteScroll): void {
    console.log(this.tag, 'doInfinite begin');

    setTimeout(() => {
      this.since += this.count;
      this.getTasks(this.since, this.count, this.key)
        .then(data => {
          if (!data) {
            infiniteScroll.enable(false);
            this.checkOverdueTimeTasks();
          } else {
            infiniteScroll.complete();
          }
          console.log(this.tag, 'doInfinite end');
        })
        .catch(error => {
          console.error(error);
          infiniteScroll.complete();
        })
        .then(() => {
          this.showFab = this.items.length > this.count;
        });
    }, 100);
  }

  /**
   * 处理各个操作
   * @param taskEx
   * @param index
   */
  itemSelected(taskEx: TaskEx, index: number): void {
    console.log(this.tag, "Selected Item " + index);
    this.globalService.getLocation()
      .then(location => {
        switch (taskEx.processes[index].event) {
          case 'accept':
            this.accept(taskEx, location);
            break;
          case 'go':
            this.go(taskEx, location);
            break;
          case 'arrive':
            this.arrive(taskEx, location);
            break;
          case 'reply':
            this.reply(taskEx, location);
            break;
          case 'reject':
            this.rejectPrompt(taskEx, location);
            break;
          case 'delay':
            this.delayPrompt(taskEx, location);
            break;
          // case 'cancel':
          //   this.cancelPrompt(taskEx, location);
          //   break;
        }
      })
      .catch(error => {
        console.error(error);
        this.globalService.showToast(error);
      });
  }

  /**
   * 显示/隐藏搜索框
   * @param ev
   */
  toggleToolbar(ev: any): void {
    this.showToolbar = !this.showToolbar;
    this.content.resize();
  }

  /**
   * 搜索
   * @param ev
   */
  onInput(ev: any): void {
    if (this.isOperationBusy) {
      return this.globalService.showToast('后台繁忙...');
    }

    // set val to the value of the ev target
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.key = val;
    } else {
      this.key = '';
    }
    this.resetTasks(FromWhere.Search);
  }

  /**
   *
   * @param ev
   */
  onCancel(ev: any): void {
    console.log(this.tag, 'onCancel');
  }

  /**
   * list回滚到顶部
   * @param ev
   */
  doScroll2Top(ev: any): void {
    this.content.scrollToTop();
  }

  /**
   * 定位地图
   * @param taskEx
   */
  onLocate(taskEx: TaskEx): void {
    this.navCtrl.push(MapPage, new MapParam(MapType.Locate, taskEx.location, taskEx.id));
  }

  /**
   * 预览工单
   * @param taskEx
   */
  onPreview(taskEx: TaskEx): void {
    taskEx.isPreview = true;
    let history: History = this.findReplyHistory(taskEx.id);
    this.navCtrl.push(WorkDetailPage, [taskEx, history]);
  }

  /**
   * 材料登记
   * @param taskEx
   */
  onMaterials(taskEx: TaskEx): void {
    this.navCtrl.push(MaterialsPage, taskEx.id);
  }

  /**
   * 删除任务
   * @param taskEx
   */
  onDelete(taskEx: TaskEx): void {
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
            this.dataService.deleteOneTaskWithAllInfos(taskEx.id)
              .then(result => this.resetTasks(FromWhere.Delete))
              .catch(err => console.error(err));
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * 获取任务列表
   * @param since
   * @param count
   * @param key
   * @returns {Promise<boolean>}
   */
  private getTasks(since: number, count: number, key: string): Promise<boolean> {
    return this.dataService.getTasks(since, count, key)
      .then(tasks => {
        console.log(this.tag + "getTasks: " + tasks.length);
        if (tasks.length <= 0) {
          return Promise.resolve(false)
        } else {
          let taskExs: TaskEx[] = TaskEx.transform(tasks, this.items);
          return this.setProcesses(this.items)
            .then(() => taskExs.map(taskEx => taskEx.id))
            .then(taskIds => this.dataService.checkIfExistNotUploadedHistories(taskIds))
            .then(histories => {
              for (let taskEx of taskExs) {
                let history: History = histories.find(history => history.taskId === taskEx.id);
                if (history) {
                  taskEx.isUploaded = history.uploadedFlag === this.globalService.uploadedFlagForUploaded;
                }
              }
              return Promise.resolve(true);
            });
          /*.then(() => tasks.filter(task => task.state === TaskState.Reply))
           .then(tasks => tasks.map(task => task.taskId))
           .then(taskIds => this.dataService.getReplyHistories(taskIds))
           .then(histories => {
           let result: boolean = false;
           try {
           this.replyHistories.push(...histories);
           this.replyHistories.forEach(history => {
           if (history.mediaNames && history.mediaNames.length > 0) {
           let taskEx: TaskEx = this.items.find(taskEx => taskEx.id === history.taskId);
           if (taskEx) {
           let mediaNames = history.mediaNames;
           taskEx.photoCount = mediaNames.filter(name => name.lastIndexOf(this.globalService.photoSuffix) !== -1).length;
           taskEx.audioCount = mediaNames.filter(name => name.lastIndexOf(this.globalService.audioSuffix) !== -1).length;
           taskEx.videoCount = mediaNames.filter(name => name.lastIndexOf(this.globalService.videoSuffix) !== -1).length;
           }
           }
           });
           result = true;
           } catch (err) {
           console.error(err);
           }

           return Promise.resolve(result);
           });*/
        }
      });
  }

  /**
   * 获取超期时限
   * @returns {Promise<TResult>}
   */
  private getOverdueTime(): Promise<any> {
    return this.configService.getOverdueTime()
      .then(overdueTime => this.overdueTime = overdueTime)
      .catch(err => console.error(this.tag + err))
      .then(() => {
        if (!this.overdueTime) {
          this.overdueTime = {
            arrived: 1800000,
            reply: 1800000,
            delayReply: 1800000,
            checkInterval: 60000
          }
        } else {
          if (!this.overdueTime.arrived) {
            this.overdueTime.arrived = 1800000;
          }

          if (!this.overdueTime.reply) {
            this.overdueTime.reply = 1800000;
          }

          if (!this.overdueTime.delayReply) {
            this.overdueTime.delayReply = 1800000;
          }

          if (!this.overdueTime.checkInterval) {
            this.overdueTime.checkInterval = 60000;
          }
        }
      });
  }

  /**
   * 检查超期工单
   */
  private checkOverdueTimeTasks(): void {
    if (this.isCheckingOverdueTime) {
      return;
    }

    this.isCheckingOverdueTime = true;
    this.dataService.checkOverdueTimeTasks(this.overdueTime)
      .then(tasks => {
        if (!tasks || tasks.length <= 0) {
          return;
        }

        let count: number = 0;
        for (let task of tasks) {
          if (!task.extendedInfo) {
            continue;
          }

          let taskEx: TaskEx = this.items.find(taskEx => taskEx.id === task.taskId);
          if (taskEx) {
            if (task.extendedInfo.arrivedDeadLine) {
              taskEx.isOverdueArrivedLine = true;
              count++;
            } else if (task.extendedInfo.replyDeadLine) {
              taskEx.isOverdueReplyLine = true;
              count++;
            }
          }
        }

        if (count > 0) {
          this.showOverdueCountAlert(count);
        }
      })
      .catch(err => console.error(this.tag + err))
      .then(() => this.isCheckingOverdueTime = false);
  }

  /**
   *
   * @param count
   */
  private showOverdueCountAlert(count: number): void {
    let alert = this.alertCtrl.create({
      title: '提示!',
      subTitle: '当前有' + count + '个热线工单任务超期',
      buttons: ['OK']
    });
    alert.present();
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
        if (!transform2ProcessEx(taskEx, processEx)) {
          continue;
        }

        if (processEx.accept.time) {
          processEx.accept.show = true;
          processEx.accept.color = DisableColor;
          processEx.accept.done = true;
          taskEx.lastProcess = 'accept';
        }

        if (processEx.go.time) {
          processEx.go.show = true;
          processEx.go.color = DisableColor;
          processEx.go.done = true;
          if (taskEx.lastProcess != 'accept') {
            processEx.accept.show = true;
            processEx.accept.color = DisableColor;
            processEx.accept.done = true;
          }
          taskEx.lastProcess = 'go';
        }

        if (processEx.arrive.time) {
          processEx.arrive.show = true;
          processEx.arrive.color = DisableColor;
          processEx.arrive.done = true;
          if (taskEx.lastProcess != 'go') {
            processEx.go.show = true;
            processEx.go.color = DisableColor;
            processEx.go.done = true;
          }
          taskEx.lastProcess = 'arrive';
        }

        if (processEx.reply.time) {
          processEx.reply.show = true;
          processEx.reply.color = DisableColor;
          processEx.reply.done = true;
          if (taskEx.lastProcess != 'arrive') {
            processEx.arrive.show = true;
            processEx.arrive.color = DisableColor;
            processEx.arrive.done = true;
          }
          taskEx.lastProcess = 'reply';
        }

        if (processEx.reject.time) {
          processEx.reject.show = true;
          processEx.reject.color = DisableColor;
          processEx.reject.done = true;
          taskEx.lastProcess = 'reject';
        }

        if (processEx.delay.time) {
          processEx.delay.show = true;
          processEx.delay.color = DisableColor;
          processEx.delay.done = true;
          taskEx.lastProcess = 'delay';
        }

        if (processEx.cancel.time) {
          processEx.cancel.show = true;
          processEx.cancel.color = DisableColor;
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
        if (this.globalService.isChrome) {
          count = this.items.length;
        }

        if (count > 0) {
          this.checkOverdueTimeTasks();
        }
      })
      .catch(error => console.error(error));
  }

  /**
   * 接单
   * @param taskEx
   * @param location
   */
  private accept(taskEx: TaskEx, location: Location): void {
    let processEx: ProcessEx = new ProcessEx();
    if (!transform2ProcessEx(taskEx, processEx)) {
      return;
    }

    if (!processEx.accept.done) {
      let time = new Date();
      let acceptInfo: AcceptInfo = {
        acceptTime: time.getTime(),
        location,
        taskId: taskEx.id,
        userId: this.globalService.userId
      };
      let task: Task = transform2Task(acceptInfo, taskEx, processEx);
      let output: any = {
        uploadedFlag: this.globalService.uploadedFlagForLocal
      };
      this.dataService.accept(acceptInfo, task, output)
        .then(data => {
          let uploadedFlag: boolean = output.uploadedFlag === this.globalService.uploadedFlagForUploaded;
          processEx.accept.time = time;
          processEx.accept.color = DisableColor;
          processEx.accept.done = true;
          processEx.accept.isUploaded = uploadedFlag;
          processEx.go.show = true;
          processEx.reject.show = true;
          processEx.delay.show = true;
          //processEx.cancel.show = true;
          taskEx.lastProcess = 'accept';
          taskEx.state = TaskState.Accept;
          taskEx.isUploaded = taskEx.isUploaded && uploadedFlag;
        })
        .catch(error => {
          console.error(this.tag, error);
          this.globalService.showToast(error);
        });
    }
  }

  /**
   * 出发
   * @param taskEx
   * @param location
   */
  private go(taskEx: TaskEx, location: Location): void {
    let processEx: ProcessEx = new ProcessEx();
    if (!transform2ProcessEx(taskEx, processEx)) {
      return;
    }

    if (!processEx.go.done) {
      let time = new Date();
      let goInfo: GoInfo = {
        goTime: time.getTime(),
        location,
        taskId: taskEx.id,
        userId: this.globalService.userId
      };
      let task: Task = transform2Task(goInfo, taskEx, processEx);
      let output: any = {
        uploadedFlag: this.globalService.uploadedFlagForLocal
      };
      this.dataService.go(goInfo, task, output)
        .then(data => {
          let uploadedFlag: boolean = output.uploadedFlag === this.globalService.uploadedFlagForUploaded;
          processEx.go.time = new Date();
          processEx.go.color = DisableColor;
          processEx.go.done = true;
          processEx.go.isUploaded = uploadedFlag;
          processEx.arrive.show = true;
          processEx.reject.show = true;
          processEx.delay.show = true;
          //processEx.cancel.show = true;
          taskEx.lastProcess = 'go';
          taskEx.state = TaskState.Go;
          taskEx.isUploaded = taskEx.isUploaded && uploadedFlag;
        })
        .catch(error => {
          console.error(this.tag + error);
          this.globalService.showToast(error);
        });
    }
  }

  /**
   * 到场
   * @param taskEx
   * @param location
   */
  private arrive(taskEx: TaskEx, location: Location): void {
    let processEx: ProcessEx = new ProcessEx();
    if (!transform2ProcessEx(taskEx, processEx)) {
      return;
    }

    if (!processEx.arrive.done) {
      let time = new Date();
      let arriveInfo: ArriveInfo = {
        arrivedTime: time.getTime(),
        location,
        taskId: taskEx.id,
        userId: this.globalService.userId
      };
      let task: Task = transform2Task(arriveInfo, taskEx, processEx);
      let output: any = {
        uploadedFlag: this.globalService.uploadedFlagForLocal
      };
      this.dataService.arrive(arriveInfo, task, output)
        .then(data => {
          let uploadedFlag: boolean = output.uploadedFlag === this.globalService.uploadedFlagForUploaded;
          processEx.arrive.time = time;
          processEx.arrive.color = DisableColor;
          processEx.arrive.done = true;
          processEx.arrive.isUploaded = uploadedFlag;
          processEx.reply.show = true;
          processEx.reject.show = true;
          processEx.delay.show = true;
          //processEx.cancel.show = true;
          taskEx.lastProcess = 'arrive';
          taskEx.state = TaskState.Arrived;
          taskEx.isUploaded = taskEx.isUploaded && uploadedFlag;
        })
        .catch(error => {
          console.error(this.tag + error);
          this.globalService.showToast(error);
        });
    }
  }

  /**
   * 回复
   * @param taskEx
   * @param location
   */
  private reply(taskEx: TaskEx, location: Location): void {
    let processEx: ProcessEx = new ProcessEx();
    if (!transform2ProcessEx(taskEx, processEx)) {
      return;
    }

    if (!processEx.reply.done || !processEx.reply.isUploaded) {
      taskEx.isPreview = false;
      let history: History = this.findReplyHistory(taskEx.id);
      this.navCtrl.push(WorkDetailPage, [taskEx, history]);
    }
  }

  /**
   * 退单
   * @param taskEx
   * @param location
   */
  private reject(taskEx: TaskEx, location: Location): void {
    let processEx: ProcessEx = new ProcessEx();
    if (!transform2ProcessEx(taskEx, processEx)) {
      return;
    }

    if (!processEx.reject.done) {
      let time = new Date();
      let rejectExtend: RejectExtend = processEx.reject.extend as RejectExtend;
      let rejectInfo: RejectInfo = {
        rejectTime: time.getTime(),
        rejectReason: rejectExtend.reason,
        location,
        taskId: taskEx.id,
        userId: this.globalService.userId
      };
      let task: Task = transform2Task(rejectInfo, taskEx, processEx);
      let output: any = {
        uploadedFlag: this.globalService.uploadedFlagForLocal
      };
      this.dataService.reject(rejectInfo, task, output)
        .then(data => {
          let uploadedFlag: boolean = output.uploadedFlag === this.globalService.uploadedFlagForUploaded;
          processEx.reject.time = time;
          processEx.reject.color = DisableColor;
          processEx.reject.done = true;
          processEx.reject.isUploaded = uploadedFlag;

          processEx.go.show = processEx.go.done;
          processEx.arrive.show = processEx.arrive.done;
          processEx.reply.show = processEx.reply.done;
          processEx.delay.show = processEx.delay.done;
          //processEx.cancel.show = false;
          taskEx.lastProcess = 'reject';
          taskEx.state = TaskState.Reject;
          taskEx.isUploaded = taskEx.isUploaded && uploadedFlag;

          this.events.publish(this.globalService.myWorkUpdateEvent, {type: 'reject'});
        })
        .catch(error => {
          console.error(this.tag + error);
          this.globalService.showToast(error);
        });
    }
  }

  /**
   * 延迟
   * @param taskEx
   * @param location
   */
  private delay(taskEx: TaskEx, location: Location): void {
    let processEx: ProcessEx = new ProcessEx();
    if (!transform2ProcessEx(taskEx, processEx)) {
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
        && transform2ProcessEx(taskEx, processEx = new ProcessEx())) {
        isSuccess = true;
      }

      lastProcess = "go";
      if (taskEx.lastProcess === lastProcess
        && this.sortDelayProcess(taskEx, lastProcess, curEvent, curName, extend)
        && transform2ProcessEx(taskEx, processEx = new ProcessEx())) {
        isSuccess = true;
      }

      lastProcess = "arrive";
      if (taskEx.lastProcess === lastProcess
        && this.sortDelayProcess(taskEx, lastProcess, curEvent, curName, extend)
        && transform2ProcessEx(taskEx, processEx = new ProcessEx())) {
        isSuccess = true;
      }

      if (isSuccess) {
        let time = new Date();
        let delayExtend: DelayExtend = processEx.delay.extend as DelayExtend;
        let delayInfo: DelayInfo = {
          delayTime: time.getTime(),
          deadline: delayExtend.deadline.getTime(),
          comment: delayExtend.comment,
          location,
          taskId: taskEx.id,
          userId: this.globalService.userId
        };
        let task: Task = transform2Task(delayInfo, taskEx, processEx);
        let output: any = {
          uploadedFlag: this.globalService.uploadedFlagForLocal
        };
        this.dataService.delay(delayInfo, task, output)
          .then(data => {
            let uploadedFlag: boolean = output.uploadedFlag === this.globalService.uploadedFlagForUploaded;
            processEx.delay.time = time;
            processEx.delay.color = DisableColor;
            processEx.delay.done = true;
            processEx.delay.isUploaded = uploadedFlag;

            taskEx.lastProcess = 'delay';
            taskEx.state = TaskState.Delay;
            taskEx.isUploaded = taskEx.isUploaded && uploadedFlag;
          })
          .catch(error => {
            console.error(this.tag + error);
            this.globalService.showToast(error);
          });
      }
    }
  }

  /**
   * 销单
   * @param taskEx
   * @param location
   */
  private cancel(taskEx: TaskEx, location: Location): void {
    let processEx: ProcessEx = new ProcessEx();
    if (!transform2ProcessEx(taskEx, processEx)) {
      return;
    }

    if (!processEx.cancel.done) {
      let time = new Date();
      let cancelExtend: CancelExtend = processEx.cancel.extend as CancelExtend;
      let cancelInfo: CancelInfo = {
        destroyTime: time.getTime(),
        destroyRemark: cancelExtend.remark,
        location,
        taskId: taskEx.id,
        userId: this.globalService.userId
      };
      let task: Task = transform2Task(cancelInfo, taskEx, processEx);
      let output: any = {
        uploadedFlag: this.globalService.uploadedFlagForLocal
      };
      this.dataService.cancel(cancelInfo, task, output)
        .then(data => {
          let uploadedFlag: boolean = output.uploadedFlag === this.globalService.uploadedFlagForUploaded;
          processEx.cancel.time = time;
          processEx.cancel.color = DisableColor;
          processEx.cancel.done = true;
          processEx.cancel.isUploaded = uploadedFlag;

          processEx.go.show = processEx.go.done;
          processEx.arrive.show = processEx.arrive.done;
          processEx.reply.show = processEx.reply.done;
          processEx.reject.show = processEx.reject.done;
          processEx.delay.show = processEx.delay.done;
          taskEx.lastProcess = 'cancel';
          taskEx.state = TaskState.Cancel;
          taskEx.isUploaded = taskEx.isUploaded && uploadedFlag;

          this.events.publish(this.globalService.myWorkUpdateEvent, {type: 'cancel'});
        })
        .catch(error => {
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
  // private transform2ProcessEx(taskEx: TaskEx, processEx: ProcessEx): boolean {
  //   if (!taskEx && !processEx) {
  //     return false;
  //   }
  //
  //   for (let i of taskEx.processes) {
  //     switch (i.event) {
  //       case 'create':
  //         processEx.create = i;
  //         break;
  //       case 'dispatch':
  //         processEx.dispatch = i;
  //         break;
  //       case 'accept':
  //         processEx.accept = i;
  //         break;
  //       case 'go':
  //         processEx.go = i;
  //         break;
  //       case 'arrive':
  //         processEx.arrive = i;
  //         break;
  //       case 'reply':
  //         processEx.reply = i;
  //         break;
  //       case 'reject':
  //         processEx.reject = i;
  //         break;
  //       case 'delay':
  //         processEx.delay = i;
  //         break;
  //       case 'cancel':
  //         processEx.cancel = i;
  //         break;
  //       default:
  //         console.error(this.tag, i.event);
  //         break;
  //     }
  //   }
  //
  //   return !!(processEx && processEx.create && processEx.dispatch && processEx.accept && processEx.go && processEx.arrive
  //   && processEx.reply && processEx.reject && processEx.delay && processEx.cancel);
  // }

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
   * @param location
   */
  private rejectPrompt(taskEx: TaskEx, location: Location): void {
    let processEx: ProcessEx = new ProcessEx();
    if (!transform2ProcessEx(taskEx, processEx) || processEx.reject.done) {
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

            this.reject(taskEx, location);
          }
        }
      ]
    });
    prompt.present();
  }

  /**
   * 延迟对话框
   * @param taskEx
   * @param location
   */
  private delayPrompt(taskEx: TaskEx, location: Location): void {
    let processEx: ProcessEx = new ProcessEx();
    if (!transform2ProcessEx(taskEx, processEx) || processEx.delay.done) {
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
              this.judgeDelayTime(taskEx, processEx.delay.extend, location);
            }
          }
        }
      ]
    });
    prompt.present();
  }

  /**
   * 判断申请延期时间
   * @param taskEx
   * @param extend
   * @param location
   */
  private judgeDelayTime(taskEx: TaskEx, extend: DelayExtend, location: Location) {
    this.dataService.getTaskDetail(taskEx.id)
      .then(taskDetail => {
        if (taskDetail && taskDetail.delayReplyDeadLine) {
          if (extend.deadline.getTime() <= taskDetail.delayReplyDeadLine) {
            return this.globalService.showToast("填写的时间必须大于处理时限!");
          } else {
            this.delay(taskEx, location);
          }
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  /**
   * 销单对话框
   * @param taskEx
   * @param location
   */
  private cancelPrompt(taskEx: TaskEx, location: Location): void {
    let processEx: ProcessEx = new ProcessEx();
    if (!transform2ProcessEx(taskEx, processEx) || processEx.cancel.done) {
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

            this.cancel(taskEx, location);
          }
        }
      ]
    });
    prompt.present();
  }

  /**
   * 订阅事件
   * @param events
   */
  private subscribeEvent(events: Events): void {
    events.subscribe(this.globalService.myWorkDownloadFinishEvent, () => {
      this.resetTasks(FromWhere.Download);
    });

    events.subscribe(this.globalService.myWorkUpdateEvent, (myWorkUpdateEvent: MyWorkUpdateEvent) => {
      console.log("my work need to update");

      if (myWorkUpdateEvent.type === 'reply'
        && myWorkUpdateEvent.taskEx
        && myWorkUpdateEvent.history
        && myWorkUpdateEvent.history.task
        && myWorkUpdateEvent.history.reply
        && myWorkUpdateEvent.history.taskDetail) {
        let processEx: ProcessEx = new ProcessEx();
        if (!transform2ProcessEx(myWorkUpdateEvent.taskEx, processEx)) {
          return;
        }

        let replyInfo: ReplyInfo = myWorkUpdateEvent.history.reply as ReplyInfo;
        let uploadedFlag: boolean = myWorkUpdateEvent.history.uploadedFlag === this.globalService.uploadedFlagForUploaded;
        processEx.reply.time = replyInfo && replyInfo.opTime ? new Date(replyInfo.opTime) : new Date();
        processEx.reply.color = DisableColor;
        processEx.reply.done = true;
        processEx.reject.show = false;
        processEx.delay.show = processEx.delay.done;
        processEx.cancel.show = true;
        processEx.reply.isUploaded = uploadedFlag;
        myWorkUpdateEvent.taskEx.lastProcess = 'reply';
        myWorkUpdateEvent.taskEx.state = TaskState.Reply;
        myWorkUpdateEvent.taskEx.isUploaded = myWorkUpdateEvent.taskEx.isUploaded && uploadedFlag;

        let history: History = this.findReplyHistory(myWorkUpdateEvent.taskEx.id);
        if (history) {
          history = {
            userId: this.globalService.userId,
            taskId: myWorkUpdateEvent.taskEx.id,
            state: myWorkUpdateEvent.history.state,
            task: myWorkUpdateEvent.history.task,
            reply: myWorkUpdateEvent.history.reply,
            uploadedFlag: myWorkUpdateEvent.history.uploadedFlag,
            taskDetail: myWorkUpdateEvent.history.taskDetail,
            mediaNames: myWorkUpdateEvent.history.mediaNames
          };
        } else {
          this.replyHistories.push(myWorkUpdateEvent.history);
        }

        this.resetTasks(FromWhere.ReplyOrReject);
      } else if (/*myWorkUpdateEvent.type === 'cancel' || */myWorkUpdateEvent.type === 'reject') {
        this.resetTasks(FromWhere.ReplyOrReject);
      }
    });
  }

  /**
   * 重置list
   * @param fromWhere
   */
  private resetTasks(fromWhere: FromWhere): void {
    this.isOperationBusy = true;
    this.since = this.globalService.taskSinceDefault;
    while (this.items.shift()) ;
    this.replyHistories = [];
    this.showFab = false;
    this.getTasks(this.since, this.count, this.key)
      .then(data => this.infiniteScroll.enable(data))
      .catch(error => console.error(error))
      .then(() => {
        this.isOperationBusy = false;
        switch (fromWhere) {
          case FromWhere.Download:
            this.refresher.complete();
            this.getTaskCount();
            break;
          case FromWhere.ReplyOrReject:
            this.getTaskCount();
            break;
          case FromWhere.Search:
            break;
          case FromWhere.Delete:
            this.getTaskCount();
            break;
          default:
            break;
        }
      });
  }

  private findReplyHistory(taskId: string): History {
    return this.replyHistories.find(history => history.taskId === taskId);
  }
}
