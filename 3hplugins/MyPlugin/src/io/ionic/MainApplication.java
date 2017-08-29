package io.ionic;


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
import android.util.Log;

import com.sh3h.ipc.IRemoteServiceCallback;
import com.sh3h.ipc.location.MyLocation;
import com.sh3h.ipc.module.MyModule;
import com.sh3h.ipc.IMainService;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.List;

public class MainApplication extends Application {
  private static final String TAG = "MainApplication";
  private static final String HOST_SERVICE_NAME = "com.sh3h.mainshell.service.HostService";
  private static final String BINDING_NAME = "bindingName";

  private IMainService mainService;
  private boolean mIsGpsLocated;
  private MyLocation mMyLocation;
  private Bundle mBundle;

  @Override
  public void onCreate() {
    super.onCreate();

    CrashHandler crashHandler = CrashHandler.getInstance();
    crashHandler.init(this);
  }

  public void setBundle(Bundle bundle) {
    mBundle = bundle;
  }

  public Bundle getBundle() {
    return mBundle;
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

  public boolean isGpsLocated() {
    return mIsGpsLocated;
  }

  public double getLongitude() {
    return mMyLocation != null ? mMyLocation.getLongitude() : 0;
  }

  public double getLatitude() {
    return mMyLocation != null ? mMyLocation.getLatitude() : 0;
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
              myLocation.getAccuracy());
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
          if (str.startsWith(MyModule.MQTT) && str.contains(MyModule.SEPARATOR)) {
            int index = str.indexOf(MyModule.SEPARATOR);
            parseMqtt(str.substring(index + 1));
          }
        }
      } catch (Exception e) {
        e.printStackTrace();
      }
    }

    private void parseMqtt(String info) throws Exception {
      if (isNullOrEmpty(info)) {
        return;
      }

      final String messageType = "type";
      final String messageContent = "content";
      final int newTask = 201;
      final int updateTaskState = 202;

      JSONObject jsonObject = new JSONObject(info);
      if (jsonObject.isNull(messageType) || jsonObject.isNull(messageContent)) {
        return;
      }

      int type = jsonObject.optInt(messageType);
      JSONArray jsonArray = jsonObject.optJSONArray(messageContent);
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
