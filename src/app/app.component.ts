import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AppComponentService} from "./app.component.service";
import {GlobalService} from "../providers/GlobalService";

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
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      appComponentService.getRootPage()
        .then(page => this.rootPage = page)
        .catch(error => {
          console.error(error);
          globalService.showToast(error);
        });
    });
  }
}

