import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Storage} from '@ionic/storage';
import {GlobalService} from "./GlobalService";
import {File} from "@ionic-native/file";
import 'rxjs/add/operator/toPromise';
import {FileService} from "./FileService";
import {MaterialUnit} from "../model/MaterialUnit";
import {OverdueTime} from "../model/OverdueTime";

interface SystemConfig {
  outerBaseUri: string;
  innerBaseUri: string;
  serverBaseUri: string;
  fileOuterBaseUri: string;
  fileInnerBaseUri: string;
  fileServerBaseUri: string;
  materialsOuterBaseUri: string;
  materialsInnerBaseUri: string;
  materialsBaseUri: string;
  isOuterNetwork: boolean;
  isGridStyle: boolean;
  isDebugMode: boolean;
  keepAliveInterval: number;
  overdueTime: OverdueTime;
  sysRegion: string;
  newFileService: boolean;
  materialUnit: Array<MaterialUnit>;
}

interface MapConfig {
  mapServerUrl: string
}

/**
 * Created by zhangjing on 2017/6/19.
 * 读取配置文件
 */

@Injectable()
export class ConfigService {
  private basePath: string = './assets/config/';
  private readonly systemFileName: string = 'system.json';
  private readonly mapFileName: string = 'map.json';
  private readonly systemFilePath: string = `${this.basePath}${this.systemFileName}`;
  private readonly mapFilePath: string = `${this.basePath}${this.mapFileName}`;
  public readonly systemStorageName: string = 'system';
  private readonly mapStorageName: string = 'map';
  private systemConfig: SystemConfig;
  private mapConfig: MapConfig;
  public static readonly fushunRegion: string = "fushun";

  constructor(private http: Http,
              private storage: Storage,
              private file: File,
              private globalService: GlobalService,
              private fileService: FileService) {
    if (this.globalService.isChrome) {
      this.storage.clear();
    }
  }

  /**
   * 初始化
   * @returns {Promise<boolean|boolean>}
   */
  public initConfigs(): Promise<any> {
    return this.readSystemConfig()
      .then(data => this.systemConfig = data as SystemConfig)
      .then(() => this.readMapConfig())
      .then(data => this.mapConfig = data as MapConfig);
  }

  /**
   * 获取数据服务地址
   * @returns {Promise<string>|Promise<T>}
   */
  public getServerBaseUri(): Promise<string> {
    return ConfigService.isValid<SystemConfig>(this.systemConfig, 'serverBaseUri')
      ? Promise.resolve(this.systemConfig.serverBaseUri)
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            this.systemConfig = data as SystemConfig;
            if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'outerBaseUri')
              && ConfigService.isValid<SystemConfig>(this.systemConfig, 'innerBaseUri')
              && ConfigService.isValid<SystemConfig>(this.systemConfig, 'isOuterNetwork')) {
              this.systemConfig.serverBaseUri =
                this.systemConfig.isOuterNetwork ? this.systemConfig.outerBaseUri : this.systemConfig.innerBaseUri;
              resolve(this.systemConfig.serverBaseUri);
            } else {
              reject("failure to getServerBaseUri");
            }
          })
          .catch(error => reject(error));
      });
  }

  /**
   * 获取数据服务地址
   * @returns {Promise<[string,string]>|Promise<T>}
   */
  public getServerBaseUris(): Promise<Array<string>> {
    return ConfigService.isValid<SystemConfig>(this.systemConfig, 'serverBaseUri')
      ? Promise.resolve([this.systemConfig.outerBaseUri, this.systemConfig.innerBaseUri])
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            this.systemConfig = data as SystemConfig;
            if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'outerBaseUri')
              && ConfigService.isValid<SystemConfig>(this.systemConfig, 'innerBaseUri')
              && ConfigService.isValid<SystemConfig>(this.systemConfig, 'isOuterNetwork')) {
              resolve([this.systemConfig.outerBaseUri, this.systemConfig.innerBaseUri]);
            } else {
              reject("failure to getServerBaseUris");
            }
          })
          .catch(error => reject(error));
      });
  }

  /**
   *
   * @returns {Promise<string>|Promise<T>}
   */
  public getFileBaseUri(): Promise<string> {
    return ConfigService.isValid<SystemConfig>(this.systemConfig, 'fileServerBaseUri')
      ? Promise.resolve(this.systemConfig.fileServerBaseUri)
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            this.systemConfig = data as SystemConfig;
            if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'fileOuterBaseUri')
              && ConfigService.isValid<SystemConfig>(this.systemConfig, 'fileInnerBaseUri')
              && ConfigService.isValid<SystemConfig>(this.systemConfig, 'isOuterNetwork')) {
              this.systemConfig.fileServerBaseUri =
                this.systemConfig.isOuterNetwork ? this.systemConfig.fileOuterBaseUri : this.systemConfig.fileInnerBaseUri;
              resolve(this.systemConfig.fileServerBaseUri);
            } else {
              reject("failure to getFileBaseUri");
            }
          })
          .catch(error => reject(error));
      });
  }

  /**
   *
   * @returns {Promise<[string,string]>|Promise<T>}
   */
  public getFileBaseUris(): Promise<Array<string>> {
    return ConfigService.isValid<SystemConfig>(this.systemConfig, 'fileServerBaseUri')
      ? Promise.resolve([this.systemConfig.fileOuterBaseUri, this.systemConfig.fileInnerBaseUri])
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            this.systemConfig = data as SystemConfig;
            if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'fileOuterBaseUri')
              && ConfigService.isValid<SystemConfig>(this.systemConfig, 'fileInnerBaseUri')
              && ConfigService.isValid<SystemConfig>(this.systemConfig, 'isOuterNetwork')) {
              resolve([this.systemConfig.fileOuterBaseUri, this.systemConfig.fileInnerBaseUri]);
            } else {
              reject("failure to getFileBaseUris");
            }
          })
          .catch(error => reject(error));
      });
  }

  /**
   * 获得材料接口地址
   * @returns {Promise<string>|Promise<T>}
   */
  public getMaterialsBaseUri(): Promise<string> {
    return ConfigService.isValid<SystemConfig>(this.systemConfig, 'materialsBaseUri')
      ? Promise.resolve(this.systemConfig.materialsBaseUri)
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            this.systemConfig = data as SystemConfig;
            if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'isOuterNetwork')
              && ConfigService.isValid<SystemConfig>(this.systemConfig, 'materialsOuterBaseUri')
              && ConfigService.isValid<SystemConfig>(this.systemConfig, 'materialsInnerBaseUri')) {
              this.systemConfig.materialsBaseUri = this.systemConfig.isOuterNetwork ? this.systemConfig.materialsOuterBaseUri
                : this.systemConfig.materialsInnerBaseUri;
              resolve(this.systemConfig.materialsBaseUri);
            } else {
              reject("failure to getMaterialsBaseUri");
            }
          })
          .catch(error => reject(error));
      })
  }

  /**
   * 获取材料服务地址
   * @returns {Promise<[string,string]>|Promise<T>}
   */
  public getMaterialsBaseUris(): Promise<Array<string>> {
    return ConfigService.isValid<SystemConfig>(this.systemConfig, 'materialsBaseUri')
      ? Promise.resolve([this.systemConfig.materialsOuterBaseUri, this.systemConfig.materialsInnerBaseUri])
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            this.systemConfig = data as SystemConfig;
            if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'isOuterNetwork')
              && ConfigService.isValid<SystemConfig>(this.systemConfig, 'materialsOuterBaseUri')
              && ConfigService.isValid<SystemConfig>(this.systemConfig, 'materialsInnerBaseUri')) {
              resolve([this.systemConfig.materialsOuterBaseUri, this.systemConfig.materialsInnerBaseUri]);
            } else {
              reject("failure to getMaterialsBaseUri");
            }
          })
          .catch(error => reject(error));
      })
  }

  /**
   * 获得材料单位
   * @returns {Promise<Array<MaterialUnit>>|Promise<T>}
   */
  public getMaterialUnit(): Promise<Array<MaterialUnit>> {
    return ConfigService.isValid<SystemConfig>(this.systemConfig, "materialUnit")
      ? Promise.resolve(this.systemConfig.materialUnit)
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            this.systemConfig = data as SystemConfig;
            if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'materialUnit')) {
              resolve(this.systemConfig.materialUnit);
            } else {
              reject("failure to getmaterialUnit");
            }
          })
          .catch(error => reject(error));
      })
  }

  /**
   * 获得某一个单位对象
   * @param id
   * @returns {Promise<MaterialUnit>|Promise<T>}
   */
  public getOneMaterialUnit(id: number): Promise<MaterialUnit> {
    return ConfigService.isValid<SystemConfig>(this.systemConfig, "materialUnit")
      ? Promise.resolve(this.filterMaterialUnit(id, this.systemConfig.materialUnit))
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            this.systemConfig = data as SystemConfig;
            if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'materialUnit')) {
              resolve(this.filterMaterialUnit(id, this.systemConfig.materialUnit));
            } else {
              reject("failure to getmaterialUnit");
            }
          })
          .catch(error => reject(error));
      })
  }

  private filterMaterialUnit(id: number, arrays: Array<MaterialUnit>): MaterialUnit {
    if (!id || !arrays || arrays.length <= 0) {
      return null;
    }
    for (let temp of arrays) {
      if (temp.id == id) {
        return temp;
      }
    }
    return null;
  }

  /**
   * 是否是九宫格
   * @returns {Promise<T>}
   */
  public isGridStyle(): Promise<boolean> {
    return ConfigService.isValid<SystemConfig>(this.systemConfig, 'isGridStyle')
      ? Promise.resolve(this.systemConfig.isGridStyle)
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            this.systemConfig = data as SystemConfig;
            if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'isGridStyle')) {
              resolve(this.systemConfig.isGridStyle);
            }
            else {
              reject("failure to check isGridStyle");
            }
          })
          .catch(error => reject(error));
      });
  }

  /**
   * 是否是外网
   * @returns {Promise<T>}
   */
  public isOuterNetwork(): Promise<boolean> {
    return ConfigService.isValid<SystemConfig>(this.systemConfig, 'isOuterNetwork')
      ? Promise.resolve(this.systemConfig.isOuterNetwork)
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            this.systemConfig = data as SystemConfig;
            if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'isOuterNetwork')) {
              resolve(this.systemConfig.isOuterNetwork);
            }
            else {
              reject("failure to check isOuterNetwork");
            }
          })
          .catch(error => reject(error));
      })
  }

  /**
   * 是否是debug模式
   * @returns {Promise<T>}
   */
  public isDebugMode(): Promise<boolean> {
    return ConfigService.isValid<SystemConfig>(this.systemConfig, 'isDebugMode')
      ? Promise.resolve(this.systemConfig.isDebugMode)
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            this.systemConfig = data as SystemConfig;
            if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'isDebugMode')) {
              resolve(this.systemConfig.isDebugMode);
            }
            else {
              reject("failure to check isDebugMode");
            }
          })
          .catch(error => reject(error));
      });
  }

  /**
   * 获取呼吸包间隔
   * @returns {Promise<T>}
   */
  public getKeepAliveInterval(): Promise<number> {
    return ConfigService.isValid<SystemConfig>(this.systemConfig, 'keepAliveInterval')
      ? Promise.resolve(this.systemConfig.keepAliveInterval)
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            this.systemConfig = data as SystemConfig;
            if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'keepAliveInterval')) {
              resolve(this.systemConfig.keepAliveInterval);
            }
            else {
              reject("failure to getKeepAliveInterval");
            }
          })
          .catch(error => reject(error));
      });
  }

  /**
   * 获取超期时限设置
   * @returns {Promise<OverdueTime>|Promise<T>}
   */
  public getOverdueTime(): Promise<OverdueTime> {
    return ConfigService.isValid<SystemConfig>(this.systemConfig, 'overdueTime')
      ? Promise.resolve(this.systemConfig.overdueTime)
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            this.systemConfig = data as SystemConfig;
            if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'overdueTime')) {
              resolve(this.systemConfig.overdueTime);
            }
            else {
              reject("failure to getOverdueTime");
            }
          })
          .catch(error => reject(error));
      });
  }


  /**
   * 获取区域
   * @returns {Promise<T>}
   */
  public getSysRegion(): Promise<string> {
    return ConfigService.isValid<SystemConfig>(this.systemConfig, 'sysRegion')
      ? Promise.resolve(this.systemConfig.sysRegion)
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            this.systemConfig = data as SystemConfig;
            if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'sysRegion')) {
              resolve(this.systemConfig.sysRegion);
            }
            else {
              reject("failure to getSysRegion");
            }
          })
          .catch(error => reject(error));
      });
  }

  /**
   * 是否使用新文件服务
   * @returns {Promise<boolean>|Promise<T>}
   */
  public isNewFilService(): Promise<boolean> {
    return ConfigService.isValid<SystemConfig>(this.systemConfig, 'newFileService')
      ? Promise.resolve(this.systemConfig.newFileService)
      : new Promise((resolve, reject) => {
        this.readSystemConfig()
          .then(data => {
            this.systemConfig = data as SystemConfig;
            if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'newFileService')) {
              resolve(this.systemConfig.newFileService);
            }
            else {
              reject("failure to check isNewFilService");
            }
          })
          .catch(error => reject(error));
      })
  }

  /**
   * 获取地图url
   * @returns {Promise<T>}
   */
  public getMapServerUrl(): Promise<string> {
    return ConfigService.isValid<MapConfig>(this.mapConfig, 'mapServerUrl')
      ? Promise.resolve(this.mapConfig.mapServerUrl)
      : new Promise((resolve, reject) => {
        this.readMapConfig()
          .then(data => {
            this.mapConfig = data as MapConfig;
            if (ConfigService.isValid<MapConfig>(this.mapConfig, 'mapServerUrl')) {
              resolve(this.mapConfig.mapServerUrl);
            } else {
              reject("the url of map server is error");
            }
          })
          .catch(error => reject(error));
      });
  }

  /**
   * 设置九宫格样式
   * @param isGridStyle
   * @returns {any}
   */
  public setGridStyle(isGridStyle: boolean): Promise<boolean> {
    if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'isGridStyle')) {
      return new Promise((resolve, reject) => {
        let systemConfig: SystemConfig = Object.create(this.systemConfig);
        systemConfig.isGridStyle = isGridStyle;
        this.writeSystemConfig(systemConfig)
          .then(result => {
            if (result) {
              this.systemConfig.isGridStyle = isGridStyle;
            }
            resolve(!!result);
          })
          .catch(error => reject(error));
      });
    } else {
      return Promise.reject("systemConfig has no data");
    }
  }

  /**
   * 设置内外网
   * @param isOuterNet
   * @returns {any}
   */
  public setIsOuterNet(isOuterNet: boolean): Promise<boolean> {
    let promise: Promise<any>;
    if (!this.systemConfig) {
      promise = this.readSystemConfig().then(data => this.systemConfig = data as SystemConfig)
    } else {
      promise = Promise.resolve();
    }

    return promise.then(() => {
      if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'isOuterNetwork')) {
        return new Promise((resolve, reject) => {
          let systemConfig: SystemConfig = Object.create(this.systemConfig);
          systemConfig.isOuterNetwork = isOuterNet;
          this.writeSystemConfig(systemConfig)
            .then(result => {
              if (result) {
                this.systemConfig.isOuterNetwork = isOuterNet;
                this.systemConfig.serverBaseUri = this.systemConfig.isOuterNetwork ?
                  this.systemConfig.outerBaseUri : this.systemConfig.innerBaseUri;
                this.systemConfig.materialsBaseUri = this.systemConfig.isOuterNetwork ?
                  this.systemConfig.materialsOuterBaseUri : this.systemConfig.materialsInnerBaseUri;
              }
              resolve(!!result);
            })
            .catch(error => reject(error));
        });
      } else {
        return Promise.reject('sysytemConfig has no data');
      }
    });
  }

  /**
   * 设置数据地址
   * @param outerBaseUri
   * @param innerBaseUri
   * @param isOuterNetwork
   * @returns {any}
   */
  public setServerBaseUris(outerBaseUri: string, innerBaseUri: string, isOuterNetwork: boolean): Promise<boolean> {
    if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'outerBaseUri')
      && ConfigService.isValid<SystemConfig>(this.systemConfig, 'innerBaseUri')
      && ConfigService.isValid<SystemConfig>(this.systemConfig, 'serverBaseUri')
      && ConfigService.isValid<SystemConfig>(this.systemConfig, 'isOuterNetwork')) {
      return new Promise((resolve, reject) => {
        let systemConfig: SystemConfig = Object.create(this.systemConfig);
        systemConfig.outerBaseUri = outerBaseUri;
        systemConfig.innerBaseUri = innerBaseUri;
        systemConfig.serverBaseUri = isOuterNetwork ? outerBaseUri : innerBaseUri;
        systemConfig.isOuterNetwork = isOuterNetwork;
        this.writeSystemConfig(systemConfig)
          .then(result => {
            if (result) {
              this.systemConfig.outerBaseUri = outerBaseUri;
              this.systemConfig.innerBaseUri = innerBaseUri;
              this.systemConfig.serverBaseUri = isOuterNetwork ? outerBaseUri : innerBaseUri;
              this.systemConfig.isOuterNetwork = isOuterNetwork;
            }
            resolve(!!result);
          })
          .catch(error => reject(error));
      })
    } else {
      return Promise.reject('systemConfig has no data');
    }
  }

  /**
   * 设置文件服务地址
   * @param outerBaseUri
   * @param innerBaseUri
   * @param isOuterNetwork
   * @returns {any}
   */
  public setFileBaseUris(outerBaseUri: string, innerBaseUri: string, isOuterNetwork: boolean): Promise<boolean> {
    if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'fileOuterBaseUri')
      && ConfigService.isValid<SystemConfig>(this.systemConfig, 'fileInnerBaseUri')
      && ConfigService.isValid<SystemConfig>(this.systemConfig, 'fileServerBaseUri')
      && ConfigService.isValid<SystemConfig>(this.systemConfig, 'isOuterNetwork')) {
      return new Promise((resolve, reject) => {
        let systemConfig: SystemConfig = Object.create(this.systemConfig);
        systemConfig.fileOuterBaseUri = outerBaseUri;
        systemConfig.fileInnerBaseUri = innerBaseUri;
        systemConfig.fileServerBaseUri = isOuterNetwork ? outerBaseUri : innerBaseUri;
        systemConfig.isOuterNetwork = isOuterNetwork;
        this.writeSystemConfig(systemConfig)
          .then(result => {
            if (result) {
              this.systemConfig.fileOuterBaseUri = outerBaseUri;
              this.systemConfig.fileInnerBaseUri = innerBaseUri;
              this.systemConfig.fileServerBaseUri = isOuterNetwork ? outerBaseUri : innerBaseUri;
              this.systemConfig.isOuterNetwork = isOuterNetwork;
            }
            resolve(!!result);
          })
          .catch(error => reject(error));
      })
    } else {
      return Promise.reject('systemConfig has no data');
    }
  }

  /**
   * 设置材料地址
   * @param outerBaseUri
   * @param innerBaseUri
   * @param isOuterNetwork
   * @returns {any}
   */
  public setMaterialBaseUris(outerBaseUri: string, innerBaseUri: string, isOuterNetwork: boolean): Promise<boolean> {
    if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'materialsOuterBaseUri')
      && ConfigService.isValid<SystemConfig>(this.systemConfig, 'materialsInnerBaseUri')
      && ConfigService.isValid<SystemConfig>(this.systemConfig, 'materialsBaseUri')
      && ConfigService.isValid<SystemConfig>(this.systemConfig, 'isOuterNetwork')) {
      return new Promise((resolve, reject) => {
        let systemConfig: SystemConfig = Object.create(this.systemConfig);
        systemConfig.materialsOuterBaseUri = outerBaseUri;
        systemConfig.materialsInnerBaseUri = innerBaseUri;
        systemConfig.materialsBaseUri = isOuterNetwork ? outerBaseUri : innerBaseUri;
        systemConfig.isOuterNetwork = isOuterNetwork;
        this.writeSystemConfig(systemConfig)
          .then(result => {
            if (result) {
              this.systemConfig.materialsOuterBaseUri = outerBaseUri;
              this.systemConfig.materialsInnerBaseUri = innerBaseUri;
              this.systemConfig.materialsBaseUri = isOuterNetwork ? outerBaseUri : innerBaseUri;
              this.systemConfig.isOuterNetwork = isOuterNetwork;
            }
            resolve(!!result);
          })
          .catch(error => reject(error));
      })
    } else {
      return Promise.reject('systemConfig has no data');
    }
  }

  /**
   * 设置呼吸频率
   * @param keepAlive
   * @returns {any}
   */
  public setKeepAlive(keepAlive: number): Promise<boolean> {
    if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'keepAliveInterval')) {
      return new Promise((resolve, reject) => {
        let systemConfig: SystemConfig = Object.create(this.systemConfig);
        systemConfig.keepAliveInterval = keepAlive;
        this.writeSystemConfig(systemConfig)
          .then(result => {
            if (result) {
              this.systemConfig.keepAliveInterval = keepAlive;
            }
            resolve(!!result);
          })
          .catch(error => reject(error));
      })
    } else {
      return Promise.reject('systemConfig has no data');
    }
  }

  /**
   * 设置超期时限
   * @param overdueTime
   * @returns {any}
   */
  public setOverdueTime(overdueTime: OverdueTime): Promise<boolean> {
    if (ConfigService.isValid<SystemConfig>(this.systemConfig, 'overdueTime')) {
      return new Promise((resolve, reject) => {
        let systemConfig: SystemConfig = Object.create(this.systemConfig);
        systemConfig.overdueTime = overdueTime;
        this.writeSystemConfig(systemConfig)
          .then(result => {
            if (result) {
              this.systemConfig.overdueTime = overdueTime;
            }
            resolve(!!result);
          })
          .catch(error => reject(error));
      })
    } else {
      return Promise.reject('systemConfig has no data');
    }
  }

  /**
   * 读取system.json
   * @returns {Promise<TResult2|SystemConfig>|Promise<any>|Promise<SystemConfig>}
   */
  private readSystemConfig(): Promise<SystemConfig> {
    if (this.globalService.isChrome) {
      return this.storage.get(this.systemStorageName)
        .then(val => {
          if (!val) {
            return this.http.get(this.systemFilePath)
              .toPromise()
              .then(res => this.storage.set(this.systemStorageName, JSON.stringify(res.json())))
              .then(val => ConfigService.transform2SystemConfig(val));
          } else {
            return ConfigService.transform2SystemConfig(val);
          }
        });
    } else {
      console.log("start readAsText:" + this.fileService.getConfigDir() + ":" + this.systemFileName);
      return this.file.readAsText(this.fileService.getConfigDir(), this.systemFileName)
        .then(result => {
          console.log("readAsText" + result);
          return ConfigService.transform2SystemConfig(result);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  /**
   * 写入system.json
   * @returns {Promise<TResult|T>}
   */
  private writeSystemConfig(systemConfig: SystemConfig): Promise<any> {
    if (this.globalService.isChrome) {
      return this.storage.set(this.systemStorageName, ConfigService.transform2SystemString(systemConfig));
    } else {
      return this.file.writeExistingFile(this.fileService.getConfigDir(), this.systemFileName,
        ConfigService.transform2SystemString(systemConfig));
    }
  }

  /**
   * 读取map.json
   * @returns {Promise<TResult2|MapConfig>|Promise<any>|Promise<MapConfig>}
   */
  private readMapConfig(): Promise<MapConfig> {
    return this.storage.get(this.mapStorageName)
      .then(val => {
        if (!val) {
          return this.http.get(this.mapFilePath)
            .toPromise()
            .then(res => this.storage.set(this.mapStorageName, JSON.stringify(res.json())))
            .then(val => ConfigService.transform2MapConfig(val));
        } else {
          return ConfigService.transform2MapConfig(val);
        }
      });
  }

  /**
   * 判断是否有效
   * @param config
   * @param field
   * @returns {T|boolean}
   */
  private static isValid<T>(config: T, field: string): boolean {
    return config && config[field] != undefined && config[field] != null
  }

  /**
   * json string转换对象
   * @param data
   * @returns {{outerBaseUri: any, innerBaseUri: any, serverBaseUri: any, isOuterNetwork: any, isGridStyle: any, isDebugMode: any, keepAliveInterval: any, sysRegion: any}}
   */
  public static transform2SystemConfig(data: string): SystemConfig {
    let obj: Object = JSON.parse(data);
    return {
      outerBaseUri: obj["server.outer.baseuri"],
      innerBaseUri: obj["server.inner.baseuri"],
      serverBaseUri: obj["sys.connect.outer.network"] ? obj["server.outer.baseuri"] : obj["server.inner.baseuri"],
      fileOuterBaseUri: obj["server.file.outer.baseuri"],
      fileInnerBaseUri: obj["server.file.inner.baseuri"],
      fileServerBaseUri: obj["sys.connect.outer.network"] ? obj["server.file.outer.baseuri"] : obj["server.file.inner.baseuri"],
      materialsOuterBaseUri: obj["server.materials.outer.baseuri"],
      materialsInnerBaseUri: obj["server.materials.inner.baseuri"],
      materialsBaseUri: obj["sys.connect.outer.network"] ? obj["server.materials.outer.baseuri"] : obj["server.materials.inner.baseuri"],
      isOuterNetwork: obj["sys.connect.outer.network"],
      isGridStyle: obj["sys.grid.style"],
      isDebugMode: obj["sys.debug.mode"],
      keepAliveInterval: obj["sys.keep.alive.interval"],
      overdueTime: obj["sys.overdue.time"],
      sysRegion: obj["sys.region"],
      newFileService: obj["sys.new.file.service"],
      materialUnit: obj["sys.material.unit"]
    };
  }

  /**
   * json string转换对象
   * @param data
   * @returns {{mapServerUrl: any}}
   */
  private static transform2MapConfig(data: string): MapConfig {
    let obj: Object = JSON.parse(data);
    return {
      mapServerUrl: obj["map.server.url"]
    };
  }

  /**
   * 对象转json string
   * @param systemConfig
   * @returns {string}
   */
  private static transform2SystemString(systemConfig: SystemConfig): string {
    return JSON.stringify({
      "server.outer.baseuri": systemConfig.outerBaseUri,
      "server.inner.baseuri": systemConfig.innerBaseUri,
      "server.file.outer.baseuri": systemConfig.fileOuterBaseUri,
      "server.file.inner.baseuri": systemConfig.fileInnerBaseUri,
      "server.materials.outer.baseuri": systemConfig.materialsOuterBaseUri,
      "server.materials.inner.baseuri": systemConfig.materialsInnerBaseUri,
      "sys.connect.outer.network": systemConfig.isOuterNetwork,
      "sys.grid.style": systemConfig.isGridStyle,
      "sys.debug.mode": systemConfig.isDebugMode,
      "sys.keep.alive.interval": systemConfig.keepAliveInterval,
      "sys.overdue.time": systemConfig.overdueTime,
      "sys.region": systemConfig.sysRegion,
      "sys.new.file.service": systemConfig.newFileService,
      "sys.material.unit": systemConfig.materialUnit
    });
  }

  /**
   * 对象转json string
   * @param mapConfig
   * @returns {string}
   */
  // private static transform2MapString(mapConfig: MapConfig): string {
  //   return JSON.stringify({
  //     "map.server.url": mapConfig.mapServerUrl
  //   });
  // }
}
