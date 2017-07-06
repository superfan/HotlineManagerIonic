import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TaskEx} from "../../model/Task";
import {DataService} from "../../providers/DataService";
import {TaskDetail} from "../../model/TaskDetail";
import {ReplyInfo} from "../../model/ReplyInfo";
import {GlobalService} from "../../providers/GlobalService";

@Component({
  selector: 'page-workdetail',
  templateUrl: 'workdetail.html'
})

export class WorkDetailPage implements OnInit {
  private readonly tag: string = "[WorkDetailPage]";

  title: string = '工单处理';
  items: number[] = [
    1, 2, 3, 4, 5, 6
  ];
  segmentName: string = "detailInfo";

  detail: {name: string, value: string | number | Date, key: string, isTime: boolean}[] = [
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

  reply: {name: string, value: string | number, isActive: boolean}[] = [
    {name: '处理时间', value: '', isActive: false},
    {name: '处理部门', value: '', isActive: false},
    {name: '处理人', value: '', isActive: false},
    {name: '处理类别', value: '', isActive: true},
    {name: '处理内容', value: '', isActive: true},
    {name: '发生原因', value: '', isActive: true},
    {name: '解决措施', value: '', isActive: true},
    {name: '处理结果', value: '', isActive: true},
    {name: '处理备注', value: '备注可为空', isActive: true}
  ];

  people: any[] = [
    {picture: 'assets/img/ic_mywork.png', name: 'abc'},
    {picture: 'assets/img/ic_mywork.png', name: 'bcd'},
    {picture: 'assets/img/ic_mywork.png', name: 'efd'},
  ];

  private taskEx: TaskEx;
  private taskDetail: TaskDetail;
  private replyInfo: ReplyInfo;

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private dataService: DataService,
              private globalService: GlobalService) {
    this.taskEx = navParams.data as TaskEx;

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
      userId: 1
    };
  }

  onLocate(ev: any) {

  }

  onReply(ev: any) {

  }

  segmentChanged(segment: any) {
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

    this.getOptType();
  }

  private getOptType(): void {
    this.dataService.getOptType()
      .then(words => {
        console.log(this.tag, "getOptType");
      })
      .catch(error => console.log(error));
  }

}

