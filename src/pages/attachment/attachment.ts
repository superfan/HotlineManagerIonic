import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {DataService} from "../../providers/DataService";
import {GlobalService} from "../../providers/GlobalService";

@Component({
  selector: 'page-attachment',
  templateUrl: 'attachment.html'
})
export class AttachmentPage {
  title: string = "附件";

  pictures: string[] = [
    'assets/img/ic_add_materials.png',
    'assets/img/ic_add_materials.png',
    'assets/img/ic_add_materials.png',
    'assets/img/ic_add_materials.png',
    'assets/img/ic_add_materials.png',
    'assets/img/ic_add_materials.png'
  ];

  audios: {name: string, time: number}[] = [
    {name: '1', time: 10},
    {name: '2', time: 20},
    {name: '3', time: 30}
  ];

  videos: string[] = [
    'http://128.1.3.60:38001/api/update/SVID_20171113_131106.mp4',
    'http://128.1.3.60:38001/api/update/SVID_20171113_131106.mp4',
    'http://128.1.3.60:38001/api/update/SVID_20171113_131106.mp4'
  ];

  constructor(public navCtrl: NavController,
              private dataService: DataService,
              private globalService: GlobalService) {

  }

  onPlayVideo(path: string): void {
    if (!this.globalService.isChrome && path) {
      this.dataService.playCachedVideo(path, "SVID_20171113_131106.mp4")
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
  }
}
