import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController, Platform} from "ionic-angular";
declare var BMap;
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

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  private loadMap() {
    let map = this.map = new BMap.Map(this.mapElement.nativeElement, {enableMapClick: true});
    map.enableScrollWheelZoom();//启动滚轮放大缩小，默认禁用
    map.enableContinuousZoom();//连续缩放效果，默认禁用

    // this.showInfo();
    // let geolocation = new BMap.Geolocation();
    // geolocation.getCurrentPosition((position) => {
    //   if (geolocation.getStatus() == 0) {
    //     //经度
    //     let longitude = position.longitude;
    //     //纬度
    //     let latitude = position.latitude;
    //     let pPoint = new BMap.Point(longitude, latitude);
    //     this.map.centerAndZoom(pPoint, 20);//设置中心和地图显示级别
    //   } else {
    //     console.log(position);
    //   }
    // });
    let point = new BMap.Point(121.524577, 31.281003);
    map.centerAndZoom(point, 16);//设置中心和地图显示级别
    map.addEventListener("tilesloaded", function () {
      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.GeolocationControl());
      map.addControl(new BMap.OverviewMapControl());
    });
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

  private markMap() {
    let myIcon = new BMap.Icon("assets/img/ic_map_center_location.png", new BMap.Size(23, 25));
    this.map.addEventListener("dragend", function (e) {
      this.map.clearOverlays();
      let center = this.map.getCenter();
      let marker = new BMap.Marker(center, {icon: myIcon});
      this.map.addOverlay(marker);
      marker.enableDragging();
      marker.addEventListener("dragend", function (e) {
        this.map.centerAndZoom(e.point, 16);
      })
    });
  }
}
