import {Component, OnDestroy, OnInit} from "@angular/core";
import {AlertController, Events, NavController} from "ionic-angular";
import {MaterialsAddPage} from "../materialsadd/materialsadd";
import {GlobalService} from "../../providers/GlobalService";
import {MaterialsInfo} from "../../model/MaterialsInfo";

@Component({
  selector: 'page-materials',
  templateUrl: 'materials.html'
})

export class MaterialsPage implements OnInit, OnDestroy {

  private readonly tag: string = "[MaterialsPage]";
  public title: string = '材料登记管理';
  segmentName: string = "basicInfo";
  details: any[];
  items: MaterialsInfo[] = [];
  public needEditItem: any;

  constructor(public navCtrl: NavController,
              private globalService: GlobalService,
              private events: Events,
              public alertCtrl: AlertController) {
  }

  ngOnInit(): void {
    //订阅事件，清单加入
    this.events.subscribe(this.globalService.materialsUpdateEvent, (isSave, materials) => {
      this.segmentName = "materialsList";
      console.log(this.tag, isSave, materials);
      if (isSave) {
        this.items.push(materials);
        return;
      }

      if (!this.needEditItem) {
        return;
      }
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] == this.needEditItem) {
          this.items[i] = materials;
        }
      }
    })
  }


  ngOnDestroy(): void {
    this.events.unsubscribe(this.globalService.materialsUpdateEvent);
  }

  private searchTask() {
    console.log(this.tag + "searchTask");
    this.details = [
      {name: '维修类别', value: '紧急'},
      {name: '维修地址', value: '上海控江路1555号'},
      {name: '所属区域', value: '上海杨浦区'},
      {name: '保修内容', value: '水管破裂急需修理'}]
  }

  /**
   * 材料登记
   */
  private addMaterials() {
    this.navCtrl.push(MaterialsAddPage);
  }

  /**
   * 删除材料
   */
  private deleteMaterials(item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] == item) {
        let confirm = this.alertCtrl.create({
          title: '提示',
          message: '是否删除该材料?',
          buttons: [
            {
              text: '取消',
              handler: () => {
              }
            },
            {
              text: '确定',
              handler: () => {
                //删除
                this.items.splice(i, 1);
              }
            }
          ]
        });
        confirm.present();
      }
    }
  }

  /**
   * 修改材料
   */
  private editMaterials(item) {
    this.needEditItem = item;
    this.navCtrl.push(MaterialsAddPage, {'edit': item});
  }

  /**
   * 保存
   */
  private saveMaterials() {
    if (this.items.length == 0) {
      let alert = this.alertCtrl.create({
        title: '提示',
        subTitle: '请先添加材料',
        buttons: ['确认']
      });
      alert.present();
      this.segmentName = 'materialsList';
      return;
    }

    let prompt = this.alertCtrl.create({
      title: '提示',
      message: "请填写备注信息：",
      inputs: [
        {
          name: '备注',
          placeholder: '备注'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '保存',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}

