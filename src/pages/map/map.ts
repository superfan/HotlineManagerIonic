import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController} from "ionic-angular";
import {GlobalService} from "../../providers/GlobalService";
declare var BMap;
declare var baidumap_location;
/**
 * Created by zhangjing on 2017/7/21.
 */
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})

export class MapPage {
  public map: any;
  @ViewChild('map') mapElement: ElementRef;
  public isChrome: boolean;
  public isMark: boolean = true;//是否要采集坐标

  constructor(public navCtrl: NavController,
              private globalService: GlobalService) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  /**
   * 加载地图
   */
  private loadMap() {
    let map = this.map = new BMap.Map(this.mapElement.nativeElement, {enableMapClick: true});
    map.enableScrollWheelZoom();//启动滚轮放大缩小，默认禁用
    map.enableContinuousZoom();//连续缩放效果，默认禁用
    let point = new BMap.Point(120.524577, 31.281003);
    map.centerAndZoom(point, 16);//设置中心和地图显示级别
    let isChrome = this.isChrome = this.globalService.isChrome;
    let isMark = this.isMark;
    if (!isMark) {
      this.showInfo();
    } else {
      this.markMap(map);
    }
    map.addEventListener("tilesloaded", function () {
      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.OverviewMapControl());
      if (isChrome) {
        map.addControl(new BMap.GeolocationControl());
      }
    });
    if(!isChrome){
      this.getCurrentLocation(map);
    }
  }

  /**
   * 定位
   */
  private getCurrentLocation(map: any) {
    // 进行定位
    console.log("getCurrentLocation");
    baidumap_location.getCurrentPosition(function (result) {
      console.log(result);
      let latitude = result.latitude;
      let lontitude = result.longitude;
      let point = new BMap.Point(lontitude, latitude);
      this.map.centerAndZoom(point, 16);//设置中心和地图显示级别
    }, function (error) {
      console.log(error);
    });
  }

  /**
   * 确定坐标
   */
  private markLocation() {
    let center = this.map.getCenter();
    alert("选定坐标:" + center.lat + "," + center.lng);
  }

  /**
   * 展示弹框信息
   */
  private showInfo() {
    let point = new BMap.Point(121.524577, 31.281003);
    let infoWindow = new BMap.InfoWindow("控江路1555号上海信息技术大厦");
    infoWindow.disableCloseOnClick();//关闭点击地图关闭信息窗口
    this.map.openInfoWindow(infoWindow, point);
    this.map.centerAndZoom(point, 16);//设置中心和地图显示级别
  }

  /**
   * 采集坐标
   */
  private markMap(map: any) {
    let myIcon = new BMap.Icon("assets/img/ic_map_center_location.png", new BMap.Size(23, 25));
    this.map.addEventListener("dragend", function (e) {
      map.clearOverlays();
      let center = map.getCenter();
      let marker = new BMap.Marker(center, {icon: myIcon});
      map.addOverlay(marker);
      marker.enableDragging();
      marker.addEventListener("dragend", function (e) {
        map.centerAndZoom(e.point, 16);
      })
    });
  }
}
