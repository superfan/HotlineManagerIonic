import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})

export class MainPage {
  title: string = '主界面';
  imgWidth: number = 64;
  imgHeight: number = 64;
  gridStyle: boolean = false;

  gridItems: any[] = [];

  listItems: any[] = [
    {
      id: 1,
      src: 'assets/img/ic_task.png',
      name: '我的任务',
      active: true
    },
    {
      id: 2,
      src: 'assets/img/ic_map.png',
      name: '地图',
      active: true
    },
    {
      id: 3,
      src: 'assets/img/ic_searching.png',
      name: '查询',
      active: true
    },
    {
      id: 4,
      src: 'assets/img/ic_news.png',
      name: '公告',
      active: true
    },
    {
      id: 5,
      src: 'assets/img/ic_help.png',
      name: '帮助',
      active: true
    },
    {
      id: 6,
      src: 'assets/img/ic_setting.png',
      name: '设置',
      active: false
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

  itemSelected(id) {
    console.log(id);
  }

  selectSettings(event) {
    this.gridStyle = !this.gridStyle;
  }
}
