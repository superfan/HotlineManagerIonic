import {Component, OnInit, OnDestroy} from "@angular/core";
import {MyWorkPage} from "../mywork/mywork";
import {MyHistory} from "../history/myhistory";
import {MapPage} from "../map/map";
import {SearchPage} from "../search/search";
import {StationWorkPage} from "../stationwork/stationwork";
import {MorePage} from "../more/more";
import {MyPlugin} from "@ionic-native/my-plugin";

interface TabInfo {
  title: string;
  icon: string;
  page: any;
}

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit, OnDestroy {
  workerTabsInfo: TabInfo[] = [
    {title: '我的任务', icon: 'home', page: MyWorkPage},
    {title: '历史记录', icon: 'document', page: MyHistory},
    {title: '地图', icon: 'map', page: MapPage},
    {title: '更多', icon: 'more', page: MorePage} // 公告、设置
  ];

  adminTabsInfo: TabInfo[] = [
    {title: '站点任务', icon: 'home', page: StationWorkPage},
    {title: '查询', icon: 'search', page: SearchPage},
    {title: '地图', icon: 'map', page: MapPage},
    {title: '更多', icon: 'more', page: MorePage} // 公告、设置
  ];

  tabsInfo: TabInfo[];

  constructor(private myPlugin: MyPlugin) {
    this.tabsInfo = this.workerTabsInfo;
  }

  ngOnInit(): void {
    this.myPlugin.getPushMessage()
      .then(message => console.log(message))
      .catch(error => console.error(error));

    this.myPlugin.getChangedInfo()
      .then(info => console.log(info))
      .catch(error => console.error(error));
  }

  ngOnDestroy(): void {

  }

}
