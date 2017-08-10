package cordova.plugin.MyPlugin;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by zangwei on 2017/8/8.
 */

public class MyLocation {
  private double lng;
  private double lat;

  public MyLocation(double lng, double lat) {
    this.lng = lng;
    this.lat = lat;
  }

  public double getLng() {
    return lng;
  }

  public void setLng(double lng) {
    this.lng = lng;
  }

  public double getLat() {
    return lat;
  }

  public void setLat(double lat) {
    this.lat = lat;
  }

  public JSONObject toJson() throws JSONException {
    JSONObject jsonObject = new JSONObject();
    jsonObject.put("lng", this.lng);
    jsonObject.put("lat", this.lat);
    return jsonObject;
  }
}
