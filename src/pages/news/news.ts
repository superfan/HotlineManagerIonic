import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})

export class NewsPage {
  title: string = '公告';
  items: number[] = [
    1, 2, 3, 4, 5, 6
  ];

  image: String;

  constructor(public navCtrl: NavController) {
    this.image = 'https://randomuser.me/api/portraits/women/79.jpg';
  }
}
