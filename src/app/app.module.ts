import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {WelcomePage} from "../pages/welcome/welcome";
import {LoginPage} from "../pages/login/login";
import {MainPage} from '../pages/main/main';
import {MyWorkPage} from '../pages/mywork/mywork';
import {NewsPage} from "../pages/news/news";
import {WorkDetailPage} from "../pages/workdetail/workdetail";
import {StationWorkPage} from "../pages/stationwork/stationwork";
import {WorkInfoPage} from "../pages/workinfo/workinfo";


import {File} from "@ionic-native/file";
import {FileService} from "../providers/FileService";
import {Transfer} from "@ionic-native/transfer";
import {StorageService} from "../providers/StorageService";
import {HttpModule} from "@angular/http";
import {AppVersion} from "@ionic-native/app-version";
import {Zip} from "@ionic-native/zip";
import {ConfigService} from "../providers/ConfigService";
import {FileOpener} from "@ionic-native/file-opener";
import {DataService} from "../providers/DataService";
import {DownloadService} from "../providers/DownloadService";
import {GlobalService} from "../providers/GlobalService";
import {UploadService} from "../providers/UploadService";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    LoginPage,
    MainPage,
    MyWorkPage,
    WorkDetailPage,
    StationWorkPage,
    WorkInfoPage,
    NewsPage
  ],
  imports: [
    BrowserModule,
    [HttpModule],
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    LoginPage,
    MainPage,
    MyWorkPage,
    WorkDetailPage,
    StationWorkPage,
    WorkInfoPage,
    NewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Transfer,
    FileService,
    AppVersion,
    Zip,
    StorageService,
    FileOpener,
    ConfigService,
    HttpModule,
    DataService,
    DownloadService,
    UploadService,
    GlobalService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
