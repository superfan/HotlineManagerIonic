package io.ionic;


import android.app.Activity;
import android.app.Application;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.os.Bundle;
import android.os.Handler;
import android.os.IBinder;
import android.os.Message;
import android.os.Process;
import android.os.RemoteException;
import android.telephony.TelephonyManager;
import android.text.TextUtils;
import android.util.Log;

import com.sh3h.ipc.IRemoteServiceCallback;
import com.sh3h.ipc.location.MyLocation;
import com.sh3h.ipc.module.MyModule;
import com.sh3h.ipc.IMainService;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;


public class MainApplication extends Application {
  public interface OnAidlListener {
    void handlePushMessage(String message);

    void clearCache();

    void restoreFactory();

    void handlePhotoQuality(String info);

    void handleOuterNetwork(String info);
  }

  private static final String TAG = "MainApplication";
  private static final String HOST_SERVICE_NAME = "com.sh3h.mainshell.service.HostService";
  private static final String BINDING_NAME = "bindingName";

  public static final String ACCOUNT = "account";
  public static final String PASSWORD = "password";
  public static final String USER_ID = "userId";
  public static final String USER_NAME = "userName";
  public static final String DEPARTMENT = "department";
  public static final String DEPARTMENT_ID = "departmentId";
  public static final String ROLES = "roles";
  public static final String PARAMS = "params";
  public static final String ACCESS_TOKEN = "accessToken";
  public static final String EXTENDED_INFO = "extendedInfo";

  private IMainService mainService;
  private boolean mIsGpsLocated;
  private MyLocation mMyLocation;
  private Bundle mBundle;
  private OnAidlListener mOnAidlListener;
  private List<Activity> mActivityList;

  @Override
  public void onCreate() {
    super.onCreate();

    CrashHandler crashHandler = CrashHandler.getInstance();
    crashHandler.init(this);

    mActivityList = new ArrayList<Activity>();
  }

  public void setBundle(Bundle bundle) {
    mBundle = bundle;
  }

  public Bundle getBundle() {
    return mBundle;
  }

  public void registerOnAidlListener(OnAidlListener onAidlListener) {
    mOnAidlListener = onAidlListener;
  }

  public void unregisterOnAidlListener(OnAidlListener onAidlListener) {
    mOnAidlListener = null;
  }

  public void bindHostService() {
    Log.i(TAG, "---bindHostService---1");
    if (mainService == null) {
      Log.i(TAG, "---bindHostService---2");
      Intent intent = new Intent(HOST_SERVICE_NAME);
      intent = createExplicitFromImplicitIntent(this, intent);
      if (intent != null) {
        intent.putExtra(BINDING_NAME, IMainService.class.getName());
        bindService(intent, mainConnection, BIND_AUTO_CREATE);
      }
    }
  }

  public void unbindHostService() {
    Log.i(TAG, "---unbindHostService---1");
    if (mainService != null) {
      Log.i(TAG, "---unbindHostService---2");
      unbindService(mainConnection);
      mainService = null;
    }
  }

  public void setMyModule(MyModule myModule) {
    try {
      if ((mainService != null) && (myModule != null)) {
        mainService.setMyModule(myModule);
      }
    } catch (RemoteException exception) {
      exception.printStackTrace();
      Log.e(TAG, "---setMyModule---" + exception.getMessage());
    }
  }

  public long getCurrentTime() {
    long time = new Date().getTime();
    try {
      if (mainService != null) {
        time += mainService.getCurrentTime();
      }
    } catch (RemoteException exception) {
      exception.printStackTrace();
      Log.e(TAG, "---setMyModule---" + exception.getMessage());
    }

    return time;
  }


  public boolean isGpsLocated() {
    return mIsGpsLocated;
  }

  public double getLongitude() {
    return mMyLocation != null ? mMyLocation.getLongitude() : 0;
  }

  public double getLatitude() {
    return mMyLocation != null ? mMyLocation.getLatitude() : 0;
  }

  public void addActivity(Activity activity) {
    if (mActivityList != null) {
      mActivityList.add(activity);
    }
  }

  public void removeActivity(Activity activity) {
    if (mActivityList != null) {
      mActivityList.remove(activity);
    }
  }

  private ServiceConnection mainConnection = new ServiceConnection() {
    @Override
    public void onServiceConnected(ComponentName name, IBinder service) {
      mainService = IMainService.Stub.asInterface(service);
      Log.i(TAG, "---mainConnection onServiceConnected---");
      try {
        mainService.registerCallback(mCallback);
        mainService.addPid(Process.myPid());
      } catch (RemoteException e) {
        e.printStackTrace();
        Log.e(TAG, e.getMessage() != null ? e.getMessage() : "ServiceConnection");
      }
    }

    @Override
    public void onServiceDisconnected(ComponentName name) {
      Log.i(TAG, "---mainConnection onServiceDisconnected---");
      try {
        mainService.unregisterCallback(mCallback);
      } catch (RemoteException e) {
        e.printStackTrace();
        Log.e(TAG, e.getMessage() != null ? e.getMessage() : "onServiceDisconnected");
      }
      mainService = null;
    }
  };

  private IRemoteServiceCallback mCallback = new IRemoteServiceCallback.Stub() {
    public void locationChanged(MyLocation myLocation) {
      Log.i(TAG, "locationChanged");
      mHandler.sendMessage(mHandler.obtainMessage(MY_MSG_LOCATION, myLocation));
    }

    /**
     * This is called by the remote service regularly to tell us about
     * new values.  Note that IPC calls are dispatched through a thread
     * pool running in each process, so the code executing here will
     * NOT be running in our main thread like most other things -- so,
     * to update the UI, we need to use a Handler to hop over there.
     */
    public void moduleChanged(MyModule myModule) {
      Log.i(TAG, "moduleChanged");
      mHandler.sendMessage(mHandler.obtainMessage(MY_MSG_MODULE, myModule));
    }

    public void exitSystem() {
      Log.i(TAG, "exitSystem");
      mHandler.sendMessage(mHandler.obtainMessage(MY_MSG_EXIT));
    }
  };

  private static final int MY_MSG_LOCATION = 1;
  private static final int MY_MSG_MODULE = 2;
  private static final int MY_MSG_EXIT = 3;
  private static final int MY_MSG_PUSH = 4;
  private static final int MY_MSG_CLEAR_CACHE = 5;
  private static final int MY_MSG_RESTORE_FACTORY = 6;
  private static final int MY_MSG_PHOTO_QUALITY = 7;
  private static final int MY_MSG_NETWORK_CHANGED = 8;
  private Handler mHandler = new MyHandler(this);

  private static class MyHandler extends Handler {
    private MainApplication mMainApplication;

    public MyHandler(MainApplication mainApplication) {
      mMainApplication = mainApplication;
    }

    @Override
    public void handleMessage(Message msg) {
      switch (msg.what) {
        case MY_MSG_LOCATION:
          if (msg.obj instanceof MyLocation) {
            MyLocation myLocation = (MyLocation) msg.obj;
            mMainApplication.mIsGpsLocated = myLocation.isGpsLocated();
            mMainApplication.mMyLocation = new MyLocation(
              myLocation.isGpsLocated(),
              myLocation.getLongitude(),
              myLocation.getLatitude(),
              myLocation.getDirection(),
              myLocation.getAccuracy(),
              myLocation.getLocalLongitude(),
              myLocation.getmLocalLatitude());
          }
          break;
        case MY_MSG_MODULE:
          analyzeData(msg);
          break;
        case MY_MSG_EXIT:
          mMainApplication.onDestroy();
          break;
        default:
          super.handleMessage(msg);
      }
    }

    private void analyzeData(Message message) {
      Object obj = message.obj;
      if (!(obj instanceof MyModule)) {
        return;
      }

      MyModule myModule = (MyModule) message.obj;
      String info = myModule.getInfo();
      if (isNullOrEmpty(info)) {
        return;
      }

      JSONObject object;
      String packageName;
      JSONArray dataArray;
      try {
        object = new JSONObject(info);
        packageName = object.getString("packageName");
        dataArray = object.getJSONArray("data");

        PackageInfo packageInfo = getPackageInfo(mMainApplication);
        if (packageInfo == null) {
          return;
        }

        if (packageInfo.packageName.equals(packageName)) {
          return;
        }

        for (int i = 0; i < dataArray.length(); i++) {
          String str = dataArray.getString(i);
          if (str.startsWith(MyModule.PUSH_MESSAGE) && str.contains(MyModule.SEPARATOR)) {
            int index = str.indexOf(MyModule.SEPARATOR);
            parsePushMessage(str.substring(index + 1));
          } else if (str.startsWith(MyModule.CLEAR_CACHE)) {
            clearCache();
          } else if (str.startsWith(MyModule.RESTORE_FACTORY)) {
            restoreFactory();
          } else if (str.startsWith(MyModule.PHOTO_QUALITY)) {
            handlePhotoQuality(str);
          } else if (str.startsWith(MyModule.OUTER_NETWORK)) {
            handleOuterNetwork(str);
          } else if (str.startsWith(MyModule.GPS_NOT_OPENED)) {

          } else if (str.startsWith(MyModule.LOGOUT_SUB_SYSTEM)) {
            logoutSubSystem();
          }
        }
      } catch (Exception e) {
        e.printStackTrace();
      }
    }

    private void parsePushMessage(String info) throws Exception {
      if (isNullOrEmpty(info)) {
        return;
      }

      final String messageType = "type";
      final String messageContent = "content";
      final int newTask = 201;
      final int updateTaskState = 202;

      JSONObject jsonObject = new JSONObject(info);
      if (jsonObject.isNull(messageType)
        || jsonObject.isNull(messageContent)
        || jsonObject.getInt(messageType) != newTask) {
        return;
      }

      if (mMainApplication.mOnAidlListener != null) {
        mMainApplication.mOnAidlListener.handlePushMessage(info);

        try {
          JSONObject jsObject = new JSONObject();
          jsObject.put(MyModule.PACKAGE_NAME, mMainApplication.getPackageName());
          jsObject.put(MyModule.ACTIVITY_NAME, mMainApplication.getPackageName());

          JSONArray jsonArray = new JSONArray();
          jsonArray.put(String.format(Locale.CHINESE, "%s%s%s", MyModule.POPUP_MESSAGE, MyModule.SEPARATOR, info));
          jsObject.put(MyModule.DATA, jsonArray);

          mMainApplication.mainService.setMyModule(new MyModule(jsObject.toString()));
        } catch (Exception e) {
          e.printStackTrace();
        }
      }

      //int type = jsonObject.optInt(messageType);
      //JSONArray jsonArray = jsonObject.optJSONArray(messageContent);
//      Observable<Boolean> observable =
//        mMainApplication.mDataManager.saveMessage(type == newTask, jsonArray);
//      if (observable == null) {
//        return;
//      }
//
//      observable.subscribeOn(Schedulers.io()).
//        subscribe(new Subscriber<Boolean>() {
//          @Override
//          public void onCompleted() {
//            LogUtil.i(TAG, "parseMqtt completed");
//          }
//
//          @Override
//          public void onError(Throwable e) {
//            LogUtil.e(TAG, e.toString());
//          }
//
//          @Override
//          public void onNext(Boolean aBoolean) {
//            LogUtil.i(TAG, "parseMqtt onNext:" + aBoolean);
//          }
//        });
    }

    private void clearCache() {
      if (mMainApplication.mOnAidlListener != null) {
        mMainApplication.mOnAidlListener.clearCache();
      }
    }

    private void restoreFactory() {
      if (mMainApplication.mOnAidlListener != null) {
        mMainApplication.mOnAidlListener.restoreFactory();
      }
    }

    private void handlePhotoQuality(String info) {
      if (mMainApplication.mOnAidlListener != null && !isNullOrEmpty(info)) {
        mMainApplication.mOnAidlListener.handlePhotoQuality(info);
      }
    }

    private void handleOuterNetwork(String info) {
      if (mMainApplication.mOnAidlListener != null && !isNullOrEmpty(info)) {
        mMainApplication.mOnAidlListener.handleOuterNetwork(info);
      }
    }

    private void logoutSubSystem() {
      try {
        Log.i(TAG, "logoutSubSystem");
        JSONObject jsonObject = new JSONObject();
        jsonObject.put(MyModule.PACKAGE_NAME, mMainApplication.getPackageName());
        jsonObject.put(MyModule.ACTIVITY_NAME, mMainApplication.getPackageName());

        JSONArray jsonArray = new JSONArray();
        jsonArray.put(MyModule.LOGOUT_MAIN_SYSTEM);
        jsonObject.put(MyModule.DATA, jsonArray);

        mMainApplication.mainService.setMyModule(new MyModule(jsonObject.toString()));
      } catch (Exception e) {
        e.printStackTrace();
      }

      if (mMainApplication.mActivityList != null) {
        for (Activity activity : mMainApplication.mActivityList) {
          activity.finish();
        }
      }
    }
  }

  public void onDestroy() {
    Log.i(TAG, "---onDestroy---");

    unbindHostService();
    System.exit(0);
  }

  /***
   * Android L (lollipop, API 21) introduced a new problem when trying to invoke implicit intent,
   * "java.lang.IllegalArgumentException: Service Intent must be explicit"
   * <p/>
   * If you are using an implicit intent, and know only 1 target would answer this intent,
   * This method will help you turn the implicit intent into the explicit form.
   * <p/>
   * Inspired from SO answer: http://stackoverflow.com/a/26318757/1446466
   *
   * @param context
   * @param implicitIntent - The original implicit intent
   * @return Explicit Intent created from the implicit original intent
   */
  private static Intent createExplicitFromImplicitIntent(Context context, Intent implicitIntent) {
    // Retrieve all services that can match the given intent
    PackageManager pm = context.getPackageManager();
    List<ResolveInfo> resolveInfo = pm.queryIntentServices(implicitIntent, 0);

    // Make sure only one match was found
    if (resolveInfo == null || resolveInfo.size() != 1) {
      return null;
    }

    // Get component info and create ComponentName
    ResolveInfo serviceInfo = resolveInfo.get(0);
    String packageName = serviceInfo.serviceInfo.packageName;
    String className = serviceInfo.serviceInfo.name;
    ComponentName component = new ComponentName(packageName, className);

    // Create a new intent. Use the old one for extras and such reuse
    Intent explicitIntent = new Intent(implicitIntent);

    // Set the component to be explicit
    explicitIntent.setComponent(component);

    return explicitIntent;
  }

  private static PackageInfo getPackageInfo(Context context) {
    try {
      PackageManager manager = context.getPackageManager();
      PackageInfo info = manager.getPackageInfo(context.getPackageName(), 0);
      return info;
    } catch (Exception e) {
      e.printStackTrace();
      return null;
    }
  }

  private static boolean isNullOrEmpty(String text) {
    return text == null || text.length() == 0;
  }

}
