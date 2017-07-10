import {Component, AfterViewInit} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {MyWorkPage} from "../mywork/mywork";
import {NewsPage} from "../news/news";
import {StationWorkPage} from "../stationwork/stationwork";
import {SearchPage} from "../search/search";
import {DataService} from "../../providers/DataService";
import {SettingPage} from "../setting/setting";
import {GlobalService} from "../../providers/GlobalService";
import {Word} from "../../model/Word";

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})

export class MainPage implements AfterViewInit {
  private readonly tag: string = "[MainPage]";

  title: string = '主界面';
  imgWidth: number = 64;
  imgHeight: number = 64;
  gridStyle: boolean = true;

  gridItems: any[] = [];

  listItems: any[] = [
    {
      id: 1,
      src: 'assets/img/ic_mywork.png',
      name: '我的任务',
      active: true,
      count: 10
    },
    {
      id: 2,
      src: 'assets/img/ic_map.png',
      name: '地图',
      active: true,
      count: 0
    },
    {
      id: 3,
      src: 'assets/img/ic_searching.png',
      name: '查询',
      active: true,
      count: 0
    },
    {
      id: 4,
      src: 'assets/img/ic_stationwork.png',
      name: '站点任务',
      active: true,
      count: 13
    },
    {
      id: 5,
      src: 'assets/img/ic_news.png',
      name: '公告',
      active: true,
      count: 30
    },
    {
      id: 6,
      src: 'assets/img/ic_home_setting.png',
      name: '设置',
      active: true,
      count: 0
    }
  ];


  constructor(public navCtrl: NavController,
              private loadingCtrl: LoadingController,
              private dataService: DataService,
              private globalService: GlobalService) {
    let rowData = [];
    for (let item of this.listItems) {
      if (rowData.length == 3) {
        this.gridItems.push(rowData);
        rowData = [];
      }
      rowData.push(item);
    }
    this.gridItems.push(rowData);
  }

  ngAfterViewInit(): void {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();
    this.dataService.getAllWords()
      .then(words => {
        console.log(this.tag, "get all words");
        loader.dismiss();
        // if (this.globalService.isChrome) {
        //   this.globalService.words = words;
        // }
      })
      .catch(error => {
        console.log(this.tag, error);
        loader.dismiss();
      });
  }

  itemSelected(id: number) {
    console.log(id);
    switch (id) {
      case 1:
        this.navCtrl.push(MyWorkPage);
        break;
      case 2:
        break;
      case 3:
        this.navCtrl.push(SearchPage);
        break;
      case 4:
        this.navCtrl.push(StationWorkPage);
        break;
      case 5:
        this.navCtrl.push(NewsPage);
        break;
      case 6:
        this.navCtrl.push(SettingPage);
        break;
      default:
        break;
    }
  }

  selectSettings(event) {
    this.gridStyle = !this.gridStyle;
  }
}
