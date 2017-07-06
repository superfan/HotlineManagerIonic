import {Injectable} from '@angular/core';
import {DownloadService} from "./DownloadService";
import {Events} from "ionic-angular";
import {Task} from "../model/Task";
import {GlobalService} from "./GlobalService";
import {AcceptInfo} from "../model/AcceptInfo";
import {UploadService} from "./UploadService";
import {GoInfo} from "../model/GoInfo";
import {ArriveInfo} from "../model/ArriveInfo";
import {ReplyInfo} from "../model/ReplyInfo";
import {RejectInfo} from "../model/RejectInfo";
import {DelayInfo} from "../model/DelayInfo";
import {CancelInfo} from "../model/CancelInfo";
import {TaskDetail} from "../model/TaskDetail";
import {SearchTask} from "../model/SearchTask";
import {SearchTaskDetails} from "../model/SearchTaskDetails";
import {SearchTaskCount} from "../model/SearchTaskCount";

@Injectable()
export class DataService {
  private downloadTaskEvent: string = 'task:download';

  constructor(private downloadService: DownloadService,
              private uploadService: UploadService,
              private globalService: GlobalService,
              private events: Events) {
    events.subscribe(this.downloadTaskEvent, (since: number, count: number) => {

    })
  }

  /**
   * 分页获取任务
   * @param since
   * @param count
   * @returns {Promise<Array<Task>>}
   */
  public getTasks(since: number, count: number): Promise<Array<Task>> {
    return this.downloadService.getTasks(this.globalService.userId, since, count);
  }

  /**
   * 获取任务详情
   * @param taskId
   * @returns {Promise<TaskDetail>}
   */
  public getTaskDetail(taskId: string): Promise<TaskDetail> {
    return this.downloadService.getTaskDetail(taskId);
  }

  /**
   * 接受
   * @param acceptInfo
   * @returns {Promise<T>}
   */
  public accept(acceptInfo: AcceptInfo): Promise<boolean> {
    acceptInfo.userId = this.globalService.userId;
    return this.uploadService.accept(acceptInfo);
  }

  /**
   * 出发
   * @param goInfo
   * @returns {Promise<boolean>}
   */
  public go(goInfo: GoInfo): Promise<boolean> {
    goInfo.userId = this.globalService.userId;
    return this.uploadService.go(goInfo);
  }

  /**
   * 到场
   * @param arriveInfo
   * @returns {Promise<boolean>}
   */
  public arrive(arriveInfo: ArriveInfo): Promise<boolean> {
    arriveInfo.userId = this.globalService.userId;
    return this.uploadService.arrive(arriveInfo);
  }

  /**
   * 回复
   * @param replyInfo
   * @returns {Promise<boolean>}
   */
  public reply(replyInfo: ReplyInfo): Promise<boolean> {
    replyInfo.userId = this.globalService.userId;
    return this.uploadService.reply(replyInfo);
  }

  /**
   * 退单
   * @param rejectInfo
   * @returns {Promise<boolean>}
   */
  public reject(rejectInfo: RejectInfo) {
    rejectInfo.userId = this.globalService.userId;
    return this.uploadService.reject(rejectInfo);
  }

  /**
   * 延期
   * @param delayInfo
   * @returns {Promise<boolean>}
   */
  public delay(delayInfo: DelayInfo): Promise<boolean> {
    delayInfo.userId = this.globalService.userId;
    return this.uploadService.delay(delayInfo);
  }

  /**
   * 销单
   * @param cancelInfo
   * @returns {Promise<T>}
   */
  public cancel(cancelInfo: CancelInfo): Promise<boolean> {
    cancelInfo.userId = this.globalService.userId;
    return this.uploadService.cancel(cancelInfo);
  }

  public downloadTasks() {
    this.downloadTaskLoop(1, 100);

  }

  private downloadTaskLoop(since: number, count: number) {
    // this.downloadService.getTasks(since, count)
    //   .then(tasks => {
    //     if (tasks.length >= count) {
    //       this.events.publish(this.downloadTaskEvent, since + count, count);
    //     }
    //   })
    //   .catch(error => console.error(error));
  }

  /**
   * 查询任务
   */
  public searchTask(address: string, phone: string, serialNo: string, taskNo: string, taskState: number,
                    reportType: number, reportPerson: string, sendTime: number): Promise<Array<SearchTask>> {
    return this.downloadService.getSearchTasks(this.globalService.userId,address, phone, serialNo, taskNo,
      taskState, reportType, reportPerson, sendTime);
  }

  /**
   * 查询工单数量
   */
  public searchTaskCount(address: string, phone: string, serialNo: string, taskNo: string, taskState: number,
                         reportType: number, reportPerson: string, sendTime: number): Promise<SearchTaskCount> {
    return this.downloadService.getSearchTaskCount(this.globalService.userId,address, phone, serialNo, taskNo,
      taskState, reportType, reportPerson, sendTime);
  }

  /**
   * 查询任务详情
   * @param taskId 任务编号
   */
  public searchTaskDetails(taskId: string): Promise<SearchTaskDetails> {
    return this.downloadService.getSearchTaskDetails(taskId);
  }
}
