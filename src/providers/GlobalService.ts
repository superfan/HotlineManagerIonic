import {Injectable} from '@angular/core';
import {Word} from "../model/Word";

@Injectable()
export class GlobalService {
  readonly isChrome: boolean = true;
  readonly httpCode: number = 0;
  readonly httpSuccessStatusCode: number = 200;
  userName: string = "sh3h";//"王超";
  userId: number = 5005;//60;5005
  department: string = "东河营业分公司";//"滨河营业分公司";
  departmentId: number = 10;
  readonly myWorkDownloadEvent:string = "mywork:download";
  readonly myWorkReplyEvent: string = "mywork:reply";

  constructor() {

  }

  getFormatTime(date: Date): string {
    let year = date.getFullYear().toString();
    let month = this.padLeftZero((date.getMonth() + 1).toString());
    let day = this.padLeftZero(date.getDate().toString());
    let hour = this.padLeftZero(date.getHours().toString());
    let minute = this.padLeftZero(date.getMinutes().toString());
    let second = this.padLeftZero(date.getSeconds().toString());

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }

  private padLeftZero(name: string): string {
    return name.length === 1 ? "0" + name : name;
  }
}
