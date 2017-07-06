/**
 * Created by zhangjing on 2017/6/27.
 */
import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {DataService} from "../../providers/DataService";
import {SearchTaskDetails} from "../../model/SearchTaskDetails";
export class TaskState {
  state: string;
  time: string
}
@Component({
  selector: 'page-searchdetails',
  templateUrl: 'searchdetails.html'
})

export class SearchDetailsPage {
  private readonly tag: string = "[SearchDetailsPage]";
  title: string = '详情';
  segmentName: string = "basicInfo";
  taskId: string;
  details: any[];
  states: TaskState[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dataService: DataService) {
    this.taskId = this.navParams.get('taskId');
    this.searchTaskDetails(this.taskId);
  }

  private searchTaskDetails(taskId: string) {

    this.dataService.searchTaskDetails(taskId)
      .then(details => {
        console.log(this.tag + "getTasks: " + details);
        if (details != null || undefined) {
          this.details = [
            {name: '联系人名', value: details.contactName},
            {name: '联系电话', value: details.contactPhone},
            {name: '反映类别', value: details.issueType},
            {name: '反映内容', value: details.issueContent},
            {name: '发生地址', value: details.issueAddress},
            {name: '发生时间', value: this.formatDateTime(details.issueTime)},
            {name: '受理备注', value: details.receiveComment},
            {name: '开始时间', value: this.formatDateTime(details.bookingStartTime)},
            {name: '结束时间', value: this.formatDateTime(details.bookingEndTime)},
            {name: '到场时限', value: this.formatDateTime(details.arrivedDeadLine)},
            {name: '处理时限', value: this.formatDateTime(details.replyDeadLine)},
            {name: '延时时限', value: this.formatDateTime(details.delayReplyDeadLine)},
            {name: '派遣站点', value: details.assignStation},
            {name: '派遣人', value: details.assignPerson},
            {name: '派遣备注', value: details.assignComment}
          ];
          this.setTaskState(details);
        }
      });
  }

  /**
   * 设置任务状态流程
   * @param details
   */
  private setTaskState(details: SearchTaskDetails) {
    if (details.createTime != 0) {
      let temp = new TaskState();
      temp.state = '已派遣';
      temp.time = this.formatDateTime(details.createTime);
      this.states.push(temp);
    }
    if (details.stationAcceptTime != 0) {
      let temp = new TaskState();
      temp.state = '接收';
      temp.time = this.formatDateTime(details.stationAcceptTime);
      this.states.push(temp);
    }
    if (details.assignTime != 0) {
      let temp = new TaskState();
      temp.state = '已派工';
      temp.time = this.formatDateTime(details.assignTime);
      this.states.push(temp);
    }
    if (details.goTime != 0) {
      let temp = new TaskState();
      temp.state = '已出发';
      temp.time = this.formatDateTime(details.goTime);
      this.states.push(temp);
    }
    if (details.arrivedTime != 0) {
      let temp = new TaskState();
      temp.state = '已到场';
      temp.time = this.formatDateTime(details.arrivedTime);
      this.states.push(temp);
    }
    if (details.replyTime != 0) {
      let temp = new TaskState();
      temp.state = '已处理';
      temp.time = this.formatDateTime(details.replyTime);
      this.states.push(temp);
    }
    if (details.completedTime != 0) {
      let temp = new TaskState();
      temp.state = '已完成';
      temp.time = this.formatDateTime(details.completedTime);
      this.states.push(temp);
    }
    if (details.rejectTime != 0) {
      let temp = new TaskState();
      temp.state = '已拒绝';
      temp.time = this.formatDateTime(details.rejectTime);
      this.states.push(temp);
    }
    if (details.superviseTime != 0) {
      let temp = new TaskState();
      temp.state = '已销单';
      temp.time = this.formatDateTime(details.superviseTime);
      this.states.push(temp);
    }
    this.states.sort((n1: TaskState, n2: TaskState) => {
      if (n1.time < n2.time) {
        return 1;
      }
      if (n1.time > n2.time) {
        return -1;
      }
      if (n1.time == n2.time) {
        if (n1.state > n2.state) {
          return -1;
        }
      }
      return 0;
    });
    console.log(this.states);
  }

  /**
   * utc时间格式化
   * @param inputTime
   * @returns {string}
   */
  private formatDateTime(inputTime): string {
    console.log(inputTime);
    let date = new Date(inputTime);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let month = m < 10 ? ('0' + m) : m;
    let d = date.getDate();
    let day = d < 10 ? ('0' + d) : d;
    let h = date.getHours();
    let hour = h < 10 ? ('0' + h) : h;
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let minutestr = minute < 10 ? ('0' + minute) : minute;
    let secondstr = second < 10 ? ('0' + second) : second;
    return y + '-' + month + '-' + day + ' ' + hour + ':' + minutestr + ':' + secondstr;
  };
}

