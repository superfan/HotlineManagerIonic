import {Component, OnInit} from "@angular/core";
import {AlertController, LoadingController, NavController, NavParams} from "ionic-angular";
import {SearchDetailsPage} from "../searchdetail/searchdetails";
import {DataService} from "../../providers/DataService";
import {SearchTaskRequest} from "../../model/SearchTaskRequest";
/**
 * Created by zhangjing on 2017/6/26.
 */
@Component({
  selector: 'page-searchresult',
  templateUrl: 'searchresult.html'
})

export class SearchResultPage implements OnInit {
  private readonly tag: string = "[SearchResultPage]";
  title: string = '查询结果';
  segmentName: string = "allTasks";
  items: any[] = [];
  loading;
  totalTaskCount: number;
  completedTaskCount: number;
  unCompletedTaskCount: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public dataService: DataService,
              private alertCtrl: AlertController) {
  }

  dismiss() {
    console.log('----- dismiss loading ------ ');
    this.loading.dismiss();
  }

  ngOnInit() {
    this.loading = this.loadingCtrl.create({
      content: '查询中...',
      dismissOnPageChange: true
    });
    this.loading.present();
    this.searchTask(this.navParams.get('tasks'));
    this.searchTaskCount(this.navParams.get('tasks'));
  }

  /**
   * 查询工单
   * @param request
   */
  private searchTask(request: SearchTaskRequest) {
    this.dataService.searchTask(request)
      .then(tasks => {
        console.log(this.tag + "getTasks: " + tasks);
        if (tasks.length <= 0) {
          let alert = this.alertCtrl.create({
            title: '提示：',
            buttons: ['确定'],
          });
          alert.setSubTitle('无结果');
          alert.present();
          this.loading.dismiss();
        } else {
          this.loading.dismiss();
          for (let temp of tasks) {
            this.items.push({
              customerId: temp.serialNo,
              taskId: temp.taskNo,
              contents: [
                {name: '发生地址', value: temp.happenedAddress},
                {name: '联系电话', value: temp.contactPhone},
                {name: '反映人', value: temp.reportPerson},
                {name: '反映类别', value: temp.reportType},
                {name: '反映内容', value: temp.reportTypeText},
                {name: '派遣时间', value: this.formatDateTime(temp.sendTime)},
                {name: '处理时限', value: this.formatDateTime(temp.resolveLimitedTime)},
                {name: '任务状态', value: temp.taskState}
              ]
            });
          }
        }
      });
  }

  /**
   * 查询工单数量
   * @param request
   */
  private searchTaskCount(request: SearchTaskRequest) {
    this.dataService.searchTaskCount(request.happenedAddress, request.contactPhone, request.serialNo,
      request.taskNo, request.taskState, request.reportType, request.reportPerson, request.sendTime)
      .then(count => {
        console.log(this.tag + "getTasksCount: " + count);
        if (count != null || undefined) {
          this.totalTaskCount = count.totalTaskCount;
          this.completedTaskCount = count.completedTaskCount;
          this.unCompletedTaskCount = count.uncompletedTaskCount;
        }
      });
  }

  /**
   * jump to details
   * @param taskId
   */
  private onDetails(taskId: string) {
    console.log(this.tag + taskId);
    this.navCtrl.push(SearchDetailsPage, {'taskId': taskId});
  }

  /**
   * utc时间格式化
   * @param inputTime
   * @returns {string}
   */
  private formatDateTime(inputTime): string {
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
