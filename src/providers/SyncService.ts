import {Injectable} from "@angular/core";
import {DownloadService} from "./DownloadService";
import {UploadService} from "./UploadService";
import {GlobalService} from "./GlobalService";
import {Events} from "ionic-angular";
import {TaskState, Task} from "../model/Task";
import {TaskDetail} from "../model/TaskDetail";
import {AcceptInfo} from "../model/AcceptInfo";
import {GoInfo} from "../model/GoInfo";
import {ArriveInfo} from "../model/ArriveInfo";
import {ReplyInfo} from "../model/ReplyInfo";
import {RejectInfo} from "../model/RejectInfo";
import {DelayInfo} from "../model/DelayInfo";
import {CancelInfo} from "../model/CancelInfo";
import {History} from "../model/History";
import {DbService} from "./DbService";
import {Media, MediaExtendedInfo} from "../model/Media";
import {MediaService} from "./MediaService";
import {ConfigService} from "./ConfigService";
import {DataMaterialInfo} from "../model/MaterialsInfo";

export enum MsgType {
  DownloadTasksAndDetails,
  DownloadDetailsOfTasks,
  UploadMediasOfHistory,
  UploadHistoriesAndMedias, //
  UploadMaterialInfos,
    //UploadMedias
  UploadAllInfos // history & media & material
}

export interface SyncMsg {
  msgType: MsgType,
  taskId?: string,

}

@Injectable()
export abstract class SyncService {
  private readonly syncEvent: string = 'sync:service';
  private readonly downloadTaskEvent: string = 'task:download';
  private readonly downloadTaskDetailEvent: string = 'task:detail:download';
  private readonly uploadHistoryEvent: string = 'history:upload';
  private readonly uploadMediaEvent: string = 'media:upload';
  private readonly uploadMaterialInfoEvent: string = 'materialInfo:upload';

  private queue: Array<SyncMsg> = [];
  private isServiceBusy: boolean;

  constructor(protected downloadService: DownloadService,
              protected uploadService: UploadService,
              protected globalService: GlobalService,
              protected dbService: DbService,
              protected mediaService: MediaService,
              protected events: Events,
              protected configService: ConfigService) {
  }

  /**
   * 初始化
   */
  public init(): void {
    this.isServiceBusy = false;
    this.subscribeSyncEvent();
    this.subscribeDownloadEvent();
    this.subscribeUploadEvent();
    this.subscribeUploadMaterialInfoEvent();
  }

  /**
   * 销毁
   */
  public destroy(): void {
    this.events.unsubscribe(this.syncEvent);
    this.events.unsubscribe(this.downloadTaskEvent);
    this.events.unsubscribe(this.downloadTaskDetailEvent);
    this.events.unsubscribe(this.uploadHistoryEvent);
    this.events.unsubscribe(this.uploadMediaEvent);
    this.events.unsubscribe(this.uploadMaterialInfoEvent);
  }

  /**
   * 发送同步事件
   * @param syncMsg
   */
  public sendMsg(syncMsg: SyncMsg): void {
    this.queue.push(syncMsg);
    this.events.publish(this.syncEvent);
  }

  /**
   * 接收
   * @param acceptInfo
   * @param task
   * @param output
   * @returns {any}
   */
  public accept(acceptInfo: AcceptInfo, task: Task,
                output: {uploadedFlag: number} = {uploadedFlag: this.globalService.uploadedFlagForLocal}): Promise<boolean> {
    if (this.configService.isDebugMode()) {
      debugger;
    }

    if (!acceptInfo || !task) {
      return Promise.reject('param is error');
    } else if (this.globalService.isChrome) {
      return this.uploadService.accept(acceptInfo)
        .then(result => {
          output.uploadedFlag = result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal;
          return result;
        });
    } else {
      return this.dbService.getHistories(acceptInfo.userId, acceptInfo.taskId)
        .then(histories => {
          if (this.isExistingNotUploadedHistory(histories, TaskState.Accept)) { // only save to local db
            return this.dbService.saveHistory({
              userId: acceptInfo.userId,
              taskId: acceptInfo.taskId,
              state: TaskState.Accept,
              task,
              reply: acceptInfo,
              uploadedFlag: output.uploadedFlag = this.globalService.uploadedFlagForLocal
            }).then(result => this.dbService.saveTask(task));
          } else { // send to the server and save to local db
            return this.uploadService.accept(acceptInfo)
            //.catch(error => console.error(error))
              .then(result => this.dbService.saveHistory({
                userId: acceptInfo.userId,
                taskId: acceptInfo.taskId,
                state: TaskState.Accept,
                task,
                reply: acceptInfo,
                uploadedFlag: output.uploadedFlag = result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal
              }))
              .then(result => this.dbService.saveTask(task));
          }
        });
    }
  }

  /**
   * 出发
   * @param goInfo
   * @param task
   * @param output
   * @returns {any}
   */
  public go(goInfo: GoInfo, task: Task,
            output: {uploadedFlag: number} = {uploadedFlag: this.globalService.uploadedFlagForLocal}): Promise<boolean> {
    if (this.configService.isDebugMode()) {
      debugger;
    }

    if (!goInfo || !task) {
      return Promise.reject('param is error');
    } else if (this.globalService.isChrome) {
      return this.uploadService.go(goInfo)
        .then(result => {
          output.uploadedFlag = result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal;
          return result;
        });
    } else {
      return this.dbService.getHistories(goInfo.userId, goInfo.taskId)
        .then(histories => {
          if (this.isExistingNotUploadedHistory(histories, TaskState.Go)) { // only save to local db
            return this.dbService.saveHistory({
              userId: goInfo.userId,
              taskId: goInfo.taskId,
              state: TaskState.Go,
              task,
              reply: goInfo,
              uploadedFlag: output.uploadedFlag = this.globalService.uploadedFlagForLocal
            }).then(result => this.dbService.saveTask(task));
          } else { // send to the server and save to local db
            return this.uploadService.go(goInfo)
            //.catch(error => console.error(error))
              .then((result) => this.dbService.saveHistory({
                userId: goInfo.userId,
                taskId: goInfo.taskId,
                state: TaskState.Go,
                task,
                reply: goInfo,
                uploadedFlag: output.uploadedFlag = result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal
              }))
              .then(result => this.dbService.saveTask(task));
          }
        });
    }
  }

  /**
   * 到场
   * @param arriveInfo
   * @param task
   * @param output
   * @returns {any}
   */
  public arrive(arriveInfo: ArriveInfo, task: Task,
                output: {uploadedFlag: number} = {uploadedFlag: this.globalService.uploadedFlagForLocal}): Promise<boolean> {
    if (this.configService.isDebugMode()) {
      debugger;
    }

    if (!arriveInfo || !task) {
      return Promise.reject('param is error');
    } else if (this.globalService.isChrome) {
      return this.uploadService.arrive(arriveInfo)
        .then(result => {
          output.uploadedFlag = result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal;
          return result;
        });
    } else {
      return this.dbService.getHistories(arriveInfo.userId, arriveInfo.taskId)
        .then(histories => {
          if (this.isExistingNotUploadedHistory(histories, TaskState.Arrived)) { // only save to local db
            return this.dbService.saveHistory({
              userId: arriveInfo.userId,
              taskId: arriveInfo.taskId,
              state: TaskState.Arrived,
              task,
              reply: arriveInfo,
              uploadedFlag: output.uploadedFlag = this.globalService.uploadedFlagForLocal
            }).then(result => this.dbService.saveTask(task));
          } else { // send to the server and save to local db
            return this.uploadService.arrive(arriveInfo)
            //.catch(error => console.error(error))
              .then((result) => this.dbService.saveHistory({
                userId: arriveInfo.userId,
                taskId: arriveInfo.taskId,
                state: TaskState.Arrived,
                task,
                reply: arriveInfo,
                uploadedFlag: output.uploadedFlag = result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal
              }))
              .then(result => this.dbService.saveTask(task));
          }
        });
    }
  }

  /**
   * 回复
   * @param replyInfo
   * @param task
   * @param taskDetail
   * @param mediaNames
   * @param output
   * @returns {any}
   */
  public reply(replyInfo: ReplyInfo, task: Task, taskDetail: TaskDetail, mediaNames: Array<string>,
               output: {uploadedFlag: number} = {uploadedFlag: this.globalService.uploadedFlagForLocal}): Promise<boolean> {
    if (this.configService.isDebugMode()) {
      debugger;
    }

    if (!replyInfo || !task || !taskDetail || !mediaNames) {
      return Promise.reject('param is error');
    } else if (this.globalService.isChrome) {
      return this.uploadService.reply(replyInfo)
        .then(result => {
          output.uploadedFlag = result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal;
          return result;
        });
    } else {
      return this.dbService.getHistories(replyInfo.userId, replyInfo.taskId)
        .then(histories => {
          if (this.isExistingNotUploadedHistory(histories, TaskState.Reply)) { // only save to local db
            return this.dbService.saveHistory({
              userId: replyInfo.userId,
              taskId: replyInfo.taskId,
              state: TaskState.Reply,
              task,
              reply: replyInfo,
              uploadedFlag: output.uploadedFlag = this.globalService.uploadedFlagForLocal,
              taskDetail,
              mediaNames
            }).then(result => this.dbService.saveTask(task));
          } else { // send to the server and save to local db
            return this.uploadService.reply(replyInfo)
              .catch(error => console.error(error))
              .then((result) => this.dbService.saveHistory({
                userId: replyInfo.userId,
                taskId: replyInfo.taskId,
                state: TaskState.Reply,
                task,
                reply: replyInfo,
                uploadedFlag: output.uploadedFlag = result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal,
                taskDetail,
                mediaNames
              }))
              .then(result => this.dbService.saveTask(task));
          }
        });
    }
  }

  /**
   * 退单
   * @param rejectInfo
   * @param task
   * @param output
   * @returns {any}
   */
  public reject(rejectInfo: RejectInfo, task: Task,
                output: {uploadedFlag: number} = {uploadedFlag: this.globalService.uploadedFlagForLocal}): Promise<boolean> {
    if (this.configService.isDebugMode()) {
      debugger;
    }

    if (!rejectInfo || !task) {
      return Promise.reject('param is error');
    } else if (this.globalService.isChrome) {
      return this.uploadService.reject(rejectInfo)
        .then(result => {
          output.uploadedFlag = result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal;
          return result;
        });
    } else {
      return this.dbService.getHistories(rejectInfo.userId, rejectInfo.taskId)
        .then(histories => {
          if (this.isExistingNotUploadedHistory(histories, TaskState.Reject)) { // only save to local db
            return this.dbService.saveHistory({
              userId: rejectInfo.userId,
              taskId: rejectInfo.taskId,
              state: TaskState.Reject,
              task,
              reply: rejectInfo,
              uploadedFlag: output.uploadedFlag = this.globalService.uploadedFlagForLocal
            }).then(result => this.dbService.saveTask(task));
          } else { // send to the server and save to local db
            return this.uploadService.reject(rejectInfo)
            //.catch(error => console.error(error))
              .then((result) => this.dbService.saveHistory({
                userId: rejectInfo.userId,
                taskId: rejectInfo.taskId,
                state: TaskState.Reject,
                task,
                reply: rejectInfo,
                uploadedFlag: output.uploadedFlag = result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal
              }))
              .then(result => this.dbService.saveTask(task));
          }
        });
    }
  }

  /**
   * 延期
   * @param delayInfo
   * @param task
   * @param output
   * @returns {any}
   */
  public delay(delayInfo: DelayInfo, task: Task,
               output: {uploadedFlag: number} = {uploadedFlag: this.globalService.uploadedFlagForLocal}): Promise<boolean> {
    if (this.configService.isDebugMode()) {
      debugger;
    }

    if (!delayInfo || !task) {
      return Promise.reject('param is error');
    } else if (this.globalService.isChrome) {
      return this.uploadService.delay(delayInfo)
        .then(result => {
          output.uploadedFlag = result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal;
          return result;
        });
    } else {
      return this.dbService.getHistories(delayInfo.userId, delayInfo.taskId)
        .then(histories => {
          if (this.isExistingNotUploadedHistory(histories, TaskState.Delay)) { // only save to local db
            return this.dbService.saveHistory({
              userId: delayInfo.userId,
              taskId: delayInfo.taskId,
              state: TaskState.Delay,
              task,
              reply: delayInfo,
              uploadedFlag: output.uploadedFlag = this.globalService.uploadedFlagForLocal
            }).then(result => this.dbService.saveTask(task));
          } else { // send to the server and save to local db
            return this.uploadService.delay(delayInfo)
            //.catch(error => console.error(error))
              .then((result) => this.dbService.saveHistory({
                userId: delayInfo.userId,
                taskId: delayInfo.taskId,
                state: TaskState.Delay,
                task,
                reply: delayInfo,
                uploadedFlag: output.uploadedFlag = result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal
              }))
              .then(result => this.dbService.saveTask(task));
          }
        });
    }
  }

  /**
   * 销单
   * @param cancelInfo
   * @param task
   * @param output
   * @returns {any}
   */
  public cancel(cancelInfo: CancelInfo, task: Task,
                output: {uploadedFlag: number} = {uploadedFlag: this.globalService.uploadedFlagForLocal}): Promise<boolean> {
    if (this.configService.isDebugMode()) {
      debugger;
    }

    if (!cancelInfo || !task) {
      return Promise.reject('param is error');
    } else if (this.globalService.isChrome) {
      return this.uploadService.cancel(cancelInfo)
        .then(result => {
          output.uploadedFlag = result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal;
          return result;
        });
    } else {
      return this.dbService.getHistories(cancelInfo.userId, cancelInfo.taskId)
        .then(histories => {
          if (this.isExistingNotUploadedHistory(histories, TaskState.Cancel)) { // only save to local db
            return this.dbService.saveHistory({
              userId: cancelInfo.userId,
              taskId: cancelInfo.taskId,
              state: TaskState.Cancel,
              task,
              reply: cancelInfo,
              uploadedFlag: output.uploadedFlag = this.globalService.uploadedFlagForLocal
            }).then(result => this.dbService.saveTask(task));
          } else { // send to the server and save to local db
            return this.uploadService.cancel(cancelInfo)
            //.catch(error => console.error(error))
              .then((result) => this.dbService.saveHistory({
                userId: cancelInfo.userId,
                taskId: cancelInfo.taskId,
                state: TaskState.Cancel,
                task,
                reply: cancelInfo,
                uploadedFlag: output.uploadedFlag = result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal
              }))
              .then(result => this.dbService.saveTask(task));
          }
        });
    }
  }

  /**
   * 订阅同步事件
   */
  private subscribeSyncEvent(): void {
    this.events.subscribe(this.syncEvent, () => {
      if (this.isServiceBusy) {
        console.log('service is busy');
      } else if (this.queue.length <= 0) {
        console.log('the length of this queue is 0');
      } else {
        this.isServiceBusy = true;
        let syncMsg: SyncMsg = this.queue.shift();
        switch (syncMsg.msgType) {
          case MsgType.DownloadTasksAndDetails:
            this.downloadTasks(syncMsg.msgType);
            break;
          case MsgType.DownloadDetailsOfTasks:
            this.downloadDetails(syncMsg.msgType);
            break;
          case MsgType.UploadMediasOfHistory:
            this.uploadMedias(syncMsg.msgType, syncMsg.taskId);
            break;
          case MsgType.UploadHistoriesAndMedias:
            this.uploadHistories(syncMsg.msgType);
            break;
          case MsgType.UploadMaterialInfos:
            this.uploadUnUploadMaterialInfo(syncMsg.msgType);
            break;
          case MsgType.UploadAllInfos:
            this.uploadHistories(syncMsg.msgType);
            break;
          default:
            this.next();
            break;
        }
      }
    });
  }

  /**
   * 订阅下载事件
   */
  private subscribeDownloadEvent(): void {
    // download all tasks
    this.events.subscribe(this.downloadTaskEvent, (msgType: MsgType, since: number, count: number) => {
      this.downloadService.getTasks(this.globalService.userId, since, count)
        .then(tasks => {
          let retTasks: Array<Task> = [];
          for (let task of tasks) {
            task.taskId += `#${task.assignTime}`; // modify for the rejected task
            let item: Task = retTasks.find((item) =>
            item.taskId === task.taskId
            && item.acceptTime === task.acceptTime
            && item.arrivedTime === task.arrivedTime
            && item.assignTime === task.assignTime
            && item.compltedTime === task.compltedTime
            && item.createTime === task.createTime
            && item.desc === task.desc
            && item.goTime === task.goTime
            && item.replyTime === task.replyTime
            && item.source === task.source
            && item.state === task.state
            && item.taskType === task.taskType);
            if (!item) {
              retTasks.push(task);
            }
          }
          return retTasks;
        })
        .then(tasks => this.dbService.saveTasks(this.globalService.userId, tasks))
        .then(result => {
          this.events.publish(this.downloadTaskEvent, msgType, since + count, count);
        })
        .catch(error => {
          console.error(error);
          if (msgType == MsgType.DownloadTasksAndDetails) {
            this.downloadDetails(msgType);
          } else {
            this.next();
            this.events.publish(this.globalService.myWorkDownloadFinishEvent);
          }
        });
    });

    // download task detail
    this.events.subscribe(this.downloadTaskDetailEvent, (msgType: MsgType, taskIds: Array<string>) => {
      if (taskIds && taskIds.length > 0) {
        let taskId: string = taskIds.shift();
        if (taskId) {
          // modify for the rejected task
          return this.downloadService.getTaskDetail(taskId.split('#')[0])
            .then(detail => {
              detail.taskId = taskId; // modify for the rejected task
              return this.dbService.saveTaskDetail(detail)
                .then(result => result ? this.dbService.updateTaskExtendInfo(detail) : false);
            })
            .catch(error => console.error(error))
            .then((result) => this.events.publish(this.downloadTaskDetailEvent, msgType, taskIds));
        }
      }

      this.next();
      this.events.publish(this.globalService.myWorkDownloadFinishEvent);
    });
  }

  /**
   * 订阅上传事件
   */
  private subscribeUploadEvent(): void {
    // upload histories
    this.events.subscribe(this.uploadHistoryEvent, (msgType: MsgType, histories: Array<History>) => {
      if (histories && histories.length > 0) {
        let history: History = histories.shift();
        let task: Task = history.task;
        let promise: Promise<boolean>;
        if (task && history.reply) {
          let taskDetail: TaskDetail = history.taskDetail;
          let mediaNames: Array<string> = history.mediaNames;
          switch (history.state) {
            case TaskState.Accept:
              promise = this.accept(<AcceptInfo>history.reply, task);
              break;
            case TaskState.Go:
              promise = this.go(<GoInfo>history.reply, task);
              break;
            case TaskState.Arrived:
              promise = this.arrive(<ArriveInfo>history.reply, task);
              break;
            case TaskState.Reply:
              promise = this.reply(<ReplyInfo>history.reply, task, taskDetail, mediaNames);
              break;
            case TaskState.Reject:
              promise = this.reject(<RejectInfo>history.reply, task);
              break;
            case TaskState.Delay:
              promise = this.delay(<DelayInfo>history.reply, task);
              break;
            case TaskState.Cancel:
              promise = this.cancel(<CancelInfo>history.reply, task);
              break;
            default:
              promise = Promise.reject('state is error');
              break;
          }
        } else {
          promise = Promise.reject('state is error');
        }

        promise
          .then(data => console.log(data))
          .catch(error => console.error(error))
          .then(() => this.events.publish(this.uploadHistoryEvent, msgType, histories));
      } else { // finish
        if (msgType === MsgType.UploadHistoriesAndMedias || msgType === MsgType.UploadAllInfos) {
          this.uploadMedias(msgType);
        } else {
          this.next();
          this.events.publish(this.globalService.historyUploadFinishEvent);
        }
      }
    });

    // upload media
    this.events.subscribe(this.uploadMediaEvent, (msgType: MsgType, histories: Array<History>) => {
      if (histories && histories.length > 0) {
        let history: History = histories.shift();
        let mediaNames: Array<string> = history.mediaNames;
        if (mediaNames && mediaNames.length > 0) {
          for (let i: number = 0; i < mediaNames.length; i++) {
            mediaNames[i] = mediaNames[i].replace(/#\d*/, '');
          }

          this.dbService.getMediaList(this.globalService.userId, history.taskId, mediaNames,
            [this.globalService.uploadedFlagForLocal, this.globalService.uploadedFlagForUploading])
            .then(mediaList => this.configService.isNewFilService().then(result => result ? this.uploadMediaListV2(mediaList) : this.uploadMediaList(mediaList)))
            .catch(error => console.error(error))
            .then(() => this.events.publish(this.uploadMediaEvent, msgType, histories));
        } else {
          this.events.publish(this.uploadMediaEvent, msgType, histories);
        }
      } else { // finish
        if (msgType === MsgType.UploadAllInfos) {
          this.uploadUnUploadMaterialInfo(msgType);
        } else {
          this.next();
          this.events.publish(this.globalService.historyUploadFinishEvent);
        }
      }
    });
  }

  /**
   * 下载任务
   * @param msgType
   */
  private downloadTasks(msgType: MsgType): void {
    if (this.globalService.isChrome) {
      this.next();
      this.events.publish(this.globalService.myWorkDownloadFinishEvent);
    } else {
      this.events.publish(this.downloadTaskEvent, msgType,
        this.globalService.taskSinceDefault, this.globalService.taskCountDefault100);
    }
  }

  /**
   * 下载任务详情
   * @param msgType
   */
  private downloadDetails(msgType: MsgType): void {
    if (this.globalService.isChrome) {
      this.next();
      this.events.publish(this.globalService.myWorkDownloadFinishEvent);
    } else {
      this.dbService.getNoDetailTaskIds(this.globalService.userId)
        .catch(error => console.error(error))
        .then(taskIds => this.events.publish(this.downloadTaskDetailEvent, msgType, taskIds));
    }
  }

  /**
   * 上传历史工单
   * @param msgType
   */
  private uploadHistories(msgType: MsgType): void {
    if (this.globalService.isChrome) {
      this.next();
      this.events.publish(this.globalService.historyUploadFinishEvent);
    } else {
      this.dbService.getHistories(this.globalService.userId, undefined, undefined,
        [this.globalService.uploadedFlagForLocal, this.globalService.uploadedFlagForUploading])
        .catch(error => console.error(error))
        .then(histories => this.events.publish(this.uploadHistoryEvent, msgType, histories));
    }
  }

  /**
   * 上传多媒体
   * @param msgType
   * @param taskId
   */
  private uploadMedias(msgType: MsgType, taskId?: string): void {
    if (this.globalService.isChrome) {
      this.next();
      this.events.publish(this.globalService.historyUploadFinishEvent);
    } else {
      this.dbService.getHistories(this.globalService.userId, taskId, [TaskState.Reply], [])
        .catch(error => console.error(error))
        .then(histories => this.events.publish(this.uploadMediaEvent, msgType, histories));
    }
  }

  /**
   * 上传每个任务下的多媒体信息V2
   * @param mediaList
   * @returns {any}
   */
  private uploadMediaListV2(mediaList: Array<Media>): Promise<boolean> {
    if (mediaList && mediaList.length > 0) {
      let promises: Array<Promise<boolean>> = mediaList.map(media => this.uploadOneMediaV2(media));
      return Promise.all(promises)
        .then(result => {
          let files: Array<MediaExtendedInfo> =
            mediaList.filter(media => media.extendedInfo && media.extendedInfo instanceof Array && media.extendedInfo.length > 0)
              .map(media => media.extendedInfo[0]);
          return this.uploadService.uploadMediaIdsV2(mediaList[0].taskId.split('#')[0], this.globalService.userId, files);
        })
        .then(result => {
          for (let media of mediaList) {
            media.uploadedFlag = result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal;
          }
          let promises: Array<Promise<boolean>> = mediaList.map(media => this.dbService.saveMedia(media));
          return Promise.all(promises)
            .then(results => true);
        })
    } else {
      return Promise.resolve(true);
    }
  }


  /**
   * 上传每个任务下的多媒体信息
   * @param mediaList
   * @returns {any}
   */
  private uploadMediaList(mediaList: Array<Media>): Promise<boolean> {
    if (mediaList && mediaList.length > 0) {
      let promises: Array<Promise<boolean>> = mediaList.map(media => this.uploadOneMedia(media));
      return Promise.all(promises)
        .catch(error => console.error(error))
        .then(result => {
          let files: Array<string> = mediaList.filter(media => media.fileId !== 'null' && media.fileId !== 'undefined').map(media => media.fileId);
          return files.length > 0 ? this.uploadService.uploadMediaIds(mediaList[0].taskId.split('#')[0], files.join(',')) : false;
        })
        .then(result => {
          for (let media of mediaList) {
            media.uploadedFlag = result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal;
          }
          let promises: Array<Promise<boolean>> = mediaList.map(media => this.dbService.saveMedia(media));
          return Promise.all(promises)
            .then(results => true);
        })
    } else {
      return Promise.resolve(true);
    }
  }

  /**
   * 上传V2
   * @param media
   * @returns {Promise<boolean>}
   */
  private uploadOneMediaV2(media: Media): Promise<boolean> {
    return media.fileId && media.fileId !== 'null' && media.fileId !== 'undefined'
      ? Promise.resolve(true)
      : this.uploadService.uploadMediaV2(media)
        .then(fileId => {
          if (fileId) {
            media.fileId = fileId;
            return this.dbService.saveMedia(media);
          } else {
            return Promise.reject('fileId is error');
          }
        });
  }

  /**
   * 上传
   * @param media
   * @returns {Promise<boolean>}
   */
  private uploadOneMedia(media: Media): Promise<boolean> {
    return media.fileId && media.fileId !== 'null' && media.fileId !== 'undefined'
      ? Promise.resolve(true)
      : this.uploadService.uploadMedia(media)
        .then(fileId => {
          if (fileId) {
            media.fileId = fileId;
            return this.dbService.saveMedia(media);
          } else {
            return Promise.reject('fileId is error');
          }
        });
  }

  /**
   * 检查是否存在未上传的历史记录
   * @param histories
   * @param state
   * @returns {boolean}
   */
  private isExistingNotUploadedHistory(histories: Array<History>, state: number): boolean {
    let existing: boolean = false;
    if (histories && histories.length > 0) {
      for (let history of histories) {
        if (history.state === state) {
          break;
        }

        if (history.uploadedFlag !== this.globalService.uploadedFlagForUploaded) {
          existing = true;
        }
      }
    }
    return existing;
  }

  /**
   * 上传本地未上传的材料登记记录
   * @returns {Promise<T>}
   */
  private uploadUnUploadMaterialInfo(msgType: MsgType) {
    if (this.globalService.isChrome) {
      this.next();
      this.events.publish(this.globalService.historyUploadFinishEvent);
      return;
    }
    return this.dbService.getNotUploadMaterilalInfo(this.globalService.userId)
      .catch(error => console.log(error))
      .then(results => this.events.publish(this.uploadMaterialInfoEvent, results))
  }

  /**
   * 订阅上传事件 材料清单
   */
  private subscribeUploadMaterialInfoEvent(): void {
    this.events.subscribe(this.uploadMaterialInfoEvent, (materialInfos: Array<DataMaterialInfo>) => {
      if (materialInfos && materialInfos.length > 0) {
        let materialInfo = materialInfos.shift();
        if (materialInfo) {
          this.uploadMaterialInfo(materialInfo)
            .then(result => console.log(result))
            .catch(error => console.log(error))
            .then(() => this.events.publish(this.uploadMaterialInfoEvent, materialInfos));
        }
      } else {
        this.next();
        this.events.publish(this.globalService.historyUploadFinishEvent);
      }
    });
  }

  /**
   * 上传某条工单的记录并且修改标志位
   * @param data
   * @returns {Promise<T>}
   */
  private uploadMaterialInfo(data: DataMaterialInfo): Promise<boolean> {
    return new Promise((resolve, reject) => {
      return this.uploadService.uploadMaterialsAdd(data.infos)
        .then(result => {
          //更新上传标志
          if (result) {
            data.uploadFlag = this.globalService.uploadedFlagForUploaded;//已上传
            resolve(this.dbService.updateFlagMaterials(data));
          } else {
            reject("upload failed");
          }
        })
        .catch(error => {
          reject(false);
        });
    })
  }


  /**
   *
   */
  private next(): void {
    this.isServiceBusy = false;
    this.events.publish(this.syncEvent);
  }
}
