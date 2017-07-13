import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, AlertController, Events} from 'ionic-angular';
import {DataService} from "../../providers/DataService";
import {SearchTaskDetails} from "../../model/SearchTaskDetails";
import {GlobalService} from "../../providers/GlobalService";
import {Personnel} from "../../model/Personnel";
import {DispatchInfo} from "../../model/DispatchInfo";

interface Detail {
  name: string;
  value: string
}

interface Dispatch {
  name: string;
  value: string;
  isActive: boolean,
  isDate?: boolean,
  isTime?: boolean
}

@Component({
  selector: 'page-workinfo',
  templateUrl: 'workinfo.html'
})

export class WorkInfoPage implements OnInit {
  private readonly tag: string = "[WorkInfoPage]";
  private readonly detailNames: {} = {
    contactName: '联系人名',
    contactPhone: '联系电话',
    issueType: '反映类别',
    issueContent: '反映内容',
    issueAddress: '发生地址',
    issueTime: '发生时间',
    receiveComment: '受理备注',
    bookingStartTime: '开始时间',
    bookingEndTime: '结束时间',
    arrivedDeadLine: '到场时限',
    replyDeadLine: '处理时限',
    delayReplyDeadLine: '延时时限',
    assignStation: '派遣站点',
    assignPerson: '派遣人',
    assignComment: '派遣备注'
  };

  title: string = '任务详情';
  segmentName: string = "detailInfo";

  details: Detail[] = [];
  dispatches: Dispatch[] = [
    {name: '派工编号', value: '', isActive: false},
    {name: '施工人员', value: '请选择施工人员', isActive: true},
    {name: '施工日期', value: '', isActive: true, isDate: true},
    {name: '施工时间', value: '', isActive: true, isTime: true},
    {name: '处理备注', value: '备注可为空', isActive: true}
  ];

  myDate1: string = '2017-07-19';
  myDate2: string = '15:30:55';

  private personnels: Array<Personnel>;
  private dispatchInfo: DispatchInfo;

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private alertCtrl: AlertController,
              private events: Events,
              private dataService: DataService,
              private globalService: GlobalService) {
  }

  /**
   * 初始化
   */
  ngOnInit(): void {
    console.log(this.tag, "ngOnInit");
    let taskId: string = this.navParams.data;
    this.getDetail(taskId);
    this.dispatchInfo = {
      taskId,
      dispatchOperator: this.globalService.userId,
      beDispatchedPerson: Number.NaN,
      dispatchTime: new Date().getTime(),
      dispatchType: 1,
      dispatchComment: ''
    };
    this.dispatches[0].value = taskId;
    let time: string = this.globalService.getFormatTime(new Date(this.dispatchInfo.dispatchTime));
    let times: string[] = time.split(' ');
    this.dispatches[2].value = times[0];
    this.dispatches[3].value = times[1];
  }

  /**
   * 派单
   * @param ev
   */
  onDispatch(ev: any): void {
    let time: string = `${this.dispatches[2].value} ${this.dispatches[3].value}`;
    let utc: number = new Date(time).getTime() + 1000;
    if (this.dispatchInfo.dispatchTime > utc) {
      return this.globalService.showToast('施工日期或施工时间不准确!');
    }

    this.dispatchInfo.dispatchTime = utc;
    this.dataService.dispatch(this.dispatchInfo)
      .then(result => {
        this.events.publish(this.globalService.stationWorkUpdateEvent);
        this.navCtrl.pop();
      })
      .catch(error => console.error(error));
  }

  /**
   * tab切换
   * @param segment
   */
  segmentChanged(segment: any): void {
    console.log(this.tag, segment);
    if (segment.value === 'dispatchInfo') {
      this.setDispatchInfo();
    }
  }

  /**
   * 选择派工信息
   * @param dispatch
   */
  itemSelected(dispatch: Dispatch): void {
    switch (dispatch.name) {
      case '施工人员':
        this.popupPersonnelAlert();
        break;
      case '处理备注':
        this.popupRemarkAlert();
        break;
      default:
        break;
    }
  }

  /**
   * 获取详细详细
   * @param taskId
   */
  private getDetail(taskId: string): void {
    this.dataService.searchTaskDetails(taskId)
      .then(detail => {
        console.log(detail);
        this.detailObject2Array(detail, this.details);
      })
      .catch(error => console.error(error));
  }

  /**
   * 对象转数组
   * @param srcDetail
   * @param destDetail
   */
  private detailObject2Array(srcDetail: SearchTaskDetails, destDetail: Detail[]): void {
    for (let key in this.detailNames) {
      if (srcDetail.hasOwnProperty(key)) {
        destDetail.push({
          name: this.detailNames[key],
          value: this.transform2String(srcDetail[key])
        })
      }
    }
  }

  /**
   * 转换成字符串
   * @param value
   * @returns {string}
   */
  private transform2String(value: any): string {
    if (typeof value === 'number' && <number>value > 1000000) {
      return this.globalService.getFormatTime(new Date(<number>value));
    }

    return value.toString();
  }

  /**
   * 设置派单信息
   */
  private setDispatchInfo() {
    if (!this.dispatchInfo.beDispatchedPerson) {
      this.dataService.getPersonnels(this.globalService.userId)
        .then(personnels => {
          this.personnels = personnels;
          if (personnels.length > 0) {
            this.dispatches[1].value = personnels[0].fieldPersonnelName;
            this.dispatchInfo.beDispatchedPerson = personnels[0].fieldPersonnelId;
          }
        })
        .catch(error => console.error(error));
    }
  }

  /**
   * 选择施工人员
   */
  private popupPersonnelAlert(): void {
    if (!this.personnels || this.personnels.length <= 0) {
      return this.globalService.showToast("施工人员为空!")
    }

    let alert = this.alertCtrl.create();
    alert.setTitle('请选择施工人员');

    for (let personnel of this.personnels) {
      alert.addInput({
        type: 'radio',
        label: personnel.fieldPersonnelName,
        value: `${personnel.fieldPersonnelName}#${personnel.fieldPersonnelId}`,
        checked: this.dispatchInfo.beDispatchedPerson === personnel.fieldPersonnelId
      });
    }

    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        let values: string[] = data.split("#");
        this.dispatches[1].value = values[0];
        this.dispatchInfo.beDispatchedPerson = Number.parseInt(values[1]);
      }
    });

    alert.present().then(() => {
      //this.testRadioOpen = true;
    });
  }

  /**
   * 处理备注
   */
  private popupRemarkAlert(): void {
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
            this.dispatches[4].value = data.remark;
            this.dispatchInfo.dispatchComment = data.remark;
          }
        }
      ]
    });
    prompt.present();
  }
}
