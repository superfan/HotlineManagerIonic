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
import {News} from "../model/News";
import {SearchTaskRequest} from "../model/SearchTaskRequest";
import {UserInfo} from "../model/UserInfo";
import {UserResult} from "../model/UserResult";
import {Personnel} from "../model/Personnel";
import {UserWorkInfo} from "../model/UserWorkInfo";
import {UserManageInfo} from "../model/UserManageInfo";
import {VersionInfo} from "../model/VersionInfo";

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
   * 获取未派工任务
   * @param userId
   * @param since
   * @param count
   * @returns {Promise<T>}
   */
  public getUnDispatchedTasks(userId: number, since: number, count: number): Promise<Array<SearchTask>> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = `${data}wap/v1/mobile/tasksearch/${userId}/unDispatchedTasks?count=${count}&since=${since}`;
          return this.http.get(url, this.getOptions())
            .toPromise()
            .then(data => {
              let body = data.json();
              if (body.Code === this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data instanceof Array) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "failure to get undispatched tasks");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }

  /**
   * 获取已派工任务
   * @param userId
   * @param since
   * @param count
   * @param minutes
   * @returns {Promise<T>}
   */
  public getDispatchedTasks(userId: number, since: number, count: number, minutes: number): Promise<Array<SearchTask>> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = `${data}wap/v1/mobile/tasksearch/${userId}/dispatchedTasks/${minutes}?count=${count}&since=${since}`;
          return this.http.get(url, this.getOptions())
            .toPromise()
            .then(data => {
              let body = data.json();
              if (body.Code === this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data instanceof Array) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "failure to get dispatched tasks");
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
  public getSearchTasks(userId: number, request: SearchTaskRequest): Promise<Array<SearchTask>> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = data + "wap/v1/mobile/tasksearch/" + userId + "/tasks?happenedAddress=" +
            request.happenedAddress + "&contactPhone=" + request.contactPhone + "&serialNo=" +
            request.serialNo + "&taskNo=" + request.taskNo + "&taskState=" + request.taskState +
            "&reportType=" + request.reportType + "&reportPerson=" + request.reportPerson +
            "&sendTime=" + request.sendTime + "&count=10&since=0";
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
  public getSearchTaskCount(userId: number, request: SearchTaskRequest): Promise<SearchTaskCount> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = data + "wap/v1/mobile/tasksearch/" + userId + "/tasksCount?happenedAddress=" +
            request.happenedAddress + "&contactPhone=" + request.contactPhone + "&serialNo=" +
            request.serialNo + "&taskNo=" + request.taskNo + "&taskState=" + request.taskState +
            "&reportType=" + request.reportType + "&reportPerson=" + request.reportPerson + "&sendTime=" +
            request.sendTime;
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

  /**
   * 获取公告
   * @returns {Promise<T>}
   */
  public getNews(): Promise<Array<News>> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = data + "wap/v1/mobile/resource/news/latestd";
          return this.http.get(url, this.getOptions())
            .toPromise()
            .then(data => {
              console.log("getNews:" + data)
              let body = data.json();
              if (body.Code == this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data as Array<News>) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "fail to get news!");
              }
            })
            .catch(this.handleError)
        })
        .catch(error => reject(error));
    })
  }

  /**
   * 用户登录操作
   * @param user
   * @returns {Promise<T>}
   */
  public doLogin(user: UserInfo): Promise<UserResult> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url;
          if (user.role=='worker') {
            url = data + "wap/v1/auth/" + user.userName + "/" + user.password + "?appIdentity=cc";
          } else {
            url = data + "wap/v1/auth/wap/" + user.userName + "/" + user.password + "?appIdentity=cc";
          }
          return this.http.get(url, this.getOptions())
            .toPromise()
            .then(data => {
              console.log("getUserInfo:" + data);
              let body = data.json();
              if (body.Code == this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data as UserResult) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "fail to get userInfo!");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }

  /**
   * 获取施工人员
   * @param userId
   * @returns {Promise<T>}
   */
  public getPersonnels(userId: number): Promise<Array<Personnel>> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = `${data}wap/v1/mobile/resource/user/${userId}/getFieldPersonnel`;
          return this.http.get(url, this.getOptions())
            .toPromise()
            .then(data => {
              let body = data.json();
              if (body.Code === this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data instanceof Array) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "failure to get personnels");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }

   /* 获得管理人员信息
   * @param userId
   * @returns {Promise<T>}
   */
  public getManagerUserInfo(userId: number): Promise<UserManageInfo> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = data + "wap/v1/mobile/resource/user/hotline/" + userId;
          return this.http.get(url, this.getOptions())
            .toPromise()
            .then(data => {
              console.log("getManagerUserInfo:" + data);
              let body = data.json();
              if (body.Code == this.globalService.httpCode
                && body.StatusCode == this.globalService.httpSuccessStatusCode
                && body.Data as UserManageInfo) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "fail to get ManagerUserInfo!");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    })
  }

  /**
   * 获得外勤人员信息
   * @param userId
   * @returns {Promise<T>}
   */
  public getWorkerUserInfo(userId: number): Promise<UserWorkInfo> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = data + "wap/v1/mobile/resource/user/" + userId;
          return this.http.get(url, this.getOptions())
            .toPromise()
            .then(data => {
              console.log("getWorkerUserInfo:" + data);
              let body = data.json();
              if (body.Code == this.globalService.httpCode
                && body.StatusCode == this.globalService.httpSuccessStatusCode
                && body.Data as UserWorkInfo) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "fail to get WorkerUserInfo!")
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    })
  }

  /**
   * 检查app更新
   * @param version
   * @returns {Promise<T>}
   */
  public checkAppVersion(version: number): Promise<VersionInfo> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = `${data}wap/v1/system/update/app/check?version=${version}`;
          return this.http.get(url, this.getOptions())
            .toPromise()
            .then(data => {
              console.log("checkAppVersion:" + data);
              let body = data.json();
              if (body.Code == this.globalService.httpCode
                && body.StatusCode == this.globalService.httpSuccessStatusCode
                && body.Data as VersionInfo) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "fail to get check app version info!")
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    })
  }

  /**
   * 检查data更新
   * @param version
   */
  public checkDataVersion(version: number): Promise<VersionInfo> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = `${data}wap/v1/system/update/data/check?version=${version}`;
          return this.http.get(url, this.getOptions())
            .toPromise()
            .then(data => {
              console.log("checkDataVersion:" + data);
              let body = data.json();
              if (body.Code == this.globalService.httpCode
                && body.StatusCode == this.globalService.httpSuccessStatusCode
                && body.Data as VersionInfo) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "fail to get check data version info!")
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    })
  }
}
