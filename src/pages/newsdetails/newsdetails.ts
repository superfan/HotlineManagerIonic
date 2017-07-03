import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-newsdetails',
  templateUrl: 'newsdetails.html'
})

export class NewsDetailsPage {
  title: string = '公告详情';

  constructor(public navCtrl: NavController) {
  }

}

