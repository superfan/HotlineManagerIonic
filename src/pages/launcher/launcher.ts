import {Component, OnInit} from "@angular/core";
import {LauncherService} from "./LauncherService";
import {NavController} from "ionic-angular";
import {GlobalService} from "../../providers/GlobalService";

@Component({
  selector: 'page-launcher',
  templateUrl: 'launcher.html',
  providers: [LauncherService]
})
export class LauncherPage implements OnInit {
  constructor(private navCtrl: NavController,
              private launcherService: LauncherService,
              private globalService: GlobalService) {
    this.globalService.showLoading();
  }

  /**
   * 初始化
   */
  ngOnInit(): void {
    this.initAndJump();
  }

  /**
   * 初始化
   */
  private initAndJump(): void {
    this.launcherService.getPage()
      .then(page => this.navCtrl.push(page, {}))
      .catch(error => {
        console.error(error);
        this.globalService.showToast(error);
      })
      .then(() => this.globalService.hideLoading());
  }
}
