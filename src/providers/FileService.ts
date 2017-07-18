import {Injectable} from "@angular/core";
import {DirectoryEntry, File} from "@ionic-native/file";
import {Transfer, TransferObject} from "@ionic-native/transfer";
import {AlertController} from "ionic-angular";
import {Zip} from "@ionic-native/zip";
import {FileOpener} from "@ionic-native/file-opener";
/**
 * Created by zhangjing on 2017/6/13.
 */
@Injectable()
export class FileService {

  public dirPath: string = this.file.externalRootDirectory;
  public dirRoot: string = 'sh3h';
  public dir: string = 'hotlinemanager';
  public arrDirs = ['config', 'data', 'images', 'log', 'sounds', 'update', 'user'];
  apkName = "/TaskManager.apk";
  private configFileUrl = this.dirPath + this.dirRoot + '/' + this.dir + '/config';
  private systemFileName = 'system.json';

  constructor(private file: File,
              private transfer: Transfer,
              private alertCtrl: AlertController,
              private zip: Zip,
              private fileOpener: FileOpener) {
  }

  /**
   * 创建sh3h目录
   * @returns {Promise<T>}
   */
  public createDirRoot(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.file.createDir(this.dirPath, this.dirRoot, true)
        .then(result => {
          console.log('createDirRoot success');
          resolve(this.createAppDir());
        })
        .catch(error => {
          reject(error);
        });
    })
  }

  /**
   * 创建app目录(hotlineManager)
   * @returns {Promise<T>}
   */
  private createAppDir(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.file.createDir(this.dirPath + this.dirRoot, this.dir, true)
        .then(result => {
          console.log('createAppDir success');
          resolve(this.createChildDir());
        })
        .catch(error => {
          reject(error);
        })
    })
  }

  /**
   * 创建子目录(七个子文件夹)
   * @returns Promise
   */
  private createChildDir(): Promise<boolean> {
    let url = this.dirPath + this.dirRoot + '/' + this.dir;
    let promiseArr: Array<Promise<DirectoryEntry>> = [];
    for (let i = 0; i < this.arrDirs.length; i++) {
      promiseArr.push(this.file.createDir(url, this.arrDirs[i], true));
    }

    return new Promise((resolve, reject) => {
      Promise.all(promiseArr)
        .then(result => {
          console.log('createChildDir Promise all success');
          resolve(this.copySystemConfig());
        })
        .catch(error => {
          console.log(error);
          return Promise.reject(false);
        });
    });
  }

  /**
   * 拷贝配置文件
   * @returns {Promise<Entry>}
   */
  private copySystemConfig(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let originUrl = 'file:///android_asset/www/assets/config/';
      let newUrl = this.dirPath + this.dirRoot + '/' + this.dir + '/config/';
      console.log('copySystemConfig:' + newUrl);
      let fileName = 'system.json';

      this.file.checkFile(newUrl, fileName)
        .then(result => {
          //文件存在
          console.log("systemConfig has exist!" + result);
          resolve(true);
        })
        .catch(error => {
          console.log(error);
          this.file.copyFile(originUrl, fileName, newUrl, fileName)
            .then(result => {
              console.log('copySystemConfig success' + result);
              resolve(true);
            })
            .catch(error => {
              console.log(error);
              reject(false);
            });
        })
    })
  }

  /**
   * 下载文件
   */
  public downloadFile(isData: boolean, url: string): Promise<boolean> {
    let alert = this.alertCtrl.create({
      title: '下载更新包',
      message: '下载进度:0%',
      enableBackdropDismiss: false,
    });
    alert.present();
    let fileTransfer: TransferObject = this.transfer.create();
    let downloadUrl;
    let defaultUrl = this.dirPath + this.dirRoot + '/' + this.dir + '/' + this.arrDirs[5];
    downloadUrl = isData ? (defaultUrl + '/data.zip') : (defaultUrl + '/app.zip');

    fileTransfer.onProgress((event) => {
      var downloadProgress = Math.floor((event.loaded / event.total) * 100);
      if (downloadProgress == 100) {
        alert.dismiss();
      } else {
        let message = document.getElementsByClassName('alert-message')[0];
        message && (message.innerHTML = '下载进度：' + downloadProgress + '%');
      }
    });

    return new Promise((resolve, reject) => {
      fileTransfer.download(url, downloadUrl)
        .then((entry) => {
          let destUrl = this.dirPath + this.dirRoot + '/' + this.dir + '/' + this.arrDirs[5];
          resolve(this.unZipFile(entry.toURL(), destUrl, isData));
        })
        .catch(err => {
          reject(err);
        })
    });
  }

  /**
   * 解压文件
   * @param sourceUrl
   * @param destUrl
   */
  private unZipFile(sourceUrl, destUrl, isData: boolean): Promise<boolean> {

    return new Promise((resolve, reject) => {
      this.zip.unzip(sourceUrl, destUrl)
        .then((result) => {
          console.log("unzip file success");
          if (!isData) {
            resolve(this.openApkFile(destUrl));
          } else {
            resolve(true);
          }
        })
        .catch((error) => {
          reject(error);
        })
    })
  }

  /**
   * 打开安装包
   * @param destPath
   */
  private openApkFile(destPath): Promise<boolean> {
    let destUrl = destPath + this.apkName;
    return new Promise((resolve, reject) => {
      this.fileOpener.open(destUrl, 'application/vnd.android.package-archive')
        .then(() => {
            console.log('File is opened');
            resolve(true);
          }
        )
        .catch(err => {
          console.log('Error openning file', err);
          reject(err);
        });
    });
  }

  /**
   * 修改是否是九宫格
   * @param isGrid
   */
  public editIsGridStyle(isGrid: boolean) {
    let jsonResult: any;
    this.file.readAsText(this.configFileUrl, this.systemFileName)
      .then(result => {
        let body = JSON.parse(result);
        jsonResult = {
          "sys.connect.outer.network": body["sys.connect.outer.network"],
          "server.outer.baseuri": body["server.outer.baseuri"],
          "server.inner.baseuri": body["server.inner.baseuri"],
          "sys.grid.style": isGrid,
          "sys.debug.mode": body["sys.debug.mode"],
          "sys.keep.alive.interval": body["sys.keep.alive.interval"],
          "sys.region": body["sys.region"]
        }
        console.log(jsonResult);
        this.writeData2Json(this.configFileUrl, this.systemFileName, jsonResult);
      })
      .catch(err => {
        console.log(err);
      })
  }

  /**
   * 修改内外网选择
   * @param isOuterNet
   */
  public editIsOuterNet(isOuterNet: boolean) {
    let jsonResult: any;
    this.file.readAsText(this.configFileUrl, this.systemFileName)
      .then(result => {
        let body = JSON.parse(result);
        jsonResult = {
          "sys.connect.outer.network": isOuterNet,
          "server.outer.baseuri": body["server.outer.baseuri"],
          "server.inner.baseuri": body["server.inner.baseuri"],
          "sys.grid.style": body["sys.grid.style"],
          "sys.debug.mode": body["sys.debug.mode"],
          "sys.keep.alive.interval": body["sys.keep.alive.interval"],
          "sys.region": body["sys.region"]
        }
        console.log(jsonResult);
        this.writeData2Json(this.configFileUrl, this.systemFileName, jsonResult);
      })
      .catch(err => {
        console.log(err);
      })
  }

  /**
   * 修改后台地址
   * @param baseUri
   */
  public editSystemUri(baseUri:string){
    let jsonResult: any;
    this.file.readAsText(this.configFileUrl, this.systemFileName)
      .then(result => {
        let body = JSON.parse(result);
        jsonResult = {
          "sys.connect.outer.network": body["sys.connect.outer.network"],
          "server.outer.baseuri": baseUri,
          "server.inner.baseuri": baseUri,
          "sys.grid.style": body["sys.grid.style"],
          "sys.debug.mode": body["sys.debug.mode"],
          "sys.keep.alive.interval": body["sys.keep.alive.interval"],
          "sys.region": body["sys.region"]
        }
        console.log(jsonResult);
        this.writeData2Json(this.configFileUrl, this.systemFileName, jsonResult);
      })
      .catch(err => {
        console.log(err);
      })
  }

  /**
   * 心跳
   * @param keepAlive
   */
  public editheartBeat(keepAlive:number){
    let jsonResult: any;
    this.file.readAsText(this.configFileUrl, this.systemFileName)
      .then(result => {
        let body = JSON.parse(result);
        jsonResult = {
          "sys.connect.outer.network": body["sys.connect.outer.network"],
          "server.outer.baseuri": body["server.outer.baseuri"],
          "server.inner.baseuri": body["server.inner.baseuri"],
          "sys.grid.style": body["sys.grid.style"],
          "sys.debug.mode": body["sys.debug.mode"],
          "sys.keep.alive.interval": keepAlive,
          "sys.region": body["sys.region"]
        }
        console.log(jsonResult);
        this.writeData2Json(this.configFileUrl, this.systemFileName, jsonResult);
      })
      .catch(err => {
        console.log(err);
      })
  }

  /**
   * 写至json文件
   * @param fileUrl
   * @param fileName
   * @param jsonResult
   */
  private writeData2Json(fileUrl: string, fileName: string, jsonResult) {
    this.file.writeExistingFile(fileUrl, fileName, JSON.stringify(jsonResult))
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      })
  }
}
