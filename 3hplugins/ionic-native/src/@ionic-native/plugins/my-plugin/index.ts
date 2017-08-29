/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

export class PageIntent {
  account: string;
  password: string;
  userId: number;
  userName: string;
  departmentAndId: string; // '...#...'
  roles: string; // '1,2,3,....'
  params: string; // 'page#...'
  accessToken: string;
  extendedInfo: string;
}

export class MyLocation {
  lng: number;
  lat: number;
}

/**
 * @name My Plugin
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { MyPlugin } from '@ionic-native/my-plugin';
 *
 *
 * constructor(private myPlugin: MyPlugin) { }
 *
 * ...
 *
 *
 * this.myPlugin.getPageIntent()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'MyPlugin',
  plugin: 'cordova.plugin.MyPlugin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.MyPlugin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  platforms: [], // Array of platforms supported, example: ['Android', 'iOS']
  install: '', // OPTIONAL install command, in case the plugin requires variables
})
@Injectable()
export class MyPlugin extends IonicNativePlugin {

  /**
   * 获取当前Page intent
   */
  @Cordova()
  getPageIntent(): Promise<PageIntent> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * 获取位置信息
   */
  @Cordova()
  getLocation(): Promise<MyLocation> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * 退出
   */
  @Cordova()
  quit(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
