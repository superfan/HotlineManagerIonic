import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {ConfigService} from "./ConfigService";
import {GlobalService} from "./GlobalService";
import {AcceptInfo} from "../model/AcceptInfo";
import {BaseService} from "./BaseService";

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
                reject(body.Message ? body.Message : "failure to get tasks");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }

}
