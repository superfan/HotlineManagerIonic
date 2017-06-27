import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
/**
 * Created by zhangjing on 2017/6/26.
 */
@Component({
  selector: 'page-search-result',
  templateUrl: 'searchresult.html'
})

export class SearchResultPage {

  title: string = '查询结果';
  segmentName: string = "allTasks";
  items: any[] = [];

  constructor(public navCtrl: NavController) {
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
}
