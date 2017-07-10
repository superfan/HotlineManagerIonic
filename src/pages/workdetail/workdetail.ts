import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, AlertController, ToastController, Events} from 'ionic-angular';
import {TaskEx} from "../../model/Task";
import {DataService} from "../../providers/DataService";
import {TaskDetail} from "../../model/TaskDetail";
import {ReplyInfo} from "../../model/ReplyInfo";
import {GlobalService} from "../../providers/GlobalService";
import {Word} from "../../model/Word";

interface Detail {
  name: string;
  value: string | number | Date;
  key: string;
  isTime: boolean;
}

interface Reply {
  name: string;
  value: string | number;
  isActive: boolean;
  color: string;
  remark?: string;
}

@Component({
  selector: 'page-workdetail',
  templateUrl: 'workdetail.html'
})

export class WorkDetailPage implements OnInit {
  private readonly tag: string = "[WorkDetailPage]";
  private readonly disableColor: string = '#808080';
  private readonly enableColor: string = '#5d81c1';

  private readonly optTypeName: string = '处理类别';
  private readonly optContentName: string = '处理内容';
  private readonly optReasonName: string = '发生原因';
  private readonly optSolutionName: string = '解决措施';
  private readonly optResultName: string = '处理结果';
  private readonly optRemarkName: string = '处理备注';

  private readonly optTypeDefaultValue: string = '请选择处理类别';
  private readonly optContentDefaultValue: string = '请选择处理内容';
  private readonly optReasonDefaultValue: string = '请选择发生原因';
  private readonly optSolutionDefaultValue: string = '请选择解决措施';
  private readonly optResultDefaultValue: string = '请选择处理结果';
  private readonly optRemarkDefaultValue: string = '备注可为空';

  title: string = '工单处理';
  segmentName: string = "detailInfo";

  detail: Detail[] = [
    {name: '联系人名', value: '', key: 'contactName', isTime: false},
    {name: '联系电话', value: '', key: 'contactPhone', isTime: false},
    {name: '反映类别', value: '', key: 'issueType', isTime: false},
    {name: '反映内容', value: '', key: 'issueContent', isTime: false},
    {name: '发生地址', value: '', key: 'issueAddress', isTime: false},
    {name: '发生时间', value: '', key: 'issueTime', isTime: true},
    {name: '受理备注', value: '', key: 'receiveComment', isTime: false},
    {name: '开始时间', value: '', key: 'bookingStartTime', isTime: true},
    {name: '结束时间', value: '', key: 'bookingEndTime', isTime: true},
    {name: '到场时限', value: '', key: 'arrivedDeadLine', isTime: true},
    {name: '处理时限', value: '', key: 'replyDeadLine', isTime: true},
    {name: '延时时限', value: '', key: 'delayReplyDeadLine', isTime: true},
    {name: '派遣站点', value: '', key: 'assignStation', isTime: false},
    {name: '派遣人', value: '', key: 'assignPerson', isTime: false},
    {name: '派遣备注', value: '', key: 'assignComment', isTime: false}
  ];

  reply: Reply[] = [
    {name: '处理时间', value: '', isActive: false, color: this.disableColor},
    {name: '处理部门', value: '', isActive: false, color: this.disableColor},
    {name: '处理人', value: '', isActive: false, color: this.disableColor},
    {name: this.optTypeName, value: this.optTypeDefaultValue, isActive: true, color: this.enableColor},
    {name: this.optContentName, value: this.optContentDefaultValue, isActive: true, color: this.enableColor},
    {name: this.optReasonName, value: this.optReasonDefaultValue, isActive: true, color: this.enableColor},
    {name: this.optSolutionName, value: this.optSolutionDefaultValue, isActive: true, color: this.enableColor},
    {name: this.optResultName, value: this.optResultDefaultValue, isActive: true, color: this.enableColor},
    {name: this.optRemarkName, value: this.optRemarkDefaultValue, isActive: true, color: this.enableColor}
  ];

  people: any[] = [
    {picture: 'assets/img/ic_mywork.png', name: 'abc'},
    {picture: 'assets/img/ic_mywork.png', name: 'bcd'},
    {picture: 'assets/img/ic_mywork.png', name: 'efd'},
  ];

  private isPreview: boolean;
  private taskEx: TaskEx;
  private taskDetail: TaskDetail;
  private replyInfo: ReplyInfo;

  private optType: Array<Word>;
  private optContent: Array<Word>;
  private optReason: Array<Word>;
  private optSolution: Array<Word>;
  private optResult: Array<Word>;

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private events: Events,
              private dataService: DataService,
              private globalService: GlobalService) {
    this.taskEx = navParams.data as TaskEx;
    this.isPreview = this.taskEx.isPreview;
  }

  /**
   * 初始化
   */
  ngOnInit() {
    console.log(this.tag + 'ngOnInit');
    this.dataService.getTaskDetail(this.taskEx.id)
      .then(taskDetail => {
        console.log(this.tag + "getTaskDetail: " + taskDetail);
        this.taskDetail = taskDetail;
        this.convertTaskDetail(this.taskDetail);
      })
      .catch(error => console.error(error));

    this.replyInfo = {
      opTime: new Date().getTime(),
      opDepartment: this.globalService.departmentId,
      opPerson: this.globalService.userId,
      opLeiBie: 0,
      opContent: 0,
      reason: 0,
      solution: 0,
      result: 0,
      replayComment: '',
      files: '',
      location: {
        type: "bd09ll",
        lng: "121.525766",
        lat: "31.280693"
      },
      taskId: this.taskEx.id,
      userId: this.globalService.userId
    };
  }

  onLocate(ev: any): void {

  }

  /**
   * 回填
   * @param ev
   */
  onReply(ev: any): void {
    if (!this.replyInfo.opLeiBie
      || !this.replyInfo.opContent
      || !this.replyInfo.reason
      || !this.replyInfo.solution
      || !this.replyInfo.result) {
      return this.showToast("数据填写不完整!");
    }

    this.dataService.reply(this.replyInfo)
      .then(date => {
        console.log("success");
        this.events.publish(this.globalService.myWorkReplyEvent, this.taskEx, this.replyInfo.opTime);
        this.navCtrl.pop();
      })
      .catch(error => {
        console.error(error);
        this.showToast("回填失败!");
      });
  }

  /**
   * 切换tab
   * @param segment
   */
  segmentChanged(segment: any): void {
    console.log(segment);
    switch (segment.value) {
      case 'detailInfo':
        break;
      case 'replyInfo':
        this.setReplyInfo();
        break;
      case 'mediaInfo':
        break;
      default:
        return;
    }
  }

  itemSelected(item: Reply): void {
    if (this.isPreview) {
      return;
    }

    switch (item.name) {
      case this.optTypeName:
        this.popupOptType();
        break;
      case this.optContentName:
        this.popupOptContent();
        break;
      case this.optReasonName:
        this.popupOptReason();
        break;
      case this.optSolutionName:
        this.popupOptSolution();
        break;
      case this.optResultName:
        this.popupOptResult();
        break;
      case this.optRemarkName:
        this.popupRemark();
        break;
    }
  }

  /**
   * toast
   * @param message
   */
  private showToast(message: string): void {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });

    toast.present(toast);
  }

  /**
   * 转换显示信息
   * @param taskDetail
   */
  private convertTaskDetail(taskDetail: TaskDetail): void {
    for (let item of this.detail) {
      item.value = taskDetail[item.key];
      if (item.key === 'issueTime'
        || item.key === 'bookingStartTime'
        || item.key === 'bookingEndTime'
        || item.key === 'arrivedDeadLine'
        || item.key === 'replyDeadLine'
        || item.key === 'delayReplyDeadLine'
        || typeof item.value === 'number') {
        item.value = item.value > 0 ? new Date(item.value as number) : '';
      }
    }
  }

  private setReplyInfo(): void {
    this.reply[0].value = this.globalService.getFormatTime(new Date());
    // department
    this.reply[1].value = this.globalService.department;
    // person
    this.reply[2].value = this.globalService.userName;
    // operation type
    this.getOptType();
    // operation reason
    this.getOptReason();
    // operation solution
    this.getOptSolution();
    // operation result
    this.getOptResult();
  }

  /**
   * 获取处理类别
   */
  private getOptType(): void {
    this.dataService.getOptType()
      .then(words => {
        console.log(this.tag, "getOptType");
        this.optType = words;
        if (this.optType.length > 0) {
          this.reply[3].value = this.optType[0].wName;
          this.reply[3].remark = this.optType[0].wRemark;
          this.replyInfo.opLeiBie = this.optType[0].wid;
          this.getOptContent(Number.parseInt(this.optType[0].wRemark));
        }
      })
      .catch(error => console.error(error));
  }

  /**
   * 获取处理内容
   * @param parentId
   */
  private getOptContent(parentId: number): void {
    this.dataService.getOptContent(parentId)
      .then(words => {
        console.log(this.tag, "getOptContent");
        this.optContent = words;
        if (this.optContent.length > 0) {
          this.reply[4].value = this.optContent[0].wName;
          this.reply[4].remark = this.optContent[0].wRemark;
          this.reply[4].color = this.enableColor;
          this.replyInfo.opContent = this.optContent[0].wid;
        } else {
          this.reply[4].value = "请选择处理内容";
          this.reply[4].remark = "";
          this.reply[4].color = this.disableColor;
          this.replyInfo.opContent = 0;
        }
      })
      .catch(error => console.error(error));
  }

  /**
   * 获取发生原因
   */
  private getOptReason(): void {
    this.dataService.getOptReason()
      .then(words => {
        console.log(this.tag, "getOptReason");
        this.optReason = words;
        if (this.optReason.length > 0) {
          this.reply[5].value = this.optReason[0].wName;
          this.reply[5].remark = this.optReason[0].wRemark;
          this.replyInfo.reason = this.optReason[0].wid;
        }
      })
      .catch(error => console.error(error));
  }

  /**
   * 获取解决措施
   */
  private getOptSolution(): void {
    this.dataService.getOptSolution()
      .then(words => {
        console.log(this.tag, "getOptSolution");
        this.optSolution = words;
        if (this.optSolution.length > 0) {
          this.reply[6].value = this.optSolution[0].wName;
          this.reply[6].remark = this.optSolution[0].wRemark;
          this.replyInfo.solution = this.optSolution[0].wid;
        }
      })
      .catch(error => console.error(error));
  }

  /**
   * 获取处理结果
   */
  private getOptResult(): void {
    this.dataService.getOptResult()
      .then(words => {
        console.log(this.tag, "getOptResult");
        this.optResult = words;
        if (this.optResult.length > 0) {
          this.reply[7].value = this.optResult[0].wName;
          this.reply[7].remark = this.optResult[0].wRemark;
          this.replyInfo.result = this.optResult[0].wid;
        }
      })
      .catch(error => console.error(error));
  }

  /**
   * 处理类别
   */
  private popupOptType(): void {
    if (!this.optType || this.optType.length <= 0) {
      return this.showToast("处理类别为空!")
    }

    this.popupAlert(this.optType, this.optTypeName, this.reply[3], this.replyInfo, "opLeiBie");
  }

  /**
   * 处理内容
   */
  private popupOptContent(): void {
    if (!this.optContent || this.optContent.length <= 0) {
      return this.showToast("处理内容为空!")
    }

    this.popupAlert(this.optContent, this.optContentName, this.reply[4], this.replyInfo, "opContent");
  }

  /**
   * 发生原因
   */
  private popupOptReason(): void {
    if (!this.optReason || this.optReason.length <= 0) {
      return this.showToast("发生原因为空!")
    }

    this.popupAlert(this.optReason, this.optReasonName, this.reply[5], this.replyInfo, "reason");
  }

  /**
   * 解决措施
   */
  private popupOptSolution(): void {
    if (!this.optSolution || this.optSolution.length <= 0) {
      return this.showToast("解决措施为空!")
    }

    this.popupAlert(this.optSolution, this.optSolutionName, this.reply[6], this.replyInfo, "solution");
  }

  /**
   * 处理结果
   */
  private popupOptResult(): void {
    if (!this.optResult || this.optResult.length <= 0) {
      return this.showToast("处理结果为空!")
    }

    this.popupAlert(this.optResult, this.optResultName, this.reply[7], this.replyInfo, "result");
  }

  /**
   * 处理备注
   */
  private popupRemark(): void {
    let prompt = this.alertCtrl.create({
      title: '处理备注',
      message: "请输入处理备注",
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
            this.reply[8].value = data.remark;
            this.replyInfo.replayComment = data.remark;
          }
        }
      ]
    });
    prompt.present();
  }

  /**
   * 对话框
   * @param words
   * @param title
   * @param reply
   * @param replyInfo
   * @param propertyName
   */
  private popupAlert(words: Array<Word>,
                     title: string,
                     reply: Reply,
                     replyInfo: ReplyInfo,
                     propertyName: string): void {
    let alert = this.alertCtrl.create();
    alert.setTitle(title);

    for (let word of words) {
      alert.addInput({
        type: 'radio',
        label: word.wName,
        value: `${word.wName}#${word.wid}#${word.wRemark}`,
        checked: reply.value === word.wName
      });
    }

    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        console.log('Radio data:', data);
        let values: string[] = data.split("#");
        reply.value = values[0];
        replyInfo[propertyName] = Number.parseInt(values[1]);
        reply.remark = values[2];
        if (title === this.optTypeName) {
          this.getOptContent(Number.parseInt(reply.remark));
        }
      }
    });

    alert.present().then(() => {
      //this.testRadioOpen = true;
    });
  }
}

