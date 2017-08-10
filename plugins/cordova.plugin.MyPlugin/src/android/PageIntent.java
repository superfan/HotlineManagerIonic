package cordova.plugin.MyPlugin;


import org.json.JSONException;
import org.json.JSONObject;

public class PageIntent {
  private String account;
  private int userId;
  private String userName;
  private String departmentAndId; // '...#...'
  private String role; // '1,2,3,....'
  private String params; // 'page#...'
  private String accessToken;

  public PageIntent() {
    this.account = "ss1";
    this.userId = 3;
    this.userName = "ss1";
    this.departmentAndId = "上水#1";
    this.role = "worker";
    this.params = "MyWorkPage";
    this.accessToken = "123456";
  }

  public PageIntent(String account, int userId, String userName, String departmentAndId, String role, String params, String accessToken) {
    this.account = account;
    this.userId = userId;
    this.userName = userName;
    this.departmentAndId = departmentAndId;
    this.role = role;
    this.params = params;
    this.accessToken = accessToken;
  }

  public String getAccount() {
    return account;
  }

  public void setAccount(String account) {
    this.account = account;
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

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
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

  public JSONObject toJson() throws JSONException {
    JSONObject jsonObject = new JSONObject();
    jsonObject.put("account", this.account);
    jsonObject.put("userId", this.userId);
    jsonObject.put("userName", this.userName);
    jsonObject.put("departmentAndId", this.departmentAndId);
    jsonObject.put("role", this.role);
    jsonObject.put("params", this.params);
    jsonObject.put("accessToken", this.accessToken);
    return jsonObject;
  }
}
