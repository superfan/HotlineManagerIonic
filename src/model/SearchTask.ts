/**
 * 查询工单接口返回数据模型
 * Created by zhangjing on 2017/7/4.
 */
export class SearchTask {
  taskNo: string;//任务编号
  sendTime: number;//派遣时间
  serialNo: string;//客服编号
  contactPhone: string;//联系电话
  happenedAddress: string;//发生地址
  reportPerson: string;//反映人
  reportType: number;//反映类别
  reportTypeText: string;//反映类别文字
  reportContent: number;//反映内容编码
  reportContentText: string;//反映内容
  resolveLimitedTime: number;//处理时限
  taskState: string;//任务状态
}
