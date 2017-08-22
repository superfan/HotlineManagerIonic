import {Component, OnDestroy, OnInit} from "@angular/core";
import {AlertController, Events, NavController, NavParams, ToastController} from "ionic-angular";
import {MaterialsAddPage} from "../materialsadd/materialsadd";
import {GlobalService} from "../../providers/GlobalService";
import {DataMaterialInfo, MaterialsInfo, UploadMaterials} from "../../model/MaterialsInfo";
import {DataService} from "../../providers/DataService";
import {MaintainInfo} from "../../model/MaintainInfo";

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
  private taskId: string;
  private isShowButtons: boolean = true;

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private globalService: GlobalService,
              private dataService: DataService,
              private toastCtrl: ToastController,
              private events: Events,
              public alertCtrl: AlertController) {
    this.taskId = this.navParams.data;
  }

  ngOnInit(): void {

    this.dataService.getMaintainInfo(this.taskId)
      .then(result => {
        if (result.serialNumber == this.taskId) {
          this.details = [
            {name: '维修类别', value: result.maintenanceType},
            {name: '维修地址', value: result.maintenanceAddress},
            {name: '所属区域', value: result.area},
            {name: '报修内容', value: result.repairContent}]
        }
      })
      .catch(error => {
        console.log(error);
      })

    /**
     * 获得该条工单的材料列表清单
     */
    this.dataService.getMaterialInfo(this.taskId)
      .then(result => {
        console.log(this.tag, result);
        this.items = result.infos;
        this.isShowButtons = result.uploadFlag == this.globalService.uploadedFlagForLocal;
      })
      .catch(error => {
        console.log(this.tag, error);
      })

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

    let uploadInfoArr: UploadMaterials[] = [];
    let uploadMaterial;
    for (let item of this.items) {
      uploadMaterial = new UploadMaterials();
      uploadMaterial.userId = this.globalService.userId;
      uploadMaterial.serialNumber = this.taskId;
      uploadMaterial.materialCategory = item.category.id;
      uploadMaterial.materialType = item.type.id;
      uploadMaterial.materialSize = item.size.id;
      uploadMaterial.manufacturer = item.productor.id;
      uploadMaterial.materialUnit = item.unit.id;
      uploadMaterial.count = item.count;
      uploadMaterial.remark = item.remark;
      uploadInfoArr.push(uploadMaterial);
    }
    if (!uploadInfoArr || uploadInfoArr.length <= 0) {
      return;
    }

    let confirm = this.alertCtrl.create({
      title: '提示',
      message: '确认保存上传？',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            let data = new DataMaterialInfo();
            data.taskId = this.taskId;
            data.uploadFlag = this.globalService.uploadedFlagForLocal;
            data.infos = uploadInfoArr;
            this.dataService.saveMaterialInfo(data)
              .then(result => {
                console.log(this.tag, result);
                let toast = this.toastCtrl.create({
                  duration: 2000,
                  message: result ? '保存成功' : '上传失败',
                  position: 'bottom',
                });
                toast.present();
                this.navCtrl.pop();
              })
              .catch(error => {
                console.log(this.tag, error);
              })
          }
        }
      ]
    });
    confirm.present();
  }
}

