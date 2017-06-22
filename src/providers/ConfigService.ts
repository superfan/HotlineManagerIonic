import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {File} from "@ionic-native/file";

/**
 * Created by zhangjing on 2017/6/19.
 * 读取配置文件
 */

@Injectable()
export class ConfigService {

  private systemFilePath: string = './assets/config/system.json';
  private serverBaseUri: string = null;

  constructor(public http: Http, public file: File) {
  }

  /**
   * 获取数据服务地址
   * @returns {Promise<string>|Promise<T>}
   */
  getServerBaseUri() {
    return this.serverBaseUri
      ? Promise.resolve(this.serverBaseUri)
      : new Promise((resolve, reject) => {
        this.http.get(this.systemFilePath)
          .subscribe(data => {
            let systemConfig = data.json();
            let isOuterNetwork = systemConfig["sys.connect.outer.network"];
            let outerBaseUri = systemConfig["server.outer.baseuri"];
            let innerBaseUri = systemConfig["server.inner.baseuri"];
            if (outerBaseUri && innerBaseUri) {
              this.serverBaseUri = isOuterNetwork ? outerBaseUri : innerBaseUri;
              resolve(this.serverBaseUri);
            } else {
              reject("failure to read the system.json");
            }
          });
      });
  }

  // getBaseUri(): string {
  //   this.file
  //     .checkDir("./assert", 'config')
  //     .then(_ => console.log('Directory exists'))
  //     .catch(err => console.log('Directory doesnt exist'));
  //   return "";
  // }
}
