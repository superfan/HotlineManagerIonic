package cordova.plugin.MyPlugin;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import cordova.plugin.MyPlugin.PageIntent;
import cordova.plugin.MyPlugin.MyLocation;

/**
 * This class echoes a string called from JavaScript.
 */
public class MyPlugin extends CordovaPlugin {
  private static final String ACTION_GET_PAGE_INTENT = "getPageIntent";
  private static final String ACTION_GET_LOCATION = "getLocation";

  private static String loadUrl;

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
    }
    return false;
  }

//  private void coolMethod(String message, CallbackContext callbackContext) {
//    if (message != null && message.length() > 0) {
//      callbackContext.success(message);
//    } else {
//      callbackContext.error("Expected one non-empty string argument.");
//    }
//  }

//  public static void setLoadUrl(String url) {
//    loadUrl = url;
//  }
//
//  private void navUrl(CallbackContext callbackContext, String url) {
//    callbackContext.success(url);
//  }

  private void getPageIntent(CallbackContext callbackContext, JSONArray jsonArray) {
    try {
      PageIntent pageIntent = new PageIntent();
      callbackContext.success(pageIntent.toJson());
    } catch (Exception e) {
      e.printStackTrace();
      callbackContext.error(e.getMessage());
    }
  }

  private void getLocation(CallbackContext callbackContext, JSONArray jsonArray) {
    try {
      MyLocation myLocation = new MyLocation();
      callbackContext.success(myLocation.toJson());
    } catch (Exception e) {
      e.printStackTrace();
      callbackContext.error(e.getMessage());
    }
  }
}
