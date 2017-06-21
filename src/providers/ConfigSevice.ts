import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
/**
 * Created by zhangjing on 2017/6/19.
 * 读取配置文件
 */

@Injectable()
export class ConfigSevice {

  url = './assets/config/system.json';

  constructor(public http: Http) {
  }

  getServerBaseUri() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url)
        .subscribe(data => {
          resolve(data.json());
        });
    });
  }
}
