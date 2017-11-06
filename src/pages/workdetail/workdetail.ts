import {Component, OnInit, OnDestroy} from '@angular/core';
import {NavController, NavParams, AlertController, Events, PopoverController} from 'ionic-angular';
import {TaskState, Task, TaskEx, transform2ProcessEx, transform2Task} from "../../model/Task";
import {DataService} from "../../providers/DataService";
import {TaskDetail} from "../../model/TaskDetail";
import {ReplyInfo} from "../../model/ReplyInfo";
import {GlobalService} from "../../providers/GlobalService";
import {Word} from "../../model/Word";
import {ProcessEx} from "../../model/Process";
import {PopoverRecordPage} from "../record/PopoverRecordPage";
import {MapPage} from "../map/map";
import {MapParam, MapType} from "../../model/MapParam";
import {History} from "../../model/History";
import {FileService} from "../../providers/FileService";
import {Personnel} from "../../model/Personnel";
import {ConfigService} from "../../providers/ConfigService";

interface Detail {
  name: string;
  value: string | number | Date;
  key: string;
  isTime: boolean;
  isShowOverdue :boolean;
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

export class WorkDetailPage implements OnInit, OnDestroy {
  private readonly tag: string = "[WorkDetailPage]";
  private readonly disableColor: string = '#808080';
  private readonly enableColor: string = '#5d81c1';

  private readonly optPerson: string = '处理人';
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

  //private readonly picturePlaceHolder: string = 'assets/img/ic_photo_default.png';
  private readonly pictureMaxCount: number = 3;
  public readonly audioPlaceHolder: string = 'assets/img/ic_audio_default.png';
  private readonly audioMaxCount: number = 3;
  private  readonly videoMaxCount: number = 3;

  title: string = '工单处理';
  segmentName: string = "detailInfo";

  overdueTime: number;//超期时限

  detail: Detail[] = [
    {name: '联系人名', value: '', key: 'contactName', isTime: false,isShowOverdue:false},
    {name: '联系电话', value: '', key: 'contactPhone', isTime: false,isShowOverdue:false},
    {name: '反映类别', value: '', key: 'issueType', isTime: false,isShowOverdue:false},
    {name: '反映内容', value: '', key: 'issueContent', isTime: false,isShowOverdue:false},
    {name: '发生地址', value: '', key: 'issueAddress', isTime: false,isShowOverdue:false},
    {name: '发生时间', value: '', key: 'issueTime', isTime: true,isShowOverdue:false},
    {name: '受理备注', value: '', key: 'receiveComment', isTime: false,isShowOverdue:false},
    {name: '开始时间', value: '', key: 'bookingStartTime', isTime: true,isShowOverdue:false},
    {name: '结束时间', value: '', key: 'bookingEndTime', isTime: true,isShowOverdue:false},
    {name: '到场时限', value: '', key: 'arrivedDeadLine', isTime: true,isShowOverdue:false},
    {name: '处理时限', value: '', key: 'replyDeadLine', isTime: true,isShowOverdue:false},
    {name: '延时时限', value: '', key: 'delayReplyDeadLine', isTime: true,isShowOverdue:false},
    {name: '派遣站点', value: '', key: 'assignStation', isTime: false,isShowOverdue:false},
    {name: '派遣人', value: '', key: 'assignPerson', isTime: false,isShowOverdue:false},
    {name: '派遣备注', value: '', key: 'assignComment', isTime: false,isShowOverdue:false}
  ];

  reply: Reply[] = [
    {name: '处理时间', value: '', isActive: false, color: this.disableColor},
    {name: '处理部门', value: '', isActive: false, color: this.disableColor},
    {name: this.optPerson, value: '', isActive: true, color: this.enableColor},
    {name: this.optTypeName, value: this.optTypeDefaultValue, isActive: true, color: this.enableColor},
    {name: this.optContentName, value: this.optContentDefaultValue, isActive: true, color: this.enableColor},
    {name: this.optReasonName, value: this.optReasonDefaultValue, isActive: true, color: this.enableColor},
    {name: this.optSolutionName, value: this.optSolutionDefaultValue, isActive: true, color: this.enableColor},
    {name: this.optResultName, value: this.optResultDefaultValue, isActive: true, color: this.enableColor},
    {name: this.optRemarkName, value: this.optRemarkDefaultValue, isActive: true, color: this.enableColor}
  ];

  pictures: string[] = [
    '',
    '',
    ''
  ];

  videos: string[] = [
    '',
    '',
    ''
  ];

  audios: {name: string, time: number}[] = [
    {name: '', time: 0},
    {name: '', time: 0},
    {name: '', time: 0}
  ];

  mediaNames: string[] = [];

  isPreview: boolean;
  isLocationValid: boolean;
  private taskEx: TaskEx;
  private history: History;
  private taskDetail: TaskDetail;
  private replyInfo: ReplyInfo;

  private optPersons: Array<Personnel>;
  private optTypes: Array<Word>;
  private optContents: Array<Word>;
  private optReasons: Array<Word>;
  private optSolutions: Array<Word>;
  private optResults: Array<Word>;
  private picCount: number = 0;
  private audioCount: number = 0;
  private videoCount: number = 0;

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private alertCtrl: AlertController,
              private events: Events,
              private dataService: DataService,
              private globalService: GlobalService,
              private popoverCtrl: PopoverController,
              private fileService: FileService,
              public configService: ConfigService,) {
    [this.taskEx, this.history] = navParams.data;
    this.isPreview = this.taskEx.isPreview;
    this.isLocationValid = this.taskEx.isLocationValid;
  }

  /**
   * 初始化
   */
  ngOnInit(): void {
    console.log(this.tag + 'ngOnInit');
    this.dataService.getTaskDetail(this.taskEx.id)
      .then(taskDetail => {
        console.log(this.tag + "getTaskDetail: " + taskDetail);
        this.taskDetail = taskDetail;
        this.getOverdueFromFile();
      })
      .catch(error => console.error(error));

    if (this.history && this.history.reply) {
      this.replyInfo = this.history.reply as ReplyInfo;
    }

    if (!this.replyInfo) {
      this.replyInfo = {
        opTime: 0,
        opDepartment: this.globalService.department,
        opPerson: '',
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

    this.subscribeEvent(this.events);
  }

  /**
   * 销毁
   */
  ngOnDestroy(): void {
    this.events.unsubscribe(this.globalService.recordAudioFinishEvent);
  }

  /**
   * 定位
   * @param ev
   */
  onLocate(ev: any): void {
    this.navCtrl.push(MapPage, new MapParam(MapType.Locate, this.taskEx.location, this.taskEx.id));
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
      || !this.replyInfo.result
      || !this.replyInfo.opPerson) {
      return this.globalService.showToast("数据填写不完整!");
    }

    let processEx: ProcessEx = new ProcessEx();
    if (!transform2ProcessEx(this.taskEx, processEx)
      || processEx.reply.done) {
      return this.globalService.showToast("数据转换失败!");
    }

    let task: Task = transform2Task(this.replyInfo, this.taskEx, processEx);
    let output: any = {
      uploadedFlag: this.globalService.uploadedFlagForLocal
    };
    this.globalService.getLocation()
      .then(location => {
        this.replyInfo.location = location;
        return this.dataService.reply(this.replyInfo, task, this.taskDetail, this.mediaNames, output);
      })
      .then(date => {
        console.log("success");

        this.taskEx.photoCount = this.picCount;
        this.taskEx.audioCount = this.audioCount;
        this.taskEx.videoCount = this.videoCount;

        let history: History = {
          userId: this.globalService.userId,
          taskId: task.taskId,
          state: TaskState.Reply,
          task: task,
          reply: this.replyInfo,
          uploadedFlag: output.uploadedFlag,
          taskDetail: this.taskDetail,
          mediaNames: this.mediaNames
        };

        this.dataService.uploadMediasOfOneTask(task.taskId);
        this.events.publish(this.globalService.myWorkUpdateEvent, {
          type: 'reply',
          taskEx: this.taskEx,
          history
        });
        this.navCtrl.pop();
      })
      .catch(error => {
        console.error(error);
        this.globalService.showToast(error);
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
        this.setMediaInfo();
        break;
      default:
        return;
    }
  }

  /**
   * 选择item
   * @param item
   */
  itemSelected(item: Reply): void {
    if (this.isPreview) {
      return;
    }

    switch (item.name) {
      case this.optPerson:
        this.popupOptPersonAlert()
        break;
      case this.optTypeName:
        this.popupOptTypeAlert();
        break;
      case this.optContentName:
        this.popupOptContentAlert();
        break;
      case this.optReasonName:
        this.popupOptReasonAlert();
        break;
      case this.optSolutionName:
        this.popupOptSolutionAlert();
        break;
      case this.optResultName:
        this.popupOptResultAlert();
        break;
      case this.optRemarkName:
        this.popupRemarkAlert();
        break;
    }
  }

  /**
   * 拍照
   * @param ev
   */
  onTakePicture(ev: any): void {
    if (this.globalService.isChrome || this.isPreview) {
      return;
    }

    if (this.picCount >= this.pictureMaxCount) {
      return this.globalService.showToast('照片已满');
    }

    this.dataService.takePicture(this.taskEx.id)
      .then(result => {
        let {filePath, fileName} = result;
        console.log(filePath);
        console.log(fileName);
        if (filePath && fileName) {
          this.pictures[this.picCount++] = filePath;
          this.mediaNames.push(fileName);
        }
      })
      .catch(error => console.error(error));
  }

  /**
   * 视频
   * @param ev
   */
  onTakeVideo(ev: any): void {
    if (this.globalService.isChrome || this.isPreview) {
      return;
    }

    if (this.videoCount >= this.videoMaxCount) {
      return this.globalService.showToast('视频已满');
    }

    this.dataService.takeVideo(this.taskEx.id)
      .then(result => {
        let {filePath, fileName} = result;
        console.log(filePath);
        console.log(fileName);
        if (filePath && fileName) {
          this.videos[this.videoCount++] = filePath;
          this.mediaNames.push(fileName);
        }
      })
      .catch(error => console.error(error));
  }

  onPlayVideo(path : string): void {
    if (!path) {
      return;
    }
    this.dataService.playVideo(path)
      .then(data => {
        console.log(data);
      });
  }

  onDeletePicture(name: string): void {
    if (this.globalService.isChrome || this.isPreview || !name) {
      return;
    }

    let index: number = this.pictures.findIndex(item => item === name);
    if (index === -1) {
      return;
    }

    let lastIndex: number = name.lastIndexOf('/');
    if (lastIndex <= 0) {
      return;
    }
    name = name.substring(lastIndex + 1);
    if (!name) {
      return;
    }

    let index2: number = this.mediaNames.findIndex(item => item === name);
    if (index2 === -1) {
      return;
    }

    this.dataService.deleteOneMedia(name)
      .then(result => {
        for (let i = index; i < this.pictures.length - 1; i++) {
          this.pictures[i] = this.pictures[i + 1];
        }
        this.picCount--;
        this.pictures[this.picCount] = '';

        for (let i = index2; i < this.mediaNames.length - 1; i++) {
          this.mediaNames[i] = this.mediaNames[i + 1];
        }
        this.mediaNames.pop();
      })
      .catch(err => console.error(err));
  }

  onDeleteVideo(name: string): void {
    if (this.globalService.isChrome || this.isPreview || !name) {
      return;
    }

    let index: number = this.videos.findIndex(item => item === name);
    if (index === -1) {
      return;
    }

    let lastIndex: number = name.lastIndexOf('/');
    if (lastIndex <= 0) {
      return;
    }
    name = name.substring(lastIndex + 1);
    if (!name) {
      return;
    }

    let index2: number = this.mediaNames.findIndex(item => item === name);
    if (index2 === -1) {
      return;
    }

    this.dataService.deleteOneMedia(name)
      .then(result => {
        for (let i = index; i < this.videos.length - 1; i++) {
          this.videos[i] = this.videos[i + 1];
        }
        this.videoCount--;
        this.videos[this.videoCount] = '';

        for (let i = index2; i < this.mediaNames.length - 1; i++) {
          this.mediaNames[i] = this.mediaNames[i + 1];
        }
        this.mediaNames.pop();
      })
      .catch(err => console.error(err));
  }

  /**
   * 录音
   * @param ev
   */
  onRecordAudio(ev: any): void {
    console.log(this.tag, 'onRecordAudio');

    if (this.globalService.isChrome || this.isPreview) {
      return;
    }

    if (this.audioCount >= this.audioMaxCount) {
      return this.globalService.showToast('录音已满');
    }

    this.popoverCtrl.create(PopoverRecordPage, {
      taskId: this.taskEx.id
    }, {
      showBackdrop: true,
      enableBackdropDismiss: false
    }).present();
  }

  onPlay(audio: {name: string, time: number}): void {
    if (!audio.name) {
      return;
    }

    let names: string[] = audio.name.split('#');
    if (!names || names.length !== 2) {
      return;
    }

    this.dataService.playAudio(names[0])
      .then(file => {
        if (file) {
          let prompt = this.alertCtrl.create({
            title: '提示',
            message: "结束播放语音",
            enableBackdropDismiss: false,
            buttons: [
              {
                text: '确定',
                handler: data => {
                  console.log('Saved clicked');
                  this.dataService.stopAudio(file)
                    .catch(err => console.error(err));
                }
              }
            ]
          });
          prompt.present();
        }
      })
      .catch(err => console.error(err));
  }

  onDeleteAudio(audio: {name: string, time: number}): void {
    if (this.globalService.isChrome || this.isPreview || !audio.name) {
      return;
    }

    let names: string[] = audio.name.split('#');
    if (!names || names.length !== 2) {
      return;
    }
    let name: string = names[0];
    let index: number = this.audios.findIndex(item => item.name === audio.name);
    if (index === -1) {
      return;
    }

    let index2: number = this.mediaNames.findIndex(item => item === audio.name);
    if (index2 === -1) {
      return;
    }

    this.dataService.deleteOneMedia(name)
      .then(result => {
        for (let i = index; i < this.audios.length - 1; i++) {
          this.audios[i].name = this.audios[i + 1].name;
          this.audios[i].time = this.audios[i + 1].time;
        }
        this.audioCount--;
        this.audios[this.audioCount].name = '';
        this.audios[this.audioCount].time = 0;

        for (let i = index2; i < this.mediaNames.length - 1; i++) {
          this.mediaNames[i] = this.mediaNames[i + 1];
        }
        this.mediaNames.pop();
      })
      .catch(err => console.error(err));
  }

  /**
   * 转换显示信息
   * @param taskDetail
   */
  private convertTaskDetail(taskDetail: TaskDetail): void {

    if (taskDetail.arrivedTime == 0){
      this.detail[9].isShowOverdue = taskDetail.arrivedDeadLine < new Date().getTime() - this.overdueTime*60*1000;
    }
    if (taskDetail.replyTime == 0) {
      this.detail[10].isShowOverdue = taskDetail.replyDeadLine < new Date().getTime() - this.overdueTime * 60 * 1000;
    }
    // if (taskDetail.completedTime == 0) {
    // this.detail[11].isShowOverdue = taskDetail.delayReplyDeadLine < new Date().getTime() - this.overdueTime*60*1000;
    // }

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

  /**
   * 读取文件的超期时限
   */
  getOverdueFromFile() {
    this.configService.getOverdueTime()
      .then(data => {
        console.log(this.tag + data);
        this.overdueTime = data;
        this.convertTaskDetail(this.taskDetail);
      })
      .catch(err => {
        console.log(this.tag + err);
      })
  }

  /**
   * 设置回复信息
   */
  private setReplyInfo(): void {
    if (this.replyInfo.opTime === 0) {
      this.replyInfo.opTime = new Date().getTime();
    }
    this.reply[0].value = this.globalService.getFormatTime(new Date(this.replyInfo.opTime));
    // department
    this.reply[1].value = this.replyInfo.opDepartment;
    // person
    this.getOptPersons(this.replyInfo.opPerson);
    // operation type
    this.getOptTypes(this.replyInfo.opLeiBie, this.replyInfo.opContent);
    // operation reason
    this.getOptReasons(this.replyInfo.reason);
    // operation solution
    this.getOptSolutions(this.replyInfo.solution);
    // operation result
    this.getOptResults(this.replyInfo.result);
    // remark
    this.reply[8].isActive = !this.isPreview;
    this.reply[8].value = this.replyInfo.replayComment;
  }

  /**
   * 获取处理类别
   * @param typeId
   * @param contentId
   */
  private getOptTypes(typeId?: number, contentId?: number): void {
    this.dataService.getOptTypes()
      .then(words => {
        console.log(this.tag, "getOptTypes");
        this.optTypes = words;
        if (this.optTypes.length > 0) {
          let word: Word;
          if (typeId) {
            word = this.optTypes.find(word => word.wid === typeId);
          }

          if (!word) {
            word = this.optTypes[0];
            contentId = undefined;
          }

          this.reply[3].value = word.wName;
          this.reply[3].isActive = !this.isPreview;
          this.reply[3].remark = word.wRemark;
          this.replyInfo.opLeiBie = word.wid;
          this.getOptContents(Number.parseInt(word.wRemark), contentId);
        }
      })
      .catch(error => console.error(error));
  }

  /**
   * 获取处理内容
   * @param parentId
   * @param contentId
   */
  private getOptContents(parentId: number, contentId?: number): void {
    this.dataService.getOptContents(parentId)
      .then(words => {
        console.log(this.tag, "getOptContents");
        this.optContents = words;
        if (this.optContents.length > 0) {
          let word: Word;
          if (contentId) {
            word = this.optContents.find(word => word.wid === contentId);
          }

          if (!word) {
            word = this.optContents[0];
          }

          this.reply[4].value = word.wName;
          this.reply[4].remark = word.wRemark;
          this.reply[4].color = this.enableColor;
          this.replyInfo.opContent = word.wid;
        } else {
          this.reply[4].value = "请选择处理内容";
          this.reply[4].remark = "";
          this.reply[4].color = this.disableColor;
          this.replyInfo.opContent = 0;
        }
        this.reply[4].isActive = !this.isPreview;
      })
      .catch(error => console.error(error));
  }

  /**
   * 获取发生原因
   */
  private getOptReasons(id?: number): void {
    this.dataService.getOptReasons()
      .then(words => {
        console.log(this.tag, "getOptReasons");
        this.optReasons = words;
        if (this.optReasons.length > 0) {
          let word: Word;
          if (id) {
            word = this.optReasons.find(word => word.wid === id);
          }

          if (!word) {
            word = this.optReasons[0];
          }

          this.reply[5].value = word.wName;
          this.reply[5].isActive = !this.isPreview;
          this.reply[5].remark = word.wRemark;
          this.replyInfo.reason = word.wid;
        }
      })
      .catch(error => console.error(error));
  }

  /**
   * 获取解决措施
   */
  private getOptSolutions(id?: number): void {
    this.dataService.getOptSolutions()
      .then(words => {
        console.log(this.tag, "getOptSolutions");
        this.optSolutions = words;
        if (this.optSolutions.length > 0) {
          let word: Word;
          if (id) {
            word = this.optSolutions.find(word => word.wid === id);
          }

          if (!word) {
            word = this.optSolutions[0];
          }

          this.reply[6].value = word.wName;
          this.reply[6].isActive = !this.isPreview;
          this.reply[6].remark = word.wRemark;
          this.replyInfo.solution = word.wid;
        }
      })
      .catch(error => console.error(error));
  }

  /**
   * 获取处理结果
   */
  private getOptResults(id?: number): void {
    this.dataService.getOptResults()
      .then(words => {
        console.log(this.tag, "getOptResult");
        this.optResults = words;
        if (this.optResults.length > 0) {
          let word: Word;
          if (id) {
            word = this.optResults.find(word => word.wid === id);
          }

          if (!word) {
            word = this.optResults[0];
          }

          this.reply[7].value = word.wName;
          this.reply[7].isActive = !this.isPreview;
          this.reply[7].remark = word.wRemark;
          this.replyInfo.result = word.wid;
        }
      })
      .catch(error => console.error(error));
  }

  /**
   * 处理类别
   */
  private popupOptTypeAlert(): void {
    if (!this.optTypes || this.optTypes.length <= 0) {
      return this.globalService.showToast("处理类别为空!")
    }

    this.popupAlert(this.optTypes, this.optTypeName, this.reply[3], this.replyInfo, "opLeiBie");
  }

  /**
   * 处理内容
   */
  private popupOptContentAlert(): void {
    if (!this.optContents || this.optContents.length <= 0) {
      return this.globalService.showToast("处理内容为空!")
    }

    this.popupAlert(this.optContents, this.optContentName, this.reply[4], this.replyInfo, "opContent");
  }

  /**
   * 发生原因
   */
  private popupOptReasonAlert(): void {
    if (!this.optReasons || this.optReasons.length <= 0) {
      return this.globalService.showToast("发生原因为空!")
    }

    this.popupAlert(this.optReasons, this.optReasonName, this.reply[5], this.replyInfo, "reason");
  }

  /**
   * 解决措施
   */
  private popupOptSolutionAlert(): void {
    if (!this.optSolutions || this.optSolutions.length <= 0) {
      return this.globalService.showToast("解决措施为空!")
    }

    this.popupAlert(this.optSolutions, this.optSolutionName, this.reply[6], this.replyInfo, "solution");
  }

  /**
   * 处理结果
   */
  private popupOptResultAlert(): void {
    if (!this.optResults || this.optResults.length <= 0) {
      return this.globalService.showToast("处理结果为空!")
    }

    this.popupAlert(this.optResults, this.optResultName, this.reply[7], this.replyInfo, "result");
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
          this.getOptContents(Number.parseInt(reply.remark));
        }
      }
    });

    alert.present().then(() => {
      //this.testRadioOpen = true;
    });
  }

  private subscribeEvent(events: Events): void {
    events.subscribe(this.globalService.recordAudioFinishEvent, (name: string, time: number) => {
      console.log(name);
      if (name && time > 0) {
        time = Number.parseInt((time / 1000).toString());
        this.audios[this.audioCount].name = `${name}#${time}`;
        this.audios[this.audioCount++].time = time;
        this.mediaNames.push(`${name}#${time}`);
      }
    });
  }

  private setMediaInfo(): void {
    if (this.history
      && this.history.mediaNames
      && this.history.mediaNames.length > 0) {
      this.picCount = 0;
      this.audioCount = 0;
      this.videoCount = 0;
      this.mediaNames = [];
      for (let name of this.history.mediaNames) {
        if (name.lastIndexOf(this.globalService.photoSuffix) !== -1) {
          this.pictures[this.picCount++] = `${this.fileService.getImagesDir()}/${name}`;
          this.mediaNames.push(name);
        } else if (name.lastIndexOf(this.globalService.videoSuffix) !== -1){
          this.videos[this.videoCount++] = `${this.fileService.getVideosDir()}/${name}`;
          this.mediaNames.push(name);
        }else if (name.lastIndexOf(this.globalService.audioSuffix) !== -1) {
          this.audios[this.audioCount].name = name;
          let values: string[] = name.split('#');
          if (values && values.length === 2) {
            this.audios[this.audioCount++].time = Number.parseInt(values[1]);
          } else {
            this.audios[this.audioCount++].time = 10;
          }
          this.mediaNames.push(name);
        }
      }
    }
  }

  private getOptPersons(opPerson: string): void {
    this.dataService.getPersonnels(this.globalService.userId)
      .then(personnels => {
        console.log(this.tag, "getOptPersons");
        this.optPersons = personnels;
        if (this.optPersons.length > 0) {
          let names: string[] = [];
          if (opPerson) {
            let persons: string[] = opPerson.split(',');
            for (let personnel of personnels) {
              if (persons.find(person => person === personnel.fieldPersonnelId.toString())) {
                names.push(personnel.fieldPersonnelName);
              }
            }
          }

          if (names.length <= 0 || !opPerson) {
            names.push(this.optPersons[0].fieldPersonnelName);
            opPerson = this.optPersons[0].fieldPersonnelId.toString();
          }

          this.reply[2].value = names.join(',');
          this.reply[2].isActive = !this.isPreview;
          this.replyInfo.opPerson = opPerson;
        }
      })
      .catch(error => console.error(error));
  }

  private popupOptPersonAlert(): void {
    if (!this.optPersons || this.optPersons.length <= 0) {
      return this.globalService.showToast("处理人为空!")
    }

    let alert = this.alertCtrl.create();
    alert.setTitle(this.optPerson);

    for (let personnel of this.optPersons) {
      alert.addInput({
        type: 'checkbox',
        label: personnel.fieldPersonnelName,
        value: `${personnel.fieldPersonnelName}#${personnel.fieldPersonnelId}`,
        checked: this.reply[2].value.toString().includes(personnel.fieldPersonnelName)
      });
    }

    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        console.log('Radio data:', data);
        let names: string[] = [];
        let values: string[] = [];
        for (let item of data) {
          let nameAndValue: string[] = item.split("#");
          if (nameAndValue.length === 2) {
            names.push(nameAndValue[0]);
            values.push(nameAndValue[1]);
          }
        }

        this.reply[2].value = names.join(',');
        this.replyInfo.opPerson = values.join(",");
      }
    });

    alert.present().then(() => {
      //this.testRadioOpen = true;
    });
  }
}

