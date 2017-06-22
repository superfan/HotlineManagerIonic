import { Component, ViewChild } from '@angular/core';
import { Content, NavController, AlertController } from 'ionic-angular';
import { WorkInfoPage } from "../workinfo/workinfo";

@Component({
  selector: 'page-stationwork',
  templateUrl: 'stationwork.html'
})

export class StationWorkPage {
  @ViewChild(Content) content: Content;

  disableColor: string = 'gray';
  enableColor: string = 'primary';
  undispatchedName: string = '未派工';
  dispatchedName: string = '24小时内已派工';

  title: string= '站点任务';
  subTitle: string = this.undispatchedName;
  showToolbar: boolean = false;
  showFab: boolean = false;

  items: any[] = [];

  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {
    for (let i = 0; i < 10; i++) {
      this.items.push({
        customerId: this.items.length,
        taskId: this.items.length,
        contents: [
          { name: '发生地址', value: '上海市杨浦区控江路1555号12楼' },
          { name: '联系电话', value: '123456789' },
          { name: '反映人', value: '上海三高' },
          { name: '反映类别', value: '咨询（排水）' },
          { name: '反映内容', value: '催办信息排水咨询' },
          { name: '派遣时间', value: '2017-06-20 16:00:00' },
          { name: '处理时限', value: '2017-06-21 12:00:00' },
          { name: '任务状态', value: '已派遣' }
        ]
      });
    }
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  itemSelected(work: any, index: number) {
    console.log("Selected Item", index);
    // switch (work.processes[index].event) {
    //   case 'accept':
    //     this.accept(work);
    //     break;
    //   case 'go':
    //     this.go(work);
    //     break;
    //   case 'arrive':
    //     this.arrive(work);
    //     break;
    //   case 'reply':
    //     this.reply(work);
    //     break;
    //   case 'reject':
    //     this.reject(work);
    //     break;
    //   case 'delay':
    //     this.delay(work);
    //     break;
    //   case 'cancel':
    //     this.cancel(work);
    //     break;
    // }
  }

  onSearch(ev: any) {
    this.showToolbar = !this.showToolbar;
    this.content.resize();
  }

  onFilter(ev: any) {
    let alert = this.alerCtrl.create();
    alert.setTitle('派工类型');

    if (this.subTitle === this.undispatchedName) {
      alert.addInput({
        type: 'radio',
        label: this.undispatchedName,
        value: '1',
        checked: true
      });

      alert.addInput({
        type: 'radio',
        label: this.dispatchedName,
        value: '2'
      });
    } else {
      alert.addInput({
        type: 'radio',
        label: this.undispatchedName,
        value: '1'
      });

      alert.addInput({
        type: 'radio',
        label: this.dispatchedName,
        value: '2',
        checked: true
      });
    }
    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        console.log('Radio data:', data);
        // this.testRadioOpen = false;
        // this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      // this.testRadioOpen = true;
    });
  }

  getItems(ev: any) {

  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push({
          customerId: this.items.length,
          taskId: this.items.length,
          contents: [
            { name: '发生地址', value: '上海市杨浦区控江路1555号12楼' },
            { name: '联系电话', value: '123456789' },
            { name: '反映人', value: '上海三高' },
            { name: '反映类别', value: '咨询（排水）' },
            { name: '反映内容', value: '催办信息排水咨询' },
            { name: '派遣时间', value: '2017-06-20 16:00:00' },
            { name: '处理时限', value: '2017-06-21 12:00:00' },
            { name: '任务状态', value: '已派遣' }
          ]
        });
      }

      this.showFab = true;

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }


  doScroll2Top(ev: any) {
    this.content.scrollToTop();
  }

  onDispatch(work: any) {
    this.navCtrl.push(WorkInfoPage);
  }

  onClose(work: any) {

  }
}
