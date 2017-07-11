/**
 * Created by zhangjing on 2017/6/23.
 */
import {Component, OnInit} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SearchResultPage} from "../searchresult/searchresult";
import {SearchTaskRequest} from "../../model/SearchTaskRequest";
import {DataService} from "../../providers/DataService";
import {Word} from "../../model/Word";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage implements OnInit {
  private readonly tag: string = "[SearchPage]";
  public title = '查询任务';
  public searchForm: FormGroup;
  public reflectTypes: Word[];
  myDate: string;

  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController,
              private formBuilder: FormBuilder,
              private dataService: DataService) {
  }

  ngOnInit() {
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
    this.getReflectTypes();
  }


  /**
   * 获得反映类别
   */
  private getReflectTypes() {
    this.dataService.getReflectType()
      .then(words => {
        console.log(this.tag + words);
        if (words.length <= 0) {
          return Promise.resolve(false);
        } else {
          this.reflectTypes = words;
          return Promise.resolve(true);
        }
      })
  }


  /**
   * 显示反映类型
   */
  showReflectType() {
    let alert = this.alertCtrl.create();
    alert.setTitle('反映类别');
    let arrInputs: any = [];

    for (let i = 0; i < this.reflectTypes.length; i++) {
      arrInputs.push({type: 'radio', label: this.reflectTypes[i].wName, value: this.reflectTypes[i].wName});
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
    let arrInputs: any = [{type: 'radio', label: '已派遣', value: '已派遣'},
      {type: 'radio', label: '接收', value: '接收'}, {type: 'radio', label: '已派工', value: '已派工'},
      {type: 'radio', label: '已出发', value: '已出发'}, {type: 'radio', label: '已到场', value: '已到场'},
      {type: 'radio', label: '已处理', value: '已处理'}, {type: 'radio', label: '已退单', value: '已退单'},
      {type: 'radio', label: '退单重派', value: '退单重派'}, {type: 'radio', label: '退单结束', value: '退单结束'},
      {type: 'radio', label: '已销单', value: '已销单'}, {type: 'radio', label: '督办', value: '督办'}];

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
        buttons: ['确定']
      });
      alert.setSubTitle('请至少输入一个条件');
      alert.present();
      return;
    }
    let utcSendTime = Date.parse(this.myDate) - 28800000;
    let taskState = this.transformTaskState(searchInfo['taskState']);
    let reflectType = this.transformRefelctType(searchInfo['reflectType'])
    let temp = new SearchTaskRequest();
    temp.happenedAddress = searchInfo['address'];
    temp.contactPhone = searchInfo['telephone'];
    temp.serialNo = searchInfo['customerNum'];
    temp.taskNo = searchInfo['taskNum'];
    temp.taskState = (searchInfo['taskState'] != '' && taskState != undefined) ? taskState : searchInfo['taskState'];
    temp.reportType = (searchInfo['taskState'] != '' && taskState != undefined) ? reflectType : searchInfo['reflectType'];
    temp.reportPerson = searchInfo['reflectPerson'];
    temp.sendTime = utcSendTime;
    this.navCtrl.push(SearchResultPage, {'tasks': temp});
  }


  /**
   * 转换任务状态
   * @param strState
   * @returns {number}
   */
  private transformTaskState(strState: string): number {
    let taskState: number;
    switch (strState) {
      case '已派遣':
        taskState = 0;
        break;
      case '接收':
        taskState = 1;
        break;
      case '已响应':
        taskState = 6;
        break;
      case '已派工':
        taskState = 2;
        break;
      case '已出发':
        taskState = 3;
        break;
      case '已到场':
        taskState = 4;
        break;
      case '已处理':
        taskState = 5;
        break;
      case '已退单':
        taskState = -1;
        break;
      case '退单重派':
        taskState = -2;
        break;
      case '退单结束':
        taskState = -3;
        break;
      case '已销单':
        taskState = 99;
        break;
      case '督办':
        taskState = -99;
        break;
    }
    return taskState;
  }

  private transformRefelctType(strReflectType: string): number {
    let refelectType: number;
    for (let temp of this.reflectTypes) {
      if (strReflectType == temp.wName) {
        refelectType = temp.wid;
        break;
      }
    }
    return refelectType;
  }
}
