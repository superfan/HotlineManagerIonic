import {Component, OnInit} from "@angular/core";
import {NavController} from "ionic-angular";
import {GlobalService} from "../../providers/GlobalService";
import {SettingPage} from "../setting/setting";
import {NewsPage} from "../news/news";
/**
 * Created by zhangjing on 2017/8/23.
 */
enum ItemId {
  News,
  Setting
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
  templateUrl: 'more.html'
})


export class MorePage implements OnInit {

  private readonly tag: string = "[MorePage]";
  title: string = '更多';
  imgWidth: number = 64;
  imgHeight: number = 64;
  listItems: Item[] = [];

  constructor(public navCtrl: NavController,
              public globalService: GlobalService) {
  }

  /**
   * 初始化list
   */
  private initListItem(): void {

    this.listItems.push({
      id: ItemId.News,
      src: 'assets/img/ic_news.png',
      name: '公告',
      active: true,
      count: 0
    });

    this.listItems.push({
      id: ItemId.Setting,
      src: 'assets/img/ic_setting.png',
      name: '设置',
      active: true,
      count: 0
    })
  }

  ngOnInit(): void {
    this.initListItem();
  }

  /**
   * 选择功能按钮
   * @param id
   */
  itemSelected(id: number): void {
    console.log(id);
    switch (id) {
      case ItemId.News:
        this.navCtrl.push(NewsPage);
        break;
      case ItemId.Setting:
        this.navCtrl.push(SettingPage);
        break;
      default:
        break;
    }
  }

}
