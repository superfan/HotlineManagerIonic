/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package io.ionic.starter;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;

import org.apache.cordova.*;

import io.ionic.MainApplication;


public class MainActivity extends CordovaActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    Log.i("MainActivity","onCreate");
    // enable Cordova apps to be started in the background
    Bundle extras = getIntent().getExtras();
    if (extras != null && extras.getBoolean("cdvStartInBackground", false)) {
      moveTaskToBack(true);
    }

    // Set by <content src="index.html" /> in config.xml
    loadUrl(launchUrl);

    MainApplication mainApplication = ((MainApplication)getApplication());
    Intent intent = getIntent();
    if (savedInstanceState != null) {
      Log.i("MainActivity","savedInstanceState");
      mainApplication.setBundle(savedInstanceState);
    } else if (intent != null) {
      Log.i("MainActivity","intent");
      mainApplication.setBundle(intent.getExtras());
    } else {
      Log.i("MainActivity","null");
      mainApplication.setBundle(null);
    }

    mainApplication.bindHostService();
  }

  @Override
  protected void onNewIntent(Intent intent) {
    Log.i("MainActivity","onNewIntent");
    MainApplication mainApplication = ((MainApplication)getApplication());
    mainApplication.setBundle(intent.getExtras());
  }

  @Override
  protected void onSaveInstanceState(Bundle outState) {
    super.onSaveInstanceState(outState);
    Log.i(TAG, "---onSaveInstanceState---");
  }
}
