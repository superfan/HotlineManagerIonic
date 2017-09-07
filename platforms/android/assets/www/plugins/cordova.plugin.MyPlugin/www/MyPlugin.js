cordova.define("cordova.plugin.MyPlugin.MyPlugin", function(require, exports, module) {

"use strict";

var getPromisedCordovaExec = function (command, success, fail) {
  var toReturn, deferred, injector, $q;
  if (success === undefined) {
    if (window.jQuery) {
      deferred = jQuery.Deferred();
      success = deferred.resolve;
      fail = deferred.reject;
      toReturn = deferred;
    } else if (window.angular) {
      injector = angular.injector(["ng"]);
      $q = injector.get("$q");
      deferred = $q.defer();
      success = deferred.resolve;
      fail = deferred.reject;
      toReturn = deferred.promise;
    } else if (window.when && window.when.promise) {
      deferred = when.defer();
      success = deferred.resolve;
      fail = deferred.reject;
      toReturn = deferred.promise;
    } else if (window.Promise) {
      toReturn = new Promise(function(c, e) {
        success = c;
        fail = e;
      });
    } else if (window.WinJS && window.WinJS.Promise) {
      toReturn = new WinJS.Promise(function(c, e) {
        success = c;
        fail = e;
      });
    } else {
      return console.error('AppVersion either needs a success callback, or jQuery/AngularJS/Promise/WinJS.Promise defined for using promises');
    }
  }
  // 5th param is NOT optional. must be at least empty array
  cordova.exec(success, fail, "MyPlugin", command, []);
  return toReturn;
};

function MyApi() {
}

MyApi.prototype.getPageIntent = function (success, fail) {
  return getPromisedCordovaExec('getPageIntent', success, fail);
};

MyApi.prototype.getLocation = function (success, fail) {
  return getPromisedCordovaExec('getLocation', success, fail);
};

MyApi.prototype.quit = function (success, fail) {
  return getPromisedCordovaExec('quit', success, fail);
};

MyApi.prototype.getPushMessage = function (success, fail) {
  return getPromisedCordovaExec('getPushMessage',
    function(data) {
      success && success(data);
    },
    function(error) {
      fail && fail(error);
    });
};

MyApi.prototype.getChangedInfo = function (success, fail) {
  return getPromisedCordovaExec('getChangedInfo', success, fail);
};

module.exports = new MyApi();

});
