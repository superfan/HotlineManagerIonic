import {Component, OnInit} from "@angular/core";
import {AlertController, App, Events, NavController, NavParams} from "ionic-angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MaterialsPage} from "../materials/materials";
import {GlobalService} from "../../providers/GlobalService";
import {MaterialsInfo} from "../../model/MaterialsInfo";

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
  public addMaterialsForm: FormGroup;

  constructor(public navCtrl: NavController,
              private globalService: GlobalService,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public events: Events,
              public navParams: NavParams) {
  }

  ngOnInit(): void {
    this.types = [
      {name: '大', value: '大'},
      {name: '中', value: '中'},
      {name: '小', value: '小'}];
    this.addMaterialsForm = this.formBuilder.group({
      'materialsType': ['', Validators.compose([Validators.required])],
      'materialsSize': ['', Validators.compose([Validators.required])],
      'materialsProduct': ['', Validators.compose([Validators.required])],
      'materialsUnit': ['', Validators.compose([Validators.required])],
      'remark': ['', Validators.compose([Validators.required])]
    });
    if (this.navParams.get('edit')) {
      let materials = this.navParams.get('edit');
      this.addMaterialsForm.setValue({
        materialsType: materials.type,
        materialsSize: materials.size, materialsProduct: materials.productor,
        materialsUnit: materials.unit, remark: materials.remark
      });
      this.count = materials.count;
      this.buttonStr = '保存修改';
    }
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
  private addClick(materialsInfo) {
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
            let materials = new MaterialsInfo();
            materials.type = materialsInfo['materialsType'];
            materials.size = materialsInfo['materialsSize'];
            materials.productor = materialsInfo['materialsProduct'];
            materials.unit = materialsInfo['materialsUnit'];
            materials.count = this.count;
            materials.remark = materialsInfo['remark'];
            let isSave = this.buttonStr == '添加';
            this.events.publish(this.globalService.materialsUpdateEvent, isSave, materials);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}

