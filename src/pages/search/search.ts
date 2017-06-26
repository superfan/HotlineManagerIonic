/**
 * Created by zhangjing on 2017/6/23.
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {

  public title='查询任务';
  public searchForm: FormGroup;

  constructor(public navCtrl: NavController,
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
    // let address = searchInfo['address'];
    // let telephone = searchInfo['telephone'];
  }
}
