import {Component} from '@angular/core';
import {AlertController, ItemSliding, NavController} from 'ionic-angular';
import {NewsDetailsPage} from "../newsdetails/newsdetails";

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})

export class NewsPage {
  title: string = '系统公告';
  items: any[] = [];

  constructor(public navCtrl: NavController,
                public alertCtrl:AlertController) {
    for (let i = 0; i < 5; i++) {
      this.items.push({
        newsDate: '2017.06.28',
        newsContent: '大连西路145弄8号401室。部件损坏，煤气阀松动，待检修。第' + i + '项',
      });
    }
  }

  /**
   * 侧滑删除某些公告
   * @param item
   */
  removeItem(event:Event,item,slidingItem: ItemSliding) {
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
                console.log('Disagree clicked');
                slidingItem.close();
              }
            },
            {
              text: '确定',
              handler: () => {
                this.items.splice(i, 1);
                console.log('Agree clicked');
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
            console.log('Disagree clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            this.items.splice(0, this.items.length);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  /**
   * 跳转公告详情
   */
  onJumpDetails() {
    this.navCtrl.push(NewsDetailsPage);
  }
}
