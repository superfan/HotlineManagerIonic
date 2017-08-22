import {Component, OnInit} from "@angular/core";
import {AlertController, App, Events, NavController, NavParams} from "ionic-angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MaterialsPage} from "../materials/materials";
import {GlobalService} from "../../providers/GlobalService";
import {MaterialsInfo} from "../../model/MaterialsInfo";
import {Material} from "../../model/Material";
import {DataService} from "../../providers/DataService";
import {MaterialUnit} from "../../model/MaterialUnit";
import {ConfigService} from "../../providers/ConfigService";

@Component({
  selector: 'page-materialsadd',
  templateUrl: 'materialsadd.html'
})

export class MaterialsAddPage implements OnInit {

  private readonly tag: string = "[MaterialsAddPage]";
  public title: string = '材料登记';
  public buttonStr: string = '添加';
  types: any;
  count: number = 0;//数量
  private optMaterialsLB: Array<Material>;//材料类别
  private optMaterialsXH: Array<Material>;//材料型号
  private materialLBID: any;
  private materialXHID: any;
  private optMaterialsGG: Array<Material>;//材料规格
  private materialGGID: any;
  private optMaterialsCJ: Array<Material>;//材料厂家
  private materialCJID: any;
  private remark: string;
  private materialsUnits: Array<MaterialUnit>;//单位数组
  private unitID: any;

  constructor(public navCtrl: NavController,
              private globalService: GlobalService,
              private dataService: DataService,
              private configService: ConfigService,
              public alertCtrl: AlertController,
              public events: Events,
              public navParams: NavParams) {
  }

  ngOnInit(): void {
    Promise.all([this.getOptMaterialLB(), this.getMaterialUnit()])
      .then(result => {
        this.editMaterialInfo();
      })
      .catch(error => {
        console.log(error);
      })
  }

  /**
   * 获得材料类别
   * @returns {Promise<T>}
   */
  private getOptMaterialLB(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.dataService.getOptMaterialLB()
        .then(materials => {
          if (materials && materials.length > 0) {
            this.optMaterialsLB = materials;
            resolve(true);
          } else {
            reject(false);
          }
        })
        .catch(error => {
          reject(error);
        });
    })
  }

  /**
   * 型号
   * @param parentId
   * @returns {Promise<T>}
   */
  private getOptMaterialXH(parentId: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.dataService.getOptMaterialXH(parentId)
        .then(materials => {
          if (materials && materials.length > 0) {
            this.optMaterialsXH = materials;
            resolve(true);
          } else {
            reject(false);
          }
        })
        .catch(error => {
          reject(error);
        });
    })
  }

  /**
   * 规格
   * @param parentId
   * @returns {Promise<T>}
   */
  private getOptMaterialGG(parentId: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.dataService.getOptMaterialGG(parentId)
        .then(materials => {
          if (materials && materials.length > 0) {
            this.optMaterialsGG = materials;
            resolve(true);
          } else {
            reject(false);
          }
        })
        .catch(error => {
          reject(error);
        });
    })
  }

  /**
   * 厂家
   * @param parentId
   * @returns {Promise<T>}
   */
  private getOptMaterialCJ(parentId: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.dataService.getOptMaterialCJ(parentId)
        .then(materials => {
          if (materials && materials.length > 0) {
            this.optMaterialsCJ = materials;
            resolve(true);
          } else {
            reject(false);
          }
        })
        .catch(error => {
          reject(error);
        });
    })
  }

  /**
   * 单位
   * @returns {Promise<T>}
   */
  private getMaterialUnit(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.configService.getMaterialUnit()
        .then(units => {
          if (units && units.length > 0) {
            this.materialsUnits = units;
            resolve(true);
          } else {
            reject(false);
          }
        })
        .catch(error => {
          reject(error);
        });
    })
  }

  /**
   * 修改材料信息
   */
  private editMaterialInfo() {
    if (this.navParams.get('edit')) {
      let materials = this.navParams.get('edit');
      this.materialLBID = materials.category.id;
      this.materialXHID = materials.type.id;
      this.materialGGID = materials.size.id;
      this.materialCJID = materials.productor.id;
      this.unitID = materials.unit.id;
      this.count = materials.count;
      this.remark = materials.remark;
      this.buttonStr = '保存修改';
      Promise.all([this.getOptMaterialXH(this.materialLBID), this.getOptMaterialGG(this.materialXHID),
        this.getOptMaterialCJ(this.materialGGID)]);
    }
  }

  /**
   * 选择材料类别
   */
  private selectMaterialLB() {
    console.log(this.tag,this.materialLBID);
    this.dataService.getOptMaterialXH(this.materialLBID)
      .then(materials => {
        this.optMaterialsXH = materials;
        this.materialXHID = null;
        this.optMaterialsGG.splice(0, this.optMaterialsGG.length);//清空规格
        this.optMaterialsCJ.splice(0, this.optMaterialsCJ.length);//清空厂家
      })
      .catch(error => {
        console.log(error);
      })
  }

  /**
   * 选择材料型号
   */
  private selectMaterialXH() {
    this.dataService.getOptMaterialGG(this.materialXHID)
      .then(materials => {
        this.optMaterialsGG = materials;
        this.materialGGID = null;
        this.optMaterialsCJ.splice(0, this.optMaterialsCJ.length);
      })
      .catch(error => {
        console.log(error);
      })
  }

  /**
   * 选择材料规格
   */
  private selectMaterialGG() {
    this.dataService.getOptMaterialCJ(this.materialGGID)
      .then(materials => {
        this.optMaterialsCJ = materials;
        this.materialCJID = null;
      })
      .catch(error => {
        console.log(error);
      })
  }

  /**
   * 数量（增加）
   */
  private addAccount() {
    this.count++;
  }

  /**
   * 数量（减少）
   */
  private reduceAccount() {
    this.count = (--this.count <= 0) ? 0 : this.count;
  }

  /**
   * 添加材料
   */
  private addClick() {
    let confirm = this.alertCtrl.create({
      title: '提示',
      message: '确认信息无误？',
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
            let materialInfo = new MaterialsInfo();
            this.foreachMaterial(materialInfo);
            materialInfo.count = this.count;//数量
            materialInfo.remark = this.remark;//备注
            let isSave = this.buttonStr == '添加';
            this.events.publish(this.globalService.materialsUpdateEvent, isSave, materialInfo);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

  /**
   * 遍历材料和单位
   * @param info
   */
  private foreachMaterial(info: MaterialsInfo) {
    for (let material of this.optMaterialsLB) {
      if (material.id == this.materialLBID) {
        info.category = material;
        break;
      }
    }
    for (let material of this.optMaterialsXH) {
      if (material.id == this.materialXHID) {
        info.type = material;
        break;
      }
    }
    for (let material of this.optMaterialsGG) {
      if (material.id == this.materialGGID) {
        info.size = material;
        break;
      }
    }
    for (let material of this.optMaterialsCJ) {
      if (material.id == this.materialCJID) {
        info.productor = material;
        break;
      }
    }
    for (let unit of this.materialsUnits) {
      if (unit.id == this.unitID) {
        info.unit = unit;
        break;
      }
    }
  }
}

