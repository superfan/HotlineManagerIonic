import {Injectable} from '@angular/core';
import {DownloadService} from "./DownloadService";
import {Events} from "ionic-angular";
import {Task} from "../model/Task";
import {GlobalService} from "./GlobalService";
import {AcceptInfo} from "../model/AcceptInfo";
import {UploadService} from "./UploadService";
import {GoInfo} from "../model/GoInfo";

@Injectable()
export class DataService {
  private downloadTaskEvent: string = 'task:download';

  constructor(private downloadService: DownloadService,
              private uploadService: UploadService,
              private globalService: GlobalService,
              private events: Events) {
    events.subscribe(this.downloadTaskEvent, (since: number, count: number)=> {

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
   * 接受
   * @param acceptInfo
   * @returns {Promise<T>}
   */
  public accept(acceptInfo: AcceptInfo): Promise<boolean> {
    acceptInfo.userId = this.globalService.userId;
    return this.uploadService.accept(acceptInfo);
  }

  public go(goInfo: GoInfo): Promise<boolean> {
    goInfo.userId = this.globalService.userId;
    return this.uploadService.go(goInfo);
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

}
