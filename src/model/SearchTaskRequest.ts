/**
 * 查询工单检索模型
 * Created by zhangjing on 2017/7/4.
 */
export class SearchTaskRequest {
  happenedAddress: string;//发生地址
  contactPhone: string;//联系电话
  serialNo: string;//客服编号
  taskNo: string;//任务编号
  taskState: number;//任务状态
  reportType: number;//反映类别
  reportPerson: string;//反映人
  sendTime: number;//派遣时间
}
