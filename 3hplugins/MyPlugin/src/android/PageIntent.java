package cordova.plugin.MyPlugin;


import org.json.JSONException;
import org.json.JSONObject;

public class PageIntent {
  private String account;
  private String password;
  private int userId;
  private String userName;
  private String departmentAndId; // '...#...'
  private String roles; // '1,2,3,....'
  private String params; // 'page#...'
  private String accessToken;
  private String extendedInfo;

//  public PageIntent() {
//    this.account = "ss1";
//    this.userId = 3;
//    this.userName = "ss1";
//    this.departmentAndId = "上水#1";
//    this.roles = "worker";
//    this.params = "MyWorkPage";
//    this.accessToken = "123456";
//  }


  public PageIntent(String account, String password, int userId, String userName, String departmentAndId, String roles, String params, String accessToken, String extendedInfo) {
    this.account = account;
    this.password = password;
    this.userId = userId;
    this.userName = userName;
    this.departmentAndId = departmentAndId;
    this.roles = roles;
    this.params = params;
    this.accessToken = accessToken;
    this.extendedInfo = extendedInfo;
  }

  public String getAccount() {
    return account;
  }

  public void setAccount(String account) {
    this.account = account;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
  }

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public String getDepartmentAndId() {
    return departmentAndId;
  }

  public void setDepartmentAndId(String departmentAndId) {
    this.departmentAndId = departmentAndId;
  }

  public String getRoles() {
    return roles;
  }

  public void setRoles(String roles) {
    this.roles = roles;
  }

  public String getParams() {
    return params;
  }

  public void setParams(String params) {
    this.params = params;
  }

  public String getAccessToken() {
    return accessToken;
  }

  public void setAccessToken(String accessToken) {
    this.accessToken = accessToken;
  }

  public String getExtendedInfo() {
    return extendedInfo;
  }

  public void setExtendedInfo(String extendedInfo) {
    this.extendedInfo = extendedInfo;
  }

  public JSONObject toJson() throws JSONException {
    JSONObject jsonObject = new JSONObject();
    jsonObject.put("account", this.account != null ? this.account : "");
    jsonObject.put("password", this.password != null ? this.password : "");
    jsonObject.put("userId", this.userId);
    jsonObject.put("userName", this.userName != null ? this.account : "");
    jsonObject.put("departmentAndId", this.departmentAndId != null ? this.departmentAndId : "");
    jsonObject.put("roles", this.roles != null ? this.roles : "");
    jsonObject.put("params", this.params != null ? this.params : "");
    jsonObject.put("accessToken", this.accessToken != null ? this.accessToken : "");
    jsonObject.put("extendedInfo", this.extendedInfo != null ? this.extendedInfo : "");
    return jsonObject;
  }
}
