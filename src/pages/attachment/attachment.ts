import {Component, OnInit} from "@angular/core";
import {NavController, AlertController, NavParams} from "ionic-angular";
import {DataService} from "../../providers/DataService";
import {GlobalService} from "../../providers/GlobalService";
import {Attachment} from "../../model/Attachment";
import {PhotoViewer} from "@ionic-native/photo-viewer";

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

  constructor(public navCtrl: NavController,
              private dataService: DataService,
              private globalService: GlobalService,
              private navParams: NavParams,
              private alertCtrl: AlertController,
              private photoViewer: PhotoViewer) {
    this.taskId = this.navParams.data;
  }

  ngOnInit(): void {
    this.dataService.getAttachments(this.taskId)
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
      } else if ("image/jpeg" === fileType) {
        if (this.pictureCount < this.pictureMaxCount && attachment.url) {
          this.pictures[this.pictureCount++] = attachment.url;
        }
      } else if ("audio/mp3" === fileType) {
        if (this.audioCount < this.audioMaxCount && attachment.downloadUrl && attachment.originFileName) {
          this.audios[this.audioCount++] = {
            url: attachment.downloadUrl,
            name: attachment.originFileName,
            alias: `语音${this.audioCount}`
          };
        }
      } else if ("video/mp4" === fileType) {
        if (this.videoCount < this.videoMaxCount && attachment.downloadUrl && attachment.originFileName) {
          this.videos[this.videoCount++] = {
            url: attachment.downloadUrl,
            name: attachment.originFileName
          };
        }
      }
    });
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
