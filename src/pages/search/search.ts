/**
 * Created by zhangjing on 2017/6/23.
 */
import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SearchResultPage} from "../searchresult/searchresult";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {

  public title = '查询任务';
  public searchForm: FormGroup;

  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController,
              private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      'address': ['', Validators.compose([Validators.minLength(2)])],
      'telephone': ['', Validators.compose([Validators.minLength(4)])],
      'customerNum': [''],
      'taskNum': [''],
      'taskState': [''],
      'reflectType': [''],
      'reflectPerson': [''],
      'dispatchTime': [''],
    });
  }

  /**
   * 显示反映类型
   */
  showReflectType() {
    let alert = this.alertCtrl.create();
    alert.setTitle('反映类别');
    let arrInputs: any = [{type: 'radio', label: '供水', value: '供水'},
      {type: 'radio', label: '排水', value: '排水'}];

    for (let i = 0; i < arrInputs.length; i++) {
      alert.addInput(arrInputs[i]);
    }
    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        this.searchForm.patchValue({reflectType: data});
      }
    });
    alert.present();
  }

  /**
   * 显示任何类型
   */
  showTaskType() {
    let alert = this.alertCtrl.create();
    alert.setTitle('任务状态');
    let arrInputs: any = [{type: 'radio', label: '已响应', value: '已响应'},
      {type: 'radio', label: '已派工', value: '已派工'}, {type: 'radio', label: '已出发', value: '已出发'}];

    for (let i = 0; i < arrInputs.length; i++) {
      alert.addInput(arrInputs[i]);
    }
    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        this.searchForm.patchValue({taskState: data});
      }
    });
    alert.present();
  }

  /**
   * 重置
   * @param ev
   */
  onReset(ev: any) {
    this.searchForm.setValue({
      address: '', telephone: '', customerNum: '', taskNum: '',
      taskState: '', reflectType: '', reflectPerson: '', dispatchTime: ''
    });
  }

  /**
   * 查询
   * @param searchInfo
   */
  onSearchClick(searchInfo) {
    if (searchInfo['address'] == '' && searchInfo['telephone'] == '' && searchInfo['customerNum'] == ''
      && searchInfo['taskNum'] == '' && searchInfo['taskState'] == '' && searchInfo['reflectType'] == ''
      && searchInfo['reflectPerson'] == '' && searchInfo['dispatchTime'] == '') {
      let alert = this.alertCtrl.create({
        title: '提示：',
        subTitle: '请至少输入一个条件',
        buttons: ['确定']
      });
      alert.present();
      console.log('pls fill in one condition');
    } else {
      console.log('success');
      this.navCtrl.push(SearchResultPage);
    }
  }
}
