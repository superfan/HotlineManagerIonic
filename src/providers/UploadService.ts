import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {ConfigService} from "./ConfigService";
import {GlobalService} from "./GlobalService";
import {AcceptInfo} from "../model/AcceptInfo";
import {BaseService} from "./BaseService";
import {GoInfo} from "../model/GoInfo";
import {ArriveInfo} from "../model/ArriveInfo";
import {RejectInfo} from "../model/RejectInfo";
import {DelayInfo} from "../model/DelayInfo";
import {ReplyInfo} from "../model/ReplyInfo";
import {CancelInfo} from "../model/CancelInfo";

@Injectable()
export class UploadService extends BaseService {

  constructor(private http: Http,
              private configService: ConfigService,
              private globalService: GlobalService) {
    super();
  }

  /**
   * 接受
   * @param acceptInfo
   * @returns {Promise<T>}
   */
  public accept(acceptInfo: AcceptInfo): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = data + "wap/v1/mobile/task/" + acceptInfo.taskId + "/accept";
          return this.http.put(url, JSON.stringify(acceptInfo), this.getOptions())
            .toPromise()
            .then(data => {
              let body = data.json();
              if (body.Code === this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "failure to accept");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }

  /**
   * 出发
   * @param goInfo
   * @returns {Promise<T>}
   */
  public go(goInfo: GoInfo): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = data + "wap/v1/mobile/task/" + goInfo.taskId + "/accept";
          return this.http.put(url, JSON.stringify(goInfo), this.getOptions())
            .toPromise()
            .then(data => {
              let body = data.json();
              if (body.Code === this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "failure to go");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }

  /**
   * 到场
   * @param arriveInfo
   * @returns {Promise<T>}
   */
  public arrive(arriveInfo: ArriveInfo): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = data + "wap/v1/mobile/task/" + arriveInfo.taskId + "/arrived";
          return this.http.put(url, JSON.stringify(arriveInfo), this.getOptions())
            .toPromise()
            .then(data => {
              let body = data.json();
              if (body.Code === this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "failure to arrive");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }

  /**
   * 回复
   * @param replyInfo
   * @returns {Promise<T>}
   */
  public reply(replyInfo: ReplyInfo): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = data + "wap/v1/mobile/task/" + replyInfo.taskId + "/reject";
          return this.http.post(url, JSON.stringify(replyInfo), this.getOptions())
            .toPromise()
            .then(data => {
              let body = data.json();
              if (body.Code === this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "failure to reply");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }

  /**
   * 退单
   * @param rejectInfo
   * @returns {Promise<T>}
   */
  public reject(rejectInfo: RejectInfo): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = data + "wap/v1/mobile/task/" + rejectInfo.taskId + "/reject";
          return this.http.put(url, JSON.stringify(rejectInfo), this.getOptions())
            .toPromise()
            .then(data => {
              let body = data.json();
              if (body.Code === this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "failure to reject");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }

  /**
   * 延期
   * @param delayInfo
   * @returns {Promise<T>}
   */
  public delay(delayInfo: DelayInfo): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = data + "wap/v1/mobile/task/" + delayInfo.taskId + "/delay";
          return this.http.put(url, JSON.stringify(delayInfo), this.getOptions())
            .toPromise()
            .then(data => {
              let body = data.json();
              if (body.Code === this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "failure to delay");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }

  /**
   * 销单
   * @param cancelInfo
   * @returns {Promise<T>}
   */
  public cancel(cancelInfo: CancelInfo) {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          resolve(true);
          // let url = data + "wap/v1/mobile/task/" + cancelInfo.taskId + "/delay";
          // return this.http.put(url, JSON.stringify(cancelInfo), this.getOptions())
          //   .toPromise()
          //   .then(data => {
          //     let body = data.json();
          //     if (body.Code === this.globalService.httpCode
          //       && body.StatusCode === this.globalService.httpSuccessStatusCode
          //       && body.Data) {
          //       resolve(body.Data);
          //     } else {
          //       reject(body.Message ? body.Message : "failure to cancel");
          //     }
          //   })
          //   .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }
}
