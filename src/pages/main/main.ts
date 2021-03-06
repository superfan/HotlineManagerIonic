import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MyWorkPage} from "../mywork/mywork";
import {NewsPage} from "../news/news";
import {StationWorkPage} from "../stationwork/stationwork";
import {SearchPage} from "../search/search";
//import {DataService} from "../../providers/DataService";
import {SettingPage} from "../setting/setting";
import {MyHistory} from '../history/myhistory';
import {GlobalService} from "../../providers/GlobalService";
//import {ConfigService} from "../../providers/ConfigService";
import {MapPage} from "../map/map";
import {MapParam, MapType} from "../../model/MapParam";
import {MaterialsPage} from "../materials/materials";

enum ItemId {
  MyWork,
  History,
  Map,
  StationWork,
  Search,
  News,
  Materials
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

export class MainPage implements OnInit, OnDestroy {
  private readonly tag: string = "[MainPage]";

  title: string = '主界面';
  imgWidth: number = 64;
  imgHeight: number = 64;
  gridStyle: boolean = true;

  gridItems: Item[][] = [];
  listItems: Item[] = [];

  constructor(public navCtrl: NavController,
              //private events: Events,
              //private dataService: DataService,
              private globalService: GlobalService) {
  }

  /**
   * 初始化
   */
  ngOnInit(): void {
    console.log(this.tag, "ngOnInit");
    this.initListItem();
    this.initGirdItems();
    // this.subscribeEvent(this.events);
    // this.initGridStyle();
    // this.initData();
  }

  /**
   * 销毁
   */
  ngOnDestroy(): void {
    console.log(this.tag, "ngOnDestroy");
    //this.events.unsubscribe(this.globalService.mainUpdateEvent);
    //this.dataService.destroy();
  }

  /**
   * 选择功能按钮
   * @param id
   */
  itemSelected(id: number): void {
    console.log(id);
    switch (id) {
      case ItemId.MyWork:
        this.navCtrl.push(MyWorkPage);
        break;
      case ItemId.History:
        this.navCtrl.push(MyHistory);
        break;
      case ItemId.Map:
        this.navCtrl.push(MapPage, new MapParam(MapType.View, undefined, undefined));
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
      case ItemId.Materials:
        this.navCtrl.push(MaterialsPage);
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
    this.navCtrl.push(SettingPage);
    // this.gridStyle = !this.gridStyle;
    // this.configService.setGridStyle(this.gridStyle)
    //   .then(result => console.log(result))
    //   .catch(error => console.error(error));
  }

  /**
   * 初始化list
   */
  private initListItem(): void {
    this.listItems.push({
      id: ItemId.MyWork,
      src: 'assets/img/ic_mywork.png',
      name: '我的任务',
      active: true,
      count: 0
    });

    this.listItems.push({
      id: ItemId.History,
      src: 'assets/img/ic_history.png',
      name: '历史记录',
      active: true,
      count: 0
    });

    this.listItems.push({
      id: ItemId.Map,
      src: 'assets/img/ic_map.png',
      name: '地图',
      active: true,
      count: 0
    });

    if (!this.globalService.isWorker) {
      this.listItems.push({
        id: ItemId.StationWork,
        src: 'assets/img/ic_stationwork.png',
        name: '站点任务',
        active: true,
        count: 0
      });

      this.listItems.push({
        id: ItemId.Search,
        src: 'assets/img/ic_searching.png',
        name: '查询',
        active: true,
        count: 0
      });
    }

    this.listItems.push({
      id: ItemId.News,
      src: 'assets/img/ic_news.png',
      name: '公告',
      active: true,
      count: 0
    });

    this.listItems.push({
      id: ItemId.Materials,
      src: 'assets/img/ic_add_materials.png',
      name: '材料登记',
      active: true,
      count: 0
    })
  }

  /**
   * 初始化grid
   */
  private initGirdItems(): void {
    let rowData: Item[] = [];
    for (let item of this.listItems) {
      if (rowData.length == 3) {
        this.gridItems.push(rowData);
        rowData = [];
      }
      rowData.push(item);
    }
    this.gridItems.push(rowData);
  }

  /**
   * 订阅消息
   * @param events
   */
  // private subscribeEvent(events: Events): void {
  //   events.subscribe(this.globalService.mainUpdateEvent, (mainUpdateEvent: MainUpdateEvent) => {
  //     switch (mainUpdateEvent.type) {
  //       case 'myWorkCount':
  //         this.listItems[ItemId.MyWork].count = mainUpdateEvent.count;
  //         break;
  //       case 'newsCount':
  //         this.listItems[ItemId.News].count = mainUpdateEvent.count;
  //         break;
  //       case 'stationWorkCount':
  //         this.listItems[ItemId.StationWork].count = mainUpdateEvent.count;
  //         break;
  //       case 'gridStyle':
  //         this.gridStyle = mainUpdateEvent.gridStyle;
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // }

  /**
   * 设置九宫格或列表
   */
  // private initGridStyle(): void {
  //   this.configService.isGridStyle()
  //     .then(result => this.gridStyle = result)
  //     .catch(error => {
  //       console.error(error);
  //       this.gridStyle = true;
  //     });
  // }

  /**
   * 初始化数据
   */
  // private initData(): void {
  //   this.globalService.showLoading('初始化数据...');
  //   this.dataService.init()
  //     .then(result => {
  //       console.log(result);
  //     })
  //     .catch(error => console.error(error))
  //     .then(() => {
  //       this.globalService.hideLoading();
  //       this.syncData();
  //     });
  // }

  /**
   * 同步数据
   */
  // private syncData(): void {
  //   this.globalService.showLoading('同步数据...');
  //   this.dataService.downloadWords()
  //     .then(result => {
  //       console.log(this.tag, "syncData: " + result);
  //     })
  //     .catch(error => {
  //       console.log(this.tag, error);
  //     })
  //     .then(() => this.globalService.hideLoading());
  // }
}
