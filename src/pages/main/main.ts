import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyWorkPage } from "../mywork/mywork";

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})

export class MainPage {
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
      src: 'assets/img/ic_help.png',
      name: '帮助',
      active: false,
      count: 0
    }
  ];

  constructor(public navCtrl: NavController) {
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

  itemSelected(id: number) {
    console.log(id);
    switch (id) {
      case 1:
        this.navCtrl.push(MyWorkPage);
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      default:
        break;
    }
  }

  selectSettings(event) {
    this.gridStyle = !this.gridStyle;
  }
}
