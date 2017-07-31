import {Task} from "./Task";
import {AcceptInfo} from "./AcceptInfo";
import {ArriveInfo} from "./ArriveInfo";
import {CancelInfo} from "./CancelInfo";
import {DelayInfo} from "./DelayInfo";
import {GoInfo} from "./GoInfo";
import {RejectInfo} from "./RejectInfo";
import {ReplyInfo} from "./ReplyInfo";
import {TaskDetail} from "./TaskDetail";


export interface History {
  userId: number;
  taskId: string;
  state: number;
  task: Task; // -> save to the content field in db
  reply: AcceptInfo | ArriveInfo | CancelInfo | DelayInfo | GoInfo | RejectInfo | ReplyInfo;
  uploadedFlag: number;
  taskDetail?: TaskDetail;
  mediaNames?: Array<string>;
}

export class HistoryEx {
  userId: number;
  taskId: string;
  state: number;
  task: Task; // -> save to the content field in db
  reply: AcceptInfo | ArriveInfo | CancelInfo | DelayInfo | GoInfo | RejectInfo | ReplyInfo;
  uploadedFlag: number;
  taskDetail?: TaskDetail;
  mediaNames?: Array<string>;
  isRejected: boolean; //是否退单
  isCanceled: boolean;  //是否销单
  photoCount: number;
  audioCount: number;

  constructor(history: History) {
    debugger;
    this.userId = history.userId;
    this.taskId = history.taskId;
    this.state = history.state;
    this.task = history.task;
    this.reply = history.reply;
    this.uploadedFlag = history.uploadedFlag;
    this.taskDetail = history.taskDetail;
    this.mediaNames = history.mediaNames;
    this.isRejected = history.state == 5;
    this.isCanceled = history.state == 7;
    if (history.mediaNames && history.mediaNames.length > 0) {
      this.photoCount = history.mediaNames.length;
    } else {
      this.photoCount = 0;
    }
    this.audioCount = 0;  //todo 录音的数量
  }

  static transformToHistoryEx(historyEx: Array<HistoryEx>, historys: Array<History>) {
    for (let history of historys) {
      historyEx.push(new HistoryEx(history));
    }
  }
}
