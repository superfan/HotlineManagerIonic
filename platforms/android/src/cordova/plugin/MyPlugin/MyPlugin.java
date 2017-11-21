package cordova.plugin.MyPlugin;

import android.content.Context;
import android.os.Bundle;
import android.telephony.TelephonyManager;
import android.util.Log;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import cordova.plugin.MyPlugin.PageIntent;
import cordova.plugin.MyPlugin.MyLocation;
import io.ionic.MainApplication;

/**
 * This class echoes a string called from JavaScript.
 */
public class MyPlugin extends CordovaPlugin {
  private static final String ACTION_GET_PAGE_INTENT = "getPageIntent";
  private static final String ACTION_GET_LOCATION = "getLocation";
  private static final String ACTION_QUIT = "quit";
  private static final String ACTION_GET_PUSH_MESSAGE = "getPushMessage";
  private static final String ACTION_GET_CHANGED_INFO = "getChangedInfo";

  private static final String ACCOUNT = "account";
  private static final String PASSWORD = "password";
  private static final String USER_ID = "userId";
  private static final String USER_NAME = "userName";
  private static final String DEPARTMENT = "department";
  private static final String DEPARTMENT_ID = "departmentId";
  private static final String ROLES = "roles";
  private static final String PARAMS = "params";
  private static final String ACCESS_TOKEN = "accessToken";
  private static final String EXTENDED_INFO = "extendedInfo";

  private CallbackContext pushMessageCallbackContext;
  private CallbackContext changedInfoCallbackContext;

  @Override
  public boolean execute(String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {
    if (ACTION_GET_PAGE_INTENT.equals(action)) {
      cordova.getThreadPool().execute(new Runnable() {
        public void run() {
          getPageIntent(callbackContext, args);
        }
      });
      return true;
    } else if (ACTION_GET_LOCATION.equals(action)) {
      cordova.getThreadPool().execute(new Runnable() {
        public void run() {
          getLocation(callbackContext, args);
        }
      });
      return true;
    } else if (ACTION_QUIT.equals(action)) {
      this.webView.getPluginManager().postMessage("exit", null);
      PluginResult.Status status = PluginResult.Status.OK;
      String result = "";
      callbackContext.sendPluginResult(new PluginResult(status, result));
      return true;
    } else if (ACTION_GET_PUSH_MESSAGE.equals(action)) {
      pushMessageCallbackContext = callbackContext;
      return true;
    } else if (ACTION_GET_CHANGED_INFO.equals(action)) {
      changedInfoCallbackContext = callbackContext;
      return true;
    }
    return false;
  }

  private void getPageIntent(CallbackContext callbackContext, JSONArray jsonArray) {
    try {
      MainApplication mainApplication = (MainApplication) cordova.getActivity().getApplication();
      Bundle bundle = mainApplication.getBundle();

      String account, password, userName, department, roles, params, accessToken, extendedInfo;
      int userId, departmentId;

      if (bundle != null) {
        account = getString(bundle.getString(ACCOUNT));
        password = getString(bundle.getString(PASSWORD));
        userId = bundle.getInt(USER_ID);
        userName = getString(bundle.getString(USER_NAME));
        department = getString(bundle.getString(DEPARTMENT));
        departmentId = bundle.getInt(DEPARTMENT_ID);
        roles = getString(bundle.getString(ROLES));
        params = getString(bundle.getString(PARAMS));
        accessToken = getString(bundle.getString(ACCESS_TOKEN));
        extendedInfo = getString(bundle.getString(EXTENDED_INFO));
      } else {
        account = "wqry";
        password = "0000";
        userId = 10;
        userName = "wqry";
        department = "客服热线部";
        departmentId = 1;
        roles = "worker";
        params = "MyHistory";
        accessToken = getUUID(mainApplication);
        extendedInfo = "";
      }

      Log.i("MyPlugin", "account:" + account + ", userId:" + userId + ", userName:" + userName
        + ", department:" + department + ", roles:" + roles + ", params:" + params
        + ", bundle: " + (bundle != null) + ", extendedInfo: " + extendedInfo);

      PageIntent pageIntent = new PageIntent(account, password, userId, userName,
        (department != null ? department : "") + "#" + departmentId, roles, params, accessToken, extendedInfo);
      callbackContext.success(pageIntent.toJson());
    } catch (Exception e) {
      e.printStackTrace();
      callbackContext.error(e.getMessage());
    }
  }

  private void getLocation(CallbackContext callbackContext, JSONArray jsonArray) {
    try {
      MainApplication mainApplication = (MainApplication) cordova.getActivity().getApplication();
      MyLocation myLocation = new MyLocation(mainApplication.getLongitude(), mainApplication.getLatitude());
      callbackContext.success(myLocation.toJson());
    } catch (Exception e) {
      e.printStackTrace();
      callbackContext.error(e.getMessage());
    }
  }

  private static boolean isNullOrEmpty(String text) {
    return text == null || text.length() == 0;
  }

  private static String getString(String value) {
    return value != null ? value : "";
  }

  private static String getUUID(Context context) {
    try {
      TelephonyManager tm = (TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE);
      String tmDevice, tmSerial, androidId;

      tmDevice = tm.getDeviceId();
      if (!isNullOrEmpty(tmDevice) && !tmDevice.equals("null")) {
        return tmDevice;
      }

      tmSerial = tm.getSimSerialNumber();
      if (!isNullOrEmpty(tmSerial) && !tmSerial.equals("null")) {
        return tmSerial;
      }

      androidId = android.provider.Settings.Secure.getString(context.getContentResolver(),
        android.provider.Settings.Secure.ANDROID_ID);
      return androidId;
    } catch (Exception e) {
      e.printStackTrace();
      return "";
    }
  }

  public void sendPushMessage(String message) {
    try {
      PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, message);
      pluginResult.setKeepCallback(true);
      pushMessageCallbackContext.sendPluginResult(pluginResult);
    } catch (Exception e) {
      e.printStackTrace();
      pushMessageCallbackContext.error(e.getMessage());
    }
  }

  public void sendChangedInfo(String info) {
    try {
      PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, info);
      pluginResult.setKeepCallback(true);
      changedInfoCallbackContext.sendPluginResult(pluginResult);
    } catch (Exception e) {
      e.printStackTrace();
      changedInfoCallbackContext.error(e.getMessage());
    }
  }

}
