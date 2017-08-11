import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AppComponentService} from "./app.component.service";
import {GlobalService} from "../providers/GlobalService";
import {TabsPage} from "../pages/tabs/tabs";

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
              private globalService: GlobalService) {
    this.rootPage = undefined;
    this.globalService.showLoading();
    platform.ready()
      .then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
        return appComponentService.init();
      })
      .then(page => this.rootPage = TabsPage)
      .catch(error => {
        console.error(error);
        this.globalService.showToast(error);
      })
      .then(() => this.globalService.hideLoading());
  }
}

