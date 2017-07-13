import {Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {Content, NavController, AlertController, LoadingController, Events} from 'ionic-angular';
import {WorkInfoPage} from "../workinfo/workinfo";
import {DataService} from "../../providers/DataService";
import {SearchTask} from "../../model/SearchTask";
import {GlobalService} from "../../providers/GlobalService";
import {Word} from "../../model/Word";
import {CancelExInfo} from "../../model/CancelInfo";

interface StationTask {
  serialNo: string;
  taskNo: string;
  isAccepted: boolean;
  contents: {name: string; value: string}[];
}

@Component({
  selector: 'page-stationwork',
  templateUrl: 'stationwork.html'
})

export class StationWorkPage implements OnInit, OnDestroy {
  private readonly tag: string = "[StationWorkPage]";
  private readonly contentNames: {} = {
    happenedAddress: '发生地址',
    contactPhone: '联系电话',
    reportPerson: '反映人',
    reportType: '反映类别',
    reportContent: '反映内容',
    sendTime: '派遣时间',
    resolveLimitedTime: '处理时限',
    taskState: '任务状态'
  };
  //private readonly dispatched: string = '已派遣';
  private readonly accepted: string = '已接收';

  @ViewChild(Content) content: Content;

  disableColor: string = 'gray';
  enableColor: string = 'primary';
  undispatchedName: string = '未派工';
  dispatchedName: string = '24小时内已派工';

  title: string = '站点任务';
  subTitle: string = this.undispatchedName;
  showToolbar: boolean = false;
  showFab: boolean = false;

  items: StationTask[] = [];
  private since: number = 0;
  private count: number = 10;

  private reflectTypes: Array<Word>;
  private reflectContents: Array<Word>;

  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              private events: Events,
              private dataService: DataService,
              private globalService: GlobalService) {
  }

  /**
   * 初始化
   */
  ngOnInit(): void {
    console.log(this.tag, "ngOnInit");
    this.events.subscribe(this.globalService.stationWorkDispatchEvent, () => {
      this.since = 0;
      while (this.items.shift());
      this.getUnDispatchedTasks(this.since, this.count);
    });

    this.getReflectType()
      .then(result => {
        return this.getReflectContent();
      })
      .then(result => {
        return this.getUnDispatchedTasks(this.since, this.count);
      })
      .catch(error => console.error(error));
  }

  /**
   * 销毁
   */
  ngOnDestroy(): void {
    this.events.unsubscribe(this.globalService.stationWorkDispatchEvent);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  onSearch(ev: any) {
    this.showToolbar = !this.showToolbar;
    this.content.resize();
  }

  /**
   * 过滤
   * @param ev
   */
  onFilter(ev: any): void {
    let alert = this.alertCtrl.create();
    alert.setTitle('派工类型');

    alert.addInput({
      type: 'radio',
      label: this.undispatchedName,
      value: this.undispatchedName,
      checked: this.subTitle === this.undispatchedName
    });

    alert.addInput({
      type: 'radio',
      label: this.dispatchedName,
      value: this.dispatchedName,
      checked: this.subTitle === this.dispatchedName
    });

    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        if (data === this.subTitle) {
          return;
        }

        let loader = this.loadingCtrl.create({
          content: "Please wait...",
        });
        loader.present();

        this.since = 0;
        while (this.items.shift());
        let promise: Promise<boolean>;
        if (data === this.undispatchedName) {
          this.subTitle = this.undispatchedName;
          promise = this.getUnDispatchedTasks(this.since, this.count);
        } else {
          this.subTitle = this.dispatchedName;
          promise = this.getDispatchedTasks(this.since, this.count);
        }
        promise
          .then(result => {
            console.log(this.tag, result);
            loader.dismiss();
          })
          .catch(error => {
            console.error(error);
            loader.dismiss();
          });
      }
    });

    alert.present().then(() => {
      // this.testRadioOpen = true;
    });
  }

  getItems(ev: any) {

  }

  /**
   * 加载更多
   * @param infiniteScroll
   */
  doInfinite(infiniteScroll): void {
    console.log(this.tag, "doInfinite");

    setTimeout(() => {
      this.since += this.count;
      this.getUnDispatchedTasks(this.since, this.count)
        .then(result => {
          if (this.items.length > this.count) {
            this.showFab = true;
          }

          if (result) {
            infiniteScroll.complete();
          } else {
            infiniteScroll.enable(false);
          }
        })
        .catch(error => {
          console.error(error);
          infiniteScroll.complete();
        });
    }, 100);
  }

  /**
   * 回滚到list顶部
   * @param ev
   */
  doScroll2Top(ev: any): void {
    this.content.scrollToTop();
  }

  /**
   * 接单
   * @param stationTask
   */
  onAccept(stationTask: StationTask): void {
    this.dataService.acceptEx({
      acceptOperator: this.globalService.userId,
      acceptTime: new Date().getTime(),
      taskId: stationTask.taskNo
    }).then(result => {
      stationTask.isAccepted = true;
      stationTask.contents[stationTask.contents.length - 1].value = this.accepted;
    }).catch(error => {
      console.error(error);
      this.globalService.showToast(error);
    });
  }

  /**
   * 派单
   * @param stationTask
   */
  onDispatch(stationTask: StationTask): void {
    this.navCtrl.push(WorkInfoPage, stationTask.taskNo);
  }

  /**
   * 销单
   * @param stationTask
   */
  onCancel(stationTask: StationTask): void {
    this.popupRemarkAlert({
      TaskNo: stationTask.taskNo,
      TaskType: '1',
      WcOperator: this.globalService.userId,
      WcTime: new Date().getTime(),
      XdComment: '',
      XdOperator: this.globalService.userId
    });
  }

  /**
   * 获取反映类别
   * @returns {Promise<TResult|TResult>}
   */
  private getReflectType(): Promise<boolean> {
    return this.dataService.getReflectTypes()
      .then(words => {
        this.reflectTypes = words;
        return Promise.resolve(words.length > 0);
      })
      .catch(error => {
        console.error(error);
        return Promise.resolve(false);
      });
  }

  /**
   * 获取反映内容
   * @returns {Promise<TResult|TResult>}
   */
  private getReflectContent(): Promise<boolean> {
    return this.dataService.getReflectContents()
      .then(words => {
        this.reflectContents = words;
        return Promise.resolve(words.length > 0);
      })
      .catch(error => {
        console.error(error);
        return Promise.resolve(false);
      });
  }

  /**
   * 获取未派工任务列表
   * @param since
   * @param count
   * @returns {Promise<boolean|boolean>}
   */
  private getUnDispatchedTasks(since: number, count: number): Promise<boolean> {
    console.log(this.tag, "getUnDispatchedTasks");
    return this.dataService.getUnDispatchedTasks(since, count)
      .then(tasks => {
        this.transform2StationTasks(tasks, this.items);
        return Promise.resolve(tasks.length > 0);
      })
      .catch(error => {
        console.error(error);
        return Promise.resolve(false);
      });
  }

  private getDispatchedTasks(since: number, count: number): Promise<boolean> {
    console.log(this.tag, "getDispatchedTasks");
    return this.dataService.getDispatchedTasks(since, count, 1440)
      .then(tasks => {
        this.transform2StationTasks(tasks, this.items);
        return Promise.resolve(tasks.length > 0);
      })
      .catch(error => {
        console.error(error);
        return Promise.resolve(false);
      });
  }

  /**
   * 显示内容转换
   * @param searchTasks
   * @param stationTasks
   */
  private transform2StationTasks(searchTasks: SearchTask[], stationTasks: StationTask[]): void {
    for (let searchTask of searchTasks) {
      let stationTask: StationTask = {
        serialNo: searchTask.serialNo,
        taskNo: searchTask.taskNo,
        isAccepted: searchTask.taskState === this.accepted,
        contents: []
      };

      for (let key in this.contentNames) {
        if (searchTask.hasOwnProperty(key)) {
          stationTask.contents.push({
            name: this.contentNames[key],
            value: this.transform2String(key, searchTask[key])
          });
        }
      }

      stationTasks.push(stationTask);
    }
  }

  /**
   * 转换成字符串
   * @param key
   * @param value
   * @returns {string}
   */
  private transform2String(key: string, value: any): string {
    if (typeof value === 'number') {
      if (key === "reportType" && this.reflectTypes) {
        for (let word of this.reflectTypes) {
          if (word.wid === <number>value) {
            return word.wName;
          }
        }
      } else if (key === "reportContent" && this.reflectContents) {
        for (let word of this.reflectContents) {
          if (word.wid === <number>value) {
            return word.wName;
          }
        }
      } else if (key.endsWith("Time")) {
        return this.globalService.getFormatTime(new Date(<number>value));
      }
    }

    return value.toString();
  }

  /**
   * 处理备注
   * @param cancelExInfo
   */
  private popupRemarkAlert(cancelExInfo: CancelExInfo): void {
    let prompt = this.alertCtrl.create({
      title: '销单备注',
      message: "请输入销单备注",
      inputs: [
        {
          name: 'remark',
          placeholder: ''
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: data => {
            console.log('Saved clicked');
            cancelExInfo.XdComment = data.remark;
            this.cancel(cancelExInfo);
          }
        }
      ]
    });
    prompt.present();
  }

  /**
   * 销单
   * @param cancelExInfo
   */
  private cancel(cancelExInfo: CancelExInfo): void {
    this.dataService.cancelEx(cancelExInfo)
      .then(result => {
        if (result) {
          this.events.publish(this.globalService.stationWorkDispatchEvent);
        } else {
          this.globalService.showToast('销单失败!');
        }
      })
      .catch(error => {
        console.error(error);
        this.globalService.showToast('销单失败!');
      });
  }
}
