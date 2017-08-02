import {Injectable} from '@angular/core';
import {DownloadService} from "./DownloadService";
import {TaskState, Task} from "../model/Task";
import {GlobalService} from "./GlobalService";
import {AcceptExInfo} from "../model/AcceptInfo";
import {UploadService} from "./UploadService";
import {CancelExInfo} from "../model/CancelInfo";
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
import {MediaService} from "./MediaService";
import {MediaType} from "../model/Media";
import {SyncService, MsgType} from "./SyncService";
import {Events} from "ionic-angular";

@Injectable()
export class DataService extends SyncService {
  private optTypes: Array<Word>;
  private optContents: Array<Word>;
  private optReasons: Array<Word>;
  private optSolutions: Array<Word>;
  private optResults: Array<Word>;
  private reflectTypes: Array<Word>;
  private reflectContents: Array<Word>;
  private personnels: Array<Personnel>;

  constructor(downloadService: DownloadService,
              uploadService: UploadService,
              globalService: GlobalService,
              dbService: DbService,
              mediaService: MediaService,
              events: Events) {
    super(downloadService, uploadService, globalService, dbService, mediaService, events);
  }

  /**
   * 初始化
   * @returns {Promise<boolean>}
   */
  public init(): Promise<boolean> {
    super.init();
    return this.dbService.init();
  }

  /**
   * 销毁
   */
  public destroy(): void {
    super.destroy();
    this.dbService.destroy();
  }

  /**
   * 下载所有任务和详情
   */
  public downloadTasksAndDetails(): void {
    super.sendMsg({msgType: MsgType.DownloadTasksAndDetails});
  }

  /**
   * 上传历史工单和多媒体信息
   */
  public uploadHistoriesAndMedias(): void {
    super.sendMsg({msgType: MsgType.UploadHistoriesAndMedias});
  }

  /**
   * 上传一条任务的多媒体信息
   * @param taskId
   */
  public uploadMediasOfOneTask(taskId: string): void {
    super.sendMsg({
      msgType: MsgType.UploadMediasOfHistory,
      taskId
    });
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
   * 拍照
   * @param taskId
   * @returns {Promise<any>}
   */
  public takePicture(taskId: string): Promise<any> {
    return this.mediaService.takePicture(taskId);
  }

  /**
   * 开始录音
   * @returns {Promise<any>}
   */
  public startRecordAudio(): Promise<any> {
    return this.mediaService.startRecordAudio();
  }

  /**
   * 结束录音
   * @param file
   * @returns {Promise<boolean>}
   */
  public endRecordAudio(file: any): Promise<boolean> {
    return this.mediaService.endRecordAudio(file);
  }

  /**
   * 保存录音到数据库
   * @param taskId
   * @param fileName
   * @returns {Promise<boolean>}
   */
  public saveAudio(taskId: string, fileName: string): Promise<boolean> {
    if (taskId && fileName) {
      return this.dbService.saveMedia({
        userId: this.globalService.userId,
        taskId,
        fileType: MediaType.Audio,
        fileName,
        uploadedFlag: this.globalService.uploadedFlagForLocal
      });
    } else {
      return Promise.reject('taskId or fileName is error');
    }
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
}
