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
  private dirPath: string = null;
  private readonly dirRoot: string = 'sh3h';
  private readonly dir: string = 'hotlinemanager';
  private readonly arrDirs: string[] = ['config', 'data', 'images','videos', 'log', 'sounds', 'update', 'user', 'cache'];
  private readonly apkName: string = "/TaskManager.apk";

  constructor(private file: File,
              private transfer: Transfer,
              private alertCtrl: AlertController,
              private zip: Zip,
              private fileOpener: FileOpener) {
  }

  /**
   * 获取db路径
   * @returns {string}
   */
  public getDbDir(): string {
    return `${this.dirPath}${this.dirRoot}/${this.dir}/data`;
  }

  /**
   * 获取config路径
   * @returns {string}
   */
  public getConfigDir(): string {
    return `${this.dirPath}${this.dirRoot}/${this.dir}/config`;
  }

  /**
   * 获取images路径
   * @returns {string}
   */
  public getImagesDir(): string {
    return `${this.dirPath}${this.dirRoot}/${this.dir}/images`;
  }

  /**
   * 获取video路径
   * @returns {string}
   */
  public getVideosDir(): string {
    return `${this.dirPath}${this.dirRoot}/${this.dir}/videos`;
  }

  /**
   * 获取sounds路径
   * @returns {string}
   */
  public getSoundsDir(): string {
    return `${this.dirPath}${this.dirRoot}/${this.dir}/sounds`;
  }

  /**
   * 获取cache路径
   * @returns {string}
   */
  public getCacheDir(): string {
    return `${this.dirPath}/${this.dirRoot}/${this.dir}/cache`;
  }

  /**
   * 检查文件是否存在
   * @param dir
   * @param file
   * @returns {Promise<boolean>}
   */
  public checkFile(dir: string, file: string): Promise<boolean> {
    return  this.file.checkFile(dir, file)
      .catch(error => {
        console.error(error);
        return false;
      });
  }

  /**
   * 创建sh3h目录
   * @returns {Promise<T>}
   */
  public createDirRoot(): Promise<boolean> {
    this.dirPath = this.file.externalRootDirectory;
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
        });
    });
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
   *
   * @param srcFilePath
   * @returns {any}
   */
  public movePicture(srcFilePath: string): Promise<any> {
    const error: string = `failure to move ${srcFilePath}`;
    if (!srcFilePath) {
      return Promise.reject(error);
    }

    let index: number = srcFilePath.lastIndexOf('/');
    if (index <= 0) {
      return Promise.reject(error);
    }

    let srcPath: string = srcFilePath.substring(0, index + 1);
    if (!srcPath) {
      return Promise.reject(error);
    }

    let fileName: string = srcFilePath.substring(index + 1);
    if (!fileName) {
      return Promise.reject(error);
    }

    return this.file.checkFile(srcPath, fileName)
      .then(result => this.file.moveFile(srcPath, fileName, this.getImagesDir(), fileName))
      .then(entry => entry ? Promise.resolve(fileName) : Promise.reject(error));
  }

  /**
   *
   * @param srcFilePath
   * @returns {any}
   */
  public moveVideo(srcFilePath: string): Promise<any> {
    const error: string = `failure to move ${srcFilePath}`;
    if (!srcFilePath) {
      return Promise.reject(error);
    }

    let index: number = srcFilePath.lastIndexOf('/');
    if (index <= 0) {
      return Promise.reject(error);
    }

    let srcPath: string = srcFilePath.substring(0, index + 1);
    if (!srcPath) {
      return Promise.reject(error);
    }

    let fileName: string = srcFilePath.substring(index + 1);
    if (!fileName) {
      return Promise.reject(error);
    }

    return this.file.checkFile(srcPath, fileName)
      .then(result => this.file.moveFile(srcPath, fileName, this.getVideosDir(), fileName))
      .then(entry => entry ? Promise.resolve(fileName) : Promise.reject(error));
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
}
