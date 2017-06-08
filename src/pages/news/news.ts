import { Component, ViewChild } from '@angular/core';
import { Content, NavController } from 'ionic-angular';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})

export class NewsPage {
  title: string = '公告';
  items: number[] = [
    1, 2, 3, 4, 5, 6
  ];

  constructor(public navCtrl: NavController) {

  }
}
