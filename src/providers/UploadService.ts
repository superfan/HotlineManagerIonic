import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {ConfigService} from "./ConfigService";
import {GlobalService} from "./GlobalService";
import {AcceptInfo, AcceptExInfo} from "../model/AcceptInfo";
import {BaseService} from "./BaseService";
import {GoInfo} from "../model/GoInfo";
import {ArriveInfo} from "../model/ArriveInfo";
import {RejectInfo} from "../model/RejectInfo";
import {DelayInfo} from "../model/DelayInfo";
import {ReplyInfo} from "../model/ReplyInfo";
import {CancelInfo, CancelExInfo} from "../model/CancelInfo";
import {DispatchInfo} from "../model/DispatchInfo";
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';
import {Media, MediaType} from "../model/Media";
import {FileService} from "./FileService";
import {UploadMaterials} from "../model/MaterialsInfo";

@Injectable()
export class UploadService extends BaseService {

  constructor(private http: Http,
              private configService: ConfigService,
              private globalService: GlobalService,
              private transfer: FileTransfer,
              private file: File,
              private fileService: FileService) {
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
          let taskId: string = acceptInfo.taskId.split('#')[0];
          let time: string = acceptInfo.taskId.split('#')[1];
          let body: string = JSON.stringify(acceptInfo);
          if (time) {
            body = body.replace(`#${time}`, '');
          }
          let url = data + "wap/v1/mobile/task/" + taskId + "/accept";
          return this.http.put(url, body, this.getOptions())
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
          let taskId: string = goInfo.taskId.split('#')[0];
          let time: string = goInfo.taskId.split('#')[1];
          let body: string = JSON.stringify(goInfo);
          if (time) {
            body = body.replace(`#${time}`, '');
          }
          let url = data + "wap/v1/mobile/task/" + taskId + "/go";
          return this.http.put(url, body, this.getOptions())
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
          let taskId: string = arriveInfo.taskId.split('#')[0];
          let time: string = arriveInfo.taskId.split('#')[1];
          let body: string = JSON.stringify(arriveInfo);
          if (time) {
            body = body.replace(`#${time}`, '');
          }
          let url = data + "wap/v1/mobile/task/" + taskId + "/arrived";
          return this.http.put(url, body, this.getOptions())
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
          let taskId: string = replyInfo.taskId.split('#')[0];
          let time: string = replyInfo.taskId.split('#')[1];
          let body: string = JSON.stringify(replyInfo);
          if (time) {
            body = body.replace(`#${time}`, '');
          }
          let url = data + "wap/v1/mobile/hotline/task/" + taskId + "/reply";
          return this.http.post(url, body, this.getOptions())
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
          let taskId: string = rejectInfo.taskId.split('#')[0];
          let time: string = rejectInfo.taskId.split('#')[1];
          let body: string = JSON.stringify(rejectInfo);
          if (time) {
            body = body.replace(`#${time}`, '');
          }
          let url = data + "wap/v1/mobile/task/" + taskId + "/reject";
          return this.http.put(url, body, this.getOptions())
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
          let taskId: string = delayInfo.taskId.split('#')[0];
          let time: string = delayInfo.taskId.split('#')[1];
          let body: string = JSON.stringify(delayInfo);
          if (time) {
            body = body.replace(`#${time}`, '');
          }
          let url = data + "wap/v1/mobile/task/" + taskId + "/delay";
          return this.http.put(url, body, this.getOptions())
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
  public cancel(cancelInfo: CancelInfo): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let taskId: string = cancelInfo.taskId.split('#')[0];
          let time: string = cancelInfo.taskId.split('#')[1];
          let body: string = JSON.stringify(cancelInfo);
          if (time) {
            body = body.replace(`#${time}`, '');
          }
          let url = data + "wap/v1/mobile/task/" + taskId + "/taskXD";
          return this.http.put(url, body, this.getOptions())
            .toPromise()
            .then(data => {
              let body = data.json();
              if (body.Code === this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "failure to cancel");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }

  /**
   * 站点任务接单
   * @param acceptExInfo
   * @returns {Promise<T>}
   */
  public acceptEx(acceptExInfo: AcceptExInfo): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = data + "wap/v1/mobile/stationTask/" + acceptExInfo.taskId + "/accept";
          return this.http.put(url, JSON.stringify(acceptExInfo), this.getOptions())
            .toPromise()
            .then(data => {
              let body = data.json();
              if (body.Code === this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "failure to accept for station task");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }

  /**
   * 站点派单
   * @param dispatchInfo
   * @returns {Promise<T>}
   */
  public dispatch(dispatchInfo: DispatchInfo): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = data + "wap/v1/mobile/stationTask/" + dispatchInfo.taskId + "/dispatch";
          return this.http.put(url, JSON.stringify(dispatchInfo), this.getOptions())
            .toPromise()
            .then(data => {
              let body = data.json();
              if (body.Code === this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "failure to dispatch for station task");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }

  /**
   * 站点销单
   * @param cancelExInfo
   * @returns {Promise<T>}
   */
  public cancelEx(cancelExInfo: CancelExInfo): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = data + "wap/v1/mobile/stationTask/" + cancelExInfo.TaskNo + "/saveTaskXD";
          return this.http.post(url, JSON.stringify(cancelExInfo), this.getOptions())
            .toPromise()
            .then(data => {
              let body = data.json();
              if (body.Code === this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "failure to cancel for station task");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }

  /**
   * 上传多媒体文件
   * @param media
   * @returns {Promise<T>}
   */
  public uploadMedia(media: Media): Promise<string> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url: string = `${data}wap/v1/mobile/resource/upload`;
          let fileUrl: string;
          let fileType: string;
          switch (media.fileType) {
            case MediaType.Picture:
              fileUrl = this.fileService.getImagesDir();
              fileType = 'IMAGE';
              break;
            case MediaType.Audio:
              fileUrl = this.fileService.getSoundsDir();
              fileType = 'SOUND';
              break;
            case MediaType.Vedio:
            default:
              return reject('type is error');
          }
          fileUrl = `${fileUrl}/${media.fileName}`;
          url = `${url}?userId=${media.userId}&fileType=${fileType}&fileName=${media.fileName}`;

          const fileTransfer: FileTransferObject = this.transfer.create();
          let options: FileUploadOptions = {
            fileKey: 'file',
            fileName: `${media.fileName}`,
            params: {
              userId: media.userId,
              fileType,
              fileName: media.fileName
            }
          };

          fileTransfer.upload(fileUrl, url, options)
            .then((data) => {
              // success
              console.log(data);
              resolve(data);
            }, (err) => {
              // error
              console.error(err);
              reject(err);
            });
        })
        .catch(error => reject(error));
    });
  }

  /**
   * 上传文件关联
   * @param taskId
   * @param files
   * @returns {Promise<T>}
   */
  public uploadMediaIds(taskId: string, files: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.configService.getServerBaseUri()
        .then(data => {
          let url = `${data}wap/v1/mobile/task/${taskId}/files/upload`;
          let content = {
            taskId,
            files
          };
          return this.http.put(url, JSON.stringify(content), this.getOptions())
            .toPromise()
            .then(data => {
              let body = data.json();
              if (body.Code === this.globalService.httpCode
                && body.StatusCode === this.globalService.httpSuccessStatusCode
                && body.Data) {
                resolve(body.Data);
              } else {
                reject(body.Message ? body.Message : "failure to uploadMediaIds");
              }
            })
            .catch(this.handleError);
        })
        .catch(error => reject(error));
    });
  }

  /**
   * 上传材料登记信息
   * @param materialArr
   * @returns {Promise<T>}
   */
  public uploadMaterialsAdd(materialArr:Array<UploadMaterials>):Promise<boolean>{
    return new Promise((resolve,reject)=>{
      this.configService.getMaterialsBaseUri()
        .then(data=>{
          let url=`${data}api/wap/v1/materialusage/batch`;
          return this.http.post(url,JSON.stringify(materialArr),this.getOptions())
            .toPromise()
            .then(data=>{
              let body=data.json();
              if (body.status == this.globalService.httpSuccessStatusCode
                && body.message=='OK') {
                resolve(true);
              }else{
                resolve(body.message ? body.message : "failure to uploadMaterials")
              }
            })
            .catch(this.handleError);
        })
        .catch(error=>reject(error));
    })
  }
}
