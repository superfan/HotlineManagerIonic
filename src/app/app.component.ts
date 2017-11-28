import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AppComponentService} from "./app.component.service";
import {GlobalService} from "../providers/GlobalService";
import {MyWorkPage} from "../pages/mywork/mywork";
import {DataService} from "../providers/DataService";
//import {MainPage} from "../pages/main/main";
//import {TabsPage} from "../pages/tabs/tabs";
declare let cordova: any;

@Component({
  templateUrl: 'app.html',
  providers: [AppComponentService]
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private appComponentService: AppComponentService,
              private globalService: GlobalService,
              private dataService: DataService) {
    this.rootPage = undefined;
    this.globalService.showLoading();
    platform.ready()
      .then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
        return this.appComponentService.init();
      })
      .then(page => this.rootPage = page)
      .catch(error => {
        console.error(error);
        this.globalService.showToast(error);
        this.rootPage = MyWorkPage;
      })
      .then(() => this.appComponentService.downloadConstantData())
      .catch(error => console.error(error))
      .then(() => this.globalService.hideLoading())
      .then(() => this.handleOthers());
  }

  private handleOthers(): void {
    if (this.globalService.isChrome) {
      return;
    }

    let dataService: DataService = this.dataService;
    cordova.plugins.MyPlugin.getPushMessage(
      function (data) {
        console.log(data);
        dataService.savePushMessage(data)
          .then(result => console.log(result))
          .catch(err => console.error(err));
      },
      function (error) {
        console.error(error);
      }
    );
  }
}

