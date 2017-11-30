webpackJsonp([0],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PageIntent */
/* unused harmony export MyLocation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPlugin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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


var PageIntent = (function () {
    function PageIntent() {
    }
    return PageIntent;
}());

var MyLocation = (function () {
    function MyLocation() {
    }
    return MyLocation;
}());

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
var MyPlugin = (function (_super) {
    __extends(MyPlugin, _super);
    function MyPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 获取当前Page intent
     */
    MyPlugin.prototype.getPageIntent = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * 获取位置信息
     */
    MyPlugin.prototype.getLocation = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * 退出
     */
    MyPlugin.prototype.quit = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * 获取推送消息
     */
    MyPlugin.prototype.getPushMessage = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * 获取变化信息(如：设置)
     */
    MyPlugin.prototype.getChangedInfo = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    return MyPlugin;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));
MyPlugin.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
MyPlugin.ctorParameters = function () { return []; };
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MyPlugin.prototype, "getPageIntent", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MyPlugin.prototype, "getLocation", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MyPlugin.prototype, "quit", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MyPlugin.prototype, "getPushMessage", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MyPlugin.prototype, "getChangedInfo", null);
MyPlugin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
        pluginName: 'MyPlugin',
        plugin: 'cordova.plugin.MyPlugin',
        pluginRef: 'cordova.plugins.MyPlugin',
        repo: '',
        platforms: [],
        install: '',
    })
], MyPlugin);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ConfigService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Task__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BaseService__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(124);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DownloadService = (function (_super) {
    __extends(DownloadService, _super);
    function DownloadService(http, configService, globalService, transfer) {
        var _this = _super.call(this, http) || this;
        _this.configService = configService;
        _this.globalService = globalService;
        _this.transfer = transfer;
        return _this;
    }
    /**
     * 分页下载任务
     * @param userId
     * @param since
     * @param count
     * @returns {Promise<T>}
     */
    DownloadService.prototype.getTasks = function (userId, since, count) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/task/user/" + userId + "/task?taskType=all&completed=0&count=" + count + "&since=" + since;
                return _this.get(url, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data instanceof Array) {
                        var tasks = body.Data;
                        tasks.map(function (task) {
                            task.state = __WEBPACK_IMPORTED_MODULE_3__model_Task__["a" /* TaskEx */].convertState(task.state);
                            return task;
                        });
                        resolve(tasks);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to get tasks");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 获取任务详情
     * @param taskId
     * @returns {Promise<T>}
     */
    DownloadService.prototype.getTaskDetail = function (taskId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/hotline/task/" + taskId + "/detail";
                return _this.get(url, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to get task detail");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 获取词语信息
     * @param group
     * @returns {Promise<T>}
     */
    DownloadService.prototype.getAllWords = function (group) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/resource/wordNew?group=" + group;
                return _this.get(url, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data instanceof Array) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to get words");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 获取未派工任务
     * @param userId
     * @param since
     * @param count
     * @returns {Promise<T>}
     */
    DownloadService.prototype.getUnDispatchedTasks = function (userId, since, count) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/tasksearch/" + userId + "/unDispatchedTasks?count=" + count + "&since=" + since;
                return _this.get(url, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data instanceof Array) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to get undispatched tasks");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 获取已派工任务
     * @param userId
     * @param since
     * @param count
     * @param minutes
     * @returns {Promise<T>}
     */
    DownloadService.prototype.getDispatchedTasks = function (userId, since, count, minutes) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/tasksearch/" + userId + "/dispatchedTasks/" + minutes + "?count=" + count + "&since=" + since;
                return _this.get(url, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data instanceof Array) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to get dispatched tasks");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 查询工单
     * @param address
     * @param phone
     * @param serialNo
     * @param taskNo
     * @param taskState
     * @param reportType
     * @param reportPerson
     * @param sendTime
     * @returns {Promise<T>}
     */
    DownloadService.prototype.getSearchTasks = function (userId, request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/tasksearch/" + userId + "/tasks?happenedAddress=" +
                    request.happenedAddress + "&contactPhone=" + request.contactPhone + "&serialNo=" +
                    request.serialNo + "&taskNo=" + request.taskNo + "&taskState=" + request.taskState +
                    "&reportType=" + request.reportType + "&reportPerson=" + request.reportPerson +
                    "&sendTime=" + request.sendTime + "&count=10&since=0";
                return _this.get(url, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    console.log("getSearchTasks:" + data);
                    var body = data.json();
                    if (body.Code == _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "fail to search task!");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 查询工单数量
     * @param address
     * @param phone
     * @param serialNo
     * @param taskNo
     * @param taskState
     * @param reportType
     * @param reportPerson
     * @param sendTime
     * @returns {Promise<T>}
     */
    DownloadService.prototype.getSearchTaskCount = function (userId, request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/tasksearch/" + userId + "/tasksCount?happenedAddress=" +
                    request.happenedAddress + "&contactPhone=" + request.contactPhone + "&serialNo=" +
                    request.serialNo + "&taskNo=" + request.taskNo + "&taskState=" + request.taskState +
                    "&reportType=" + request.reportType + "&reportPerson=" + request.reportPerson + "&sendTime=" +
                    request.sendTime;
                return _this.get(url, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    console.log("getSearchTaskCounts:" + data);
                    var body = data.json();
                    if (body.Code == _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "fail to search task count!");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 查询某条工单详情
     * @param taskId 任务编号
     * @returns {Promise<T>}
     */
    DownloadService.prototype.getSearchTaskDetails = function (taskId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/hotline/task/" + taskId + "/detail";
                return _this.get(url, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    console.log("getSearchTaskDetails" + data);
                    var body = data.json();
                    if (body.Code == _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "fail to search task details!");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 获取公告
     * @returns {Promise<T>}
     */
    DownloadService.prototype.getNews = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/resource/news/latestd";
                return _this.get(url, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    console.log("getNews:" + data);
                    var body = data.json();
                    if (body.Code == _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "fail to get news!");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 用户登录操作
     * @param user
     * @returns {Promise<T>}
     */
    DownloadService.prototype.doLogin = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url;
                if (user.role === _this.globalService.worker) {
                    url = data + "wap/v1/auth/" + user.userName + "/" + user.password + "?appIdentity=cc";
                }
                else {
                    url = data + "wap/v1/auth/wap/" + user.userName + "/" + user.password + "?appIdentity=cc";
                }
                return _this.get(url, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    console.log("getUserInfo:" + data);
                    var body = data.json();
                    if (body.Code == _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "fail to get userInfo!");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 获取施工人员
     * @param userId
     * @returns {Promise<T>}
     */
    DownloadService.prototype.getPersonnels = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/resource/user/" + userId + "/getFieldPersonnel";
                return _this.get(url, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data instanceof Array) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to get personnels");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /* 获得管理人员信息
     * @param userId
     * @returns {Promise<T>}
     */
    DownloadService.prototype.getManagerUserInfo = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/resource/user/hotline/" + userId;
                return _this.get(url, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    console.log("getManagerUserInfo:" + data);
                    var body = data.json();
                    if (body.Code == _this.globalService.httpCode
                        && body.StatusCode == _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "fail to get ManagerUserInfo!");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 获得外勤人员信息
     * @param userId
     * @returns {Promise<T>}
     */
    DownloadService.prototype.getWorkerUserInfo = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/resource/user/" + userId;
                return _this.get(url, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    console.log("getWorkerUserInfo:" + data);
                    var body = data.json();
                    if (body.Code == _this.globalService.httpCode
                        && body.StatusCode == _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "fail to get WorkerUserInfo!");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 检查app更新
     * @param version
     * @returns {Promise<T>}
     */
    DownloadService.prototype.checkAppVersion = function (version) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/system/update/app/check?version=" + version;
                return _this.get(url, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    console.log("checkAppVersion:" + data);
                    var body = data.json();
                    if (body.Code == _this.globalService.httpCode
                        && body.StatusCode == _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "fail to get check app version info!");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 检查data更新
     * @param version
     */
    DownloadService.prototype.checkDataVersion = function (version) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/system/update/data/check?version=" + version;
                return _this.get(url, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    console.log("checkDataVersion:" + data);
                    var body = data.json();
                    if (body.Code == _this.globalService.httpCode
                        && body.StatusCode == _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "fail to get check data version info!");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 获取材料信息
     * @param group
     * @returns {Promise<T>}
     */
    DownloadService.prototype.getAllMaterials = function (group) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getMaterialsBaseUri()
                .then(function (data) {
                var url = data + "/wap/v1/material/get/" + group;
                return _this.get(url, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.status === _this.globalService.httpSuccessStatusCode
                        && body.data instanceof Array) {
                        resolve(body.data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to get materials");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 获得维修信息
     * @param serialNumber
     * @returns {Promise<T>}
     */
    DownloadService.prototype.getMaintainInfo = function (serialNumber) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getMaterialsBaseUri()
                .then(function (data) {
                var url = data + "/wap/v1/materialusage/get/" + serialNumber;
                return _this.get(url, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.status === _this.globalService.httpSuccessStatusCode) {
                        resolve(body.data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to get materials");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 下载文件
     * @param url
     * @param path
     * @returns {Promise<T>}
     */
    DownloadService.prototype.downloadFile = function (url, path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var fileTransfer = _this.transfer.create();
            fileTransfer.download(url, path)
                .then(function (entry) {
                // success
                console.log('download complete: ' + entry.toURL());
                resolve(entry.toURL());
            }, function (err) {
                // error
                console.error(err);
                reject(err);
            });
        });
    };
    /**
     * 获取附件
     * @param taskId
     * @returns {Promise<T>}
     */
    DownloadService.prototype.getAttachments = function (taskId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/task/" + taskId + "/files";
                return _this.get(url, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data instanceof Array) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to get attachments");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    return DownloadService;
}(__WEBPACK_IMPORTED_MODULE_5__BaseService__["a" /* BaseService */]));
DownloadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__ConfigService__["a" /* ConfigService */],
        __WEBPACK_IMPORTED_MODULE_4__GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */]])
], DownloadService);

//# sourceMappingURL=DownloadService.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DelayExtend */
/* unused harmony export RejectExtend */
/* unused harmony export CancelExtend */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisableColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EnableColor; });
/* unused harmony export NotUploadedColor */
/* unused harmony export Process */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ProcessEx; });
var DelayExtend = (function () {
    function DelayExtend() {
    }
    return DelayExtend;
}());

var RejectExtend = (function () {
    function RejectExtend() {
    }
    return RejectExtend;
}());

var CancelExtend = (function () {
    function CancelExtend() {
    }
    return CancelExtend;
}());

var DisableColor = 'gray';
var EnableColor = 'primary';
var NotUploadedColor = 'danger';
var Process = (function () {
    function Process() {
    }
    return Process;
}());

var ProcessEx = (function () {
    function ProcessEx() {
    }
    return ProcessEx;
}());

//# sourceMappingURL=Process.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseService = (function () {
    function BaseService(http) {
        this.http = http;
    }
    /**
     *
     * @returns {RequestOptions}
     */
    BaseService.prototype.getOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json;charset=UTF-8',
            'X-Access-Token': '123',
            'X-Device-ID': 'aa5eaa1d715240d8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    /**
     * 出错处理
     * @param error
     * @returns {Promise<never>}
     */
    BaseService.prototype.handleError = function (error) {
        var errMsg = error.json().Message ? error.json().Message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    BaseService.prototype.request = function (url, options) {
        return this.http.request(url, options);
    };
    /**
     * Performs a request with `get` http method.
     */
    BaseService.prototype.get = function (url, options) {
        console.log(url);
        options && console.log(options);
        return this.http.get(url, options);
    };
    /**
     * Performs a request with `post` http method.
     */
    BaseService.prototype.post = function (url, body, options) {
        console.log(url);
        body && console.log(body);
        options && console.log(options);
        return this.http.post(url, body, options);
    };
    /**
     * Performs a request with `put` http method.
     */
    BaseService.prototype.put = function (url, body, options) {
        console.log(url);
        body && console.log(body);
        options && console.log(options);
        return this.http.put(url, body, options);
    };
    /**
     * Performs a request with `delete` http method.
     */
    BaseService.prototype.delete = function (url, options) {
        return this.http.delete(url, options);
    };
    /**
     * Performs a request with `patch` http method.
     */
    BaseService.prototype.patch = function (url, body, options) {
        return this.http.patch(url, body, options);
    };
    /**
     * Performs a request with `head` http method.
     */
    BaseService.prototype.head = function (url, options) {
        return this.http.head(url, options);
    };
    return BaseService;
}());
BaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], BaseService);

//# sourceMappingURL=BaseService.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ConfigService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BaseService__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_Media__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FileService__ = __webpack_require__(23);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UploadService = (function (_super) {
    __extends(UploadService, _super);
    function UploadService(http, configService, globalService, transfer, fileService) {
        var _this = _super.call(this, http) || this;
        _this.configService = configService;
        _this.globalService = globalService;
        _this.transfer = transfer;
        _this.fileService = fileService;
        return _this;
    }
    /**
     * 接受
     * @param acceptInfo
     * @returns {Promise<T>}
     */
    UploadService.prototype.accept = function (acceptInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var taskId = acceptInfo.taskId.split('#')[0];
                var time = acceptInfo.taskId.split('#')[1];
                var body = JSON.stringify(acceptInfo);
                if (time) {
                    body = body.replace("#" + time, '');
                }
                var url = data + "wap/v1/mobile/task/" + taskId + "/accept";
                return _this.put(url, body, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to accept");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 出发
     * @param goInfo
     * @returns {Promise<T>}
     */
    UploadService.prototype.go = function (goInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var taskId = goInfo.taskId.split('#')[0];
                var time = goInfo.taskId.split('#')[1];
                var body = JSON.stringify(goInfo);
                if (time) {
                    body = body.replace("#" + time, '');
                }
                var url = data + "wap/v1/mobile/task/" + taskId + "/go";
                return _this.put(url, body, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to go");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 到场
     * @param arriveInfo
     * @returns {Promise<T>}
     */
    UploadService.prototype.arrive = function (arriveInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var taskId = arriveInfo.taskId.split('#')[0];
                var time = arriveInfo.taskId.split('#')[1];
                var body = JSON.stringify(arriveInfo);
                if (time) {
                    body = body.replace("#" + time, '');
                }
                var url = data + "wap/v1/mobile/task/" + taskId + "/arrived";
                return _this.put(url, body, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to arrive");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 回复
     * @param replyInfo
     * @returns {Promise<T>}
     */
    UploadService.prototype.reply = function (replyInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var taskId = replyInfo.taskId.split('#')[0];
                var time = replyInfo.taskId.split('#')[1];
                var body = JSON.stringify(replyInfo);
                if (time) {
                    body = body.replace("#" + time, '');
                }
                var url = data + "wap/v1/mobile/hotline/task/" + taskId + "/reply";
                return _this.post(url, body, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to reply");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 退单
     * @param rejectInfo
     * @returns {Promise<T>}
     */
    UploadService.prototype.reject = function (rejectInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var taskId = rejectInfo.taskId.split('#')[0];
                var time = rejectInfo.taskId.split('#')[1];
                var body = JSON.stringify(rejectInfo);
                if (time) {
                    body = body.replace("#" + time, '');
                }
                var url = data + "wap/v1/mobile/task/" + taskId + "/reject";
                return _this.put(url, body, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to reject");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 延期
     * @param delayInfo
     * @returns {Promise<T>}
     */
    UploadService.prototype.delay = function (delayInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var taskId = delayInfo.taskId.split('#')[0];
                var time = delayInfo.taskId.split('#')[1];
                var body = JSON.stringify(delayInfo);
                if (time) {
                    body = body.replace("#" + time, '');
                }
                var url = data + "wap/v1/mobile/task/" + taskId + "/delay";
                return _this.put(url, body, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to delay");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 销单
     * @param cancelInfo
     * @returns {Promise<T>}
     */
    UploadService.prototype.cancel = function (cancelInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var taskId = cancelInfo.taskId.split('#')[0];
                var time = cancelInfo.taskId.split('#')[1];
                var body = JSON.stringify(cancelInfo);
                if (time) {
                    body = body.replace("#" + time, '');
                }
                var url = data + "wap/v1/mobile/task/" + taskId + "/taskXD";
                return _this.put(url, body, _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to cancel");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 站点任务接单
     * @param acceptExInfo
     * @returns {Promise<T>}
     */
    UploadService.prototype.acceptEx = function (acceptExInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/stationTask/" + acceptExInfo.taskId + "/accept";
                return _this.put(url, JSON.stringify(acceptExInfo), _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to accept for station task");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 站点派单
     * @param dispatchInfo
     * @returns {Promise<T>}
     */
    UploadService.prototype.dispatch = function (dispatchInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/stationTask/" + dispatchInfo.taskId + "/dispatch";
                return _this.put(url, JSON.stringify(dispatchInfo), _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to dispatch for station task");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 站点销单
     * @param cancelExInfo
     * @returns {Promise<T>}
     */
    UploadService.prototype.cancelEx = function (cancelExInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/stationTask/" + cancelExInfo.TaskNo + "/saveTaskXD";
                return _this.post(url, JSON.stringify(cancelExInfo), _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to cancel for station task");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 上传多媒体文件2.0
     * @param media
     * @returns {Promise<T>}
     */
    UploadService.prototype.uploadMediaV2 = function (media) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getFileBaseUri()
                .then(function (data) {
                var url = data + "wap/v2/fs/upload";
                var fileUrl;
                var fileType;
                switch (media.fileType) {
                    case __WEBPACK_IMPORTED_MODULE_6__model_Media__["a" /* MediaType */].Picture:
                        fileUrl = _this.fileService.getImagesDir();
                        fileType = 'image';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_6__model_Media__["a" /* MediaType */].Audio:
                        fileUrl = _this.fileService.getSoundsDir();
                        fileType = 'sound';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_6__model_Media__["a" /* MediaType */].Vedio:
                        fileUrl = _this.fileService.getVideosDir();
                        fileType = 'video';
                        break;
                    default:
                        return reject('type is error');
                }
                fileUrl = fileUrl + "/" + media.fileName;
                var fileTransfer = _this.transfer.create();
                var options = {
                    fileKey: 'file',
                    fileName: "" + media.fileName,
                    params: {
                        userId: media.userId,
                        fileType: fileType,
                        fileName: media.fileName
                    }
                };
                fileTransfer.upload(fileUrl, url, options)
                    .then(function (data) {
                    // success
                    console.log(data);
                    var body = JSON.parse(data.response);
                    if (body instanceof Array
                        && body.length > 0
                        && body[0].fileId
                        && body[0].url
                        && body[0].downloadUrl
                        && body[0].fileType
                        && body[0].fileHash
                        && body[0].originFileName) {
                        media.extendedInfo = body;
                        resolve(body[0].fileId);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to uploadMedia");
                    }
                }, function (err) {
                    // error
                    console.error(err);
                    reject(err);
                });
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 上传多媒体文件
     * @param media
     * @returns {Promise<T>}
     */
    UploadService.prototype.uploadMedia = function (media) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/resource/upload";
                var fileUrl;
                var fileType;
                switch (media.fileType) {
                    case __WEBPACK_IMPORTED_MODULE_6__model_Media__["a" /* MediaType */].Picture:
                        fileUrl = _this.fileService.getImagesDir();
                        fileType = 'IMAGE';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_6__model_Media__["a" /* MediaType */].Audio:
                        fileUrl = _this.fileService.getSoundsDir();
                        fileType = 'SOUND';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_6__model_Media__["a" /* MediaType */].Vedio:
                    default:
                        return reject('type is error');
                }
                fileUrl = fileUrl + "/" + media.fileName;
                url = url + "?userId=" + media.userId + "&fileType=" + fileType + "&fileName=" + media.fileName;
                var fileTransfer = _this.transfer.create();
                var options = {
                    fileKey: 'file',
                    fileName: "" + media.fileName,
                    params: {
                        userId: media.userId,
                        fileType: fileType,
                        fileName: media.fileName
                    }
                };
                fileTransfer.upload(fileUrl, url, options)
                    .then(function (data) {
                    // success
                    console.log(data);
                    var body = JSON.parse(data.response);
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data && body.Data.data && body.Data.data.fileId) {
                        resolve(body.Data.data.fileId);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to uploadMedia");
                    }
                }, function (err) {
                    // error
                    console.error(err);
                    reject(err);
                });
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 上传文件关联 V2.0
     * @param taskId
     * @param files
     * @returns {Promise<T>}
     */
    UploadService.prototype.uploadMediaIdsV2 = function (taskId, userId, files) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/task/" + taskId + "/files/wap/upload";
                var content = {
                    taskId: taskId,
                    userId: userId,
                    files: files
                };
                return _this.put(url, JSON.stringify(content), _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to uploadMediaIds");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 上传文件关联
     * @param taskId
     * @param files
     * @returns {Promise<T>}
     */
    UploadService.prototype.uploadMediaIds = function (taskId, files) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getServerBaseUri()
                .then(function (data) {
                var url = data + "wap/v1/mobile/task/" + taskId + "/files/upload";
                var content = {
                    taskId: taskId,
                    files: files
                };
                return _this.put(url, JSON.stringify(content), _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.Code === _this.globalService.httpCode
                        && body.StatusCode === _this.globalService.httpSuccessStatusCode
                        && body.Data) {
                        resolve(body.Data);
                    }
                    else {
                        reject(body.Message ? body.Message : "failure to uploadMediaIds");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    /**
     * 上传材料登记信息
     * @param materialArr
     * @returns {Promise<T>}
     */
    UploadService.prototype.uploadMaterialsAdd = function (materialArr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getMaterialsBaseUri()
                .then(function (data) {
                var url = data + "api/wap/v1/materialusage/batch";
                return _this.post(url, JSON.stringify(materialArr), _this.getOptions())
                    .toPromise()
                    .then(function (data) {
                    var body = data.json();
                    if (body.status == _this.globalService.httpSuccessStatusCode
                        && body.message == 'OK') {
                        resolve(true);
                    }
                    else {
                        resolve(body.message ? body.message : "failure to uploadMaterials");
                    }
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) { return reject(error); });
        });
    };
    return UploadService;
}(__WEBPACK_IMPORTED_MODULE_4__BaseService__["a" /* BaseService */]));
UploadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__ConfigService__["a" /* ConfigService */],
        __WEBPACK_IMPORTED_MODULE_3__GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_7__FileService__["a" /* FileService */]])
], UploadService);

//# sourceMappingURL=UploadService.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaType; });
var MediaType;
(function (MediaType) {
    MediaType[MediaType["Picture"] = 0] = "Picture";
    MediaType[MediaType["Audio"] = 1] = "Audio";
    MediaType[MediaType["Vedio"] = 2] = "Vedio";
})(MediaType || (MediaType = {}));
//# sourceMappingURL=Media.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseService__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DbService__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FileService__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_media__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_video_player__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_Media__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(35);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MediaService = (function (_super) {
    __extends(MediaService, _super);
    function MediaService(http, globalService, dbService, camera, media, mediaCapture, fileService, videoPlayer) {
        var _this = _super.call(this, http) || this;
        _this.globalService = globalService;
        _this.dbService = dbService;
        _this.camera = camera;
        _this.media = media;
        _this.mediaCapture = mediaCapture;
        _this.fileService = fileService;
        _this.videoPlayer = videoPlayer;
        _this.isPlayingAlarm = false;
        return _this;
    }
    /**
     * 拍照
     * @param taskId
     * @returns {Promise<TResult>}
     */
    MediaService.prototype.takePicture = function (taskId) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        return this.camera.getPicture(options)
            .then(function (imageUri) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            //let base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(imageUri);
            //const startName: string = 'file://';
            var path = imageUri.toString();
            // if (path.indexOf(startName) === 0 && startName.length < path.length) {
            //   path = path.substring(startName.length);
            // }
            return Promise.resolve(path);
        }, function (err) {
            // Handle error
            console.error(err);
            return Promise.reject(err);
        })
            .then(function (path) { return _this.fileService.movePicture(path); })
            .then(function (fileName) { return _this.dbService.saveMedia({
            userId: _this.globalService.userId,
            taskId: taskId,
            fileType: __WEBPACK_IMPORTED_MODULE_9__model_Media__["a" /* MediaType */].Picture,
            fileName: fileName,
            uploadedFlag: _this.globalService.uploadedFlagForLocal
        })
            .then(function (result) { return result
            ? Promise.resolve({ filePath: _this.fileService.getImagesDir() + "/" + fileName, fileName: fileName })
            : Promise.reject('failure to save the db'); }); });
    };
    /**
     * 视频
     * @param taskId
     * @returns {Promise<TResult>}
     */
    MediaService.prototype.takeVideo = function (taskId) {
        var _this = this;
        var options = { limit: 1 };
        return this.mediaCapture.captureVideo(options)
            .then(function (data) {
            console.log(data);
            // Promise.reject('success to save the db')
            var path = data[0].fullPath.toString();
            return Promise.resolve(path);
        }, function (err) {
            console.error(err);
            return Promise.reject(err);
        })
            .then(function (path) { return _this.fileService.moveVideo(path); })
            .then(function (fileName) { return _this.dbService.saveMedia({
            userId: _this.globalService.userId,
            taskId: taskId,
            fileType: __WEBPACK_IMPORTED_MODULE_9__model_Media__["a" /* MediaType */].Vedio,
            fileName: fileName,
            uploadedFlag: _this.globalService.uploadedFlagForLocal
        })
            .then(function (result) { return result
            ? Promise.resolve({ filePath: _this.fileService.getVideosDir() + "/" + fileName, fileName: fileName })
            : Promise.reject('failure to save the db'); }); });
    };
    MediaService.prototype.playVideo = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Playing a video.
            _this.videoPlayer.play(path).then(function () {
                console.log('video completed');
                return reject('video completed');
            }).catch(function (err) {
                console.log(err);
                return reject(err);
            });
        });
    };
    /**
     * 录音
     * @returns {Promise<T>}
     */
    MediaService.prototype.startRecordAudio = function () {
        var _this = this;
        var error = 'failure to record audio';
        return new Promise(function (resolve, reject) {
            var file;
            try {
                // Create a Media instance.  Expects path to file or url as argument
                // We can optionally pass a second argument to track the status of the media
                var name_1 = new Date().getTime() + ".mp3";
                file = _this.media.create(_this.fileService.getSoundsDir() + "/" + name_1);
                if (!file) {
                    return reject(error);
                }
                file.startRecord();
                return resolve({
                    file: file,
                    name: name_1
                });
            }
            catch (err) {
                console.error(err);
                if (file) {
                    file.release();
                }
                return reject(err);
            }
        });
    };
    /**
     *
     * @param file
     * @returns {any}
     */
    MediaService.prototype.endRecordAudio = function (file) {
        if (file instanceof __WEBPACK_IMPORTED_MODULE_6__ionic_native_media__["b" /* MediaObject */]) {
            try {
                file.stopRecord();
                file.release();
                return Promise.resolve(true);
            }
            catch (err) {
                console.error(err);
                return Promise.reject(err);
            }
        }
        else {
            return Promise.reject('file is error');
        }
    };
    MediaService.prototype.playAudio = function (name, isCached) {
        var _this = this;
        var error = 'failure to play audio';
        return new Promise(function (resolve, reject) {
            var file;
            try {
                // Create a Media instance.  Expects path to file or url as argument
                // We can optionally pass a second argument to track the status of the media
                if (isCached) {
                    file = _this.media.create("" + name);
                }
                else {
                    file = _this.media.create(_this.fileService.getSoundsDir() + "/" + name);
                }
                if (!file) {
                    return reject(error);
                }
                file.play();
                return resolve(file);
            }
            catch (err) {
                console.error(err);
                if (file) {
                    file.release();
                }
                return reject(err);
            }
        });
    };
    MediaService.prototype.playAlarm = function (name) {
        var _this = this;
        if (this.isPlayingAlarm) {
            return;
        }
        this.isPlayingAlarm = true;
        var file;
        try {
            // Create a Media instance.  Expects path to file or url as argument
            // We can optionally pass a second argument to track the status of the media
            file = this.media.create("file:///android_asset/www/assets/sound/" + name);
            if (!file) {
                this.isPlayingAlarm = false;
                return;
            }
            file.play();
            setTimeout(function () {
                try {
                    file.stop();
                    file.release();
                }
                catch (err) {
                    console.error(err);
                }
                finally {
                    _this.isPlayingAlarm = false;
                }
            }, 5000);
        }
        catch (err) {
            this.isPlayingAlarm = false;
            console.error(err);
            if (file) {
                file.release();
            }
        }
    };
    MediaService.prototype.stopAudio = function (file) {
        if (file instanceof __WEBPACK_IMPORTED_MODULE_6__ionic_native_media__["b" /* MediaObject */]) {
            try {
                file.stop();
                file.release();
                return Promise.resolve(true);
            }
            catch (err) {
                console.error(err);
                return Promise.reject(err);
            }
        }
        else {
            return Promise.reject('file is error');
        }
    };
    return MediaService;
}(__WEBPACK_IMPORTED_MODULE_1__BaseService__["a" /* BaseService */]));
MediaService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_3__DbService__["a" /* DbService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_media__["a" /* Media */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__["a" /* MediaCapture */],
        __WEBPACK_IMPORTED_MODULE_4__FileService__["a" /* FileService */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_video_player__["a" /* VideoPlayer */]])
], MediaService);

//# sourceMappingURL=MediaService.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MaterialsInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UploadMaterials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataMaterialInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MaterialInfoEx; });
/**
 * Created by zhangjing on 2017/7/31.
 */
var MaterialsInfo = (function () {
    function MaterialsInfo() {
    }
    return MaterialsInfo;
}());

/**
 * 接口
 */
var UploadMaterials = (function () {
    function UploadMaterials() {
    }
    return UploadMaterials;
}());

/**
 * 本地
 */
var DataMaterialInfo = (function () {
    function DataMaterialInfo() {
    }
    return DataMaterialInfo;
}());

var MaterialInfoEx = (function () {
    function MaterialInfoEx() {
    }
    return MaterialInfoEx;
}());

//# sourceMappingURL=MaterialsInfo.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Task__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_DataService__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Process__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__record_PopoverRecordPage__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_MapParam__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_FileService__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__attachment_attachment__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_photo_viewer__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var WorkDetailPage = (function () {
    function WorkDetailPage(navCtrl, navParams, alertCtrl, events, dataService, globalService, popoverCtrl, fileService, photoViewer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.dataService = dataService;
        this.globalService = globalService;
        this.popoverCtrl = popoverCtrl;
        this.fileService = fileService;
        this.photoViewer = photoViewer;
        this.tag = "[WorkDetailPage]";
        this.disableColor = '#808080';
        this.enableColor = '#5d81c1';
        this.optPerson = '处理人';
        this.optTypeName = '处理类别';
        this.optContentName = '处理内容';
        this.optReasonName = '发生原因';
        this.optSolutionName = '解决措施';
        this.optResultName = '处理结果';
        this.optRemarkName = '处理备注';
        this.optTypeDefaultValue = '请选择处理类别';
        this.optContentDefaultValue = '请选择处理内容';
        this.optReasonDefaultValue = '请选择发生原因';
        this.optSolutionDefaultValue = '请选择解决措施';
        this.optResultDefaultValue = '请选择处理结果';
        this.optRemarkDefaultValue = '备注可为空';
        //private readonly picturePlaceHolder: string = 'assets/img/ic_photo_default.png';
        this.pictureMaxCount = 3;
        this.audioPlaceHolder = 'assets/img/ic_audio_default.png';
        this.audioMaxCount = 3;
        this.videoMaxCount = 3;
        this.title = '工单处理';
        this.segmentName = "detailInfo";
        this.segmentColor = "primary";
        this.detail = [
            { name: '联系人名', value: '', key: 'contactName', isTime: false, isActive: false },
            { name: '联系电话', value: '', key: 'contactPhone', isTime: false, isActive: false },
            { name: '反映类别', value: '', key: 'issueType', isTime: false, isActive: false },
            { name: '反映内容', value: '', key: 'issueContent', isTime: false, isActive: false },
            { name: '发生地址', value: '', key: 'issueAddress', isTime: false, isActive: false },
            { name: '发生时间', value: '', key: 'issueTime', isTime: true, isActive: false },
            { name: '受理备注', value: '', key: 'receiveComment', isTime: false, isActive: false },
            { name: '开始时间', value: '', key: 'bookingStartTime', isTime: true, isActive: false },
            { name: '结束时间', value: '', key: 'bookingEndTime', isTime: true, isActive: false },
            { name: '到场时限', value: '', key: 'arrivedDeadLine', isTime: true, isActive: false },
            { name: '处理时限', value: '', key: 'replyDeadLine', isTime: true, isActive: false },
            { name: '延时时限', value: '', key: 'delayReplyDeadLine', isTime: true, isActive: false },
            { name: '派遣站点', value: '', key: 'assignStation', isTime: false, isActive: false },
            { name: '派遣人', value: '', key: 'assignPerson', isTime: false, isActive: false },
            { name: '派遣备注', value: '', key: 'assignComment', isTime: false, isActive: false },
            { name: '附件', value: '', key: 'attachments', isTime: false, isActive: true }
        ];
        this.reply = [
            { name: '处理时间', value: '', isActive: false, color: this.disableColor },
            { name: '处理部门', value: '', isActive: false, color: this.disableColor },
            { name: this.optPerson, value: '', isActive: false, color: this.disableColor },
            { name: this.optTypeName, value: this.optTypeDefaultValue, isActive: true, color: this.enableColor },
            { name: this.optContentName, value: this.optContentDefaultValue, isActive: true, color: this.enableColor },
            { name: this.optReasonName, value: this.optReasonDefaultValue, isActive: true, color: this.enableColor },
            { name: this.optSolutionName, value: this.optSolutionDefaultValue, isActive: true, color: this.enableColor },
            { name: this.optResultName, value: this.optResultDefaultValue, isActive: true, color: this.enableColor },
            { name: this.optRemarkName, value: this.optRemarkDefaultValue, isActive: true, color: this.enableColor }
        ];
        this.pictures = [
            '',
            '',
            ''
        ];
        this.videos = [
            '',
            '',
            ''
        ];
        this.audios = [
            { name: '', time: 0 },
            { name: '', time: 0 },
            { name: '', time: 0 }
        ];
        this.mediaNames = [];
        this.picCount = 0;
        this.audioCount = 0;
        this.videoCount = 0;
        _a = this.navParams.data, this.taskEx = _a[0], this.history = _a[1], this.overdueTime = _a[2], this.isLocked = _a[3];
        this.isPreview = this.taskEx.isPreview;
        this.isLocationValid = this.taskEx.isLocationValid;
        var _a;
    }
    /**
     * 初始化
     */
    WorkDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.tag + 'ngOnInit');
        this.dataService.getTaskDetail(this.taskEx.id)
            .then(function (taskDetail) {
            console.log(_this.tag + "getTaskDetail: " + taskDetail);
            _this.taskDetail = taskDetail;
            _this.convertTaskDetail(_this.taskDetail);
        })
            .catch(function (error) { return console.error(error); });
        if (this.history && this.history.reply) {
            this.replyInfo = this.history.reply;
        }
        if (!this.replyInfo) {
            this.replyInfo = {
                opTime: 0,
                opDepartment: this.globalService.department,
                opPerson: '',
                opLeiBie: 0,
                opContent: 0,
                reason: 0,
                solution: 0,
                result: 0,
                replayComment: '',
                files: '',
                location: {
                    type: "bd09ll",
                    lng: "121.525766",
                    lat: "31.280693"
                },
                taskId: this.taskEx.id,
                userId: this.globalService.userId
            };
        }
        this.subscribeEvent(this.events);
    };
    /**
     * 销毁
     */
    WorkDetailPage.prototype.ngOnDestroy = function () {
        this.events.unsubscribe(this.globalService.recordAudioFinishEvent);
    };
    /**
     * 定位
     * @param ev
     */
    WorkDetailPage.prototype.onLocate = function (ev) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__map_map__["a" /* MapPage */], new __WEBPACK_IMPORTED_MODULE_8__model_MapParam__["a" /* MapParam */](__WEBPACK_IMPORTED_MODULE_8__model_MapParam__["b" /* MapType */].Locate, this.taskEx.location, this.taskEx.id));
    };
    /**
     * 回填
     * @param ev
     */
    WorkDetailPage.prototype.onReply = function (ev) {
        var _this = this;
        if (!this.replyInfo.opLeiBie
            || !this.replyInfo.opContent
            || !this.replyInfo.reason
            || !this.replyInfo.solution
            || !this.replyInfo.result) {
            // || !this.replyInfo.opPerson) {
            return this.globalService.showToast("数据填写不完整!");
        }
        var processEx = new __WEBPACK_IMPORTED_MODULE_5__model_Process__["c" /* ProcessEx */]();
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__model_Task__["c" /* transform2ProcessEx */])(this.taskEx, processEx)
            || processEx.reply.done) {
            return this.globalService.showToast("数据转换失败!");
        }
        var task = Object(__WEBPACK_IMPORTED_MODULE_2__model_Task__["d" /* transform2Task */])(this.replyInfo, this.taskEx, processEx);
        var output = {
            uploadedFlag: this.globalService.uploadedFlagForLocal
        };
        this.globalService.getLocation()
            .then(function (location) {
            _this.replyInfo.location = location;
            return _this.dataService.reply(_this.replyInfo, task, _this.taskDetail, _this.mediaNames, output);
        })
            .then(function (date) {
            console.log("success");
            _this.taskEx.photoCount = _this.picCount;
            _this.taskEx.audioCount = _this.audioCount;
            _this.taskEx.videoCount = _this.videoCount;
            var history = {
                userId: _this.globalService.userId,
                taskId: task.taskId,
                state: __WEBPACK_IMPORTED_MODULE_2__model_Task__["b" /* TaskState */].Reply,
                task: task,
                reply: _this.replyInfo,
                uploadedFlag: output.uploadedFlag,
                taskDetail: _this.taskDetail,
                mediaNames: _this.mediaNames
            };
            _this.dataService.uploadMediasOfOneTask(task.taskId);
            _this.events.publish(_this.globalService.myWorkUpdateEvent, {
                type: 'reply',
                taskEx: _this.taskEx,
                history: history
            });
            _this.navCtrl.pop();
        })
            .catch(function (error) {
            console.error(error);
            _this.globalService.showToast(error);
        });
    };
    /**
     * 切换tab
     * @param segment
     */
    WorkDetailPage.prototype.segmentChanged = function (segment) {
        console.log(segment);
        switch (segment.value) {
            case 'detailInfo':
                break;
            case 'replyInfo':
                this.setReplyInfo();
                break;
            case 'mediaInfo':
                this.setMediaInfo();
                break;
            default:
                return;
        }
    };
    /**
     * 选择item
     * @param item
     */
    WorkDetailPage.prototype.itemSelected = function (item) {
        if (this.isPreview || this.isLocked) {
            return;
        }
        switch (item.name) {
            case this.optPerson:
                //this.popupOptPersonAlert();
                break;
            case this.optTypeName:
                this.popupOptTypeAlert();
                break;
            case this.optContentName:
                this.popupOptContentAlert();
                break;
            case this.optReasonName:
                this.popupOptReasonAlert();
                break;
            case this.optSolutionName:
                this.popupOptSolutionAlert();
                break;
            case this.optResultName:
                this.popupOptResultAlert();
                break;
            case this.optRemarkName:
                this.popupRemarkAlert();
                break;
        }
    };
    WorkDetailPage.prototype.detailItemSelected = function (item) {
        if (item.key && item.key === "attachments") {
            console.log("attachments");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__attachment_attachment__["a" /* AttachmentPage */], this.taskEx.id.split('#')[0]);
        }
    };
    /**
     * 拍照
     * @param ev
     */
    WorkDetailPage.prototype.onTakePicture = function (ev) {
        var _this = this;
        if (this.globalService.isChrome || this.isPreview || this.isLocked) {
            return;
        }
        if (this.picCount >= this.pictureMaxCount) {
            return this.globalService.showToast('照片已满');
        }
        this.dataService.takePicture(this.taskEx.id)
            .then(function (result) {
            var filePath = result.filePath, fileName = result.fileName;
            console.log(filePath);
            console.log(fileName);
            if (filePath && fileName) {
                _this.pictures[_this.picCount++] = filePath;
                _this.mediaNames.push(fileName);
            }
        })
            .catch(function (error) { return console.error(error); });
    };
    /**
     * 视频
     * @param ev
     */
    WorkDetailPage.prototype.onTakeVideo = function (ev) {
        var _this = this;
        if (this.globalService.isChrome || this.isPreview || this.isLocked) {
            return;
        }
        if (this.videoCount >= this.videoMaxCount) {
            return this.globalService.showToast('视频已满');
        }
        this.dataService.takeVideo(this.taskEx.id)
            .then(function (result) {
            var filePath = result.filePath, fileName = result.fileName;
            console.log(filePath);
            console.log(fileName);
            if (filePath && fileName) {
                _this.videos[_this.videoCount++] = filePath;
                _this.mediaNames.push(fileName);
            }
        })
            .catch(function (error) { return console.error(error); });
    };
    WorkDetailPage.prototype.onPlayVideo = function (path) {
        if (!path) {
            return;
        }
        this.dataService.playVideo(path)
            .then(function (data) {
            console.log(data);
        });
    };
    WorkDetailPage.prototype.onPreviewPicture = function (name) {
        console.log(name);
        if (!this.globalService.isChrome && name) {
            this.photoViewer.show(name);
        }
    };
    WorkDetailPage.prototype.onDeletePicture = function (name) {
        var _this = this;
        if (this.globalService.isChrome || this.isPreview || !name || this.isLocked) {
            return;
        }
        var index = this.pictures.findIndex(function (item) { return item === name; });
        if (index === -1) {
            return;
        }
        var lastIndex = name.lastIndexOf('/');
        if (lastIndex <= 0) {
            return;
        }
        name = name.substring(lastIndex + 1);
        if (!name) {
            return;
        }
        var index2 = this.mediaNames.findIndex(function (item) { return item === name; });
        if (index2 === -1) {
            return;
        }
        this.dataService.deleteOneMedia(name)
            .then(function (result) {
            for (var i = index; i < _this.pictures.length - 1; i++) {
                _this.pictures[i] = _this.pictures[i + 1];
            }
            _this.picCount--;
            _this.pictures[_this.picCount] = '';
            for (var i = index2; i < _this.mediaNames.length - 1; i++) {
                _this.mediaNames[i] = _this.mediaNames[i + 1];
            }
            _this.mediaNames.pop();
        })
            .catch(function (err) { return console.error(err); });
    };
    WorkDetailPage.prototype.onDeleteVideo = function (name) {
        var _this = this;
        if (this.globalService.isChrome || this.isPreview || !name || this.isLocked) {
            return;
        }
        var index = this.videos.findIndex(function (item) { return item === name; });
        if (index === -1) {
            return;
        }
        var lastIndex = name.lastIndexOf('/');
        if (lastIndex <= 0) {
            return;
        }
        name = name.substring(lastIndex + 1);
        if (!name) {
            return;
        }
        var index2 = this.mediaNames.findIndex(function (item) { return item === name; });
        if (index2 === -1) {
            return;
        }
        this.dataService.deleteOneMedia(name)
            .then(function (result) {
            for (var i = index; i < _this.videos.length - 1; i++) {
                _this.videos[i] = _this.videos[i + 1];
            }
            _this.videoCount--;
            _this.videos[_this.videoCount] = '';
            for (var i = index2; i < _this.mediaNames.length - 1; i++) {
                _this.mediaNames[i] = _this.mediaNames[i + 1];
            }
            _this.mediaNames.pop();
        })
            .catch(function (err) { return console.error(err); });
    };
    /**
     * 录音
     * @param ev
     */
    WorkDetailPage.prototype.onRecordAudio = function (ev) {
        console.log(this.tag, 'onRecordAudio');
        if (this.globalService.isChrome || this.isPreview || this.isLocked) {
            return;
        }
        if (this.audioCount >= this.audioMaxCount) {
            return this.globalService.showToast('录音已满');
        }
        this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__record_PopoverRecordPage__["a" /* PopoverRecordPage */], {
            taskId: this.taskEx.id
        }, {
            showBackdrop: true,
            enableBackdropDismiss: false
        }).present();
    };
    WorkDetailPage.prototype.onPlay = function (audio) {
        var _this = this;
        if (!audio.name) {
            return;
        }
        var names = audio.name.split('#');
        if (!names || names.length !== 2) {
            return;
        }
        this.dataService.playAudio(names[0])
            .then(function (file) {
            if (file) {
                var prompt_1 = _this.alertCtrl.create({
                    title: '提示',
                    message: "结束播放语音",
                    enableBackdropDismiss: false,
                    buttons: [
                        {
                            text: '确定',
                            handler: function (data) {
                                console.log('Saved clicked');
                                _this.dataService.stopAudio(file)
                                    .catch(function (err) { return console.error(err); });
                            }
                        }
                    ]
                });
                prompt_1.present();
            }
        })
            .catch(function (err) { return console.error(err); });
    };
    WorkDetailPage.prototype.onDeleteAudio = function (audio) {
        var _this = this;
        if (this.globalService.isChrome || this.isPreview || !audio.name || this.isLocked) {
            return;
        }
        var names = audio.name.split('#');
        if (!names || names.length !== 2) {
            return;
        }
        var name = names[0];
        var index = this.audios.findIndex(function (item) { return item.name === audio.name; });
        if (index === -1) {
            return;
        }
        var index2 = this.mediaNames.findIndex(function (item) { return item === audio.name; });
        if (index2 === -1) {
            return;
        }
        this.dataService.deleteOneMedia(name)
            .then(function (result) {
            for (var i = index; i < _this.audios.length - 1; i++) {
                _this.audios[i].name = _this.audios[i + 1].name;
                _this.audios[i].time = _this.audios[i + 1].time;
            }
            _this.audioCount--;
            _this.audios[_this.audioCount].name = '';
            _this.audios[_this.audioCount].time = 0;
            for (var i = index2; i < _this.mediaNames.length - 1; i++) {
                _this.mediaNames[i] = _this.mediaNames[i + 1];
            }
            _this.mediaNames.pop();
        })
            .catch(function (err) { return console.error(err); });
    };
    /**
     * 转换显示信息
     * @param taskDetail
     */
    WorkDetailPage.prototype.convertTaskDetail = function (taskDetail) {
        for (var _i = 0, _a = this.detail; _i < _a.length; _i++) {
            var item = _a[_i];
            item.value = taskDetail[item.key];
            if (item.key === 'issueTime'
                || item.key === 'bookingStartTime'
                || item.key === 'bookingEndTime'
                || item.key === 'arrivedDeadLine'
                || item.key === 'replyDeadLine'
                || item.key === 'delayReplyDeadLine'
                || typeof item.value === 'number') {
                item.value = item.value > 0 ? new Date(item.value) : '';
            }
        }
        if (this.overdueTime && this.overdueTime.arrived && this.overdueTime.reply) {
            var currentTime = new Date().getTime();
            var arrivedDeadLine = currentTime + this.overdueTime.arrived;
            var replyDeadLine = currentTime + this.overdueTime.reply;
            if (taskDetail.arrivedDeadLine < arrivedDeadLine
                || taskDetail.replyDeadLine < replyDeadLine) {
                this.segmentColor = "danger";
                if (!this.globalService.isChrome) {
                    this.dataService.playAlarm();
                }
            }
        }
    };
    /**
     * 设置回复信息
     */
    WorkDetailPage.prototype.setReplyInfo = function () {
        if (this.replyInfo.opTime === 0) {
            this.replyInfo.opTime = new Date().getTime();
        }
        this.reply[0].value = this.globalService.getFormatTime(new Date(this.replyInfo.opTime));
        // department
        this.reply[1].value = this.replyInfo.opDepartment;
        // person
        this.getOptPersons(this.replyInfo.opPerson);
        // operation type
        this.getOptTypes(this.replyInfo.opLeiBie, this.replyInfo.opContent);
        // operation reason
        this.getOptReasons(this.replyInfo.reason);
        // operation solution
        this.getOptSolutions(this.replyInfo.solution);
        // operation result
        this.getOptResults(this.replyInfo.result);
        // remark
        this.reply[8].isActive = !this.isPreview && !this.isLocked;
        this.reply[8].value = this.replyInfo.replayComment;
    };
    /**
     * 获取处理类别
     * @param typeId
     * @param contentId
     */
    WorkDetailPage.prototype.getOptTypes = function (typeId, contentId) {
        var _this = this;
        this.dataService.getOptTypes()
            .then(function (words) {
            console.log(_this.tag, "getOptTypes");
            _this.optTypes = words;
            if (_this.optTypes.length > 0) {
                var word = void 0;
                if (typeId) {
                    word = _this.optTypes.find(function (word) { return word.wid === typeId; });
                }
                if (!word) {
                    word = _this.optTypes[0];
                    contentId = undefined;
                }
                _this.reply[3].value = word.wName;
                _this.reply[3].isActive = !_this.isPreview && !_this.isLocked;
                _this.reply[3].remark = word.wRemark;
                _this.replyInfo.opLeiBie = word.wid;
                _this.getOptContents(Number.parseInt(word.wRemark), contentId);
            }
        })
            .catch(function (error) { return console.error(error); });
    };
    /**
     * 获取处理内容
     * @param parentId
     * @param contentId
     */
    WorkDetailPage.prototype.getOptContents = function (parentId, contentId) {
        var _this = this;
        this.dataService.getOptContents(parentId)
            .then(function (words) {
            console.log(_this.tag, "getOptContents");
            _this.optContents = words;
            if (_this.optContents.length > 0) {
                var word = void 0;
                if (contentId) {
                    word = _this.optContents.find(function (word) { return word.wid === contentId; });
                }
                if (!word) {
                    word = _this.optContents[0];
                }
                _this.reply[4].value = word.wName;
                _this.reply[4].remark = word.wRemark;
                _this.reply[4].color = _this.enableColor;
                _this.replyInfo.opContent = word.wid;
            }
            else {
                _this.reply[4].value = "请选择处理内容";
                _this.reply[4].remark = "";
                _this.reply[4].color = _this.disableColor;
                _this.replyInfo.opContent = 0;
            }
            _this.reply[4].isActive = !_this.isPreview && !_this.isLocked;
        })
            .catch(function (error) { return console.error(error); });
    };
    /**
     * 获取发生原因
     */
    WorkDetailPage.prototype.getOptReasons = function (id) {
        var _this = this;
        this.dataService.getOptReasons()
            .then(function (words) {
            console.log(_this.tag, "getOptReasons");
            _this.optReasons = words;
            if (_this.optReasons.length > 0) {
                var word = void 0;
                if (id) {
                    word = _this.optReasons.find(function (word) { return word.wid === id; });
                }
                if (!word) {
                    word = _this.optReasons[0];
                }
                _this.reply[5].value = word.wName;
                _this.reply[5].isActive = !_this.isPreview && !_this.isLocked;
                _this.reply[5].remark = word.wRemark;
                _this.replyInfo.reason = word.wid;
            }
        })
            .catch(function (error) { return console.error(error); });
    };
    /**
     * 获取解决措施
     */
    WorkDetailPage.prototype.getOptSolutions = function (id) {
        var _this = this;
        this.dataService.getOptSolutions()
            .then(function (words) {
            console.log(_this.tag, "getOptSolutions");
            _this.optSolutions = words;
            if (_this.optSolutions.length > 0) {
                var word = void 0;
                if (id) {
                    word = _this.optSolutions.find(function (word) { return word.wid === id; });
                }
                if (!word) {
                    word = _this.optSolutions[0];
                }
                _this.reply[6].value = word.wName;
                _this.reply[6].isActive = !_this.isPreview && !_this.isLocked;
                _this.reply[6].remark = word.wRemark;
                _this.replyInfo.solution = word.wid;
            }
        })
            .catch(function (error) { return console.error(error); });
    };
    /**
     * 获取处理结果
     */
    WorkDetailPage.prototype.getOptResults = function (id) {
        var _this = this;
        this.dataService.getOptResults()
            .then(function (words) {
            console.log(_this.tag, "getOptResult");
            _this.optResults = words;
            if (_this.optResults.length > 0) {
                var word = void 0;
                if (id) {
                    word = _this.optResults.find(function (word) { return word.wid === id; });
                }
                if (!word) {
                    word = _this.optResults[0];
                }
                _this.reply[7].value = word.wName;
                _this.reply[7].isActive = !_this.isPreview && !_this.isLocked;
                _this.reply[7].remark = word.wRemark;
                _this.replyInfo.result = word.wid;
            }
        })
            .catch(function (error) { return console.error(error); });
    };
    /**
     * 处理类别
     */
    WorkDetailPage.prototype.popupOptTypeAlert = function () {
        if (!this.optTypes || this.optTypes.length <= 0) {
            return this.globalService.showToast("处理类别为空!");
        }
        this.popupAlert(this.optTypes, this.optTypeName, this.reply[3], this.replyInfo, "opLeiBie");
    };
    /**
     * 处理内容
     */
    WorkDetailPage.prototype.popupOptContentAlert = function () {
        if (!this.optContents || this.optContents.length <= 0) {
            return this.globalService.showToast("处理内容为空!");
        }
        this.popupAlert(this.optContents, this.optContentName, this.reply[4], this.replyInfo, "opContent");
    };
    /**
     * 发生原因
     */
    WorkDetailPage.prototype.popupOptReasonAlert = function () {
        if (!this.optReasons || this.optReasons.length <= 0) {
            return this.globalService.showToast("发生原因为空!");
        }
        this.popupAlert(this.optReasons, this.optReasonName, this.reply[5], this.replyInfo, "reason");
    };
    /**
     * 解决措施
     */
    WorkDetailPage.prototype.popupOptSolutionAlert = function () {
        if (!this.optSolutions || this.optSolutions.length <= 0) {
            return this.globalService.showToast("解决措施为空!");
        }
        this.popupAlert(this.optSolutions, this.optSolutionName, this.reply[6], this.replyInfo, "solution");
    };
    /**
     * 处理结果
     */
    WorkDetailPage.prototype.popupOptResultAlert = function () {
        if (!this.optResults || this.optResults.length <= 0) {
            return this.globalService.showToast("处理结果为空!");
        }
        this.popupAlert(this.optResults, this.optResultName, this.reply[7], this.replyInfo, "result");
    };
    /**
     * 处理备注
     */
    WorkDetailPage.prototype.popupRemarkAlert = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: '处理备注',
            message: "请输入处理备注",
            inputs: [
                {
                    name: 'remark',
                    placeholder: ''
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function (data) {
                        console.log('Saved clicked');
                        _this.reply[8].value = data.remark;
                        _this.replyInfo.replayComment = data.remark;
                    }
                }
            ]
        });
        prompt.present();
    };
    /**
     * 对话框
     * @param words
     * @param title
     * @param reply
     * @param replyInfo
     * @param propertyName
     */
    WorkDetailPage.prototype.popupAlert = function (words, title, reply, replyInfo, propertyName) {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle(title);
        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
            var word = words_1[_i];
            alert.addInput({
                type: 'radio',
                label: word.wName,
                value: word.wName + "#" + word.wid + "#" + word.wRemark,
                checked: reply.value === word.wName
            });
        }
        alert.addButton('取消');
        alert.addButton({
            text: '确定',
            handler: function (data) {
                console.log('Radio data:', data);
                var values = data.split("#");
                reply.value = values[0];
                replyInfo[propertyName] = Number.parseInt(values[1]);
                reply.remark = values[2];
                if (title === _this.optTypeName) {
                    _this.getOptContents(Number.parseInt(reply.remark));
                }
            }
        });
        alert.present().then(function () {
            //this.testRadioOpen = true;
        });
    };
    WorkDetailPage.prototype.subscribeEvent = function (events) {
        var _this = this;
        events.subscribe(this.globalService.recordAudioFinishEvent, function (name, time) {
            console.log(name);
            if (name && time > 0) {
                time = Number.parseInt((time / 1000).toString());
                _this.audios[_this.audioCount].name = name + "#" + time;
                _this.audios[_this.audioCount++].time = time;
                _this.mediaNames.push(name + "#" + time);
            }
        });
    };
    WorkDetailPage.prototype.setMediaInfo = function () {
        if (this.history
            && this.history.mediaNames
            && this.history.mediaNames.length > 0) {
            this.picCount = 0;
            this.audioCount = 0;
            this.videoCount = 0;
            this.mediaNames = [];
            for (var _i = 0, _a = this.history.mediaNames; _i < _a.length; _i++) {
                var name_1 = _a[_i];
                if (name_1.lastIndexOf(this.globalService.photoSuffix) !== -1) {
                    this.pictures[this.picCount++] = this.fileService.getImagesDir() + "/" + name_1;
                    this.mediaNames.push(name_1);
                }
                else if (name_1.lastIndexOf(this.globalService.videoSuffix) !== -1) {
                    this.videos[this.videoCount++] = this.fileService.getVideosDir() + "/" + name_1;
                    this.mediaNames.push(name_1);
                }
                else if (name_1.lastIndexOf(this.globalService.audioSuffix) !== -1) {
                    this.audios[this.audioCount].name = name_1;
                    var values = name_1.split('#');
                    if (values && values.length === 2) {
                        this.audios[this.audioCount++].time = Number.parseInt(values[1]);
                    }
                    else {
                        this.audios[this.audioCount++].time = 10;
                    }
                    this.mediaNames.push(name_1);
                }
            }
        }
    };
    WorkDetailPage.prototype.getOptPersons = function (opPerson) {
        this.reply[2].value = this.globalService.userName;
        this.reply[2].isActive = false;
        this.replyInfo.opPerson = this.globalService.userName;
        // this.dataService.getPersonnels(this.globalService.userId)
        //   .then(personnels => {
        //     console.log(this.tag, "getOptPersons");
        //     this.optPersons = personnels;
        //     if (this.optPersons.length > 0) {
        //       let names: string[] = [];
        //       if (opPerson) {
        //         let persons: string[] = opPerson.split(',');
        //         for (let personnel of personnels) {
        //           if (persons.find(person => person === personnel.fieldPersonnelId.toString())) {
        //             names.push(personnel.fieldPersonnelName);
        //           }
        //         }
        //       }
        //
        //       if (names.length <= 0 || !opPerson) {
        //         names.push(this.optPersons[0].fieldPersonnelName);
        //         opPerson = this.optPersons[0].fieldPersonnelId.toString();
        //       }
        //
        //       this.reply[2].value = names.join(',');
        //       this.reply[2].isActive = !this.isPreview;
        //       this.replyInfo.opPerson = opPerson;
        //     }
        //   })
        //   .catch(error => console.error(error));
    };
    return WorkDetailPage;
}());
WorkDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-workdetail',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\workdetail\workdetail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      {{title}}\n    </ion-title>\n\n    <ion-buttons end *ngIf="!isPreview && !isLocked">\n      <button ion-button icon-only color="white" *ngIf="isLocationValid" (click)="onLocate($event)">\n        <ion-icon name="map"></ion-icon>\n      </button>\n\n      <button ion-button icon-only color="white" (click)="onReply($event)">\n        <ion-icon name="checkmark-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="segmentName" (ionChange)="segmentChanged($event)" color="{{segmentColor}}">\n      <ion-segment-button value="detailInfo">\n        基本信息\n      </ion-segment-button>\n      <ion-segment-button value="replyInfo" *ngIf="!isPreview">\n        回填信息\n      </ion-segment-button>\n      <ion-segment-button value="mediaInfo" *ngIf="!isPreview">\n        多媒体\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="page-workdetail">\n\n  <div [ngSwitch]="segmentName">\n    <!--基本信息-->\n    <ion-list *ngSwitchCase="\'detailInfo\'">\n      <ion-item *ngFor="let item of detail" (click)="detailItemSelected(item)">\n        <ion-label fixed class="label-name">\n          {{item.name}}\n        </ion-label>\n        <div item-content *ngIf="item.isTime">\n          {{item.value | date:\'y-MM-dd HH:mm:ss\'}}\n        </div>\n        <div item-content *ngIf="!item.isTime">\n          {{item.value}}\n        </div>\n        <ion-icon name="ios-arrow-forward" item-end *ngIf="item.isActive"></ion-icon>\n      </ion-item>\n    </ion-list>\n\n    <!--回填信息-->\n    <ion-list *ngSwitchCase="\'replyInfo\'">\n      <ion-item *ngFor="let item of reply" class="reply-item" (click)="itemSelected(item)">\n        <ion-label fixed class="label-name">\n          {{item.name}}\n        </ion-label>\n        <div item-content>\n          {{item.value}}\n        </div>\n        <ion-icon name="ios-arrow-forward" item-end *ngIf="item.isActive"></ion-icon>\n      </ion-item>\n\n      <!--<ion-row>-->\n      <!--<ion-col class="col-button">-->\n      <!--<button ion-button icon-left>-->\n      <!--<ion-icon name="camera"></ion-icon>-->\n      <!--拍照-->\n      <!--</button>-->\n      <!--</ion-col>-->\n      <!--<ion-col class="col-button">-->\n      <!--<button ion-button icon-left>-->\n      <!--<ion-icon name="microphone"></ion-icon>-->\n      <!--录音-->\n      <!--</button>-->\n      <!--</ion-col>-->\n      <!--<ion-col class="col-button">-->\n      <!--<button ion-button icon-left>-->\n      <!--<ion-icon name="videocam"></ion-icon>-->\n      <!--视频-->\n      <!--</button>-->\n      <!--</ion-col>-->\n      <!--</ion-row>-->\n    </ion-list>\n\n    <!--多媒体-->\n    <div *ngSwitchCase="\'mediaInfo\'">\n      <button ion-item icon-left (click)="onTakePicture($event)">\n        <ion-icon name="camera"></ion-icon>\n        拍照\n      </button>\n\n      <ion-grid style="width: 100%; height: 100px;">\n        <ion-row>\n          <ion-col col-4 class="col-img" *ngIf="pictures[0]">\n            <img class="picture" src="{{pictures[0]}}" (click)="onPreviewPicture(pictures[0])"/>\n            <ion-icon name="close" (click)="onDeletePicture(pictures[0])" *ngIf="!isLocked"></ion-icon>\n          </ion-col>\n\n          <ion-col col-4 class="col-img" *ngIf="pictures[1]">\n            <img class="picture" src="{{pictures[1]}}" (click)="onPreviewPicture(pictures[1])"/>\n            <ion-icon name="close" (click)="onDeletePicture(pictures[1])" *ngIf="!isLocked"></ion-icon>\n          </ion-col>\n\n          <ion-col col-4 class="col-img" *ngIf="pictures[2]">\n            <img class="picture" src="{{pictures[2]}}" (click)="onPreviewPicture(pictures[2])"/>\n            <ion-icon name="close" (click)="onDeletePicture(pictures[2])" *ngIf="!isLocked"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <br>\n      <br>\n\n      <button ion-item icon-left (click)="onRecordAudio($event)">\n        <ion-icon name="microphone"></ion-icon>\n        录音\n      </button>\n\n      <ion-grid style="width: 100%; height: 150px;">\n        <ion-row *ngIf="audios[0].time > 0" class="audio">\n          <ion-col col-6 class="audio-info">{{audios[0].time}}s</ion-col>\n          <ion-col col-2>\n            <ion-icon name="play" class="audio-btn" (click)="onPlay(audios[0])"></ion-icon>\n          </ion-col>\n          <ion-col col-1 *ngIf="!isLocked">\n            <ion-icon name="close" class="audio-btn" (click)="onDeleteAudio(audios[0])"></ion-icon>\n          </ion-col>\n          <ion-col></ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="audios[1].time > 0" class="audio">\n          <ion-col col-6 class="audio-info">{{audios[1].time}}s</ion-col>\n          <ion-col col-2>\n            <ion-icon name="play" class="audio-btn" (click)="onPlay(audios[1])"></ion-icon>\n          </ion-col>\n          <ion-col col-1 *ngIf="!isLocked">\n            <ion-icon name="close" class="audio-btn" (click)="onDeleteAudio(audios[1])"></ion-icon>\n          </ion-col>\n          <ion-col></ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="audios[2].time > 0" class="audio">\n          <ion-col col-6 class="audio-info">{{audios[2].time}}s</ion-col>\n          <ion-col col-2>\n            <ion-icon name="play" class="audio-btn" (click)="onPlay(audios[2])"></ion-icon>\n          </ion-col>\n          <ion-col col-1 *ngIf="!isLocked">\n            <ion-icon name="close" class="audio-btn" (click)="onDeleteAudio(audios[2])"></ion-icon>\n          </ion-col>\n          <ion-col></ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <br>\n      <br>\n      <button ion-item icon-left (click)="onTakeVideo($event)">\n        <ion-icon name="videocam"></ion-icon>\n        视频\n      </button>\n\n      <ion-grid style="width: 100%; height: 100px;">\n        <ion-row>\n          <ion-col col-4 class="col-video" *ngIf="videos[0]">\n            <video class="video" (click)="onPlayVideo(videos[0])"></video>\n            <ion-icon name="close" (click)="onDeleteVideo(videos[0])" *ngIf="!isLocked"></ion-icon>\n          </ion-col>\n\n          <ion-col col-4 class="col-video" *ngIf="videos[1]">\n            <video class="video" (click)="onPlayVideo(videos[1])"></video>\n            <ion-icon name="close" (click)="onDeleteVideo(videos[1])" *ngIf="!isLocked"></ion-icon>\n          </ion-col>\n\n          <ion-col col-4 class="col-video" *ngIf="pictures[2]">\n            <video class="video" (click)="onPlayVideo(videos[2])"></video>\n            <ion-icon name="close" (click)="onDeleteVideo(videos[2])" *ngIf="!isLocked"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <br>\n      <br>\n      <!--<ion-row>-->\n      <!--<ion-col class="col-img">-->\n      <!--<img width="80" height="80" src="assets/img/ic_video_default.png"/>-->\n      <!--</ion-col>-->\n\n      <!--<ion-col class="col-img">-->\n      <!--<img width="80" height="80" src="assets/img/ic_video_default.png"/>-->\n      <!--</ion-col>-->\n\n      <!--<ion-col class="col-img">-->\n      <!--<img width="80" height="80" src="assets/img/ic_video_default.png"/>-->\n      <!--</ion-col>-->\n      <!--</ion-row>-->\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\workdetail\workdetail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__providers_DataService__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_9__providers_FileService__["a" /* FileService */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
], WorkDetailPage);

//# sourceMappingURL=workdetail.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DownloadService__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Task__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UploadService__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DbService__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MediaService__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_Media__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SyncService__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model_MaterialsInfo__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ConfigService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__FileService__ = __webpack_require__(23);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DataService = (function (_super) {
    __extends(DataService, _super);
    function DataService(downloadService, uploadService, globalService, dbService, configService, mediaService, events, fileService) {
        var _this = _super.call(this, downloadService, uploadService, globalService, dbService, mediaService, events, configService) || this;
        _this.fileService = fileService;
        _this.isInitialized = false;
        return _this;
    }
    /**
     * 初始化
     * @returns {Promise<boolean>}
     */
    DataService.prototype.init = function () {
        var _this = this;
        if (this.isInitialized) {
            return Promise.resolve(true);
        }
        else {
            _super.prototype.init.call(this);
            return this.dbService.init()
                .then(function (result) { return _this.configService.initConfigs(); })
                .then(function (result) { return _this.isInitialized = true; })
                .catch(function (error) {
                console.error(error);
                _this.isInitialized = false;
            });
        }
    };
    /**
     * 销毁
     */
    DataService.prototype.destroy = function () {
        if (this.isInitialized) {
            _super.prototype.destroy.call(this);
            this.dbService.destroy();
        }
    };
    /**
     * 下载所有任务和详情
     */
    DataService.prototype.downloadTasksAndDetails = function () {
        _super.prototype.sendMsg.call(this, { msgType: __WEBPACK_IMPORTED_MODULE_8__SyncService__["a" /* MsgType */].DownloadTasksAndDetails });
    };
    /**
     * 上传历史工单和多媒体信息
     */
    DataService.prototype.uploadHistoriesAndMedias = function () {
        _super.prototype.sendMsg.call(this, { msgType: __WEBPACK_IMPORTED_MODULE_8__SyncService__["a" /* MsgType */].UploadHistoriesAndMedias });
    };
    /**
     * 上传所有信息
     */
    DataService.prototype.uploadAllInfos = function () {
        _super.prototype.sendMsg.call(this, { msgType: __WEBPACK_IMPORTED_MODULE_8__SyncService__["a" /* MsgType */].UploadAllInfos });
    };
    /**
     * 上传一条任务的多媒体信息
     * @param taskId
     */
    DataService.prototype.uploadMediasOfOneTask = function (taskId) {
        _super.prototype.sendMsg.call(this, {
            msgType: __WEBPACK_IMPORTED_MODULE_8__SyncService__["a" /* MsgType */].UploadMediasOfHistory,
            taskId: taskId
        });
    };
    /**
     * 分页获取任务
     * @param since
     * @param count
     * @param key
     * @returns {Promise<Array<Task>>}
     */
    DataService.prototype.getTasks = function (since, count, key) {
        if (this.globalService.isChrome) {
            return this.downloadService.getTasks(this.globalService.userId, since, count)
                .then(function (tasks) { return tasks.filter(function (task) { return task.state !== __WEBPACK_IMPORTED_MODULE_2__model_Task__["b" /* TaskState */].Reply && task.state !== __WEBPACK_IMPORTED_MODULE_2__model_Task__["b" /* TaskState */].Reject; }); });
        }
        else {
            return this.dbService.getTasks(this.globalService.userId, since, count, [__WEBPACK_IMPORTED_MODULE_2__model_Task__["b" /* TaskState */].Dispatch, __WEBPACK_IMPORTED_MODULE_2__model_Task__["b" /* TaskState */].Accept, __WEBPACK_IMPORTED_MODULE_2__model_Task__["b" /* TaskState */].Go, __WEBPACK_IMPORTED_MODULE_2__model_Task__["b" /* TaskState */].Arrived, __WEBPACK_IMPORTED_MODULE_2__model_Task__["b" /* TaskState */].Delay, __WEBPACK_IMPORTED_MODULE_2__model_Task__["b" /* TaskState */].Continue], key);
        }
    };
    /**
     * 获取任务总数
     * @returns {Promise<number>}
     */
    DataService.prototype.getTaskCount = function () {
        if (this.globalService.isChrome) {
            return Promise.resolve(0);
        }
        else {
            return this.dbService.getTaskCount(this.globalService.userId);
        }
    };
    /**
     * 获取任务详情
     * @param taskId
     * @returns {Promise<TaskDetail>}
     */
    DataService.prototype.getTaskDetail = function (taskId) {
        var _this = this;
        if (this.globalService.isChrome) {
            return this.downloadService.getTaskDetail(taskId);
        }
        else {
            return this.dbService.getTaskDetail(taskId)
                .then(function (detail) {
                return detail && detail.taskId
                    ? Promise.resolve(detail)
                    : _this.downloadService.getTaskDetail(taskId.split('#')[0])
                        .then(function (detail) {
                        detail.taskId = taskId;
                        return _this.dbService.saveTaskDetail(detail)
                            .then(function (result) { return result ? _this.dbService.updateTaskExtendInfo(detail) : false; });
                    })
                        .then(function (result) { return _this.dbService.getTaskDetail(taskId); });
            });
        }
    };
    /**
     * 检查超期工单
     * @param overdueTime
     * @returns {any}
     */
    DataService.prototype.checkOverdueTimeTasks = function (overdueTime) {
        var _this = this;
        if (this.globalService.isChrome) {
            if (!overdueTime) {
                return Promise.resolve([]);
            }
            return this.downloadService.getTasks(this.globalService.userId, 1, 100)
                .then(function (tasks) {
                if (!tasks || tasks.length <= 0) {
                    return Promise.resolve([]);
                }
                var promises = tasks.map(function (task) { return _this.downloadService.getTaskDetail(task.taskId); });
                return Promise.all(promises)
                    .then(function (taskDetails) {
                    if (!taskDetails || taskDetails.length <= 0) {
                        return Promise.resolve([]);
                    }
                    var currentTime = new Date().getTime();
                    var arrivedTime = overdueTime.arrived + currentTime;
                    var replyTime = overdueTime.reply + currentTime;
                    var candidateTasks = [];
                    var _loop_1 = function (taskDetail) {
                        if ((taskDetail.arrivedDeadLine && taskDetail.arrivedDeadLine < arrivedTime)
                            || (taskDetail.replyDeadLine && taskDetail.replyDeadLine < replyTime)) {
                            var task = tasks.find(function (task) { return task.taskId === taskDetail.taskId; });
                            if (task) {
                                if (taskDetail.arrivedDeadLine < arrivedTime) {
                                    task.extendedInfo = {
                                        arrivedDeadLine: taskDetail.arrivedDeadLine
                                    };
                                }
                                else if (taskDetail.replyDeadLine < replyTime) {
                                    task.extendedInfo = {
                                        replyDeadLine: taskDetail.replyDeadLine
                                    };
                                }
                                candidateTasks.push(task);
                            }
                        }
                    };
                    for (var _i = 0, taskDetails_1 = taskDetails; _i < taskDetails_1.length; _i++) {
                        var taskDetail = taskDetails_1[_i];
                        _loop_1(taskDetail);
                    }
                    return Promise.resolve(candidateTasks);
                });
            });
        }
        else {
            return this.dbService.checkOverdueTimeTasks(this.globalService.userId, overdueTime, new Date().getTime());
        }
    };
    /**
     * 获取任务详情
     * @returns {Promise<Array<TaskDetail>>}
     */
    // public getTaskDetailByUserId(): Promise<Array<TaskDetail>> {
    //   if (this.globalService.isChrome) {
    //     return Promise.reject([]);
    //   } else {
    //     return this.dbService.getTaskIds(this.globalService.userId)
    //       .then(taskIds => this.dbService.getTaskDetails(taskIds))
    //       .catch(error => console.error(error));
    //   }
    // }
    /**
     * 历史工单获取记录
     * @param since
     * @param count
     * @param key
     * @returns {any}
     */
    DataService.prototype.getHistories = function (since, count, key) {
        if (this.globalService.isChrome) {
            return Promise.reject('chrome');
        }
        else {
            return this.dbService.getHistories(this.globalService.userId, undefined, [__WEBPACK_IMPORTED_MODULE_2__model_Task__["b" /* TaskState */].Reject, __WEBPACK_IMPORTED_MODULE_2__model_Task__["b" /* TaskState */].Reply], [], key, since, count);
        }
    };
    DataService.prototype.getReplyHistories = function (taskIds) {
        if (this.globalService.isChrome) {
            return Promise.resolve([]);
        }
        else {
            return this.dbService.getSpecialHistories(this.globalService.userId, taskIds, __WEBPACK_IMPORTED_MODULE_2__model_Task__["b" /* TaskState */].Reply);
        }
    };
    DataService.prototype.getHistory = function (taskId, state) {
        if (this.globalService.isChrome) {
            return Promise.reject('chrome');
        }
        else {
            return this.dbService.getSpecialHistories(this.globalService.userId, [taskId], state)
                .then(function (histories) { return histories.length > 0 ? Promise.resolve(histories[0]) : Promise.reject('none history'); });
        }
    };
    DataService.prototype.checkIfExistNotUploadedHistories = function (taskIds) {
        if (this.globalService.isChrome) {
            return Promise.resolve([]);
        }
        else {
            return this.dbService.getSpecialHistories(this.globalService.userId, taskIds, undefined, [this.globalService.uploadedFlagForLocal, this.globalService.uploadedFlagForUploading]);
        }
    };
    DataService.prototype.deleteOneTaskWithAllInfos = function (taskId) {
        if (this.globalService.isChrome) {
            return Promise.resolve(false);
        }
        else {
            return this.dbService.deleteOneTaskWithAllInfos(this.globalService.userId, taskId);
        }
    };
    /**
     * 获取未派工任务
     * @param since
     * @param count
     * @returns {Promise<Array<SearchTask>>}
     */
    DataService.prototype.getUnDispatchedTasks = function (since, count) {
        return this.downloadService.getUnDispatchedTasks(this.globalService.userId, since, count);
    };
    /**
     * 获取已派工任务
     * @param since
     * @param count
     * @param minutes
     * @returns {Promise<Array<SearchTask>>}
     */
    DataService.prototype.getDispatchedTasks = function (since, count, minutes) {
        return this.downloadService.getDispatchedTasks(this.globalService.userId, since, count, minutes);
    };
    /**
     * 站点任务接单
     * @param acceptExInfo
     * @returns {Promise<boolean>}
     */
    DataService.prototype.acceptEx = function (acceptExInfo) {
        return this.uploadService.acceptEx(acceptExInfo);
    };
    /**
     * 站点派单
     * @param dispatchInfo
     * @returns {Promise<boolean>}
     */
    DataService.prototype.dispatch = function (dispatchInfo) {
        return this.uploadService.dispatch(dispatchInfo);
    };
    /**
     * 站点销单
     * @param cancelExInfo
     * @returns {Promise<boolean>}
     */
    DataService.prototype.cancelEx = function (cancelExInfo) {
        return this.uploadService.cancelEx(cancelExInfo);
    };
    /**
     * 下载词语信息
     * @returns {Promise<Array<Word>>}
     */
    DataService.prototype.downloadWords = function () {
        var _this = this;
        return this.downloadService.getAllWords('all')
            .then(function (words) { return _this.dbService.saveWords(words); })
            .catch(function (error) {
            console.error(error);
            _this.globalService.showToast(error);
            return Promise.resolve(false);
        });
    };
    /**
     *
     * @returns {Promise<boolean>}
     */
    DataService.prototype.checkIfDownloadWords = function () {
        var _this = this;
        return this.dbService.getWordsCount()
            .then(function (count) { return count > 0
            ? Promise.resolve(true)
            : _this.downloadService.getAllWords('all')
                .then(function (words) { return _this.dbService.saveWords(words); }); })
            .catch(function (error) {
            console.error(error);
            _this.globalService.showToast(error);
            return Promise.resolve(false);
        });
    };
    /**
     *
     * @returns {Promise<boolean|boolean>}
     */
    DataService.prototype.checkIfDownloadMaterials = function () {
        var _this = this;
        return this.configService.getSysRegion()
            .then(function (region) {
            if (region && region === __WEBPACK_IMPORTED_MODULE_11__ConfigService__["a" /* ConfigService */].fushunRegion) {
                return _this.dbService.getMaterialsCount()
                    .then(function (count) { return count > 0
                    ? Promise.resolve(true)
                    : _this.downloadService.getAllMaterials('all')
                        .then(function (materials) { return _this.dbService.saveMaterials(materials); }); })
                    .catch(function (error) {
                    console.error(error);
                    _this.globalService.showToast(error);
                    return Promise.resolve(false);
                });
            }
            else {
                return Promise.resolve(true);
            }
        });
    };
    /**
     * 下载材料信息
     */
    DataService.prototype.downloadMaterials = function () {
        var _this = this;
        return this.configService.getSysRegion()
            .then(function (region) {
            if (region && region === __WEBPACK_IMPORTED_MODULE_11__ConfigService__["a" /* ConfigService */].fushunRegion) {
                return _this.downloadService.getAllMaterials('all')
                    .then(function (materials) { return _this.dbService.saveMaterials(materials); })
                    .catch(function (error) {
                    console.error(error);
                    _this.globalService.showToast(error);
                    return Promise.resolve(false);
                });
            }
            else {
                return Promise.resolve(true);
            }
        });
    };
    /**
     * 材料类别
     * @returns {Promise<Array<Material>>}
     */
    DataService.prototype.getOptMaterialLB = function () {
        var _this = this;
        var groupKey = 'LB';
        return (this.optMaterialLB && this.optMaterialLB.length > 0)
            ? Promise.resolve(this.optMaterialLB)
            : this.dbService.getMaterials(groupKey)
                .then(function (materials) {
                return _this.optMaterialLB = materials;
            })
                .catch(function (error) {
                console.log(error);
            });
    };
    /**
     * 材料型号
     * @param parentId
     */
    DataService.prototype.getOptMaterialXH = function (parentId) {
        var _this = this;
        var groupKey = 'XH';
        return (this.optMaterialXH && this.optMaterialXH.length > 0 && this.optMaterialXH[0].parentId == parentId)
            ? Promise.resolve(this.optMaterialXH)
            : this.dbService.getMaterials(groupKey)
                .then(function (materials) {
                var newMaterials = [];
                for (var _i = 0, materials_1 = materials; _i < materials_1.length; _i++) {
                    var material = materials_1[_i];
                    if (material.parentId == parentId) {
                        newMaterials.push(material);
                    }
                }
                return _this.optMaterialXH = newMaterials;
            })
                .catch(function (error) {
                console.log(error);
            });
    };
    /**
     * 材料规格
     * @param parentId
     * @returns {Promise<Array<Material>>|Promise<TResult|TResult2|Array<Material>>}
     */
    DataService.prototype.getOptMaterialGG = function (parentId) {
        var _this = this;
        var groupKey = 'GG';
        return (this.optMaterialGG && this.optMaterialGG.length > 0 && this.optMaterialGG[0].parentId == parentId)
            ? Promise.resolve(this.optMaterialGG)
            : this.dbService.getMaterials(groupKey)
                .then(function (materials) {
                var newMaterials = [];
                for (var _i = 0, materials_2 = materials; _i < materials_2.length; _i++) {
                    var material = materials_2[_i];
                    if (material.parentId == parentId) {
                        newMaterials.push(material);
                    }
                }
                return _this.optMaterialGG = newMaterials;
            })
                .catch(function (error) {
                console.log(error);
            });
    };
    /**
     * 材料厂家
     * @param parentId
     * @returns {Promise<Array<Material>>|Promise<TResult|TResult2|Array<Material>>}
     */
    DataService.prototype.getOptMaterialCJ = function (parentId) {
        var _this = this;
        var groupKey = 'CJ';
        return (this.optMaterialCJ && this.optMaterialCJ.length > 0 && this.optMaterialCJ[0].parentId == parentId)
            ? Promise.resolve(this.optMaterialCJ)
            : this.dbService.getMaterials(groupKey)
                .then(function (materials) {
                var newMaterials = [];
                for (var _i = 0, materials_3 = materials; _i < materials_3.length; _i++) {
                    var material = materials_3[_i];
                    if (material.parentId == parentId) {
                        newMaterials.push(material);
                    }
                }
                return _this.optMaterialCJ = newMaterials;
            })
                .catch(function (error) {
                console.log(error);
            });
    };
    /**
     * 获取处理类别
     * @returns {Promise<Array<Word>>|Promise<TResult>}
     */
    DataService.prototype.getOptTypes = function () {
        var _this = this;
        var group = 'CL_LEIBIE';
        var rootName = '处理类别';
        return (this.optTypes && this.optTypes.length > 0)
            ? Promise.resolve(this.optTypes)
            : this.dbService.getWords(group)
                .catch(function (error) {
                console.error(error);
                return _this.downloadService.getAllWords(group);
            })
                .then(function (words) {
                return _this.optTypes = _this.tree2list(words, rootName);
            });
    };
    /**
     * 获取处理内容
     * @param parentId
     * @returns {Promise<Array<Word>>}
     */
    DataService.prototype.getOptContents = function (parentId) {
        var _this = this;
        var group = 'CL_NEIRONG';
        return (this.optContents && this.optContents.length > 0 && this.optContents[0].wParentId === parentId)
            ? Promise.resolve(this.optContents)
            : this.dbService.getWords(group)
                .catch(function (error) {
                console.error(error);
                return _this.downloadService.getAllWords(group);
            })
                .then(function (words) {
                var newWords = [];
                for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
                    var word = words_1[_i];
                    if (word.wParentId === parentId) {
                        newWords.push(word);
                    }
                }
                return _this.optContents = newWords;
            });
    };
    /**
     * 获取发生原因
     * @returns {Promise<Array<Word>>|Promise<TResult>}
     */
    DataService.prototype.getOptReasons = function () {
        var _this = this;
        var group = 'FS_YUANYIN';
        var rootName = '发生原因';
        return (this.optReasons && this.optReasons.length > 0)
            ? Promise.resolve(this.optReasons)
            : this.dbService.getWords(group)
                .catch(function (error) {
                console.error(error);
                return _this.downloadService.getAllWords(group);
            })
                .then(function (words) {
                return _this.optReasons = _this.tree2list(words, rootName);
            });
    };
    /**
     * 获取解决措施
     * @returns {Promise<Array<Word>>|Promise<TResult>}
     */
    DataService.prototype.getOptSolutions = function () {
        var _this = this;
        var group = 'JJ_CUOSHI';
        var rootName = '解决措施';
        return (this.optSolutions && this.optSolutions.length > 0)
            ? Promise.resolve(this.optSolutions)
            : this.dbService.getWords(group)
                .catch(function (error) {
                console.error(error);
                return _this.downloadService.getAllWords(group);
            })
                .then(function (words) {
                return _this.optSolutions = _this.tree2list(words, rootName);
            });
    };
    /**
     * 获取处理结果
     * @returns {Promise<Array<Word>>|Promise<TResult>}
     */
    DataService.prototype.getOptResults = function () {
        var _this = this;
        var group = 'CL_JIEGUO';
        var rootName = '处理结果';
        return (this.optResults && this.optResults.length > 0)
            ? Promise.resolve(this.optResults)
            : this.dbService.getWords(group)
                .catch(function (error) {
                console.error(error);
                return _this.downloadService.getAllWords(group);
            })
                .then(function (words) {
                return _this.optResults = _this.tree2list(words, rootName);
            });
    };
    /**
     * 获取反映类别（查询界面）
     * @returns {Promise<Array<Word>>|Promise<TResult>}
     */
    DataService.prototype.getReflectTypes = function () {
        var _this = this;
        var group = 'FY_LEIBIE';
        var rootName = '反映类别';
        return (this.reflectTypes && this.reflectTypes.length > 0)
            ? Promise.resolve(this.reflectTypes)
            : this.dbService.getWords(group)
                .catch(function (error) {
                console.error(error);
                return _this.downloadService.getAllWords(group);
            })
                .then(function (words) {
                return _this.reflectTypes = _this.tree2list(words, rootName);
            });
    };
    /**
     * 获取反映内容
     * @returns {Promise<Array<Word>>|Promise<TResult>}
     */
    DataService.prototype.getReflectContents = function () {
        var _this = this;
        var group = 'FY_NEIRONG';
        var rootName = '反映内容';
        return (this.reflectContents && this.reflectContents.length > 0)
            ? Promise.resolve(this.reflectContents)
            : this.dbService.getWords(group)
                .catch(function (error) {
                console.error(error);
                return _this.downloadService.getAllWords(group);
            })
                .then(function (words) {
                return _this.reflectContents = _this.tree2list(words, rootName);
            });
    };
    /**
     * 查询任务
     */
    DataService.prototype.searchTask = function (request) {
        return this.downloadService.getSearchTasks(this.globalService.userId, request);
    };
    /**
     * 查询工单数量
     */
    DataService.prototype.searchTaskCount = function (request) {
        return this.downloadService.getSearchTaskCount(this.globalService.userId, request);
    };
    /**
     * 查询任务详情
     * @param taskId 任务编号
     */
    DataService.prototype.searchTaskDetails = function (taskId) {
        return this.downloadService.getSearchTaskDetails(taskId);
    };
    /**
     * 获取公告信息
     * @returns {Promise<Array<News>>}
     */
    DataService.prototype.getNews = function () {
        return this.downloadService.getNews();
    };
    /**
     * 获取用户信息
     * @param user
     * @returns {Promise<UserResult>}
     */
    DataService.prototype.doLogin = function (user) {
        return this.downloadService.doLogin(user);
    };
    /**
     * 获取管理员用户信息
     * @returns {Promise<UserRole>}
     */
    DataService.prototype.getManageInfo = function () {
        return this.downloadService.getManagerUserInfo(this.globalService.userId);
    };
    /**
     * 获取外勤用户信息
     * @returns {Promise<UserWorkInfo>}
     */
    DataService.prototype.getWorkInfo = function () {
        return this.downloadService.getWorkerUserInfo(this.globalService.userId);
    };
    /**
     * 检查app更新
     * @param version
     * @returns {Promise<VersionInfo>}
     */
    DataService.prototype.checkAppVersion = function (version) {
        return this.downloadService.checkAppVersion(version);
    };
    /**
     * 检查数据包更新
     * @param version
     * @returns {Promise<VersionInfo>}
     */
    DataService.prototype.checkDataVersion = function (version) {
        return this.downloadService.checkDataVersion(version);
    };
    /**
     * 获取施工人员
     * @param userId
     * @returns {Promise<Array<Personnel>>}
     */
    DataService.prototype.getPersonnels = function (userId) {
        var _this = this;
        return (this.personnels && this.personnels.length > 0)
            ? Promise.resolve(this.personnels)
            : this.dbService.getPersonnels()
                .catch(function (error) {
                console.error(error);
                return _this.downloadService.getPersonnels(_this.globalService.userId);
            })
                .then(function (personnels) {
                return _this.personnels = personnels;
            });
    };
    /**
     *
     * @returns {Promise<boolean|boolean>}
     */
    DataService.prototype.downloadPersonnels = function () {
        var _this = this;
        return this.globalService.isWorker
            ? Promise.resolve(true)
            : this.downloadService.getPersonnels(this.globalService.userId)
                .then(function (personnels) { return _this.dbService.savePersonnels(personnels); })
                .catch(function (error) {
                console.error(error);
                _this.globalService.showToast(error);
                return Promise.resolve(false);
            });
    };
    /**
     *
     * @returns {Promise<boolean|boolean>}
     */
    DataService.prototype.checkIfDownloadPersonnels = function () {
        var _this = this;
        return this.dbService.getPersonnelsCount()
            .then(function (count) { return count > 0
            ? Promise.resolve(true)
            : _this.downloadService.getPersonnels(_this.globalService.userId)
                .then(function (personnels) { return _this.dbService.savePersonnels(personnels); }); })
            .catch(function (error) {
            console.error(error);
            _this.globalService.showToast(error);
            return Promise.resolve(false);
        });
    };
    /**
     * 拍照
     * @param taskId
     * @returns {Promise<any>}
     */
    DataService.prototype.takePicture = function (taskId) {
        return this.mediaService.takePicture(taskId);
    };
    /**
     * 视频
     * @param taskId
     * @returns {Promise<any>}
     */
    DataService.prototype.takeVideo = function (taskId) {
        return this.mediaService.takeVideo(taskId);
    };
    DataService.prototype.playVideo = function (path) {
        return this.mediaService.playVideo(path);
    };
    /**
     * 开始录音
     * @returns {Promise<any>}
     */
    DataService.prototype.startRecordAudio = function () {
        return this.mediaService.startRecordAudio();
    };
    /**
     * 结束录音
     * @param file
     * @returns {Promise<boolean>}
     */
    DataService.prototype.endRecordAudio = function (file) {
        return this.mediaService.endRecordAudio(file);
    };
    DataService.prototype.playAudio = function (name) {
        return this.mediaService.playAudio(name);
    };
    DataService.prototype.stopAudio = function (file) {
        return this.mediaService.stopAudio(file);
    };
    DataService.prototype.playAlarm = function () {
        this.mediaService.playAlarm("alertDeadline.mp3");
    };
    /**
     * 保存录音到数据库
     * @param taskId
     * @param fileName
     * @returns {Promise<boolean>}
     */
    DataService.prototype.saveAudio = function (taskId, fileName) {
        if (taskId && fileName) {
            return this.dbService.saveMedia({
                userId: this.globalService.userId,
                taskId: taskId,
                fileType: __WEBPACK_IMPORTED_MODULE_7__model_Media__["a" /* MediaType */].Audio,
                fileName: fileName,
                uploadedFlag: this.globalService.uploadedFlagForLocal
            });
        }
        else {
            return Promise.reject('taskId or fileName is error');
        }
    };
    /**
     *
     * @param fileName
     * @returns {any}
     */
    DataService.prototype.deleteOneMedia = function (fileName) {
        if (fileName) {
            return this.dbService.deleteOneMedia(this.globalService.userId, fileName);
        }
        else {
            return Promise.reject('taskId or fileName is error');
        }
    };
    /**
     * 多级索引转一级索引
     * @param words
     * @param rootName
     * @returns {any}
     */
    DataService.prototype.tree2list = function (words, rootName) {
        function find(srcWords, destWords, srcWord) {
            var found = false;
            for (var _i = 0, srcWords_1 = srcWords; _i < srcWords_1.length; _i++) {
                var word = srcWords_1[_i];
                if (word.wParentId === srcWord.wid) {
                    find(srcWords, destWords, word);
                    found = true;
                }
            }
            if (!found) {
                destWords.push(srcWord);
            }
        }
        var rootWord;
        for (var _i = 0, words_2 = words; _i < words_2.length; _i++) {
            var word = words_2[_i];
            if (word.wName === rootName && word.wParentId === 0) {
                rootWord = word;
                break;
            }
        }
        if (!rootWord) {
            return [];
        }
        var newWords = [];
        find(words, newWords, rootWord);
        return newWords;
    };
    /**
     * 材料清单保存以及上传
     * @param data
     * @returns {Promise<T>}
     */
    DataService.prototype.saveMaterialInfo = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dbService.saveMaterialInfo(data)
                .then(function (result) {
                if (result) {
                    // resolve(true);
                    return _this.uploadService.uploadMaterialsAdd(data.infos)
                        .then(function (result) {
                        //更新上传标志
                        if (result) {
                            data.uploadFlag = _this.globalService.uploadedFlagForUploaded; //已上传
                            resolve(_this.dbService.updateFlagMaterials(data));
                        }
                        else {
                            reject("upload failed");
                        }
                    })
                        .catch(function (error) {
                        reject(false);
                    });
                }
                else {
                    reject("save to db failed");
                }
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * 获取本地某工单编号的材料清单
     * @param serialNumber
     * @returns {Promise<Array<DataMaterialInfo>>}
     */
    DataService.prototype.getMaterialInfo = function (serialNumber) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dbService.getMaterialInfo(serialNumber)
                .then(function (data) {
                var arrays = data.infos;
                var promiseArray = [];
                for (var _i = 0, arrays_1 = arrays; _i < arrays_1.length; _i++) {
                    var temp = arrays_1[_i];
                    promiseArray.push(_this.getMaterialAndUnit(temp));
                }
                Promise.all(promiseArray)
                    .then(function (result) {
                    var materialInfoEx = new __WEBPACK_IMPORTED_MODULE_10__model_MaterialsInfo__["b" /* MaterialInfoEx */]();
                    materialInfoEx.taskId = serialNumber;
                    materialInfoEx.infos = result;
                    materialInfoEx.uploadFlag = data.uploadFlag;
                    resolve(materialInfoEx);
                })
                    .catch(function (error) {
                    reject(error);
                });
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    DataService.prototype.getMaterialAndUnit = function (temp) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([_this.dbService.getMaterial(temp.materialCategory),
                _this.dbService.getMaterial(temp.materialType), _this.dbService.getMaterial(temp.materialSize),
                _this.dbService.getMaterial(temp.manufacturer), _this.configService.getOneMaterialUnit(temp.materialUnit)])
                .then(function (result) {
                console.log(result);
                var info = new __WEBPACK_IMPORTED_MODULE_10__model_MaterialsInfo__["c" /* MaterialsInfo */]();
                info.category = result[0];
                info.type = result[1];
                info.size = result[2];
                info.productor = result[3];
                info.unit = result[4];
                info.count = temp.count;
                info.remark = temp.remark;
                resolve(info);
            })
                .catch(function (error) {
                console.log(error);
            });
        });
    };
    /**
     * 获得维修信息
     * @param serialNumber
     * @returns {Promise<MaintainInfo>}
     */
    DataService.prototype.getMaintainInfo = function (serialNumber) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dbService.queryMaintainInfo(serialNumber)
                .then(function (maintainInfo) {
                resolve(maintainInfo);
            })
                .catch(function (error) {
                console.log("getMaintainInfo:" + error);
                return _this.downloadService.getMaintainInfo(serialNumber)
                    .then(function (maintainInfo) {
                    _this.dbService.saveMaintainInfo(maintainInfo)
                        .then(function (result) {
                        if (result) {
                            resolve(maintainInfo);
                        }
                        else {
                            reject(result);
                        }
                    })
                        .catch(function (error) {
                        reject(error);
                    });
                })
                    .catch(function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * 上传所有未上传的材料工单信息
     */
    DataService.prototype.uploadNotUploadMaterialInfos = function () {
        _super.prototype.sendMsg.call(this, { msgType: __WEBPACK_IMPORTED_MODULE_8__SyncService__["a" /* MsgType */].UploadMaterialInfos });
    };
    /**
     *
     * @param url
     * @param name
     * @returns {Promise<TResult>}
     */
    DataService.prototype.playCachedAudio = function (url, name) {
        var _this = this;
        return this.fileService.checkFile(this.fileService.getCacheDir() + "/", name)
            .then(function (result) {
            var path = _this.fileService.getCacheDir() + "/" + name;
            if (result) {
                return Promise.resolve(path);
            }
            else {
                return _this.downloadService.downloadFile(url, path);
            }
        })
            .then(function (path) { return path && _this.mediaService.playAudio(path, true); });
    };
    /**
     * 播放缓存视频
     * @param url
     * @param name
     * @returns {Promise<TResult>}
     */
    DataService.prototype.playCachedVideo = function (url, name) {
        var _this = this;
        return this.fileService.checkFile(this.fileService.getCacheDir() + "/", name)
            .then(function (result) {
            var path = _this.fileService.getCacheDir() + "/" + name;
            if (result) {
                return Promise.resolve(path);
            }
            else {
                return _this.downloadService.downloadFile(url, path);
            }
        })
            .then(function (path) { return path && _this.playVideo(path); });
    };
    /**
     * 获取附件
     * @param taskId
     * @returns {Promise<Array<Attachment>>}
     */
    DataService.prototype.getAttachments = function (taskId) {
        return this.downloadService.getAttachments(taskId);
    };
    /**
     * 保存消息
     * @param data
     * @returns {any}
     */
    DataService.prototype.savePushMessage = function (data) {
        var _this = this;
        try {
            if (!data) {
                return Promise.resolve(false);
            }
            var message = JSON.parse(data);
            if (!message
                || !message.hasOwnProperty('type')
                || message['type'] !== 201
                || !message.hasOwnProperty('content')
                || !(message['content'] instanceof Array)) {
                return Promise.resolve(false);
            }
            //let type: number = message['type'];
            var tasks = message['content'];
            for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
                var task = tasks_1[_i];
                task.taskId += "#" + task.assignTime; // modify for the rejected task
            }
            return this.dbService.saveTasks(this.globalService.userId, tasks)
                .then(function (result) {
                if (result) {
                    _super.prototype.sendMsg.call(_this, { msgType: __WEBPACK_IMPORTED_MODULE_8__SyncService__["a" /* MsgType */].DownloadDetailsOfTasks });
                }
                return result;
            });
        }
        catch (err) {
            console.error(err);
            return Promise.reject(err);
        }
    };
    return DataService;
}(__WEBPACK_IMPORTED_MODULE_8__SyncService__["b" /* SyncService */]));
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__DownloadService__["a" /* DownloadService */],
        __WEBPACK_IMPORTED_MODULE_4__UploadService__["a" /* UploadService */],
        __WEBPACK_IMPORTED_MODULE_3__GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_5__DbService__["a" /* DbService */],
        __WEBPACK_IMPORTED_MODULE_11__ConfigService__["a" /* ConfigService */],
        __WEBPACK_IMPORTED_MODULE_6__MediaService__["a" /* MediaService */],
        __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_12__FileService__["a" /* FileService */]])
], DataService);

//# sourceMappingURL=DataService.js.map

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 139;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__FileService__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Created by zhangjing on 2017/6/19.
 * 读取配置文件
 */
var ConfigService = ConfigService_1 = (function () {
    function ConfigService(http, storage, file, globalService, fileService) {
        this.http = http;
        this.storage = storage;
        this.file = file;
        this.globalService = globalService;
        this.fileService = fileService;
        this.basePath = './assets/config/';
        this.systemFileName = 'system.json';
        this.mapFileName = 'map.json';
        this.systemFilePath = "" + this.basePath + this.systemFileName;
        this.mapFilePath = "" + this.basePath + this.mapFileName;
        this.systemStorageName = 'system';
        this.mapStorageName = 'map';
        if (this.globalService.isChrome) {
            this.storage.clear();
        }
    }
    /**
     * 初始化
     * @returns {Promise<boolean|boolean>}
     */
    ConfigService.prototype.initConfigs = function () {
        var _this = this;
        return this.readSystemConfig()
            .then(function (data) { return _this.systemConfig = data; })
            .then(function () { return _this.readMapConfig(); })
            .then(function (data) { return _this.mapConfig = data; });
    };
    /**
     * 获取数据服务地址
     * @returns {Promise<string>|Promise<T>}
     */
    ConfigService.prototype.getServerBaseUri = function () {
        var _this = this;
        return ConfigService_1.isValid(this.systemConfig, 'serverBaseUri')
            ? Promise.resolve(this.systemConfig.serverBaseUri)
            : new Promise(function (resolve, reject) {
                _this.readSystemConfig()
                    .then(function (data) {
                    _this.systemConfig = data;
                    if (ConfigService_1.isValid(_this.systemConfig, 'outerBaseUri')
                        && ConfigService_1.isValid(_this.systemConfig, 'innerBaseUri')
                        && ConfigService_1.isValid(_this.systemConfig, 'isOuterNetwork')) {
                        _this.systemConfig.serverBaseUri =
                            _this.systemConfig.isOuterNetwork ? _this.systemConfig.outerBaseUri : _this.systemConfig.innerBaseUri;
                        resolve(_this.systemConfig.serverBaseUri);
                    }
                    else {
                        reject("failure to getServerBaseUri");
                    }
                })
                    .catch(function (error) { return reject(error); });
            });
    };
    /**
     * 获取数据服务地址
     * @returns {Promise<[string,string]>|Promise<T>}
     */
    ConfigService.prototype.getServerBaseUris = function () {
        var _this = this;
        return ConfigService_1.isValid(this.systemConfig, 'serverBaseUri')
            ? Promise.resolve([this.systemConfig.outerBaseUri, this.systemConfig.innerBaseUri])
            : new Promise(function (resolve, reject) {
                _this.readSystemConfig()
                    .then(function (data) {
                    _this.systemConfig = data;
                    if (ConfigService_1.isValid(_this.systemConfig, 'outerBaseUri')
                        && ConfigService_1.isValid(_this.systemConfig, 'innerBaseUri')
                        && ConfigService_1.isValid(_this.systemConfig, 'isOuterNetwork')) {
                        resolve([_this.systemConfig.outerBaseUri, _this.systemConfig.innerBaseUri]);
                    }
                    else {
                        reject("failure to getServerBaseUris");
                    }
                })
                    .catch(function (error) { return reject(error); });
            });
    };
    /**
     *
     * @returns {Promise<string>|Promise<T>}
     */
    ConfigService.prototype.getFileBaseUri = function () {
        var _this = this;
        return ConfigService_1.isValid(this.systemConfig, 'fileServerBaseUri')
            ? Promise.resolve(this.systemConfig.fileServerBaseUri)
            : new Promise(function (resolve, reject) {
                _this.readSystemConfig()
                    .then(function (data) {
                    _this.systemConfig = data;
                    if (ConfigService_1.isValid(_this.systemConfig, 'fileOuterBaseUri')
                        && ConfigService_1.isValid(_this.systemConfig, 'fileInnerBaseUri')
                        && ConfigService_1.isValid(_this.systemConfig, 'isOuterNetwork')) {
                        _this.systemConfig.fileServerBaseUri =
                            _this.systemConfig.isOuterNetwork ? _this.systemConfig.fileOuterBaseUri : _this.systemConfig.fileInnerBaseUri;
                        resolve(_this.systemConfig.fileServerBaseUri);
                    }
                    else {
                        reject("failure to getFileBaseUri");
                    }
                })
                    .catch(function (error) { return reject(error); });
            });
    };
    /**
     *
     * @returns {Promise<[string,string]>|Promise<T>}
     */
    ConfigService.prototype.getFileBaseUris = function () {
        var _this = this;
        return ConfigService_1.isValid(this.systemConfig, 'fileServerBaseUri')
            ? Promise.resolve([this.systemConfig.fileOuterBaseUri, this.systemConfig.fileInnerBaseUri])
            : new Promise(function (resolve, reject) {
                _this.readSystemConfig()
                    .then(function (data) {
                    _this.systemConfig = data;
                    if (ConfigService_1.isValid(_this.systemConfig, 'fileOuterBaseUri')
                        && ConfigService_1.isValid(_this.systemConfig, 'fileInnerBaseUri')
                        && ConfigService_1.isValid(_this.systemConfig, 'isOuterNetwork')) {
                        resolve([_this.systemConfig.fileOuterBaseUri, _this.systemConfig.fileInnerBaseUri]);
                    }
                    else {
                        reject("failure to getFileBaseUris");
                    }
                })
                    .catch(function (error) { return reject(error); });
            });
    };
    /**
     * 获得材料接口地址
     * @returns {Promise<string>|Promise<T>}
     */
    ConfigService.prototype.getMaterialsBaseUri = function () {
        var _this = this;
        return ConfigService_1.isValid(this.systemConfig, 'materialsBaseUri')
            ? Promise.resolve(this.systemConfig.materialsBaseUri)
            : new Promise(function (resolve, reject) {
                _this.readSystemConfig()
                    .then(function (data) {
                    _this.systemConfig = data;
                    if (ConfigService_1.isValid(_this.systemConfig, 'isOuterNetwork')
                        && ConfigService_1.isValid(_this.systemConfig, 'materialsOuterBaseUri')
                        && ConfigService_1.isValid(_this.systemConfig, 'materialsInnerBaseUri')) {
                        _this.systemConfig.materialsBaseUri = _this.systemConfig.isOuterNetwork ? _this.systemConfig.materialsOuterBaseUri
                            : _this.systemConfig.materialsInnerBaseUri;
                        resolve(_this.systemConfig.materialsBaseUri);
                    }
                    else {
                        reject("failure to getMaterialsBaseUri");
                    }
                })
                    .catch(function (error) { return reject(error); });
            });
    };
    /**
     * 获取材料服务地址
     * @returns {Promise<[string,string]>|Promise<T>}
     */
    ConfigService.prototype.getMaterialsBaseUris = function () {
        var _this = this;
        return ConfigService_1.isValid(this.systemConfig, 'materialsBaseUri')
            ? Promise.resolve([this.systemConfig.materialsOuterBaseUri, this.systemConfig.materialsInnerBaseUri])
            : new Promise(function (resolve, reject) {
                _this.readSystemConfig()
                    .then(function (data) {
                    _this.systemConfig = data;
                    if (ConfigService_1.isValid(_this.systemConfig, 'isOuterNetwork')
                        && ConfigService_1.isValid(_this.systemConfig, 'materialsOuterBaseUri')
                        && ConfigService_1.isValid(_this.systemConfig, 'materialsInnerBaseUri')) {
                        resolve([_this.systemConfig.materialsOuterBaseUri, _this.systemConfig.materialsInnerBaseUri]);
                    }
                    else {
                        reject("failure to getMaterialsBaseUri");
                    }
                })
                    .catch(function (error) { return reject(error); });
            });
    };
    /**
     * 获得材料单位
     * @returns {Promise<Array<MaterialUnit>>|Promise<T>}
     */
    ConfigService.prototype.getMaterialUnit = function () {
        var _this = this;
        return ConfigService_1.isValid(this.systemConfig, "materialUnit")
            ? Promise.resolve(this.systemConfig.materialUnit)
            : new Promise(function (resolve, reject) {
                _this.readSystemConfig()
                    .then(function (data) {
                    _this.systemConfig = data;
                    if (ConfigService_1.isValid(_this.systemConfig, 'materialUnit')) {
                        resolve(_this.systemConfig.materialUnit);
                    }
                    else {
                        reject("failure to getmaterialUnit");
                    }
                })
                    .catch(function (error) { return reject(error); });
            });
    };
    /**
     * 获得某一个单位对象
     * @param id
     * @returns {Promise<MaterialUnit>|Promise<T>}
     */
    ConfigService.prototype.getOneMaterialUnit = function (id) {
        var _this = this;
        return ConfigService_1.isValid(this.systemConfig, "materialUnit")
            ? Promise.resolve(this.filterMaterialUnit(id, this.systemConfig.materialUnit))
            : new Promise(function (resolve, reject) {
                _this.readSystemConfig()
                    .then(function (data) {
                    _this.systemConfig = data;
                    if (ConfigService_1.isValid(_this.systemConfig, 'materialUnit')) {
                        resolve(_this.filterMaterialUnit(id, _this.systemConfig.materialUnit));
                    }
                    else {
                        reject("failure to getmaterialUnit");
                    }
                })
                    .catch(function (error) { return reject(error); });
            });
    };
    ConfigService.prototype.filterMaterialUnit = function (id, arrays) {
        if (!id || !arrays || arrays.length <= 0) {
            return null;
        }
        for (var _i = 0, arrays_1 = arrays; _i < arrays_1.length; _i++) {
            var temp = arrays_1[_i];
            if (temp.id == id) {
                return temp;
            }
        }
        return null;
    };
    /**
     * 是否是九宫格
     * @returns {Promise<T>}
     */
    ConfigService.prototype.isGridStyle = function () {
        var _this = this;
        return ConfigService_1.isValid(this.systemConfig, 'isGridStyle')
            ? Promise.resolve(this.systemConfig.isGridStyle)
            : new Promise(function (resolve, reject) {
                _this.readSystemConfig()
                    .then(function (data) {
                    _this.systemConfig = data;
                    if (ConfigService_1.isValid(_this.systemConfig, 'isGridStyle')) {
                        resolve(_this.systemConfig.isGridStyle);
                    }
                    else {
                        reject("failure to check isGridStyle");
                    }
                })
                    .catch(function (error) { return reject(error); });
            });
    };
    /**
     * 是否是外网
     * @returns {Promise<T>}
     */
    ConfigService.prototype.isOuterNetwork = function () {
        var _this = this;
        return ConfigService_1.isValid(this.systemConfig, 'isOuterNetwork')
            ? Promise.resolve(this.systemConfig.isOuterNetwork)
            : new Promise(function (resolve, reject) {
                _this.readSystemConfig()
                    .then(function (data) {
                    _this.systemConfig = data;
                    if (ConfigService_1.isValid(_this.systemConfig, 'isOuterNetwork')) {
                        resolve(_this.systemConfig.isOuterNetwork);
                    }
                    else {
                        reject("failure to check isOuterNetwork");
                    }
                })
                    .catch(function (error) { return reject(error); });
            });
    };
    /**
     * 是否是debug模式
     * @returns {Promise<T>}
     */
    ConfigService.prototype.isDebugMode = function () {
        var _this = this;
        return ConfigService_1.isValid(this.systemConfig, 'isDebugMode')
            ? Promise.resolve(this.systemConfig.isDebugMode)
            : new Promise(function (resolve, reject) {
                _this.readSystemConfig()
                    .then(function (data) {
                    _this.systemConfig = data;
                    if (ConfigService_1.isValid(_this.systemConfig, 'isDebugMode')) {
                        resolve(_this.systemConfig.isDebugMode);
                    }
                    else {
                        reject("failure to check isDebugMode");
                    }
                })
                    .catch(function (error) { return reject(error); });
            });
    };
    /**
     * 获取呼吸包间隔
     * @returns {Promise<T>}
     */
    ConfigService.prototype.getKeepAliveInterval = function () {
        var _this = this;
        return ConfigService_1.isValid(this.systemConfig, 'keepAliveInterval')
            ? Promise.resolve(this.systemConfig.keepAliveInterval)
            : new Promise(function (resolve, reject) {
                _this.readSystemConfig()
                    .then(function (data) {
                    _this.systemConfig = data;
                    if (ConfigService_1.isValid(_this.systemConfig, 'keepAliveInterval')) {
                        resolve(_this.systemConfig.keepAliveInterval);
                    }
                    else {
                        reject("failure to getKeepAliveInterval");
                    }
                })
                    .catch(function (error) { return reject(error); });
            });
    };
    /**
     * 获取超期时限设置
     * @returns {Promise<OverdueTime>|Promise<T>}
     */
    ConfigService.prototype.getOverdueTime = function () {
        var _this = this;
        return ConfigService_1.isValid(this.systemConfig, 'overdueTime')
            ? Promise.resolve(this.systemConfig.overdueTime)
            : new Promise(function (resolve, reject) {
                _this.readSystemConfig()
                    .then(function (data) {
                    _this.systemConfig = data;
                    if (ConfigService_1.isValid(_this.systemConfig, 'overdueTime')) {
                        resolve(_this.systemConfig.overdueTime);
                    }
                    else {
                        reject("failure to getOverdueTime");
                    }
                })
                    .catch(function (error) { return reject(error); });
            });
    };
    /**
     * 获取区域
     * @returns {Promise<T>}
     */
    ConfigService.prototype.getSysRegion = function () {
        var _this = this;
        return ConfigService_1.isValid(this.systemConfig, 'sysRegion')
            ? Promise.resolve(this.systemConfig.sysRegion)
            : new Promise(function (resolve, reject) {
                _this.readSystemConfig()
                    .then(function (data) {
                    _this.systemConfig = data;
                    if (ConfigService_1.isValid(_this.systemConfig, 'sysRegion')) {
                        resolve(_this.systemConfig.sysRegion);
                    }
                    else {
                        reject("failure to getSysRegion");
                    }
                })
                    .catch(function (error) { return reject(error); });
            });
    };
    /**
     * 是否使用新文件服务
     * @returns {Promise<boolean>|Promise<T>}
     */
    ConfigService.prototype.isNewFilService = function () {
        var _this = this;
        return ConfigService_1.isValid(this.systemConfig, 'newFileService')
            ? Promise.resolve(this.systemConfig.newFileService)
            : new Promise(function (resolve, reject) {
                _this.readSystemConfig()
                    .then(function (data) {
                    _this.systemConfig = data;
                    if (ConfigService_1.isValid(_this.systemConfig, 'newFileService')) {
                        resolve(_this.systemConfig.newFileService);
                    }
                    else {
                        reject("failure to check isNewFilService");
                    }
                })
                    .catch(function (error) { return reject(error); });
            });
    };
    /**
     * 获取地图url
     * @returns {Promise<T>}
     */
    ConfigService.prototype.getMapServerUrl = function () {
        var _this = this;
        return ConfigService_1.isValid(this.mapConfig, 'mapServerUrl')
            ? Promise.resolve(this.mapConfig.mapServerUrl)
            : new Promise(function (resolve, reject) {
                _this.readMapConfig()
                    .then(function (data) {
                    _this.mapConfig = data;
                    if (ConfigService_1.isValid(_this.mapConfig, 'mapServerUrl')) {
                        resolve(_this.mapConfig.mapServerUrl);
                    }
                    else {
                        reject("the url of map server is error");
                    }
                })
                    .catch(function (error) { return reject(error); });
            });
    };
    /**
     * 设置九宫格样式
     * @param isGridStyle
     * @returns {any}
     */
    ConfigService.prototype.setGridStyle = function (isGridStyle) {
        var _this = this;
        if (ConfigService_1.isValid(this.systemConfig, 'isGridStyle')) {
            return new Promise(function (resolve, reject) {
                var systemConfig = Object.create(_this.systemConfig);
                systemConfig.isGridStyle = isGridStyle;
                _this.writeSystemConfig(systemConfig)
                    .then(function (result) {
                    if (result) {
                        _this.systemConfig.isGridStyle = isGridStyle;
                    }
                    resolve(!!result);
                })
                    .catch(function (error) { return reject(error); });
            });
        }
        else {
            return Promise.reject("systemConfig has no data");
        }
    };
    /**
     * 设置内外网
     * @param isOuterNet
     * @returns {any}
     */
    ConfigService.prototype.setIsOuterNet = function (isOuterNet) {
        var _this = this;
        var promise;
        if (!this.systemConfig) {
            promise = this.readSystemConfig().then(function (data) { return _this.systemConfig = data; });
        }
        else {
            promise = Promise.resolve();
        }
        return promise.then(function () {
            if (ConfigService_1.isValid(_this.systemConfig, 'isOuterNetwork')) {
                return new Promise(function (resolve, reject) {
                    var systemConfig = Object.create(_this.systemConfig);
                    systemConfig.isOuterNetwork = isOuterNet;
                    _this.writeSystemConfig(systemConfig)
                        .then(function (result) {
                        if (result) {
                            _this.systemConfig.isOuterNetwork = isOuterNet;
                            _this.systemConfig.serverBaseUri = _this.systemConfig.isOuterNetwork ?
                                _this.systemConfig.outerBaseUri : _this.systemConfig.innerBaseUri;
                            _this.systemConfig.materialsBaseUri = _this.systemConfig.isOuterNetwork ?
                                _this.systemConfig.materialsOuterBaseUri : _this.systemConfig.materialsInnerBaseUri;
                        }
                        resolve(!!result);
                    })
                        .catch(function (error) { return reject(error); });
                });
            }
            else {
                return Promise.reject('sysytemConfig has no data');
            }
        });
    };
    /**
     * 设置数据地址
     * @param outerBaseUri
     * @param innerBaseUri
     * @param isOuterNetwork
     * @returns {any}
     */
    ConfigService.prototype.setServerBaseUris = function (outerBaseUri, innerBaseUri, isOuterNetwork) {
        var _this = this;
        if (ConfigService_1.isValid(this.systemConfig, 'outerBaseUri')
            && ConfigService_1.isValid(this.systemConfig, 'innerBaseUri')
            && ConfigService_1.isValid(this.systemConfig, 'serverBaseUri')
            && ConfigService_1.isValid(this.systemConfig, 'isOuterNetwork')) {
            return new Promise(function (resolve, reject) {
                var systemConfig = Object.create(_this.systemConfig);
                systemConfig.outerBaseUri = outerBaseUri;
                systemConfig.innerBaseUri = innerBaseUri;
                systemConfig.serverBaseUri = isOuterNetwork ? outerBaseUri : innerBaseUri;
                systemConfig.isOuterNetwork = isOuterNetwork;
                _this.writeSystemConfig(systemConfig)
                    .then(function (result) {
                    if (result) {
                        _this.systemConfig.outerBaseUri = outerBaseUri;
                        _this.systemConfig.innerBaseUri = innerBaseUri;
                        _this.systemConfig.serverBaseUri = isOuterNetwork ? outerBaseUri : innerBaseUri;
                        _this.systemConfig.isOuterNetwork = isOuterNetwork;
                    }
                    resolve(!!result);
                })
                    .catch(function (error) { return reject(error); });
            });
        }
        else {
            return Promise.reject('systemConfig has no data');
        }
    };
    /**
     * 设置文件服务地址
     * @param outerBaseUri
     * @param innerBaseUri
     * @param isOuterNetwork
     * @returns {any}
     */
    ConfigService.prototype.setFileBaseUris = function (outerBaseUri, innerBaseUri, isOuterNetwork) {
        var _this = this;
        if (ConfigService_1.isValid(this.systemConfig, 'fileOuterBaseUri')
            && ConfigService_1.isValid(this.systemConfig, 'fileInnerBaseUri')
            && ConfigService_1.isValid(this.systemConfig, 'fileServerBaseUri')
            && ConfigService_1.isValid(this.systemConfig, 'isOuterNetwork')) {
            return new Promise(function (resolve, reject) {
                var systemConfig = Object.create(_this.systemConfig);
                systemConfig.fileOuterBaseUri = outerBaseUri;
                systemConfig.fileInnerBaseUri = innerBaseUri;
                systemConfig.fileServerBaseUri = isOuterNetwork ? outerBaseUri : innerBaseUri;
                systemConfig.isOuterNetwork = isOuterNetwork;
                _this.writeSystemConfig(systemConfig)
                    .then(function (result) {
                    if (result) {
                        _this.systemConfig.fileOuterBaseUri = outerBaseUri;
                        _this.systemConfig.fileInnerBaseUri = innerBaseUri;
                        _this.systemConfig.fileServerBaseUri = isOuterNetwork ? outerBaseUri : innerBaseUri;
                        _this.systemConfig.isOuterNetwork = isOuterNetwork;
                    }
                    resolve(!!result);
                })
                    .catch(function (error) { return reject(error); });
            });
        }
        else {
            return Promise.reject('systemConfig has no data');
        }
    };
    /**
     * 设置材料地址
     * @param outerBaseUri
     * @param innerBaseUri
     * @param isOuterNetwork
     * @returns {any}
     */
    ConfigService.prototype.setMaterialBaseUris = function (outerBaseUri, innerBaseUri, isOuterNetwork) {
        var _this = this;
        if (ConfigService_1.isValid(this.systemConfig, 'materialsOuterBaseUri')
            && ConfigService_1.isValid(this.systemConfig, 'materialsInnerBaseUri')
            && ConfigService_1.isValid(this.systemConfig, 'materialsBaseUri')
            && ConfigService_1.isValid(this.systemConfig, 'isOuterNetwork')) {
            return new Promise(function (resolve, reject) {
                var systemConfig = Object.create(_this.systemConfig);
                systemConfig.materialsOuterBaseUri = outerBaseUri;
                systemConfig.materialsInnerBaseUri = innerBaseUri;
                systemConfig.materialsBaseUri = isOuterNetwork ? outerBaseUri : innerBaseUri;
                systemConfig.isOuterNetwork = isOuterNetwork;
                _this.writeSystemConfig(systemConfig)
                    .then(function (result) {
                    if (result) {
                        _this.systemConfig.materialsOuterBaseUri = outerBaseUri;
                        _this.systemConfig.materialsInnerBaseUri = innerBaseUri;
                        _this.systemConfig.materialsBaseUri = isOuterNetwork ? outerBaseUri : innerBaseUri;
                        _this.systemConfig.isOuterNetwork = isOuterNetwork;
                    }
                    resolve(!!result);
                })
                    .catch(function (error) { return reject(error); });
            });
        }
        else {
            return Promise.reject('systemConfig has no data');
        }
    };
    /**
     * 设置呼吸频率
     * @param keepAlive
     * @returns {any}
     */
    ConfigService.prototype.setKeepAlive = function (keepAlive) {
        var _this = this;
        if (ConfigService_1.isValid(this.systemConfig, 'keepAliveInterval')) {
            return new Promise(function (resolve, reject) {
                var systemConfig = Object.create(_this.systemConfig);
                systemConfig.keepAliveInterval = keepAlive;
                _this.writeSystemConfig(systemConfig)
                    .then(function (result) {
                    if (result) {
                        _this.systemConfig.keepAliveInterval = keepAlive;
                    }
                    resolve(!!result);
                })
                    .catch(function (error) { return reject(error); });
            });
        }
        else {
            return Promise.reject('systemConfig has no data');
        }
    };
    /**
     * 设置超期时限
     * @param overdueTime
     * @returns {any}
     */
    ConfigService.prototype.setOverdueTime = function (overdueTime) {
        var _this = this;
        if (ConfigService_1.isValid(this.systemConfig, 'overdueTime')) {
            return new Promise(function (resolve, reject) {
                var systemConfig = Object.create(_this.systemConfig);
                systemConfig.overdueTime = overdueTime;
                _this.writeSystemConfig(systemConfig)
                    .then(function (result) {
                    if (result) {
                        _this.systemConfig.overdueTime = overdueTime;
                    }
                    resolve(!!result);
                })
                    .catch(function (error) { return reject(error); });
            });
        }
        else {
            return Promise.reject('systemConfig has no data');
        }
    };
    /**
     * 读取system.json
     * @returns {Promise<TResult2|SystemConfig>|Promise<any>|Promise<SystemConfig>}
     */
    ConfigService.prototype.readSystemConfig = function () {
        var _this = this;
        if (this.globalService.isChrome) {
            return this.storage.get(this.systemStorageName)
                .then(function (val) {
                if (!val) {
                    return _this.http.get(_this.systemFilePath)
                        .toPromise()
                        .then(function (res) { return _this.storage.set(_this.systemStorageName, JSON.stringify(res.json())); })
                        .then(function (val) { return ConfigService_1.transform2SystemConfig(val); });
                }
                else {
                    return ConfigService_1.transform2SystemConfig(val);
                }
            });
        }
        else {
            console.log("start readAsText:" + this.fileService.getConfigDir() + ":" + this.systemFileName);
            return this.file.readAsText(this.fileService.getConfigDir(), this.systemFileName)
                .then(function (result) {
                console.log("readAsText" + result);
                return ConfigService_1.transform2SystemConfig(result);
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    };
    /**
     * 写入system.json
     * @returns {Promise<TResult|T>}
     */
    ConfigService.prototype.writeSystemConfig = function (systemConfig) {
        if (this.globalService.isChrome) {
            return this.storage.set(this.systemStorageName, ConfigService_1.transform2SystemString(systemConfig));
        }
        else {
            return this.file.writeExistingFile(this.fileService.getConfigDir(), this.systemFileName, ConfigService_1.transform2SystemString(systemConfig));
        }
    };
    /**
     * 读取map.json
     * @returns {Promise<TResult2|MapConfig>|Promise<any>|Promise<MapConfig>}
     */
    ConfigService.prototype.readMapConfig = function () {
        var _this = this;
        return this.storage.get(this.mapStorageName)
            .then(function (val) {
            if (!val) {
                return _this.http.get(_this.mapFilePath)
                    .toPromise()
                    .then(function (res) { return _this.storage.set(_this.mapStorageName, JSON.stringify(res.json())); })
                    .then(function (val) { return ConfigService_1.transform2MapConfig(val); });
            }
            else {
                return ConfigService_1.transform2MapConfig(val);
            }
        });
    };
    /**
     * 判断是否有效
     * @param config
     * @param field
     * @returns {T|boolean}
     */
    ConfigService.isValid = function (config, field) {
        return config && config[field] != undefined && config[field] != null;
    };
    /**
     * json string转换对象
     * @param data
     * @returns {{outerBaseUri: any, innerBaseUri: any, serverBaseUri: any, isOuterNetwork: any, isGridStyle: any, isDebugMode: any, keepAliveInterval: any, sysRegion: any}}
     */
    ConfigService.transform2SystemConfig = function (data) {
        var obj = JSON.parse(data);
        return {
            outerBaseUri: obj["server.outer.baseuri"],
            innerBaseUri: obj["server.inner.baseuri"],
            serverBaseUri: obj["sys.connect.outer.network"] ? obj["server.outer.baseuri"] : obj["server.inner.baseuri"],
            fileOuterBaseUri: obj["server.file.outer.baseuri"],
            fileInnerBaseUri: obj["server.file.inner.baseuri"],
            fileServerBaseUri: obj["sys.connect.outer.network"] ? obj["server.file.outer.baseuri"] : obj["server.file.inner.baseuri"],
            materialsOuterBaseUri: obj["server.materials.outer.baseuri"],
            materialsInnerBaseUri: obj["server.materials.inner.baseuri"],
            materialsBaseUri: obj["sys.connect.outer.network"] ? obj["server.materials.outer.baseuri"] : obj["server.materials.inner.baseuri"],
            isOuterNetwork: obj["sys.connect.outer.network"],
            isGridStyle: obj["sys.grid.style"],
            isDebugMode: obj["sys.debug.mode"],
            keepAliveInterval: obj["sys.keep.alive.interval"],
            overdueTime: obj["sys.overdue.time"],
            sysRegion: obj["sys.region"],
            newFileService: obj["sys.new.file.service"],
            materialUnit: obj["sys.material.unit"]
        };
    };
    /**
     * json string转换对象
     * @param data
     * @returns {{mapServerUrl: any}}
     */
    ConfigService.transform2MapConfig = function (data) {
        var obj = JSON.parse(data);
        return {
            mapServerUrl: obj["map.server.url"]
        };
    };
    /**
     * 对象转json string
     * @param systemConfig
     * @returns {string}
     */
    ConfigService.transform2SystemString = function (systemConfig) {
        return JSON.stringify({
            "server.outer.baseuri": systemConfig.outerBaseUri,
            "server.inner.baseuri": systemConfig.innerBaseUri,
            "server.file.outer.baseuri": systemConfig.fileOuterBaseUri,
            "server.file.inner.baseuri": systemConfig.fileInnerBaseUri,
            "server.materials.outer.baseuri": systemConfig.materialsOuterBaseUri,
            "server.materials.inner.baseuri": systemConfig.materialsInnerBaseUri,
            "sys.connect.outer.network": systemConfig.isOuterNetwork,
            "sys.grid.style": systemConfig.isGridStyle,
            "sys.debug.mode": systemConfig.isDebugMode,
            "sys.keep.alive.interval": systemConfig.keepAliveInterval,
            "sys.overdue.time": systemConfig.overdueTime,
            "sys.region": systemConfig.sysRegion,
            "sys.new.file.service": systemConfig.newFileService,
            "sys.material.unit": systemConfig.materialUnit
        });
    };
    return ConfigService;
}());
ConfigService.fushunRegion = "fushun";
ConfigService = ConfigService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_3__GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_6__FileService__["a" /* FileService */]])
], ConfigService);

var ConfigService_1;
//# sourceMappingURL=ConfigService.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_zip__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Created by zhangjing on 2017/6/13.
 */
var FileService = (function () {
    function FileService(file, transfer, alertCtrl, zip, fileOpener) {
        this.file = file;
        this.transfer = transfer;
        this.alertCtrl = alertCtrl;
        this.zip = zip;
        this.fileOpener = fileOpener;
        this.dirPath = null;
        this.dirRoot = 'sh3h';
        this.dir = 'hotlinemanager';
        this.arrDirs = ['config', 'data', 'images', 'videos', 'log', 'sounds', 'update', 'user', 'cache'];
        this.apkName = "/TaskManager.apk";
    }
    /**
     * 获取db路径
     * @returns {string}
     */
    FileService.prototype.getDbDir = function () {
        return "" + this.dirPath + this.dirRoot + "/" + this.dir + "/data";
    };
    /**
     * 获取config路径
     * @returns {string}
     */
    FileService.prototype.getConfigDir = function () {
        return "" + this.dirPath + this.dirRoot + "/" + this.dir + "/config";
    };
    /**
     * 获取images路径
     * @returns {string}
     */
    FileService.prototype.getImagesDir = function () {
        return "" + this.dirPath + this.dirRoot + "/" + this.dir + "/images";
    };
    /**
     * 获取video路径
     * @returns {string}
     */
    FileService.prototype.getVideosDir = function () {
        return "" + this.dirPath + this.dirRoot + "/" + this.dir + "/videos";
    };
    /**
     * 获取sounds路径
     * @returns {string}
     */
    FileService.prototype.getSoundsDir = function () {
        return "" + this.dirPath + this.dirRoot + "/" + this.dir + "/sounds";
    };
    /**
     * 获取cache路径
     * @returns {string}
     */
    FileService.prototype.getCacheDir = function () {
        return this.dirPath + "/" + this.dirRoot + "/" + this.dir + "/cache";
    };
    /**
     * 检查文件是否存在
     * @param dir
     * @param file
     * @returns {Promise<boolean>}
     */
    FileService.prototype.checkFile = function (dir, file) {
        return this.file.checkFile(dir, file)
            .catch(function (error) {
            console.error(error);
            return false;
        });
    };
    /**
     * 创建sh3h目录
     * @returns {Promise<T>}
     */
    FileService.prototype.createDirRoot = function () {
        var _this = this;
        this.dirPath = this.file.externalRootDirectory;
        return new Promise(function (resolve, reject) {
            _this.file.createDir(_this.dirPath, _this.dirRoot, true)
                .then(function (result) {
                console.log('createDirRoot success');
                resolve(_this.createAppDir());
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * 创建app目录(hotlineManager)
     * @returns {Promise<T>}
     */
    FileService.prototype.createAppDir = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.file.createDir(_this.dirPath + _this.dirRoot, _this.dir, true)
                .then(function (result) {
                console.log('createAppDir success');
                resolve(_this.createChildDir());
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * 创建子目录(七个子文件夹)
     * @returns Promise
     */
    FileService.prototype.createChildDir = function () {
        var _this = this;
        var url = this.dirPath + this.dirRoot + '/' + this.dir;
        var promiseArr = [];
        for (var i = 0; i < this.arrDirs.length; i++) {
            promiseArr.push(this.file.createDir(url, this.arrDirs[i], true));
        }
        return new Promise(function (resolve, reject) {
            Promise.all(promiseArr)
                .then(function (result) {
                console.log('createChildDir Promise all success');
                resolve(_this.copySystemConfig());
            })
                .catch(function (error) {
                console.log(error);
                return Promise.reject(false);
            });
        });
    };
    /**
     * 拷贝配置文件
     * @returns {Promise<Entry>}
     */
    FileService.prototype.copySystemConfig = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var originUrl = 'file:///android_asset/www/assets/config/';
            var newUrl = _this.dirPath + _this.dirRoot + '/' + _this.dir + '/config/';
            console.log('copySystemConfig:' + newUrl);
            var fileName = 'system.json';
            _this.file.checkFile(newUrl, fileName)
                .then(function (result) {
                //文件存在
                console.log("systemConfig has exist!" + result);
                resolve(true);
            })
                .catch(function (error) {
                console.log(error);
                _this.file.copyFile(originUrl, fileName, newUrl, fileName)
                    .then(function (result) {
                    console.log('copySystemConfig success' + result);
                    resolve(true);
                })
                    .catch(function (error) {
                    console.log(error);
                    reject(false);
                });
            });
        });
    };
    /**
     * 下载文件
     */
    FileService.prototype.downloadFile = function (isData, url) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '下载更新包',
            message: '下载进度:0%',
            enableBackdropDismiss: false,
        });
        alert.present();
        var fileTransfer = this.transfer.create();
        var downloadUrl;
        var defaultUrl = this.dirPath + this.dirRoot + '/' + this.dir + '/' + this.arrDirs[5];
        downloadUrl = isData ? (defaultUrl + '/data.zip') : (defaultUrl + '/app.zip');
        fileTransfer.onProgress(function (event) {
            var downloadProgress = Math.floor((event.loaded / event.total) * 100);
            if (downloadProgress == 100) {
                alert.dismiss();
            }
            else {
                var message = document.getElementsByClassName('alert-message')[0];
                message && (message.innerHTML = '下载进度：' + downloadProgress + '%');
            }
        });
        return new Promise(function (resolve, reject) {
            fileTransfer.download(url, downloadUrl)
                .then(function (entry) {
                var destUrl = _this.dirPath + _this.dirRoot + '/' + _this.dir + '/' + _this.arrDirs[5];
                resolve(_this.unZipFile(entry.toURL(), destUrl, isData));
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    /**
     *
     * @param srcFilePath
     * @returns {any}
     */
    FileService.prototype.movePicture = function (srcFilePath) {
        var _this = this;
        var error = "failure to move " + srcFilePath;
        if (!srcFilePath) {
            return Promise.reject(error);
        }
        var index = srcFilePath.lastIndexOf('/');
        if (index <= 0) {
            return Promise.reject(error);
        }
        var srcPath = srcFilePath.substring(0, index + 1);
        if (!srcPath) {
            return Promise.reject(error);
        }
        var fileName = srcFilePath.substring(index + 1);
        if (!fileName) {
            return Promise.reject(error);
        }
        return this.file.checkFile(srcPath, fileName)
            .then(function (result) { return _this.file.moveFile(srcPath, fileName, _this.getImagesDir(), fileName); })
            .then(function (entry) { return entry ? Promise.resolve(fileName) : Promise.reject(error); });
    };
    /**
     *
     * @param srcFilePath
     * @returns {any}
     */
    FileService.prototype.moveVideo = function (srcFilePath) {
        var _this = this;
        var error = "failure to move " + srcFilePath;
        if (!srcFilePath) {
            return Promise.reject(error);
        }
        var index = srcFilePath.lastIndexOf('/');
        if (index <= 0) {
            return Promise.reject(error);
        }
        var srcPath = srcFilePath.substring(0, index + 1);
        if (!srcPath) {
            return Promise.reject(error);
        }
        var fileName = srcFilePath.substring(index + 1);
        if (!fileName) {
            return Promise.reject(error);
        }
        return this.file.checkFile(srcPath, fileName)
            .then(function (result) { return _this.file.moveFile(srcPath, fileName, _this.getVideosDir(), fileName); })
            .then(function (entry) { return entry ? Promise.resolve(fileName) : Promise.reject(error); });
    };
    /**
     * 解压文件
     * @param sourceUrl
     * @param destUrl
     */
    FileService.prototype.unZipFile = function (sourceUrl, destUrl, isData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.zip.unzip(sourceUrl, destUrl)
                .then(function (result) {
                console.log("unzip file success");
                if (!isData) {
                    resolve(_this.openApkFile(destUrl));
                }
                else {
                    resolve(true);
                }
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * 打开安装包
     * @param destPath
     */
    FileService.prototype.openApkFile = function (destPath) {
        var _this = this;
        var destUrl = destPath + this.apkName;
        return new Promise(function (resolve, reject) {
            _this.fileOpener.open(destUrl, 'application/vnd.android.package-archive')
                .then(function () {
                console.log('File is opened');
                resolve(true);
            })
                .catch(function (err) {
                console.log('Error openning file', err);
                reject(err);
            });
        });
    };
    return FileService;
}());
FileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_zip__["a" /* Zip */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */]])
], FileService);

//# sourceMappingURL=FileService.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverRecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_DataService__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_GlobalService__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PopoverRecordPage = (function () {
    function PopoverRecordPage(viewCtrl, navParams, events, dataService, globalService) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.events = events;
        this.dataService = dataService;
        this.globalService = globalService;
        this.isRecording = false;
    }
    PopoverRecordPage.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.taskId = this.navParams.data.taskId;
        }
    };
    /**
     * 开始录音
     * @param ev
     */
    PopoverRecordPage.prototype.onStart = function (ev) {
        var _this = this;
        this.dataService.startRecordAudio()
            .then(function (result) {
            (_this.file = result.file, _this.name = result.name);
            if (_this.file && _this.name) {
                _this.isRecording = true;
                _this.time = new Date().getTime();
            }
            else {
                console.error('failure to record audio');
            }
        })
            .catch(function (error) { return console.error(error); });
    };
    /**
     * 结束录音&保存
     * @param ev
     */
    PopoverRecordPage.prototype.onEnd = function (ev) {
        this.close(true);
    };
    // onOk(ev: any): void {
    //   this.viewCtrl.dismiss();
    // }
    /**
     * 取消录音&不保存
     * @param ev
     */
    PopoverRecordPage.prototype.onCancel = function (ev) {
        this.close(false);
    };
    /**
     *
     * @param needSave
     */
    PopoverRecordPage.prototype.close = function (needSave) {
        var _this = this;
        if (this.file) {
            this.time = new Date().getTime() - this.time;
            this.dataService.endRecordAudio(this.file)
                .then(function (result) { return result && needSave && _this.time > 0 ? _this.dataService.saveAudio(_this.taskId, _this.name) : Promise.resolve(false); })
                .then(function (result) { return result ? _this.events.publish(_this.globalService.recordAudioFinishEvent, _this.name, _this.time) : Promise.resolve([]); })
                .catch(function (error) { return console.error(error); })
                .then(function () { return _this.viewCtrl.dismiss(); });
        }
        else {
            this.viewCtrl.dismiss();
        }
    };
    return PopoverRecordPage;
}());
PopoverRecordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-list>\n      <!--<ion-list-header color=\"primary\">\u5F55\u97F3</ion-list-header>-->\n      <ion-row>\n        <ion-col style=\"display: flex; justify-content: center; align-items: center; margin-top: 10px;\">\n          <img src=\"assets/img/ic_record.png\" width=\"64\" height=\"64\">\n        </ion-col>\n      </ion-row>\n      \n      <ion-row *ngIf=\"isRecording\">\n        <ion-col style=\"display: flex; justify-content: center; align-items: center;\">\n          <ion-spinner name=\"dots\"></ion-spinner>\n        </ion-col>\n      </ion-row>\n      \n      <button ion-item style=\"text-align:center; color:#f53d3d;\" (click)=\"onStart($event)\" [class.selected]=\"isRecording\" *ngIf=\"!isRecording\">\u5F00\u59CB</button>\n      <button ion-item style=\"text-align:center; color:#f53d3d;\" (click)=\"onEnd($event)\" *ngIf=\"isRecording\">\u7ED3\u675F</button>\n      <!--<button ion-item style=\"text-align:center; color:#488aff;\" (click)=\"onOk($event)\">\u786E\u5B9A</button>-->\n      <button ion-item style=\"text-align:center; color:#488aff;\" (click)=\"onCancel($event)\">\u53D6\u6D88</button>\n    </ion-list>\n  ",
        styles: [
            ".selected {\n      font-weight: bold;\n    }"
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__providers_DataService__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_GlobalService__["a" /* GlobalService */]])
], PopoverRecordPage);

//# sourceMappingURL=PopoverRecordPage.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_DataService__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_viewer__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ConfigService__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AttachmentPage = (function () {
    function AttachmentPage(navCtrl, dataService, globalService, navParams, alertCtrl, photoViewer, configService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.globalService = globalService;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.photoViewer = photoViewer;
        this.configService = configService;
        this.title = "附件";
        this.pictureMaxCount = 6;
        this.audioMaxCount = 3;
        this.videoMaxCount = 3;
        this.pictures = [];
        this.audios = [];
        this.videos = [];
        this.pictureCount = 0;
        this.audioCount = 0;
        this.videoCount = 0;
        this.taskId = this.navParams.data;
    }
    AttachmentPage.prototype.ngOnInit = function () {
        var _this = this;
        this.configService.getFileBaseUri()
            .then(function (uri) { return _this.baseUri = uri; })
            .then(function () { return _this.dataService.getAttachments(_this.taskId); })
            .then(function (attachments) { return _this.parseAttachments(attachments); })
            .catch(function (error) { return console.error(error); });
    };
    AttachmentPage.prototype.parseAttachments = function (attachments) {
        var _this = this;
        if (!attachments || attachments.length <= 0) {
            return;
        }
        attachments.forEach(function (attachment) {
            var fileType = attachment.fileType;
            if (!fileType) {
            }
            else if (fileType.startsWith('image/') || fileType.startsWith('png') || fileType.startsWith('jpg')) {
                if (_this.pictureCount < _this.pictureMaxCount && attachment.url) {
                    _this.pictures[_this.pictureCount++] = _this.replaceUrl(attachment.url);
                }
            }
            else if (fileType.startsWith('audio/') || fileType.startsWith('mp3')) {
                if (_this.audioCount < _this.audioMaxCount && attachment.downloadUrl && attachment.originFileName) {
                    _this.audios[_this.audioCount++] = {
                        url: _this.replaceUrl(attachment.downloadUrl),
                        name: attachment.originFileName,
                        alias: "\u8BED\u97F3" + _this.audioCount
                    };
                }
            }
            else if (fileType.startsWith('video/') || fileType.startsWith('mp4')) {
                if (_this.videoCount < _this.videoMaxCount && attachment.downloadUrl && attachment.originFileName) {
                    _this.videos[_this.videoCount++] = {
                        url: _this.replaceUrl(attachment.downloadUrl),
                        name: attachment.originFileName
                    };
                }
            }
        });
    };
    AttachmentPage.prototype.replaceUrl = function (srcUrl) {
        var desUrl;
        if (this.baseUri && srcUrl) {
            var regexp = /\d+\.\d+\.\d+.\d+:\d+/;
            var matches = this.baseUri.match(regexp);
            if (matches && matches.length > 0) {
                var match = matches[0];
                desUrl = srcUrl.replace(regexp, match);
            }
        }
        return desUrl ? desUrl : srcUrl;
    };
    /**
     * 浏览图片
     * @param name
     */
    AttachmentPage.prototype.onPreviewPicture = function (name) {
        if (!this.globalService.isChrome && name) {
            this.photoViewer.show(name);
        }
    };
    /**
     * 播放语音
     * @param audio
     */
    AttachmentPage.prototype.onPlay = function (audio) {
        var _this = this;
        if (this.globalService.isChrome || !audio.url || !audio.name || !audio.alias) {
            return;
        }
        this.dataService.playCachedAudio(audio.url, audio.name)
            .then(function (file) {
            if (file) {
                var prompt_1 = _this.alertCtrl.create({
                    title: '提示',
                    message: "结束播放语音",
                    enableBackdropDismiss: false,
                    buttons: [
                        {
                            text: '确定',
                            handler: function (data) {
                                console.log('Saved clicked');
                                _this.dataService.stopAudio(file)
                                    .catch(function (err) { return console.error(err); });
                            }
                        }
                    ]
                });
                prompt_1.present();
            }
        })
            .catch(function (err) { return console.error(err); });
    };
    /**
     * 播放视频
     * @param video
     */
    AttachmentPage.prototype.onPlayVideo = function (video) {
        if (!this.globalService.isChrome && video.url && video.name) {
            this.dataService.playCachedVideo(video.url, video.name)
                .then(function (data) { return console.log(data); })
                .catch(function (error) { return console.error(error); });
        }
    };
    return AttachmentPage;
}());
AttachmentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-attachment',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\attachment\attachment.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      {{title}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page-attachment">\n  <button ion-item icon-left>\n    <ion-icon name="camera"></ion-icon>\n    照片\n  </button>\n\n  <ion-grid style="width: 100%; height: 100px;">\n    <ion-row>\n      <ion-col col-4 class="col-img" *ngIf="pictures[0]">\n        <img class="picture" src="{{pictures[0]}}" (click)="onPreviewPicture(pictures[0])"/>\n      </ion-col>\n\n      <ion-col col-4 class="col-img" *ngIf="pictures[1]">\n        <img class="picture" src="{{pictures[1]}}" (click)="onPreviewPicture(pictures[1])"/>\n      </ion-col>\n\n      <ion-col col-4 class="col-img" *ngIf="pictures[2]">\n        <img class="picture" src="{{pictures[2]}}" (click)="onPreviewPicture(pictures[2])"/>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid style="width: 100%; height: 100px;" *ngIf="pictureCount > 3">\n    <ion-row>\n      <ion-col col-4 class="col-img" *ngIf="pictures[0]">\n        <img class="picture" src="{{pictures[3]}}" (click)="onPreviewPicture(pictures[3])"/>\n      </ion-col>\n\n      <ion-col col-4 class="col-img" *ngIf="pictures[1]">\n        <img class="picture" src="{{pictures[4]}}" (click)="onPreviewPicture(pictures[4])"/>\n      </ion-col>\n\n      <ion-col col-4 class="col-img" *ngIf="pictures[2]">\n        <img class="picture" src="{{pictures[5]}}" (click)="onPreviewPicture(pictures[5])"/>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <br>\n  <br>\n\n  <button ion-item icon-left>\n    <ion-icon name="microphone"></ion-icon>\n    语音\n  </button>\n\n  <ion-grid style="width: 100%; height: 150px;">\n    <ion-row *ngIf="audios[0]" class="audio">\n      <ion-col col-6 class="audio-info">{{audios[0].alias}}</ion-col>\n      <ion-col col-2>\n        <ion-icon name="play" class="audio-btn" (click)="onPlay(audios[0])"></ion-icon>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="audios[1]" class="audio">\n      <ion-col col-6 class="audio-info">{{audios[1].alias}}</ion-col>\n      <ion-col col-2>\n        <ion-icon name="play" class="audio-btn" (click)="onPlay(audios[1])"></ion-icon>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="audios[2]" class="audio">\n      <ion-col col-6 class="audio-info">{{audios[2].alias}}</ion-col>\n      <ion-col col-2>\n        <ion-icon name="play" class="audio-btn" (click)="onPlay(audios[2])"></ion-icon>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <br>\n  <br>\n  <button ion-item icon-left>\n    <ion-icon name="videocam"></ion-icon>\n    视频\n  </button>\n\n  <ion-grid style="width: 100%; height: 100px;">\n    <ion-row>\n      <ion-col col-4 class="col-video" *ngIf="videos[0]">\n        <video class="video" (click)="onPlayVideo(videos[0])" src="{{videos[0].url}}"></video>\n      </ion-col>\n\n      <ion-col col-4 class="col-video" *ngIf="videos[1]">\n        <video class="video" (click)="onPlayVideo(videos[1])" src="{{videos[1].url}}"></video>\n      </ion-col>\n\n      <ion-col col-4 class="col-video" *ngIf="videos[2]">\n        <video class="video" (click)="onPlayVideo(videos[2])" src="{{videos[2].url}}"></video>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <br>\n  <br>\n</ion-content>\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\attachment\attachment.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_DataService__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_viewer__["a" /* PhotoViewer */],
        __WEBPACK_IMPORTED_MODULE_5__providers_ConfigService__["a" /* ConfigService */]])
], AttachmentPage);

//# sourceMappingURL=attachment.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__searchdetail_searchdetails__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_DataService__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Created by zhangjing on 2017/6/26.
 */
var SearchResultPage = (function () {
    function SearchResultPage(navCtrl, navParams, loadingCtrl, dataService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.tag = "[SearchResultPage]";
        this.title = '查询结果';
        this.segmentName = "allTasks";
        this.items = [];
    }
    SearchResultPage.prototype.dismiss = function () {
        console.log('----- dismiss loading ------ ');
        this.loading.dismiss();
    };
    SearchResultPage.prototype.ngOnInit = function () {
        this.loading = this.loadingCtrl.create({
            content: '查询中...',
            dismissOnPageChange: true
        });
        this.loading.present();
        this.searchTask(this.navParams.get('tasks'));
    };
    /**
     * 查询工单
     * @param request
     */
    SearchResultPage.prototype.searchTask = function (request) {
        var _this = this;
        this.dataService.searchTask(request)
            .then(function (tasks) {
            _this.searchTaskCount(_this.navParams.get('tasks'));
            console.log(_this.tag + "getTasks: " + tasks);
            if (tasks.length <= 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: '提示：',
                    buttons: ['确定'],
                });
                alert_1.setSubTitle('无结果');
                alert_1.present();
                _this.loading.dismiss();
            }
            else {
                _this.loading.dismiss();
                for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
                    var temp = tasks_1[_i];
                    _this.items.push({
                        customerId: temp.serialNo,
                        taskId: temp.taskNo,
                        contents: [
                            { name: '发生地址', value: temp.happenedAddress },
                            { name: '联系电话', value: temp.contactPhone },
                            { name: '反映人', value: temp.reportPerson },
                            { name: '反映类别', value: temp.reportType },
                            { name: '反映内容', value: temp.reportTypeText },
                            { name: '派遣时间', value: _this.formatDateTime(temp.sendTime) },
                            { name: '处理时限', value: _this.formatDateTime(temp.resolveLimitedTime) },
                            { name: '任务状态', value: temp.taskState }
                        ]
                    });
                }
            }
        })
            .catch(function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: '提示：',
                subTitle: err ? err : '出现错误',
                buttons: ['确定']
            });
            alert.present();
        });
    };
    /**
     * 查询工单数量
     * @param request
     */
    SearchResultPage.prototype.searchTaskCount = function (request) {
        var _this = this;
        this.dataService.searchTaskCount(request)
            .then(function (count) {
            console.log(_this.tag + "getTasksCount: " + count);
            if (count != null || undefined) {
                _this.totalTaskCount = count.totalTaskCount;
                _this.completedTaskCount = count.completedTaskCount;
                _this.unCompletedTaskCount = count.uncompletedTaskCount;
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    /**
     * jump to details
     * @param taskId
     */
    SearchResultPage.prototype.onDetails = function (taskId) {
        console.log(this.tag + taskId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__searchdetail_searchdetails__["a" /* SearchDetailsPage */], { 'taskId': taskId });
    };
    /**
     * utc时间格式化
     * @param inputTime
     * @returns {string}
     */
    SearchResultPage.prototype.formatDateTime = function (inputTime) {
        var date = new Date(inputTime);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var month = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        var day = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        var hour = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var minutestr = minute < 10 ? ('0' + minute) : minute;
        var secondstr = second < 10 ? ('0' + second) : second;
        return y + '-' + month + '-' + day + ' ' + hour + ':' + minutestr + ':' + secondstr;
    };
    ;
    return SearchResultPage;
}());
SearchResultPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-searchresult',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\searchresult\searchresult.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="page-searchresult">\n\n  <ion-grid no-padding>\n\n    <ion-row>\n\n      <ion-col>\n\n        <div class="allTasks">总共单:{{totalTaskCount}}</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div class="finishedTasks">已完成:{{completedTaskCount}}</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div class="unFinishedTasks">未完成:{{unCompletedTaskCount}}</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <!--总工单-->\n\n  <ion-list>\n\n    <ion-card *ngFor="let item of items">\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="assets/img/ic_mywork_avatar.png">\n\n        </ion-avatar>\n\n        <div><h2 class="card-header-label-hint">客服编号</h2>\n\n          <h2 class="card-header-label-content">{{item.customerId}}</h2></div>\n\n        <div><h2 class="card-header-label-hint">任务编号</h2>\n\n          <h2 class="card-header-label-content">{{item.taskId}}</h2></div>\n\n      </ion-item>\n\n\n\n      <ion-list>\n\n        <ion-item *ngFor="let content of item.contents">\n\n          <ion-label fixed class="label-name">{{content.name}}</ion-label>\n\n          <div item-content>{{content.value}}</div>\n\n        </ion-item>\n\n        <ion-item (click)="onDetails(item.taskId)">\n\n          <ion-label fixed class="label-name">详细信息</ion-label>\n\n          <ion-icon name=\'arrow-forward\' item-end></ion-icon>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\searchresult\searchresult.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_DataService__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], SearchResultPage);

//# sourceMappingURL=searchresult.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TaskState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_DataService__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by zhangjing on 2017/6/27.
 */



var TaskState = (function () {
    function TaskState() {
    }
    return TaskState;
}());

var SearchDetailsPage = (function () {
    function SearchDetailsPage(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.tag = "[SearchDetailsPage]";
        this.title = '详情';
        this.segmentName = "basicInfo";
        this.states = [];
        this.taskId = this.navParams.get('taskId');
        this.searchTaskDetails(this.taskId);
    }
    SearchDetailsPage.prototype.searchTaskDetails = function (taskId) {
        var _this = this;
        this.dataService.searchTaskDetails(taskId)
            .then(function (details) {
            console.log(_this.tag + "getTasks: " + details);
            if (details != null || undefined) {
                _this.details = [
                    { name: '联系人名', value: details.contactName },
                    { name: '联系电话', value: details.contactPhone },
                    { name: '反映类别', value: details.issueType },
                    { name: '反映内容', value: details.issueContent },
                    { name: '发生地址', value: details.issueAddress },
                    { name: '发生时间', value: _this.formatDateTime(details.issueTime) },
                    { name: '受理备注', value: details.receiveComment },
                    { name: '开始时间', value: _this.formatDateTime(details.bookingStartTime) },
                    { name: '结束时间', value: _this.formatDateTime(details.bookingEndTime) },
                    { name: '到场时限', value: _this.formatDateTime(details.arrivedDeadLine) },
                    { name: '处理时限', value: _this.formatDateTime(details.replyDeadLine) },
                    { name: '延时时限', value: _this.formatDateTime(details.delayReplyDeadLine) },
                    { name: '派遣站点', value: details.assignStation },
                    { name: '派遣人', value: details.assignPerson },
                    { name: '派遣备注', value: details.assignComment }
                ];
                _this.setTaskState(details);
            }
        });
    };
    /**
     * 设置任务状态流程
     * @param details
     */
    SearchDetailsPage.prototype.setTaskState = function (details) {
        if (details.createTime != 0) {
            var temp = new TaskState();
            temp.state = '已派遣';
            temp.time = this.formatDateTime(details.createTime);
            this.states.push(temp);
        }
        if (details.stationAcceptTime != 0) {
            var temp = new TaskState();
            temp.state = '接收';
            temp.time = this.formatDateTime(details.stationAcceptTime);
            this.states.push(temp);
        }
        if (details.assignTime != 0) {
            var temp = new TaskState();
            temp.state = '已派工';
            temp.time = this.formatDateTime(details.assignTime);
            this.states.push(temp);
        }
        if (details.goTime != 0) {
            var temp = new TaskState();
            temp.state = '已出发';
            temp.time = this.formatDateTime(details.goTime);
            this.states.push(temp);
        }
        if (details.arrivedTime != 0) {
            var temp = new TaskState();
            temp.state = '已到场';
            temp.time = this.formatDateTime(details.arrivedTime);
            this.states.push(temp);
        }
        if (details.replyTime != 0) {
            var temp = new TaskState();
            temp.state = '已处理';
            temp.time = this.formatDateTime(details.replyTime);
            this.states.push(temp);
        }
        if (details.completedTime != 0) {
            var temp = new TaskState();
            temp.state = '已完成';
            temp.time = this.formatDateTime(details.completedTime);
            this.states.push(temp);
        }
        if (details.rejectTime != 0) {
            var temp = new TaskState();
            temp.state = '已拒绝';
            temp.time = this.formatDateTime(details.rejectTime);
            this.states.push(temp);
        }
        if (details.superviseTime != 0) {
            var temp = new TaskState();
            temp.state = '已销单';
            temp.time = this.formatDateTime(details.superviseTime);
            this.states.push(temp);
        }
        //排序
        this.states.sort(function (n1, n2) {
            if (n1.time < n2.time) {
                return 1;
            }
            if (n1.time > n2.time) {
                return -1;
            }
            if (n1.time == n2.time) {
                if (n1.state > n2.state) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
            return 0;
        });
        console.log(this.tag + this.states);
    };
    /**
     * utc时间格式化
     * @param inputTime
     * @returns {string}
     */
    SearchDetailsPage.prototype.formatDateTime = function (inputTime) {
        var date = new Date(inputTime);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var month = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        var day = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        var hour = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var minutestr = minute < 10 ? ('0' + minute) : minute;
        var secondstr = second < 10 ? ('0' + second) : second;
        return y + '-' + month + '-' + day + ' ' + hour + ':' + minutestr + ':' + secondstr;
    };
    ;
    return SearchDetailsPage;
}());
SearchDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-searchdetails',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\searchdetail\searchdetails.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-segment [(ngModel)]="segmentName">\n\n    <ion-segment-button value="basicInfo">\n\n      基本信息\n\n    </ion-segment-button>\n\n    <ion-segment-button value="taskState">\n\n      任务状态\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n\n\n<ion-content class="page-searchdetails">\n\n\n\n\n\n  <div [ngSwitch]="segmentName">\n\n    <!--基本信息-->\n\n    <ion-list *ngSwitchCase="\'basicInfo\'">\n\n      <ion-item *ngFor="let detail of details">\n\n        <ion-label fixed class="label-name">\n\n          {{detail.name}}\n\n        </ion-label>\n\n        <div item-content>\n\n          {{detail.value}}\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n\n\n    <!--任务状态-->\n\n    <ion-list *ngSwitchCase="\'taskState\'">\n\n      <ul class="list">\n\n        <li *ngFor="let state of states" [ngClass]="{\'current\':state==states[0]}">{{state.state}}<br/>{{state.time}}\n\n          <div class="circle"><b class="circle"></b></div>\n\n        </li>\n\n      </ul>\n\n    </ion-list>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\searchdetail\searchdetails.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_DataService__["a" /* DataService */]])
], SearchDetailsPage);

//# sourceMappingURL=searchdetails.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_DataService__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_GlobalService__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkInfoPage = (function () {
    function WorkInfoPage(navCtrl, navParams, alertCtrl, events, dataService, globalService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.dataService = dataService;
        this.globalService = globalService;
        this.tag = "[WorkInfoPage]";
        this.detailNames = {
            contactName: '联系人名',
            contactPhone: '联系电话',
            issueType: '反映类别',
            issueContent: '反映内容',
            issueAddress: '发生地址',
            issueTime: '发生时间',
            receiveComment: '受理备注',
            bookingStartTime: '开始时间',
            bookingEndTime: '结束时间',
            arrivedDeadLine: '到场时限',
            replyDeadLine: '处理时限',
            delayReplyDeadLine: '延时时限',
            assignStation: '派遣站点',
            assignPerson: '派遣人',
            assignComment: '派遣备注'
        };
        this.title = '任务详情';
        this.segmentName = "detailInfo";
        this.details = [];
        this.dispatches = [
            { name: '派工编号', value: '', isActive: false },
            { name: '施工人员', value: '请选择施工人员', isActive: true },
            { name: '施工日期', value: '', isActive: true, isDate: true },
            { name: '施工时间', value: '', isActive: true, isTime: true },
            { name: '处理备注', value: '备注可为空', isActive: true }
        ];
        this.myDate1 = '2017-07-19';
        this.myDate2 = '15:30:55';
    }
    /**
     * 初始化
     */
    WorkInfoPage.prototype.ngOnInit = function () {
        console.log(this.tag, "ngOnInit");
        var taskId = this.navParams.data;
        this.getDetail(taskId);
        this.dispatchInfo = {
            taskId: taskId,
            dispatchOperator: this.globalService.userId,
            beDispatchedPerson: Number.NaN,
            dispatchTime: new Date().getTime(),
            dispatchType: 1,
            dispatchComment: ''
        };
        this.dispatches[0].value = taskId;
        var time = this.globalService.getFormatTime(new Date(this.dispatchInfo.dispatchTime));
        var times = time.split(' ');
        this.dispatches[2].value = times[0];
        this.dispatches[3].value = times[1];
    };
    /**
     * 派单
     * @param ev
     */
    WorkInfoPage.prototype.onDispatch = function (ev) {
        var _this = this;
        var time = this.dispatches[2].value + " " + this.dispatches[3].value;
        var utc = new Date(time).getTime() + 1000;
        if (this.dispatchInfo.dispatchTime > utc) {
            return this.globalService.showToast('施工日期或施工时间不准确!');
        }
        this.dispatchInfo.dispatchTime = utc;
        this.dataService.dispatch(this.dispatchInfo)
            .then(function (result) {
            _this.events.publish(_this.globalService.stationWorkUpdateEvent);
            _this.navCtrl.pop();
        })
            .catch(function (error) { return console.error(error); });
    };
    /**
     * tab切换
     * @param segment
     */
    WorkInfoPage.prototype.segmentChanged = function (segment) {
        console.log(this.tag, segment);
        if (segment.value === 'dispatchInfo') {
            this.setDispatchInfo();
        }
    };
    /**
     * 选择派工信息
     * @param dispatch
     */
    WorkInfoPage.prototype.itemSelected = function (dispatch) {
        switch (dispatch.name) {
            case '施工人员':
                this.popupPersonnelAlert();
                break;
            case '处理备注':
                this.popupRemarkAlert();
                break;
            default:
                break;
        }
    };
    /**
     * 获取详细详细
     * @param taskId
     */
    WorkInfoPage.prototype.getDetail = function (taskId) {
        var _this = this;
        this.dataService.searchTaskDetails(taskId)
            .then(function (detail) {
            console.log(detail);
            _this.detailObject2Array(detail, _this.details);
        })
            .catch(function (error) { return console.error(error); });
    };
    /**
     * 对象转数组
     * @param srcDetail
     * @param destDetail
     */
    WorkInfoPage.prototype.detailObject2Array = function (srcDetail, destDetail) {
        for (var key in this.detailNames) {
            if (srcDetail.hasOwnProperty(key)) {
                destDetail.push({
                    name: this.detailNames[key],
                    value: this.transform2String(srcDetail[key])
                });
            }
        }
    };
    /**
     * 转换成字符串
     * @param value
     * @returns {string}
     */
    WorkInfoPage.prototype.transform2String = function (value) {
        if (typeof value === 'number' && value > 1000000) {
            return this.globalService.getFormatTime(new Date(value));
        }
        return value.toString();
    };
    /**
     * 设置派单信息
     */
    WorkInfoPage.prototype.setDispatchInfo = function () {
        var _this = this;
        if (!this.dispatchInfo.beDispatchedPerson) {
            this.dataService.getPersonnels(this.globalService.userId)
                .then(function (personnels) {
                _this.personnels = personnels;
                if (personnels.length > 0) {
                    _this.dispatches[1].value = personnels[0].fieldPersonnelName;
                    _this.dispatchInfo.beDispatchedPerson = personnels[0].fieldPersonnelId;
                }
            })
                .catch(function (error) { return console.error(error); });
        }
    };
    /**
     * 选择施工人员
     */
    WorkInfoPage.prototype.popupPersonnelAlert = function () {
        var _this = this;
        if (!this.personnels || this.personnels.length <= 0) {
            return this.globalService.showToast("施工人员为空!");
        }
        var alert = this.alertCtrl.create();
        alert.setTitle('请选择施工人员');
        for (var _i = 0, _a = this.personnels; _i < _a.length; _i++) {
            var personnel = _a[_i];
            alert.addInput({
                type: 'radio',
                label: personnel.fieldPersonnelName,
                value: personnel.fieldPersonnelName + "#" + personnel.fieldPersonnelId,
                checked: this.dispatchInfo.beDispatchedPerson === personnel.fieldPersonnelId
            });
        }
        alert.addButton('取消');
        alert.addButton({
            text: '确定',
            handler: function (data) {
                var values = data.split("#");
                _this.dispatches[1].value = values[0];
                _this.dispatchInfo.beDispatchedPerson = Number.parseInt(values[1]);
            }
        });
        alert.present().then(function () {
            //this.testRadioOpen = true;
        });
    };
    /**
     * 处理备注
     */
    WorkInfoPage.prototype.popupRemarkAlert = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: '处理备注',
            message: "请输入处理备注",
            inputs: [
                {
                    name: 'remark',
                    placeholder: ''
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function (data) {
                        console.log('Saved clicked');
                        _this.dispatches[4].value = data.remark;
                        _this.dispatchInfo.dispatchComment = data.remark;
                    }
                }
            ]
        });
        prompt.present();
    };
    return WorkInfoPage;
}());
WorkInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-workinfo',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\workinfo\workinfo.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="white" (click)="onDispatch($event)">\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="segmentName" (ionChange)="segmentChanged($event)">\n\n      <ion-segment-button value="detailInfo">\n\n        基本信息\n\n      </ion-segment-button>\n\n      <ion-segment-button value="dispatchInfo">\n\n        派工信息\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="page-workinfo">\n\n\n\n  <div [ngSwitch]="segmentName">\n\n    <ion-list *ngSwitchCase="\'detailInfo\'">\n\n      <ion-item *ngFor="let detail of details">\n\n        <ion-label fixed class="label-name">\n\n          {{detail.name}}\n\n        </ion-label>\n\n        <div item-content>\n\n          {{detail.value}}\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'dispatchInfo\'">\n\n      <ion-item *ngFor="let dispatch of dispatches" class="dispatch-item" (click)="itemSelected(dispatch)">\n\n        <ion-label fixed class="label-name">\n\n          {{dispatch.name}}\n\n        </ion-label>\n\n        <div item-content *ngIf="!dispatch.isDate&&!dispatch.isTime">\n\n          {{dispatch.value}}\n\n        </div>\n\n        <ion-datetime *ngIf="dispatch.isDate" style="padding-left: 0px;"\n\n                      cancelText=\'取消\' doneText=\'确定\' displayFormat="YYYY-MM-DD"\n\n                      pickerFormat="YYYY-MM-DD" [(ngModel)]="dispatch.value"></ion-datetime>\n\n        <ion-datetime *ngIf="dispatch.isTime" style="padding-left: 0px;"\n\n                      cancelText=\'取消\' doneText=\'确定\' displayFormat="HH:mm:ss"\n\n                      pickerFormat="HH:mm:ss" [(ngModel)]="dispatch.value"></ion-datetime>\n\n        <ion-icon name="ios-arrow-forward" item-end *ngIf="dispatch.isActive"></ion-icon>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\workinfo\workinfo.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__providers_DataService__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_GlobalService__["a" /* GlobalService */]])
], WorkInfoPage);

//# sourceMappingURL=workinfo.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsDetailsPage = (function () {
    function NewsDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = '公告详情';
        this.newsTitle = this.navParams.get('title');
        this.newsTime = this.navParams.get('time');
        this.newsContent = this.navParams.get('newsContent');
    }
    return NewsDetailsPage;
}());
NewsDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-newsdetails',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\newsdetails\newsdetails.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="page-newsdetails">\n\n\n\n  <h2>{{newsTitle}}</h2>\n\n  <h3>{{newsTime}}</h3>\n\n  <p>{{newsContent}}</p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\newsdetails\newsdetails.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], NewsDetailsPage);

//# sourceMappingURL=newsdetails.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialsAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_MaterialsInfo__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_DataService__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ConfigService__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MaterialsAddPage = (function () {
    function MaterialsAddPage(navCtrl, globalService, dataService, configService, alertCtrl, events, navParams) {
        this.navCtrl = navCtrl;
        this.globalService = globalService;
        this.dataService = dataService;
        this.configService = configService;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.navParams = navParams;
        this.tag = "[MaterialsAddPage]";
        this.title = '材料登记';
        this.buttonStr = '添加';
        this.count = 0; //数量
    }
    MaterialsAddPage.prototype.ngOnInit = function () {
        var _this = this;
        Promise.all([this.getOptMaterialLB(), this.getMaterialUnit()])
            .then(function (result) {
            _this.editMaterialInfo();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    /**
     * 获得材料类别
     * @returns {Promise<T>}
     */
    MaterialsAddPage.prototype.getOptMaterialLB = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dataService.getOptMaterialLB()
                .then(function (materials) {
                if (materials && materials.length > 0) {
                    _this.optMaterialsLB = materials;
                    resolve(true);
                }
                else {
                    reject(false);
                }
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * 型号
     * @param parentId
     * @returns {Promise<T>}
     */
    MaterialsAddPage.prototype.getOptMaterialXH = function (parentId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dataService.getOptMaterialXH(parentId)
                .then(function (materials) {
                if (materials && materials.length > 0) {
                    _this.optMaterialsXH = materials;
                    resolve(true);
                }
                else {
                    reject(false);
                }
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * 规格
     * @param parentId
     * @returns {Promise<T>}
     */
    MaterialsAddPage.prototype.getOptMaterialGG = function (parentId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dataService.getOptMaterialGG(parentId)
                .then(function (materials) {
                if (materials && materials.length > 0) {
                    _this.optMaterialsGG = materials;
                    resolve(true);
                }
                else {
                    reject(false);
                }
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * 厂家
     * @param parentId
     * @returns {Promise<T>}
     */
    MaterialsAddPage.prototype.getOptMaterialCJ = function (parentId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dataService.getOptMaterialCJ(parentId)
                .then(function (materials) {
                if (materials && materials.length > 0) {
                    _this.optMaterialsCJ = materials;
                    resolve(true);
                }
                else {
                    reject(false);
                }
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * 单位
     * @returns {Promise<T>}
     */
    MaterialsAddPage.prototype.getMaterialUnit = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configService.getMaterialUnit()
                .then(function (units) {
                if (units && units.length > 0) {
                    _this.materialsUnits = units;
                    resolve(true);
                }
                else {
                    reject(false);
                }
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * 修改材料信息
     */
    MaterialsAddPage.prototype.editMaterialInfo = function () {
        if (this.navParams.get('edit')) {
            var materials = this.navParams.get('edit');
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
    };
    /**
     * 选择材料类别
     */
    MaterialsAddPage.prototype.selectMaterialLB = function () {
        var _this = this;
        console.log(this.tag, this.materialLBID);
        this.dataService.getOptMaterialXH(this.materialLBID)
            .then(function (materials) {
            _this.optMaterialsXH = materials;
            _this.materialXHID = null;
            _this.optMaterialsGG.splice(0, _this.optMaterialsGG.length); //清空规格
            _this.optMaterialsCJ.splice(0, _this.optMaterialsCJ.length); //清空厂家
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    /**
     * 选择材料型号
     */
    MaterialsAddPage.prototype.selectMaterialXH = function () {
        var _this = this;
        this.dataService.getOptMaterialGG(this.materialXHID)
            .then(function (materials) {
            _this.optMaterialsGG = materials;
            _this.materialGGID = null;
            _this.optMaterialsCJ.splice(0, _this.optMaterialsCJ.length);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    /**
     * 选择材料规格
     */
    MaterialsAddPage.prototype.selectMaterialGG = function () {
        var _this = this;
        this.dataService.getOptMaterialCJ(this.materialGGID)
            .then(function (materials) {
            _this.optMaterialsCJ = materials;
            _this.materialCJID = null;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    /**
     * 数量（增加）
     */
    MaterialsAddPage.prototype.addAccount = function () {
        this.count++;
    };
    /**
     * 数量（减少）
     */
    MaterialsAddPage.prototype.reduceAccount = function () {
        this.count = (--this.count <= 0) ? 0 : this.count;
    };
    /**
     * 添加材料
     */
    MaterialsAddPage.prototype.addClick = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '提示',
            message: '确认信息无误？',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        var materialInfo = new __WEBPACK_IMPORTED_MODULE_3__model_MaterialsInfo__["c" /* MaterialsInfo */]();
                        _this.foreachMaterial(materialInfo);
                        materialInfo.count = _this.count; //数量
                        materialInfo.remark = _this.remark; //备注
                        var isSave = _this.buttonStr == '添加';
                        _this.events.publish(_this.globalService.materialsUpdateEvent, isSave, materialInfo);
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    };
    /**
     * 遍历材料和单位
     * @param info
     */
    MaterialsAddPage.prototype.foreachMaterial = function (info) {
        for (var _i = 0, _a = this.optMaterialsLB; _i < _a.length; _i++) {
            var material = _a[_i];
            if (material.id == this.materialLBID) {
                info.category = material;
                break;
            }
        }
        for (var _b = 0, _c = this.optMaterialsXH; _b < _c.length; _b++) {
            var material = _c[_b];
            if (material.id == this.materialXHID) {
                info.type = material;
                break;
            }
        }
        for (var _d = 0, _e = this.optMaterialsGG; _d < _e.length; _d++) {
            var material = _e[_d];
            if (material.id == this.materialGGID) {
                info.size = material;
                break;
            }
        }
        for (var _f = 0, _g = this.optMaterialsCJ; _f < _g.length; _f++) {
            var material = _g[_f];
            if (material.id == this.materialCJID) {
                info.productor = material;
                break;
            }
        }
        for (var _h = 0, _j = this.materialsUnits; _h < _j.length; _h++) {
            var unit = _j[_h];
            if (unit.id == this.unitID) {
                info.unit = unit;
                break;
            }
        }
    };
    return MaterialsAddPage;
}());
MaterialsAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-materialsadd',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\materialsadd\materialsadd.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label>材料类别：</ion-label>\n\n      <ion-select okText="确定" cancelText="取消" [(ngModel)]="materialLBID" (ionChange)="selectMaterialLB()">\n\n        <ion-option *ngFor="let type of optMaterialsLB" value={{type.id}}>{{type.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label>材料型号：</ion-label>\n\n      <ion-select okText="确定" cancelText="取消" [(ngModel)]="materialXHID" (ionChange)="selectMaterialXH()">\n\n        <ion-option *ngFor="let type of optMaterialsXH" value={{type.id}}>{{type.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>材料规格：</ion-label>\n\n      <ion-select okText="确定" cancelText="取消" [(ngModel)]="materialGGID" (ionChange)="selectMaterialGG()">\n\n        <ion-option *ngFor="let type of optMaterialsGG" value={{type.id}}>{{type.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>生产厂家：</ion-label>\n\n      <ion-select okText="确定" cancelText="取消" [(ngModel)]="materialCJID">\n\n        <ion-option *ngFor="let type of optMaterialsCJ" value={{type.id}}>{{type.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>单位：</ion-label>\n\n      <ion-select okText="确定" cancelText="取消" [(ngModel)]="unitID" (ionChange)="selectMaterialUnit()">\n\n        <ion-option *ngFor="let type of materialsUnits" value={{type.id}}>{{type.text}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <button item-left ion-button color="primary" clear icon-only (click)="reduceAccount()">\n\n        <ion-icon name=\'remove-circle\' is-active="false"></ion-icon>\n\n      </button>\n\n      <ion-label class="account">{{count}}</ion-label>\n\n      <button item-right ion-button color="primary" clear icon-only (click)="addAccount()">\n\n        <ion-icon name=\'add-circle\' is-active="false"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>备注：</ion-label>\n\n      <ion-input type="text" [(ngModel)]="remark"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <div class="add-button">\n\n        <button ion-button [disabled]="!materialLBID||!materialXHID||!materialGGID||!materialCJID||!unitID||count==0"\n\n                type="submit" block (click)="addClick()">{{buttonStr}}\n\n        </button>\n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\materialsadd\materialsadd.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_DataService__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_ConfigService__["a" /* ConfigService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], MaterialsAddPage);

//# sourceMappingURL=materialsadd.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/**
 * Created by zhangjing on 2017/6/14.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * 本地存储
 */
var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.write = function (key, value) {
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    };
    StorageService.prototype.read = function (key) {
        var value = localStorage.getItem(key);
        if (value && value != "undefined" && value != "null") {
            return JSON.parse(value);
        }
        return null;
    };
    StorageService.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    StorageService.prototype.clear = function () {
        sessionStorage.clear();
    };
    return StorageService;
}());
StorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StorageService);

//# sourceMappingURL=StorageService.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkSetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ConfigService__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 网络设置
 * Created by zhangjing on 2017/8/24.
 */
var NetworkSetPage = (function () {
    function NetworkSetPage(configService, toastCtrl, viewCtrl) {
        this.configService = configService;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
    }
    NetworkSetPage.prototype.ngOnInit = function () {
        var _this = this;
        Promise.all([this.configService.getServerBaseUris(), this.configService.getFileBaseUris(), this.configService.getMaterialsBaseUris()])
            .then(function (_a) {
            var _b = _a[0], hotLineOuterBaseUri = _b[0], hotLineInnerBaseUri = _b[1], _c = _a[1], fileOuterBaseUri = _c[0], fileInnerBaseUri = _c[1], _d = _a[2], materialsOuterBaseUri = _d[0], materialsInnerBaseUri = _d[1];
            _this.hotLineOuterBaseUri = hotLineOuterBaseUri;
            _this.hotLineInnerBaseUri = hotLineInnerBaseUri;
            _this.fileOuterBaseUri = fileOuterBaseUri;
            _this.fileInnerBaseUri = fileInnerBaseUri;
            _this.materialsOuterBaseUri = materialsOuterBaseUri;
            _this.materialsInnerBaseUri = materialsInnerBaseUri;
        })
            .then(function () { return _this.configService.isOuterNetwork(); })
            .then(function (result) { return _this.isOuterNet = result; })
            .then(function () { return _this.showOrHideMaterial(); })
            .catch(function (err) { return console.log(err); });
    };
    NetworkSetPage.prototype.showOrHideMaterial = function () {
        var _this = this;
        return this.configService.getSysRegion()
            .then(function (region) {
            if (region && region === __WEBPACK_IMPORTED_MODULE_2__providers_ConfigService__["a" /* ConfigService */].fushunRegion) {
                _this.showMaterial = true;
            }
        })
            .catch(function (error) { return console.error(error); })
            .then(function () { return _this.showMaterial = false; });
    };
    /**
     * 切换内外网
     */
    // notifyIsOutNet(): void {
    //   this.isOuterNet = !this.isOuterNet;
    //   // console.log(this.tag + "Toggled:" + this.isOuterNet);
    //   // this.configService.setIsOuterNet(this.isOuterNet)
    //   //   .then(result => {
    //   //     if (!result) {
    //   //       this.isOuterNet = !this.isOuterNet;
    //   //     } else {
    //   //       this.getServerBaseUri();
    //   //     }
    //   //   })
    //   //   .catch(error => {
    //   //     console.log(error);
    //   //   })
    // }
    // /**
    //  * 数据服务地址
    //  */
    // private getServerBaseUri() {
    //   Promise.all([this.getHotlineNetwork(), this.getMaterialNetwork()])
    //     .then(result => {
    //       console.log(this.tag, result);
    //       this.serverBaseUri = result[0];
    //       this.materialsBaseUri = result[1];
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     })
    // }
    //
    // /**
    //  * 热线地址
    //  * @returns {Promise<T>}
    //  */
    // private getHotlineNetwork(): Promise<string> {
    //   return new Promise((resolve, reject) => {
    //     this.configService.getServerBaseUri()
    //       .then(uri => {
    //         resolve(uri);
    //       })
    //       .catch(err => {
    //         reject(err);
    //       })
    //   })
    // }
    //
    // /**
    //  * 材料地址
    //  * @returns {Promise<T>}
    //  */
    // private getMaterialNetwork(): Promise<string> {
    //   return new Promise((resolve, reject) => {
    //     this.configService.getMaterialsBaseUri()
    //       .then(uri => {
    //         resolve(uri);
    //       })
    //       .catch(err => {
    //         reject(err);
    //       })
    //   })
    // }
    NetworkSetPage.prototype.onOk = function (ev) {
        var _this = this;
        var toast = this.toastCtrl.create({
            duration: 2000,
            position: 'bottom',
        });
        if (!this.hotLineOuterBaseUri
            || !this.hotLineInnerBaseUri
            || !this.fileOuterBaseUri
            || !this.fileInnerBaseUri
            || !this.materialsOuterBaseUri
            || !this.materialsInnerBaseUri) {
            toast.setMessage('请输入有效地址').present();
            return;
        }
        Promise.all([this.configService.setServerBaseUris(this.hotLineOuterBaseUri, this.hotLineInnerBaseUri, this.isOuterNet),
            this.configService.setFileBaseUris(this.fileOuterBaseUri, this.fileInnerBaseUri, this.isOuterNet),
            this.configService.setMaterialBaseUris(this.materialsOuterBaseUri, this.materialsInnerBaseUri, this.isOuterNet)])
            .then(function (result) {
            toast.setMessage('保存成功').present();
        })
            .catch(function (error) {
            console.error(error);
            toast.setMessage('保存失败').present();
        })
            .then(function () { return _this.viewCtrl.dismiss(); });
    };
    NetworkSetPage.prototype.onCancel = function (ev) {
        this.viewCtrl.dismiss();
    };
    return NetworkSetPage;
}());
NetworkSetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-list>\n      <ion-list-header color=\"primary\">\u7F51\u7EDC\u8BBE\u7F6E</ion-list-header>\n      \n      <ion-item>\n        <ion-label color=\"label\">\u6570\u636E\u670D\u52A1\u5916\u7F51\u5730\u5740:</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input type=\"text\" [(ngModel)]=\"hotLineOuterBaseUri\" clearInput></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label color=\"label\">\u6570\u636E\u670D\u52A1\u5185\u7F51\u5730\u5740:</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input type=\"text\" [(ngModel)]=\"hotLineInnerBaseUri\" clearInput></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label color=\"label\">\u6587\u4EF6\u670D\u52A1\u5916\u7F51\u5730\u5740:</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input type=\"text\" [(ngModel)]=\"fileOuterBaseUri\" clearInput></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label color=\"label\">\u6587\u4EF6\u670D\u52A1\u5185\u7F51\u5730\u5740:</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input type=\"text\" [(ngModel)]=\"fileInnerBaseUri\" clearInput></ion-input>\n      </ion-item>\n      \n      <ion-item *ngIf=\"showMaterial\">\n        <ion-label color=\"label\">\u6750\u6599\u670D\u52A1\u5916\u7F51\u5730\u5740:</ion-label>\n      </ion-item>\n      <ion-item *ngIf=\"showMaterial\">\n        <ion-input type=\"text\" [(ngModel)]=\"materialsOuterBaseUri\" clearInput></ion-input>\n      </ion-item>\n      \n      <ion-item *ngIf=\"showMaterial\">\n        <ion-label color=\"label\">\u6750\u6599\u670D\u52A1\u5185\u7F51\u5730\u5740:</ion-label>\n      </ion-item>\n      <ion-item *ngIf=\"showMaterial\">\n        <ion-input type=\"text\" [(ngModel)]=\"materialsInnerBaseUri\" clearInput></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-checkbox [(ngModel)]=\"isOuterNet\"></ion-checkbox>\n        <ion-label>\u4F7F\u7528\u5916\u7F51</ion-label>\n      </ion-item>\n\n      <button ion-item style=\"text-align:center; color:#488aff;\" (click)=\"onOk($event)\">\u786E\u5B9A</button>\n      <button ion-item style=\"text-align:center; color:#488aff;\" (click)=\"onCancel($event)\">\u53D6\u6D88</button>\n    </ion-list>\n  ",
        styles: [
            ".selected {\n      font-weight: bold;\n    }"
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_ConfigService__["a" /* ConfigService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], NetworkSetPage);

//# sourceMappingURL=networkset.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverdueTimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ConfigService__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OverdueTimePage = (function () {
    function OverdueTimePage(configService, toastCtrl, viewCtrl) {
        this.configService = configService;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.tag = "[OverdueTimePage]";
    }
    OverdueTimePage.prototype.ngOnInit = function () {
        this.getOverdueTime();
    };
    OverdueTimePage.prototype.getOverdueTime = function () {
        var _this = this;
        return this.configService.getOverdueTime()
            .then(function (overdueTime) { return _this.overdueTime = overdueTime; })
            .catch(function (err) { return console.error(_this.tag + err); })
            .then(function () {
            if (!_this.overdueTime) {
                _this.overdueTime = {
                    arrived: 1800000,
                    reply: 1800000,
                    delayReply: 1800000,
                    checkInterval: 60000
                };
            }
            else {
                if (!_this.overdueTime.arrived) {
                    _this.overdueTime.arrived = 1800000;
                }
                if (!_this.overdueTime.reply) {
                    _this.overdueTime.reply = 1800000;
                }
                if (!_this.overdueTime.delayReply) {
                    _this.overdueTime.delayReply = 1800000;
                }
                if (!_this.overdueTime.checkInterval) {
                    _this.overdueTime.checkInterval = 60000;
                }
            }
        })
            .then(function () {
            _this.arrivedDeadLine = _this.overdueTime.arrived;
            _this.replyDeadLine = _this.overdueTime.reply;
            _this.checkInterval = _this.overdueTime.checkInterval;
        });
    };
    OverdueTimePage.prototype.onOk = function (ev) {
        var _this = this;
        var toast = this.toastCtrl.create({
            duration: 2000,
            position: 'bottom',
        });
        if (!this.arrivedDeadLine || this.arrivedDeadLine <= 0
            || !this.replyDeadLine || this.replyDeadLine <= 0
            || !this.checkInterval || this.checkInterval <= 0) {
            toast.setMessage('请输入有效数值').present();
            return;
        }
        this.overdueTime.arrived = this.arrivedDeadLine;
        this.overdueTime.reply = this.replyDeadLine;
        this.overdueTime.checkInterval = this.checkInterval;
        this.configService.setOverdueTime(this.overdueTime)
            .then(function (result) {
            toast.setMessage('保存成功').present();
        })
            .catch(function (error) {
            console.error(error);
            toast.setMessage('保存失败').present();
        })
            .then(function () { return _this.viewCtrl.dismiss(); });
    };
    OverdueTimePage.prototype.onCancel = function (ev) {
        this.viewCtrl.dismiss();
    };
    return OverdueTimePage;
}());
OverdueTimePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-list>\n      <ion-list-header color=\"primary\">\u8D85\u671F\u8BBE\u7F6E(\u5355\u4F4D:\u6BEB\u79D2)</ion-list-header>\n      \n      <ion-item>\n        <ion-label color=\"label\">\u5230\u573A\u8D85\u671F</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input type=\"text\" [(ngModel)]=\"arrivedDeadLine\" clearInput></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label color=\"label\">\u5904\u7406\u8D85\u671F</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input type=\"text\" [(ngModel)]=\"replyDeadLine\" clearInput></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label color=\"label\">\u68C0\u67E5\u9891\u7387</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input type=\"text\" [(ngModel)]=\"checkInterval\" clearInput></ion-input>\n      </ion-item>\n\n      <button ion-item style=\"text-align:center; color:#488aff;\" (click)=\"onOk($event)\">\u786E\u5B9A</button>\n      <button ion-item style=\"text-align:center; color:#488aff;\" (click)=\"onCancel($event)\">\u53D6\u6D88</button>\n    </ion-list>\n  ",
        styles: [
            ".selected {\n      font-weight: bold;\n    }"
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_ConfigService__["a" /* ConfigService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], OverdueTimePage);

//# sourceMappingURL=overdueTimePage.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_preferences__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_UserInfo__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_DataService__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginPage = (function () {
    function LoginPage(navCtrl, alertCtrl, formBuilder, appPreferences, network, toastCtrl, globalService, dataService, device) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.appPreferences = appPreferences;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.globalService = globalService;
        this.dataService = dataService;
        this.device = device;
        this.tag = "[LoginPage]";
        this.user = new __WEBPACK_IMPORTED_MODULE_7__model_UserInfo__["a" /* UserInfo */]();
    }
    LoginPage.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            'LoginID': [this.globalService.userName, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(11),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9a-zA-Z ]*')])],
            'LoginPwd': ['0000', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4)])],
            'LoginSelect': ['worker', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])]
        });
        if (!this.globalService.isChrome) {
            this.getPreferences();
        }
    };
    /**
     * 获得app preferences
     */
    LoginPage.prototype.getPreferences = function () {
        var _this = this;
        //用户名
        this.appPreferences.fetch("userinfo", 'username')
            .then(function (result) {
            _this.user.userName = result.toString();
            _this.loginForm.patchValue({ LoginID: _this.user.userName });
        }).catch(function (err) {
            console.log(err);
        });
        //密码
        this.appPreferences.fetch("userinfo", 'pwd')
            .then(function (result) {
            _this.user.password = result.toString();
            _this.loginForm.patchValue({ LoginPwd: result.toString() });
        }).catch(function (err) {
            console.log(err);
        });
        //角色
        this.appPreferences.fetch("userinfo", 'role')
            .then(function (result) {
            _this.user.role = result.toString();
            _this.loginForm.patchValue({ LoginSelect: result.toString() });
        }).catch(function (err) {
            console.log(err);
        });
    };
    /**
     * 登录事件
     * @param user
     */
    LoginPage.prototype.loginClick = function (user) {
        //判断网络
        if (this.network.type == 'none' || this.network.type == 'unknow') {
            //有网就连网登录，无网判断本地是否有存储信息,有则离线登录
            if (!this.globalService.isChrome) {
                var toastInfo = void 0;
                var toast = this.toastCtrl.create({
                    duration: 2000,
                    position: 'bottom'
                });
                if (user['LoginID'] == this.user.userName && user['LoginPwd'] == this.user.password) {
                    toastInfo = '离线登录';
                    console.log(toastInfo);
                    toast.setMessage(toastInfo);
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__main_main__["a" /* MainPage */], {});
                }
                else {
                    toastInfo = '账号和密码未保存，请连网认证';
                    console.log(toastInfo);
                    toast.setMessage(toastInfo);
                }
                toast.present();
                return;
            }
        }
        //在线登录
        this.user.userName = user['LoginID'];
        this.user.password = user['LoginPwd'];
        this.user.role = user['LoginSelect'];
        this.doLogin();
    };
    /**
     * 登录操作
     * @param baseurl
     * @param userName
     * @param password
     */
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        if (this.user.userName && this.user.password) {
            this.dataService.doLogin(this.user)
                .then(function (userResult) {
                _this.onSuccessCallBack(_this.user.userName, userResult);
            })
                .catch(function (err) {
                _this.onErrorCallBack(err);
            });
        }
    };
    /**
     * 成功回调
     * @param data
     */
    LoginPage.prototype.onSuccessCallBack = function (userName, userResult) {
        var _this = this;
        this.globalService.userName = userName;
        this.globalService.userId = userResult.userId;
        this.globalService.department = userResult.Department;
        this.globalService.isWorker = (this.user.role == 'worker');
        //外勤
        if (this.globalService.isWorker) {
            this.dataService.getWorkInfo()
                .then(function (userWorkInfo) {
                console.log(userWorkInfo);
                _this.onSuccessLogin();
            })
                .catch(function (err) {
                _this.onErrorCallBack(err);
            });
            return;
        }
        //管理
        this.dataService.getManageInfo()
            .then(function (managerInfo) {
            console.log(managerInfo);
            _this.onSuccessLogin();
        })
            .catch(function (err) {
            _this.onErrorCallBack(err);
        });
    };
    /**
     * 最终成功登录
     */
    LoginPage.prototype.onSuccessLogin = function () {
        var toast = this.toastCtrl.create({
            duration: 2000,
            message: '在线登录成功',
            position: 'bottom',
        });
        toast.present();
        this.saveAppPreferences();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__main_main__["a" /* MainPage */], {});
    };
    /**
     * 保存参数
     */
    LoginPage.prototype.saveAppPreferences = function () {
        var _this = this;
        Promise.all([this.saveUserInfo('username', this.user.userName),
            this.saveUserInfo('pwd', this.user.password),
            this.saveUserInfo('role', this.user.role)])
            .then(function (result) {
            console.log(_this.tag + 'saveAppPreferences:' + result);
        })
            .catch(function (error) {
            console.log(_this.tag + 'saveAppPreferences:' + error);
        });
    };
    /**
     * 用户信息
     * @param infoType
     * @param valueInfo
     * @returns {Promise<TResult|TResult2|TResult1>}
     */
    LoginPage.prototype.saveUserInfo = function (infoType, valueInfo) {
        var _this = this;
        return this.appPreferences.store('userinfo', infoType, valueInfo)
            .then(function (result) {
            console.log(_this.tag + ':saveUserName:' + result);
        })
            .catch(function (error) {
            console.log(_this.tag + ':saveUserName:' + error);
        });
    };
    /**
     * 失败回调
     * @param error
     */
    LoginPage.prototype.onErrorCallBack = function (error) {
        console.log(error);
        var alert = this.alertCtrl.create({
            title: '提示：',
            subTitle: error ? error : '登录失败',
            buttons: ['确定']
        });
        alert.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\login\login.html"*/'<ion-header>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="login-logo">\n\n    <img src="assets/img/login_logo.png">\n\n  </div>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <ion-list>\n\n        <form [formGroup]="loginForm">\n\n          <ion-item>\n\n            <ion-icon name="person" item-start></ion-icon>\n\n            <ion-input type="text" formControlName="LoginID" clearInput></ion-input>\n\n          </ion-item>\n\n          <p *ngIf="!loginForm.controls.LoginID.valid && loginForm.controls.LoginID.touched" color="danger">请输入有效的用户名.</p>\n\n\n\n          <ion-item>\n\n            <ion-icon name="lock" item-start></ion-icon>\n\n            <ion-input type="password" formControlName="LoginPwd" clearInput></ion-input>\n\n          </ion-item>\n\n          <p *ngIf="!loginForm.controls.LoginPwd.valid && loginForm.controls.LoginPwd.touched" color="danger">请输入有效的密码.</p>\n\n\n\n          <ion-item>\n\n            <ion-label>选择人员</ion-label>\n\n            <ion-select okText="确定" cancelText="取消" formControlName="LoginSelect">\n\n              <ion-option value="worker">外勤人员</ion-option>\n\n              <ion-option value="manager">管理人员</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <p *ngIf="!loginForm.controls.LoginSelect.valid && loginForm.controls.LoginSelect.touched" color="danger">请选择人员.</p>\n\n        </form>\n\n      </ion-list>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <div class="login-button">\n\n        <button ion-button type="submit" [disabled]="!loginForm.valid" block (click)="loginClick(loginForm.value)">登录</button>\n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_preferences__["a" /* AppPreferences */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_8__providers_DataService__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__["a" /* Device */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mywork_mywork__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_news__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stationwork_stationwork__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setting_setting__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__history_myhistory__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model_MapParam__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__materials_materials__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import {DataService} from "../../providers/DataService";



//import {ConfigService} from "../../providers/ConfigService";



var ItemId;
(function (ItemId) {
    ItemId[ItemId["MyWork"] = 0] = "MyWork";
    ItemId[ItemId["History"] = 1] = "History";
    ItemId[ItemId["Map"] = 2] = "Map";
    ItemId[ItemId["StationWork"] = 3] = "StationWork";
    ItemId[ItemId["Search"] = 4] = "Search";
    ItemId[ItemId["News"] = 5] = "News";
    ItemId[ItemId["Materials"] = 6] = "Materials";
})(ItemId || (ItemId = {}));
var MainPage = (function () {
    function MainPage(navCtrl, 
        //private events: Events,
        //private dataService: DataService,
        globalService) {
        this.navCtrl = navCtrl;
        this.globalService = globalService;
        this.tag = "[MainPage]";
        this.title = '主界面';
        this.imgWidth = 64;
        this.imgHeight = 64;
        this.gridStyle = true;
        this.gridItems = [];
        this.listItems = [];
    }
    /**
     * 初始化
     */
    MainPage.prototype.ngOnInit = function () {
        console.log(this.tag, "ngOnInit");
        this.initListItem();
        this.initGirdItems();
        // this.subscribeEvent(this.events);
        // this.initGridStyle();
        // this.initData();
    };
    /**
     * 销毁
     */
    MainPage.prototype.ngOnDestroy = function () {
        console.log(this.tag, "ngOnDestroy");
        //this.events.unsubscribe(this.globalService.mainUpdateEvent);
        //this.dataService.destroy();
    };
    /**
     * 选择功能按钮
     * @param id
     */
    MainPage.prototype.itemSelected = function (id) {
        console.log(id);
        switch (id) {
            case ItemId.MyWork:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mywork_mywork__["a" /* MyWorkPage */]);
                break;
            case ItemId.History:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__history_myhistory__["a" /* MyHistory */]);
                break;
            case ItemId.Map:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__map_map__["a" /* MapPage */], new __WEBPACK_IMPORTED_MODULE_10__model_MapParam__["a" /* MapParam */](__WEBPACK_IMPORTED_MODULE_10__model_MapParam__["b" /* MapType */].View, undefined, undefined));
                break;
            case ItemId.Search:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
                break;
            case ItemId.StationWork:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__stationwork_stationwork__["a" /* StationWorkPage */]);
                break;
            case ItemId.News:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__news_news__["a" /* NewsPage */]);
                break;
            case ItemId.Materials:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__materials_materials__["a" /* MaterialsPage */]);
                break;
            default:
                break;
        }
    };
    /**
     * 选择设置按钮
     * @param event
     */
    MainPage.prototype.selectSettings = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__setting_setting__["a" /* SettingPage */]);
        // this.gridStyle = !this.gridStyle;
        // this.configService.setGridStyle(this.gridStyle)
        //   .then(result => console.log(result))
        //   .catch(error => console.error(error));
    };
    /**
     * 初始化list
     */
    MainPage.prototype.initListItem = function () {
        this.listItems.push({
            id: ItemId.MyWork,
            src: 'assets/img/ic_mywork.png',
            name: '我的任务',
            active: true,
            count: 0
        });
        this.listItems.push({
            id: ItemId.History,
            src: 'assets/img/ic_history.png',
            name: '历史记录',
            active: true,
            count: 0
        });
        this.listItems.push({
            id: ItemId.Map,
            src: 'assets/img/ic_map.png',
            name: '地图',
            active: true,
            count: 0
        });
        if (!this.globalService.isWorker) {
            this.listItems.push({
                id: ItemId.StationWork,
                src: 'assets/img/ic_stationwork.png',
                name: '站点任务',
                active: true,
                count: 0
            });
            this.listItems.push({
                id: ItemId.Search,
                src: 'assets/img/ic_searching.png',
                name: '查询',
                active: true,
                count: 0
            });
        }
        this.listItems.push({
            id: ItemId.News,
            src: 'assets/img/ic_news.png',
            name: '公告',
            active: true,
            count: 0
        });
        this.listItems.push({
            id: ItemId.Materials,
            src: 'assets/img/ic_add_materials.png',
            name: '材料登记',
            active: true,
            count: 0
        });
    };
    /**
     * 初始化grid
     */
    MainPage.prototype.initGirdItems = function () {
        var rowData = [];
        for (var _i = 0, _a = this.listItems; _i < _a.length; _i++) {
            var item = _a[_i];
            if (rowData.length == 3) {
                this.gridItems.push(rowData);
                rowData = [];
            }
            rowData.push(item);
        }
        this.gridItems.push(rowData);
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\main\main.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="white" (click)="selectSettings($event)">\n\n        <ion-icon name="settings"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="page-main">\n\n  <!--grid style-->\n\n  <ion-grid *ngIf="gridStyle">\n\n    <ion-row *ngFor="let item of gridItems">\n\n      <ion-col col-4 (click)="itemSelected(item[0].id)" *ngIf="item[0] && item[0].active">\n\n        <img src="{{item[0].src}}" width="{{imgWidth}}" height="{{imgHeight}}"/>\n\n        <ion-badge color="danger" class="grid-item-badge" *ngIf="item[0].count>0">{{item[0].count}}</ion-badge>\n\n        <ion-label>{{item[0].name}}</ion-label>\n\n      </ion-col>\n\n      <ion-col col-4 (click)="itemSelected(item[1].id)" *ngIf="item[1] && item[1].active">\n\n        <img src="{{item[1].src}}" width="{{imgWidth}}" height="{{imgHeight}}"/>\n\n        <ion-badge color="danger" class="grid-item-badge" *ngIf="item[1].count>0">{{item[1].count}}</ion-badge>\n\n        <ion-label>{{item[1].name}}</ion-label>\n\n      </ion-col>\n\n      <ion-col col-4 (click)="itemSelected(item[2].id)" *ngIf="item[2] && item[2].active">\n\n        <img src="{{item[2].src}}" width="{{imgWidth}}" height="{{imgHeight}}"/>\n\n        <ion-badge color="danger" class="grid-item-badge" *ngIf="item[2].count>0">{{item[2].count}}</ion-badge>\n\n        <ion-label>{{item[2].name}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <!--list style-->\n\n  <ion-list *ngIf="!gridStyle">\n\n    <ion-item *ngFor="let item of listItems">\n\n      <div class="list-item" *ngIf="item.active" (click)="itemSelected(item.id)">\n\n        <img src="{{item.src}}" width="{{imgWidth}}" height="imgHeight" class="item-img"/>\n\n        <p class="item-name">{{item.name}}</p>\n\n        <ion-badge color="danger" class="list-item-badge" *ngIf="item.count>0">{{item.count}}</ion-badge>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\main\main.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_8__providers_GlobalService__["a" /* GlobalService */]])
], MainPage);

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HttpInterceptor = (function () {
    function HttpInterceptor() {
    }
    HttpInterceptor.prototype.beforeRequest = function (request) {
        console.log(request);
        return request;
    };
    HttpInterceptor.prototype.afterResponse = function (res) {
        res.subscribe(function (data) {
            console.log(data);
        });
        return res;
    };
    return HttpInterceptor;
}());
HttpInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], HttpInterceptor);

//# sourceMappingURL=HttpInterceptor.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting_setting__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_news__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Created by zhangjing on 2017/8/23.
 */
var ItemId;
(function (ItemId) {
    ItemId[ItemId["News"] = 0] = "News";
    ItemId[ItemId["Setting"] = 1] = "Setting";
})(ItemId || (ItemId = {}));
var MorePage = (function () {
    function MorePage(navCtrl, globalService) {
        this.navCtrl = navCtrl;
        this.globalService = globalService;
        //private readonly tag: string = "[MorePage]";
        this.title = '更多';
        this.imgWidth = 64;
        this.imgHeight = 64;
        this.listItems = [];
    }
    /**
     * 初始化list
     */
    MorePage.prototype.initListItem = function () {
        this.listItems.push({
            id: ItemId.News,
            src: 'assets/img/ic_news.png',
            name: '公告',
            active: true,
            count: 0
        });
        this.listItems.push({
            id: ItemId.Setting,
            src: 'assets/img/ic_setting.png',
            name: '设置',
            active: true,
            count: 0
        });
    };
    MorePage.prototype.ngOnInit = function () {
        this.initListItem();
    };
    /**
     * 选择功能按钮
     * @param id
     */
    MorePage.prototype.itemSelected = function (id) {
        console.log(id);
        switch (id) {
            case ItemId.News:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__news_news__["a" /* NewsPage */]);
                break;
            case ItemId.Setting:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__setting_setting__["a" /* SettingPage */]);
                break;
            default:
                break;
        }
    };
    return MorePage;
}());
MorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\more\more.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="page-main">\n\n  <!--list style-->\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of listItems">\n\n      <div class="list-item" *ngIf="item.active" (click)="itemSelected(item.id)">\n\n        <img src="{{item.src}}" width="{{imgWidth}}" height="{{imgHeight}}" class="item-img"/>\n\n        <p class="item-name">{{item.name}}</p>\n\n        <ion-badge color="danger" class="list-item-badge" *ngIf="item.count>0">{{item.count}}</ion-badge>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\more\more.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_GlobalService__["a" /* GlobalService */]])
], MorePage);

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(268);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_main_main__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_mywork_mywork__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_news_news__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_workdetail_workdetail__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_stationwork_stationwork__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_workinfo_workinfo__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_history_myhistory__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_FileService__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_transfer__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_StorageService__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_app_version__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_zip__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_ConfigService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_opener__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_DataService__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_DownloadService__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_UploadService__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_network__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_search_search__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_app_preferences__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_searchresult_searchresult__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_searchdetail_searchdetails__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_newsdetails_newsdetails__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_setting_setting__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_HttpInterceptorBackend__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_HttpInterceptor__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_sqlite__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_sqlite_porter__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_DbService__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_device__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pipes_ValueValidPipe__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_camera__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_media_capture__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_video_player__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_android_permissions__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_media__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_MediaService__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_record_PopoverRecordPage__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_file_transfer__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_map_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_materials_materials__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_materialsadd_materialsadd__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_my_plugin__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_tabs_tabs__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_more_more__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_setting_networkset__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_about_about__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_contact_contact__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_setting_overdueTimePage__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_attachment_attachment__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__ionic_native_photo_viewer__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































//import {httpFactory} from "../providers/httpFactory";


























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_mywork_mywork__["a" /* MyWorkPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_workdetail_workdetail__["a" /* WorkDetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_stationwork_stationwork__["a" /* StationWorkPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_workinfo_workinfo__["a" /* WorkInfoPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_newsdetails_newsdetails__["a" /* NewsDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_searchresult_searchresult__["a" /* SearchResultPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_searchdetail_searchdetails__["a" /* SearchDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_43__pipes_ValueValidPipe__["a" /* ValueValidPipe */],
            __WEBPACK_IMPORTED_MODULE_15__pages_history_myhistory__["a" /* MyHistory */],
            __WEBPACK_IMPORTED_MODULE_52__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_43__pipes_ValueValidPipe__["a" /* ValueValidPipe */],
            __WEBPACK_IMPORTED_MODULE_53__pages_materials_materials__["a" /* MaterialsPage */],
            __WEBPACK_IMPORTED_MODULE_54__pages_materialsadd_materialsadd__["a" /* MaterialsAddPage */],
            __WEBPACK_IMPORTED_MODULE_43__pipes_ValueValidPipe__["a" /* ValueValidPipe */],
            __WEBPACK_IMPORTED_MODULE_50__pages_record_PopoverRecordPage__["a" /* PopoverRecordPage */],
            __WEBPACK_IMPORTED_MODULE_56__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_57__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_58__pages_setting_networkset__["a" /* NetworkSetPage */],
            __WEBPACK_IMPORTED_MODULE_59__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_60__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_61__pages_setting_overdueTimePage__["a" /* OverdueTimePage */],
            __WEBPACK_IMPORTED_MODULE_62__pages_attachment_attachment__["a" /* AttachmentPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                tabsHideOnSubPages: 'true' //隐藏全部子页面tabs
            }, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_41__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_mywork_mywork__["a" /* MyWorkPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_workdetail_workdetail__["a" /* WorkDetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_stationwork_stationwork__["a" /* StationWorkPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_workinfo_workinfo__["a" /* WorkInfoPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_newsdetails_newsdetails__["a" /* NewsDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_searchresult_searchresult__["a" /* SearchResultPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_searchdetail_searchdetails__["a" /* SearchDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_50__pages_record_PopoverRecordPage__["a" /* PopoverRecordPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_history_myhistory__["a" /* MyHistory */],
            __WEBPACK_IMPORTED_MODULE_52__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_53__pages_materials_materials__["a" /* MaterialsPage */],
            __WEBPACK_IMPORTED_MODULE_54__pages_materialsadd_materialsadd__["a" /* MaterialsAddPage */],
            __WEBPACK_IMPORTED_MODULE_56__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_57__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_58__pages_setting_networkset__["a" /* NetworkSetPage */],
            __WEBPACK_IMPORTED_MODULE_59__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_60__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_61__pages_setting_overdueTimePage__["a" /* OverdueTimePage */],
            __WEBPACK_IMPORTED_MODULE_62__pages_attachment_attachment__["a" /* AttachmentPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_17__providers_FileService__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_zip__["a" /* Zip */],
            __WEBPACK_IMPORTED_MODULE_19__providers_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_app_preferences__["a" /* AppPreferences */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_23__providers_ConfigService__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_20__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_36__providers_HttpInterceptorBackend__["a" /* HttpInterceptorBackend */],
            __WEBPACK_IMPORTED_MODULE_37__providers_HttpInterceptor__["a" /* HttpInterceptor */],
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_25__providers_DataService__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_26__providers_DownloadService__["a" /* DownloadService */],
            __WEBPACK_IMPORTED_MODULE_28__providers_UploadService__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_38__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_39__ionic_native_sqlite_porter__["a" /* SQLitePorter */],
            __WEBPACK_IMPORTED_MODULE_27__providers_GlobalService__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_40__providers_DbService__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_42__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_44__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_45__ionic_native_media_capture__["a" /* MediaCapture */],
            __WEBPACK_IMPORTED_MODULE_46__ionic_native_video_player__["a" /* VideoPlayer */],
            __WEBPACK_IMPORTED_MODULE_47__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_48__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_49__providers_MediaService__["a" /* MediaService */],
            __WEBPACK_IMPORTED_MODULE_51__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_55__ionic_native_my_plugin__["a" /* MyPlugin */],
            __WEBPACK_IMPORTED_MODULE_63__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component_service__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mywork_mywork__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_DataService__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, appComponentService, globalService, dataService) {
        var _this = this;
        this.appComponentService = appComponentService;
        this.globalService = globalService;
        this.dataService = dataService;
        this.rootPage = undefined;
        this.globalService.showLoading();
        platform.ready()
            .then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            return _this.appComponentService.init();
        })
            .then(function (page) { return _this.rootPage = page; })
            .catch(function (error) {
            console.error(error);
            _this.globalService.showToast(error);
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_mywork_mywork__["a" /* MyWorkPage */];
        })
            .then(function () { return _this.appComponentService.downloadConstantData(); })
            .catch(function (error) { return console.error(error); })
            .then(function () { return _this.globalService.hideLoading(); })
            .then(function () { return _this.handleOthers(); });
    }
    MyApp.prototype.handleOthers = function () {
        if (this.globalService.isChrome) {
            return;
        }
        var dataService = this.dataService;
        cordova.plugins.MyPlugin.getPushMessage(function (data) {
            console.log(data);
            dataService.savePushMessage(data)
                .then(function (result) { return console.log(result); })
                .catch(function (err) { return console.error(err); });
        }, function (error) {
            console.error(error);
        });
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\app\app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__app_component_service__["a" /* AppComponentService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__app_component_service__["a" /* AppComponentService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_7__providers_DataService__["a" /* DataService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_android_permissions__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_FileService__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_my_plugin__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_history_myhistory__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_stationwork_stationwork__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_news_news__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_materials_materials__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mywork_mywork__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_DataService__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_ConfigService__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AppComponentService = (function () {
    function AppComponentService(androidPermissions, globalService, fileService, dataService, myPlugin, configService) {
        this.androidPermissions = androidPermissions;
        this.globalService = globalService;
        this.fileService = fileService;
        this.dataService = dataService;
        this.myPlugin = myPlugin;
        this.configService = configService;
    }
    /**
     * 初始化
     * @returns {Promise<any>}
     */
    AppComponentService.prototype.init = function () {
        var _this = this;
        if (this.globalService.isChrome) {
            this.myPlugin = this.globalService.getMyPluginMock();
            return this.dataService.init()
                .then(function (result) { return _this.parsePageIntent(); });
        }
        else {
            return this.checkPermissions()
                .then(function (result) { return _this.fileService.createDirRoot(); })
                .then(function (result) { return _this.dataService.init(); })
                .then(function (result) { return _this.parsePageIntent(); });
        }
    };
    AppComponentService.prototype.downloadConstantData = function () {
        var _this = this;
        if (this.globalService.isChrome) {
            return this.dataService.downloadWords()
                .then(function (result) { return _this.dataService.downloadMaterials(); })
                .then(function (result) { return _this.globalService.isWorker ? true : _this.dataService.downloadPersonnels(); });
        }
        else {
            return this.dataService.checkIfDownloadWords()
                .then(function (result) { return _this.dataService.checkIfDownloadMaterials(); })
                .then(function (result) { return _this.globalService.isWorker ? true : _this.dataService.checkIfDownloadPersonnels(); });
        }
    };
    /**
     * 检查权限
     * @returns {Promise<Promise<any>|void>|Promise<void>|Promise<TResult>|Promise<any>}
     */
    AppComponentService.prototype.checkPermissions = function () {
        var permissions = [
            this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION,
            this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,
            this.androidPermissions.PERMISSION.ACCESS_WIFI_STATE,
            this.androidPermissions.PERMISSION.CHANGE_WIFI_STATE,
            this.androidPermissions.PERMISSION.READ_PHONE_STATE,
            this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
            this.androidPermissions.PERMISSION.INTERNET,
            this.androidPermissions.PERMISSION.CAMERA,
            this.androidPermissions.PERMISSION.RECORD_AUDIO
        ];
        return this.androidPermissions.requestPermissions(permissions)
            .then(function (success) { return console.log('Permission granted'); }, function (err) { return console.error(err); });
    };
    /**
     * 解析参数
     * @returns {Promise<Page>|Promise<PageIntent>|Promise<TResult2|Page>}
     */
    AppComponentService.prototype.parsePageIntent = function () {
        var _this = this;
        return this.myPlugin.getPageIntent()
            .then(function (pageIntent) {
            console.log(pageIntent);
            if (!pageIntent.roles) {
                pageIntent.roles = _this.globalService.worker;
            }
            else if (pageIntent.roles.includes('PDA热线管理人员')) {
                pageIntent.roles = _this.globalService.manager;
            }
            else {
                pageIntent.roles = _this.globalService.worker;
            }
            // TBD
            pageIntent.departmentAndId = _this.globalService.department + "#" + _this.globalService.departmentId;
            if (!pageIntent.account
                || !pageIntent.userName
                || !pageIntent.departmentAndId
                || !pageIntent.params
                || pageIntent.params.length <= 0) {
                pageIntent = __WEBPACK_IMPORTED_MODULE_2__providers_GlobalService__["b" /* MyPluginMock */].pageIntent;
            }
            return _this.getExtendedInfo(pageIntent.extendedInfo)
                .then(function (extendedInfo) {
                if (extendedInfo
                    && extendedInfo.hasOwnProperty("network")
                    && extendedInfo['network'] !== undefined
                    && extendedInfo['network'] !== null) {
                    return _this.configService.setIsOuterNet(extendedInfo['network']);
                }
                else {
                    return Promise.resolve(true);
                }
            })
                .then(function () { return _this.setUserDetailInfo(pageIntent); })
                .then(function (result) {
                var params = pageIntent.params.split('#');
                var page;
                switch (params[0]) {
                    case 'MyHistory':
                        page = __WEBPACK_IMPORTED_MODULE_5__pages_history_myhistory__["a" /* MyHistory */];
                        break;
                    case 'MapPage':
                        page = __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */];
                        break;
                    case 'SearchPage':
                        page = __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */];
                        break;
                    case 'StationWorkPage':
                        page = __WEBPACK_IMPORTED_MODULE_8__pages_stationwork_stationwork__["a" /* StationWorkPage */];
                        break;
                    case 'NewsPage':
                        page = __WEBPACK_IMPORTED_MODULE_9__pages_news_news__["a" /* NewsPage */];
                        break;
                    case 'MaterialsPage':
                        page = __WEBPACK_IMPORTED_MODULE_10__pages_materials_materials__["a" /* MaterialsPage */];
                        break;
                    case 'SettingPage':
                        page = __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__["a" /* SettingPage */];
                        break;
                    case 'MyWorkPage':
                    default:
                        page = __WEBPACK_IMPORTED_MODULE_12__pages_mywork_mywork__["a" /* MyWorkPage */];
                        break;
                }
                return Promise.resolve(page);
            });
        });
    };
    /**
     *
     * @param pageIntent
     * @returns {Promise<TResult|boolean>}
     */
    AppComponentService.prototype.setUserDetailInfo = function (pageIntent) {
        var _this = this;
        return this.globalService.saveUserDetailInfo({
            account: pageIntent.account,
            userId: pageIntent.userId,
            userName: pageIntent.userName,
            roles: pageIntent.roles,
            department: pageIntent.departmentAndId.split('#')[0],
            departmentId: 0
        }).catch(function (error) {
            console.error(error);
            _this.globalService.account = pageIntent.account;
            _this.globalService.userId = pageIntent.userId;
            _this.globalService.userName = pageIntent.userName;
            _this.globalService.isWorker = pageIntent.roles === _this.globalService.worker;
        });
        /*return this.globalService.getUserDetailInfo()
         .then(userDetailInfo => {
         // userId passed from main shell is not same as saved id
         // it will be changed in future
         //pageIntent.userId = userDetailInfo.userId;
         if (pageIntent.account === userDetailInfo.account
         && pageIntent.userId === userDetailInfo.userId
         && pageIntent.userName === userDetailInfo.userName) {
         return Promise.resolve(true);
         } else {
         return Promise.reject('different user');
         }
         })
         .catch(error => {
         console.error(error);
         return this.dataService.doLogin({
         userName: pageIntent.account,
         password: pageIntent.password,
         role: pageIntent.roles
         }).then(userResult => this.globalService.saveUserDetailInfo({
         account: pageIntent.account,
         userId: userResult.userId,
         userName: pageIntent.userName,
         roles: pageIntent.roles,
         department: userResult.Department,
         departmentId: 0
         })).catch(error => {
         console.error(error);
         this.globalService.account = pageIntent.account;
         this.globalService.userId = pageIntent.userId;
         this.globalService.userName = pageIntent.userName;
         this.globalService.isWorker = pageIntent.roles === this.globalService.worker;
         });
         });*/
    };
    AppComponentService.prototype.getExtendedInfo = function (extendedInfo) {
        var info;
        try {
            if (extendedInfo) {
                info = JSON.parse(extendedInfo);
            }
        }
        catch (e) {
            console.error(e);
        }
        return Promise.resolve(info);
    };
    return AppComponentService;
}());
AppComponentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_android_permissions__["a" /* AndroidPermissions */],
        __WEBPACK_IMPORTED_MODULE_2__providers_GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_FileService__["a" /* FileService */],
        __WEBPACK_IMPORTED_MODULE_13__providers_DataService__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_my_plugin__["a" /* MyPlugin */],
        __WEBPACK_IMPORTED_MODULE_14__providers_ConfigService__["a" /* ConfigService */]])
], AppComponentService);

//# sourceMappingURL=app.component.service.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SyncService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DownloadService__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UploadService__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Task__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DbService__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MediaService__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ConfigService__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MsgType;
(function (MsgType) {
    MsgType[MsgType["DownloadTasksAndDetails"] = 0] = "DownloadTasksAndDetails";
    MsgType[MsgType["DownloadDetailsOfTasks"] = 1] = "DownloadDetailsOfTasks";
    MsgType[MsgType["UploadMediasOfHistory"] = 2] = "UploadMediasOfHistory";
    MsgType[MsgType["UploadHistoriesAndMedias"] = 3] = "UploadHistoriesAndMedias";
    MsgType[MsgType["UploadMaterialInfos"] = 4] = "UploadMaterialInfos";
    //UploadMedias
    MsgType[MsgType["UploadAllInfos"] = 5] = "UploadAllInfos"; // history & media & material
})(MsgType || (MsgType = {}));
var SyncService = (function () {
    function SyncService(downloadService, uploadService, globalService, dbService, mediaService, events, configService) {
        this.downloadService = downloadService;
        this.uploadService = uploadService;
        this.globalService = globalService;
        this.dbService = dbService;
        this.mediaService = mediaService;
        this.events = events;
        this.configService = configService;
        this.syncEvent = 'sync:service';
        this.downloadTaskEvent = 'task:download';
        this.downloadTaskDetailEvent = 'task:detail:download';
        this.uploadHistoryEvent = 'history:upload';
        this.uploadMediaEvent = 'media:upload';
        this.uploadMaterialInfoEvent = 'materialInfo:upload';
        this.queue = [];
    }
    /**
     * 初始化
     */
    SyncService.prototype.init = function () {
        this.isServiceBusy = false;
        this.subscribeSyncEvent();
        this.subscribeDownloadEvent();
        this.subscribeUploadEvent();
        this.subscribeUploadMaterialInfoEvent();
    };
    /**
     * 销毁
     */
    SyncService.prototype.destroy = function () {
        this.events.unsubscribe(this.syncEvent);
        this.events.unsubscribe(this.downloadTaskEvent);
        this.events.unsubscribe(this.downloadTaskDetailEvent);
        this.events.unsubscribe(this.uploadHistoryEvent);
        this.events.unsubscribe(this.uploadMediaEvent);
        this.events.unsubscribe(this.uploadMaterialInfoEvent);
    };
    /**
     * 发送同步事件
     * @param syncMsg
     */
    SyncService.prototype.sendMsg = function (syncMsg) {
        this.queue.push(syncMsg);
        this.events.publish(this.syncEvent);
    };
    /**
     * 接收
     * @param acceptInfo
     * @param task
     * @param output
     * @returns {any}
     */
    SyncService.prototype.accept = function (acceptInfo, task, output) {
        var _this = this;
        if (output === void 0) { output = { uploadedFlag: this.globalService.uploadedFlagForLocal }; }
        if (this.configService.isDebugMode()) {
            debugger;
        }
        if (!acceptInfo || !task) {
            return Promise.reject('param is error');
        }
        else if (this.globalService.isChrome) {
            return this.uploadService.accept(acceptInfo)
                .then(function (result) {
                output.uploadedFlag = result ? _this.globalService.uploadedFlagForUploaded : _this.globalService.uploadedFlagForLocal;
                return result;
            });
        }
        else {
            return this.dbService.getHistories(acceptInfo.userId, acceptInfo.taskId)
                .then(function (histories) {
                if (_this.isExistingNotUploadedHistory(histories, __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Accept)) {
                    return _this.dbService.saveHistory({
                        userId: acceptInfo.userId,
                        taskId: acceptInfo.taskId,
                        state: __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Accept,
                        task: task,
                        reply: acceptInfo,
                        uploadedFlag: output.uploadedFlag = _this.globalService.uploadedFlagForLocal
                    }).then(function (result) { return _this.dbService.saveTask(task); });
                }
                else {
                    return _this.uploadService.accept(acceptInfo)
                        .then(function (result) { return _this.dbService.saveHistory({
                        userId: acceptInfo.userId,
                        taskId: acceptInfo.taskId,
                        state: __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Accept,
                        task: task,
                        reply: acceptInfo,
                        uploadedFlag: output.uploadedFlag = result ? _this.globalService.uploadedFlagForUploaded : _this.globalService.uploadedFlagForLocal
                    }); })
                        .then(function (result) { return _this.dbService.saveTask(task); });
                }
            });
        }
    };
    /**
     * 出发
     * @param goInfo
     * @param task
     * @param output
     * @returns {any}
     */
    SyncService.prototype.go = function (goInfo, task, output) {
        var _this = this;
        if (output === void 0) { output = { uploadedFlag: this.globalService.uploadedFlagForLocal }; }
        if (this.configService.isDebugMode()) {
            debugger;
        }
        if (!goInfo || !task) {
            return Promise.reject('param is error');
        }
        else if (this.globalService.isChrome) {
            return this.uploadService.go(goInfo)
                .then(function (result) {
                output.uploadedFlag = result ? _this.globalService.uploadedFlagForUploaded : _this.globalService.uploadedFlagForLocal;
                return result;
            });
        }
        else {
            return this.dbService.getHistories(goInfo.userId, goInfo.taskId)
                .then(function (histories) {
                if (_this.isExistingNotUploadedHistory(histories, __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Go)) {
                    return _this.dbService.saveHistory({
                        userId: goInfo.userId,
                        taskId: goInfo.taskId,
                        state: __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Go,
                        task: task,
                        reply: goInfo,
                        uploadedFlag: output.uploadedFlag = _this.globalService.uploadedFlagForLocal
                    }).then(function (result) { return _this.dbService.saveTask(task); });
                }
                else {
                    return _this.uploadService.go(goInfo)
                        .then(function (result) { return _this.dbService.saveHistory({
                        userId: goInfo.userId,
                        taskId: goInfo.taskId,
                        state: __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Go,
                        task: task,
                        reply: goInfo,
                        uploadedFlag: output.uploadedFlag = result ? _this.globalService.uploadedFlagForUploaded : _this.globalService.uploadedFlagForLocal
                    }); })
                        .then(function (result) { return _this.dbService.saveTask(task); });
                }
            });
        }
    };
    /**
     * 到场
     * @param arriveInfo
     * @param task
     * @param output
     * @returns {any}
     */
    SyncService.prototype.arrive = function (arriveInfo, task, output) {
        var _this = this;
        if (output === void 0) { output = { uploadedFlag: this.globalService.uploadedFlagForLocal }; }
        if (this.configService.isDebugMode()) {
            debugger;
        }
        if (!arriveInfo || !task) {
            return Promise.reject('param is error');
        }
        else if (this.globalService.isChrome) {
            return this.uploadService.arrive(arriveInfo)
                .then(function (result) {
                output.uploadedFlag = result ? _this.globalService.uploadedFlagForUploaded : _this.globalService.uploadedFlagForLocal;
                return result;
            });
        }
        else {
            return this.dbService.getHistories(arriveInfo.userId, arriveInfo.taskId)
                .then(function (histories) {
                if (_this.isExistingNotUploadedHistory(histories, __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Arrived)) {
                    return _this.dbService.saveHistory({
                        userId: arriveInfo.userId,
                        taskId: arriveInfo.taskId,
                        state: __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Arrived,
                        task: task,
                        reply: arriveInfo,
                        uploadedFlag: output.uploadedFlag = _this.globalService.uploadedFlagForLocal
                    }).then(function (result) { return _this.dbService.saveTask(task); });
                }
                else {
                    return _this.uploadService.arrive(arriveInfo)
                        .then(function (result) { return _this.dbService.saveHistory({
                        userId: arriveInfo.userId,
                        taskId: arriveInfo.taskId,
                        state: __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Arrived,
                        task: task,
                        reply: arriveInfo,
                        uploadedFlag: output.uploadedFlag = result ? _this.globalService.uploadedFlagForUploaded : _this.globalService.uploadedFlagForLocal
                    }); })
                        .then(function (result) { return _this.dbService.saveTask(task); });
                }
            });
        }
    };
    /**
     * 回复
     * @param replyInfo
     * @param task
     * @param taskDetail
     * @param mediaNames
     * @param output
     * @returns {any}
     */
    SyncService.prototype.reply = function (replyInfo, task, taskDetail, mediaNames, output) {
        var _this = this;
        if (output === void 0) { output = { uploadedFlag: this.globalService.uploadedFlagForLocal }; }
        if (this.configService.isDebugMode()) {
            debugger;
        }
        if (!replyInfo || !task || !taskDetail || !mediaNames) {
            return Promise.reject('param is error');
        }
        else if (this.globalService.isChrome) {
            return this.uploadService.reply(replyInfo)
                .then(function (result) {
                output.uploadedFlag = result ? _this.globalService.uploadedFlagForUploaded : _this.globalService.uploadedFlagForLocal;
                return result;
            });
        }
        else {
            return this.dbService.getHistories(replyInfo.userId, replyInfo.taskId)
                .then(function (histories) {
                if (_this.isExistingNotUploadedHistory(histories, __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Reply)) {
                    return _this.dbService.saveHistory({
                        userId: replyInfo.userId,
                        taskId: replyInfo.taskId,
                        state: __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Reply,
                        task: task,
                        reply: replyInfo,
                        uploadedFlag: output.uploadedFlag = _this.globalService.uploadedFlagForLocal,
                        taskDetail: taskDetail,
                        mediaNames: mediaNames
                    }).then(function (result) { return _this.dbService.saveTask(task); });
                }
                else {
                    return _this.uploadService.reply(replyInfo)
                        .catch(function (error) { return console.error(error); })
                        .then(function (result) { return _this.dbService.saveHistory({
                        userId: replyInfo.userId,
                        taskId: replyInfo.taskId,
                        state: __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Reply,
                        task: task,
                        reply: replyInfo,
                        uploadedFlag: output.uploadedFlag = result ? _this.globalService.uploadedFlagForUploaded : _this.globalService.uploadedFlagForLocal,
                        taskDetail: taskDetail,
                        mediaNames: mediaNames
                    }); })
                        .then(function (result) { return _this.dbService.saveTask(task); });
                }
            });
        }
    };
    /**
     * 退单
     * @param rejectInfo
     * @param task
     * @param output
     * @returns {any}
     */
    SyncService.prototype.reject = function (rejectInfo, task, output) {
        var _this = this;
        if (output === void 0) { output = { uploadedFlag: this.globalService.uploadedFlagForLocal }; }
        if (this.configService.isDebugMode()) {
            debugger;
        }
        if (!rejectInfo || !task) {
            return Promise.reject('param is error');
        }
        else if (this.globalService.isChrome) {
            return this.uploadService.reject(rejectInfo)
                .then(function (result) {
                output.uploadedFlag = result ? _this.globalService.uploadedFlagForUploaded : _this.globalService.uploadedFlagForLocal;
                return result;
            });
        }
        else {
            return this.dbService.getHistories(rejectInfo.userId, rejectInfo.taskId)
                .then(function (histories) {
                if (_this.isExistingNotUploadedHistory(histories, __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Reject)) {
                    return _this.dbService.saveHistory({
                        userId: rejectInfo.userId,
                        taskId: rejectInfo.taskId,
                        state: __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Reject,
                        task: task,
                        reply: rejectInfo,
                        uploadedFlag: output.uploadedFlag = _this.globalService.uploadedFlagForLocal
                    }).then(function (result) { return _this.dbService.saveTask(task); });
                }
                else {
                    return _this.uploadService.reject(rejectInfo)
                        .then(function (result) { return _this.dbService.saveHistory({
                        userId: rejectInfo.userId,
                        taskId: rejectInfo.taskId,
                        state: __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Reject,
                        task: task,
                        reply: rejectInfo,
                        uploadedFlag: output.uploadedFlag = result ? _this.globalService.uploadedFlagForUploaded : _this.globalService.uploadedFlagForLocal
                    }); })
                        .then(function (result) { return _this.dbService.saveTask(task); });
                }
            });
        }
    };
    /**
     * 延期
     * @param delayInfo
     * @param task
     * @param output
     * @returns {any}
     */
    SyncService.prototype.delay = function (delayInfo, task, output) {
        var _this = this;
        if (output === void 0) { output = { uploadedFlag: this.globalService.uploadedFlagForLocal }; }
        if (this.configService.isDebugMode()) {
            debugger;
        }
        if (!delayInfo || !task) {
            return Promise.reject('param is error');
        }
        else if (this.globalService.isChrome) {
            return this.uploadService.delay(delayInfo)
                .then(function (result) {
                output.uploadedFlag = result ? _this.globalService.uploadedFlagForUploaded : _this.globalService.uploadedFlagForLocal;
                return result;
            });
        }
        else {
            return this.dbService.getHistories(delayInfo.userId, delayInfo.taskId)
                .then(function (histories) {
                if (_this.isExistingNotUploadedHistory(histories, __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Delay)) {
                    return _this.dbService.saveHistory({
                        userId: delayInfo.userId,
                        taskId: delayInfo.taskId,
                        state: __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Delay,
                        task: task,
                        reply: delayInfo,
                        uploadedFlag: output.uploadedFlag = _this.globalService.uploadedFlagForLocal
                    }).then(function (result) { return _this.dbService.saveTask(task); });
                }
                else {
                    return _this.uploadService.delay(delayInfo)
                        .then(function (result) { return _this.dbService.saveHistory({
                        userId: delayInfo.userId,
                        taskId: delayInfo.taskId,
                        state: __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Delay,
                        task: task,
                        reply: delayInfo,
                        uploadedFlag: output.uploadedFlag = result ? _this.globalService.uploadedFlagForUploaded : _this.globalService.uploadedFlagForLocal
                    }); })
                        .then(function (result) { return _this.dbService.saveTask(task); });
                }
            });
        }
    };
    /**
     * 销单
     * @param cancelInfo
     * @param task
     * @param output
     * @returns {any}
     */
    SyncService.prototype.cancel = function (cancelInfo, task, output) {
        var _this = this;
        if (output === void 0) { output = { uploadedFlag: this.globalService.uploadedFlagForLocal }; }
        if (this.configService.isDebugMode()) {
            debugger;
        }
        if (!cancelInfo || !task) {
            return Promise.reject('param is error');
        }
        else if (this.globalService.isChrome) {
            return this.uploadService.cancel(cancelInfo)
                .then(function (result) {
                output.uploadedFlag = result ? _this.globalService.uploadedFlagForUploaded : _this.globalService.uploadedFlagForLocal;
                return result;
            });
        }
        else {
            return this.dbService.getHistories(cancelInfo.userId, cancelInfo.taskId)
                .then(function (histories) {
                if (_this.isExistingNotUploadedHistory(histories, __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Cancel)) {
                    return _this.dbService.saveHistory({
                        userId: cancelInfo.userId,
                        taskId: cancelInfo.taskId,
                        state: __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Cancel,
                        task: task,
                        reply: cancelInfo,
                        uploadedFlag: output.uploadedFlag = _this.globalService.uploadedFlagForLocal
                    }).then(function (result) { return _this.dbService.saveTask(task); });
                }
                else {
                    return _this.uploadService.cancel(cancelInfo)
                        .then(function (result) { return _this.dbService.saveHistory({
                        userId: cancelInfo.userId,
                        taskId: cancelInfo.taskId,
                        state: __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Cancel,
                        task: task,
                        reply: cancelInfo,
                        uploadedFlag: output.uploadedFlag = result ? _this.globalService.uploadedFlagForUploaded : _this.globalService.uploadedFlagForLocal
                    }); })
                        .then(function (result) { return _this.dbService.saveTask(task); });
                }
            });
        }
    };
    /**
     * 订阅同步事件
     */
    SyncService.prototype.subscribeSyncEvent = function () {
        var _this = this;
        this.events.subscribe(this.syncEvent, function () {
            if (_this.isServiceBusy) {
                console.log('service is busy');
            }
            else if (_this.queue.length <= 0) {
                console.log('the length of this queue is 0');
            }
            else {
                _this.isServiceBusy = true;
                var syncMsg = _this.queue.shift();
                switch (syncMsg.msgType) {
                    case MsgType.DownloadTasksAndDetails:
                        _this.downloadTasks(syncMsg.msgType);
                        break;
                    case MsgType.DownloadDetailsOfTasks:
                        _this.downloadDetails(syncMsg.msgType);
                        break;
                    case MsgType.UploadMediasOfHistory:
                        _this.uploadMedias(syncMsg.msgType, syncMsg.taskId);
                        break;
                    case MsgType.UploadHistoriesAndMedias:
                        _this.uploadHistories(syncMsg.msgType);
                        break;
                    case MsgType.UploadMaterialInfos:
                        _this.uploadUnUploadMaterialInfo(syncMsg.msgType);
                        break;
                    case MsgType.UploadAllInfos:
                        _this.uploadHistories(syncMsg.msgType);
                        break;
                    default:
                        _this.next();
                        break;
                }
            }
        });
    };
    /**
     * 订阅下载事件
     */
    SyncService.prototype.subscribeDownloadEvent = function () {
        var _this = this;
        // download all tasks
        this.events.subscribe(this.downloadTaskEvent, function (msgType, since, count) {
            _this.downloadService.getTasks(_this.globalService.userId, since, count)
                .then(function (tasks) {
                var retTasks = [];
                var _loop_1 = function (task) {
                    task.taskId += "#" + task.assignTime; // modify for the rejected task
                    var item = retTasks.find(function (item) {
                        return item.taskId === task.taskId
                            && item.acceptTime === task.acceptTime
                            && item.arrivedTime === task.arrivedTime
                            && item.assignTime === task.assignTime
                            && item.compltedTime === task.compltedTime
                            && item.createTime === task.createTime
                            && item.desc === task.desc
                            && item.goTime === task.goTime
                            && item.replyTime === task.replyTime
                            && item.source === task.source
                            && item.state === task.state
                            && item.taskType === task.taskType;
                    });
                    if (!item) {
                        retTasks.push(task);
                    }
                };
                for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
                    var task = tasks_1[_i];
                    _loop_1(task);
                }
                return retTasks;
            })
                .then(function (tasks) { return _this.dbService.saveTasks(_this.globalService.userId, tasks); })
                .then(function (result) {
                _this.events.publish(_this.downloadTaskEvent, msgType, since + count, count);
            })
                .catch(function (error) {
                console.error(error);
                if (msgType == MsgType.DownloadTasksAndDetails) {
                    _this.downloadDetails(msgType);
                }
                else {
                    _this.next();
                    _this.events.publish(_this.globalService.myWorkDownloadFinishEvent);
                }
            });
        });
        // download task detail
        this.events.subscribe(this.downloadTaskDetailEvent, function (msgType, taskIds) {
            if (taskIds && taskIds.length > 0) {
                var taskId_1 = taskIds.shift();
                if (taskId_1) {
                    // modify for the rejected task
                    return _this.downloadService.getTaskDetail(taskId_1.split('#')[0])
                        .then(function (detail) {
                        detail.taskId = taskId_1; // modify for the rejected task
                        return _this.dbService.saveTaskDetail(detail)
                            .then(function (result) { return result ? _this.dbService.updateTaskExtendInfo(detail) : false; });
                    })
                        .catch(function (error) { return console.error(error); })
                        .then(function (result) { return _this.events.publish(_this.downloadTaskDetailEvent, msgType, taskIds); });
                }
            }
            _this.next();
            _this.events.publish(_this.globalService.myWorkDownloadFinishEvent);
        });
    };
    /**
     * 订阅上传事件
     */
    SyncService.prototype.subscribeUploadEvent = function () {
        var _this = this;
        // upload histories
        this.events.subscribe(this.uploadHistoryEvent, function (msgType, histories) {
            if (histories && histories.length > 0) {
                var history_1 = histories.shift();
                var task = history_1.task;
                var promise = void 0;
                if (task && history_1.reply) {
                    var taskDetail = history_1.taskDetail;
                    var mediaNames = history_1.mediaNames;
                    switch (history_1.state) {
                        case __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Accept:
                            promise = _this.accept(history_1.reply, task);
                            break;
                        case __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Go:
                            promise = _this.go(history_1.reply, task);
                            break;
                        case __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Arrived:
                            promise = _this.arrive(history_1.reply, task);
                            break;
                        case __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Reply:
                            promise = _this.reply(history_1.reply, task, taskDetail, mediaNames);
                            break;
                        case __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Reject:
                            promise = _this.reject(history_1.reply, task);
                            break;
                        case __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Delay:
                            promise = _this.delay(history_1.reply, task);
                            break;
                        case __WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Cancel:
                            promise = _this.cancel(history_1.reply, task);
                            break;
                        default:
                            promise = Promise.reject('state is error');
                            break;
                    }
                }
                else {
                    promise = Promise.reject('state is error');
                }
                promise
                    .then(function (data) { return console.log(data); })
                    .catch(function (error) { return console.error(error); })
                    .then(function () { return _this.events.publish(_this.uploadHistoryEvent, msgType, histories); });
            }
            else {
                if (msgType === MsgType.UploadHistoriesAndMedias || msgType === MsgType.UploadAllInfos) {
                    _this.uploadMedias(msgType);
                }
                else {
                    _this.next();
                    _this.events.publish(_this.globalService.historyUploadFinishEvent);
                }
            }
        });
        // upload media
        this.events.subscribe(this.uploadMediaEvent, function (msgType, histories) {
            if (histories && histories.length > 0) {
                var history_2 = histories.shift();
                var mediaNames = history_2.mediaNames;
                if (mediaNames && mediaNames.length > 0) {
                    for (var i = 0; i < mediaNames.length; i++) {
                        mediaNames[i] = mediaNames[i].replace(/#\d*/, '');
                    }
                    _this.dbService.getMediaList(_this.globalService.userId, history_2.taskId, mediaNames, [_this.globalService.uploadedFlagForLocal, _this.globalService.uploadedFlagForUploading])
                        .then(function (mediaList) { return _this.configService.isNewFilService() ? _this.uploadMediaListV2(mediaList) : _this.uploadMediaList(mediaList); })
                        .catch(function (error) { return console.error(error); })
                        .then(function () { return _this.events.publish(_this.uploadMediaEvent, msgType, histories); });
                }
                else {
                    _this.events.publish(_this.uploadMediaEvent, msgType, histories);
                }
            }
            else {
                if (msgType === MsgType.UploadAllInfos) {
                    _this.uploadUnUploadMaterialInfo(msgType);
                }
                else {
                    _this.next();
                    _this.events.publish(_this.globalService.historyUploadFinishEvent);
                }
            }
        });
    };
    /**
     * 下载任务
     * @param msgType
     */
    SyncService.prototype.downloadTasks = function (msgType) {
        if (this.globalService.isChrome) {
            this.next();
            this.events.publish(this.globalService.myWorkDownloadFinishEvent);
        }
        else {
            this.events.publish(this.downloadTaskEvent, msgType, this.globalService.taskSinceDefault, this.globalService.taskCountDefault100);
        }
    };
    /**
     * 下载任务详情
     * @param msgType
     */
    SyncService.prototype.downloadDetails = function (msgType) {
        var _this = this;
        if (this.globalService.isChrome) {
            this.next();
            this.events.publish(this.globalService.myWorkDownloadFinishEvent);
        }
        else {
            this.dbService.getNoDetailTaskIds(this.globalService.userId)
                .catch(function (error) { return console.error(error); })
                .then(function (taskIds) { return _this.events.publish(_this.downloadTaskDetailEvent, msgType, taskIds); });
        }
    };
    /**
     * 上传历史工单
     * @param msgType
     */
    SyncService.prototype.uploadHistories = function (msgType) {
        var _this = this;
        if (this.globalService.isChrome) {
            this.next();
            this.events.publish(this.globalService.historyUploadFinishEvent);
        }
        else {
            this.dbService.getHistories(this.globalService.userId, undefined, undefined, [this.globalService.uploadedFlagForLocal, this.globalService.uploadedFlagForUploading])
                .catch(function (error) { return console.error(error); })
                .then(function (histories) { return _this.events.publish(_this.uploadHistoryEvent, msgType, histories); });
        }
    };
    /**
     * 上传多媒体
     * @param msgType
     * @param taskId
     */
    SyncService.prototype.uploadMedias = function (msgType, taskId) {
        var _this = this;
        if (this.globalService.isChrome) {
            this.next();
            this.events.publish(this.globalService.historyUploadFinishEvent);
        }
        else {
            this.dbService.getHistories(this.globalService.userId, taskId, [__WEBPACK_IMPORTED_MODULE_5__model_Task__["b" /* TaskState */].Reply], [])
                .catch(function (error) { return console.error(error); })
                .then(function (histories) { return _this.events.publish(_this.uploadMediaEvent, msgType, histories); });
        }
    };
    /**
     * 上传每个任务下的多媒体信息V2
     * @param mediaList
     * @returns {any}
     */
    SyncService.prototype.uploadMediaListV2 = function (mediaList) {
        var _this = this;
        if (mediaList && mediaList.length > 0) {
            var promises = mediaList.map(function (media) { return _this.uploadOneMediaV2(media); });
            return Promise.all(promises)
                .then(function (result) {
                var files = mediaList.filter(function (media) { return media.extendedInfo && media.extendedInfo instanceof Array && media.extendedInfo.length > 0; })
                    .map(function (media) { return media.extendedInfo[0]; });
                return _this.uploadService.uploadMediaIdsV2(mediaList[0].taskId.split('#')[0], _this.globalService.userId, files);
            })
                .then(function (result) {
                for (var _i = 0, mediaList_1 = mediaList; _i < mediaList_1.length; _i++) {
                    var media = mediaList_1[_i];
                    media.uploadedFlag = result ? _this.globalService.uploadedFlagForUploaded : _this.globalService.uploadedFlagForLocal;
                }
                var promises = mediaList.map(function (media) { return _this.dbService.saveMedia(media); });
                return Promise.all(promises)
                    .then(function (results) { return true; });
            });
        }
        else {
            return Promise.resolve(true);
        }
    };
    /**
     * 上传每个任务下的多媒体信息
     * @param mediaList
     * @returns {any}
     */
    SyncService.prototype.uploadMediaList = function (mediaList) {
        var _this = this;
        if (mediaList && mediaList.length > 0) {
            var promises = mediaList.map(function (media) { return _this.uploadOneMedia(media); });
            return Promise.all(promises)
                .then(function (result) {
                var files = mediaList.map(function (media) { return media.fileId; });
                return _this.uploadService.uploadMediaIds(mediaList[0].taskId.split('#')[0], files.join(','));
            })
                .then(function (result) {
                for (var _i = 0, mediaList_2 = mediaList; _i < mediaList_2.length; _i++) {
                    var media = mediaList_2[_i];
                    media.uploadedFlag = result ? _this.globalService.uploadedFlagForUploaded : _this.globalService.uploadedFlagForLocal;
                }
                var promises = mediaList.map(function (media) { return _this.dbService.saveMedia(media); });
                return Promise.all(promises)
                    .then(function (results) { return true; });
            });
        }
        else {
            return Promise.resolve(true);
        }
    };
    /**
     * 上传V2
     * @param media
     * @returns {Promise<boolean>}
     */
    SyncService.prototype.uploadOneMediaV2 = function (media) {
        var _this = this;
        return media.fileId && media.fileId !== 'null' && media.fileId !== 'undefined'
            ? Promise.resolve(true)
            : this.uploadService.uploadMediaV2(media)
                .then(function (fileId) {
                if (fileId) {
                    media.fileId = fileId;
                    return _this.dbService.saveMedia(media);
                }
                else {
                    return Promise.reject('fileId is error');
                }
            });
    };
    /**
     * 上传
     * @param media
     * @returns {Promise<boolean>}
     */
    SyncService.prototype.uploadOneMedia = function (media) {
        var _this = this;
        return media.fileId && media.fileId !== 'null' && media.fileId !== 'undefined'
            ? Promise.resolve(true)
            : this.uploadService.uploadMedia(media)
                .then(function (fileId) {
                if (fileId) {
                    media.fileId = fileId;
                    return _this.dbService.saveMedia(media);
                }
                else {
                    return Promise.reject('fileId is error');
                }
            });
    };
    /**
     * 检查是否存在未上传的历史记录
     * @param histories
     * @param state
     * @returns {boolean}
     */
    SyncService.prototype.isExistingNotUploadedHistory = function (histories, state) {
        var existing = false;
        if (histories && histories.length > 0) {
            for (var _i = 0, histories_1 = histories; _i < histories_1.length; _i++) {
                var history_3 = histories_1[_i];
                if (history_3.state === state) {
                    break;
                }
                if (history_3.uploadedFlag !== this.globalService.uploadedFlagForUploaded) {
                    existing = true;
                }
            }
        }
        return existing;
    };
    /**
     * 上传本地未上传的材料登记记录
     * @returns {Promise<T>}
     */
    SyncService.prototype.uploadUnUploadMaterialInfo = function (msgType) {
        var _this = this;
        if (this.globalService.isChrome) {
            this.next();
            this.events.publish(this.globalService.historyUploadFinishEvent);
            return;
        }
        return this.dbService.getNotUploadMaterilalInfo(this.globalService.userId)
            .catch(function (error) { return console.log(error); })
            .then(function (results) { return _this.events.publish(_this.uploadMaterialInfoEvent, results); });
    };
    /**
     * 订阅上传事件 材料清单
     */
    SyncService.prototype.subscribeUploadMaterialInfoEvent = function () {
        var _this = this;
        this.events.subscribe(this.uploadMaterialInfoEvent, function (materialInfos) {
            if (materialInfos && materialInfos.length > 0) {
                var materialInfo = materialInfos.shift();
                if (materialInfo) {
                    _this.uploadMaterialInfo(materialInfo)
                        .then(function (result) { return console.log(result); })
                        .catch(function (error) { return console.log(error); })
                        .then(function () { return _this.events.publish(_this.uploadMaterialInfoEvent, materialInfos); });
                }
            }
            else {
                _this.next();
                _this.events.publish(_this.globalService.historyUploadFinishEvent);
            }
        });
    };
    /**
     * 上传某条工单的记录并且修改标志位
     * @param data
     * @returns {Promise<T>}
     */
    SyncService.prototype.uploadMaterialInfo = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.uploadService.uploadMaterialsAdd(data.infos)
                .then(function (result) {
                //更新上传标志
                if (result) {
                    data.uploadFlag = _this.globalService.uploadedFlagForUploaded; //已上传
                    resolve(_this.dbService.updateFlagMaterials(data));
                }
                else {
                    reject("upload failed");
                }
            })
                .catch(function (error) {
                reject(false);
            });
        });
    };
    /**
     *
     */
    SyncService.prototype.next = function () {
        this.isServiceBusy = false;
        this.events.publish(this.syncEvent);
    };
    return SyncService;
}());
SyncService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__DownloadService__["a" /* DownloadService */],
        __WEBPACK_IMPORTED_MODULE_2__UploadService__["a" /* UploadService */],
        __WEBPACK_IMPORTED_MODULE_3__GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_6__DbService__["a" /* DbService */],
        __WEBPACK_IMPORTED_MODULE_7__MediaService__["a" /* MediaService */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_8__ConfigService__["a" /* ConfigService */]])
], SyncService);

//# sourceMappingURL=SyncService.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryEx; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Task__ = __webpack_require__(36);

var HistoryEx = (function () {
    function HistoryEx(history) {
        this.userId = history.userId;
        this.taskId = history.taskId;
        this.state = history.state;
        this.task = history.task;
        this.reply = history.reply;
        this.uploadedFlag = history.uploadedFlag;
        this.taskDetail = history.taskDetail;
        this.mediaNames = history.mediaNames;
        this.isRejected = history.state === __WEBPACK_IMPORTED_MODULE_0__Task__["b" /* TaskState */].Reject;
        this.isCanceled = history.state === __WEBPACK_IMPORTED_MODULE_0__Task__["b" /* TaskState */].Cancel;
        this.photoCount = 0;
        this.audioCount = 0; //todo 录音的数量
        this.videoCount = 0;
        this.isLocationValid = __WEBPACK_IMPORTED_MODULE_0__Task__["a" /* TaskEx */].checkLocation(this.task.location);
        if (this.task.extendedInfo && this.task.extendedInfo.delayTime > 0) {
            this.delayTime = this.task.extendedInfo.delayTime;
            if (this.delayTime > this.task.arrivedTime) {
                this.delayBeyond = "arrived";
            }
            else if (this.delayTime > this.task.goTime) {
                this.delayBeyond = "go";
            }
            else {
                this.delayBeyond = "accept";
            }
        }
    }
    HistoryEx.transformToHistoryEx = function (historyEx, historys) {
        for (var _i = 0, historys_1 = historys; _i < historys_1.length; _i++) {
            var history_1 = historys_1[_i];
            historyEx.push(new HistoryEx(history_1));
        }
    };
    return HistoryEx;
}());

//# sourceMappingURL=History.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchTaskRequest; });
/**
 * 查询工单检索模型
 * Created by zhangjing on 2017/7/4.
 */
var SearchTaskRequest = (function () {
    function SearchTaskRequest() {
    }
    return SearchTaskRequest;
}());

//# sourceMappingURL=SearchTaskRequest.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_FileService__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_DataService__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WelcomePage = (function () {
    function WelcomePage(navCtrl, loadingCtrl, platform, fileService, appVersion, androidPermissions, globalService, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.fileService = fileService;
        this.appVersion = appVersion;
        this.androidPermissions = androidPermissions;
        this.globalService = globalService;
        this.dataService = dataService;
        this.tag = "[WelcomePage]";
        this.platform.ready().then(function (readySource) { return _this.checkPermissions(); });
    }
    WelcomePage.prototype.checkPermissions = function () {
        var _this = this;
        if (this.globalService.isChrome) {
            this.onDidEnter();
        }
        else {
            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA)
                .then(function (success) { return console.log('Permission granted'); }, function (err) { return _this.androidPermissions.requestPermissions(_this.androidPermissions.PERMISSION.CAMERA); })
                .then(function () { return _this.onDidEnter(); })
                .catch(function (error) {
                console.error(error);
                _this.globalService.showToast(error);
            });
        }
    };
    /**
     * 进入页面回调
     */
    WelcomePage.prototype.onDidEnter = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: '加载中...',
            dismissOnPageChange: true
        });
        this.loading.present();
        //判断是否是安卓平台
        if (!this.globalService.isChrome) {
            console.log("platform is on android");
            this.fileService.createDirRoot()
                .then(function (result) {
                console.log(_this.tag + 'onDidEnter:' + result);
                // cordova.plugins.MyPlugin.onGetNavUrl(result => {
                //   if (result == 'addMaterials') {
                //     this.navCtrl.push(MaterialsPage, {});
                //   }
                // }, error => alert(error));
                _this.getVersionCode();
                _this.jump2Login();
            })
                .catch(function (err) {
                console.log("initial files failed" + err);
            });
        }
        else {
            console.log("platform is on chrome");
            this.loading.dismiss();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {});
        }
    };
    /**
     * 获得版本号
     */
    WelcomePage.prototype.getVersionCode = function () {
        var _this = this;
        this.appVersion.getVersionCode()
            .then(function (versionCode) {
            console.log(versionCode);
            _this.checkUpdate(versionCode);
        })
            .catch(function (err) {
            console.log("getVersionCode:" + err);
        });
    };
    /**
     * 检查更新(app和data)
     * @param version
     */
    WelcomePage.prototype.checkUpdate = function (version) {
        var _this = this;
        Promise.all([this.checkAppVersion(version), this.checkDataVersion(version)])
            .then(function (result) {
            console.log(_this.tag + 'checkUpdate:' + result);
            _this.jump2Login();
        })
            .catch(function (error) {
            _this.loading.dismiss();
            console.log(_this.tag + 'checkUpdate:' + error);
        });
    };
    /**
     * 检查app更新
     * @param version
     * @returns {Promise<TResult|TResult2|TResult1>}
     */
    WelcomePage.prototype.checkAppVersion = function (version) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dataService.checkAppVersion(version)
                .then(function (appVersion) {
                if (appVersion && appVersion.url) {
                    resolve(_this.fileService.downloadFile(false, appVersion.url));
                }
                else {
                    resolve('no update app');
                }
            })
                .catch(function (error) {
                _this.globalService.showToast(error);
                resolve(error);
            });
        });
    };
    /**
     * 检查数据包更新
     * @param version
     * @returns {Promise<TResult|TResult2|TResult1>}
     */
    WelcomePage.prototype.checkDataVersion = function (version) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dataService.checkDataVersion(version)
                .then(function (dataVersion) {
                if (dataVersion && dataVersion.url) {
                    resolve(_this.fileService.downloadFile(true, dataVersion.url));
                }
                else {
                    resolve('no update data');
                }
            })
                .catch(function (error) {
                _this.globalService.showToast(error);
                resolve(error);
            });
        });
    };
    /**
     * 跳转至登录界面
     */
    WelcomePage.prototype.jump2Login = function () {
        this.loading.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {});
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\welcome\welcome.html"*/'<ion-header>\n\n</ion-header>\n\n\n\n<ion-content class="page-content">\n\n  <div class="welcome-logo">\n\n    <img src="assets/img/splash_logo.png">\n\n  </div>\n\n\n\n\n\n  <div class="welcome-info">\n\n    <p>\n\n      Copyright@2017 ShangHai 3H Ver:{{version}}\n\n    </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\welcome\welcome.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__providers_FileService__["a" /* FileService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__["a" /* AppVersion */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__["a" /* AndroidPermissions */],
        __WEBPACK_IMPORTED_MODULE_5__providers_GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_DataService__["a" /* DataService */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfo; });
/**
 * Created by zhangjing on 2017/6/14.
 */
var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

//# sourceMappingURL=UserInfo.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInterceptorBackend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HttpInterceptor__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpInterceptorBackend = (function () {
    function HttpInterceptorBackend(httpInterceptor, xhrBackend) {
        this.httpInterceptor = httpInterceptor;
        this.xhrBackend = xhrBackend;
    }
    HttpInterceptorBackend.prototype.createConnection = function (request) {
        var interceptor = this.httpInterceptor;
        var req = interceptor.beforeRequest ? interceptor.beforeRequest(request) : request;
        var result = this.xhrBackend.createConnection(req);
        result.response = interceptor.afterResponse ? interceptor.afterResponse(result.response) : result.response;
        return result;
    };
    return HttpInterceptorBackend;
}());
HttpInterceptorBackend = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__HttpInterceptor__["a" /* HttpInterceptor */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* XHRBackend */]])
], HttpInterceptorBackend);

//# sourceMappingURL=HttpInterceptorBackend.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValueValidPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValueValidPipe = (function () {
    function ValueValidPipe() {
    }
    ValueValidPipe.prototype.transform = function (value) {
        if (typeof value === 'string') {
            return value === 'undefined' || value === 'null' ? '' : value;
        }
        else if (typeof value === 'number') {
            return value.toString();
        }
        else {
            return '';
        }
    };
    return ValueValidPipe;
}());
ValueValidPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'valueValid' })
], ValueValidPipe);

//# sourceMappingURL=ValueValidPipe.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mywork_mywork__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_myhistory__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stationwork_stationwork__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__more_more__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_ConfigService__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import {MyPlugin} from "@ionic-native/my-plugin";


var TabsPage = (function () {
    function TabsPage(globalService, configService) {
        this.globalService = globalService;
        this.configService = configService;
        this.workerTabsInfo = [
            { title: '我的任务', icon: 'home', page: __WEBPACK_IMPORTED_MODULE_1__mywork_mywork__["a" /* MyWorkPage */] },
            { title: '历史记录', icon: 'document', page: __WEBPACK_IMPORTED_MODULE_2__history_myhistory__["a" /* MyHistory */] },
            { title: '地图', icon: 'map', page: __WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */] },
            { title: '更多', icon: 'more', page: __WEBPACK_IMPORTED_MODULE_6__more_more__["a" /* MorePage */] } // 公告、设置
        ];
        this.adminTabsInfo = [
            { title: '站点任务', icon: 'home', page: __WEBPACK_IMPORTED_MODULE_5__stationwork_stationwork__["a" /* StationWorkPage */] },
            { title: '查询', icon: 'search', page: __WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */] },
            { title: '地图', icon: 'map', page: __WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */] },
            { title: '更多', icon: 'more', page: __WEBPACK_IMPORTED_MODULE_6__more_more__["a" /* MorePage */] } // 公告、设置
        ];
        this.tabsInfo = this.workerTabsInfo;
    }
    TabsPage.prototype.ngOnInit = function () {
        if (!this.globalService.isChrome) {
            var _this_1 = this;
            cordova.plugins.MyPlugin.getPushMessage(function (data) {
                console.log(data);
            }, function (error) {
                console.error(error);
            });
            cordova.plugins.MyPlugin.getChangedInfo(function (data) {
                console.log(data);
                if (data) {
                    var values = data.split('#');
                    if (values[0] === 'outerNetwork' && values[1]) {
                        _this_1.configService.setIsOuterNet(values[1] === 'true');
                    }
                }
            }, function (error) {
                console.error(error);
            });
        }
    };
    TabsPage.prototype.ngOnDestroy = function () {
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tabsInfo[0].page" tabTitle="{{tabsInfo[0].title}}" tabIcon="{{tabsInfo[0].icon}}"></ion-tab>\n\n  <ion-tab [root]="tabsInfo[1].page" tabTitle="{{tabsInfo[1].title}}" tabIcon="{{tabsInfo[1].icon}}"></ion-tab>\n\n  <ion-tab [root]="tabsInfo[2].page" tabTitle="{{tabsInfo[2].title}}" tabIcon="{{tabsInfo[2].icon}}"></ion-tab>\n\n  <ion-tab [root]="tabsInfo[3].page" tabTitle="{{tabsInfo[3].title}}" tabIcon="{{tabsInfo[3].icon}}"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_8__providers_ConfigService__["a" /* ConfigService */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TaskState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskEx; });
/* harmony export (immutable) */ __webpack_exports__["c"] = transform2ProcessEx;
/* harmony export (immutable) */ __webpack_exports__["d"] = transform2Task;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Process__ = __webpack_require__(122);

var TaskState;
(function (TaskState) {
    TaskState[TaskState["Dispatch"] = 0] = "Dispatch";
    TaskState[TaskState["Accept"] = 1] = "Accept";
    TaskState[TaskState["Go"] = 2] = "Go";
    TaskState[TaskState["Arrived"] = 3] = "Arrived";
    TaskState[TaskState["Reply"] = 4] = "Reply";
    TaskState[TaskState["Reject"] = 5] = "Reject";
    TaskState[TaskState["Delay"] = 6] = "Delay";
    TaskState[TaskState["Cancel"] = 7] = "Cancel";
    TaskState[TaskState["Continue"] = 8] = "Continue"; // 8
})(TaskState || (TaskState = {}));
var TaskEx = (function () {
    function TaskEx(task) {
        this.id = task.taskId;
        this.type = '热线工单'; //task.taskType;
        this.state = task.state; //TaskEx.convertState(task.state);
        this.describe = task.desc;
        this.location = {
            type: task.location.type,
            lng: task.location.lng,
            lat: task.location.lat
        };
        this.source = task.source;
        this.lastProcess = '';
        this.photoCount = 0;
        this.audioCount = 0;
        this.videoCount = 0;
        this.isPreview = false;
        this.isLocationValid = TaskEx.checkLocation(this.location);
        this.extendedInfo = task.extendedInfo;
        this.isUploaded = true;
        this.isOverdueArrivedLine = false;
        this.isOverdueReplyLine = false;
        this.processes = [];
        this.processes.push({
            event: 'create',
            name: '创建时间',
            time: TaskEx.utc2Date(task.createTime),
            show: true,
            color: __WEBPACK_IMPORTED_MODULE_0__Process__["a" /* DisableColor */],
            done: false,
            extend: null,
            isUploaded: true
        });
        this.processes.push({
            event: 'dispatch',
            name: '派发时间',
            time: TaskEx.utc2Date(task.assignTime),
            show: true,
            color: __WEBPACK_IMPORTED_MODULE_0__Process__["a" /* DisableColor */],
            done: false,
            extend: null,
            isUploaded: true
        });
        this.processes.push({
            event: 'accept',
            name: '接单时间',
            time: TaskEx.utc2Date(task.acceptTime),
            show: true,
            color: __WEBPACK_IMPORTED_MODULE_0__Process__["b" /* EnableColor */],
            done: false,
            extend: null,
            isUploaded: true
        });
        this.processes.push({
            event: 'go',
            name: '出发时间',
            time: TaskEx.utc2Date(task.goTime),
            show: false,
            color: __WEBPACK_IMPORTED_MODULE_0__Process__["b" /* EnableColor */],
            done: false,
            extend: null,
            isUploaded: true
        });
        this.processes.push({
            event: 'arrive',
            name: '到场时间',
            time: TaskEx.utc2Date(task.arrivedTime),
            show: false,
            color: __WEBPACK_IMPORTED_MODULE_0__Process__["b" /* EnableColor */],
            done: false,
            extend: null,
            isUploaded: true
        });
        this.processes.push({
            event: 'reply',
            name: '回复时间',
            time: TaskEx.utc2Date(task.replyTime),
            show: false,
            color: __WEBPACK_IMPORTED_MODULE_0__Process__["b" /* EnableColor */],
            done: false,
            extend: null,
            isUploaded: true
        });
        this.processes.push({
            event: 'reject',
            name: '退单时间',
            time: undefined,
            show: false,
            color: __WEBPACK_IMPORTED_MODULE_0__Process__["b" /* EnableColor */],
            done: false,
            extend: null,
            isUploaded: true
        });
        this.processes.push({
            event: 'delay',
            name: '延迟时间',
            time: undefined,
            show: false,
            color: __WEBPACK_IMPORTED_MODULE_0__Process__["b" /* EnableColor */],
            done: false,
            extend: null,
            isUploaded: true
        });
        this.processes.push({
            event: 'cancel',
            name: '销单时间',
            time: undefined,
            show: false,
            color: __WEBPACK_IMPORTED_MODULE_0__Process__["b" /* EnableColor */],
            done: false,
            extend: null,
            isUploaded: true
        });
    }
    TaskEx.transform = function (tasks, taskExs) {
        var start = taskExs.length;
        for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
            var task = tasks_1[_i];
            var taskEx = new TaskEx(task);
            taskExs.push(taskEx);
        }
        return taskExs.slice(start);
    };
    TaskEx.utc2Date = function (utc) {
        return utc > 0 ? new Date(utc) : undefined;
    };
    TaskEx.checkLocation = function (location) {
        var lng;
        var lat;
        if (location && location.lng && location.lat) {
            lng = Number.parseFloat(location.lng);
            lat = Number.parseFloat(location.lat);
        }
        return !!lng && !!lat;
    };
    TaskEx.convertState = function (state) {
        var taskState;
        switch (state) {
            case 0: // 已派遣
            case 1: // 接收
            case 2:
                taskState = TaskState.Dispatch;
                break;
            case 3:
                taskState = TaskState.Go;
                break;
            case 4:
                taskState = TaskState.Arrived;
                break;
            case 5:
                taskState = TaskState.Reply;
                break;
            case 99:
                taskState = TaskState.Cancel;
                break;
            case -1: // 已退单
            case -2: // 退单已重新派单
            case -3:
                taskState = TaskState.Reject;
                break;
            default:
                taskState = TaskState.Continue;
                break;
        }
        return taskState;
    };
    return TaskEx;
}());

/**
 * 处理步骤数组转对象
 * @param taskEx
 * @param processEx
 * @returns {boolean}
 */
function transform2ProcessEx(taskEx, processEx) {
    if (!taskEx && !processEx) {
        return false;
    }
    for (var _i = 0, _a = taskEx.processes; _i < _a.length; _i++) {
        var i = _a[_i];
        switch (i.event) {
            case 'create':
                processEx.create = i;
                break;
            case 'dispatch':
                processEx.dispatch = i;
                break;
            case 'accept':
                processEx.accept = i;
                break;
            case 'go':
                processEx.go = i;
                break;
            case 'arrive':
                processEx.arrive = i;
                break;
            case 'reply':
                processEx.reply = i;
                break;
            case 'reject':
                processEx.reject = i;
                break;
            case 'delay':
                processEx.delay = i;
                break;
            case 'cancel':
                processEx.cancel = i;
                break;
            default:
                console.error(this.tag, i.event);
                break;
        }
    }
    return !!(processEx && processEx.create && processEx.dispatch && processEx.accept && processEx.go
        && processEx.arrive && processEx.reply && processEx.reject && processEx.delay && processEx.cancel);
}
function getTime(date) {
    return date ? date.getTime() : 0;
}
/**
 *
 * @param info
 * @param taskEx
 * @param processEx
 * @returns {any}
 */
function transform2Task(info, taskEx, processEx) {
    if (info.hasOwnProperty('acceptTime')) {
        var acceptInfo = info;
        return {
            acceptTime: acceptInfo.acceptTime,
            arrivedTime: getTime(processEx.arrive.time),
            assignTime: getTime(processEx.dispatch.time),
            compltedTime: 0,
            createTime: getTime(processEx.create.time),
            desc: taskEx.describe,
            goTime: getTime(processEx.go.time),
            location: {
                type: taskEx.location.type,
                lng: taskEx.location.lng,
                lat: taskEx.location.lat
            },
            replyTime: getTime(processEx.reply.time),
            source: taskEx.source,
            state: TaskState.Accept,
            taskId: taskEx.id,
            taskType: taskEx.type
        };
    }
    else if (info.hasOwnProperty('goTime')) {
        var goInfo = info;
        return {
            acceptTime: getTime(processEx.accept.time),
            arrivedTime: getTime(processEx.arrive.time),
            assignTime: getTime(processEx.dispatch.time),
            compltedTime: 0,
            createTime: getTime(processEx.create.time),
            desc: taskEx.describe,
            goTime: goInfo.goTime,
            location: {
                type: taskEx.location.type,
                lng: taskEx.location.lng,
                lat: taskEx.location.lat
            },
            replyTime: getTime(processEx.reply.time),
            source: taskEx.source,
            state: TaskState.Go,
            taskId: taskEx.id,
            taskType: taskEx.type
        };
    }
    else if (info.hasOwnProperty('arrivedTime')) {
        var arriveInfo = info;
        return {
            acceptTime: getTime(processEx.accept.time),
            arrivedTime: arriveInfo.arrivedTime,
            assignTime: getTime(processEx.dispatch.time),
            compltedTime: 0,
            createTime: getTime(processEx.create.time),
            desc: taskEx.describe,
            goTime: getTime(processEx.go.time),
            location: {
                type: taskEx.location.type,
                lng: taskEx.location.lng,
                lat: taskEx.location.lat
            },
            replyTime: getTime(processEx.reply.time),
            source: taskEx.source,
            state: TaskState.Arrived,
            taskId: taskEx.id,
            taskType: taskEx.type
        };
    }
    else if (info.hasOwnProperty('rejectTime')) {
        var rejectInfo = info;
        if (!taskEx.extendedInfo) {
            taskEx.extendedInfo = {
                rejectTime: rejectInfo.rejectTime
            };
        }
        else {
            taskEx.extendedInfo.rejectTime = rejectInfo.rejectTime;
        }
        return {
            acceptTime: getTime(processEx.accept.time),
            arrivedTime: getTime(processEx.arrive.time),
            assignTime: getTime(processEx.dispatch.time),
            compltedTime: 0,
            createTime: getTime(processEx.create.time),
            desc: taskEx.describe,
            goTime: getTime(processEx.go.time),
            location: {
                type: taskEx.location.type,
                lng: taskEx.location.lng,
                lat: taskEx.location.lat
            },
            replyTime: getTime(processEx.reply.time),
            source: taskEx.source,
            state: TaskState.Reject,
            taskId: taskEx.id,
            taskType: taskEx.type,
            extendedInfo: taskEx.extendedInfo
        };
    }
    else if (info.hasOwnProperty('delayTime')) {
        var delayInfo = info;
        if (!taskEx.extendedInfo) {
            taskEx.extendedInfo = {
                delayTime: delayInfo.delayTime
            };
        }
        else {
            taskEx.extendedInfo.delayTime = delayInfo.delayTime;
        }
        return {
            acceptTime: getTime(processEx.accept.time),
            arrivedTime: getTime(processEx.arrive.time),
            assignTime: getTime(processEx.dispatch.time),
            compltedTime: 0,
            createTime: getTime(processEx.create.time),
            desc: taskEx.describe,
            goTime: getTime(processEx.go.time),
            location: {
                type: taskEx.location.type,
                lng: taskEx.location.lng,
                lat: taskEx.location.lat
            },
            replyTime: getTime(processEx.reply.time),
            source: taskEx.source,
            state: TaskState.Delay,
            taskId: taskEx.id,
            taskType: taskEx.type,
            extendedInfo: taskEx.extendedInfo
        };
    }
    else if (info.hasOwnProperty('opTime')) {
        var replyInfo = info;
        return {
            acceptTime: getTime(processEx.accept.time),
            arrivedTime: getTime(processEx.arrive.time),
            assignTime: getTime(processEx.dispatch.time),
            compltedTime: 0,
            createTime: getTime(processEx.create.time),
            desc: taskEx.describe,
            goTime: getTime(processEx.go.time),
            location: {
                type: taskEx.location.type,
                lng: taskEx.location.lng,
                lat: taskEx.location.lat
            },
            replyTime: replyInfo.opTime,
            source: taskEx.source,
            state: TaskState.Reply,
            taskId: taskEx.id,
            taskType: taskEx.type,
            extendedInfo: taskEx.extendedInfo
        };
    }
    else if (info.hasOwnProperty('destroyTime')) {
        var cancelInfo = info;
        if (!taskEx.extendedInfo) {
            taskEx.extendedInfo = {
                destroyTime: cancelInfo.destroyTime
            };
        }
        else {
            taskEx.extendedInfo.destroyTime = cancelInfo.destroyTime;
        }
        return {
            acceptTime: getTime(processEx.accept.time),
            arrivedTime: getTime(processEx.arrive.time),
            assignTime: getTime(processEx.dispatch.time),
            compltedTime: 0,
            createTime: getTime(processEx.create.time),
            desc: taskEx.describe,
            goTime: getTime(processEx.go.time),
            location: {
                type: taskEx.location.type,
                lng: taskEx.location.lng,
                lat: taskEx.location.lat
            },
            replyTime: getTime(processEx.reply.time),
            source: taskEx.source,
            state: TaskState.Cancel,
            taskId: taskEx.id,
            taskType: taskEx.type,
            extendedInfo: taskEx.extendedInfo
        };
    }
    else {
        return null;
    }
}
//# sourceMappingURL=Task.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_MapParam__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//declare var baidumap_location;
var MapStatus;
(function (MapStatus) {
    MapStatus[MapStatus["LOADING"] = 0] = "LOADING";
    MapStatus[MapStatus["LOADED"] = 1] = "LOADED";
})(MapStatus || (MapStatus = {}));
/**
 * Created by zhangjing on 2017/7/21.
 */
var MapPage = (function () {
    function MapPage(navCtrl, navParams, globalService) {
        this.navCtrl = navCtrl;
        this.globalService = globalService;
        this.ZoomMaxLevel = 16;
        if (navParams.data instanceof __WEBPACK_IMPORTED_MODULE_3__model_MapParam__["a" /* MapParam */]) {
            this.mapParam = navParams.data;
        }
        else {
            this.mapParam = new __WEBPACK_IMPORTED_MODULE_3__model_MapParam__["a" /* MapParam */](__WEBPACK_IMPORTED_MODULE_3__model_MapParam__["b" /* MapType */].View, undefined, undefined);
        }
        this.isMark = false;
    }
    MapPage.prototype.ngOnInit = function () {
        //this.loadMap();
        this.isInitSuccess = false;
        this.loadJScript(this._init.bind(this));
    };
    MapPage.prototype.loadJScript = function (callback) {
        var win = window;
        var baiduMap = win['baiduMap'];
        if (baiduMap && baiduMap.status === MapStatus.LOADING) {
            //baiduMap.callbacks.push(callback);
            return;
        }
        if (baiduMap && baiduMap.status === MapStatus.LOADED) {
            return callback();
        }
        win['baiduMap'] = { status: MapStatus.LOADING, callbacks: [] };
        win['baidumapinit'] = function () {
            win['baiduMap'].status = MapStatus.LOADED;
            callback();
            win['baiduMap'].callbacks.forEach(function (cb) { return cb(); });
            win['baiduMap'].callbacks = [];
        };
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://api.map.baidu.com/api?v=2.0&ak=Gsi66vGBjiuX3dlunDogoQYtHjbolbMi&callback=baidumapinit";
        script.onerror = function (err) {
            console.error(err);
        };
        document.body.appendChild(script);
    };
    MapPage.prototype._init = function () {
        this.map = new BMap.Map(this.mapElement.nativeElement, { enableMapClick: true });
        this.map.enableScrollWheelZoom(); //启动滚轮放大缩小，默认禁用
        this.map.enableContinuousZoom(); //连续缩放效果，默认禁用
        switch (this.mapParam.mapType) {
            case __WEBPACK_IMPORTED_MODULE_3__model_MapParam__["b" /* MapType */].Locate:
                this.showInfo();
                break;
            case __WEBPACK_IMPORTED_MODULE_3__model_MapParam__["b" /* MapType */].Mark:
                this.markMap();
                break;
            case __WEBPACK_IMPORTED_MODULE_3__model_MapParam__["b" /* MapType */].View:
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
    };
    MapPage.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    /**
     * 定位
     */
    MapPage.prototype.getCurrentLocation = function () {
        var _this = this;
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
            .then(function (location) {
            if (location && Math.abs(location.lng) > 0 && Math.abs(location.lat) > 0) {
                var point_1 = new BMap.Point(location.lng, location.lat);
                setTimeout(function () {
                    var convertor = new BMap.Convertor();
                    var pointArr = [];
                    pointArr.push(point_1);
                    convertor.translate(pointArr, 1, 5, function (data) {
                        if (data.status === 0) {
                            _this.map.clearOverlays();
                            _this.map.centerAndZoom(data.points[0], _this.ZoomMaxLevel);
                            var marker = new BMap.Marker(data.points[0]); // 创建标注
                            _this.map.addOverlay(marker); // 将标注添加到地图中
                            //marker.setAnimation('BMAP_ANIMATION_BOUNCE'); //跳动的动画
                        }
                    });
                }, 1000);
            }
        })
            .catch(function (error) { return console.error(error); });
    };
    /**
     * 确定坐标
     */
    MapPage.prototype.markLocation = function () {
        var center = this.map.getCenter();
        alert("选定坐标:" + center.lat + "," + center.lng);
    };
    /**
     * 展示弹框信息
     */
    MapPage.prototype.showInfo = function () {
        var point = new BMap.Point(this.mapParam.lng, this.mapParam.lat);
        if (!this.mapParam.content) {
            var marker = new BMap.Marker(point); // 创建标注
            this.map.addOverlay(marker); // 将标注添加到地图中
        }
        this.map.centerAndZoom(point, this.ZoomMaxLevel); //设置中心和地图显示级别
        if (this.mapParam.content) {
            var opts = {
                width: 100,
                height: 50,
                title: "任务编号",
                //enableAutoPan: false,
                enableCloseOnClick: false //关闭点击地图关闭信息窗口
            };
            var infoWindow = new BMap.InfoWindow(this.mapParam.content, opts);
            this.map.openInfoWindow(infoWindow, point);
        }
    };
    /**
     * 采集坐标
     */
    MapPage.prototype.markMap = function () {
        var myIcon = new BMap.Icon("assets/img/ic_map_center_location.png", new BMap.Size(23, 25));
        this.map.addEventListener("dragend", function (e) {
            this.map.clearOverlays();
            var center = this.map.getCenter();
            var marker = new BMap.Marker(center, { icon: myIcon });
            this.map.addOverlay(marker);
            marker.enableDragging();
            marker.addEventListener("dragend", function (e) {
                this.map.centerAndZoom(e.point, this.ZoomMaxLevel);
            });
        });
        this.isMark = true;
    };
    /**
     * 浏览地图
     */
    MapPage.prototype.viewMap = function () {
        var point = new BMap.Point(this.mapParam.lng, this.mapParam.lat);
        this.map.centerAndZoom(point, this.ZoomMaxLevel); //设置中心和地图显示级别
    };
    MapPage.prototype.destroy = function () {
        if (this.isInitSuccess) {
            if (this.mapParam.mapType === __WEBPACK_IMPORTED_MODULE_3__model_MapParam__["b" /* MapType */].Locate) {
                this.map.closeInfoWindow();
                this.map.clearOverlays();
            }
        }
    };
    return MapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapPage.prototype, "mapElement", void 0);
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\map\map.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>地图</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="white" (click)="getCurrentLocation($event)">\n\n        <ion-icon name="locate"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button *ngIf="isMark" icon-only color="white" (click)="markLocation($event)">\n\n        <ion-icon name="checkmark"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div id="map" #map>\n\n    <div class="markMap">\n\n      <ion-icon name="add" color="danger"></ion-icon>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\map\map.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_GlobalService__["a" /* GlobalService */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MapType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapParam; });
var MapType;
(function (MapType) {
    MapType[MapType["View"] = 0] = "View";
    MapType[MapType["Locate"] = 1] = "Locate";
    MapType[MapType["Mark"] = 2] = "Mark";
})(MapType || (MapType = {}));
var MapParam = (function () {
    function MapParam(mapType, location, content) {
        this.mapType = mapType;
        if (location && location.lng && location.lat) {
            this.lng = Number.parseFloat(location.lng);
            this.lat = Number.parseFloat(location.lat);
        }
        else {
            this.lng = 121.524577;
            this.lat = 31.281003;
        }
        this.content = content;
    }
    return MapParam;
}());

//# sourceMappingURL=MapParam.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workdetail_workdetail__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_DataService__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Task__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Process__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_MapParam__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__materials_materials__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_ConfigService__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import {CancelInfo} from "../../model/CancelInfo";




var FromWhere;
(function (FromWhere) {
    FromWhere[FromWhere["Download"] = 0] = "Download";
    //CancelOrReject,
    FromWhere[FromWhere["ReplyOrReject"] = 1] = "ReplyOrReject";
    FromWhere[FromWhere["Search"] = 2] = "Search";
    FromWhere[FromWhere["Delete"] = 3] = "Delete";
})(FromWhere || (FromWhere = {}));
var MyWorkPage = (function () {
    function MyWorkPage(navCtrl, dataService, alertCtrl, events, globalService, configService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.globalService = globalService;
        this.configService = configService;
        this.tag = "[MyWorkPage]";
        this.title = '任务列表';
        this.showToolbar = false;
        this.showFab = false;
        this.showMaterial = false;
        this.items = [];
        this.overdueTime = null; //超期时限
        this.since = this.globalService.taskSinceDefault;
        this.count = this.globalService.taskCountDefault10;
        this.isOperationBusy = false;
        this.key = '';
        this.replyHistories = [];
        this.isCheckingOverdueTime = false;
    }
    /**
     * 初始化
     */
    MyWorkPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.tag, 'ngOnInit');
        this.subscribeEvent(this.events);
        this.showFab = false;
        this.getOverdueTime()
            .then(function () { return _this.showOrHideMaterial(); })
            .then(function () { return _this.getTasks(_this.since, _this.count, _this.key); })
            .then(function (data) {
            _this.infiniteScroll.enable(data);
            _this.getTaskCount();
            _this.intervalId = setInterval(function () {
                if (_this.isActivePage) {
                    _this.checkOverdueTimeTasks();
                }
            }, _this.overdueTime.checkInterval);
        })
            .catch(function (error) { return console.error(error); });
    };
    /**
     * 销毁
     */
    MyWorkPage.prototype.ngOnDestroy = function () {
        console.log(this.tag, 'ngOnDestroy');
        this.events.unsubscribe(this.globalService.myWorkDownloadFinishEvent);
        this.events.unsubscribe(this.globalService.myWorkUpdateEvent);
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    };
    MyWorkPage.prototype.ionViewDidEnter = function () {
        console.log("ionViewDidEnter");
        this.isActivePage = true;
    };
    MyWorkPage.prototype.ionViewWillLeave = function () {
        console.log("ionViewWillLeave");
        this.isActivePage = false;
    };
    /**
     * 下拉同步
     * @param refresher
     */
    MyWorkPage.prototype.doRefresh = function (refresher) {
        console.log(this.tag, 'doRefresh');
        // if (this.showToolbar) {
        //   this.showToolbar = false;
        //   this.content.resize();
        // }
        this.key = '';
        this.dataService.downloadTasksAndDetails();
    };
    /**
     * 上拉，加载更多项
     * @param infiniteScroll
     */
    MyWorkPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log(this.tag, 'doInfinite begin');
        setTimeout(function () {
            _this.since += _this.count;
            _this.getTasks(_this.since, _this.count, _this.key)
                .then(function (data) {
                if (!data) {
                    infiniteScroll.enable(false);
                    _this.checkOverdueTimeTasks();
                }
                else {
                    infiniteScroll.complete();
                }
                console.log(_this.tag, 'doInfinite end');
            })
                .catch(function (error) {
                console.error(error);
                infiniteScroll.complete();
            })
                .then(function () {
                _this.showFab = _this.items.length > _this.count;
            });
        }, 100);
    };
    /**
     * 处理各个操作
     * @param taskEx
     * @param index
     */
    MyWorkPage.prototype.itemSelected = function (taskEx, index) {
        var _this = this;
        console.log(this.tag, "Selected Item " + index);
        this.globalService.getLocation()
            .then(function (location) {
            switch (taskEx.processes[index].event) {
                case 'accept':
                    _this.accept(taskEx, location);
                    break;
                case 'go':
                    _this.go(taskEx, location);
                    break;
                case 'arrive':
                    _this.arrive(taskEx, location);
                    break;
                case 'reply':
                    _this.reply(taskEx, location);
                    break;
                case 'reject':
                    _this.rejectPrompt(taskEx, location);
                    break;
                case 'delay':
                    _this.delayPrompt(taskEx, location);
                    break;
            }
        })
            .catch(function (error) {
            console.error(error);
            _this.globalService.showToast(error);
        });
    };
    /**
     * 显示/隐藏搜索框
     * @param ev
     */
    MyWorkPage.prototype.toggleToolbar = function (ev) {
        this.showToolbar = !this.showToolbar;
        this.content.resize();
    };
    /**
     * 搜索
     * @param ev
     */
    MyWorkPage.prototype.onInput = function (ev) {
        if (this.isOperationBusy) {
            return this.globalService.showToast('后台繁忙...');
        }
        // set val to the value of the ev target
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.key = val;
        }
        else {
            this.key = '';
        }
        this.resetTasks(FromWhere.Search);
    };
    /**
     *
     * @param ev
     */
    MyWorkPage.prototype.onCancel = function (ev) {
        console.log(this.tag, 'onCancel');
    };
    /**
     * list回滚到顶部
     * @param ev
     */
    MyWorkPage.prototype.doScroll2Top = function (ev) {
        this.content.scrollToTop();
    };
    /**
     * 定位地图
     * @param taskEx
     */
    MyWorkPage.prototype.onLocate = function (taskEx) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__map_map__["a" /* MapPage */], new __WEBPACK_IMPORTED_MODULE_8__model_MapParam__["a" /* MapParam */](__WEBPACK_IMPORTED_MODULE_8__model_MapParam__["b" /* MapType */].Locate, taskEx.location, taskEx.id));
    };
    /**
     * 预览工单
     * @param taskEx
     */
    MyWorkPage.prototype.onPreview = function (taskEx) {
        taskEx.isPreview = true;
        var history = this.findReplyHistory(taskEx.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__workdetail_workdetail__["a" /* WorkDetailPage */], [taskEx, history, this.overdueTime, true]);
    };
    /**
     * 材料登记
     * @param taskEx
     */
    MyWorkPage.prototype.onMaterials = function (taskEx) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__materials_materials__["a" /* MaterialsPage */], taskEx.id);
    };
    /**
     * 删除任务
     * @param taskEx
     */
    MyWorkPage.prototype.onDelete = function (taskEx) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '删除任务',
            message: '是否删除该任务及其所有操作?',
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        console.log('Ok clicked');
                        _this.dataService.deleteOneTaskWithAllInfos(taskEx.id)
                            .then(function (result) { return _this.resetTasks(FromWhere.Delete); })
                            .catch(function (err) { return console.error(err); });
                    }
                }
            ]
        });
        alert.present();
    };
    /**
     * 获取任务列表
     * @param since
     * @param count
     * @param key
     * @returns {Promise<boolean>}
     */
    MyWorkPage.prototype.getTasks = function (since, count, key) {
        var _this = this;
        return this.dataService.getTasks(since, count, key)
            .then(function (tasks) {
            console.log(_this.tag + "getTasks: " + tasks.length);
            if (tasks.length <= 0) {
                return Promise.resolve(false);
            }
            else {
                var taskExs_1 = __WEBPACK_IMPORTED_MODULE_4__model_Task__["a" /* TaskEx */].transform(tasks, _this.items);
                return _this.setProcesses(_this.items)
                    .then(function () { return taskExs_1.map(function (taskEx) { return taskEx.id; }); })
                    .then(function (taskIds) { return _this.dataService.checkIfExistNotUploadedHistories(taskIds); })
                    .then(function (histories) {
                    var _loop_1 = function (taskEx) {
                        var history_1 = histories.find(function (history) { return history.taskId === taskEx.id; });
                        if (history_1) {
                            taskEx.isUploaded = history_1.uploadedFlag === _this.globalService.uploadedFlagForUploaded;
                        }
                    };
                    for (var _i = 0, taskExs_2 = taskExs_1; _i < taskExs_2.length; _i++) {
                        var taskEx = taskExs_2[_i];
                        _loop_1(taskEx);
                    }
                    return Promise.resolve(true);
                });
                /*.then(() => tasks.filter(task => task.state === TaskState.Reply))
                 .then(tasks => tasks.map(task => task.taskId))
                 .then(taskIds => this.dataService.getReplyHistories(taskIds))
                 .then(histories => {
                 let result: boolean = false;
                 try {
                 this.replyHistories.push(...histories);
                 this.replyHistories.forEach(history => {
                 if (history.mediaNames && history.mediaNames.length > 0) {
                 let taskEx: TaskEx = this.items.find(taskEx => taskEx.id === history.taskId);
                 if (taskEx) {
                 let mediaNames = history.mediaNames;
                 taskEx.photoCount = mediaNames.filter(name => name.lastIndexOf(this.globalService.photoSuffix) !== -1).length;
                 taskEx.audioCount = mediaNames.filter(name => name.lastIndexOf(this.globalService.audioSuffix) !== -1).length;
                 taskEx.videoCount = mediaNames.filter(name => name.lastIndexOf(this.globalService.videoSuffix) !== -1).length;
                 }
                 }
                 });
                 result = true;
                 } catch (err) {
                 console.error(err);
                 }
      
                 return Promise.resolve(result);
                 });*/
            }
        });
    };
    /**
     * 获取超期时限
     * @returns {Promise<TResult>}
     */
    MyWorkPage.prototype.getOverdueTime = function () {
        var _this = this;
        return this.configService.getOverdueTime()
            .then(function (overdueTime) { return _this.overdueTime = overdueTime; })
            .catch(function (err) { return console.error(_this.tag + err); })
            .then(function () {
            if (!_this.overdueTime) {
                _this.overdueTime = {
                    arrived: 1800000,
                    reply: 1800000,
                    delayReply: 1800000,
                    checkInterval: 60000
                };
            }
            else {
                if (!_this.overdueTime.arrived) {
                    _this.overdueTime.arrived = 1800000;
                }
                if (!_this.overdueTime.reply) {
                    _this.overdueTime.reply = 1800000;
                }
                if (!_this.overdueTime.delayReply) {
                    _this.overdueTime.delayReply = 1800000;
                }
                if (!_this.overdueTime.checkInterval) {
                    _this.overdueTime.checkInterval = 60000;
                }
            }
        });
    };
    /**
     *
     * @returns {Promise<boolean>}
     */
    MyWorkPage.prototype.showOrHideMaterial = function () {
        var _this = this;
        return this.configService.getSysRegion()
            .then(function (region) {
            if (region && region === __WEBPACK_IMPORTED_MODULE_10__providers_ConfigService__["a" /* ConfigService */].fushunRegion) {
                _this.showMaterial = true;
            }
        })
            .catch(function (error) { return console.error(error); })
            .then(function () { return _this.showMaterial = false; });
    };
    /**
     * 检查超期工单
     */
    MyWorkPage.prototype.checkOverdueTimeTasks = function () {
        var _this = this;
        if (this.isCheckingOverdueTime) {
            return;
        }
        this.isCheckingOverdueTime = true;
        this.dataService.checkOverdueTimeTasks(this.overdueTime)
            .then(function (tasks) {
            if (!tasks || tasks.length <= 0) {
                return;
            }
            var count = 0;
            var _loop_2 = function (task) {
                if (!task.extendedInfo) {
                    return "continue";
                }
                var taskEx = _this.items.find(function (taskEx) { return taskEx.id === task.taskId; });
                if (taskEx) {
                    if (task.extendedInfo.arrivedDeadLine) {
                        taskEx.isOverdueArrivedLine = true;
                        count++;
                    }
                    else if (task.extendedInfo.replyDeadLine) {
                        taskEx.isOverdueReplyLine = true;
                        count++;
                    }
                }
            };
            for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
                var task = tasks_1[_i];
                _loop_2(task);
            }
            if (count > 0) {
                if (!_this.globalService.isChrome) {
                    _this.dataService.playAlarm();
                }
                _this.showOverdueCountAlert(count);
            }
        })
            .catch(function (err) { return console.error(_this.tag + err); })
            .then(function () { return _this.isCheckingOverdueTime = false; });
    };
    /**
     *
     * @param count
     */
    MyWorkPage.prototype.showOverdueCountAlert = function (count) {
        var alert = this.alertCtrl.create({
            title: '提示!',
            subTitle: '当前有' + count + '个热线工单任务超期',
            buttons: ['OK']
        });
        alert.present();
    };
    /**
     *
     * @param taskExs
     * @returns {Promise<T>}
     */
    MyWorkPage.prototype.setProcesses = function (taskExs) {
        return new Promise(function (resolve, reject) {
            var result = false;
            for (var _i = 0, taskExs_3 = taskExs; _i < taskExs_3.length; _i++) {
                var taskEx = taskExs_3[_i];
                var processEx = new __WEBPACK_IMPORTED_MODULE_5__model_Process__["c" /* ProcessEx */]();
                if (!Object(__WEBPACK_IMPORTED_MODULE_4__model_Task__["c" /* transform2ProcessEx */])(taskEx, processEx)) {
                    continue;
                }
                if (processEx.accept.time) {
                    processEx.accept.show = true;
                    processEx.accept.color = __WEBPACK_IMPORTED_MODULE_5__model_Process__["a" /* DisableColor */];
                    processEx.accept.done = true;
                    taskEx.lastProcess = 'accept';
                }
                if (processEx.go.time) {
                    processEx.go.show = true;
                    processEx.go.color = __WEBPACK_IMPORTED_MODULE_5__model_Process__["a" /* DisableColor */];
                    processEx.go.done = true;
                    if (taskEx.lastProcess != 'accept') {
                        processEx.accept.show = true;
                        processEx.accept.color = __WEBPACK_IMPORTED_MODULE_5__model_Process__["a" /* DisableColor */];
                        processEx.accept.done = true;
                    }
                    taskEx.lastProcess = 'go';
                }
                if (processEx.arrive.time) {
                    processEx.arrive.show = true;
                    processEx.arrive.color = __WEBPACK_IMPORTED_MODULE_5__model_Process__["a" /* DisableColor */];
                    processEx.arrive.done = true;
                    if (taskEx.lastProcess != 'go') {
                        processEx.go.show = true;
                        processEx.go.color = __WEBPACK_IMPORTED_MODULE_5__model_Process__["a" /* DisableColor */];
                        processEx.go.done = true;
                    }
                    taskEx.lastProcess = 'arrive';
                }
                if (processEx.reply.time) {
                    processEx.reply.show = true;
                    processEx.reply.color = __WEBPACK_IMPORTED_MODULE_5__model_Process__["a" /* DisableColor */];
                    processEx.reply.done = true;
                    if (taskEx.lastProcess != 'arrive') {
                        processEx.arrive.show = true;
                        processEx.arrive.color = __WEBPACK_IMPORTED_MODULE_5__model_Process__["a" /* DisableColor */];
                        processEx.arrive.done = true;
                    }
                    taskEx.lastProcess = 'reply';
                }
                if (processEx.reject.time) {
                    processEx.reject.show = true;
                    processEx.reject.color = __WEBPACK_IMPORTED_MODULE_5__model_Process__["a" /* DisableColor */];
                    processEx.reject.done = true;
                    taskEx.lastProcess = 'reject';
                }
                if (processEx.delay.time) {
                    processEx.delay.show = true;
                    processEx.delay.color = __WEBPACK_IMPORTED_MODULE_5__model_Process__["a" /* DisableColor */];
                    processEx.delay.done = true;
                    taskEx.lastProcess = 'delay';
                }
                if (processEx.cancel.time) {
                    processEx.cancel.show = true;
                    processEx.cancel.color = __WEBPACK_IMPORTED_MODULE_5__model_Process__["a" /* DisableColor */];
                    processEx.cancel.done = true;
                    taskEx.lastProcess = 'cancel';
                }
                switch (taskEx.lastProcess) {
                    case 'accept':
                        processEx.go.show = true;
                        processEx.reject.show = true;
                        processEx.delay.show = true;
                        break;
                    case 'go':
                        processEx.arrive.show = true;
                        processEx.reject.show = true;
                        processEx.delay.show = true;
                        break;
                    case 'arrive':
                        processEx.reply.show = true;
                        processEx.reject.show = true;
                        processEx.delay.show = true;
                        break;
                    case 'reply':
                        processEx.reject.show = false;
                        processEx.delay.show = processEx.delay.done;
                        processEx.cancel.show = true;
                        break;
                    case 'reject':
                        processEx.go.show = processEx.go.done;
                        processEx.arrive.show = processEx.arrive.done;
                        processEx.reply.show = processEx.reply.done;
                        processEx.delay.show = processEx.delay.done;
                        break;
                    case 'delay':
                        break;
                    case 'cancel':
                        break;
                    default:
                        break;
                }
                result = true;
            }
            resolve(result);
        });
    };
    /**
     * 获取任务数
     */
    MyWorkPage.prototype.getTaskCount = function () {
        var _this = this;
        this.dataService.getTaskCount()
            .then(function (count) {
            _this.events.publish(_this.globalService.mainUpdateEvent, { type: 'myWorkCount', count: count });
            if (_this.globalService.isChrome) {
                count = _this.items.length;
            }
            if (count > 0) {
                _this.checkOverdueTimeTasks();
            }
        })
            .catch(function (error) { return console.error(error); });
    };
    /**
     * 接单
     * @param taskEx
     * @param location
     */
    MyWorkPage.prototype.accept = function (taskEx, location) {
        var _this = this;
        var processEx = new __WEBPACK_IMPORTED_MODULE_5__model_Process__["c" /* ProcessEx */]();
        if (!Object(__WEBPACK_IMPORTED_MODULE_4__model_Task__["c" /* transform2ProcessEx */])(taskEx, processEx)) {
            return;
        }
        if (!processEx.accept.done) {
            var time_1 = new Date();
            var acceptInfo = {
                acceptTime: time_1.getTime(),
                location: location,
                taskId: taskEx.id,
                userId: this.globalService.userId
            };
            var task = Object(__WEBPACK_IMPORTED_MODULE_4__model_Task__["d" /* transform2Task */])(acceptInfo, taskEx, processEx);
            var output_1 = {
                uploadedFlag: this.globalService.uploadedFlagForLocal
            };
            this.dataService.accept(acceptInfo, task, output_1)
                .then(function (data) {
                var uploadedFlag = output_1.uploadedFlag === _this.globalService.uploadedFlagForUploaded;
                processEx.accept.time = time_1;
                processEx.accept.color = __WEBPACK_IMPORTED_MODULE_5__model_Process__["a" /* DisableColor */];
                processEx.accept.done = true;
                processEx.accept.isUploaded = uploadedFlag;
                processEx.go.show = true;
                processEx.reject.show = true;
                processEx.delay.show = true;
                //processEx.cancel.show = true;
                taskEx.lastProcess = 'accept';
                taskEx.state = __WEBPACK_IMPORTED_MODULE_4__model_Task__["b" /* TaskState */].Accept;
                taskEx.isUploaded = taskEx.isUploaded && uploadedFlag;
            })
                .catch(function (error) {
                console.error(_this.tag, error);
                _this.globalService.showToast(error);
            });
        }
    };
    /**
     * 出发
     * @param taskEx
     * @param location
     */
    MyWorkPage.prototype.go = function (taskEx, location) {
        var _this = this;
        var processEx = new __WEBPACK_IMPORTED_MODULE_5__model_Process__["c" /* ProcessEx */]();
        if (!Object(__WEBPACK_IMPORTED_MODULE_4__model_Task__["c" /* transform2ProcessEx */])(taskEx, processEx)) {
            return;
        }
        if (!processEx.go.done) {
            var time = new Date();
            var goInfo = {
                goTime: time.getTime(),
                location: location,
                taskId: taskEx.id,
                userId: this.globalService.userId
            };
            var task = Object(__WEBPACK_IMPORTED_MODULE_4__model_Task__["d" /* transform2Task */])(goInfo, taskEx, processEx);
            var output_2 = {
                uploadedFlag: this.globalService.uploadedFlagForLocal
            };
            this.dataService.go(goInfo, task, output_2)
                .then(function (data) {
                var uploadedFlag = output_2.uploadedFlag === _this.globalService.uploadedFlagForUploaded;
                processEx.go.time = new Date();
                processEx.go.color = __WEBPACK_IMPORTED_MODULE_5__model_Process__["a" /* DisableColor */];
                processEx.go.done = true;
                processEx.go.isUploaded = uploadedFlag;
                processEx.arrive.show = true;
                processEx.reject.show = true;
                processEx.delay.show = true;
                //processEx.cancel.show = true;
                taskEx.lastProcess = 'go';
                taskEx.state = __WEBPACK_IMPORTED_MODULE_4__model_Task__["b" /* TaskState */].Go;
                taskEx.isUploaded = taskEx.isUploaded && uploadedFlag;
            })
                .catch(function (error) {
                console.error(_this.tag + error);
                _this.globalService.showToast(error);
            });
        }
    };
    /**
     * 到场
     * @param taskEx
     * @param location
     */
    MyWorkPage.prototype.arrive = function (taskEx, location) {
        var _this = this;
        var processEx = new __WEBPACK_IMPORTED_MODULE_5__model_Process__["c" /* ProcessEx */]();
        if (!Object(__WEBPACK_IMPORTED_MODULE_4__model_Task__["c" /* transform2ProcessEx */])(taskEx, processEx)) {
            return;
        }
        if (!processEx.arrive.done) {
            var time_2 = new Date();
            var arriveInfo = {
                arrivedTime: time_2.getTime(),
                location: location,
                taskId: taskEx.id,
                userId: this.globalService.userId
            };
            var task = Object(__WEBPACK_IMPORTED_MODULE_4__model_Task__["d" /* transform2Task */])(arriveInfo, taskEx, processEx);
            var output_3 = {
                uploadedFlag: this.globalService.uploadedFlagForLocal
            };
            this.dataService.arrive(arriveInfo, task, output_3)
                .then(function (data) {
                var uploadedFlag = output_3.uploadedFlag === _this.globalService.uploadedFlagForUploaded;
                processEx.arrive.time = time_2;
                processEx.arrive.color = __WEBPACK_IMPORTED_MODULE_5__model_Process__["a" /* DisableColor */];
                processEx.arrive.done = true;
                processEx.arrive.isUploaded = uploadedFlag;
                processEx.reply.show = true;
                processEx.reject.show = true;
                processEx.delay.show = true;
                //processEx.cancel.show = true;
                taskEx.lastProcess = 'arrive';
                taskEx.state = __WEBPACK_IMPORTED_MODULE_4__model_Task__["b" /* TaskState */].Arrived;
                taskEx.isUploaded = taskEx.isUploaded && uploadedFlag;
            })
                .catch(function (error) {
                console.error(_this.tag + error);
                _this.globalService.showToast(error);
            });
        }
    };
    /**
     * 回复
     * @param taskEx
     * @param location
     */
    MyWorkPage.prototype.reply = function (taskEx, location) {
        var processEx = new __WEBPACK_IMPORTED_MODULE_5__model_Process__["c" /* ProcessEx */]();
        if (!Object(__WEBPACK_IMPORTED_MODULE_4__model_Task__["c" /* transform2ProcessEx */])(taskEx, processEx)) {
            return;
        }
        if (!processEx.reply.done || !processEx.reply.isUploaded) {
            taskEx.isPreview = false;
            var history_2 = this.findReplyHistory(taskEx.id);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__workdetail_workdetail__["a" /* WorkDetailPage */], [taskEx, history_2, this.overdueTime, false]);
        }
    };
    /**
     * 退单
     * @param taskEx
     * @param location
     */
    MyWorkPage.prototype.reject = function (taskEx, location) {
        var _this = this;
        var processEx = new __WEBPACK_IMPORTED_MODULE_5__model_Process__["c" /* ProcessEx */]();
        if (!Object(__WEBPACK_IMPORTED_MODULE_4__model_Task__["c" /* transform2ProcessEx */])(taskEx, processEx)) {
            return;
        }
        if (!processEx.reject.done) {
            var time_3 = new Date();
            var rejectExtend = processEx.reject.extend;
            var rejectInfo = {
                rejectTime: time_3.getTime(),
                rejectReason: rejectExtend.reason,
                location: location,
                taskId: taskEx.id,
                userId: this.globalService.userId
            };
            var task = Object(__WEBPACK_IMPORTED_MODULE_4__model_Task__["d" /* transform2Task */])(rejectInfo, taskEx, processEx);
            var output_4 = {
                uploadedFlag: this.globalService.uploadedFlagForLocal
            };
            this.dataService.reject(rejectInfo, task, output_4)
                .then(function (data) {
                var uploadedFlag = output_4.uploadedFlag === _this.globalService.uploadedFlagForUploaded;
                processEx.reject.time = time_3;
                processEx.reject.color = __WEBPACK_IMPORTED_MODULE_5__model_Process__["a" /* DisableColor */];
                processEx.reject.done = true;
                processEx.reject.isUploaded = uploadedFlag;
                processEx.go.show = processEx.go.done;
                processEx.arrive.show = processEx.arrive.done;
                processEx.reply.show = processEx.reply.done;
                processEx.delay.show = processEx.delay.done;
                //processEx.cancel.show = false;
                taskEx.lastProcess = 'reject';
                taskEx.state = __WEBPACK_IMPORTED_MODULE_4__model_Task__["b" /* TaskState */].Reject;
                taskEx.isUploaded = taskEx.isUploaded && uploadedFlag;
                _this.events.publish(_this.globalService.myWorkUpdateEvent, { type: 'reject' });
            })
                .catch(function (error) {
                console.error(_this.tag + error);
                _this.globalService.showToast(error);
            });
        }
    };
    /**
     * 延迟
     * @param taskEx
     * @param location
     */
    MyWorkPage.prototype.delay = function (taskEx, location) {
        var _this = this;
        var processEx = new __WEBPACK_IMPORTED_MODULE_5__model_Process__["c" /* ProcessEx */]();
        if (!Object(__WEBPACK_IMPORTED_MODULE_4__model_Task__["c" /* transform2ProcessEx */])(taskEx, processEx)) {
            return;
        }
        if (!processEx.delay.done) {
            var isSuccess = false;
            var lastProcess = "accept";
            var curEvent = "delay";
            var curName = "延迟时间";
            var extend = processEx.delay.extend;
            if (taskEx.lastProcess === lastProcess
                && this.sortDelayProcess(taskEx, lastProcess, curEvent, curName, extend)
                && Object(__WEBPACK_IMPORTED_MODULE_4__model_Task__["c" /* transform2ProcessEx */])(taskEx, processEx = new __WEBPACK_IMPORTED_MODULE_5__model_Process__["c" /* ProcessEx */]())) {
                isSuccess = true;
            }
            lastProcess = "go";
            if (taskEx.lastProcess === lastProcess
                && this.sortDelayProcess(taskEx, lastProcess, curEvent, curName, extend)
                && Object(__WEBPACK_IMPORTED_MODULE_4__model_Task__["c" /* transform2ProcessEx */])(taskEx, processEx = new __WEBPACK_IMPORTED_MODULE_5__model_Process__["c" /* ProcessEx */]())) {
                isSuccess = true;
            }
            lastProcess = "arrive";
            if (taskEx.lastProcess === lastProcess
                && this.sortDelayProcess(taskEx, lastProcess, curEvent, curName, extend)
                && Object(__WEBPACK_IMPORTED_MODULE_4__model_Task__["c" /* transform2ProcessEx */])(taskEx, processEx = new __WEBPACK_IMPORTED_MODULE_5__model_Process__["c" /* ProcessEx */]())) {
                isSuccess = true;
            }
            if (isSuccess) {
                var time_4 = new Date();
                var delayExtend = processEx.delay.extend;
                var delayInfo = {
                    delayTime: time_4.getTime(),
                    deadline: delayExtend.deadline.getTime(),
                    comment: delayExtend.comment,
                    location: location,
                    taskId: taskEx.id,
                    userId: this.globalService.userId
                };
                var task = Object(__WEBPACK_IMPORTED_MODULE_4__model_Task__["d" /* transform2Task */])(delayInfo, taskEx, processEx);
                var output_5 = {
                    uploadedFlag: this.globalService.uploadedFlagForLocal
                };
                this.dataService.delay(delayInfo, task, output_5)
                    .then(function (data) {
                    var uploadedFlag = output_5.uploadedFlag === _this.globalService.uploadedFlagForUploaded;
                    processEx.delay.time = time_4;
                    processEx.delay.color = __WEBPACK_IMPORTED_MODULE_5__model_Process__["a" /* DisableColor */];
                    processEx.delay.done = true;
                    processEx.delay.isUploaded = uploadedFlag;
                    taskEx.lastProcess = 'delay';
                    taskEx.state = __WEBPACK_IMPORTED_MODULE_4__model_Task__["b" /* TaskState */].Delay;
                    taskEx.isUploaded = taskEx.isUploaded && uploadedFlag;
                })
                    .catch(function (error) {
                    console.error(_this.tag + error);
                    _this.globalService.showToast(error);
                });
            }
        }
    };
    /**
     * 销单
     * @param taskEx
     * @param location
     */
    // private cancel(taskEx: TaskEx, location: Location): void {
    //   let processEx: ProcessEx = new ProcessEx();
    //   if (!transform2ProcessEx(taskEx, processEx)) {
    //     return;
    //   }
    //
    //   if (!processEx.cancel.done) {
    //     let time = new Date();
    //     let cancelExtend: CancelExtend = processEx.cancel.extend as CancelExtend;
    //     let cancelInfo: CancelInfo = {
    //       destroyTime: time.getTime(),
    //       destroyRemark: cancelExtend.remark,
    //       location,
    //       taskId: taskEx.id,
    //       userId: this.globalService.userId
    //     };
    //     let task: Task = transform2Task(cancelInfo, taskEx, processEx);
    //     let output: any = {
    //       uploadedFlag: this.globalService.uploadedFlagForLocal
    //     };
    //     this.dataService.cancel(cancelInfo, task, output)
    //       .then(data => {
    //         let uploadedFlag: boolean = output.uploadedFlag === this.globalService.uploadedFlagForUploaded;
    //         processEx.cancel.time = time;
    //         processEx.cancel.color = DisableColor;
    //         processEx.cancel.done = true;
    //         processEx.cancel.isUploaded = uploadedFlag;
    //
    //         processEx.go.show = processEx.go.done;
    //         processEx.arrive.show = processEx.arrive.done;
    //         processEx.reply.show = processEx.reply.done;
    //         processEx.reject.show = processEx.reject.done;
    //         processEx.delay.show = processEx.delay.done;
    //         taskEx.lastProcess = 'cancel';
    //         taskEx.state = TaskState.Cancel;
    //         taskEx.isUploaded = taskEx.isUploaded && uploadedFlag;
    //
    //         this.events.publish(this.globalService.myWorkUpdateEvent, {type: 'cancel'});
    //       })
    //       .catch(error => {
    //         console.error(this.tag + error);
    //         this.globalService.showToast(error);
    //       });
    //   }
    // }
    /**
     * 处理步骤数组转对象
     * @param taskEx
     * @param processEx
     * @returns {boolean}
     */
    // private transform2ProcessEx(taskEx: TaskEx, processEx: ProcessEx): boolean {
    //   if (!taskEx && !processEx) {
    //     return false;
    //   }
    //
    //   for (let i of taskEx.processes) {
    //     switch (i.event) {
    //       case 'create':
    //         processEx.create = i;
    //         break;
    //       case 'dispatch':
    //         processEx.dispatch = i;
    //         break;
    //       case 'accept':
    //         processEx.accept = i;
    //         break;
    //       case 'go':
    //         processEx.go = i;
    //         break;
    //       case 'arrive':
    //         processEx.arrive = i;
    //         break;
    //       case 'reply':
    //         processEx.reply = i;
    //         break;
    //       case 'reject':
    //         processEx.reject = i;
    //         break;
    //       case 'delay':
    //         processEx.delay = i;
    //         break;
    //       case 'cancel':
    //         processEx.cancel = i;
    //         break;
    //       default:
    //         console.error(this.tag, i.event);
    //         break;
    //     }
    //   }
    //
    //   return !!(processEx && processEx.create && processEx.dispatch && processEx.accept && processEx.go && processEx.arrive
    //   && processEx.reply && processEx.reject && processEx.delay && processEx.cancel);
    // }
    /**
     *
     * @param taskEx
     * @param lastEvent
     * @param curEvent
     * @param curName
     * @param curExtend
     * @returns {boolean}
     */
    MyWorkPage.prototype.sortDelayProcess = function (taskEx, lastEvent, curEvent, curName, curExtend) {
        if (taskEx.processes.length > 0 && lastEvent && curEvent && curName && curExtend) {
            var lastIndex = void 0, curIndex = void 0;
            var processes = taskEx.processes;
            for (var i = 0; i < processes.length; i++) {
                if (processes[i].event === lastEvent) {
                    lastIndex = i;
                }
                else if (processes[i].event === curEvent) {
                    curIndex = i;
                }
            }
            if (lastIndex >= curIndex) {
                return false;
            }
            for (var i = curIndex; i > lastIndex; i--) {
                processes[i].event = processes[i - 1].event;
                processes[i].name = processes[i - 1].name;
                processes[i].time = processes[i - 1].time;
                processes[i].show = processes[i - 1].show;
                processes[i].color = processes[i - 1].color;
                processes[i].done = processes[i - 1].done;
                processes[i].extend = processes[i - 1].extend;
            }
            processes[lastIndex + 1].event = curEvent;
            processes[lastIndex + 1].name = curName;
            processes[lastIndex + 1].extend = curExtend;
            return true;
        }
        return false;
    };
    /**
     * 退单对话框
     * @param taskEx
     * @param location
     */
    MyWorkPage.prototype.rejectPrompt = function (taskEx, location) {
        var _this = this;
        var processEx = new __WEBPACK_IMPORTED_MODULE_5__model_Process__["c" /* ProcessEx */]();
        if (!Object(__WEBPACK_IMPORTED_MODULE_4__model_Task__["c" /* transform2ProcessEx */])(taskEx, processEx) || processEx.reject.done) {
            return;
        }
        var prompt = this.alertCtrl.create({
            title: '退单申请',
            message: "请填写退单信息!",
            inputs: [
                {
                    name: 'reason',
                    placeholder: '原因'
                }
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                    }
                },
                {
                    text: '确定',
                    handler: function (data) {
                        console.log(_this.tag, data);
                        if (!data.reason) {
                            return _this.globalService.showToast("请填写原因!");
                        }
                        processEx.reject.extend = {
                            reason: data.reason
                        };
                        _this.reject(taskEx, location);
                    }
                }
            ]
        });
        prompt.present();
    };
    /**
     * 延迟对话框
     * @param taskEx
     * @param location
     */
    MyWorkPage.prototype.delayPrompt = function (taskEx, location) {
        var _this = this;
        var processEx = new __WEBPACK_IMPORTED_MODULE_5__model_Process__["c" /* ProcessEx */]();
        if (!Object(__WEBPACK_IMPORTED_MODULE_4__model_Task__["c" /* transform2ProcessEx */])(taskEx, processEx) || processEx.delay.done) {
            return;
        }
        var prompt = this.alertCtrl.create({
            title: '延迟申请',
            message: "请填写延迟信息!",
            inputs: [
                {
                    name: 'day',
                    placeholder: '天数',
                    type: 'number'
                },
                {
                    name: 'hour',
                    placeholder: '小时',
                    type: 'number'
                },
                {
                    name: 'minute',
                    placeholder: '分钟',
                    type: 'number'
                },
                {
                    name: 'reason',
                    placeholder: '原因'
                }
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                    }
                },
                {
                    text: '确定',
                    handler: function (data) {
                        console.log(_this.tag, data);
                        if (Number.isNaN(data.day)
                            && Number.isNaN(data.hour)
                            && Number.isNaN(data.minute)) {
                            return _this.globalService.showToast("请填写有效的时间!");
                        }
                        else if (!data.reason) {
                            return _this.globalService.showToast("请填写原因!");
                        }
                        else {
                            var day = Number.parseInt(data.day);
                            var hour = Number.parseInt(data.hour);
                            var minute = Number.parseInt(data.minute);
                            if ((Number.isFinite(day) && day < 0)
                                || (Number.isFinite(hour) && hour < 0)
                                || (Number.isFinite(minute) && minute < 0)) {
                                return _this.globalService.showToast("填写的时间必须大于零!");
                            }
                            var time = 0;
                            if (Number.isFinite(day)) {
                                time += day * 24 * 60;
                            }
                            if (Number.isFinite(hour)) {
                                time += hour * 60;
                            }
                            if (Number.isFinite(minute)) {
                                time += minute;
                            }
                            var deadline = new Date(new Date().getTime() + time * 60000);
                            processEx.delay.extend = {
                                comment: data.reason,
                                deadline: deadline
                            };
                            _this.judgeDelayTime(taskEx, processEx.delay.extend, location);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    /**
     * 判断申请延期时间
     * @param taskEx
     * @param extend
     * @param location
     */
    MyWorkPage.prototype.judgeDelayTime = function (taskEx, extend, location) {
        var _this = this;
        this.dataService.getTaskDetail(taskEx.id)
            .then(function (taskDetail) {
            if (taskDetail && taskDetail.delayReplyDeadLine) {
                if (extend.deadline.getTime() <= taskDetail.delayReplyDeadLine) {
                    return _this.globalService.showToast("填写的时间必须大于处理时限!");
                }
                else {
                    _this.delay(taskEx, location);
                }
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    /**
     * 销单对话框
     * @param taskEx
     * @param location
     */
    // private cancelPrompt(taskEx: TaskEx, location: Location): void {
    //   let processEx: ProcessEx = new ProcessEx();
    //   if (!transform2ProcessEx(taskEx, processEx) || processEx.cancel.done) {
    //     return;
    //   }
    //
    //   let prompt = this.alertCtrl.create({
    //     title: '销单申请',
    //     message: "请填写销单信息!",
    //     inputs: [
    //       {
    //         name: 'remark',
    //         placeholder: '备注'
    //       }
    //     ],
    //     buttons: [
    //       {
    //         text: '取消',
    //         handler: data => {
    //         }
    //       },
    //       {
    //         text: '确定',
    //         handler: data => {
    //           console.log(this.tag, data);
    //           if (!data.remark) {
    //             return this.globalService.showToast("请填写备注!");
    //           }
    //
    //           processEx.cancel.extend = {
    //             remark: data.remark
    //           };
    //
    //           this.cancel(taskEx, location);
    //         }
    //       }
    //     ]
    //   });
    //   prompt.present();
    // }
    /**
     * 订阅事件
     * @param events
     */
    MyWorkPage.prototype.subscribeEvent = function (events) {
        var _this = this;
        events.subscribe(this.globalService.myWorkDownloadFinishEvent, function () {
            _this.resetTasks(FromWhere.Download);
        });
        events.subscribe(this.globalService.myWorkUpdateEvent, function (myWorkUpdateEvent) {
            console.log("my work need to update");
            if (myWorkUpdateEvent.type === 'reply'
                && myWorkUpdateEvent.taskEx
                && myWorkUpdateEvent.history
                && myWorkUpdateEvent.history.task
                && myWorkUpdateEvent.history.reply
                && myWorkUpdateEvent.history.taskDetail) {
                var processEx = new __WEBPACK_IMPORTED_MODULE_5__model_Process__["c" /* ProcessEx */]();
                if (!Object(__WEBPACK_IMPORTED_MODULE_4__model_Task__["c" /* transform2ProcessEx */])(myWorkUpdateEvent.taskEx, processEx)) {
                    return;
                }
                var replyInfo = myWorkUpdateEvent.history.reply;
                var uploadedFlag = myWorkUpdateEvent.history.uploadedFlag === _this.globalService.uploadedFlagForUploaded;
                processEx.reply.time = replyInfo && replyInfo.opTime ? new Date(replyInfo.opTime) : new Date();
                processEx.reply.color = __WEBPACK_IMPORTED_MODULE_5__model_Process__["a" /* DisableColor */];
                processEx.reply.done = true;
                processEx.reject.show = false;
                processEx.delay.show = processEx.delay.done;
                processEx.cancel.show = true;
                processEx.reply.isUploaded = uploadedFlag;
                myWorkUpdateEvent.taskEx.lastProcess = 'reply';
                myWorkUpdateEvent.taskEx.state = __WEBPACK_IMPORTED_MODULE_4__model_Task__["b" /* TaskState */].Reply;
                myWorkUpdateEvent.taskEx.isUploaded = myWorkUpdateEvent.taskEx.isUploaded && uploadedFlag;
                var history_3 = _this.findReplyHistory(myWorkUpdateEvent.taskEx.id);
                if (history_3) {
                    history_3 = {
                        userId: _this.globalService.userId,
                        taskId: myWorkUpdateEvent.taskEx.id,
                        state: myWorkUpdateEvent.history.state,
                        task: myWorkUpdateEvent.history.task,
                        reply: myWorkUpdateEvent.history.reply,
                        uploadedFlag: myWorkUpdateEvent.history.uploadedFlag,
                        taskDetail: myWorkUpdateEvent.history.taskDetail,
                        mediaNames: myWorkUpdateEvent.history.mediaNames
                    };
                }
                else {
                    _this.replyHistories.push(myWorkUpdateEvent.history);
                }
                _this.resetTasks(FromWhere.ReplyOrReject);
            }
            else if (myWorkUpdateEvent.type === 'reject') {
                _this.resetTasks(FromWhere.ReplyOrReject);
            }
        });
    };
    /**
     * 重置list
     * @param fromWhere
     */
    MyWorkPage.prototype.resetTasks = function (fromWhere) {
        var _this = this;
        this.isOperationBusy = true;
        this.since = this.globalService.taskSinceDefault;
        while (this.items.shift())
            ;
        this.replyHistories = [];
        this.showFab = false;
        this.getTasks(this.since, this.count, this.key)
            .then(function (data) { return _this.infiniteScroll.enable(data); })
            .catch(function (error) { return console.error(error); })
            .then(function () {
            _this.isOperationBusy = false;
            switch (fromWhere) {
                case FromWhere.Download:
                    _this.refresher.complete();
                    _this.getTaskCount();
                    break;
                case FromWhere.ReplyOrReject:
                    _this.getTaskCount();
                    break;
                case FromWhere.Search:
                    break;
                case FromWhere.Delete:
                    _this.getTaskCount();
                    break;
                default:
                    break;
            }
        });
    };
    MyWorkPage.prototype.findReplyHistory = function (taskId) {
        return this.replyHistories.find(function (history) { return history.taskId === taskId; });
    };
    return MyWorkPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Refresher */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Refresher */])
], MyWorkPage.prototype, "refresher", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], MyWorkPage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* InfiniteScroll */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* InfiniteScroll */])
], MyWorkPage.prototype, "infiniteScroll", void 0);
MyWorkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mywork',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\mywork\mywork.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="white" (click)="toggleToolbar($event)">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar color="primary" *ngIf="showToolbar">\n    <ion-searchbar [(ngModel)]="key" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="page-mywork">\n\n  <!--refresher on the top-->\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <!--list content-->\n  <ion-list>\n    <ion-card *ngFor="let item of items">\n      <ion-item (click)="onDelete(item)">\n        <ion-avatar item-start>\n          <img src="assets/img/ic_mywork_avatar.png">\n        </ion-avatar>\n        <div><h2 class="card-header-label-hint">任务编号 </h2><h2 class="card-header-label-content">{{item.id.split(\'#\')[0] | valueValid}}</h2></div>\n        <div><h2 class="card-header-label-hint">任务类型 </h2><h2 class="card-header-label-content">{{item.type | valueValid}}</h2></div>\n        <ion-icon name=\'cloud-upload\' item-end *ngIf="!item.isUploaded"></ion-icon>\n        <ion-icon name="timer" item-end color="{{\'danger\'}}" *ngIf="item.isOverdueArrivedLine || item.isOverdueReplyLine"></ion-icon>\n      </ion-item>\n\n      <ion-list>\n        <ion-list-header>\n          <ion-row>\n            <ion-col col-auto>任务描述</ion-col>\n            <ion-col>{{item.describe | valueValid}}</ion-col>\n          </ion-row>\n        </ion-list-header>\n\n        <!--创建时间-->\n        <button ion-item [style.color]="item.processes[0].color" *ngIf="item.processes[0].show">\n          <ion-icon name=\'icon-vline\'item-start></ion-icon>\n          {{item.processes[0].name}} {{item.processes[0].time | date:\'y-MM-dd HH:mm:ss\'}}\n          <!--<ion-icon name=\'ios-arrow-forward\' item-end></ion-icon>-->\n        </button>\n\n        <!--派发时间-->\n        <button ion-item [style.color]="item.processes[1].color" *ngIf="item.processes[1].show">\n          <ion-icon name=\'icon-vline\'item-start></ion-icon>\n          {{item.processes[1].name}} {{item.processes[1].time | date:\'y-MM-dd HH:mm:ss\'}}\n          <!--<ion-icon name=\'ios-arrow-forward\' item-end></ion-icon>-->\n        </button>\n\n        <!--接单时间-->\n        <button ion-item [style.color]="item.processes[2].color" *ngIf="item.processes[2].show" (click)="itemSelected(item, 2)">\n          <ion-icon name=\'icon-vline\'item-start color="{{item.processes[2].color}}"></ion-icon>\n          {{item.processes[2].name}} {{item.processes[2].time | date:\'y-MM-dd HH:mm:ss\'}}\n          <ion-icon name=\'ios-arrow-forward\' item-end *ngIf="!item.processes[2].done" color="{{item.processes[2].color}}"></ion-icon>\n        </button>\n\n        <!--出发时间-->\n        <button ion-item [style.color]="item.processes[3].color" *ngIf="item.processes[3].show" (click)="itemSelected(item, 3)">\n          <ion-icon name=\'icon-vline\'item-start color="{{item.processes[3].color}}"></ion-icon>\n          {{item.processes[3].name}} {{item.processes[3].time | date:\'y-MM-dd HH:mm:ss\'}}\n          <ion-icon name=\'ios-arrow-forward\' item-end *ngIf="!item.processes[3].done" color="{{item.processes[3].color}}"></ion-icon>\n        </button>\n\n        <!--到场时间-->\n        <button ion-item [style.color]="item.processes[4].color" *ngIf="item.processes[4].show" (click)="itemSelected(item, 4)">\n          <ion-icon name=\'icon-vline\'item-start color="{{item.processes[4].color}}"></ion-icon>\n          {{item.processes[4].name}} {{item.processes[4].time | date:\'y-MM-dd HH:mm:ss\'}}\n          <ion-icon name=\'ios-arrow-forward\' item-end *ngIf="!item.processes[4].done" color="{{item.processes[4].color}}"></ion-icon>\n        </button>\n\n        <!--回复时间-->\n        <button ion-item [style.color]="item.processes[5].color" *ngIf="item.processes[5].show" (click)="itemSelected(item, 5)">\n          <ion-icon name=\'icon-vline\'item-start color="{{item.processes[5].color}}"></ion-icon>\n          {{item.processes[5].name}} {{item.processes[5].time | date:\'y-MM-dd HH:mm:ss\'}}\n          <ion-icon name=\'ios-arrow-forward\' item-end *ngIf="!item.processes[5].done" color="{{item.processes[5].color}}"></ion-icon>\n        </button>\n\n        <!--退单时间-->\n        <button ion-item [style.color]="item.processes[6].color" *ngIf="item.processes[6].show" (click)="itemSelected(item, 6)">\n          <ion-icon name=\'icon-vline\'item-start color="{{item.processes[6].color}}"></ion-icon>\n          {{item.processes[6].name}} {{item.processes[6].time | date:\'y-MM-dd HH:mm:ss\'}}\n          <ion-icon name=\'ios-arrow-forward\' item-end *ngIf="!item.processes[6].done" color="{{item.processes[6].color}}"></ion-icon>\n        </button>\n\n        <!--延迟时间-->\n        <button ion-item [style.color]="item.processes[7].color" *ngIf="item.processes[7].show" (click)="itemSelected(item, 7)">\n          <ion-icon name=\'icon-vline\'item-start color="{{item.processes[7].color}}"></ion-icon>\n          {{item.processes[7].name}} {{item.processes[7].time | date:\'y-MM-dd HH:mm:ss\'}}\n          <ion-icon name=\'ios-arrow-forward\' item-end *ngIf="!item.processes[7].done" color="{{item.processes[7].color}}"></ion-icon>\n        </button>\n\n        <!--销单时间-->\n        <!--<button ion-item [style.color]="item.processes[8].color" *ngIf="item.processes[8].show" (click)="itemSelected(item, 8)">-->\n          <!--<ion-icon name=\'icon-vline\'item-start color="{{item.processes[8].color}}"></ion-icon>-->\n          <!--{{item.processes[8].name}} {{item.processes[8].time | date:\'y-MM-dd HH:mm:ss\'}}-->\n          <!--<ion-icon name=\'ios-arrow-forward\' item-end *ngIf="!item.processes[8].done" color="{{item.processes[8].color}}"></ion-icon>-->\n        <!--</button>-->\n      </ion-list>\n\n      <ion-row>\n        <ion-col class="card-bottom-btn" *ngIf="false">\n          <button ion-button icon-left clear small color="gray">\n            <ion-icon name="images"></ion-icon>\n            <div>{{item.photoCount}}</div>\n          </button>\n        </ion-col>\n\n        <ion-col class="card-bottom-btn" *ngIf="false">\n          <button ion-button icon-left clear small color="gray">\n            <ion-icon name="musical-notes"></ion-icon>\n            <div>{{item.audioCount}}</div>\n          </button>\n        </ion-col>\n\n        <ion-col class="card-bottom-btn" *ngIf="false">\n          <button ion-button icon-left clear small color="gray">\n            <ion-icon name="videocam"></ion-icon>\n            <div>{{item.videoCount}}</div>\n          </button>\n        </ion-col>\n\n        <ion-col class="card-bottom-btn" *ngIf="item.isLocationValid">\n          <button ion-button icon-left clear small (click)="onLocate(item)">\n            <ion-icon name="map"></ion-icon>\n            <div>地图</div>\n          </button>\n        </ion-col>\n\n        <ion-col class="card-bottom-btn">\n          <button ion-button icon-left clear small (click)="onPreview(item)">\n            <ion-icon name="information-circle"></ion-icon>\n            <div>详细</div>\n          </button>\n        </ion-col>\n\n        <ion-col class="card-bottom-btn" *ngIf="showMaterial">\n          <button ion-button icon-left clear small (click)="onMaterials(item)">\n            <ion-icon name="information-circle"></ion-icon>\n            <div>材料</div>\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <!--<ion-row>-->\n        <!--<ion-item>-->\n          <!--<button item-right ion-button icon-left clear (click)="onMaterials(item)">-->\n            <!--<ion-icon name="clipboard"></ion-icon>-->\n            <!--<div>材料登记</div>-->\n          <!--</button>-->\n        <!--</ion-item>-->\n      <!--</ion-row>-->\n    </ion-card>\n  </ion-list>\n\n  <!--infinite scroll-->\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <!--fab-->\n  <ion-fab right bottom *ngIf="showFab">\n    <button ion-fab color="primary" (click)="doScroll2Top($event)">\n      <ion-icon name="arrow-dropup"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\mywork\mywork.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_DataService__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_6__providers_GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_10__providers_ConfigService__["a" /* ConfigService */]])
], MyWorkPage);

//# sourceMappingURL=mywork.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyHistory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_DataService__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_History__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__workdetail_workdetail__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_Task__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_MapParam__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyHistory = (function () {
    function MyHistory(navCtrl, dataService, alertCtrl, globalService, events) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.globalService = globalService;
        this.events = events;
        this.tag = "[Myhistory]";
        this.title = '历史记录';
        this.showToolbar = false;
        this.showFab = false;
        this.items = [];
        this.isDownloadFinished = true;
        this.since = this.globalService.taskSinceDefault;
        this.count = this.globalService.taskCountDefault10;
        this.searchKey = '';
        this.isOperationBusy = false;
        this.replyHistories = [];
        this.onServerFlag = this.globalService.uploadedFlagForUploaded;
    }
    MyHistory.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.tag, 'ngOnInit');
        this.subscribeEvent(this.events);
        this.getHistories(this.since, this.count, this.searchKey)
            .then(function (flag) { return _this.infiniteScroll.enable(flag); })
            .catch(function (error) { return console.error(error); });
    };
    MyHistory.prototype.ngOnDestroy = function () {
        console.log(this.tag, 'ngOnDestroy');
        this.events.unsubscribe(this.globalService.historyUploadFinishEvent);
        //this.events.unsubscribe(this.globalService.materialInfoFinishEvent);
    };
    //搜索
    MyHistory.prototype.onInput = function (ev) {
        var _this = this;
        if (this.isOperationBusy) {
            return this.globalService.showToast('后台繁忙...');
        }
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.searchKey = val;
        }
        else {
            this.searchKey = '';
        }
        this.isOperationBusy = true;
        this.since = this.globalService.taskSinceDefault;
        while (this.items.shift())
            ;
        this.showFab = false;
        this.replyHistories = [];
        this.getHistories(this.since, this.count, this.searchKey)
            .then(function (data) { return _this.infiniteScroll.enable(data); })
            .catch(function (error) {
            console.error(error);
        }).then(function () { return _this.isOperationBusy = false; });
    };
    /**
     *
     * @param ev
     */
    MyHistory.prototype.onCancel = function (ev) {
        console.log(this.tag, 'onCancel');
    };
    MyHistory.prototype.doRefresh = function (refresher) {
        console.log(this.tag, 'doRefresh');
        this.dataService.uploadAllInfos();
    };
    /**
     * 上拉加载更多
     * @param infiniteScroll
     */
    MyHistory.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log(this.tag, 'doInfinite begin');
        setTimeout(function () {
            _this.isDownloadFinished = false;
            _this.showFab = false;
            _this.getHistories(_this.since, _this.count, _this.searchKey)
                .then(function (data) {
                if (!data) {
                    infiniteScroll.enable(false);
                }
                else {
                    infiniteScroll.complete();
                }
                console.log(_this.tag, 'doInfinite end');
            }).catch(function (error) {
                console.error(error);
                infiniteScroll.complete();
            }).then(function () {
                _this.isDownloadFinished = true;
                _this.showFab = _this.items.length > _this.count;
            });
        }, 100);
    };
    /**
     *滑动到顶部
     * @param ev
     */
    MyHistory.prototype.doScroll2Top = function (ev) {
        this.showFab = false;
        this.content.scrollToTop();
    };
    MyHistory.prototype.toggleToolbar = function (ev) {
        this.showToolbar = !this.showToolbar;
        this.content.resize();
    };
    MyHistory.prototype.getHistories = function (since, count, key) {
        var _this = this;
        return this.dataService
            .getHistories(since, count, key)
            .then(function (histories) {
            console.log(_this.tag + "getHistory" + histories.length);
            if (histories.length <= 0) {
                return Promise.resolve(false);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3__model_History__["a" /* HistoryEx */].transformToHistoryEx(_this.items, histories);
                _this.since = _this.items.length;
                return Promise.resolve(histories.map(function (history) { return history.taskId; }))
                    .then(function (taskIds) { return _this.dataService.getReplyHistories(taskIds); })
                    .then(function (histories) {
                    var result = false;
                    try {
                        (_a = _this.replyHistories).push.apply(_a, histories);
                        _this.replyHistories.forEach(function (history) {
                            if (history.mediaNames && history.mediaNames.length > 0) {
                                var historyEx = _this.items.find(function (historyEx) { return historyEx.taskId === history.taskId; });
                                if (historyEx) {
                                    var mediaNames = history.mediaNames;
                                    historyEx.photoCount = mediaNames.filter(function (name) { return name.lastIndexOf(_this.globalService.photoSuffix) !== -1; }).length;
                                    historyEx.audioCount = mediaNames.filter(function (name) { return name.lastIndexOf(_this.globalService.audioSuffix) !== -1; }).length;
                                    historyEx.videoCount = mediaNames.filter(function (name) { return name.lastIndexOf(_this.globalService.videoSuffix) !== -1; }).length;
                                }
                            }
                        });
                        result = true;
                    }
                    catch (err) {
                        console.error(err);
                    }
                    return Promise.resolve(result);
                    var _a;
                });
            }
        });
    };
    MyHistory.prototype.toRejectedInfo = function (item) {
        return item;
    };
    MyHistory.prototype.toReplyInfo = function (item) {
        return item;
    };
    MyHistory.prototype.onDelay = function (historyEx) {
        var _this = this;
        this.dataService.getHistory(historyEx.taskId, __WEBPACK_IMPORTED_MODULE_6__model_Task__["b" /* TaskState */].Delay)
            .then(function (history) {
            if (history.reply) {
                var delayInfo = history.reply;
                if (delayInfo.comment) {
                    _this.globalService.showToast("\u5EF6\u8FDF\u539F\u56E0: " + delayInfo.comment);
                }
            }
        })
            .catch(function (err) { return console.error(err); });
    };
    MyHistory.prototype.onReply = function (historyEx) {
        var taskEx = new __WEBPACK_IMPORTED_MODULE_6__model_Task__["a" /* TaskEx */](historyEx.task);
        taskEx.isPreview = false;
        var history = this.findReplyHistory(taskEx.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__workdetail_workdetail__["a" /* WorkDetailPage */], [taskEx, history, undefined, true]);
    };
    MyHistory.prototype.onReject = function (historyEx) {
        var rejectInfo = this.toRejectedInfo(historyEx.reply);
        if (rejectInfo && rejectInfo.rejectReason) {
            this.globalService.showToast("\u9000\u5355\u539F\u56E0: " + rejectInfo.rejectReason);
        }
    };
    MyHistory.prototype.onLocate = function (historyEx) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__map_map__["a" /* MapPage */], new __WEBPACK_IMPORTED_MODULE_8__model_MapParam__["a" /* MapParam */](__WEBPACK_IMPORTED_MODULE_8__model_MapParam__["b" /* MapType */].Locate, historyEx.task.location, historyEx.task.taskId));
    };
    MyHistory.prototype.onDelete = function (historyEx) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '删除任务',
            message: '是否删除该任务及其所有操作?',
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        console.log('Ok clicked');
                        _this.dataService.deleteOneTaskWithAllInfos(historyEx.taskId)
                            .then(function (result) { return _this.resetList(); })
                            .catch(function (err) { return console.error(err); });
                    }
                }
            ]
        });
        alert.present();
    };
    /**
     * 订阅事件
     * @param events
     */
    MyHistory.prototype.subscribeEvent = function (events) {
        var _this = this;
        events.subscribe(this.globalService.historyUploadFinishEvent, function () {
            //this.dataService.uploadNotUploadMaterialInfos();
            _this.refresher.complete();
            _this.resetList();
        });
        // events.subscribe(this.globalService.materialInfoFinishEvent, () => {
        //   console.log(this.tag, "materialInfoFinishEvent");
        //   this.refresher.complete();
        // })
    };
    MyHistory.prototype.findReplyHistory = function (taskId) {
        return this.replyHistories.find(function (history) { return history.taskId === taskId; });
    };
    MyHistory.prototype.resetList = function () {
        var _this = this;
        this.isOperationBusy = false;
        this.searchKey = '';
        this.since = this.globalService.taskSinceDefault;
        while (this.items.shift())
            ;
        this.showFab = false;
        this.replyHistories = [];
        this.getHistories(this.since, this.count, this.searchKey)
            .then(function (data) { return _this.infiniteScroll.enable(data); })
            .catch(function (error) { return console.error(error); });
    };
    return MyHistory;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Refresher */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Refresher */])
], MyHistory.prototype, "refresher", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], MyHistory.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* InfiniteScroll */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* InfiniteScroll */])
], MyHistory.prototype, "infiniteScroll", void 0);
MyHistory = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-myhistory',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\history\myhistory.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="white" (click)="toggleToolbar($event)" *ngIf="showToolbar">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar color="primary" *ngIf="showToolbar">\n    <ion-searchbar (input)="onInput($event)" (ionCancel)="onCancel($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="page-myhistory">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow_dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-card *ngFor="let item of items">\n      <ion-item (click)="onDelete(item)">\n        <ion-avatar item-start>\n          <img src="assets/img/ic_mywork_avatar.png">\n        </ion-avatar>\n        <div><h2 class="card-header-label-hint">任务编号 </h2>\n          <h2 class="card-header-label-content">{{item.taskId.split(\'#\')[0] | valueValid}}</h2></div>\n        <div><h2 class="card-header-label-hint">任务类型 </h2>\n          <h2 class="card-header-label-content">{{item.task.taskType | valueValid}}</h2></div>\n        <ion-icon name=\'cloud-upload\' item-end *ngIf="item.uploadedFlag !== onServerFlag"></ion-icon>\n      </ion-item>\n\n      <ion-list>\n        <ion-list-header>\n          <ion-row>\n            <ion-col col-auto>任务描述</ion-col>\n            <ion-col>{{item.task.desc| valueValid}}</ion-col>\n          </ion-row>\n        </ion-list-header>\n\n        <!--创建时间-->\n        <button ion-item class="gray-text">\n          <ion-icon name=\'icon-vline\' item-start></ion-icon>\n          创建时间 {{item.task.createTime| date:\'y-MM-dd HH:mm:ss\'}}\n        </button>\n\n        <!--派发时间-->\n        <button ion-item class="gray-text">\n          <ion-icon name=\'icon-vline\' item-start></ion-icon>\n          派发时间 {{item.task.assignTime | date:\'y-MM-dd HH:mm:ss\'}}\n        </button>\n\n        <!--接单时间 -->\n        <button ion-item class="gray-text">\n          <ion-icon name=\'icon-vline\' item-start></ion-icon>\n          接单时间 {{item.task.acceptTime | date:\'y-MM-dd HH:mm:ss\'}}\n        </button>\n\n        <!--延迟时间-->\n        <button ion-item class="gray-text" *ngIf="item.delayBeyond === \'accept\'" (click)="onDelay(item)">\n          <ion-icon name=\'icon-vline\' item-start></ion-icon>\n          延迟时间 {{item.delayTime | date:\'y-MM-dd HH:mm:ss\'}}\n        </button>\n\n        <!--出发时间-->\n        <button ion-item class="gray-text" *ngIf="item.task.goTime">\n          <ion-icon name=\'icon-vline\' item-start></ion-icon>\n          出发时间 {{item.task.goTime| date:\'y-MM-dd HH:mm:ss\'}}\n        </button>\n\n        <!--延迟时间-->\n        <button ion-item class="gray-text" *ngIf="item.delayBeyond === \'go\'" (click)="onDelay(item)">\n          <ion-icon name=\'icon-vline\' item-start></ion-icon>\n          延迟时间 {{item.delayTime | date:\'y-MM-dd HH:mm:ss\'}}\n        </button>\n\n        <!--到场时间-->\n        <button ion-item class="gray-text" *ngIf="item.task.arrivedTime">\n          <ion-icon name=\'icon-vline\' item-start></ion-icon>\n          到场时间 {{item.task.arrivedTime | date:\'y-MM-dd HH:mm:ss\'}}\n        </button>\n\n        <!--延迟时间-->\n        <button ion-item class="gray-text" *ngIf="item.delayBeyond === \'arrived\'" (click)="onDelay(item)">\n          <ion-icon name=\'icon-vline\' item-start></ion-icon>\n          延迟时间 {{item.delayTime | date:\'y-MM-dd HH:mm:ss\'}}\n        </button>\n\n        <!--回复时间-->\n        <button ion-item class="gray-text" *ngIf="item.task.replyTime" (click)="onReply(item)">\n          <ion-icon name=\'icon-vline\' item-start></ion-icon>\n          回复时间 {{item.task.replyTime | date:\'y-MM-dd HH:mm:ss\'}}\n        </button>\n\n        <!--退单时间-->\n        <button ion-item class="gray-text" *ngIf="item.isRejected" (click)="onReject(item)">\n          <ion-icon name=\'icon-vline\' item-start></ion-icon>\n          退单时间 {{ toRejectedInfo(item.reply).rejectTime | date:\'y-MM-dd HH:mm:ss\'}}\n        </button>\n\n        <!--销单时间-->\n        <button ion-item class="gray-text" *ngIf="item.isCanceled">\n          <ion-icon name=\'icon-vline\' item-start></ion-icon>\n          销单时间 {{toReplyInfo(item.reply).destroyTime | date:\'y-MM-dd HH:mm:ss\'}}\n        </button>\n      </ion-list>\n      <ion-row>\n        <ion-col class="card-bottom-btn">\n          <button ion-button icon-left clear small color="gray">\n            <ion-icon name="images"></ion-icon>\n            <div>{{item.photoCount}}</div>\n          </button>\n        </ion-col>\n\n        <ion-col class="card-bottom-btn">\n          <button ion-button icon-left clear small color="gray">\n            <ion-icon name="musical-notes"></ion-icon>\n            <div>{{item.audioCount}}</div>\n          </button>\n        </ion-col>\n\n        <ion-col class="card-bottom-btn">\n           <button ion-button icon-left clear small color="gray">\n             <ion-icon name="videocam"></ion-icon>\n             <div>{{item.videoCount}}</div>\n           </button>\n         </ion-col>\n\n        <ion-col class="card-bottom-btn" *ngIf="item.isLocationValid">\n          <button ion-button icon-left clear small (click)="onLocate(item)">\n            <ion-icon name="map"></ion-icon>\n            <div>地图</div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-list>\n\n  <!--infinite scroll-->\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" immediate-check="false" distance=1%>\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <!--fab-->\n  <ion-fab right bottom *ngIf="showFab">\n    <button ion-fab color="primary" (click)="doScroll2Top($event)">\n      <ion-icon name="arrow-dropup"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\history\myhistory.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_DataService__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], MyHistory);

//# sourceMappingURL=myhistory.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite_porter__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FileService__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DbService = (function () {
    function DbService(sqlite, sqlitePorter, globalService, fileService) {
        this.sqlite = sqlite;
        this.sqlitePorter = sqlitePorter;
        this.globalService = globalService;
        this.fileService = fileService;
        this.dbName = 'main.db';
        //private readonly dbVersion: string = '1.0';
        this.paramError = 'param is error';
    }
    /**
     * 初始化
     * @returns {Promise<boolean>}
     */
    DbService.prototype.init = function () {
        var _this = this;
        if (this.globalService.isChrome) {
            this.dbPath = this.dbName;
            return Promise.resolve(true);
        }
        else {
            this.dbPath = this.fileService.getDbDir() + "/" + this.dbName;
            return this.createTables()
                .then(function (result) { return _this.updateTables(); });
        }
    };
    /**
     * 销毁
     */
    DbService.prototype.destroy = function () {
        if (this.globalService.isChrome) {
        }
        else {
        }
    };
    /**
     * 保存词语信息
     * @param words
     * @returns {any}
     */
    DbService.prototype.saveWords = function (words) {
        var _this = this;
        if (this.globalService.isChrome || !words || words.length <= 0) {
            return Promise.resolve(false);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "DELETE FROM GD_WORDS;";
                for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
                    var word = words_1[_i];
                    sql += _this.toWordInsertSql(word);
                }
                return _this.sqlitePorter.importSqlToDb(db, sql);
            });
        }
    };
    /**
     * 保存材料信息
     * @param materials
     * @returns {any}
     */
    DbService.prototype.saveMaterials = function (materials) {
        var _this = this;
        if (this.globalService.isChrome || !materials || materials.length <= 0) {
            return Promise.resolve(false);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "DELETE FROM GD_MATERIALS;";
                for (var _i = 0, materials_1 = materials; _i < materials_1.length; _i++) {
                    var material = materials_1[_i];
                    sql += _this.toMaterialInsertSql(material);
                }
                return _this.sqlitePorter.importSqlToDb(db, sql);
            });
        }
    };
    /**
     * 保存维修信息
     * @param maintainInfo
     * @returns {any}
     */
    DbService.prototype.saveMaintainInfo = function (maintainInfo) {
        var _this = this;
        if (this.globalService.isChrome || !maintainInfo) {
            return Promise.resolve(false);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql;
                sql = _this.toMaintainInfoInsertSql(maintainInfo);
                return _this.sqlitePorter.importSqlToDb(db, sql);
            });
        }
    };
    /**
     * 查询维修信息
     * @param taskId
     * @returns {any}
     */
    DbService.prototype.queryMaintainInfo = function (taskId) {
        var _this = this;
        if (this.globalService.isChrome || !taskId) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var selectSql = "SELECT * FROM GD_MAINTAININFO WHERE S_TASKID = '" + taskId + "';";
                return db.executeSql(selectSql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    var maintainInfo;
                    if (rows && rows.length == 1) {
                        var localMaintainInfo = rows.item(0);
                        maintainInfo = _this.toMaintainInfo(localMaintainInfo);
                    }
                    return maintainInfo ? Promise.resolve(maintainInfo) : Promise.reject('no maintainInfo');
                });
            });
        }
    };
    /**
     * 材料清单保存至本地
     * @param materialInfo
     * @returns {any}
     */
    DbService.prototype.saveMaterialInfo = function (materialInfo) {
        var _this = this;
        if (!materialInfo || !materialInfo.taskId || materialInfo.infos.length <= 0) {
            return Promise.resolve(false);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var selectSql = "SELECT * FROM GD_MATERIALINFO WHERE S_TASKID = '" + materialInfo.taskId + "';";
                var sql;
                return db.executeSql(selectSql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    if (rows && rows.length > 0) {
                        sql = _this.toMaterialInfoUpdateSql(materialInfo);
                    }
                    else {
                        sql = _this.toMaterialInfoInsertSql(materialInfo);
                    }
                    return _this.sqlitePorter.importSqlToDb(db, sql);
                })
                    .catch(function (error) {
                    console.log(error);
                });
            });
        }
    };
    /**
     * 材料清单更新上传标志
     * @param materialInfo
     * @returns {any}
     */
    DbService.prototype.updateFlagMaterials = function (materialInfo) {
        var _this = this;
        if (!materialInfo || !materialInfo.taskId || materialInfo.infos.length <= 0) {
            return Promise.resolve(false);
        }
        else {
            return this.openDb()
                .then(function (db) {
                materialInfo.uploadFlag = _this.globalService.uploadedFlagForUploaded;
                var sql = _this.toMaterialInfoUpdateSql(materialInfo);
                return _this.sqlitePorter.importSqlToDb(db, sql);
            });
        }
    };
    /**
     * 获取材料
     * @param group
     */
    DbService.prototype.getMaterials = function (groupKey) {
        var _this = this;
        if (this.globalService.isChrome || !groupKey) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT * FROM GD_MATERIALS WHERE S_GROUPKEY = '" + groupKey + "';";
                return db.executeSql(sql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    var materials = [];
                    if (rows && rows.length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            var localMaterial = rows.item(i);
                            if (!localMaterial) {
                                continue;
                            }
                            materials.push(_this.toMaterial(localMaterial));
                        }
                    }
                    return materials.length ? Promise.resolve(materials) : Promise.reject('no materials');
                });
            });
        }
    };
    DbService.prototype.getMaterialsCount = function () {
        if (this.globalService.isChrome) {
            return Promise.resolve(0);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT COUNT(*) FROM GD_MATERIALS;";
                return db.executeSql(sql, {})
                    .then(function (data) { return data.rows && data.rows.length > 0 ? data.rows.item(0)["COUNT(*)"] : 0; });
            });
        }
    };
    /**
     * 根据id查询材料信息
     * @param mid
     * @returns {any}
     */
    DbService.prototype.getMaterial = function (mid) {
        var _this = this;
        if (this.globalService.isChrome || !mid) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT * FROM GD_MATERIALS WHERE I_MID =" + mid + ";";
                return db.executeSql(sql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    var result;
                    if (rows && rows.length == 1) {
                        result = _this.toMaterial(rows.item(0));
                    }
                    return result ? Promise.resolve(result) : Promise.reject('no material');
                });
            });
        }
    };
    /**
     * 查询材料清单
     * @param taskId
     * @returns {any}
     */
    DbService.prototype.getMaterialInfo = function (taskId) {
        var _this = this;
        if (this.globalService.isChrome || !taskId) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT * FROM GD_MATERIALINFO WHERE S_TASKID = '" + taskId + "';";
                return db.executeSql(sql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    var result;
                    if (rows && rows.length == 1) {
                        var localMaterialInfo = rows.item(0);
                        if (localMaterialInfo) {
                            result = _this.toMaterialInfo(localMaterialInfo);
                        }
                    }
                    return result ? Promise.resolve(result) : Promise.reject('no materialInfo');
                });
            });
        }
    };
    DbService.prototype.toMaterialInfo = function (localMaterialInfo) {
        return {
            taskId: localMaterialInfo.S_TASKID,
            infos: JSON.parse(localMaterialInfo.S_INFOS),
            uploadFlag: localMaterialInfo.I_UPLOADEDFLAG
        };
    };
    /**
     * 获取词语
     * @param group
     * @returns {any}
     */
    DbService.prototype.getWords = function (group) {
        var _this = this;
        if (this.globalService.isChrome || !group) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT * FROM GD_WORDS WHERE S_WGROUP = '" + group + "';";
                return db.executeSql(sql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    var words = [];
                    if (rows && rows.length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            var localWord = rows.item(i);
                            if (!localWord) {
                                continue;
                            }
                            words.push(_this.toWord(localWord));
                        }
                    }
                    return words.length ? Promise.resolve(words) : Promise.reject('no words');
                });
            });
        }
    };
    /**
     * 获取词语数目
     * @returns {any}
     */
    DbService.prototype.getWordsCount = function () {
        if (this.globalService.isChrome) {
            return Promise.resolve(0);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT COUNT(*) FROM GD_WORDS;";
                return db.executeSql(sql, {})
                    .then(function (data) { return data.rows && data.rows.length > 0 ? data.rows.item(0)["COUNT(*)"] : 0; });
            });
        }
    };
    /**
     * 保存任务列表
     * @param userId
     * @param serverTasks
     * @returns {any}
     */
    DbService.prototype.saveTasks = function (userId, serverTasks) {
        var _this = this;
        if (this.globalService.isChrome || !serverTasks || serverTasks.length <= 0) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT * FROM GD_TASKS WHERE I_USERID = " + userId + ";";
                return db.executeSql(sql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    var sql = '';
                    if (rows && rows.length > 0) {
                        for (var _i = 0, serverTasks_1 = serverTasks; _i < serverTasks_1.length; _i++) {
                            var serverTask = serverTasks_1[_i];
                            var foundLocalTask = void 0;
                            for (var i = 0; i < rows.length; i++) {
                                var localTask = rows.item(i);
                                if (!localTask || !localTask.S_TASKID) {
                                    continue;
                                }
                                if (localTask.S_TASKID === serverTask.taskId) {
                                    foundLocalTask = localTask;
                                    break;
                                }
                            }
                            if (foundLocalTask) {
                                sql += _this.toTaskUpdateSql(serverTask, foundLocalTask);
                            }
                            else {
                                sql += _this.toTaskInsertSql(serverTask);
                            }
                        }
                    }
                    else {
                        for (var _a = 0, serverTasks_2 = serverTasks; _a < serverTasks_2.length; _a++) {
                            var task = serverTasks_2[_a];
                            sql += _this.toTaskInsertSql(task);
                        }
                    }
                    return sql && sql.length > 0 ? _this.sqlitePorter.importSqlToDb(db, sql) : Promise.reject('failure to saveTasks');
                });
            });
        }
    };
    /**
     * 保存任务
     * @param task
     * @returns {any}
     */
    DbService.prototype.saveTask = function (task) {
        var _this = this;
        if (this.globalService.isChrome || !task) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = _this.toTaskUpdateSql(task);
                return sql && sql.length > 0 ? db.executeSql(sql, {}) : Promise.reject('failure to saveTask');
            });
        }
    };
    /**
     * 获取任务
     * @param userId
     * @param since
     * @param count
     * @param states
     * @param key
     * @returns {any}
     */
    DbService.prototype.getTasks = function (userId, since, count, states, key) {
        var _this = this;
        if (this.globalService.isChrome) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT * FROM GD_TASKS WHERE I_USERID = " + userId;
                if (states && states.length > 0) {
                    sql += " AND I_STATE IN (" + states.join(',') + ")";
                }
                if (key) {
                    sql += " AND S_TASKID LIKE '%" + key + "%'";
                }
                sql += " ORDER BY D_ASSGINTIME DESC LIMIT " + count + " OFFSET " + since + ";";
                return db.executeSql(sql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    var tasks = [];
                    if (rows && rows.length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            var localTask = rows.item(i);
                            if (!localTask || !localTask.S_TASKID) {
                                continue;
                            }
                            tasks.push(_this.toTask(localTask));
                        }
                    }
                    return Promise.resolve(tasks);
                });
            });
        }
    };
    /**
     * 获取任务数
     * @param userId
     * @returns {any}
     */
    DbService.prototype.getTaskCount = function (userId) {
        if (this.globalService.isChrome) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT COUNT(*) FROM GD_TASKS WHERE I_USERID = " + userId + ";";
                return db.executeSql(sql, {})
                    .then(function (data) { return data.rows && data.rows.length > 0 ? data.rows.item(0)["COUNT(*)"] : 0; });
            });
        }
    };
    /**
     * 获取当前登录人TaskIds
     * @param userId
     * @returns {Array<string>}
     */
    DbService.prototype.getTaskIds = function (userId) {
        if (this.globalService.isChrome) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT S_TASKID FROM GD_TASKS WHERE I_USERID = " + userId + ";";
                return db.executeSql(sql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    var taskIds = [];
                    if (rows && rows.length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            var item = rows.item(i);
                            if (item.hasOwnProperty('S_TASKID') && item['S_TASKID']) {
                                taskIds.push(item['S_TASKID']);
                            }
                        }
                    }
                    return Promise.resolve(taskIds);
                });
            });
        }
    };
    /**
     * 保存任务详情
     * @param taskDetail
     * @returns {any}
     */
    DbService.prototype.saveTaskDetail = function (taskDetail) {
        var _this = this;
        if (this.globalService.isChrome || !taskDetail) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT * FROM GD_TASKDETAILS WHERE S_TASKID = '" + taskDetail.taskId + "';";
                return db.executeSql(sql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    var sql;
                    if (rows && rows.length > 0) {
                        sql = _this.toTaskDetailUpdateSql(taskDetail);
                    }
                    else {
                        sql = _this.toTaskDetailInsertSql(taskDetail);
                    }
                    return db.executeSql(sql, {});
                });
            });
        }
    };
    /**
     * 更新task extend info字段
     * @param taskDetail
     * @returns {any}
     */
    DbService.prototype.updateTaskExtendInfo = function (taskDetail) {
        var _this = this;
        if (this.globalService.isChrome || !taskDetail) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT * FROM GD_TASKS WHERE S_TASKID = '" + taskDetail.taskId + "';";
                return db.executeSql(sql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    var sql;
                    var extendedInfo;
                    if (rows && rows.length > 0) {
                        var item = rows.item(0);
                        if (item.hasOwnProperty('S_EXTENDEDINFO')) {
                            extendedInfo = item['S_EXTENDEDINFO'];
                        }
                    }
                    else {
                        return Promise.resolve(false);
                    }
                    sql = _this.toTaskUpdateExtendedInfoSql(taskDetail, extendedInfo);
                    return db.executeSql(sql, {});
                });
            });
        }
    };
    /**
     * 检查超期工单
     * @param userId
     * @param overdueTime
     * @param currentTime
     * @returns {any}
     */
    DbService.prototype.checkOverdueTimeTasks = function (userId, overdueTime, currentTime) {
        var _this = this;
        if (this.globalService.isChrome || !overdueTime) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var arrivedTime = overdueTime.arrived + currentTime;
                var replyTime = overdueTime.reply + currentTime;
                var sql = "SELECT * FROM GD_TASKS WHERE I_USERID = " + userId + " ORDER BY ID;";
                return db.executeSql(sql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    var tasks = [];
                    if (rows && rows.length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            var localTask = rows.item(i);
                            if (!localTask || !localTask.S_TASKID) {
                                continue;
                            }
                            var task = _this.toTask(localTask);
                            if (task.extendedInfo) {
                                if (task.extendedInfo.arrivedDeadLine && task.extendedInfo.arrivedDeadLine < arrivedTime) {
                                    task.extendedInfo.replyDeadLine = undefined;
                                    task.extendedInfo.delayReplyDeadLine = undefined;
                                }
                                else if (task.extendedInfo.replyDeadLine && task.extendedInfo.replyDeadLine < replyTime) {
                                    task.extendedInfo.arrivedDeadLine = undefined;
                                    task.extendedInfo.delayReplyDeadLine = undefined;
                                }
                                else {
                                    continue;
                                }
                                tasks.push(task);
                            }
                        }
                    }
                    return Promise.resolve(tasks);
                });
            });
        }
    };
    /**
     * 获取任务详情
     * @param taskId
     * @returns {any}
     */
    DbService.prototype.getTaskDetail = function (taskId) {
        var _this = this;
        if (this.globalService.isChrome || !taskId) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT * FROM GD_TASKDETAILS WHERE S_TASKID = '" + taskId + "';";
                return db.executeSql(sql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    var taskDetail;
                    if (rows && rows.length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            var localTaskDetail = rows.item(i);
                            if (!localTaskDetail || !localTaskDetail.S_TASKID) {
                                continue;
                            }
                            taskDetail = _this.toTaskDetail(localTaskDetail);
                        }
                    }
                    return Promise.resolve(taskDetail);
                });
            });
        }
    };
    /**
     * 获取任务详情
     * @param taskIds
     * @returns {Array<TaskDetail>}
     */
    DbService.prototype.getTaskDetails = function (taskIds) {
        var _this = this;
        if (this.globalService.isChrome || !taskIds || taskIds.length <= 0) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT * FROM GD_TASKDETAILS WHERE";
                var ids = taskIds.map(function (id) { return "'" + id + "'"; });
                sql += " S_TASKID IN (" + ids.join(',') + ")";
                return db.executeSql(sql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    var taskDetails = [];
                    if (rows && rows.length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            var localTaskDetail = rows.item(i);
                            if (!localTaskDetail) {
                                continue;
                            }
                            taskDetails.push(_this.toTaskDetail(localTaskDetail));
                        }
                    }
                    return Promise.resolve(taskDetails);
                });
            });
        }
    };
    /**
     * 获取无详细信息的taskId列表
     * @param userId
     * @returns {any}
     */
    DbService.prototype.getNoDetailTaskIds = function (userId) {
        if (this.globalService.isChrome) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT S_TASKID FROM GD_TASKS WHERE I_USERID = " + userId + " AND S_TASKID NOT IN (SELECT S_TASKID FROM GD_TASKDETAILS);";
                return db.executeSql(sql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    var taskIds = [];
                    if (rows && rows.length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            var item = rows.item(i);
                            if (item.hasOwnProperty('S_TASKID') && item['S_TASKID']) {
                                taskIds.push(item['S_TASKID']);
                            }
                        }
                    }
                    return Promise.resolve(taskIds);
                });
            });
        }
    };
    /**
     * 保存每次操作到历史表
     * @param history
     * @returns {any}
     */
    DbService.prototype.saveHistory = function (history) {
        var _this = this;
        if (this.globalService.isChrome || !history) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT * FROM GD_HISTORIES WHERE I_USERID = " + history.userId + " AND S_TASKID = '" + history.taskId + "' AND I_STATE = " + history.state + " ORDER BY ID;";
                return db.executeSql(sql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    var sql;
                    if (rows && rows.length > 0) {
                        //let localHistory: LocalHistory = rows.item(0) as LocalHistory;
                        sql = _this.toHistoryUpdateSql(history);
                    }
                    else {
                        sql = _this.toHistoryInsertSql(history);
                    }
                    return db.executeSql(sql, {});
                });
            });
        }
    };
    /**
     * 获取历史记录
     * @param userId
     * @param taskId
     * @param states
     * @param uploadedFlags
     * @param key
     * @param since
     * @param count
     * @returns {any}
     */
    DbService.prototype.getHistories = function (userId, taskId, states, uploadedFlags, key, since, count) {
        var _this = this;
        if (this.globalService.isChrome) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT * FROM GD_HISTORIES WHERE I_USERID = " + userId;
                if (taskId != undefined && taskId != null) {
                    sql += " AND S_TASKID = '" + taskId + "'";
                }
                if (states && states.length > 0) {
                    sql += " AND I_STATE IN (" + states.join(',') + ")";
                }
                if (uploadedFlags && uploadedFlags.length > 0) {
                    sql += " AND I_UPLOADEDFLAG IN (" + uploadedFlags.join(',') + ")";
                }
                if (key) {
                    sql += " AND S_TASKID LIKE '%" + key + "%'";
                }
                if (since !== undefined && since !== null && count !== undefined && count !== null) {
                    sql += " ORDER BY ID DESC LIMIT " + count + " OFFSET " + since + ";";
                }
                else {
                    sql += ' ORDER BY ID;';
                }
                return db.executeSql(sql, {});
            })
                .then(function (data) {
                var rows = data.rows;
                var histories = [];
                if (rows && rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var localHistory = rows.item(i);
                        if (!localHistory) {
                            continue;
                        }
                        histories.push(_this.toHistory(localHistory));
                    }
                }
                return Promise.resolve(histories);
            });
        }
    };
    /**
     *
     * @param userId
     * @param taskIds
     * @param state
     * @param uploadedFlags
     * @returns {any}
     */
    DbService.prototype.getSpecialHistories = function (userId, taskIds, state, uploadedFlags) {
        var _this = this;
        if (this.globalService.isChrome || !taskIds || taskIds.length <= 0) {
            return Promise.resolve([]);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var ids = taskIds.map(function (id) { return "'" + id + "'"; });
                var sql = "SELECT * FROM GD_HISTORIES WHERE I_USERID = " + userId + " AND S_TASKID IN (" + ids.join(',') + ")";
                if (state !== undefined && state !== null) {
                    sql += " AND I_STATE = " + state;
                }
                if (uploadedFlags && uploadedFlags.length > 0) {
                    sql += " AND I_UPLOADEDFLAG IN (" + uploadedFlags.join(',') + ")";
                }
                sql += " ORDER BY ID;";
                return db.executeSql(sql, {});
            })
                .then(function (data) {
                var rows = data.rows;
                var histories = [];
                if (rows && rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var localHistory = rows.item(i);
                        if (!localHistory) {
                            continue;
                        }
                        histories.push(_this.toHistory(localHistory));
                    }
                }
                return Promise.resolve(histories);
            });
        }
    };
    /**
     * 销单删除任务及详情
     * @param userId
     * @param taskId
     * @returns {any}
     */
    // public deleteTaskAndDetail(userId: number, taskId: string) {
    //   if (this.globalService.isChrome) {
    //     return Promise.reject('chrome');
    //   } else {
    //     return this.openDb()
    //       .then(db => {
    //         let sql = `DELETE FROM GD_TASKS WHERE I_USERID = ${userId} AND S_TASKID = '${taskId}';`
    //           + `DELETE FROM GD_TASKDETAILS WHERE S_TASKID = '${taskId}';`;
    //         return this.sqlitePorter.importSqlToDb(db, sql);
    //       });
    //   }
    // }
    /**
     * 保存多媒体信息
     * @param media
     * @returns {any}
     */
    DbService.prototype.saveMedia = function (media) {
        var _this = this;
        if (this.globalService.isChrome || !media) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT * FROM GD_MULTIMEDIAS WHERE I_USERID = " + media.userId + " AND S_TASKID = '" + media.taskId + "' AND I_FILETYPE = " + media.fileType + " AND S_FILENAME = '" + media.fileName + "';";
                return db.executeSql(sql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    if (rows && rows.length > 0) {
                        var localMedia = rows.item(0);
                        sql = _this.toMediaUpdateSql(media, localMedia);
                    }
                    else {
                        sql = _this.toMediaInsertSql(media);
                    }
                    return db.executeSql(sql, {});
                });
            });
        }
    };
    /**
     * 获取多媒体列表
     * @param userId
     * @param taskId
     * @param fileNames
     * @param uploadedFlags
     * @returns {any}
     */
    DbService.prototype.getMediaList = function (userId, taskId, fileNames, uploadedFlags) {
        var _this = this;
        if (this.globalService.isChrome || !taskId) {
            return Promise.reject(this.paramError);
        }
        else if (fileNames.length <= 0) {
            return Promise.reject([]);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var names = fileNames.map(function (name) { return "'" + name + "'"; });
                var sql = "SELECT * FROM GD_MULTIMEDIAS WHERE I_USERID = " + userId + " AND S_TASKID = '" + taskId + "'\n           AND S_FILENAME IN (" + names.join(',') + ")";
                if (uploadedFlags && uploadedFlags.length > 0) {
                    sql += " AND I_UPLOADEDFLAG IN (" + uploadedFlags.join(',') + ")";
                }
                sql += ' ORDER BY ID;';
                return db.executeSql(sql, {});
            })
                .then(function (data) {
                var rows = data.rows;
                var mediaList = [];
                if (rows && rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        var localMedia = rows.item(i);
                        if (!localMedia) {
                            continue;
                        }
                        mediaList.push(_this.toMedia(localMedia));
                    }
                }
                return Promise.resolve(mediaList);
            });
        }
    };
    /**
     *
     * @param userId
     * @param taskId
     * @returns {any}
     */
    DbService.prototype.deleteOneTaskWithAllInfos = function (userId, taskId) {
        var _this = this;
        if (this.globalService.isChrome) {
            return Promise.reject('chrome');
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "DELETE FROM GD_TASKS WHERE I_USERID = " + userId + " AND S_TASKID = '" + taskId + "';"
                    + ("DELETE FROM GD_TASKDETAILS WHERE S_TASKID = '" + taskId + "';")
                    + ("DELETE FROM GD_HISTORIES WHERE I_USERID = " + userId + " AND S_TASKID = '" + taskId + "';")
                    + ("DELETE FROM GD_MULTIMEDIAS WHERE I_USERID = " + userId + " AND S_TASKID = '" + taskId + "';");
                return _this.sqlitePorter.importSqlToDb(db, sql);
            });
        }
    };
    /**
     *
     * @param userId
     * @param fileNames
     * @returns {any}
     */
    DbService.prototype.deleteOneMedia = function (userId, fileNames) {
        var _this = this;
        if (this.globalService.isChrome) {
            return Promise.reject('chrome');
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "DELETE FROM GD_MULTIMEDIAS WHERE S_FILENAME = '" + fileNames + "' AND I_USERID = " + userId + ";";
                return _this.sqlitePorter.importSqlToDb(db, sql);
            });
        }
    };
    /**
     *
     * @param personnels
     * @returns {any}
     */
    DbService.prototype.savePersonnels = function (personnels) {
        var _this = this;
        if (this.globalService.isChrome || !personnels || personnels.length <= 0) {
            return Promise.resolve(false);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "DELETE FROM GD_PERSONNELS;";
                for (var _i = 0, personnels_1 = personnels; _i < personnels_1.length; _i++) {
                    var personnel = personnels_1[_i];
                    sql += _this.toPersonnelInsertSql(personnel);
                }
                return _this.sqlitePorter.importSqlToDb(db, sql);
            });
        }
    };
    /**
     *
     * @returns {any}
     */
    DbService.prototype.getPersonnels = function () {
        var _this = this;
        if (this.globalService.isChrome) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT * FROM GD_PERSONNELS;";
                return db.executeSql(sql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    var personnels = [];
                    if (rows && rows.length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            var localPersonnel = rows.item(i);
                            if (!localPersonnel) {
                                continue;
                            }
                            personnels.push(_this.toPersonnel(localPersonnel));
                        }
                    }
                    return personnels.length ? Promise.resolve(personnels) : Promise.reject('no personnels');
                });
            });
        }
    };
    DbService.prototype.getPersonnelsCount = function () {
        if (this.globalService.isChrome) {
            return Promise.resolve(0);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT COUNT(*) FROM GD_PERSONNELS;";
                return db.executeSql(sql, {})
                    .then(function (data) { return data.rows && data.rows.length > 0 ? data.rows.item(0)["COUNT(*)"] : 0; });
            });
        }
    };
    /**
     * 打开数据库
     * @returns {any}
     */
    DbService.prototype.openDb = function () {
        return this.sqlite.create({
            name: this.dbPath,
            location: 'default'
        });
    };
    /**
     * 创建tables
     */
    DbService.prototype.createTables = function () {
        var _this = this;
        var sql = "CREATE TABLE IF NOT EXISTS [GD_HISTORIES] (\n        [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\n        [I_USERID] INTEGER NOT NULL, \n        [S_TASKID] TEXT(50) NOT NULL,\n        [I_STATE] INTEGER NOT NULL,\n        [S_CONTENT] TEXT NOT NULL,\n        [S_REPLY] TEXT,\n        [I_UPLOADEDFLAG] INTEGER NOT NULL DEFAULT 0,\n        [S_EXTENDEDINFO] TEXT);\n           \n      CREATE TABLE IF NOT EXISTS [GD_MULTIMEDIAS] (\n        [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\n        [I_USERID] INTEGER NOT NULL,\n        [S_TASKID] TEXT(50) NOT NULL,\n        [I_FILETYPE] INTEGER NOT NULL,\n        [S_FILENAME] TEXT(100) NOT NULL,\n        [I_UPLOADEDFLAG] INTEGER NOT NULL DEFAULT 0,\n        [S_FILEID] TEXT,\n        [S_EXTENDEDINFO] TEXT);\n      \n      CREATE TABLE IF NOT EXISTS [GD_NEWS] (\n        [ID] INTEGER NOT NULL, \n        [S_TITLE] TEXT(100) NOT NULL,\n        [D_PUBTIME] INTEGER NOT NULL,\n        [S_CONTENT] TEXT NOT NULL,\n        [I_READFLAG] INTEGER NOT NULL DEFAULT 0,\n        [S_EXTENDEDINFO] TEXT);\n      \n      CREATE TABLE IF NOT EXISTS [GD_TASKDETAILS] (\n        [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\n        [S_TASKID] TEXT(50) NOT NULL,\n        [S_DETAILINFO] TEXT NOT NULL,\n        [S_EXTENDEDINFO] TEXT);\n      \n      CREATE TABLE IF NOT EXISTS [GD_TASKS] (\n        [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\n        [I_USERID] INTEGER NOT NULL, \n        [S_TASKID] TEXT(50) NOT NULL,\n        [S_TASKTYPE] TEXT(50) NOT NULL,\n        [S_DESC] TEXT(50),\n        [S_SOURCE] TEXT(50),\n        [D_CREATETIME] INTEGER,\n        [D_ASSGINTIME] INTEGER,\n        [D_ACCEPTTIME] INTEGER,\n        [D_GOTIME] INTEGER,\n        [D_ARRIVEDTIME] INTEGER,\n        [D_REPLYTIME] INTEGER,\n        [D_COMPLETEDTIME] INTEGER,\n        [I_STATE] INTEGER NOT NULL,\n        [S_LNGLATTYPE] TEXT(50),\n        [S_LONGITUDE] TEXT(50),\n        [S_LATITUDE] TEXT(50),\n        [S_EXTENDEDINFO] TEXT);\n      \n      CREATE TABLE IF NOT EXISTS [GD_WORDS] (\n        [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\n        [I_WID] INTEGER NOT NULL,\n        [S_WNAME] TEXT(100) NOT NULL,\n        [S_WVALUE] TEXT(100) NOT NULL,\n        [S_WVALUEEX] TEXT(100),\n        [S_WGROUP] TEXT(100),\n        [I_WPARENTID] INTEGER,\n        [S_WREMARK] TEXT(100),\n        [S_WISACTIVE] TEXT(100));\n        \n      CREATE TABLE IF NOT EXISTS [GD_MATERIALS] (\n        [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\n        [I_MID] INTEGER NOT NULL,\n        [I_PARENTID] INTEGER NOT NULL,\n        [S_GROUPKEY] TEXT(100) NOT NULL,\n        [S_KEY] TEXT(100) NOT NULL,\n        [S_NAME] TEXT(100));\n        \n      CREATE TABLE IF NOT EXISTS [GD_MATERIALINFO](\n        [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\n        [I_USERID] INTEGER NOT NULL,\n        [S_TASKID] TEXT(50) NOT NULL,\n        [S_INFOS] TEXT(1000) NOT NULL,\n        [I_UPLOADEDFLAG] INTEGER NOT NULL DEFAULT 0);\n        \n      CREATE TABLE IF NOT EXISTS [GD_MAINTAININFO](\n        [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\n        [S_TASKID] TEXT(50) NOT NULL,\n        [S_TYPE] TEXT(50),\n        [S_ADDRESS] TEXT(100),\n        [S_AREA] TEXT(50),\n        [S_CONTENT] TEXT(1000),\n        [S_REMARK] TEXT(1000));\n       \n      CREATE TABLE IF NOT EXISTS [META_INFO] (\n        [S_VERSION] TEXT(50) NOT NULL, \n        [S_PRODUCTER] TEXT (100) NOT NULL, \n        [D_PRODUCTEDTIME] INTEGER NOT NULL);\n\n      CREATE TABLE IF NOT EXISTS [GD_PERSONNELS] (\n        [I_FIELDPERSONNELID] INTEGER NOT NULL, \n        [S_FIELDPERSONNELNAME] TEXT (100) NOT NULL, \n        [S_ROLES] TEXT);";
        return this.openDb()
            .then(function (db) {
            return _this.sqlitePorter.importSqlToDb(db, sql);
        });
    };
    /**
     * 更新tables, to be used in future!!!
     * @returns {Promise<boolean>}
     */
    DbService.prototype.updateTables = function () {
        // return this.openDb()
        //   .then(db => {
        //     let sql = `ALTER TABLE GD_TASKS ALTER COLUMN [D_ARRIVEDDEADLINE] INTEGER DEFAULT 0, [D_REPLYDEADLINE] INTEGER DEFAULT 0, [D_DELAYREPLYDEADLINE] INTEGER DEFAULT 0;`;
        //     return this.sqlitePorter.importSqlToDb(db, sql);
        //   });
        return Promise.resolve(true);
    };
    /**
     *
     * @param word
     * @returns {string}
     */
    DbService.prototype.toWordInsertSql = function (word) {
        return "INSERT INTO GD_WORDS VALUES (null, " + word.wid + ", '" + word.wName + "', '" + word.wValue + "', '" + word.wValueEx + "', '" + word.wGroup + "', " + word.wParentId + ", '" + word.wRemark + "', " + (word.wIsActive ? "'1'" : "'0'") + ");";
    };
    DbService.prototype.toMaterialInsertSql = function (material) {
        return "INSERT INTO GD_MATERIALS VALUES (null," + material.id + ", " + material.parentId + ", '" + material.groupKey + "', '" + material.key + "', '" + material.name + "');";
    };
    DbService.prototype.toMaterialInfoInsertSql = function (materialInfo) {
        return "INSERT INTO GD_MATERIALINFO VALUES (null," + this.globalService.userId + ", '" + materialInfo.taskId + "', \n    '" + JSON.stringify(materialInfo.infos) + "', " + materialInfo.uploadFlag + ");";
    };
    DbService.prototype.toMaintainInfoInsertSql = function (maintainInfo) {
        return "INSERT INTO GD_MAINTAININFO VALUES (null,'" + maintainInfo.serialNumber + "','" + maintainInfo.maintenanceType + "',\n    '" + maintainInfo.maintenanceAddress + "','" + maintainInfo.area + "','" + maintainInfo.repairContent + "','" + maintainInfo.remark + "');";
    };
    /**
     * 更新
     * @param materialInfo
     * @returns {string}
     */
    DbService.prototype.toMaterialInfoUpdateSql = function (materialInfo) {
        return "UPDATE GD_MATERIALINFO SET S_INFOS = '" + JSON.stringify(materialInfo.infos) + "',\n    I_UPLOADEDFLAG=" + materialInfo.uploadFlag + " WHERE S_TASKID = '" + materialInfo.taskId + "'";
    };
    /**
     *
     * @param localWord
     * @returns {{wid: number, wName: string, wValue: string, wValueEx: string, wIsActive: Boolean, wGroup: string, wParentId: number, wRemark: string}}
     */
    DbService.prototype.toWord = function (localWord) {
        return {
            wid: localWord.I_WID,
            wName: localWord.S_WNAME,
            wValue: localWord.S_WVALUE,
            wValueEx: localWord.S_WVALUEEX,
            wIsActive: Boolean(localWord.S_WISACTIVE),
            wGroup: localWord.S_WGROUP,
            wParentId: localWord.I_WPARENTID,
            wRemark: localWord.S_WREMARK
        };
    };
    DbService.prototype.toMaterial = function (localMaterial) {
        return {
            id: localMaterial.I_MID,
            parentId: localMaterial.I_PARENTID,
            groupKey: localMaterial.S_GROUPKEY,
            key: localMaterial.S_KEY,
            name: localMaterial.S_NAME
        };
    };
    DbService.prototype.toMaintainInfo = function (localMaintainInfo) {
        return {
            id: localMaintainInfo.ID,
            serialNumber: localMaintainInfo.S_TASKID,
            maintenanceType: localMaintainInfo.S_TYPE,
            maintenanceAddress: localMaintainInfo.S_ADDRESS,
            area: localMaintainInfo.S_AREA,
            repairContent: localMaintainInfo.S_CONTENT,
            remark: localMaintainInfo.S_REMARK
        };
    };
    /**
     * task转insert sql
     * @param task
     * @returns {string}
     */
    DbService.prototype.toTaskInsertSql = function (task) {
        return "INSERT INTO GD_TASKS VALUES (null, " + this.globalService.userId + ", '" + task.taskId + "', '" + task.taskType + "', '" + task.desc + "', '" + task.source + "', " + task.createTime + ", " + task.assignTime + ", " + task.acceptTime + ", " + task.goTime + ", " + task.arrivedTime + ", " + task.replyTime + ", " + task.compltedTime + ", " + task.state + ", '" + task.location.type + "', '" + task.location.lng + "', '" + task.location.lat + "', null);";
    };
    /**
     * task转update sql
     * @param serverTask
     * @param localTask
     * @returns {string}
     */
    DbService.prototype.toTaskUpdateSql = function (serverTask, localTask) {
        var sql = '';
        if (localTask) {
            if (serverTask.acceptTime > localTask.D_ACCEPTTIME) {
                sql += "D_ACCEPTTIME = " + serverTask.acceptTime + ", ";
            }
            if (serverTask.arrivedTime > localTask.D_ARRIVEDTIME) {
                sql += "D_ARRIVEDTIME = " + serverTask.arrivedTime + ", ";
            }
            if (serverTask.assignTime > localTask.D_ASSGINTIME) {
                sql += "D_ASSGINTIME = " + serverTask.assignTime + ", ";
            }
            if (serverTask.compltedTime > localTask.D_COMPLETEDTIME) {
                sql += "D_COMPLETEDTIME = " + serverTask.compltedTime + ", ";
            }
            if (serverTask.createTime > localTask.D_CREATETIME) {
                sql += "D_CREATETIME = " + serverTask.createTime + ", ";
            }
            if (serverTask.goTime > localTask.D_GOTIME) {
                sql += "D_GOTIME = " + serverTask.goTime + ", ";
            }
            if (serverTask.replyTime > localTask.D_REPLYTIME) {
                sql += "D_REPLYTIME = " + serverTask.replyTime + ", ";
            }
            // modify: 2017.11.21
            if (serverTask.state > localTask.I_STATE) {
                sql += "I_STATE = " + serverTask.state + ", ";
            }
        }
        else {
            if (serverTask.acceptTime > 0) {
                sql += "D_ACCEPTTIME = " + serverTask.acceptTime + ", ";
            }
            if (serverTask.arrivedTime > 0) {
                sql += "D_ARRIVEDTIME = " + serverTask.arrivedTime + ", ";
            }
            if (serverTask.assignTime > 0) {
                sql += "D_ASSGINTIME = " + serverTask.assignTime + ", ";
            }
            if (serverTask.compltedTime > 0) {
                sql += "D_COMPLETEDTIME = " + serverTask.compltedTime + ", ";
            }
            if (serverTask.createTime > 0) {
                sql += "D_CREATETIME = " + serverTask.createTime + ", ";
            }
            if (serverTask.goTime > 0) {
                sql += "D_GOTIME = " + serverTask.goTime + ", ";
            }
            if (serverTask.replyTime > 0) {
                sql += "D_REPLYTIME = " + serverTask.replyTime + ", ";
            }
            if (serverTask.state > 0) {
                sql += "I_STATE = " + serverTask.state + ", ";
            }
        }
        if (sql.length > 0) {
            var seperator = ', ';
            var index = sql.lastIndexOf(seperator);
            if (sql.endsWith(seperator) && index > 0) {
                sql = sql.substring(0, index);
            }
            if (sql && sql.length > 0) {
                sql = "UPDATE GD_TASKS SET " + sql + " WHERE S_TASKID = '" + serverTask.taskId + "';";
            }
            else {
                sql = '';
            }
        }
        return sql;
    };
    /**
     *
     * @param taskDetail
     * @param extendedInfo
     * @returns {string}
     */
    DbService.prototype.toTaskUpdateExtendedInfoSql = function (taskDetail, extendedInfo) {
        var localTaskExtendedInfo = {};
        try {
            if (extendedInfo) {
                localTaskExtendedInfo = JSON.parse(extendedInfo);
            }
        }
        catch (e) {
            console.error(e);
        }
        localTaskExtendedInfo.arrivedDeadLine = taskDetail.arrivedDeadLine;
        localTaskExtendedInfo.replyDeadLine = taskDetail.replyDeadLine;
        localTaskExtendedInfo.delayReplyDeadLine = taskDetail.delayReplyDeadLine;
        var sql = "UPDATE GD_TASKS SET S_EXTENDEDINFO = '" + JSON.stringify(localTaskExtendedInfo) + "' WHERE S_TASKID = '" + taskDetail.taskId + "';";
        return sql;
    };
    /**
     *
     * @param taskDetail
     * @returns {string}
     */
    DbService.prototype.toTaskDetailInsertSql = function (taskDetail) {
        return "INSERT INTO GD_TASKDETAILS VALUES (null, '" + taskDetail.taskId + "', '" + JSON.stringify(taskDetail) + "', '" + (taskDetail.extendedInfo ? taskDetail.extendedInfo : null) + "');";
    };
    /**
     *
     * @param taskDetail
     * @returns {string}
     */
    DbService.prototype.toTaskDetailUpdateSql = function (taskDetail) {
        var sql = "UPDATE GD_TASKDETAILS SET S_DETAILINFO = '" + JSON.stringify(taskDetail) + "'";
        if (taskDetail.extendedInfo) {
            sql += ", S_EXTENDEDINFO = '" + taskDetail.extendedInfo + "'}";
        }
        sql += " WHERE S_TASKID = '" + taskDetail.taskId + "';";
        return sql;
    };
    /**
     *
     * @param history
     * @returns {string}
     */
    DbService.prototype.toHistoryInsertSql = function (history) {
        var extendInfo = {};
        if (history.taskDetail) {
            extendInfo.taskDetail = history.taskDetail;
        }
        if (history.mediaNames && history.mediaNames.length > 0) {
            extendInfo.mediaNames = history.mediaNames.join(',');
        }
        return "INSERT INTO GD_HISTORIES VALUES (null, " + history.userId + ", '" + history.task.taskId + "', " + history.task.state + ", '" + JSON.stringify(history.task) + "', '" + JSON.stringify(history.reply) + "', " + history.uploadedFlag + ", '" + JSON.stringify(extendInfo) + "');";
    };
    /**
     *
     * @param history
     * @returns {string}
     */
    DbService.prototype.toHistoryUpdateSql = function (history) {
        var extendInfo = {};
        if (history.taskDetail) {
            extendInfo.taskDetail = history.taskDetail;
        }
        if (history.mediaNames && history.mediaNames.length > 0) {
            extendInfo.mediaNames = history.mediaNames.join(',');
        }
        return "UPDATE GD_HISTORIES SET S_CONTENT = '" + JSON.stringify(history.task) + "', S_REPLY = '" + JSON.stringify(history.reply) + "', I_UPLOADEDFLAG = " + history.uploadedFlag + ", S_EXTENDEDINFO = '" + JSON.stringify(extendInfo) + "' WHERE I_USERID = " + history.userId + " AND S_TASKID = '" + history.taskId + "' AND I_STATE = " + history.state + ";";
    };
    /**
     * 转换task
     * @param localTask
     * @returns {{acceptTime: number, arrivedTime: number, assignTime: number, compltedTime: number, createTime: number, desc: string, goTime: number, location: {type: string, lng: string, lat: string}, replyTime: number, source: string, state: number, taskId: string, taskType: string}}
     */
    DbService.prototype.toTask = function (localTask) {
        var extendedInfo;
        try {
            extendedInfo = JSON.parse(localTask.S_EXTENDEDINFO);
        }
        catch (e) {
            console.error(e);
        }
        return {
            acceptTime: localTask.D_ACCEPTTIME,
            arrivedTime: localTask.D_ARRIVEDTIME,
            assignTime: localTask.D_ASSGINTIME,
            compltedTime: localTask.D_COMPLETEDTIME,
            createTime: localTask.D_CREATETIME,
            desc: localTask.S_DESC,
            goTime: localTask.D_GOTIME,
            location: {
                type: localTask.S_LNGLATTYPE,
                lng: localTask.S_LONGITUDE,
                lat: localTask.S_LATITUDE
            },
            replyTime: localTask.D_REPLYTIME,
            source: localTask.S_SOURCE,
            state: localTask.I_STATE,
            taskId: localTask.S_TASKID,
            taskType: localTask.S_TASKTYPE,
            extendedInfo: extendedInfo
        };
    };
    /**
     * 转换task detail
     * @param localTaskDetail
     * @returns {TaskDetail}
     */
    DbService.prototype.toTaskDetail = function (localTaskDetail) {
        try {
            var taskDetail = JSON.parse(localTaskDetail.S_DETAILINFO);
            if (localTaskDetail.S_EXTENDEDINFO) {
                taskDetail.extendedInfo = JSON.parse(localTaskDetail.S_EXTENDEDINFO);
            }
            return taskDetail;
        }
        catch (e) {
            console.error(e);
        }
    };
    /**
     *
     * @param localHistory
     * @returns {{userId: number, taskId: string, state: number, task: null, reply: any, uploadedFlag: number, taskDetail: TaskDetail, mediaIds: Array<number>}}
     */
    DbService.prototype.toHistory = function (localHistory) {
        try {
            var taskDetail = void 0;
            var mediaNames = void 0;
            if (localHistory.S_EXTENDEDINFO) {
                var historyExtendedInfo = JSON.parse(localHistory.S_EXTENDEDINFO);
                if (historyExtendedInfo.taskDetail) {
                    taskDetail = historyExtendedInfo.taskDetail;
                }
                if (historyExtendedInfo.mediaNames && historyExtendedInfo.mediaNames.length > 0) {
                    mediaNames = historyExtendedInfo.mediaNames.split(',');
                }
            }
            return {
                userId: localHistory.I_USERID,
                taskId: localHistory.S_TASKID,
                state: localHistory.I_STATE,
                task: localHistory.S_CONTENT ? JSON.parse(localHistory.S_CONTENT) : null,
                reply: JSON.parse(localHistory.S_REPLY),
                uploadedFlag: localHistory.I_UPLOADEDFLAG,
                taskDetail: taskDetail,
                mediaNames: mediaNames
            };
        }
        catch (e) {
            console.error(e);
        }
    };
    /**
     *
     * @param media
     * @returns {string}
     */
    DbService.prototype.toMediaInsertSql = function (media) {
        return "INSERT INTO GD_MULTIMEDIAS VALUES (null, " + media.userId + ", '" + media.taskId + "', " + media.fileType + ", '" + media.fileName + "', " + media.uploadedFlag + ", '" + (media.fileId ? media.fileId : null) + "', null);";
    };
    /**
     *
     * @param media
     * @param localMedia
     * @returns {string}
     */
    DbService.prototype.toMediaUpdateSql = function (media, localMedia) {
        if (localMedia) {
            var sql = "UPDATE GD_MULTIMEDIAS SET I_UPLOADEDFLAG = " + media.uploadedFlag;
            if (media.fileId) {
                sql += ", S_FILEID = '" + media.fileId + "'";
            }
            if (media.extendedInfo) {
                sql += ", S_EXTENDEDINFO ='" + JSON.stringify(media.extendedInfo) + "'";
            }
            sql += " WHERE ID = " + localMedia.ID + ";";
            return sql;
        }
        else {
            return this.toMediaInsertSql(media);
        }
    };
    /**
     *
     * @param localMedia
     * @returns {{userId: number, taskId: string, fileType: number, fileName: string, uploadedFlag: number, fileId: string, extendedInfo: string}}
     */
    DbService.prototype.toMedia = function (localMedia) {
        return {
            userId: localMedia.I_USERID,
            taskId: localMedia.S_TASKID,
            fileType: localMedia.I_FILETYPE,
            fileName: localMedia.S_FILENAME,
            uploadedFlag: localMedia.I_UPLOADEDFLAG,
            fileId: localMedia.S_FILEID,
            extendedInfo: localMedia.S_EXTENDEDINFO
        };
    };
    /**
     * 获取未上传的材料清单记录
     * @param userId
     * @returns {any}
     */
    DbService.prototype.getNotUploadMaterilalInfo = function (userId) {
        var _this = this;
        if (this.globalService.isChrome || !userId) {
            return Promise.reject(this.paramError);
        }
        else {
            return this.openDb()
                .then(function (db) {
                var sql = "SELECT * FROM GD_MATERIALINFO WHERE I_USERID = " + userId + " \n          AND I_UPLOADEDFLAG= " + _this.globalService.uploadedFlagForLocal + ";";
                return db.executeSql(sql, {})
                    .then(function (data) {
                    var rows = data.rows;
                    var results = [];
                    if (rows && rows.length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            var localMaterialInfo = rows.item(i);
                            if (!localMaterialInfo) {
                                continue;
                            }
                            results.push(_this.toMaterialInfo(localMaterialInfo));
                        }
                    }
                    return results.length ? Promise.resolve(results) : Promise.reject('no materialInfos');
                });
            });
        }
    };
    DbService.prototype.toPersonnelInsertSql = function (personnel) {
        return "INSERT INTO GD_PERSONNELS VALUES (" + personnel.fieldPersonnelId + ", '" + personnel.fieldPersonnelName + "', '" + personnel.roles.join(',') + "');";
    };
    DbService.prototype.toPersonnel = function (localPersonnel) {
        return {
            fieldPersonnelId: localPersonnel.I_FIELDPERSONNELID,
            fieldPersonnelName: localPersonnel.S_FIELDPERSONNELNAME,
            roles: localPersonnel.S_ROLES.split(',')
        };
    };
    return DbService;
}());
DbService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite_porter__["a" /* SQLitePorter */],
        __WEBPACK_IMPORTED_MODULE_3__GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_4__FileService__["a" /* FileService */]])
], DbService);

//# sourceMappingURL=DbService.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__searchresult_searchresult__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_SearchTaskRequest__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_DataService__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by zhangjing on 2017/6/23.
 */






var SearchPage = (function () {
    function SearchPage(navCtrl, alertCtrl, formBuilder, dataService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.tag = "[SearchPage]";
        this.title = '查询任务';
    }
    SearchPage.prototype.ngOnInit = function () {
        this.searchForm = this.formBuilder.group({
            'address': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2)])],
            'telephone': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4)])],
            'customerNum': [''],
            'taskNum': [''],
            'taskState': [''],
            'reflectType': [''],
            'reflectPerson': [''],
            'dispatchTime': [''],
        });
        this.getReflectTypes();
    };
    /**
     * 获得反映类别
     */
    SearchPage.prototype.getReflectTypes = function () {
        var _this = this;
        this.dataService.getReflectTypes()
            .then(function (words) {
            console.log(_this.tag + words);
            if (words.length <= 0) {
                return Promise.resolve(false);
            }
            else {
                _this.reflectTypes = words;
                return Promise.resolve(true);
            }
        });
    };
    /**
     * 显示反映类型
     */
    SearchPage.prototype.showReflectType = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('反映类别');
        var arrInputs = [];
        for (var i = 0; i < this.reflectTypes.length; i++) {
            arrInputs.push({ type: 'radio', label: this.reflectTypes[i].wName, value: this.reflectTypes[i].wName });
            alert.addInput(arrInputs[i]);
        }
        alert.addButton('取消');
        alert.addButton({
            text: '确定',
            handler: function (data) {
                _this.searchForm.patchValue({ reflectType: data });
            }
        });
        alert.present();
    };
    /**
     * 显示任何类型
     */
    SearchPage.prototype.showTaskType = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('任务状态');
        var arrInputs = [{ type: 'radio', label: '已派遣', value: '已派遣' },
            { type: 'radio', label: '接收', value: '接收' }, { type: 'radio', label: '已派工', value: '已派工' },
            { type: 'radio', label: '已出发', value: '已出发' }, { type: 'radio', label: '已到场', value: '已到场' },
            { type: 'radio', label: '已处理', value: '已处理' }, { type: 'radio', label: '已退单', value: '已退单' },
            { type: 'radio', label: '退单重派', value: '退单重派' }, { type: 'radio', label: '退单结束', value: '退单结束' },
            { type: 'radio', label: '已销单', value: '已销单' }, { type: 'radio', label: '督办', value: '督办' }];
        for (var i = 0; i < arrInputs.length; i++) {
            alert.addInput(arrInputs[i]);
        }
        alert.addButton('取消');
        alert.addButton({
            text: '确定',
            handler: function (data) {
                _this.searchForm.patchValue({ taskState: data });
            }
        });
        alert.present();
    };
    /**
     * 重置
     * @param ev
     */
    SearchPage.prototype.onReset = function (ev) {
        this.searchForm.setValue({
            address: '', telephone: '', customerNum: '', taskNum: '',
            taskState: '', reflectType: '', reflectPerson: '', dispatchTime: ''
        });
    };
    /**
     * 查询
     * @param searchInfo
     */
    SearchPage.prototype.onSearchClick = function (searchInfo) {
        if (searchInfo['address'] == '' && searchInfo['telephone'] == '' && searchInfo['customerNum'] == ''
            && searchInfo['taskNum'] == '' && searchInfo['taskState'] == '' && searchInfo['reflectType'] == ''
            && searchInfo['reflectPerson'] == '' && searchInfo['dispatchTime'] == '') {
            var alert_1 = this.alertCtrl.create({
                title: '提示：',
                buttons: ['确定']
            });
            alert_1.setSubTitle('请至少输入一个条件');
            alert_1.present();
            return;
        }
        var utcSendTime = Date.parse(this.myDate) - 28800000;
        var taskState = this.transformTaskState(searchInfo['taskState']);
        var reflectType = this.transformRefelctType(searchInfo['reflectType']);
        var temp = new __WEBPACK_IMPORTED_MODULE_4__model_SearchTaskRequest__["a" /* SearchTaskRequest */]();
        temp.happenedAddress = searchInfo['address'];
        temp.contactPhone = searchInfo['telephone'];
        temp.serialNo = searchInfo['customerNum'];
        temp.taskNo = searchInfo['taskNum'];
        temp.taskState = (searchInfo['taskState'] != '' && taskState != undefined) ? taskState : searchInfo['taskState'];
        temp.reportType = (searchInfo['taskState'] != '' && taskState != undefined) ? reflectType : searchInfo['reflectType'];
        temp.reportPerson = searchInfo['reflectPerson'];
        temp.sendTime = utcSendTime;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__searchresult_searchresult__["a" /* SearchResultPage */], { 'tasks': temp });
    };
    /**
     * 转换任务状态
     * @param strState
     * @returns {number}
     */
    SearchPage.prototype.transformTaskState = function (strState) {
        var taskState;
        switch (strState) {
            case '已派遣':
                taskState = 0;
                break;
            case '接收':
                taskState = 1;
                break;
            case '已响应':
                taskState = 6;
                break;
            case '已派工':
                taskState = 2;
                break;
            case '已出发':
                taskState = 3;
                break;
            case '已到场':
                taskState = 4;
                break;
            case '已处理':
                taskState = 5;
                break;
            case '已退单':
                taskState = -1;
                break;
            case '退单重派':
                taskState = -2;
                break;
            case '退单结束':
                taskState = -3;
                break;
            case '已销单':
                taskState = 99;
                break;
            case '督办':
                taskState = -99;
                break;
        }
        return taskState;
    };
    SearchPage.prototype.transformRefelctType = function (strReflectType) {
        var refelectType;
        for (var _i = 0, _a = this.reflectTypes; _i < _a.length; _i++) {
            var temp = _a[_i];
            if (strReflectType == temp.wName) {
                refelectType = temp.wid;
                break;
            }
        }
        return refelectType;
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\search\search.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="white" (click)="onReset($event)">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="page-search">\n\n\n\n  <ion-list>\n\n    <form [formGroup]="searchForm">\n\n      <ion-item>\n\n        <ion-label color="label">发生地址</ion-label>\n\n        <ion-input formControlName="address" type="text" clearInput></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="label">联系电话</ion-label>\n\n        <ion-input formControlName="telephone" type="number" clearInput></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="label">客服编号</ion-label>\n\n        <ion-input formControlName="customerNum" type="text" clearInput></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="label">任务编号</ion-label>\n\n        <ion-input formControlName="taskNum" type="text" clearInput></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item (click)="showTaskType()">\n\n        <ion-label class="label-content" color="label">任务状态</ion-label>\n\n        <ion-label>{{searchForm.value[\'taskState\']}}</ion-label>\n\n      </ion-item>\n\n\n\n      <ion-item (click)="showReflectType()">\n\n        <ion-label color="label">反映类别</ion-label>\n\n        <ion-label>{{searchForm.value[\'reflectType\']}}</ion-label>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="label">反映人员</ion-label>\n\n        <ion-input formControlName="reflectPerson" type="text" clearInput></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="label">派遣时间</ion-label>\n\n        <ion-datetime cancelText=\'取消\' doneText=\'确定\' displayFormat="YYYY-MM-DD HH:mm"\n\n                      pickerFormat="YYYY-MM-DD HH:mm" formControlName="dispatchTime"\n\n                      [(ngModel)]="myDate"  clearInput></ion-datetime>\n\n      </ion-item>\n\n    </form>\n\n  </ion-list>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <div class="login-button">\n\n        <button ion-button type="submit" block (click)="onSearchClick(searchForm.value)">查询</button>\n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\search\search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__providers_DataService__["a" /* DataService */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workinfo_workinfo__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_DataService__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_GlobalService__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StationWorkPage = (function () {
    function StationWorkPage(navCtrl, alertCtrl, loadingCtrl, events, dataService, globalService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.dataService = dataService;
        this.globalService = globalService;
        this.tag = "[StationWorkPage]";
        this.contentNames = {
            happenedAddress: '发生地址',
            contactPhone: '联系电话',
            reportPerson: '反映人',
            reportType: '反映类别',
            reportContent: '反映内容',
            sendTime: '派遣时间',
            resolveLimitedTime: '处理时限',
            taskState: '任务状态'
        };
        //private readonly dispatched: string = '已派遣';
        this.accepted = '已接收';
        //private readonly disableColor: string = 'gray';
        //private readonly enableColor: string = 'primary';
        this.undispatchedName = '未派工';
        this.dispatchedName = '24小时内已派工';
        this.title = '站点任务';
        this.subTitle = this.undispatchedName;
        this.showToolbar = false;
        this.showFab = false;
        this.isUnDispatchedMode = true;
        this.items = [];
        this.since = 0;
        this.count = 10;
    }
    /**
     * 初始化
     */
    StationWorkPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.tag, "ngOnInit");
        this.events.subscribe(this.globalService.stationWorkUpdateEvent, function () {
            _this.since = 0;
            while (_this.items.shift())
                ;
            _this.getUnDispatchedTasks(_this.since, _this.count);
        });
        Promise.all([this.getReflectType(), this.getReflectContent(), this.getUnDispatchedTasks(this.since, this.count)])
            .then(function (result) { return console.log(_this.tag, result); })
            .catch(function (error) { return console.error(error); });
        // this.getReflectType()
        //   .then(result => {
        //     return this.getReflectContent();
        //   })
        //   .then(result => {
        //     return this.getUnDispatchedTasks(this.since, this.count);
        //   })
        //   .catch(error => console.error(error));
    };
    /**
     * 销毁
     */
    StationWorkPage.prototype.ngOnDestroy = function () {
        this.events.unsubscribe(this.globalService.stationWorkUpdateEvent);
    };
    /**
     * 下拉刷新
     * @param refresher
     */
    StationWorkPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log(this.tag, refresher);
        this.since = 0;
        while (this.items.shift())
            ;
        var promise = this.isUnDispatchedMode
            ? this.getUnDispatchedTasks(this.since, this.count)
            : this.getDispatchedTasks(this.since, this.count);
        promise
            .then(function (result) { return console.log(_this.tag, result); })
            .catch(function (error) { return console.error(error); })
            .then(function () { return refresher.complete(); });
    };
    StationWorkPage.prototype.onSearch = function (ev) {
        this.showToolbar = !this.showToolbar;
        this.content.resize();
    };
    /**
     * 过滤
     * @param ev
     */
    StationWorkPage.prototype.onFilter = function (ev) {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('派工类型');
        alert.addInput({
            type: 'radio',
            label: this.undispatchedName,
            value: this.undispatchedName,
            checked: this.subTitle === this.undispatchedName
        });
        alert.addInput({
            type: 'radio',
            label: this.dispatchedName,
            value: this.dispatchedName,
            checked: this.subTitle === this.dispatchedName
        });
        alert.addButton('取消');
        alert.addButton({
            text: '确定',
            handler: function (data) {
                if (data === _this.subTitle) {
                    return;
                }
                var loader = _this.loadingCtrl.create({
                    content: "Please wait...",
                });
                loader.present();
                _this.since = 0;
                while (_this.items.shift())
                    ;
                var promise;
                if (data === _this.undispatchedName) {
                    _this.subTitle = _this.undispatchedName;
                    _this.isUnDispatchedMode = true;
                    promise = _this.getUnDispatchedTasks(_this.since, _this.count);
                }
                else {
                    _this.subTitle = _this.dispatchedName;
                    _this.isUnDispatchedMode = false;
                    promise = _this.getDispatchedTasks(_this.since, _this.count);
                }
                promise
                    .then(function (result) { return console.log(_this.tag, result); })
                    .catch(function (error) { return console.error(error); })
                    .then(function () { return loader.dismiss(); });
            }
        });
        alert.present().then(function () {
            // this.testRadioOpen = true;
        });
    };
    StationWorkPage.prototype.getItems = function (ev) {
    };
    /**
     * 加载更多
     * @param infiniteScroll
     */
    StationWorkPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log(this.tag, "doInfinite");
        setTimeout(function () {
            _this.since += _this.count;
            _this.getUnDispatchedTasks(_this.since, _this.count)
                .then(function (result) {
                if (_this.items.length > _this.count) {
                    _this.showFab = true;
                }
                if (result) {
                    infiniteScroll.complete();
                }
                else {
                    infiniteScroll.enable(false);
                }
            })
                .catch(function (error) {
                console.error(error);
                infiniteScroll.complete();
            });
        }, 100);
    };
    /**
     * 回滚到list顶部
     * @param ev
     */
    StationWorkPage.prototype.doScroll2Top = function (ev) {
        this.content.scrollToTop();
    };
    /**
     * 接单
     * @param stationTask
     */
    StationWorkPage.prototype.onAccept = function (stationTask) {
        var _this = this;
        this.dataService.acceptEx({
            acceptOperator: this.globalService.userId,
            acceptTime: new Date().getTime(),
            taskId: stationTask.taskNo
        }).then(function (result) {
            stationTask.isAccepted = true;
            stationTask.contents[stationTask.contents.length - 1].value = _this.accepted;
        }).catch(function (error) {
            console.error(error);
            _this.globalService.showToast(error);
        });
    };
    /**
     * 派单
     * @param stationTask
     */
    StationWorkPage.prototype.onDispatch = function (stationTask) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__workinfo_workinfo__["a" /* WorkInfoPage */], stationTask.taskNo);
    };
    /**
     * 销单
     * @param stationTask
     */
    StationWorkPage.prototype.onCancel = function (stationTask) {
        this.popupRemarkAlert({
            TaskNo: stationTask.taskNo,
            TaskType: '1',
            WcOperator: this.globalService.userId,
            WcTime: new Date().getTime(),
            XdComment: '',
            XdOperator: this.globalService.userId
        });
    };
    /**
     * 获取反映类别
     * @returns {Promise<TResult|TResult>}
     */
    StationWorkPage.prototype.getReflectType = function () {
        var _this = this;
        return this.dataService.getReflectTypes()
            .then(function (words) {
            _this.reflectTypes = words;
            return Promise.resolve(words.length > 0);
        })
            .catch(function (error) {
            console.error(error);
            return Promise.resolve(false);
        });
    };
    /**
     * 获取反映内容
     * @returns {Promise<TResult|TResult>}
     */
    StationWorkPage.prototype.getReflectContent = function () {
        var _this = this;
        return this.dataService.getReflectContents()
            .then(function (words) {
            _this.reflectContents = words;
            return Promise.resolve(words.length > 0);
        })
            .catch(function (error) {
            console.error(error);
            return Promise.resolve(false);
        });
    };
    /**
     * 获取未派工任务列表
     * @param since
     * @param count
     * @returns {Promise<boolean|boolean>}
     */
    StationWorkPage.prototype.getUnDispatchedTasks = function (since, count) {
        var _this = this;
        console.log(this.tag, "getUnDispatchedTasks");
        return this.dataService.getUnDispatchedTasks(since, count)
            .then(function (tasks) {
            _this.transform2StationTasks(tasks, _this.items);
            if (_this.items.length > 0) {
                _this.events.publish(_this.globalService.mainUpdateEvent, { type: 'stationWorkCount', count: _this.items.length });
            }
            return Promise.resolve(tasks.length > 0);
        })
            .catch(function (error) {
            console.error(error);
            return Promise.resolve(false);
        });
    };
    StationWorkPage.prototype.getDispatchedTasks = function (since, count) {
        var _this = this;
        console.log(this.tag, "getDispatchedTasks");
        return this.dataService.getDispatchedTasks(since, count, 1440)
            .then(function (tasks) {
            _this.transform2StationTasks(tasks, _this.items);
            return Promise.resolve(tasks.length > 0);
        })
            .catch(function (error) {
            console.error(error);
            return Promise.resolve(false);
        });
    };
    /**
     * 显示内容转换
     * @param searchTasks
     * @param stationTasks
     */
    StationWorkPage.prototype.transform2StationTasks = function (searchTasks, stationTasks) {
        for (var _i = 0, searchTasks_1 = searchTasks; _i < searchTasks_1.length; _i++) {
            var searchTask = searchTasks_1[_i];
            var stationTask = {
                serialNo: searchTask.serialNo,
                taskNo: searchTask.taskNo,
                isAccepted: searchTask.taskState === this.accepted,
                contents: []
            };
            for (var key in this.contentNames) {
                if (searchTask.hasOwnProperty(key)) {
                    stationTask.contents.push({
                        name: this.contentNames[key],
                        value: this.transform2String(key, searchTask[key])
                    });
                }
            }
            stationTasks.push(stationTask);
        }
    };
    /**
     * 转换成字符串
     * @param key
     * @param value
     * @returns {string}
     */
    StationWorkPage.prototype.transform2String = function (key, value) {
        if (typeof value === 'number') {
            if (key === "reportType" && this.reflectTypes) {
                for (var _i = 0, _a = this.reflectTypes; _i < _a.length; _i++) {
                    var word = _a[_i];
                    if (word.wid === value) {
                        return word.wName;
                    }
                }
            }
            else if (key === "reportContent" && this.reflectContents) {
                for (var _b = 0, _c = this.reflectContents; _b < _c.length; _b++) {
                    var word = _c[_b];
                    if (word.wid === value) {
                        return word.wName;
                    }
                }
            }
            else if (key.endsWith("Time")) {
                return this.globalService.getFormatTime(new Date(value));
            }
        }
        return value.toString();
    };
    /**
     * 处理备注
     * @param cancelExInfo
     */
    StationWorkPage.prototype.popupRemarkAlert = function (cancelExInfo) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: '销单备注',
            message: "请输入销单备注",
            inputs: [
                {
                    name: 'remark',
                    placeholder: ''
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function (data) {
                        console.log('Saved clicked');
                        if (!data.remark) {
                            return _this.globalService.showToast("请填写备注!");
                        }
                        cancelExInfo.XdComment = data.remark;
                        _this.cancel(cancelExInfo);
                    }
                }
            ]
        });
        prompt.present();
    };
    /**
     * 销单
     * @param cancelExInfo
     */
    StationWorkPage.prototype.cancel = function (cancelExInfo) {
        var _this = this;
        this.dataService.cancelEx(cancelExInfo)
            .then(function (result) {
            if (result) {
                _this.events.publish(_this.globalService.stationWorkUpdateEvent);
            }
            Promise.resolve(result);
        })
            .catch(function (error) {
            console.error(error);
            Promise.resolve(false);
        })
            .then(function (result) {
            if (!result) {
                _this.globalService.showToast('销单失败!');
            }
        });
    };
    return StationWorkPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], StationWorkPage.prototype, "content", void 0);
StationWorkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-stationwork',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\stationwork\stationwork.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      {{title}}-{{subTitle}}\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="white" (click)="onSearch($event)">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="white" (click)="onFilter($event)">\n\n        <ion-icon name="funnel"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar color="primary" *ngIf="showToolbar">\n\n    <ion-searchbar (input)="getItems($event)"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="page-stationwork">\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="arrow-dropdown"\n\n      pullingText="Pull to refresh"\n\n      refreshingSpinner="circles"\n\n      refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list>\n\n    <ion-card *ngFor="let item of items">\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="assets/img/ic_mywork_avatar.png">\n\n        </ion-avatar>\n\n        <div><h2 class="card-header-label-hint">客服编号 </h2><h2 class="card-header-label-content">{{item.serialNo}}</h2></div>\n\n        <div><h2 class="card-header-label-hint">任务编号 </h2><h2 class="card-header-label-content">{{item.taskNo}}</h2></div>\n\n      </ion-item>\n\n\n\n      <ion-list>\n\n        <ion-item *ngFor="let content of item.contents">\n\n          <ion-label fixed class="label-name">\n\n            {{content.name}}\n\n          </ion-label>\n\n          <div item-content>\n\n            {{content.value}}\n\n          </div>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-row *ngIf="isUnDispatchedMode">\n\n        <ion-col class="card-bottom-btn" *ngIf="!item.isAccepted">\n\n          <button ion-button icon-left clear small (click)="onAccept(item)">\n\n            <ion-icon name="done-all"></ion-icon>\n\n            <div>接单</div>\n\n          </button>\n\n        </ion-col>\n\n\n\n        <ion-col class="card-bottom-btn" *ngIf="item.isAccepted">\n\n          <button ion-button icon-left clear small (click)="onDispatch(item)">\n\n            <ion-icon name="person"></ion-icon>\n\n            <div>派工</div>\n\n          </button>\n\n        </ion-col>\n\n\n\n        <ion-col class="card-bottom-btn" *ngIf="item.isAccepted">\n\n          <button ion-button icon-left clear small (click)="onCancel(item)">\n\n            <ion-icon name="close"></ion-icon>\n\n            <div>销单</div>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <!--infinite scroll-->\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n\n\n  <!--fab-->\n\n  <ion-fab right bottom *ngIf="showFab">\n\n    <button ion-fab color="primary" (click)="doScroll2Top($event)">\n\n      <ion-icon name="arrow-dropup"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\stationwork\stationwork.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__providers_DataService__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_GlobalService__["a" /* GlobalService */]])
], StationWorkPage);

//# sourceMappingURL=stationwork.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newsdetails_newsdetails__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_DataService__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsPage = (function () {
    function NewsPage(navCtrl, alertCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.tag = "[NewsPage]";
        this.title = '系统公告';
        this.items = [];
    }
    NewsPage.prototype.ngOnInit = function () {
        this.getNews();
    };
    NewsPage.prototype.getNews = function () {
        var _this = this;
        this.dataService.getNews()
            .then(function (news) {
            console.log(_this.tag + news);
            if (news.length <= 0) {
                return Promise.resolve(false);
            }
            else {
                _this.transFormNews(news);
                return Promise.resolve(true);
            }
        })
            .then(function (result) { return _this.isShow = result; });
    };
    /**
     * 转换公告
     * @param news
     */
    NewsPage.prototype.transFormNews = function (news) {
        for (var _i = 0, news_1 = news; _i < news_1.length; _i++) {
            var temp = news_1[_i];
            this.items.push({
                newsDate: this.formatDateTime(temp.pubTime),
                newsTitle: temp.title,
                newsContent: temp.content
            });
        }
    };
    /**
     * 侧滑删除某些公告
     * @param item
     */
    NewsPage.prototype.removeItem = function (event, item, slidingItem) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        var _loop_1 = function (i) {
            if (this_1.items[i] == item) {
                var confirm_1 = this_1.alertCtrl.create({
                    title: '提示',
                    message: '是否删除该公告',
                    buttons: [
                        {
                            text: '取消',
                            handler: function () {
                                console.log(_this.tag + 'Disagree clicked');
                                slidingItem.close();
                            }
                        },
                        {
                            text: '确定',
                            handler: function () {
                                _this.items.splice(i, 1);
                                console.log(_this.tag + 'Agree clicked');
                            }
                        }
                    ]
                });
                confirm_1.present();
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.items.length; i++) {
            _loop_1(i);
        }
    };
    /**
     * 删除所有公告
     * @param ev
     */
    NewsPage.prototype.onDeleteAll = function (ev) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '提示',
            message: '是否删除所有公告',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        console.log(_this.tag + 'Disagree clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        _this.items.splice(0, _this.items.length);
                        console.log(_this.tag + 'Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    /**
     * 跳转公告详情
     */
    NewsPage.prototype.onJumpDetails = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__newsdetails_newsdetails__["a" /* NewsDetailsPage */], {
            title: item.newsTitle,
            time: item.newsDate,
            newsContent: item.newsContent
        });
    };
    /**
     * utc时间格式化
     * @param inputTime
     * @returns {string}
     */
    NewsPage.prototype.formatDateTime = function (inputTime) {
        var date = new Date(inputTime);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var month = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        var day = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        var hour = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var minutestr = minute < 10 ? ('0' + minute) : minute;
        var secondstr = second < 10 ? ('0' + second) : second;
        return y + '-' + month + '-' + day + ' ' + hour + ':' + minutestr + ':' + secondstr;
    };
    ;
    return NewsPage;
}());
NewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-news',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\news\news.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="white" *ngIf="isShow" (click)="onDeleteAll($event)">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="page-news">\n\n  <ion-list>\n\n    <ion-card *ngFor="let item of items" (click)="onJumpDetails(item)">\n\n      <ion-list>\n\n        <ion-item-sliding #slidingItem>\n\n          <ion-item>\n\n            <div><h2 class="card-header-label-hint">温馨提示</h2>\n\n              <h2 class="card-header-label-content">{{item.newsDate}}</h2></div>\n\n            <br>\n\n            <div class="card-news-content">{{item.newsContent}}</div>\n\n          </ion-item>\n\n          <ion-item-options>\n\n            <button  ion-button color="danger" (click)="removeItem($event,item,slidingItem)">\n\n              <ion-icon name="trash"></ion-icon>\n\n              删除\n\n            </button>\n\n          </ion-item-options>\n\n        </ion-item-sliding>\n\n      </ion-list>\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\news\news.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_DataService__["a" /* DataService */]])
], NewsPage);

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materialsadd_materialsadd__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_MaterialsInfo__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_DataService__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MaterialsPage = (function () {
    function MaterialsPage(navCtrl, navParams, globalService, dataService, toastCtrl, events, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalService = globalService;
        this.dataService = dataService;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.tag = "[MaterialsPage]";
        this.title = '材料登记管理';
        this.segmentName = "basicInfo";
        this.items = [];
        this.isShowButtons = false;
        this.taskId = this.navParams.data.split('#')[0];
    }
    MaterialsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getMaintainInfo(this.taskId)
            .then(function (result) {
            if (result.serialNumber == _this.taskId) {
                _this.details = [
                    { name: '维修类别', value: result.maintenanceType },
                    { name: '维修地址', value: result.maintenanceAddress },
                    { name: '所属区域', value: result.area },
                    { name: '报修内容', value: result.repairContent }
                ];
            }
        })
            .catch(function (error) {
            console.log(error);
        });
        /**
         * 获得该条工单的材料列表清单
         */
        this.dataService.getMaterialInfo(this.taskId)
            .then(function (result) {
            console.log(_this.tag, result);
            _this.items = result.infos;
            _this.isShowButtons = result.uploadFlag == _this.globalService.uploadedFlagForLocal;
        })
            .catch(function (error) {
            _this.isShowButtons = true;
            console.log(_this.tag, error);
        });
        //订阅事件，清单加入
        this.events.subscribe(this.globalService.materialsUpdateEvent, function (isSave, materials) {
            _this.segmentName = "materialsList";
            console.log(_this.tag, isSave, materials);
            if (isSave) {
                _this.items.push(materials);
                return;
            }
            if (!_this.needEditItem) {
                return;
            }
            for (var i = 0; i < _this.items.length; i++) {
                if (_this.items[i] == _this.needEditItem) {
                    _this.items[i] = materials;
                }
            }
        });
    };
    MaterialsPage.prototype.ngOnDestroy = function () {
        this.events.unsubscribe(this.globalService.materialsUpdateEvent);
    };
    // private searchTask() {
    //   console.log(this.tag + "searchTask");
    //
    // }
    /**
     * 材料登记
     */
    MaterialsPage.prototype.addMaterials = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materialsadd_materialsadd__["a" /* MaterialsAddPage */]);
    };
    /**
     * 删除材料
     */
    MaterialsPage.prototype.deleteMaterials = function (item) {
        var _this = this;
        var _loop_1 = function (i) {
            if (this_1.items[i] == item) {
                var confirm_1 = this_1.alertCtrl.create({
                    title: '提示',
                    message: '是否删除该材料?',
                    buttons: [
                        {
                            text: '取消',
                            handler: function () {
                            }
                        },
                        {
                            text: '确定',
                            handler: function () {
                                //删除
                                _this.items.splice(i, 1);
                            }
                        }
                    ]
                });
                confirm_1.present();
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.items.length; i++) {
            _loop_1(i);
        }
    };
    /**
     * 修改材料
     */
    MaterialsPage.prototype.editMaterials = function (item) {
        this.needEditItem = item;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materialsadd_materialsadd__["a" /* MaterialsAddPage */], { 'edit': item });
    };
    /**
     * 保存
     */
    MaterialsPage.prototype.saveMaterials = function () {
        var _this = this;
        if (this.items.length == 0) {
            var alert_1 = this.alertCtrl.create({
                title: '提示',
                subTitle: '请先添加材料',
                buttons: ['确认']
            });
            alert_1.present();
            this.segmentName = 'materialsList';
            return;
        }
        var uploadInfoArr = [];
        var uploadMaterial;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            uploadMaterial = new __WEBPACK_IMPORTED_MODULE_4__model_MaterialsInfo__["d" /* UploadMaterials */]();
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
        var confirm = this.alertCtrl.create({
            title: '提示',
            message: '确认保存上传？',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        var data = new __WEBPACK_IMPORTED_MODULE_4__model_MaterialsInfo__["a" /* DataMaterialInfo */]();
                        data.taskId = _this.taskId;
                        data.uploadFlag = _this.globalService.uploadedFlagForLocal;
                        data.infos = uploadInfoArr;
                        _this.dataService.saveMaterialInfo(data)
                            .then(function (result) {
                            console.log(_this.tag, result);
                            var toast = _this.toastCtrl.create({
                                duration: 2000,
                                message: result ? '保存成功' : '上传失败',
                                position: 'bottom',
                            });
                            toast.present();
                            _this.navCtrl.pop();
                        })
                            .catch(function (error) {
                            console.log(_this.tag, error);
                            _this.navCtrl.pop();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    return MaterialsPage;
}());
MaterialsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-materials',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\materials\materials.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n    <ion-buttons end  *ngIf="isShowButtons">\n\n      <button ion-button icon-only color="white" (click)="addMaterials()">\n\n        <ion-icon name="add-circle"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only color="white" (click)="saveMaterials()">\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n  <ion-segment [(ngModel)]="segmentName">\n\n    <ion-segment-button value="basicInfo">\n\n      基本信息\n\n    </ion-segment-button>\n\n    <ion-segment-button value="materialsList">\n\n      材料清单\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>hammer\n\n\n\n<ion-content>\n\n  <div [ngSwitch]="segmentName">\n\n    <!--基本信息-->\n\n\n\n    <ion-list *ngSwitchCase="\'basicInfo\'">\n\n      <ion-item>\n\n        <ion-label fixed class="label-name">工单编号：</ion-label>\n\n        <div item-content>{{taskId}}</div>\n\n      </ion-item>\n\n\n\n      <ion-item *ngFor="let detail of details">\n\n        <ion-label fixed class="label-name">\n\n          {{detail.name}}\n\n        </ion-label>\n\n        <div item-content>\n\n          {{detail.value}}\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <!--材料清单-->\n\n    <ion-list *ngSwitchCase="\'materialsList\'">\n\n      <ion-card *ngFor="let item of items">\n\n\n\n        <ion-item>\n\n          <ion-label fixed class="label-name">\n\n            材料类别：\n\n          </ion-label>\n\n          <div item-content>\n\n            {{item.category.name}}\n\n          </div>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label fixed class="label-name">\n\n            材料型号：\n\n          </ion-label>\n\n          <div item-content>\n\n            {{item.type.name}}\n\n          </div>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label fixed class="label-name">\n\n            材料规格：\n\n          </ion-label>\n\n          <div item-content>\n\n            {{item.size.name}}\n\n          </div>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label fixed class="label-name">\n\n            生产厂家：\n\n          </ion-label>\n\n          <div item-content>\n\n            {{item.productor.name}}\n\n          </div>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label fixed class="label-name">\n\n            单位：\n\n          </ion-label>\n\n          <div item-content>\n\n            {{item.unit.text}}\n\n          </div>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label fixed class="label-name">\n\n            数量：\n\n          </ion-label>\n\n          <div item-content>\n\n            {{item.count}}\n\n          </div>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label fixed class="label-name">\n\n            备注：\n\n          </ion-label>\n\n          <div item-content>\n\n            {{item.remark}}\n\n          </div>\n\n        </ion-item>\n\n\n\n        <ion-item  *ngIf="isShowButtons">\n\n          <button item-right ion-button icon-left clear small color="danger" (click)="deleteMaterials(item)">\n\n            <ion-icon name="trash"></ion-icon>\n\n            <div>删除</div>\n\n          </button>\n\n          <button item-right ion-button icon-left clear small (click)="editMaterials(item)">\n\n            <ion-icon name="create"></ion-icon>\n\n            <div>修改</div>\n\n          </button>\n\n        </ion-item>\n\n      </ion-card>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\materials\materials.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_DataService__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], MaterialsPage);

//# sourceMappingURL=materials.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ConfigService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_GlobalService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_StorageService__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_FileService__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__networkset__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_DataService__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__overdueTimePage__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by zhangjing on 2017/6/29.
 */










var SettingPage = (function () {
    function SettingPage(navCtrl, alertCtrl, actionsheetCtrl, configService, globalService, storageService, storage, popoverCtrl, fileService, events, dataService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.configService = configService;
        this.globalService = globalService;
        this.storageService = storageService;
        this.storage = storage;
        this.popoverCtrl = popoverCtrl;
        this.fileService = fileService;
        this.events = events;
        this.dataService = dataService;
        this.toastCtrl = toastCtrl;
        this.tag = "[SettingPage]";
        this.title = '系统参数';
        this.alermStyle = '仅铃声'; //提醒方式
        this.isShow = false;
    }
    SettingPage.prototype.ngOnInit = function () {
        // if (this.globalService.isChrome) {
        //   this.storage.get(this.configService.systemStorageName)
        //     .then(result => {
        //       if (result) {
        //         let jsonObject = ConfigService.transform2SystemConfig(result);
        //         this.isGrid = jsonObject.isGridStyle;
        //         this.isOuterNet = jsonObject.isOuterNetwork;
        //         this.isOuterNet ? this.netWorkUri = jsonObject.outerBaseUri : this.netWorkUri = jsonObject.innerBaseUri;
        //         this.keepAlive = jsonObject.keepAliveInterval;
        //       } else {
        //         this.readDataFromFile();
        //       }
        //     })
        //   return;
        // }
        // this.readDataFromFile();
    };
    SettingPage.prototype.ngOnDestroy = function () {
        this.events.unsubscribe(this.globalService.materialsUpdateEvent);
    };
    /**
     * 从文件中读取参数
     */
    // private readDataFromFile() {
    //   Promise.all([this.isGridStyleFromFile(), this.isOuterNetFromFile(), this.getKeepAliveFromFile()])
    //     .catch(error => {
    //       console.log(this.tag + 'readDataFromFile:' + error);
    //     })
    // }
    /**
     * 切换九宫格
     */
    SettingPage.prototype.notifyIsGrid = function () {
        var _this = this;
        console.log(this.tag + "Toggled:" + this.isGrid);
        this.configService.setGridStyle(this.isGrid)
            .then(function (result) {
            if (result) {
                var gridStyle = _this.isGrid;
                _this.events.publish(_this.globalService.mainUpdateEvent, { type: 'gridStyle', gridStyle: gridStyle });
            }
            else {
                _this.isGrid = !_this.isGrid;
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    /**
     * 切换内外网
     */
    SettingPage.prototype.notifyIsOutNet = function () {
        // console.log(this.tag + "Toggled:" + this.isOuterNet);
        // this.configService.setIsOuterNet(this.isOuterNet)
        //   .then(result => {
        //     if (!result) {
        //       this.isOuterNet = !this.isOuterNet;
        //     } else {
        //       this.getNetworkUriFromFile();
        //     }
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   })
    };
    /**
     * 从文件中读取是否是九宫格
     */
    // private isGridStyleFromFile() {
    //   this.configService.isGridStyle()
    //     .then(data => {
    //       console.log(this.tag + data);
    //       this.isGrid = data;
    //     }).catch(err => {
    //     console.log(this.tag + err);
    //   })
    // }
    /**
     * 从文件中读取是否是外网
     */
    // private isOuterNetFromFile() {
    //   this.configService.isOuterNetwork()
    //     .then(data => {
    //       this.isOuterNet = data;
    //       this.getNetworkUriFromFile();
    //     })
    //     .catch(err => {
    //       console.log(this.tag + err);
    //     })
    // }
    /**
     * 从文件读取数据地址
     */
    // private getNetworkUriFromFile() {
    //   this.configService.getServerBaseUris()
    //     .then(([]) => {
    //       console.log(this.tag + data);
    //       this.netWorkUri = data;
    //     })
    //     .catch(err => {
    //       console.log(this.tag + err);
    //     })
    // }
    /**
     * 读取文件的心跳频率
     */
    // private getKeepAliveFromFile() {
    //   this.configService.getKeepAliveInterval()
    //     .then(data => {
    //       console.log(this.tag + data);
    //       this.keepAlive = data;
    //     })
    //     .catch(err => {
    //       console.log(this.tag + err);
    //     })
    // }
    SettingPage.prototype.showOverdueTime = function () {
        this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_9__overdueTimePage__["a" /* OverdueTimePage */]).present();
    };
    /**
     * 读取文件的超期时限
     */
    SettingPage.prototype.getOverdueFromFile = function () {
        var _this = this;
        this.configService.getOverdueTime()
            .then(function (overdueTime) {
            console.log(_this.tag + overdueTime);
            _this.overdueTime = overdueTime;
            //this.showOverdueSetting();
        })
            .catch(function (err) {
            console.log(_this.tag + err);
        });
    };
    /**
     * 获取提醒方式
     */
    // private getAlermStyle() {
    //   if (this.isChrome) {
    //     (this.storageService.read('alermStyle') == null || undefined) ?
    //       this.alermStyle = '仅铃声' : this.alermStyle = this.storageService.read<string>('alermStyle');
    //     return;
    //   }
    // }
    /**
     * 网络设置
     */
    SettingPage.prototype.showNetwork = function () {
        this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__networkset__["a" /* NetworkSetPage */]).present();
        // let prompt = this.alertCtrl.create({
        //   title: '网络设置',
        //   message: '数据访问地址',
        //   inputs: [
        //     {
        //       name: 'netWorkUri',
        //       value: this.netWorkUri,
        //       placeholder: '数据访问地址',
        //     }
        //   ],
        //   buttons: [
        //     {
        //       text: '取消',
        //       handler: data => {
        //         console.log(this.tag + 'showNetwork cancel');
        //       }
        //     },
        //     {
        //       text: '保存',
        //       handler: data => {
        //         this.configService.setSystemUrl(data.netWorkUri)
        //           .then(result => {
        //             if (result) {
        //               this.netWorkUri = data.netWorkUri;
        //             }
        //           })
        //           .catch(error => {
        //             console.log(this.tag + 'showNetwork:' + error);
        //           })
        //       }
        //     }
        //   ]
        // });
        // prompt.present();
    };
    SettingPage.prototype.showDownloadWords = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '更新词语',
            message: '是否确定需要更新词语信息？',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        console.log(_this.tag + '取消 clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        var toast = _this.toastCtrl.create({
                            duration: 2000,
                            position: 'bottom',
                        });
                        Promise.all([_this.dataService.downloadWords(), _this.dataService.downloadMaterials(), _this.dataService.downloadPersonnels()])
                            .then(function (_a) {
                            var result1 = _a[0], result2 = _a[1], result3 = _a[2];
                            if (result1 && result2 && result3) {
                                toast.setMessage('更新成功');
                            }
                            else {
                                toast.setMessage('更新失败');
                            }
                            toast.present();
                        })
                            .catch(function (error) {
                            console.log(error);
                            toast.setMessage('更新失败');
                            toast.present();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    /**
     * 超期设置
     */
    // showOverdueSetting() {
    //   let alert = this.alertCtrl.create({
    //     title: '超期设置',
    //     message: '时限设置(分钟):',
    //     inputs: [
    //       {
    //         name: 'overdueTime',
    //         value: this.overdueTime.toString(),
    //         placeholder: '请输入超期时限',
    //       }
    //     ],
    //     buttons: [
    //       {
    //         text: '取消',
    //         role: 'cancel',
    //         handler: data => {
    //           console.log(this.tag + 'showOverdueSetting Cancel clicked');
    //         }
    //       },
    //       {
    //         text: '保存',
    //         handler: data => {
    //           this.configService.setOverdue(data.overdueTime)
    //             .then(result => {
    //               this.overdueTime = data.overdueTime;
    //             })
    //             .catch(error => {
    //               console.log(this.tag + 'showOverdueSetting:' + error);
    //             })
    //         }
    //       }
    //     ]
    //   });
    //   alert.present();
    // }
    /**
     * 心跳设置
     */
    SettingPage.prototype.showHeartSetting = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '心跳设置',
            message: '心跳频率(毫秒):',
            inputs: [
                {
                    name: 'heartBeat',
                    placeholder: '请输入心跳频率',
                }
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function (data) {
                        console.log(_this.tag + 'showHeartSetting Cancel clicked');
                    }
                },
                {
                    text: '保存',
                    handler: function (data) {
                        _this.configService.setKeepAlive(data.heartBeat)
                            .then(function (result) {
                            _this.keepAlive = data.heartBeat;
                        })
                            .catch(function (error) {
                            console.log(_this.tag + 'showHeartSetting:' + error);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    /**
     * 提醒方式
     */
    SettingPage.prototype.showAlermType = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: '提醒方式',
            // cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: '仅铃声',
                    role: 'destructive',
                    icon: 'notifications',
                    handler: function () {
                        _this.alermStyle = '仅铃声';
                        _this.storageService.write('alermStyle', 'onlyRing');
                        console.log(_this.tag + 'showAlermType onlyRing clicked');
                    }
                },
                {
                    text: '仅震动',
                    icon: 'pulse',
                    handler: function () {
                        _this.alermStyle = '仅震动';
                        _this.storageService.write('alermStyle', 'onlyShake');
                        console.log(_this.tag + 'showAlermType onlyShake clicked');
                    }
                },
                {
                    text: '铃声+震动',
                    icon: 'arrow-dropright-circle',
                    handler: function () {
                        _this.alermStyle = '铃声+震动';
                        _this.storageService.write('alermStyle', 'ringShake');
                        console.log(_this.tag + 'showAlermType Play clicked');
                    }
                },
                {
                    text: '取消',
                    role: '取消',
                    icon: 'close',
                    handler: function () {
                        console.log(_this.tag + 'showAlermType Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    /**
     * 恢复出厂设置
     */
    SettingPage.prototype.showRevertSetting = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '警告',
            message: '数据都上传了吗？确定要恢复出厂设置吗？回复后请重新登录！',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        console.log(_this.tag + '取消 clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        _this.storage.clear(); //浏览器清除storage
                        console.log(_this.tag + '保存 clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    SettingPage.prototype.onExit = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '提示',
            message: '是否完全退出当前应用？',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        console.log(_this.tag + '取消 clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        console.log(_this.tag + '保存 clicked');
                        _this.globalService.quit();
                    }
                }
            ]
        });
        confirm.present();
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"D:\work\git\HotlineManagerIonic\src\pages\setting\setting.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      {{title}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page-setting">\n  <ion-list>\n    <ion-item *ngIf="isShow">\n      <ion-toggle [(ngModel)]="isGrid" (ionChange)="notifyIsGrid()"></ion-toggle>\n      <ion-label>是否切换九宫格</ion-label>\n      <ion-icon name=\'grid\' item-start color="{{\'primary\'}}"></ion-icon>\n    </ion-item>\n\n    <ion-item *ngIf="isShow">\n      <ion-toggle [(ngModel)]="isOuterNet" (ionChange)="notifyIsOutNet()"></ion-toggle>\n      <ion-label>是否使用外网</ion-label>\n      <ion-icon name=\'md-wifi\' item-start color="{{\'primary\'}}"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)="showNetwork()">\n      <ion-icon name=\'git-network\' item-start color="{{\'primary\'}}"></ion-icon>\n      <ion-label>网络设置</ion-label>\n      <ion-icon name=\'arrow-dropright\' item-end color="{{\'primary\'}}"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)="showOverdueTime()">\n      <ion-icon name=\'time\' item-start color="{{\'primary\'}}"></ion-icon>\n      <ion-label>超期设置</ion-label>\n      <ion-icon name=\'arrow-dropright\' item-end color="{{\'primary\'}}"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)="showDownloadWords()">\n      <ion-icon name=\'download\' item-start color="{{\'primary\'}}"></ion-icon>\n      <ion-label>更新词语</ion-label>\n      <ion-icon name=\'arrow-dropright\' item-end color="{{\'primary\'}}"></ion-icon>\n    </ion-item>\n\n    <ion-item *ngIf="isShow" (click)="showHeartSetting()">\n      <ion-icon name=\'heart-outline\' item-start color="{{\'primary\'}}"></ion-icon>\n      <ion-label>心跳频率</ion-label>\n      <ion-label class="label-right">{{keepAlive+\'毫秒\'}}</ion-label>\n      <ion-icon name=\'arrow-dropright\' item-end color="{{\'primary\'}}"></ion-icon>\n    </ion-item>\n\n    <ion-item *ngIf="isShow" (click)="showAlermType()">\n      <ion-icon name=\'alarm\' item-start color="{{\'primary\'}}"></ion-icon>\n      <ion-label>提醒方式</ion-label>\n      <ion-label class="label-right">{{alermStyle}}</ion-label>\n      <ion-icon name=\'arrow-dropright\' item-end color="{{\'primary\'}}"></ion-icon>\n    </ion-item>\n\n    <ion-item *ngIf="isShow" (click)="showRevertSetting()">\n      <ion-icon name=\'redo\' item-start color="{{\'primary\'}}"></ion-icon>\n      <ion-label>恢复出厂设置</ion-label>\n      <ion-icon name=\'arrow-dropright\' item-end color="{{\'primary\'}}"></ion-icon>\n    </ion-item>\n\n    <ion-item *ngIf="isShow" (click)="onExit()">\n      <ion-icon name=\'exit\' item-start color="{{\'primary\'}}"></ion-icon>\n      <ion-label>退出</ion-label>\n      <ion-icon name=\'arrow-dropright\' item-end color="{{\'primary\'}}"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\work\git\HotlineManagerIonic\src\pages\setting\setting.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_ConfigService__["a" /* ConfigService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_GlobalService__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_StorageService__["a" /* StorageService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_FileService__["a" /* FileService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_8__providers_DataService__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MyPluginMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_my_plugin__ = __webpack_require__(119);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyPluginMock = (function (_super) {
    __extends(MyPluginMock, _super);
    function MyPluginMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyPluginMock.prototype.getPageIntent = function () {
        return Promise.resolve(MyPluginMock.pageIntent);
    };
    MyPluginMock.prototype.getLocation = function () {
        return Promise.resolve(MyPluginMock.myLocation);
    };
    return MyPluginMock;
}(__WEBPACK_IMPORTED_MODULE_3__ionic_native_my_plugin__["a" /* MyPlugin */]));

MyPluginMock.pageIntent = {
    account: 'wqry',
    password: '0000',
    userId: 10,
    userName: 'ss1',
    departmentAndId: '客服热线部#1',
    roles: 'worker',
    params: 'MyWorkPage',
    accessToken: '',
    extendedInfo: ''
};
MyPluginMock.myLocation = {
    lng: 121.524808,
    lat: 31.280823
};
var GlobalService = (function () {
    function GlobalService(toastCtrl, loadingCtrl, storage, myPlugin) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.myPlugin = myPlugin;
        this.isChrome = true;
        this.httpCode = 0;
        this.httpSuccessStatusCode = 200;
        this.taskSinceDefault = 0;
        this.taskCountDefault10 = 10;
        this.taskCountDefault100 = 100;
        this.uploadedFlagForLocal = 0;
        this.uploadedFlagForUploading = 1;
        this.uploadedFlagForUploaded = 2;
        this.account = "admin";
        this.userName = "admin";
        this.userId = 0;
        this.department = "客服热线部";
        this.departmentId = 1;
        this.isWorker = false; //是否是外勤人员
        this.mainUpdateEvent = "main:update";
        this.myWorkDownloadFinishEvent = "mywork:download:finish"; // task & detail
        this.historyUploadFinishEvent = "history:upload:finish"; // history & media
        //readonly materialInfoFinishEvent: string = "materialInfo:upload:finish";//materialInfo
        this.myWorkUpdateEvent = "mywork:update";
        this.stationWorkUpdateEvent = "stationwork:update";
        this.materialsUpdateEvent = "addMaterials:update";
        this.recordAudioFinishEvent = "record:audio:finish";
        this.userDetailInfoStorageName = 'userDetailInfo';
        this.locationType = 'bd09ll';
        this.worker = 'worker';
        this.manager = 'manager';
        this.photoSuffix = '.jpg';
        this.audioSuffix = '.mp3';
        this.videoSuffix = '.mp4';
    }
    GlobalService.prototype.getMyPluginMock = function () {
        return this.myPluginMock ? this.myPluginMock : this.myPluginMock = new MyPluginMock();
    };
    GlobalService.prototype.saveUserDetailInfo = function (userDetailInfo) {
        var _this = this;
        return userDetailInfo && userDetailInfo.account && userDetailInfo.userName && userDetailInfo.roles && userDetailInfo.department
            ? this.storage.set(this.userDetailInfoStorageName, JSON.stringify(userDetailInfo))
                .then(function (result) {
                _this.account = userDetailInfo.account;
                _this.userId = userDetailInfo.userId;
                _this.userName = userDetailInfo.userName;
                _this.isWorker = userDetailInfo.roles === _this.worker;
                _this.department = userDetailInfo.department;
                _this.departmentId = userDetailInfo.departmentId;
                return Promise.resolve(result);
            })
            : Promise.reject('userDetailInfo is error');
    };
    GlobalService.prototype.getUserDetailInfo = function () {
        var _this = this;
        return this.storage.get(this.userDetailInfoStorageName)
            .then(function (userDetailInfo) {
            if (userDetailInfo) {
                userDetailInfo = JSON.parse(userDetailInfo);
            }
            if (userDetailInfo
                && userDetailInfo.account
                && userDetailInfo.userName
                && userDetailInfo.roles
                && userDetailInfo.department) {
                _this.account = userDetailInfo.account;
                _this.userId = userDetailInfo.userId;
                _this.userName = userDetailInfo.userName;
                _this.isWorker = userDetailInfo.roles === _this.worker;
                _this.department = userDetailInfo.department;
                _this.departmentId = userDetailInfo.departmentId;
                return userDetailInfo;
            }
            else {
                return Promise.reject('userDetailInfo is not valid');
            }
        });
    };
    GlobalService.prototype.getLocationEx = function () {
        var _this = this;
        if (this.isChrome) {
            this.myPlugin = this.getMyPluginMock();
        }
        return this.myPlugin.getLocation()
            .then(function (location) { return ({
            type: _this.locationType,
            lng: location.lng,
            lat: location.lat
        }); })
            .catch(function (error) {
            console.error(error);
            return _this.myPluginMock.getLocation()
                .then(function (location) { return ({
                type: _this.locationType,
                lng: location.lng,
                lat: location.lat
            }); });
        });
    };
    GlobalService.prototype.getLocation = function () {
        var _this = this;
        if (this.isChrome) {
            this.myPlugin = this.getMyPluginMock();
        }
        return this.myPlugin.getLocation()
            .then(function (location) { return ({
            type: _this.locationType,
            lng: location.lng.toString(),
            lat: location.lat.toString()
        }); })
            .catch(function (error) {
            console.error(error);
            return _this.myPluginMock.getLocation()
                .then(function (location) { return ({
                type: _this.locationType,
                lng: location.lng.toString(),
                lat: location.lat.toString()
            }); });
        });
    };
    GlobalService.prototype.quit = function () {
        if (this.isChrome) {
            return;
        }
        this.myPlugin.quit()
            .then(function (result) { return console.log(result); })
            .catch(function (err) { return console.error(err); });
    };
    /**
     * 转换时间格式
     * @param date
     * @returns {string}
     */
    GlobalService.prototype.getFormatTime = function (date) {
        var year = date.getFullYear().toString();
        var month = this.padLeftZero((date.getMonth() + 1).toString());
        var day = this.padLeftZero(date.getDate().toString());
        var hour = this.padLeftZero(date.getHours().toString());
        var minute = this.padLeftZero(date.getMinutes().toString());
        var second = this.padLeftZero(date.getSeconds().toString());
        return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    };
    /**
     * toast
     * @param message
     */
    GlobalService.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'bottom'
        });
        toast.present(toast);
    };
    /**
     * 显示加载对话框
     * @param content
     * @param duration
     */
    GlobalService.prototype.showLoading = function (content, duration) {
        if (content === void 0) { content = '加载中...'; }
        if (this.loading) {
            this.loading.dismissAll();
        }
        this.loading = duration > 0 ? this.loadingCtrl.create({ content: content, duration: duration }) : this.loadingCtrl.create({ content: content });
        this.loading.present();
    };
    /**
     * 隐藏加载对话框
     */
    GlobalService.prototype.hideLoading = function () {
        if (this.loading) {
            this.loading.dismiss();
        }
        this.loading = undefined;
    };
    GlobalService.string2Int = function (value) {
        try {
            return Number.parseInt(value);
        }
        catch (e) {
            console.error(e);
            return 0;
        }
    };
    GlobalService.prototype.padLeftZero = function (name) {
        return name.length === 1 ? "0" + name : name;
    };
    return GlobalService;
}());
GlobalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_my_plugin__["a" /* MyPlugin */]])
], GlobalService);

//# sourceMappingURL=GlobalService.js.map

/***/ })

},[250]);
//# sourceMappingURL=main.js.map