import {Component, OnInit} from '@angular/core';
import {AlertController, ItemSliding, NavController} from 'ionic-angular';
import {NewsDetailsPage} from "../newsdetails/newsdetails";
import {DataService} from "../../providers/DataService";
import {News} from "../../model/News";

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})

export class NewsPage implements OnInit {

  private readonly tag: string = "[NewsPage]";
  title: string = '系统公告';
  items: any[] = [];
  isShow: boolean;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public dataService: DataService) {
  }

  ngOnInit() {
    this.getNews();
  }

  private getNews() {
    this.dataService.getNews()
      .then(news => {
        console.log(this.tag + news);
        if (news.length <= 0) {
          return Promise.resolve(false);
        } else {
          this.transFormNews(news);
          return Promise.resolve(true);
        }
      })
      .then(result => this.isShow = result);
  }

  /**
   * 转换公告
   * @param news
   */
  private transFormNews(news: Array<News>) {
    for (let temp of news) {
      this.items.push({
        newsDate: this.formatDateTime(temp.pubTime),
        newsTitle: temp.title,
        newsContent: temp.content
      });
    }
  }

  /**
   * 侧滑删除某些公告
   * @param item
   */
  removeItem(event: Event, item, slidingItem: ItemSliding) {
    event.preventDefault();
    event.stopPropagation();
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] == item) {
        let confirm = this.alertCtrl.create({
          title: '提示',
          message: '是否删除该公告',
          buttons: [
            {
              text: '取消',
              handler: () => {
                console.log(this.tag + 'Disagree clicked');
                slidingItem.close();
              }
            },
            {
              text: '确定',
              handler: () => {
                this.items.splice(i, 1);
                console.log(this.tag + 'Agree clicked');
              }
            }
          ]
        });
        confirm.present();
      }
    }
  }

  /**
   * 删除所有公告
   * @param ev
   */
  onDeleteAll(ev: any) {
    let confirm = this.alertCtrl.create({
      title: '提示',
      message: '是否删除所有公告',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log(this.tag + 'Disagree clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            this.items.splice(0, this.items.length);
            console.log(this.tag + 'Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  /**
   * 跳转公告详情
   */
  onJumpDetails(item) {
    this.navCtrl.push(NewsDetailsPage, {
      title: item.newsTitle,
      time: item.newsDate,
      newsContent: item.newsContent
    });
  }

  /**
   * utc时间格式化
   * @param inputTime
   * @returns {string}
   */
  private formatDateTime(inputTime): string {
    let date = new Date(inputTime);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let month = m < 10 ? ('0' + m) : m;
    let d = date.getDate();
    let day = d < 10 ? ('0' + d) : d;
    let h = date.getHours();
    let hour = h < 10 ? ('0' + h) : h;
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let minutestr = minute < 10 ? ('0' + minute) : minute;
    let secondstr = second < 10 ? ('0' + second) : second;
    return y + '-' + month + '-' + day + ' ' + hour + ':' + minutestr + ':' + secondstr;
  };
}
