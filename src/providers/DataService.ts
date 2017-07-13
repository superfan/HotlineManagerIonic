import {Injectable} from '@angular/core';
import {DownloadService} from "./DownloadService";
import {Events} from "ionic-angular";
import {Task} from "../model/Task";
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

@Injectable()
export class DataService {
  private downloadTaskEvent: string = 'task:download';
  private optTypes: Array<Word>;
  private optContents: Array<Word>;
  private optReasons: Array<Word>;
  private optSolutions: Array<Word>;
  private optResults: Array<Word>;
  private reflectTypes: Array<Word>;
  private reflectContents: Array<Word>;
  private personnels: Array<Personnel>;

  constructor(private downloadService: DownloadService,
              private uploadService: UploadService,
              private globalService: GlobalService,
              private events: Events) {
    events.subscribe(this.downloadTaskEvent, (since: number, count: number) => {

    })
  }

  /**
   * 下载任务
   * @returns {Promise<boolean>}
   */
  public downloadTasks(): Promise<boolean> {
    //return this.globalService.isChrome ? Promise.resolve(true) : Promise.resolve(true);
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 2000, true);
    });
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
   * 获取任务总数
   * @returns {Promise<number>}
   */
  public getTaskCount(): Promise<number> {
    return Promise.resolve(5);
  }

  /**
   * 同步任务
   * @returns {Promise<boolean>}
   */
  // public syncTasks(since: number, count: number): Promise<Array<Task>> {
  //   return this.uploadTasks()
  //     .then(result => {
  //       return this.getTasks(since, count);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       return this.getTasks(since, count);
  //     })
  // }

  /**
   * 获取任务详情
   * @param taskId
   * @returns {Promise<TaskDetail>}
   */
  public getTaskDetail(taskId: string): Promise<TaskDetail> {
    return this.downloadService.getTaskDetail(taskId);
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
   * 接受
   * @param acceptInfo
   * @returns {Promise<T>}
   */
  public accept(acceptInfo: AcceptInfo): Promise<boolean> {
    //acceptInfo.userId = this.globalService.userId;
    return this.uploadService.accept(acceptInfo);
  }

  /**
   * 出发
   * @param goInfo
   * @returns {Promise<boolean>}
   */
  public go(goInfo: GoInfo): Promise<boolean> {
    //goInfo.userId = this.globalService.userId;
    return this.uploadService.go(goInfo);
  }

  /**
   * 到场
   * @param arriveInfo
   * @returns {Promise<boolean>}
   */
  public arrive(arriveInfo: ArriveInfo): Promise<boolean> {
    //arriveInfo.userId = this.globalService.userId;
    return this.uploadService.arrive(arriveInfo);
  }

  /**
   * 回复
   * @param replyInfo
   * @returns {Promise<boolean>}
   */
  public reply(replyInfo: ReplyInfo): Promise<boolean> {
    //replyInfo.userId = this.globalService.userId;
    return this.uploadService.reply(replyInfo);
  }

  /**
   * 退单
   * @param rejectInfo
   * @returns {Promise<boolean>}
   */
  public reject(rejectInfo: RejectInfo) {
    //rejectInfo.userId = this.globalService.userId;
    return this.uploadService.reject(rejectInfo);
  }

  /**
   * 延期
   * @param delayInfo
   * @returns {Promise<boolean>}
   */
  public delay(delayInfo: DelayInfo): Promise<boolean> {
    //delayInfo.userId = this.globalService.userId;
    return this.uploadService.delay(delayInfo);
  }

  /**
   * 销单
   * @param cancelInfo
   * @returns {Promise<T>}
   */
  public cancel(cancelInfo: CancelInfo): Promise<boolean> {
    //cancelInfo.userId = this.globalService.userId;
    return this.uploadService.cancel(cancelInfo);
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
   * 获取词语信息
   * @returns {Promise<Word>}
   */
  public getAllWords(): Promise<Array<Word>> {
    return this.downloadService.getAllWords('all');
  }

  /**
   * 获取处理类别
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getOptTypes(): Promise<Array<Word>> {
    return (this.optTypes && this.optTypes.length > 0)
      ? Promise.resolve(this.optTypes)
      : this.downloadService.getAllWords('CL_LEIBIE')
        .then(words => {
          return this.optTypes = this.tree2list(words, "处理类别");
        });
  }

  /**
   * 获取处理内容
   * @param parentId
   * @returns {Promise<Array<Word>>}
   */
  public getOptContents(parentId: number): Promise<Array<Word>> {
    return (this.optContents && this.optContents.length > 0
      ? Promise.resolve(this.optContents)
      : this.downloadService.getAllWords('CL_NEIRONG'))
      .then(words => {
        this.optContents = words;
        let newWords: Array<Word> = [];
        for (let word of words) {
          if (word.wParentId === parentId) {
            newWords.push(word);
          }
        }
        return newWords;
      });
  }

  /**
   * 获取发生原因
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getOptReasons(): Promise<Array<Word>> {
    return (this.optReasons && this.optReasons.length > 0)
      ? Promise.resolve(this.optReasons)
      : this.downloadService.getAllWords('FS_YUANYIN')
        .then(words => {
          return this.optReasons = this.tree2list(words, "发生原因");
        });
  }

  /**
   * 获取解决措施
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getOptSolutions(): Promise<Array<Word>> {
    return (this.optSolutions && this.optSolutions.length > 0)
      ? Promise.resolve(this.optSolutions)
      : this.downloadService.getAllWords('JJ_CUOSHI')
        .then(words => {
          return this.optSolutions = this.tree2list(words, "解决措施");
        });
  }

  /**
   * 获取处理结果
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getOptResults(): Promise<Array<Word>> {
    return (this.optResults && this.optResults.length > 0)
      ? Promise.resolve(this.optResults)
      : this.downloadService.getAllWords('CL_JIEGUO')
        .then(words => {
          return this.optResults = this.tree2list(words, "处理结果");
        });
  }

  /**
   * 获取反映类别（查询界面）
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getReflectTypes(): Promise<Array<Word>> {
    return (this.reflectTypes && this.reflectTypes.length > 0)
      ? Promise.resolve(this.reflectTypes)
      : this.downloadService.getAllWords('FY_LEIBIE')
        .then(words => {
          return this.reflectTypes = this.tree2list(words, "反映类别");
        });
  }

  /**
   * 获取反映内容
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getReflectContents(): Promise<Array<Word>> {
    return (this.reflectContents && this.reflectContents.length > 0)
      ? Promise.resolve(this.reflectContents)
      : this.downloadService.getAllWords('FY_NEIRONG')
        .then(words => {
          return this.reflectContents = this.tree2list(words, "反映内容");
        });
  }

  /**
   * 查询任务
   */
  public searchTask(request:SearchTaskRequest): Promise<Array<SearchTask>> {
    return this.downloadService.getSearchTasks(this.globalService.userId, request);
  }

  /**
   * 查询工单数量
   */
  public searchTaskCount(request:SearchTaskRequest): Promise<SearchTaskCount> {
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
  public getNews():Promise<Array<News>>{
    return this.downloadService.getNews();
  }

  /**
   * 获取用户信息
   * @param user
   * @returns {Promise<UserResult>}
   */
  public getUserInfo(user:UserInfo):Promise<UserResult>{
   return this.downloadService.getUserInfo(user);
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

  private uploadTasks(): Promise<boolean> {
    return Promise.resolve(true);
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
