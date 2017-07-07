import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-newsdetails',
  templateUrl: 'newsdetails.html'
})

export class NewsDetailsPage {
  title: string = '公告详情';
  newsTitle: string;
  newsContent: string;
  newsTime: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.newsTitle = this.navParams.get('title');
    this.newsTime = this.navParams.get('time');
    this.newsContent = this.navParams.get('newsContent');
  }

}

