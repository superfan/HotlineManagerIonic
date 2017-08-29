import {Component, ElementRef, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {GlobalService} from "../../providers/GlobalService";
import {MapParam, MapType} from "../../model/MapParam";
declare var BMap;
declare var baidumap_location;

enum MapStatus {
  LOADING,
  LOADED
}

interface MapObjct {
  status: MapStatus,
  callbacks: Function[]
}

/**
 * Created by zhangjing on 2017/7/21.
 */
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})

export class MapPage implements OnInit, OnDestroy {
  @ViewChild('map') mapElement: ElementRef;

  private readonly ZoomMaxLevel: number = 16;
  private map: any;
  private mapParam: MapParam;
  private isInitSuccess: boolean;
  isMark: boolean;

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private globalService: GlobalService) {
    if (navParams.data instanceof MapParam) {
      this.mapParam = navParams.data as MapParam;
    } else {
      this.mapParam = new MapParam(MapType.View, undefined, undefined);
    }
    this.isMark = false;
  }

  ngOnInit(): void {
    //this.loadMap();
    this.isInitSuccess = false;
    this.loadJScript(this._init.bind(this));
  }

  private loadJScript(callback: Function): void {
    let win: any = (<any>window);
    let baiduMap: MapObjct = win['baiduMap'];
    if (baiduMap && baiduMap.status === MapStatus.LOADING) {
      //baiduMap.callbacks.push(callback);
      return;
    }

    if (baiduMap && baiduMap.status === MapStatus.LOADED) {
      return callback();
    }

    win['baiduMap'] = {status: MapStatus.LOADING, callbacks: []};
    win['baidumapinit'] = function () {
      win['baiduMap'].status = MapStatus.LOADED;
      callback();
      win['baiduMap'].callbacks.forEach((cb: Function) => cb());
      win['baiduMap'].callbacks = [];
    };

    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=Gsi66vGBjiuX3dlunDogoQYtHjbolbMi&callback=baidumapinit";
    script.onerror = function (err) {
      console.error(err);
    };
    document.body.appendChild(script);
  }

  _init(): void {
    this.map = new BMap.Map(this.mapElement.nativeElement, {enableMapClick: true});
    this.map.enableScrollWheelZoom();//启动滚轮放大缩小，默认禁用
    this.map.enableContinuousZoom();//连续缩放效果，默认禁用
    switch (this.mapParam.mapType) {
      case MapType.Locate:
        this.showInfo();
        break;
      case MapType.Mark:
        this.markMap();
        break;
      case MapType.View:
      default:
        this.viewMap();
        break;
    }

    this.map.addControl(new BMap.NavigationControl());
    this.map.addControl(new BMap.OverviewMapControl());
    if (this.globalService.isChrome) {
      this.map.addControl(new BMap.GeolocationControl());
    }
    this.isInitSuccess = true;
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  /**
   * 定位
   */
  getCurrentLocation(): void {
    if (this.globalService.isChrome) {
      return;
    }

    // 进行定位
    console.log("getCurrentLocation");
    // let map = this.map;
    // baidumap_location.getCurrentPosition(function (result) {
    //   console.log(result);
    //   let latitude = result.latitude;
    //   let lontitude = result.longitude;
    //   let point = new BMap.Point(lontitude, latitude);
    //   map.centerAndZoom(point, this.ZoomMaxLevel);//设置中心和地图显示级别
    // }, function (error) {
    //   console.log(error);
    // });

    this.globalService.getLocationEx()
      .then(location => {
        if (location && Math.abs(location.lng) > 0 && Math.abs(location.lat) > 0) {
          let point = new BMap.Point(location.lng, location.lat);
          setTimeout(() => {
            let convertor = new BMap.Convertor();
            let pointArr = [];
            pointArr.push(point);
            convertor.translate(pointArr, 1, 5, data => {
              if(data.status === 0) {
                this.map.clearOverlays();
                this.map.centerAndZoom(data.points[0], this.ZoomMaxLevel);
                let marker = new BMap.Marker(data.points[0]);  // 创建标注
                this.map.addOverlay(marker);               // 将标注添加到地图中
                //marker.setAnimation('BMAP_ANIMATION_BOUNCE'); //跳动的动画
              }
            });
          }, 1000);
        }
      })
      .catch(error => console.error(error));
  }

  /**
   * 确定坐标
   */
  markLocation(): void {
    let center = this.map.getCenter();
    alert("选定坐标:" + center.lat + "," + center.lng);
  }

  /**
   * 展示弹框信息
   */
  private showInfo(): void {
    let point = new BMap.Point(this.mapParam.lng, this.mapParam.lat);
    if (!this.mapParam.content) {
      let marker = new BMap.Marker(point);  // 创建标注
      this.map.addOverlay(marker);         // 将标注添加到地图中
    }
    this.map.centerAndZoom(point, this.ZoomMaxLevel);//设置中心和地图显示级别
    if (this.mapParam.content) {
      let opts = {
        width: 100,     // 信息窗口宽度
        height: 50,     // 信息窗口高度
        title: "任务编号",  // 信息窗口标题
        //enableAutoPan: false,
        enableCloseOnClick: false //关闭点击地图关闭信息窗口
      };
      let infoWindow = new BMap.InfoWindow(this.mapParam.content, opts);
      this.map.openInfoWindow(infoWindow, point);
    }
  }

  /**
   * 采集坐标
   */
  private markMap(): void {
    let myIcon = new BMap.Icon("assets/img/ic_map_center_location.png", new BMap.Size(23, 25));
    this.map.addEventListener("dragend", function (e) {
      this.map.clearOverlays();
      let center = this.map.getCenter();
      let marker = new BMap.Marker(center, {icon: myIcon});
      this.map.addOverlay(marker);
      marker.enableDragging();
      marker.addEventListener("dragend", function (e) {
        this.map.centerAndZoom(e.point, this.ZoomMaxLevel);
      })
    });
    this.isMark = true;
  }

  /**
   * 浏览地图
   */
  private viewMap(): void {
    let point = new BMap.Point(this.mapParam.lng, this.mapParam.lat);
    this.map.centerAndZoom(point, this.ZoomMaxLevel);//设置中心和地图显示级别
  }

  private destroy() {
    if (this.isInitSuccess) {
      if (this.mapParam.mapType === MapType.Locate) {
        this.map.closeInfoWindow();
        this.map.clearOverlays();
      }
    }
  }
}
