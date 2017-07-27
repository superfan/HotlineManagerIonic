import {Injectable} from '@angular/core';
import {DownloadService} from "./DownloadService";
import {Events} from "ionic-angular";
import {TaskState, Task} from "../model/Task";
import {GlobalService} from "./GlobalService";
import {AcceptInfo, AcceptExInfo} from "../model/AcceptInfo";
import {UploadService} from "./UploadService";
import {GoInfo} from "../model/GoInfo";
import {ArriveInfo} from "../model/ArriveInfo";
import {ReplyInfo} from "../model/ReplyInfo";
import {RejectInfo} from "../model/RejectInfo";
import {DelayInfo} from "../model/DelayInfo";
import {CancelInfo, CancelExInfo} from "../model/CancelInfo";
import {TaskDetail} from "../model/TaskDetail";
import {Word} from "../model/Word";
import {SearchTask} from "../model/SearchTask";
import {SearchTaskDetails} from "../model/SearchTaskDetails";
import {SearchTaskCount} from "../model/SearchTaskCount";
import {News} from "../model/News";
import {SearchTaskRequest} from "../model/SearchTaskRequest";
import {UserInfo} from "../model/UserInfo";
import {UserResult} from "../model/UserResult";
import {Personnel} from "../model/Personnel";
import {DispatchInfo} from "../model/DispatchInfo";
import {DbService} from "./DbService";
import {History} from "../model/History";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {FileService} from "./FileService";
import {MediaType} from "../model/Media";
import {Media, MediaObject} from "@ionic-native/media";

@Injectable()
export class DataService {
  private downloadTaskEvent: string = 'task:download';
  private downloadTaskDetailEvent: string = 'task:detail:download';
  private uploadHistoryEvent: string = 'history:upload';
  private uploadMediaEvent: string = 'media:upload';
  private optTypes: Array<Word>;
  private optContents: Array<Word>;
  private optReasons: Array<Word>;
  private optSolutions: Array<Word>;
  private optResults: Array<Word>;
  private reflectTypes: Array<Word>;
  private reflectContents: Array<Word>;
  private personnels: Array<Personnel>;
  private isDownloadTaskAndDetailFinished: boolean;

  constructor(private downloadService: DownloadService,
              private uploadService: UploadService,
              private globalService: GlobalService,
              private dbService: DbService,
              private events: Events,
              private camera: Camera,
              private media: Media,
              private fileService: FileService) {
  }
  /**
   * 初始化
   * @returns {Promise<boolean>}
   */
  public init(): Promise<boolean> {
    this.isDownloadTaskAndDetailFinished = true;
    this.subscribeEvent();
    return this.dbService.init();
  }

  /**
   * 销毁
   */
  public destroy(): void {
    this.events.unsubscribe(this.downloadTaskEvent);
    this.events.unsubscribe(this.downloadTaskDetailEvent);
    this.events.unsubscribe(this.uploadHistoryEvent);
    this.events.unsubscribe(this.uploadMediaEvent);
    this.dbService.destroy();
  }

  /**
   * 下载所有任务和详情
   * @returns {boolean}
   */
  public downloadTasksAndDetails(): boolean {
    if (this.isDownloadTaskAndDetailFinished) {
      this.isDownloadTaskAndDetailFinished = false;
      this.events.publish(this.downloadTaskEvent, this.globalService.taskSinceDefault,
        this.globalService.taskCountDefault100);
    }

    return this.isDownloadTaskAndDetailFinished;
  }

  /**
   * 分页获取任务
   * @param since
   * @param count
   * @param key
   * @returns {Promise<Array<Task>>}
   */
  public getTasks(since: number, count: number, key?: string): Promise<Array<Task>> {
    if (this.globalService.isChrome) {
      return this.downloadService.getTasks(this.globalService.userId, since, count);
    } else {
      return this.dbService.getTasks(this.globalService.userId, since, count,
        [TaskState.Dispatch, TaskState.Accept, TaskState.Go, TaskState.Arrived, TaskState.Reply, TaskState.Delay, TaskState.Continue],
        key);
    }
  }

  /**
   * 获取任务总数
   * @returns {Promise<number>}
   */
  public getTaskCount(): Promise<number> {
    if (this.globalService.isChrome) {
      return Promise.resolve(0);
    } else {
      return this.dbService.getTaskCount(this.globalService.userId);
    }
  }

  /**
   * 获取任务详情
   * @param taskId
   * @returns {Promise<TaskDetail>}
   */
  public getTaskDetail(taskId: string): Promise<TaskDetail> {
    if (this.globalService.isChrome) {
      return this.downloadService.getTaskDetail(taskId);
    } else {
      return this.dbService.getTaskDetail(taskId)
        .then(detail => {
          return detail && detail.taskId
            ? Promise.resolve(detail)
            : this.downloadService.getTaskDetail(taskId)
              .then(detail => this.dbService.saveTaskDetail(detail))
              .then(result => this.dbService.getTaskDetail(taskId));
        });
    }
  }

  /**
   * 获取未派工任务
   * @param since
   * @param count
   * @returns {Promise<Array<SearchTask>>}
   */
  public getUnDispatchedTasks(since: number, count: number): Promise<Array<SearchTask>> {
    return this.downloadService.getUnDispatchedTasks(this.globalService.userId, since, count);
  }

  /**
   * 获取已派工任务
   * @param since
   * @param count
   * @param minutes
   * @returns {Promise<Array<SearchTask>>}
   */
  public getDispatchedTasks(since: number, count: number, minutes: number): Promise<Array<SearchTask>> {
    return this.downloadService.getDispatchedTasks(this.globalService.userId, since, count, minutes);
  }

  /**
   * 接收
   * @param acceptInfo
   * @param task
   * @returns {Promise<boolean>}
   */
  public accept(acceptInfo: AcceptInfo, task: Task): Promise<boolean> {
    if (this.globalService.isChrome) {
      return this.uploadService.accept(acceptInfo);
    } else {
      return this.dbService.getHistories(acceptInfo.userId, acceptInfo.taskId)
        .then(histories => {
          if (this.isExistingNotUploadedHistory(histories)) { // only save to local db
            return this.dbService.saveHistory({
              userId: acceptInfo.userId,
              taskId: acceptInfo.taskId,
              state: TaskState.Accept,
              task,
              reply: acceptInfo,
              uploadedFlag: this.globalService.uploadedFlagForLocal
            }).then(result => this.dbService.saveTask(task));
          } else { // send to the server and save to local db
            return this.uploadService.accept(acceptInfo)
              .catch(error => console.error(error))
              .then(result => this.dbService.saveHistory({
                userId: acceptInfo.userId,
                taskId: acceptInfo.taskId,
                state: TaskState.Accept,
                task,
                reply: acceptInfo,
                uploadedFlag: result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal
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
   * @returns {Promise<boolean>}
   */
  public go(goInfo: GoInfo, task: Task): Promise<boolean> {
    if (this.globalService.isChrome) {
      return this.uploadService.go(goInfo);
    } else {
      return this.dbService.getHistories(goInfo.userId, goInfo.taskId)
        .then(histories => {
          if (this.isExistingNotUploadedHistory(histories)) { // only save to local db
            return this.dbService.saveHistory({
              userId: goInfo.userId,
              taskId: goInfo.taskId,
              state: TaskState.Go,
              task,
              reply: goInfo,
              uploadedFlag: this.globalService.uploadedFlagForLocal
            }).then(result => this.dbService.saveTask(task));
          } else { // send to the server and save to local db
            return this.uploadService.go(goInfo)
              .catch(error => console.error(error))
              .then((result) => this.dbService.saveHistory({
                userId: goInfo.userId,
                taskId: goInfo.taskId,
                state: TaskState.Go,
                task,
                reply: goInfo,
                uploadedFlag: result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal
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
   * @returns {Promise<boolean>}
   */
  public arrive(arriveInfo: ArriveInfo, task: Task): Promise<boolean> {
    if (this.globalService.isChrome) {
      return this.uploadService.arrive(arriveInfo);
    } else {
      return this.dbService.getHistories(arriveInfo.userId, arriveInfo.taskId)
        .then(histories => {
          if (this.isExistingNotUploadedHistory(histories)) { // only save to local db
            return this.dbService.saveHistory({
              userId: arriveInfo.userId,
              taskId: arriveInfo.taskId,
              state: TaskState.Arrived,
              task,
              reply: arriveInfo,
              uploadedFlag: this.globalService.uploadedFlagForLocal
            }).then(result => this.dbService.saveTask(task));
          } else { // send to the server and save to local db
            return this.uploadService.arrive(arriveInfo)
              .catch(error => console.error(error))
              .then((result) => this.dbService.saveHistory({
                userId: arriveInfo.userId,
                taskId: arriveInfo.taskId,
                state: TaskState.Arrived,
                task,
                reply: arriveInfo,
                uploadedFlag: result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal
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
   * @returns {any}
   */
  public reply(replyInfo: ReplyInfo, task: Task, taskDetail: TaskDetail, mediaNames: Array<string>): Promise<boolean> {
    if (this.globalService.isChrome) {
      return this.uploadService.reply(replyInfo);
    } else {
      return this.dbService.getHistories(replyInfo.userId, replyInfo.taskId)
        .then(histories => {
          if (this.isExistingNotUploadedHistory(histories)) { // only save to local db
            return this.dbService.saveHistory({
              userId: replyInfo.userId,
              taskId: replyInfo.taskId,
              state: TaskState.Reply,
              task,
              reply: replyInfo,
              uploadedFlag: this.globalService.uploadedFlagForLocal
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
                uploadedFlag: result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal,
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
   * @returns {Promise<boolean>}
   */
  public reject(rejectInfo: RejectInfo, task: Task) {
    if (this.globalService.isChrome) {
      return this.uploadService.reject(rejectInfo);
    } else {
      return this.dbService.getHistories(rejectInfo.userId, rejectInfo.taskId)
        .then(histories => {
          if (this.isExistingNotUploadedHistory(histories)) { // only save to local db
            return this.dbService.saveHistory({
              userId: rejectInfo.userId,
              taskId: rejectInfo.taskId,
              state: TaskState.Reject,
              task,
              reply: rejectInfo,
              uploadedFlag: this.globalService.uploadedFlagForLocal
            }).then(result => this.dbService.saveTask(task));
          } else { // send to the server and save to local db
            return this.uploadService.reject(rejectInfo)
              .catch(error => console.error(error))
              .then((result) => this.dbService.saveHistory({
                userId: rejectInfo.userId,
                taskId: rejectInfo.taskId,
                state: TaskState.Reject,
                task,
                reply: rejectInfo,
                uploadedFlag: result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal
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
   * @returns {Promise<boolean>}
   */
  public delay(delayInfo: DelayInfo, task: Task): Promise<boolean> {
    if (this.globalService.isChrome) {
      return this.uploadService.delay(delayInfo);
    } else {
      return this.dbService.getHistories(delayInfo.userId, delayInfo.taskId)
        .then(histories => {
          if (this.isExistingNotUploadedHistory(histories)) { // only save to local db
            return this.dbService.saveHistory({
              userId: delayInfo.userId,
              taskId: delayInfo.taskId,
              state: TaskState.Delay,
              task,
              reply: delayInfo,
              uploadedFlag: this.globalService.uploadedFlagForLocal
            }).then(result => this.dbService.saveTask(task));
          } else { // send to the server and save to local db
            return this.uploadService.delay(delayInfo)
              .catch(error => console.error(error))
              .then((result) => this.dbService.saveHistory({
                userId: delayInfo.userId,
                taskId: delayInfo.taskId,
                state: TaskState.Delay,
                task,
                reply: delayInfo,
                uploadedFlag: result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal
              }))
              .then(result => this.dbService.saveTask(task));
          }
        });
    }
  }

  /**
   *
   * @param cancelInfo
   * @param task
   * @returns {any}
   */
  public cancel(cancelInfo: CancelInfo, task: Task): Promise<boolean> {
    if (this.globalService.isChrome) {
      return this.uploadService.cancel(cancelInfo);
    } else {
      return this.dbService.getHistories(cancelInfo.userId, cancelInfo.taskId)
        .then(histories => {
          if (this.isExistingNotUploadedHistory(histories)) { // only save to local db
            return this.dbService.saveHistory({
              userId: cancelInfo.userId,
              taskId: cancelInfo.taskId,
              state: TaskState.Cancel,
              task,
              reply: cancelInfo,
              uploadedFlag: this.globalService.uploadedFlagForLocal
            }).then(result => this.dbService.saveTask(task));
          } else { // send to the server and save to local db
            return this.uploadService.cancel(cancelInfo)
              .catch(error => console.error(error))
              .then((result) => this.dbService.saveHistory({
                userId: cancelInfo.userId,
                taskId: cancelInfo.taskId,
                state: TaskState.Cancel,
                task,
                reply: cancelInfo,
                uploadedFlag: result ? this.globalService.uploadedFlagForUploaded : this.globalService.uploadedFlagForLocal
              }))
              .then(result => this.dbService.saveTask(task));
          }
        });
    }
  }

  /**
   * 站点任务接单
   * @param acceptExInfo
   * @returns {Promise<boolean>}
   */
  public acceptEx(acceptExInfo: AcceptExInfo): Promise<boolean> {
    return this.uploadService.acceptEx(acceptExInfo);
  }

  /**
   * 站点派单
   * @param dispatchInfo
   * @returns {Promise<boolean>}
   */
  public dispatch(dispatchInfo: DispatchInfo): Promise<boolean> {
    return this.uploadService.dispatch(dispatchInfo);
  }

  /**
   * 站点销单
   * @param cancelExInfo
   * @returns {Promise<boolean>}
   */
  public cancelEx(cancelExInfo: CancelExInfo): Promise<boolean> {
    return this.uploadService.cancelEx(cancelExInfo);
  }

  /**
   * 下载词语信息
   * @returns {Promise<Array<Word>>}
   */
  public downloadWords(): Promise<boolean> {
    return this.downloadService.getAllWords('all')
      .then(words => this.dbService.saveWords(words));
  }

  /**
   * 获取处理类别
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getOptTypes(): Promise<Array<Word>> {
    const group: string = 'CL_LEIBIE';
    const rootName: string = '处理类别';
    return (this.optTypes && this.optTypes.length > 0)
      ? Promise.resolve(this.optTypes)
      : this.dbService.getWords(group)
        .catch(error => {
          console.error(error);
          return this.downloadService.getAllWords(group);
        })
        .then(words => {
          return this.optTypes = this.tree2list(words, rootName);
        });
  }

  /**
   * 获取处理内容
   * @param parentId
   * @returns {Promise<Array<Word>>}
   */
  public getOptContents(parentId: number): Promise<Array<Word>> {
    const group: string = 'CL_NEIRONG';
    return (this.optContents && this.optContents.length > 0 && this.optContents[0].wParentId === parentId)
      ? Promise.resolve(this.optContents)
      : this.dbService.getWords(group)
        .catch(error => {
          console.error(error);
          return this.downloadService.getAllWords(group);
        })
        .then(words => {
          let newWords: Array<Word> = [];
          for (let word of words) {
            if (word.wParentId === parentId) {
              newWords.push(word);
            }
          }
          return this.optContents = newWords;
        });
  }

  /**
   * 获取发生原因
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getOptReasons(): Promise<Array<Word>> {
    const group: string = 'FS_YUANYIN';
    const rootName: string = '发生原因';
    return (this.optReasons && this.optReasons.length > 0)
      ? Promise.resolve(this.optReasons)
      : this.dbService.getWords(group)
        .catch(error => {
          console.error(error);
          return this.downloadService.getAllWords(group);
        })
        .then(words => {
          return this.optReasons = this.tree2list(words, rootName);
        });
  }

  /**
   * 获取解决措施
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getOptSolutions(): Promise<Array<Word>> {
    const group: string = 'JJ_CUOSHI';
    const rootName: string = '解决措施';
    return (this.optSolutions && this.optSolutions.length > 0)
      ? Promise.resolve(this.optSolutions)
      : this.dbService.getWords(group)
        .catch(error => {
          console.error(error);
          return this.downloadService.getAllWords(group);
        })
        .then(words => {
          return this.optSolutions = this.tree2list(words, rootName);
        });
  }

  /**
   * 获取处理结果
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getOptResults(): Promise<Array<Word>> {
    const group: string = 'CL_JIEGUO';
    const rootName: string = '处理结果';
    return (this.optResults && this.optResults.length > 0)
      ? Promise.resolve(this.optResults)
      : this.dbService.getWords(group)
        .catch(error => {
          console.error(error);
          return this.downloadService.getAllWords(group);
        })
        .then(words => {
          return this.optResults = this.tree2list(words, rootName);
        });
  }

  /**
   * 获取反映类别（查询界面）
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getReflectTypes(): Promise<Array<Word>> {
    const group: string = 'FY_LEIBIE';
    const rootName: string = '反映类别';
    return (this.reflectTypes && this.reflectTypes.length > 0)
      ? Promise.resolve(this.reflectTypes)
      : this.dbService.getWords(group)
        .catch(error => {
          console.error(error);
          return this.downloadService.getAllWords(group);
        })
        .then(words => {
          return this.reflectTypes = this.tree2list(words, rootName);
        });
  }

  /**
   * 获取反映内容
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getReflectContents(): Promise<Array<Word>> {
    const group: string = 'FY_NEIRONG';
    const rootName: string = '反映内容';
    return (this.reflectContents && this.reflectContents.length > 0)
      ? Promise.resolve(this.reflectContents)
      : this.dbService.getWords(group)
        .catch(error => {
          console.error(error);
          return this.downloadService.getAllWords(group);
        })
        .then(words => {
          return this.reflectContents = this.tree2list(words, rootName);
        });
  }

  /**
   * 查询任务
   */
  public searchTask(request: SearchTaskRequest): Promise<Array<SearchTask>> {
    return this.downloadService.getSearchTasks(this.globalService.userId, request);
  }

  /**
   * 查询工单数量
   */
  public searchTaskCount(request: SearchTaskRequest): Promise<SearchTaskCount> {
    return this.downloadService.getSearchTaskCount(this.globalService.userId, request);
  }

  /**
   * 查询任务详情
   * @param taskId 任务编号
   */
  public searchTaskDetails(taskId: string): Promise<SearchTaskDetails> {
    return this.downloadService.getSearchTaskDetails(taskId);
  }

  /**
   * 获取公告信息
   * @returns {Promise<Array<News>>}
   */
  public getNews(): Promise<Array<News>> {
    return this.downloadService.getNews();
  }

  /**
   * 获取用户信息
   * @param user
   * @returns {Promise<UserResult>}
   */
  public doLogin(user: UserInfo): Promise<UserResult> {
    return this.downloadService.doLogin(user);
  }

  /**
   * 获取管理员用户信息
   * @returns {Promise<UserRole>}
   */
  public getManageInfo() {
    return this.downloadService.getManagerUserInfo(this.globalService.userId);
  }

  /**
   * 获取外勤用户信息
   * @returns {Promise<UserWorkInfo>}
   */
  public getWorkInfo() {
    return this.downloadService.getWorkerUserInfo(this.globalService.userId);
  }

  /**
   * 检查app更新
   * @param version
   * @returns {Promise<VersionInfo>}
   */
  public checkAppVersion(version: number) {
    return this.downloadService.checkAppVersion(version);
  }

  /**
   * 检查数据包更新
   * @param version
   * @returns {Promise<VersionInfo>}
   */
  public checkDataVersion(version: number) {
    return this.downloadService.checkDataVersion(version);
  }

  /**
   * 获取施工人员
   * @param userId
   * @returns {Promise<Array<Personnel>>}
   */
  public getPersonnels(userId: number): Promise<Array<Personnel>> {
    return (this.personnels && this.personnels.length > 0)
      ? Promise.resolve(this.personnels)
      : this.downloadService.getPersonnels(userId)
        .then(personnels => {
          return this.personnels = personnels;
        });
  }

  /**
   *
   * @param taskId
   * @returns {Promise<TResult>}
   */
  public takePicture(taskId: string): Promise<any> {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    return this.camera.getPicture(options)
      .then((imageUri) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        //let base64Image = 'data:image/jpeg;base64,' + imageData;
        console.log(imageUri);
        //const startName: string = 'file://';
        let path: string = imageUri.toString();
        // if (path.indexOf(startName) === 0 && startName.length < path.length) {
        //   path = path.substring(startName.length);
        // }
        return Promise.resolve(path);
      }, (err) => {
        // Handle error
        console.error(err);
        return Promise.reject(err);
      })
      .then(path => this.fileService.movePicture(path))
      .then(fileName => this.dbService.saveMedia({
        userId: this.globalService.userId,
        taskId,
        fileType: MediaType.Picture,
        fileName,
        uploadedFlag: this.globalService.uploadedFlagForLocal
      })
        .then(result => result
          ? Promise.resolve({filePath: `${this.fileService.getImagesDir()}/${fileName}`, fileName})
          : Promise.reject('failure to save the db')));
  }

  /**
   *
   * @param taskId
   * @returns {Promise<T>}
   */
  public recordAudio(taskId: string): Promise<any> {
    const error: string = 'failure to record audio';
    return new Promise((resolve, reject) => {
      let file: MediaObject;
      try {
        // Create a Media instance.  Expects path to file or url as argument
        // We can optionally pass a second argument to track the status of the media
        let name: string = `${this.fileService.getSoundsDir()}/${new Date().getTime()}.mp3`;
        file = this.media.create(name);
        if (!file) {
          return reject(error);
        }

        file.startRecord();

        setTimeout(function () {
          file.stopRecord();
          file.release();
        }, 10000);
      }
      catch (err) {
        console.error(err);
        if (file) {
          file.release();
        }
      }
    });
  }

  /**
   * 多级索引转一级索引
   * @param words
   * @param rootName
   * @returns {any}
   */
  private tree2list(words: Array<Word>, rootName: string): Array<Word> {
    function find(srcWords: Array<Word>, destWords: Array<Word>, srcWord: Word): void {
      let found: boolean = false;
      for (let word of srcWords) {
        if (word.wParentId === srcWord.wid) {
          find(srcWords, destWords, word);
          found = true;
        }
      }

      if (!found) {
        destWords.push(srcWord);
      }
    }

    let rootWord: Word;
    for (let word of words) {
      if (word.wName === rootName && word.wParentId === 0) {
        rootWord = word;
        break;
      }
    }

    if (!rootWord) {
      return [];
    }

    let newWords: Array<Word> = [];
    find(words, newWords, rootWord);
    return newWords;
  }

  /**
   * 订阅事件
   */
  private subscribeEvent() {
    // download all tasks
    this.events.subscribe(this.downloadTaskEvent, (since: number, count: number) => {
      if (this.globalService.isChrome) {
        this.isDownloadTaskAndDetailFinished = true;
        this.events.publish(this.globalService.myWorkDownloadFinishEvent);
      } else {
        this.downloadService.getTasks(this.globalService.userId, since, count)
          .then(tasks => this.dbService.saveTasks(this.globalService.userId, tasks))
          .then(result => {
            this.events.publish(this.downloadTaskEvent,
              this.globalService.taskSinceDefault + this.globalService.taskCountDefault100,
              this.globalService.taskCountDefault100);
          })
          .catch(error => {
            console.error(error);
            this.dbService.getNoDetailTaskIds(this.globalService.userId)
              .then(taskIds => {
                this.events.publish(this.downloadTaskDetailEvent, taskIds);
              })
              .catch(error => {
                console.error(error);
                this.isDownloadTaskAndDetailFinished = true;
                this.events.publish(this.globalService.myWorkDownloadFinishEvent);
              });
          });
      }
    });

    // download task detail
    this.events.subscribe(this.downloadTaskDetailEvent, (taskIds: Array<string>) => {
      if (taskIds && taskIds.length > 0) {
        let taskId: string = taskIds.shift();
        if (taskId) {
          this.downloadService.getTaskDetail(taskId)
            .then(detail => this.dbService.saveTaskDetail(detail))
            .catch(error => console.error(error))
            .then((result) => this.events.publish(this.downloadTaskDetailEvent, taskIds));
          return;
        }
      }

      this.isDownloadTaskAndDetailFinished = true;
      this.events.publish(this.globalService.myWorkDownloadFinishEvent);
    });

    // upload histories
    this.events.subscribe(this.uploadHistoryEvent, (taskIds: Array<string>) => {

    });

    // upload media
    this.events.subscribe(this.uploadMediaEvent, (taskIds: Array<string>) => {

    });
  }

  /**
   * 检查是否存在未上传的历史记录
   * @param histories
   * @returns {boolean}
   */
  private isExistingNotUploadedHistory(histories: Array<History>): boolean {
    if (histories && histories.length > 0) {
      for (let history of histories) {
        if (history.uploadedFlag != this.globalService.uploadedFlagForUploaded) {
          return true;
        }
      }
    }
    return false;
  }
}
