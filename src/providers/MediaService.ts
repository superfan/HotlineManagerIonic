import {Injectable} from "@angular/core";
import {BaseService} from "./BaseService";
import {GlobalService} from "./GlobalService";
import {DbService} from "./DbService";
import {FileService} from "./FileService";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {Media, MediaObject} from "@ionic-native/media";
import {MediaCapture, MediaFile, CaptureError, CaptureVideoOptions} from '@ionic-native/media-capture';
import {VideoPlayer} from '@ionic-native/video-player';

import {MediaType} from "../model/Media";
import {Http} from "@angular/http";

@Injectable()
export class MediaService extends BaseService {
  private isPlayingAlarm: boolean;

  constructor(http: Http,
              private globalService: GlobalService,
              private dbService: DbService,
              private camera: Camera,
              private media: Media,
              private mediaCapture: MediaCapture,
              private fileService: FileService,
              private videoPlayer: VideoPlayer) {
    super(http);
    this.isPlayingAlarm = false;
  }

  /**
   * 拍照
   * @param taskId
   * @returns {Promise<TResult>}
   */
  public takePicture(taskId: string): Promise<any> {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    return this.camera.getPicture(options)
      .then((imageUri) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        //let base64Image = 'data:image/jpeg;base64,' + imageData;
        console.log(imageUri);
        //const startName: string = 'file://';
        let path: string = imageUri.toString();
        // if (path.indexOf(startName) === 0 && startName.length < path.length) {
        //   path = path.substring(startName.length);
        // }
        return Promise.resolve(path);
      }, (err) => {
        // Handle error
        console.error(err);
        return Promise.reject(err);
      })
      .then(path => this.fileService.movePicture(path))
      .then(fileName => this.dbService.saveMedia({
        userId: this.globalService.userId,
        taskId,
        fileType: MediaType.Picture,
        fileName,
        uploadedFlag: this.globalService.uploadedFlagForLocal
      })
        .then(result => result
          ? Promise.resolve({filePath: `${this.fileService.getImagesDir()}/${fileName}`, fileName})
          : Promise.reject('failure to save the db')));
  }

  /**
   * 视频
   * @param taskId
   * @returns {Promise<TResult>}
   */
  public takeVideo(taskId: string): Promise<any> {
    let options: CaptureVideoOptions = {limit: 1};
    return this.mediaCapture.captureVideo(options)
      .then(
        (data: MediaFile[]) => {
          console.log(data)
          // Promise.reject('success to save the db')
          let path: string = data[0].fullPath.toString();
          return Promise.resolve(path);
        },
        (err: CaptureError) => {
          console.error(err);
          return Promise.reject(err);
        }
      )
      .then(path => this.fileService.moveVideo(path))
      .then(fileName => this.dbService.saveMedia({
        userId: this.globalService.userId,
        taskId,
        fileType: MediaType.Vedio,
        fileName,
        uploadedFlag: this.globalService.uploadedFlagForLocal
      })
        .then(result => result
          ? Promise.resolve({filePath: `${this.fileService.getVideosDir()}/${fileName}`, fileName})
          : Promise.reject('failure to save the db')));
  }


  public playVideo(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      // Playing a video.
      this.videoPlayer.play(path).then(() => {
        console.log('video completed');
        return reject('video completed');
      }).catch(err => {
        console.log(err);
        return reject(err);
      });
    });
  }

  /**
   * 录音
   * @returns {Promise<T>}
   */
  public startRecordAudio(): Promise<any> {
    const error: string = 'failure to record audio';
    return new Promise((resolve, reject) => {
      let file: MediaObject;
      try {
        // Create a Media instance.  Expects path to file or url as argument
        // We can optionally pass a second argument to track the status of the media
        let name: string = `${new Date().getTime()}.mp3`;
        file = this.media.create(`${this.fileService.getSoundsDir()}/${name}`);
        if (!file) {
          return reject(error);
        }

        file.startRecord();
        return resolve({
          file,
          name
        });
      }
      catch (err) {
        console.error(err);
        if (file) {
          file.release();
        }
        return reject(err);
      }
    });
  }

  /**
   *
   * @param file
   * @returns {any}
   */
  public endRecordAudio(file: any): Promise<boolean> {
    if (file instanceof MediaObject) {
      try {
        (<MediaObject>file).stopRecord();
        (<MediaObject>file).release();
        return Promise.resolve(true);
      } catch (err) {
        console.error(err);
        return Promise.reject(err);
      }
    } else {
      return Promise.reject('file is error');
    }
  }

  public playAudio(name: string, isCached?: boolean): Promise<any> {
    const error: string = 'failure to play audio';
    return new Promise((resolve, reject) => {
      let file: MediaObject;
      try {
        // Create a Media instance.  Expects path to file or url as argument
        // We can optionally pass a second argument to track the status of the media
        if (isCached) {
          file = this.media.create(`${name}`);
        } else {
          file = this.media.create(`${this.fileService.getSoundsDir()}/${name}`);
        }

        if (!file) {
          return reject(error);
        }

        file.play();
        return resolve(file);
      }
      catch (err) {
        console.error(err);
        if (file) {
          file.release();
        }
        return reject(err);
      }
    });
  }

  public playAlarm(name: string): void {
    if (this.isPlayingAlarm) {
      return;
    }

    this.isPlayingAlarm = true;
    let file: MediaObject;
    try {
      // Create a Media instance.  Expects path to file or url as argument
      // We can optionally pass a second argument to track the status of the media
      file = this.media.create(`file:///android_asset/www/assets/sound/${name}`);
      if (!file) {
        this.isPlayingAlarm = false;
        return;
      }

      file.play();

      setTimeout(() => {
        try {
          file.stop();
          file.release();
        } catch (err) {
          console.error(err);
        } finally {
          this.isPlayingAlarm = false;
        }
      }, 5000);
    }
    catch (err) {
      this.isPlayingAlarm = false;
      console.error(err);
      if (file) {
        file.release();
      }
    }
  }

  public stopAudio(file: any): Promise<boolean> {
    if (file instanceof MediaObject) {
      try {
        (<MediaObject>file).stop();
        (<MediaObject>file).release();
        return Promise.resolve(true);
      } catch (err) {
        console.error(err);
        return Promise.reject(err);
      }
    } else {
      return Promise.reject('file is error');
    }
  }
}
