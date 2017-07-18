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
  private readonly arrDirs: string[] = ['config', 'data', 'images', 'log', 'sounds', 'update', 'user'];
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
    return `${this.dirPath}/${this.dirRoot}/${this.dir}/data`;
  }

  /**
   * 获取config路径
   * @returns {string}
   */
  public getConfigDir(): string {
    return `${this.dirPath}/${this.dirRoot}/${this.dir}/config`;
  }

  /**
   * 创建文件夹目录
   */
  createDirs() {
    this.dirPath = this.file.externalRootDirectory;
    const dirPath = this.dirPath;
    const dirRoot = this.dirRoot;
    const dir = this.dir;
    const arrDirs = this.arrDirs;
    var file = this.file;

    function createDirRoot() {
      return file.createDir(dirPath, dirRoot, true);
    }

    function createDir() {
      return file.createDir(dirPath + dirRoot, dir, true);
    }

    /**
     * 创建子目录
     * @returns Promise
     */
    function createChildDir() {
      let url = dirPath + dirRoot + '/' + dir;
      let promiseArr: Array<Promise<DirectoryEntry>> = [];
      for (let i = 0; i < arrDirs.length; i++) {
        promiseArr.push(file.createDir(url, arrDirs[i], true));
      }
      return Promise.all(promiseArr);
    }

    /**
     * 拷贝配置文件
     * @returns {Promise<Entry>}
     */
    function copySystemConfig() {
      let originUrl = 'file:///android_asset/www/assets/config/';
      let newUrl = dirPath + dirRoot + '/' + dir + '/config/';
      let fileName = 'system.json';
      return file.checkFile(newUrl, fileName)
        .then(result => {
          console.log("copySystemConfig:" + result);
          if (!result) {
            return file.copyFile(originUrl, fileName, newUrl, fileName);
          } else {
            Promise.resolve('success');
          }
        })
        .catch(error => {
          console.error(error);
          return file.copyFile(originUrl, fileName, newUrl, fileName);
        });
    }

    return createDirRoot().then(() => {
      return createDir()
    }).then(() => {
      return createChildDir()
    }).then(() => {
      return copySystemConfig()
    }).then(() => console.log('success'))
      .catch(err => console.log(err));
  }

  /**
   * 下载文件
   */
  downloadFile(url: string) {
    let alert = this.alertCtrl.create({
      title: '下载更新包',
      message: '下载进度:0%',
      enableBackdropDismiss: false,
    });
    alert.present();

    const fileTransfer: TransferObject = this.transfer.create();
    // var uri = encodeURI("http://dn168.net/img/apk/Patrol.apk");//服务器路径
    const apkInstallUrl = this.dirPath + this.dirRoot + '/' + this.dir + '/' + this.arrDirs[5] + '/test.zip';//apk的安装路径
    console.log(apkInstallUrl);

    fileTransfer.onProgress((event) => {
      var downloadProgress = Math.floor((event.loaded / event.total) * 100);
      if (downloadProgress == 100) {
        alert.dismiss();
      } else {
        let message = document.getElementsByClassName('alert-message')[0];
        message && (message.innerHTML = '下载进度：' + downloadProgress + '%');
      }
    });

    return fileTransfer.download(
      url,
      apkInstallUrl)
      .then((entry) => {
          console.log("download complete:" + entry.toURL());
          let destUrl = this.dirPath + this.dirRoot + '/' + this.dir + '/' + this.arrDirs[5];
          this.unZipFile(entry.toURL(), destUrl);
        },
        (error) => {
          console.log("download error source " + error.source);
          console.log("download error target " + error.target);
          console.log("download error code" + error.code);
        });
  }

  /**
   * 解压文件
   * @param sourceUrl
   * @param destUrl
   */
  unZipFile(sourceUrl, destUrl) {
    this.zip.unzip(sourceUrl, destUrl)
      .then((result) => {
        console.log("unzip file success");
        this.openApkFile(destUrl);
      })
      .catch(() => {
        console.log("unzip file failed");
      })
  }

  /**
   * 打开安装包
   * @param destPath
   */
  openApkFile(destPath) {
    let destUrl = destPath + this.apkName;
    this.fileOpener.open(destUrl, 'application/vnd.android.package-archive')
      .then(() => console.log('File is opened'))
      .catch(err => console.log('Error openning file', err));
  }


  editIsGridStyle(isGrid: boolean) {
    let fileUrl = this.dirPath + this.dirRoot + '/' + this.dir + '/config';
    let fileName = 'system.json';
    let jsonResult: any;
    this.file.readAsText(fileUrl, fileName)
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
        this.writeData2Json(fileUrl, fileName, jsonResult);
      })
      .catch(err => {
        console.log(err);
      })
  }

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
