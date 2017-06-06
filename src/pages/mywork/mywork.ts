import { Component, ViewChild } from '@angular/core';
import { Content, NavController } from 'ionic-angular';

@Component({
  selector: 'page-mywork',
  templateUrl: 'mywork.html'
})

export class MyWorkPage {
  @ViewChild(Content) content: Content;
  title: string = '任务列表';
  showToolbar: boolean = false;
  showFab: boolean = false;

  items = [];

  gridItems = [
    { name: '任务描述', style: 'top'},
    { name: '创建时间', style: 'top'},
    { name: '派发时间', style: 'top'},
    { name: '接单时间', style: 'top'},
    { name: '出发时间', style: 'top'},
    { name: '到场时间', style: 'top'},
    { name: '回复时间', style: 'top'},
    { name: '完工时间', style: 'top-bottom'},
  ];

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 10; i++) {
      this.items.push( this.items.length );
    }
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  toggleToolbar(ev: any) {
    this.showToolbar = !this.showToolbar;
    this.content.resize();
  }

  getItems(ev: any) {

  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      this.showFab = true;

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }


  doScroll2Top(ev: any) {
    this.content.scrollToTop();
  }

}
