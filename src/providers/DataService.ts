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
import {Word} from "../model/Word";
import {SearchTask} from "../model/SearchTask";
import {SearchTaskDetails} from "../model/SearchTaskDetails";
import {SearchTaskCount} from "../model/SearchTaskCount";
import {News} from "../model/News";
import {SearchTaskRequest} from "../model/SearchTaskRequest";
import {UserInfo} from "../model/UserInfo";
import {UserResult} from "../model/UserResult";

@Injectable()
export class DataService {
  private downloadTaskEvent: string = 'task:download';
  private optType: Array<Word>;
  private optContent: Array<Word>;
  private optReason: Array<Word>;
  private optSolution: Array<Word>;
  private optResult: Array<Word>;

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
   * 获取词语信息
   * @returns {Promise<Word>}
   */
  public getAllWords(): Promise<Array<Word>> {
    return this.downloadService.getAllWords('all');
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
    //return this.uploadService.reply(replyInfo);
    return Promise.resolve(true);
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
   * 获取处理类别
   * @returns {Promise<T>}
   */
  public getOptType(): Promise<Array<Word>> {
    return (this.optType && this.optType.length > 0)
      ? Promise.resolve(this.optType)
      : this.downloadService.getAllWords('CL_LEIBIE')
        .then(words => {
          return this.optType = this.tree2list(words, "处理类别");
        });
  }

  /**
   * 获取处理内容
   * @param parentId
   * @returns {Promise<TResult>}
   */
  public getOptContent(parentId: number): Promise<Array<Word>> {
    return (this.optContent && this.optContent.length > 0
      ? Promise.resolve(this.optContent)
      : this.downloadService.getAllWords('CL_NEIRONG'))
      .then(words => {
        this.optContent = words;
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
  public getOptReason(): Promise<Array<Word>> {
    return (this.optReason && this.optReason.length > 0)
      ? Promise.resolve(this.optReason)
      : this.downloadService.getAllWords('FS_YUANYIN')
        .then(words => {
          return this.optReason = this.tree2list(words, "发生原因");
        });
  }

  /**
   * 获取解决措施
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getOptSolution(): Promise<Array<Word>> {
    return (this.optSolution && this.optSolution.length > 0)
      ? Promise.resolve(this.optSolution)
      : this.downloadService.getAllWords('JJ_CUOSHI')
        .then(words => {
          return this.optSolution = this.tree2list(words, "解决措施");
        });
  }

  /**
   * 获取处理结果
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getOptResult(): Promise<Array<Word>> {
    return (this.optResult && this.optResult.length > 0)
      ? Promise.resolve(this.optResult)
      : this.downloadService.getAllWords('CL_JIEGUO')
        .then(words => {
          return this.optResult = this.tree2list(words, "处理结果");
        });
  }

  /**
   * 获取反映类别（查询界面）
   * @returns {Promise<T>}
   */
  public getReflectTypes(): Promise<Array<Word>> {
    return this.downloadService.getAllWords('FY_LEIBIE')
      .then(words => {
        return this.tree2list(words, "反映类别");
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
  public getWorkInfo(){
    return this.downloadService.getWorkerUserInfo(this.globalService.userId);
  }
}
