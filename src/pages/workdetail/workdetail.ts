import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-workdetail',
  templateUrl: 'workdetail.html'
})

export class WorkDetailPage {
  title: string = '工单处理';
  items: number[] = [
    1, 2, 3, 4, 5, 6
  ];
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

  replies: any[] = [
    { name:  '处理时间', value: '2017-06-19 14:20:00', isActive: false },
    { name:  '处理部门', value: '水务集团', isActive: false },
    { name:  '处理人', value: '管理员', isActive: false },
    { name:  '处理类别', value: '用水问题（供水）［供水］', isActive: true },
    { name:  '处理内容', value: '单位压力不足', isActive: true },
    { name:  '发生原因', value: '用水问题', isActive: true },
    { name:  '解决措施', value: '用水问题', isActive: true },
    { name:  '处理结果', value: '实际解决', isActive: true },
    { name:  '处理备注', value: '备注可为空', isActive: true }
  ];

  people: any[] = [
    { picture: 'assets/img/ic_mywork.png', name: 'abc' },
    { picture: 'assets/img/ic_mywork.png', name: 'bcd' },
    { picture: 'assets/img/ic_mywork.png', name: 'efd' },
  ];

  image: String;

  constructor(public navCtrl: NavController) {
    this.image = "https://randomuser.me/api/portraits/women/79.jpg";
  }
}

