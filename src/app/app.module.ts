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
import {Network} from "@ionic-native/network";
import {SearchPage} from "../pages/search/search";
import {AppPreferences} from "@ionic-native/app-preferences";
import {SearchResultPage} from "../pages/searchresult/searchresult";
import {SearchDetailsPage} from "../pages/searchdetail/searchdetails";
import {NewsDetailsPage} from "../pages/newsdetails/newsdetails";
import {SettingPage} from "../pages/setting/setting";


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
    NewsPage,
    NewsDetailsPage,
    SearchPage,
    SearchResultPage,
    SearchDetailsPage,
    SettingPage
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
    NewsPage,
    NewsDetailsPage,
    SearchPage,
    SearchResultPage,
    SearchDetailsPage,
    SettingPage
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
    AppPreferences,
    FileOpener,
    ConfigService,
    HttpModule,
    Network,
    DataService,
    DownloadService,
    UploadService,
    GlobalService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
