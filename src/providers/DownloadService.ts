import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {ConfigService} from "./ConfigService";
import {Task} from "../model/Task";
import {GlobalService} from "./GlobalService";
import {BaseService} from "./BaseService";
import {TaskDetail} from "../model/TaskDetail";
import {Word} from "../model/Word";
import {SearchTask} from "../model/SearchTask";
import {SearchTaskDetails} from "../model/SearchTaskDetails";
import {SearchTaskCount} from "../model/SearchTaskCount";

@Injectable()
export class DownloadService extends BaseService {

  constructor(private http: Http,
              private configService: ConfigService,
              private globalService: GlobalService) {
    super();
  }

  /**
   * 分页下载任务
   * @param userId
   * @param since
   * @param count
   * @returns {Promise<T>}
   */
  public getTasks(userId: number, since: number, count: number): Promise<Array<Task>> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = `${data}wap/v1/mobile/task/user/${userId}/task?taskType=all&completed=0&count=${count}&since=${since}`;

          return this.http.get(url, this.getOptions())
            .toPromise()
            .then(data => {
              let body = data.json();
              if (body.Code === this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data instanceof Array) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "failure to get tasks");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }

  /**
   * 获取任务详情
   * @param taskId
   * @returns {Promise<T>}
   */
  public getTaskDetail(taskId: string): Promise<TaskDetail> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = `${data}wap/v1/mobile/hotline/task/${taskId}/detail`;

          return this.http.get(url, this.getOptions())
            .toPromise()
            .then(data => {
              let body = data.json();
              if (body.Code === this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data as TaskDetail) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "failure to get task detail");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }

  /**
   * 获取词语信息
   * @param group
   * @returns {Promise<T>}
   */
  public getAllWords(group: string): Promise<Array<Word>> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = `${data}wap/v1/mobile/resource/wordNew?group=${group}`;

          return this.http.get(url, this.getOptions())
            .toPromise()
            .then(data => {
              let body = data.json();
              if (body.Code === this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data instanceof Array) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "failure to get words");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }

  /**
   * 查询工单
   * @param address
   * @param phone
   * @param serialNo
   * @param taskNo
   * @param taskState
   * @param reportType
   * @param reportPerson
   * @param sendTime
   * @returns {Promise<T>}
   */
  public getSearchTasks(userId: number, address: string, phone: string, serialNo: string, taskNo: string, taskState: number,
                        reportType: number, reportPerson: string, sendTime: number): Promise<Array<SearchTask>> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = data + "wap/v1/mobile/tasksearch/" + userId + "/tasks?happenedAddress=" + address + "&contactPhone=" + phone +
            "&serialNo=" + serialNo + "&taskNo=" + taskNo + "&taskState=" + taskState + "&reportType=" + reportType +
            "&reportPerson=" + reportPerson + "&sendTime=" + sendTime + "&count=10&since=0";
          return this.http.get(url, this.getOptions())
            .toPromise()
            .then(data => {
              console.log("getSearchTasks:" + data)
              let body = data.json();
              if (body.Code == this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data as Array<SearchTask>) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "fail to search task!");
              }
            })
            .catch(this.handleError)
        })
        .catch(error => reject(error));
    })
  }

  /**
   * 查询工单数量
   * @param address
   * @param phone
   * @param serialNo
   * @param taskNo
   * @param taskState
   * @param reportType
   * @param reportPerson
   * @param sendTime
   * @returns {Promise<T>}
   */
  public getSearchTaskCount(userId: number, address: string, phone: string, serialNo: string, taskNo: string, taskState: number,
                            reportType: number, reportPerson: string, sendTime: number): Promise<SearchTaskCount> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = data + "wap/v1/mobile/tasksearch/" + userId + "/tasksCount?happenedAddress=" + address + "&contactPhone=" + phone +
            "&serialNo=" + serialNo + "&taskNo=" + taskNo + "&taskState=" + taskState + "&reportType=" + reportType +
            "&reportPerson=" + reportPerson + "&sendTime=" + sendTime + "&count=10&since=0";
          return this.http.get(url, this.getOptions())
            .toPromise()
            .then(data => {
              console.log("getSearchTaskCounts:" + data)
              let body = data.json();
              if (body.Code == this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data as SearchTaskCount) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "fail to search task count!");
              }
            })
            .catch(this.handleError)
        })
        .catch(error => reject(error));
    })
  }

  /**
   * 查询某条工单详情
   * @param taskId 任务编号
   * @returns {Promise<T>}
   */
  public getSearchTaskDetails(taskId: string): Promise<SearchTaskDetails> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = data + "wap/v1/mobile/hotline/task/" + taskId + "/detail";
          return this.http.get(url, this.getOptions())
            .toPromise()
            .then(data => {
              console.log("getSearchTaskDetails" + data)
              let body = data.json();
              if (body.Code == this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data as SearchTaskDetails) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "fail to search task details!");
              }
            })
            .catch(this.handleError)
        })
        .catch(error => reject(error));
    })
  }

  public getReflectType(){

  }
}
