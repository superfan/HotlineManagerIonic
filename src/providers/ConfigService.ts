import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {File} from "@ionic-native/file";
import 'rxjs/add/operator/toPromise';

/**
 * Created by zhangjing on 2017/6/19.
 * 读取配置文件
 */

@Injectable()
export class ConfigService {
  private readonly basePath: string = "./assets/config/";
  private readonly systemFilePath: string = this.basePath + 'system.json';
  private readonly mapFilePath: string = this.basePath + 'map.json';

  private systemConfig: any;
  private mapConfig: any;

  constructor(public http: Http, public file: File) {
  }

  /**
   * 获取数据服务地址
   * @returns {Promise<string>|Promise<T>}
   */
  public getServerBaseUri(): Promise<string> {
    return this.systemConfig && this.systemConfig.serverBaseUri
      ? Promise.resolve(this.systemConfig.serverBaseUri)
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            if (this.systemConfig.outerBaseUri && this.systemConfig.innerBaseUri) {
              this.systemConfig.serverBaseUri =
                this.systemConfig.isOuterNetwork
                  ? this.systemConfig.outerBaseUri
                  : this.systemConfig.innerBaseUri;
              resolve(this.systemConfig.serverBaseUri);
            } else {
              reject("base uri of the server is error");
            }
          })
          .catch(error => reject(error));
      });
  }

  /**
   * 是否是九宫格
   * @returns {Promise<T>}
   */
  public isGridStyle(): Promise<boolean> {
    return this.systemConfig && this.systemConfig.hasOwnProperty("isGridStyle")
      ? Promise.resolve(this.systemConfig.isGridStyle)
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            if (!this.systemConfig.hasOwnProperty("isGridStyle")) {
              this.systemConfig.isGridStyle = true;
            }
            resolve(this.systemConfig.isGridStyle);
          })
          .catch(error => reject(error));
      });
  }

  /**
   * 是否是debug模式
   * @returns {Promise<T>}
   */
  public isDebugMode(): Promise<boolean> {
    return this.systemConfig && this.systemConfig.hasOwnProperty("isDebugMode")
      ? Promise.resolve(this.systemConfig.isDebugMode)
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            if (!this.systemConfig.hasOwnProperty("isDebugMode")) {
              this.systemConfig.isDebugMode = true;
            }
            resolve(this.systemConfig.isDebugMode);
          })
          .catch(error => reject(error));
      });
  }

  /**
   * 获取呼吸包间隔
   * @returns {Promise<T>}
   */
  public getKeepAliveInterval(): Promise<number> {
    return this.systemConfig && this.systemConfig.hasOwnProperty("keepAliveInterval")
      ? Promise.resolve(this.systemConfig.keepAliveInterval)
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            if (!this.systemConfig.hasOwnProperty("keepAliveInterval")) {
              this.systemConfig.keepAliveInterval = 30000;
            }
            resolve(this.systemConfig.keepAliveInterval);
          })
          .catch(error => reject(error));
      });
  }

  /**
   * 获取区域
   * @returns {Promise<T>}
   */
  public getSysRegion(): Promise<string> {
    return this.systemConfig && this.systemConfig.hasOwnProperty("sysRegion")
      ? Promise.resolve(this.systemConfig.sysRegion)
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            if (!this.systemConfig.hasOwnProperty("sysRegion")) {
              this.systemConfig.sysRegion = "shanghai";
            }
            resolve(this.systemConfig.sysRegion);
          })
          .catch(error => reject(error));
      });
  }

  /**
   * 获取地图url
   * @returns {Promise<T>}
   */
  public getMapServerUrl(): Promise<string> {
    return this.mapConfig && this.mapConfig.hasOwnProperty("mapServerUrl")
      ? Promise.resolve(this.mapConfig.mapServerUrl)
      : new Promise((resolve, reject) => {
        this.readMapConfig()
          .then(data => {
            if (this.mapConfig.hasOwnProperty("mapServerUrl")) {
              resolve(this.mapConfig.mapServerUrl);
            } else {
              reject("the url of map server is error");
            }
          })
          .catch(error => reject(error));
      });
  }

  /**
   * 读取system.json
   * @returns {Promise<TResult|T>}
   */
  private readSystemConfig(): Promise<any> {
    return this.http.get(this.systemFilePath)
      .toPromise()
      .then(res => {
        let body = res.json();
        return this.systemConfig = {
          isOuterNetwork: body["sys.connect.outer.network"],
          outerBaseUri: body["server.outer.baseuri"],
          innerBaseUri: body["server.inner.baseuri"],
          isGridStyle: body["sys.grid.style"],
          isDebugMode: body["sys.debug.mode"],
          keepAliveInterval: body["sys.keep.alive.interval"],
          sysRegion: body["sys.region"]
        };
      })
      .catch(this.handleError);
  }

  /**
   * 读取map.json
   * @returns {Promise<string>}
   */
  private readMapConfig() {
    return this.http.get(this.mapFilePath)
      .toPromise()
      .then(res => {
        let body = res.json();
        return this.mapConfig = {
          mapServerUrl: body["map.server.url"]
        };
      })
      .catch(this.handleError);
  }

  /**
   * to json
   * @param res
   * @returns {any|{}}
   */
  // private extractData(res: Response): string {
  //   let body = res.json();
  //   let isOuterNetwork = body["sys.connect.outer.network"];
  //   let outerBaseUri = body["server.outer.baseuri"];
  //   let innerBaseUri = body["server.inner.baseuri"];
  //   let isGridStyle = body["sys.grid.style"];
  //   let isDebugMode = body["sys.debug.mode"];
  //   let keepAliveInterval = body["sys.keep.alive.interval"];
  //   let sysRegion = body["sys.region"];
  //   this.systemConfig = {
  //     isOuterNetwork,
  //     outerBaseUri,
  //     innerBaseUri,
  //     isGridStyle,
  //     isDebugMode,
  //     keepAliveInterval,
  //     sysRegion
  //   };
  //   return "ok";
  // }

  /**
   * 出错处理
   * @param error
   * @returns {Promise<never>}
   */
  private handleError(error: any): Promise<never> {
    let errMsg = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
