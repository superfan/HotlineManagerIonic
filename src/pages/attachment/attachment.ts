import {Component, OnInit} from "@angular/core";
import {NavController, AlertController, NavParams} from "ionic-angular";
import {DataService} from "../../providers/DataService";
import {GlobalService} from "../../providers/GlobalService";
import {Attachment} from "../../model/Attachment";
import {PhotoViewer} from "@ionic-native/photo-viewer";
import {ConfigService} from "../../providers/ConfigService";

@Component({
  selector: 'page-attachment',
  templateUrl: 'attachment.html'
})
export class AttachmentPage implements OnInit {
  title: string = "附件";
  private pictureMaxCount: number = 6;
  private audioMaxCount: number = 3;
  private videoMaxCount: number = 3;

  pictures: string[] = [];

  audios: {url: string, name: string, alias: string}[] = [];

  videos: {url: string, name: string}[] = [];

  private taskId: string;
  private pictureCount: number = 0;
  private audioCount: number = 0;
  private videoCount: number = 0;
  private baseUri: string;

  constructor(public navCtrl: NavController,
              private dataService: DataService,
              private globalService: GlobalService,
              private navParams: NavParams,
              private alertCtrl: AlertController,
              private photoViewer: PhotoViewer,
              private configService: ConfigService) {
    this.taskId = this.navParams.data;
  }

  ngOnInit(): void {
    this.configService.getFileBaseUri()
      .then(uri => this.baseUri = uri)
      .then(() => this.dataService.getAttachments(this.taskId))
      .then(attachments => this.parseAttachments(attachments))
      .catch(error => console.error(error));
  }

  private parseAttachments(attachments: Attachment[]): void {
    if (!attachments || attachments.length <= 0) {
      return;
    }

    attachments.forEach(attachment => {
      let fileType: string = attachment.fileType;
      if (!fileType) {
      } else if (fileType.startsWith('image/') || fileType.startsWith('png') || fileType.startsWith('jpg')) {
        if (this.pictureCount < this.pictureMaxCount && attachment.url) {
          this.pictures[this.pictureCount++] = this.replaceUrl(attachment.url);
        }
      } else if (fileType.startsWith('audio/') || fileType.startsWith('mp3')) {
        if (this.audioCount < this.audioMaxCount && attachment.downloadUrl && attachment.originFileName) {
          this.audios[this.audioCount++] = {
            url: this.replaceUrl(attachment.downloadUrl),
            name: attachment.originFileName,
            alias: `语音${this.audioCount}`
          };
        }
      } else if (fileType.startsWith('video/') || fileType.startsWith('mp4')) {
        if (this.videoCount < this.videoMaxCount && attachment.downloadUrl && attachment.originFileName) {
          this.videos[this.videoCount++] = {
            url: this.replaceUrl(attachment.downloadUrl),
            name: attachment.originFileName
          };
        }
      }
    });
  }

  private replaceUrl(srcUrl: string): string {
    let desUrl: string;
    if (this.baseUri && srcUrl) {
      let regexp = /\d+\.\d+\.\d+.\d+:\d+/;
      let matches: string[] = this.baseUri.match(regexp);
      if (matches && matches.length > 0) {
        let match: string = matches[0];
        desUrl = srcUrl.replace(regexp, match);
      }
    }
    return desUrl ? desUrl : srcUrl;
  }

  /**
   * 浏览图片
   * @param name
   */
  onPreviewPicture(name: string): void {
    if (!this.globalService.isChrome && name) {
      this.photoViewer.show(name);
    }
  }

  /**
   * 播放语音
   * @param audio
   */
  onPlay(audio: {url: string, name: string, alias: number}): void {
    if (this.globalService.isChrome || !audio.url || !audio.name || !audio.alias) {
      return;
    }

    this.dataService.playCachedAudio(audio.url, audio.name)
      .then(file => {
        if (file) {
          let prompt = this.alertCtrl.create({
            title: '提示',
            message: "结束播放语音",
            enableBackdropDismiss: false,
            buttons: [
              {
                text: '确定',
                handler: data => {
                  console.log('Saved clicked');
                  this.dataService.stopAudio(file)
                    .catch(err => console.error(err));
                }
              }
            ]
          });
          prompt.present();
        }
      })
      .catch(err => console.error(err));
  }

  /**
   * 播放视频
   * @param video
   */
  onPlayVideo(video: {url: string, name: string}): void {
    if (!this.globalService.isChrome && video.url && video.name) {
      this.dataService.playCachedVideo(video.url, video.name)
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
  }
}
