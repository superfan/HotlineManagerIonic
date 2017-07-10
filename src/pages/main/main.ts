import {Component, AfterViewInit, OnDestroy} from '@angular/core';
import {NavController, LoadingController, Events} from 'ionic-angular';
import {MyWorkPage} from "../mywork/mywork";
import {NewsPage} from "../news/news";
import {StationWorkPage} from "../stationwork/stationwork";
import {SearchPage} from "../search/search";
import {DataService} from "../../providers/DataService";
import {SettingPage} from "../setting/setting";
import {GlobalService, UpdateEvent} from "../../providers/GlobalService";

enum ItemId {
  MyWork = 1,
  History,
  Map,
  Search,
  StationWork,
  News
}

interface Item {
  id: ItemId;
  src: string;
  name: string;
  active: boolean;
  count: number;
}

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})

export class MainPage implements AfterViewInit, OnDestroy {
  private readonly tag: string = "[MainPage]";

  title: string = '主界面';
  imgWidth: number = 64;
  imgHeight: number = 64;
  gridStyle: boolean = true;

  gridItems: Item[][] = [];

  listItems: Item[] = [
    {
      id: ItemId.MyWork,
      src: 'assets/img/ic_mywork.png',
      name: '我的任务',
      active: true,
      count: 0
    },
    {
      id: ItemId.History,
      src: 'assets/img/ic_history.png',
      name: '历史记录',
      active: true,
      count: 0
    },
    {
      id: ItemId.Map,
      src: 'assets/img/ic_map.png',
      name: '地图',
      active: true,
      count: 0
    },
    {
      id: ItemId.Search,
      src: 'assets/img/ic_searching.png',
      name: '查询',
      active: true,
      count: 0
    },
    {
      id: ItemId.StationWork,
      src: 'assets/img/ic_stationwork.png',
      name: '站点任务',
      active: true,
      count: 0
    },
    {
      id: ItemId.News,
      src: 'assets/img/ic_news.png',
      name: '公告',
      active: true,
      count: 0
    }
  ];

  constructor(public navCtrl: NavController,
              private loadingCtrl: LoadingController,
              private events: Events,
              private dataService: DataService,
              private globalService: GlobalService) {
    let rowData: Item[] = [];
    for (let item of this.listItems) {
      if (rowData.length == 3) {
        this.gridItems.push(rowData);
        rowData = [];
      }
      rowData.push(item);
    }
    this.gridItems.push(rowData);

    this.subscribeEvent(events);
  }

  /**
   * 初始化
   */
  ngAfterViewInit(): void {
    console.log(this.tag, "ngAfterViewInit");

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

  /**
   * 销毁
   */
  ngOnDestroy() {
    console.log(this.tag, "ngOnDestroy");
    this.events.unsubscribe(this.globalService.mainUpdateEvent);
  }

  itemSelected(id: number): void {
    console.log(id);
    switch (id) {
      case ItemId.MyWork:
        this.navCtrl.push(MyWorkPage);
        break;
      case ItemId.History:
        break;
      case ItemId.Map:
        break;
      case ItemId.Search:
        this.navCtrl.push(SearchPage);
        break;
      case ItemId.StationWork:
        this.navCtrl.push(StationWorkPage);
        break;
      case ItemId.News:
        this.navCtrl.push(NewsPage);
        break;
      default:
        break;
    }
  }

  /**
   * 选择设置按钮
   * @param event
   */
  selectSettings(event: any): void {
    //this.gridStyle = !this.gridStyle;
    this.navCtrl.push(SettingPage);
  }

  /**
   * 订阅消息
   * @param events
   */
  private subscribeEvent(events: Events): void {
    events.subscribe(this.globalService.mainUpdateEvent, (updateEvent: UpdateEvent) => {
      switch (updateEvent.type) {
        case 'myWorkCount':
          this.listItems[0].count = updateEvent.count;
          break;
        case 'newsCount':
          break;
        case 'stationWorkCount':
          break;
        case 'gridStyle':
          this.gridStyle = updateEvent.gridStyle;
          break;
        default:
          break;
      }
    });
  }
}
