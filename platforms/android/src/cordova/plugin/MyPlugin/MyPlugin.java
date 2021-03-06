package cordova.plugin.MyPlugin;

import android.content.ContentResolver;
import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
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

import static io.ionic.MainApplication.ACCESS_TOKEN;
import static io.ionic.MainApplication.ACCOUNT;
import static io.ionic.MainApplication.DEPARTMENT;
import static io.ionic.MainApplication.DEPARTMENT_ID;
import static io.ionic.MainApplication.EXTENDED_INFO;
import static io.ionic.MainApplication.PARAMS;
import static io.ionic.MainApplication.PASSWORD;
import static io.ionic.MainApplication.ROLES;
import static io.ionic.MainApplication.USER_ID;
import static io.ionic.MainApplication.USER_NAME;

/**
 * This class echoes a string called from JavaScript.
 */
public class MyPlugin extends CordovaPlugin {
  private static final String TAG = "MyPlugin";
  private static final String ACTION_GET_PAGE_INTENT = "getPageIntent";
  private static final String ACTION_GET_LOCATION = "getLocation";
  private static final String ACTION_QUIT = "quit";
  private static final String ACTION_GET_PUSH_MESSAGE = "getPushMessage";
  private static final String ACTION_GET_CHANGED_INFO = "getChangedInfo";
  private static final String PUSH_MESSAGE = "pushMessage";
  private static final Uri CONTENT_URI = Uri.parse("content://com.sh3h.mainshell.shared.data.provider/item");
  private static final String DEFAULT_PAGE = "MyWorkPage";

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
        userName = "ss1";
        department = "客服热线部";
        departmentId = 1;
        roles = "worker";
        params = DEFAULT_PAGE;
        accessToken = getUUID(mainApplication);
        extendedInfo = "";
      }

      Log.i(TAG, "account:" + account + ", userId:" + userId + ", userName:" + userName
        + ", department:" + department + ", roles:" + roles + ", params:" + params
        + ", bundle: " + (bundle != null) + ", extendedInfo: " + extendedInfo);

      PageIntent pageIntent = new PageIntent(account, password, userId, userName,
        (department != null ? department : "") + "#" + departmentId, roles, params, accessToken, extendedInfo);
      getSharedData(pageIntent);
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
      if (pushMessageCallbackContext != null) {
        pushMessageCallbackContext.sendPluginResult(pluginResult);
      }
    } catch (Exception e) {
      e.printStackTrace();
      if (pushMessageCallbackContext != null) {
        pushMessageCallbackContext.error(e.getMessage());
      }
    }
  }

  public void sendChangedInfo(String info) {
    try {
      PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, info);
      pluginResult.setKeepCallback(true);
      if (changedInfoCallbackContext != null) {
        changedInfoCallbackContext.sendPluginResult(pluginResult);
      }
    } catch (Exception e) {
      e.printStackTrace();
      if (changedInfoCallbackContext != null) {
        changedInfoCallbackContext.error(e.getMessage());
      }
    }
  }

  private void getSharedData(PageIntent pageIntent) {
    try {
      ContentResolver contentResolver = cordova.getActivity().getApplication().getContentResolver();
      if (contentResolver != null) {
        String[] projection = new String[] {
          "sd_key",
          "sd_value"
        };

        //Uri uri = Uri.parse("content://com.sh3h.mainshell.shared.data.provider/item");
        //uri = uri.buildUpon().appendEncodedPath("account").build();
        Cursor cursor = contentResolver.query(CONTENT_URI, projection,
          null, null, null);
        if (cursor != null) {
          String key, value;
          if (cursor.moveToFirst()) {
            do {
              key = cursor.getString(0);
              value = cursor.getString(1);
              if (key != null
                && key.contains(PUSH_MESSAGE)
                && value != null
                && value.length() > 0
                && setPushMessage2ExtendedInfo(pageIntent, value)) {
                deleteSharedData(PUSH_MESSAGE + value.hashCode());
              }
            } while(cursor.moveToNext());
          }
          cursor.close();
        }
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  private boolean setPushMessage2ExtendedInfo(PageIntent pageIntent, String message) {
    final String messageType = "type";
    final String messageContent = "content";
    final int newTask = 201;
    final int updateTaskState = 202;

    try {
      if (!pageIntent.getParams().contains(DEFAULT_PAGE)) {
        return false;
      }

      JSONObject jsonObject = new JSONObject(message);
      if (jsonObject.isNull(messageType)
        || jsonObject.isNull(messageContent)
        || jsonObject.getInt(messageType) != newTask) {
        return false;
      }

      String extendedInfo = pageIntent.getExtendedInfo();
      if (extendedInfo != null && extendedInfo.length() > 0) {
        jsonObject = new JSONObject(extendedInfo);
      } else {
        jsonObject = new JSONObject();
      }

      jsonObject.put(PUSH_MESSAGE, true);
      pageIntent.setExtendedInfo(jsonObject.toString());
      return true;
    } catch (Exception e) {
      e.printStackTrace();
    }
    return false;
  }

  private void deleteSharedData(String key) {
    try {
      ContentResolver contentResolver = cordova.getActivity().getApplication().getContentResolver();
      Uri uri = CONTENT_URI.buildUpon().appendEncodedPath(key).build();
      int count = contentResolver.delete(uri, null, null);
      Log.i(TAG, "deleteSharedData " + key + ":"+ count);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

}
