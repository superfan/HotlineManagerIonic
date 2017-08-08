var exec = require('cordova/exec');
var myAPI={}

myAPI.coolMethod = function(arg0, success, error) {
    exec(success, error, "MyPlugin", "coolMethod", [arg0]);
};

myAPI.onGetNavUrl = function(success, error) {
  exec(success, error, "MyPlugin", "navUrl");
};

module.exports=myAPI;
