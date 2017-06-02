import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})

export class MainPage {
  title: string = '主界面';
  imgWidth: number = 80;
  imgHeight: number = 80;
  items: any[] = [
    {
      id: [1, 2, 3],
      src: ['assets/img/ic_task.png', 'assets/img/ic_map.png', 'assets/img/ic_searching.png'],
      name: ['我的任务', '地图', '查询'],
      active: [true, true, true]
    },
    {
      id: [4, 5, 6],
      src: ['assets/img/ic_news.png', 'assets/img/ic_help.png', 'assets/img/ic_setting.png'],
      name: ['公告', '帮助', '设置'],
      active: [true, true, false]
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  onSelect(id) {
    console.log(id);
  }
}
