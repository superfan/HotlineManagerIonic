import {Injectable} from "@angular/core";
import {DirectoryEntry, File} from "@ionic-native/file";
import {Transfer, TransferObject} from "@ionic-native/transfer";
/**
 * Created by zhangjing on 2017/6/13.
 */
@Injectable()
export class FileSevice {

  dirPath: string = this.file.externalRootDirectory;
  dirRoot: string = 'sh3h';
  dir: string = 'hotlinemanager';
  arrDirs = ['config', 'data', 'images', 'log', 'sounds', 'update', 'user'];

  constructor(private file: File,
              private transfer: Transfer) {
  }

  /**
   * 创建文件夹目录
   */
  createDirs() {
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
      let newUrl = dirPath + dirRoot + '/' + dir + '/config';
      let fileName = 'system.json';
      return file.copyFile(originUrl, fileName, newUrl, fileName);
    }

    return createDirRoot().then(() => {
      return createDir()
    }).then(() => {
      return createChildDir()
    }).then(() => {
      return copySystemConfig()
    }).then(() => console.log('success'))
      .catch(err => console.log(err))

  }

  /**
   * 下载文件
   */
  downloadFile() {
    const fileTransfer: TransferObject = this.transfer.create();
    var uri = encodeURI("http://dn168.net/img/apk/Patrol.apk");//服务器路径
    const apkInstallUrl = this.dirPath + this.dirRoot + '/' + this.dir + '/' + this.arrDirs[5] + '/test.apk';//apk的安装路径
    console.log(apkInstallUrl);
    return fileTransfer.download(
      uri,
      apkInstallUrl)
      .then((entry) => {
          console.log("download complete:" + entry.toURL());
        },
        (error) => {
          console.log("download error source " + error.source);
          console.log("download error target " + error.target);
          console.log("download error code" + error.code);
        });
  }
}
