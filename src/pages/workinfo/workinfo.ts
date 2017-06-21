import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-workinfo',
  templateUrl: 'workinfo.html'
})

export class WorkInfoPage {
  title: string = '任务详情';

  segmentName: string = "detailInfo";

  details: any[] = [
    { name:  '联系人名', value: '上海三高'},
    { name:  '联系电话', value: '123456789'},
    { name:  '反映类别', value: '水质问题（供水）'},
    { name:  '反映内容', value: '水热'},
    { name:  '发生地址', value: '上海市杨浦区控江路1555号12楼上海市杨浦区控江路1555号12楼上海市杨浦区控江路1555号12楼'},
    { name:  '发生时间', value: '2017-06-19 14:30:00'},
    { name:  '受理备注', value: '上海三高测试'},
    { name:  '开始时间', value: '2017-06-19 14:00:00'},
    { name:  '结束时间', value: '2017-06-19 14:30:00'},
    { name:  '到场时限', value: '2017-06-19 14:10:00'},
    { name:  '处理时限', value: '2017-06-19 14:20:00'},
    { name:  '延时时限', value: '2017-06-19 14:15:00'},
    { name:  '派遣站点', value: '水务集团'},
    { name:  '派遣人', value: '热线管理员'},
    { name:  '派遣备注', value: '尽快处理'}
  ];

  dispatches: any[] = [
    { name:  '派工编号', value: 'RW1700000011', isActive: false },
    { name:  '施工人员', value: '请选择施工人员', isActive: true },
    { name:  '施工时间', value: '2017-06-19 14:15:00', isActive: true },
    { name:  '处理备注', value: '备注可为空', isActive: true }
  ];

  constructor(public navCtrl: NavController) {

  }

  onDispatch(ev: any) {

  }
}
