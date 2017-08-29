import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import {SQLitePorter} from '@ionic-native/sqlite-porter';
import {GlobalService} from "./GlobalService";
import {FileService} from "./FileService";
import {Word} from "../model/Word";
import {Task} from "../model/Task";
import {TaskDetail} from "../model/TaskDetail";
import {History} from "../model/History";
import {Media} from "../model/Media";
import {Material} from "../model/Material";
import {DataMaterialInfo} from "../model/MaterialsInfo";
import {MaintainInfo} from "../model/MaintainInfo";

interface LocalWord {
  ID: number;
  I_WID: number;
  S_WNAME: string;
  S_WVALUE: string;
  S_WVALUEEX: string;
  S_WGROUP: string;
  I_WPARENTID: number;
  S_WREMARK: string;
  S_WISACTIVE: string
}

interface LocalMaterial {
  ID: number;
  I_MID: number;
  I_PARENTID: number;
  S_GROUPKEY: string;
  S_KEY: string;
  S_NAME: string;
}

interface LocalMaterialInfo {
  ID: number;
  I_USERID: number;
  S_TASKID: string;
  S_INFOS: string;
  I_UPLOADEDFLAG: number
}

interface LocalMaintainInfo {
  ID: number;
  S_TASKID: string;
  S_TYPE: string;
  S_ADDRESS: string;
  S_AREA: string;
  S_CONTENT: string;
  S_REMARK: string;
}

interface LocalTask {
  ID: number;
  I_USERID: number;
  S_TASKID: string;
  S_TASKTYPE: string;
  S_DESC: string;
  S_SOURCE: string;
  D_CREATETIME: number;
  D_ASSGINTIME: number;
  D_ACCEPTTIME: number;
  D_GOTIME: number;
  D_ARRIVEDTIME: number;
  D_REPLYTIME: number;
  D_COMPLETEDTIME: number;
  I_STATE: number;
  S_LNGLATTYPE: string;
  S_LONGITUDE: string;
  S_LATITUDE: string;
  S_EXTENDEDINFO: string;
}

interface LocalTaskDetail {
  ID: number;
  S_TASKID: string;
  S_DETAILINFO: string;
  S_EXTENDEDINFO: string;
}

interface LocalHistory {
  ID: number;
  I_USERID: number;
  S_TASKID: string;
  I_STATE: number;
  S_CONTENT: string;
  S_REPLY: string;
  I_UPLOADEDFLAG: number;
  S_EXTENDEDINFO: string;
}

interface HistoryExtendedInfo {
  taskDetail?: TaskDetail;
  mediaNames?: string;
}

interface LocalMedia {
  ID: number;
  I_USERID: number;
  S_TASKID: string;
  I_FILETYPE: number;
  S_FILENAME: string;
  I_UPLOADEDFLAG: number;
  S_FILEID: string;
  S_EXTENDEDINFO: string;
}

@Injectable()
export class DbService {
  private readonly dbName: string = 'main.db';
  //private readonly dbVersion: string = '1.0';
  private readonly paramError: string = 'param is error';
  private dbPath: string;

  constructor(private sqlite: SQLite,
              private sqlitePorter: SQLitePorter,
              private globalService: GlobalService,
              private fileService: FileService) {
  }

  /**
   * 初始化
   * @returns {Promise<boolean>}
   */
  public init(): Promise<boolean> {
    if (this.globalService.isChrome) {
      this.dbPath = this.dbName;
      return Promise.resolve(true);
    } else {
      this.dbPath = `${this.fileService.getDbDir()}/${this.dbName}`;
      return this.createTables()
        .then(result => this.updateTables());
    }
  }

  /**
   * 销毁
   */
  public destroy(): void {
    if (this.globalService.isChrome) {

    } else {

    }
  }

  /**
   * 保存词语信息
   * @param words
   * @returns {any}
   */
  public saveWords(words: Array<Word>): Promise<boolean> {
    if (this.globalService.isChrome || !words || words.length <= 0) {
      return Promise.resolve(false);
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = `DELETE FROM GD_WORDS;`;
          for (let word of words) {
            sql += this.toWordInsertSql(word);
          }
          return this.sqlitePorter.importSqlToDb(db, sql);
        });
    }
  }

  /**
   * 保存材料信息
   * @param materials
   * @returns {any}
   */
  public saveMaterials(materials: Array<Material>): Promise<boolean> {
    if (this.globalService.isChrome || !materials || materials.length <= 0) {
      return Promise.resolve(false);
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = `DELETE FROM GD_MATERIALS;`;
          for (let material of materials) {
            sql += this.toMaterialInsertSql(material);
          }
          return this.sqlitePorter.importSqlToDb(db, sql);
        })
    }
  }

  /**
   * 保存维修信息
   * @param maintainInfo
   * @returns {any}
   */
  public saveMaintainInfo(maintainInfo: MaintainInfo): Promise<boolean> {
    if (this.globalService.isChrome || !maintainInfo) {
      return Promise.resolve(false);
    } else {
      return this.openDb()
        .then(db => {
          let sql: string;
          sql = this.toMaintainInfoInsertSql(maintainInfo);
          return this.sqlitePorter.importSqlToDb(db, sql);
        })
    }
  }

  /**
   * 查询维修信息
   * @param taskId
   * @returns {any}
   */
  public queryMaintainInfo(taskId: string): Promise<MaintainInfo> {
    if (this.globalService.isChrome || !taskId) {
      return Promise.reject(this.paramError);
    } else {
      return this.openDb()
        .then(db => {
          let selectSql: string = `SELECT * FROM GD_MAINTAININFO WHERE S_TASKID = '${taskId}';`;
          return db.executeSql(selectSql, {})
            .then(data => {
              let rows: any = data.rows;
              let maintainInfo: MaintainInfo;
              if (rows && rows.length == 1) {
                let localMaintainInfo: LocalMaintainInfo = rows.item(0) as LocalMaintainInfo;
                maintainInfo = this.toMaintainInfo(localMaintainInfo);
              }
              return maintainInfo ? Promise.resolve(maintainInfo) : Promise.reject('no maintainInfo');
            })
        })
    }
  }

  /**
   * 材料清单保存至本地
   * @param materialInfo
   * @returns {any}
   */
  public saveMaterialInfo(materialInfo: DataMaterialInfo): Promise<boolean> {
    if (!materialInfo || !materialInfo.taskId || materialInfo.infos.length <= 0) {
      return Promise.resolve(false);
    } else {
      return this.openDb()
        .then(db => {
          let selectSql: string = `SELECT * FROM GD_MATERIALINFO WHERE S_TASKID = '${materialInfo.taskId}';`;
          let sql: string;
          return db.executeSql(selectSql, {})
            .then(data => {
              let rows: any = data.rows;
              if (rows && rows.length > 0) {
                sql = this.toMaterialInfoUpdateSql(materialInfo);
              } else {
                sql = this.toMaterialInfoInsertSql(materialInfo);
              }
              return this.sqlitePorter.importSqlToDb(db, sql);
            })
            .catch(error => {
              console.log(error);
            })
        })
    }
  }

  /**
   * 材料清单更新上传标志
   * @param materialInfo
   * @returns {any}
   */
  public updateFlagMaterials(materialInfo: DataMaterialInfo): Promise<boolean> {
    if (!materialInfo || !materialInfo.taskId || materialInfo.infos.length <= 0) {
      return Promise.resolve(false);
    } else {
      return this.openDb()
        .then(db => {
          materialInfo.uploadFlag = this.globalService.uploadedFlagForUploaded;
          let sql = this.toMaterialInfoUpdateSql(materialInfo);
          return this.sqlitePorter.importSqlToDb(db, sql);
        })
    }
  }

  /**
   * 获取材料
   * @param group
   */
  public getMaterials(groupKey: string): Promise<Array<Material>> {
    if (this.globalService.isChrome || !groupKey) {
      return Promise.reject(this.paramError);
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = `SELECT * FROM GD_MATERIALS WHERE S_GROUPKEY = '${groupKey}';`;
          return db.executeSql(sql, {})
            .then(data => {
              let rows: any = data.rows;
              let materials: Array<Material> = [];
              if (rows && rows.length > 0) {
                for (let i = 0; i < rows.length; i++) {
                  let localMaterial: LocalMaterial = rows.item(i) as LocalMaterial;
                  if (!localMaterial) {
                    continue;
                  }
                  materials.push(this.toMaterial(localMaterial));
                }
              }
              return materials.length ? Promise.resolve(materials) : Promise.reject('no materials');
            });
        })
    }
  }

  public getMaterialsCount(): Promise<number> {
    if (this.globalService.isChrome) {
      return Promise.resolve(0);
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = `SELECT COUNT(*) FROM GD_WORDS;`;
          return db.executeSql(sql, {})
            .then(data => data.rows && data.rows.length > 0 ? data.rows.item(0)["COUNT(*)"] : 0);
        });
    }
  }

  /**
   * 根据id查询材料信息
   * @param mid
   * @returns {any}
   */
  public getMaterial(mid: number): Promise<Material> {
    if (this.globalService.isChrome || !mid) {
      return Promise.reject(this.paramError);
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = `SELECT * FROM GD_MATERIALS WHERE I_MID =${mid};`;
          return db.executeSql(sql, {})
            .then(data => {
              let rows: any = data.rows;
              let result: Material;
              if (rows && rows.length == 1) {
                result = this.toMaterial(rows.item(0) as LocalMaterial);
              }
              return result ? Promise.resolve(result) : Promise.reject('no material');
            });
        })
    }
  }

  /**
   * 查询材料清单
   * @param taskId
   * @returns {any}
   */
  public getMaterialInfo(taskId: string): Promise<DataMaterialInfo> {
    if (this.globalService.isChrome || !taskId) {
      return Promise.reject(this.paramError);
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = `SELECT * FROM GD_MATERIALINFO WHERE S_TASKID = '${taskId}';`;
          return db.executeSql(sql, {})
            .then(data => {
              let rows: any = data.rows;
              let result: DataMaterialInfo;
              if (rows && rows.length == 1) {
                let localMaterialInfo: LocalMaterialInfo = rows.item(0) as LocalMaterialInfo;
                if (localMaterialInfo) {
                  result = this.toMaterialInfo(localMaterialInfo);
                }
              }
              return result ? Promise.resolve(result) : Promise.reject('no materialInfo');
            })
        })
    }
  }

  private toMaterialInfo(localMaterialInfo: LocalMaterialInfo): DataMaterialInfo {
    return {
      taskId: localMaterialInfo.S_TASKID,
      infos: JSON.parse(localMaterialInfo.S_INFOS),
      uploadFlag: localMaterialInfo.I_UPLOADEDFLAG
    }
  }

  /**
   * 获取词语
   * @param group
   * @returns {any}
   */
  public getWords(group: string): Promise<Array<Word>> {
    if (this.globalService.isChrome || !group) {
      return Promise.reject(this.paramError);
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = `SELECT * FROM GD_WORDS WHERE S_WGROUP = '${group}';`;
          return db.executeSql(sql, {})
            .then(data => {
              let rows: any = data.rows;
              let words: Array<Word> = [];
              if (rows && rows.length > 0) {
                for (let i = 0; i < rows.length; i++) {
                  let localWord: LocalWord = rows.item(i) as LocalWord;
                  if (!localWord) {
                    continue;
                  }
                  words.push(this.toWord(localWord));
                }
              }
              return words.length ? Promise.resolve(words) : Promise.reject('no words');
            });
        });
    }
  }

  /**
   * 获取词语数目
   * @returns {any}
   */
  public getWordsCount(): Promise<number> {
    if (this.globalService.isChrome) {
      return Promise.resolve(0);
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = `SELECT COUNT(*) FROM GD_WORDS;`;
          return db.executeSql(sql, {})
            .then(data => data.rows && data.rows.length > 0 ? data.rows.item(0)["COUNT(*)"] : 0);
        });
    }
  }


  /**
   * 保存任务列表
   * @param userId
   * @param serverTasks
   * @returns {any}
   */
  public saveTasks(userId: number, serverTasks: Array<Task>): Promise<any> {
    if (this.globalService.isChrome || !serverTasks || serverTasks.length <= 0) {
      return Promise.reject(this.paramError);
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = `SELECT * FROM GD_TASKS WHERE I_USERID = ${userId};`;
          return db.executeSql(sql, {})
            .then(data => {
              let rows: any = data.rows;
              let sql: string = '';
              if (rows && rows.length > 0) {
                for (let serverTask of serverTasks) {
                  let foundLocalTask: LocalTask;
                  for (let i = 0; i < rows.length; i++) {
                    let localTask: LocalTask = rows.item(i) as LocalTask;
                    if (!localTask || !localTask.S_TASKID) {
                      continue;
                    }

                    if (localTask.S_TASKID === serverTask.taskId) {
                      foundLocalTask = localTask;
                      break;
                    }
                  }

                  if (foundLocalTask) { // update
                    sql += this.toTaskUpdateSql(serverTask, foundLocalTask);
                  } else { // insert
                    sql += this.toTaskInsertSql(serverTask);
                  }
                }
              } else {
                for (let task of serverTasks) {
                  sql += this.toTaskInsertSql(task);
                }
              }

              return sql && sql.length > 0 ? this.sqlitePorter.importSqlToDb(db, sql) : Promise.reject('failure to saveTasks');
            });
        });
    }
  }

  /**
   * 保存任务
   * @param task
   * @returns {any}
   */
  public saveTask(task: Task): Promise<any> {
    if (this.globalService.isChrome || !task) {
      return Promise.reject(this.paramError);
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = this.toTaskUpdateSql(task);
          return sql && sql.length > 0 ? db.executeSql(sql, {}) : Promise.reject('failure to saveTask');
        });
    }
  }

  /**
   * 获取任务
   * @param userId
   * @param since
   * @param count
   * @param states
   * @param key
   * @returns {any}
   */
  public getTasks(userId: number, since: number, count: number, states?: Array<number>, key?: string): Promise<Array<Task>> {
    if (this.globalService.isChrome) {
      return Promise.reject(this.paramError);
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = `SELECT * FROM GD_TASKS WHERE I_USERID = ${userId}`;
          if (states && states.length > 0) {
            sql += ` AND I_STATE IN (${states.join(',')})`;
          }
          if (key) {
            sql += ` AND S_TASKID LIKE '%${key}%'`;
          }
          sql += ` ORDER BY ID LIMIT ${count} OFFSET ${since};`;
          return db.executeSql(sql, {})
            .then(data => {
              let rows: any = data.rows;
              let tasks: Array<Task> = [];
              if (rows && rows.length > 0) {
                for (let i = 0; i < rows.length; i++) {
                  let localTask: LocalTask = rows.item(i) as LocalTask;
                  if (!localTask || !localTask.S_TASKID) {
                    continue;
                  }
                  tasks.push(this.toTask(localTask));
                }
              }
              return Promise.resolve(tasks);
            });
        });
    }
  }

  /**
   * 获取任务数
   * @param userId
   * @returns {any}
   */
  public getTaskCount(userId: number): Promise<number> {
    if (this.globalService.isChrome) {
      return Promise.reject(this.paramError);
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = `SELECT COUNT(*) FROM GD_TASKS WHERE I_USERID = ${userId};`;
          return db.executeSql(sql, {})
            .then(data => {
              return Promise.resolve(data);
            });
        });
    }
  }

  /**
   * 保存任务详情
   * @param taskDetail
   * @returns {any}
   */
  public saveTaskDetail(taskDetail: TaskDetail): Promise<boolean> {
    if (this.globalService.isChrome || !taskDetail) {
      return Promise.reject(this.paramError);
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = `SELECT * FROM GD_TASKDETAILS WHERE S_TASKID = '${taskDetail.taskId}';`;
          return db.executeSql(sql, {})
            .then(data => {
              let rows: any = data.rows;
              let sql: string;
              if (rows && rows.length > 0) { // update
                sql = this.toTaskDetailUpdateSql(taskDetail);
              } else { // insert
                sql = this.toTaskDetailInsertSql(taskDetail);
              }
              return db.executeSql(sql, {});
            });
        });
    }
  }

  /**
   * 获取任务详情
   * @param taskId
   * @returns {any}
   */
  public getTaskDetail(taskId: string): Promise<TaskDetail> {
    if (this.globalService.isChrome || !taskId) {
      return Promise.reject(this.paramError);
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = `SELECT * FROM GD_TASKDETAILS WHERE S_TASKID = '${taskId}';`;
          return db.executeSql(sql, {})
            .then(data => {
              let rows: any = data.rows;
              let taskDetail: TaskDetail;
              if (rows && rows.length > 0) {
                for (let i = 0; i < rows.length; i++) {
                  let localTaskDetail: LocalTaskDetail = rows.item(i) as LocalTaskDetail;
                  if (!localTaskDetail || !localTaskDetail.S_TASKID) {
                    continue;
                  }
                  taskDetail = this.toTaskDetail(localTaskDetail);
                }
              }
              return Promise.resolve(taskDetail);
            });
        });
    }
  }

  /**
   * 获取无详细信息的taskId列表
   * @param userId
   * @returns {any}
   */
  public getNoDetailTaskIds(userId: number): Promise<Array<string>> {
    if (this.globalService.isChrome) {
      return Promise.reject(this.paramError);
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = `SELECT S_TASKID FROM GD_TASKS WHERE I_USERID = ${userId} AND S_TASKID NOT IN (SELECT S_TASKID FROM GD_TASKDETAILS);`;
          return db.executeSql(sql, {})
            .then(data => {
              let rows: any = data.rows;
              let taskIds: Array<string> = [];
              if (rows && rows.length > 0) {
                for (let i = 0; i < rows.length; i++) {
                  let item: any = rows.item(i);
                  if (item.hasOwnProperty('S_TASKID') && item['S_TASKID']) {
                    taskIds.push(item['S_TASKID']);
                  }
                }
              }
              return Promise.resolve(taskIds);
            });
        });
    }
  }

  /**
   * 保存每次操作到历史表
   * @param history
   * @returns {any}
   */
  public saveHistory(history: History): Promise<boolean> {
    if (this.globalService.isChrome || !history) {
      return Promise.reject(this.paramError);
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = `SELECT * FROM GD_HISTORIES WHERE I_USERID = ${history.userId} AND S_TASKID = '${history.taskId}' AND I_STATE = ${history.state} ORDER BY ID;`;
          return db.executeSql(sql, {})
            .then(data => {
              let rows: any = data.rows;
              let sql;
              if (rows && rows.length > 0) {
                //let localHistory: LocalHistory = rows.item(0) as LocalHistory;
                sql = this.toHistoryUpdateSql(history);
              } else {
                sql = this.toHistoryInsertSql(history);
              }
              return db.executeSql(sql, {});
            });
        });
    }
  }

  /**
   * 获取历史记录
   * @param userId
   * @param taskId
   * @param states
   * @param uploadedFlags
   * @param key
   * @param since
   * @param count
   * @returns {any}
   */
  public getHistories(userId: number, taskId?: string, states?: Array<number>, uploadedFlags?: Array<number>,
                      key?: string, since?: number, count?: number): Promise<Array<History>> {
    if (this.globalService.isChrome) {
      return Promise.reject(this.paramError);
    } else {
      return this.openDb()
        .then(db => {
          let sql = `SELECT * FROM GD_HISTORIES WHERE I_USERID = ${userId}`;
          if (taskId != undefined && taskId != null) {
            sql += ` AND S_TASKID = '${taskId}'`;
          }

          if (states && states.length > 0) {
            sql += ` AND I_STATE IN (${states.join(',')})`;
          }

          if (uploadedFlags && uploadedFlags.length > 0) {
            sql += ` AND I_UPLOADEDFLAG IN (${uploadedFlags.join(',')})`;
          }

          if (key) {
            sql += ` AND S_TASKID LIKE '%${key}%'`;
          }

          if (since !== undefined && since !== null && count !== undefined && count !== null) {
            sql += ` ORDER BY ID LIMIT ${count} OFFSET ${since};`;
          } else {
            sql += ' ORDER BY ID;';
          }
          return db.executeSql(sql, {});
        })
        .then(data => {
          let rows: any = data.rows;
          let histories: Array<History> = [];
          if (rows && rows.length > 0) {
            for (let i = 0; i < rows.length; i++) {
              let localHistory: LocalHistory = rows.item(i) as LocalHistory;
              if (!localHistory) {
                continue;
              }
              histories.push(this.toHistory(localHistory));
            }
          }
          return Promise.resolve(histories);
        });
    }
  }

  /**
   *
   * @param userId
   * @param taskIds
   * @param state
   * @param uploadedFlags
   * @returns {any}
   */
  public getSpecialHistories(userId: number, taskIds: Array<string>, state?: number, uploadedFlags?: Array<number>): Promise<Array<History>> {
    if (this.globalService.isChrome || !taskIds || taskIds.length <= 0) {
      return Promise.resolve([]);
    } else {
      return this.openDb()
        .then(db => {
          let ids: Array<string> = taskIds.map(id => `\'${id}\'`);
          let sql = `SELECT * FROM GD_HISTORIES WHERE I_USERID = ${userId} AND S_TASKID IN (${ids.join(',')})`;
          if (state !== undefined && state !== null) {
            sql += ` AND I_STATE = ${state}`;
          }

          if (uploadedFlags && uploadedFlags.length > 0) {
            sql += ` AND I_UPLOADEDFLAG IN (${uploadedFlags.join(',')})`;
          }

          sql += ` ORDER BY ID;`;
          return db.executeSql(sql, {});
        })
        .then(data => {
          let rows: any = data.rows;
          let histories: Array<History> = [];
          if (rows && rows.length > 0) {
            for (let i = 0; i < rows.length; i++) {
              let localHistory: LocalHistory = rows.item(i) as LocalHistory;
              if (!localHistory) {
                continue;
              }
              histories.push(this.toHistory(localHistory));
            }
          }
          return Promise.resolve(histories);
        });
    }
  }

  /**
   * 销单删除任务及详情
   * @param userId
   * @param taskId
   * @returns {any}
   */
  // public deleteTaskAndDetail(userId: number, taskId: string) {
  //   if (this.globalService.isChrome) {
  //     return Promise.reject('chrome');
  //   } else {
  //     return this.openDb()
  //       .then(db => {
  //         let sql = `DELETE FROM GD_TASKS WHERE I_USERID = ${userId} AND S_TASKID = '${taskId}';`
  //           + `DELETE FROM GD_TASKDETAILS WHERE S_TASKID = '${taskId}';`;
  //         return this.sqlitePorter.importSqlToDb(db, sql);
  //       });
  //   }
  // }

  /**
   * 保存多媒体信息
   * @param media
   * @returns {any}
   */
  public saveMedia(media: Media): Promise<boolean> {
    if (this.globalService.isChrome || !media) {
      return Promise.reject(this.paramError);
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = `SELECT * FROM GD_MULTIMEDIAS WHERE I_USERID = ${media.userId} AND S_TASKID = '${media.taskId}' AND I_FILETYPE = ${media.fileType} AND S_FILENAME = '${media.fileName}';`;
          return db.executeSql(sql, {})
            .then(data => {
              let rows: any = data.rows;
              if (rows && rows.length > 0) {
                let localMedia: LocalMedia = rows[0] as LocalMedia;
                sql = this.toMediaUpdateSql(media, localMedia);
              } else {
                sql = this.toMediaInsertSql(media);
              }
              return db.executeSql(sql, {});
            });
        });
    }
  }

  /**
   * 获取多媒体列表
   * @param userId
   * @param taskId
   * @param fileNames
   * @param uploadedFlags
   * @returns {any}
   */
  public getMediaList(userId: number, taskId: string, fileNames: Array<string>, uploadedFlags?: Array<number>): Promise<Array<Media>> {
    if (this.globalService.isChrome || !taskId) {
      return Promise.reject(this.paramError);
    } else if (fileNames.length <= 0) {
      return Promise.reject([]);
    } else {
      return this.openDb()
        .then(db => {
          let names: Array<string> = fileNames.map(name => `\'${name}\'`);
          let sql: string = `SELECT * FROM GD_MULTIMEDIAS WHERE I_USERID = ${userId} AND S_TASKID = '${taskId}'
           AND S_FILENAME IN (${names.join(',')})`;

          if (uploadedFlags && uploadedFlags.length > 0) {
            sql += ` AND I_UPLOADEDFLAG IN (${uploadedFlags.join(',')})`;
          }
          sql += ' ORDER BY ID;';

          return db.executeSql(sql, {})
        })
        .then(data => {
          let rows: any = data.rows;
          let mediaList: Array<Media> = [];
          if (rows && rows.length > 0) {
            for (let i = 0; i < rows.length; i++) {
              let localMedia: LocalMedia = rows.item(i) as LocalMedia;
              if (!localMedia) {
                continue;
              }
              mediaList.push(this.toMedia(localMedia));
            }
          }
          return Promise.resolve(mediaList);
        });
    }
  }

  /**
   *
   * @param userId
   * @param taskId
   * @returns {any}
   */
  public deleteOneTaskWithAllInfos(userId: number, taskId: string): Promise<any> {
      if (this.globalService.isChrome) {
        return Promise.reject('chrome');
      } else {
        return this.openDb()
          .then(db => {
            let sql = `DELETE FROM GD_TASKS WHERE I_USERID = ${userId} AND S_TASKID = '${taskId}';`
              + `DELETE FROM GD_TASKDETAILS WHERE S_TASKID = '${taskId}';`
              + `DELETE FROM GD_HISTORIES WHERE I_USERID = ${userId} AND S_TASKID = '${taskId}';`
              + `DELETE FROM GD_MULTIMEDIAS WHERE I_USERID = ${userId} AND S_TASKID = '${taskId}';`;
            return this.sqlitePorter.importSqlToDb(db, sql);
          });
      }
  }

  /**
   * 打开数据库
   * @returns {any}
   */
  private openDb(): Promise<SQLiteObject> {
    return this.sqlite.create({
      name: this.dbPath,
      location: 'default'
    });
  }

  /**
   * 创建tables
   */
  private createTables(): Promise<boolean> {
    let sql: string = `CREATE TABLE IF NOT EXISTS [GD_HISTORIES] (
        [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        [I_USERID] INTEGER NOT NULL, 
        [S_TASKID] TEXT(50) NOT NULL,
        [I_STATE] INTEGER NOT NULL,
        [S_CONTENT] TEXT NOT NULL,
        [S_REPLY] TEXT,
        [I_UPLOADEDFLAG] INTEGER NOT NULL DEFAULT 0,
        [S_EXTENDEDINFO] TEXT);
           
      CREATE TABLE IF NOT EXISTS [GD_MULTIMEDIAS] (
        [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        [I_USERID] INTEGER NOT NULL,
        [S_TASKID] TEXT(50) NOT NULL,
        [I_FILETYPE] INTEGER NOT NULL,
        [S_FILENAME] TEXT(100) NOT NULL,
        [I_UPLOADEDFLAG] INTEGER NOT NULL DEFAULT 0,
        [S_FILEID] TEXT,
        [S_EXTENDEDINFO] TEXT);
      
      CREATE TABLE IF NOT EXISTS [GD_NEWS] (
        [ID] INTEGER NOT NULL, 
        [S_TITLE] TEXT(100) NOT NULL,
        [D_PUBTIME] INTEGER NOT NULL,
        [S_CONTENT] TEXT NOT NULL,
        [I_READFLAG] INTEGER NOT NULL DEFAULT 0,
        [S_EXTENDEDINFO] TEXT);
      
      CREATE TABLE IF NOT EXISTS [GD_TASKDETAILS] (
        [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        [S_TASKID] TEXT(50) NOT NULL,
        [S_DETAILINFO] TEXT NOT NULL,
        [S_EXTENDEDINFO] TEXT);
      
      CREATE TABLE IF NOT EXISTS [GD_TASKS] (
        [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        [I_USERID] INTEGER NOT NULL, 
        [S_TASKID] TEXT(50) NOT NULL,
        [S_TASKTYPE] TEXT(50) NOT NULL,
        [S_DESC] TEXT(50),
        [S_SOURCE] TEXT(50),
        [D_CREATETIME] INTEGER,
        [D_ASSGINTIME] INTEGER,
        [D_ACCEPTTIME] INTEGER,
        [D_GOTIME] INTEGER,
        [D_ARRIVEDTIME] INTEGER,
        [D_REPLYTIME] INTEGER,
        [D_COMPLETEDTIME] INTEGER,
        [I_STATE] INTEGER NOT NULL,
        [S_LNGLATTYPE] TEXT(50),
        [S_LONGITUDE] TEXT(50),
        [S_LATITUDE] TEXT(50),
        [S_EXTENDEDINFO] TEXT);
      
      CREATE TABLE IF NOT EXISTS [GD_WORDS] (
        [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        [I_WID] INTEGER NOT NULL,
        [S_WNAME] TEXT(100) NOT NULL,
        [S_WVALUE] TEXT(100) NOT NULL,
        [S_WVALUEEX] TEXT(100),
        [S_WGROUP] TEXT(100),
        [I_WPARENTID] INTEGER,
        [S_WREMARK] TEXT(100),
        [S_WISACTIVE] TEXT(100));
        
      CREATE TABLE IF NOT EXISTS [GD_MATERIALS] (
        [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        [I_MID] INTEGER NOT NULL,
        [I_PARENTID] INTEGER NOT NULL,
        [S_GROUPKEY] TEXT(100) NOT NULL,
        [S_KEY] TEXT(100) NOT NULL,
        [S_NAME] TEXT(100));
        
      CREATE TABLE IF NOT EXISTS [GD_MATERIALINFO](
        [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        [I_USERID] INTEGER NOT NULL,
        [S_TASKID] TEXT(50) NOT NULL,
        [S_INFOS] TEXT(1000) NOT NULL,
        [I_UPLOADEDFLAG] INTEGER NOT NULL DEFAULT 0);
        
      CREATE TABLE IF NOT EXISTS [GD_MAINTAININFO](
        [ID] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        [S_TASKID] TEXT(50) NOT NULL,
        [S_TYPE] TEXT(50),
        [S_ADDRESS] TEXT(100),
        [S_AREA] TEXT(50),
        [S_CONTENT] TEXT(1000),
        [S_REMARK] TEXT(1000));
       
      CREATE TABLE IF NOT EXISTS [META_INFO] (
        [S_VERSION] TEXT(50) NOT NULL, 
        [S_PRODUCTER] TEXT (100) NOT NULL, 
        [D_PRODUCTEDTIME] INTEGER NOT NULL);`;

    return this.openDb()
      .then(db => {
        return this.sqlitePorter.importSqlToDb(db, sql);
      });
  }

  /**
   * 更新tables, to be used in future!!!
   * @returns {Promise<boolean>}
   */
  private updateTables(): Promise<boolean> {
    return Promise.resolve(true);
  }

  /**
   *
   * @param word
   * @returns {string}
   */
  private toWordInsertSql(word: Word): string {
    return `INSERT INTO GD_WORDS VALUES (null, ${word.wid}, '${word.wName}', '${word.wValue}', '${word.wValueEx}', '${word.wGroup}', ${word.wParentId}, '${word.wRemark}', ${word.wIsActive ? "'1'" : "'0'"});`;
  }

  private toMaterialInsertSql(material: Material): string {
    return `INSERT INTO GD_MATERIALS VALUES (null,${material.id}, ${material.parentId}, '${material.groupKey}', '${material.key}', '${material.name}');`;
  }

  private toMaterialInfoInsertSql(materialInfo: DataMaterialInfo): string {
    return `INSERT INTO GD_MATERIALINFO VALUES (null,${this.globalService.userId}, '${materialInfo.taskId}', 
    '${JSON.stringify(materialInfo.infos)}', ${materialInfo.uploadFlag});`;
  }

  private toMaintainInfoInsertSql(maintainInfo: MaintainInfo): string {
    return `INSERT INTO GD_MAINTAININFO VALUES (null,'${maintainInfo.serialNumber}','${maintainInfo.maintenanceType}',
    '${maintainInfo.maintenanceAddress}','${maintainInfo.area}','${maintainInfo.repairContent}','${maintainInfo.remark}');`;
  }

  /**
   * 更新
   * @param materialInfo
   * @returns {string}
   */
  private toMaterialInfoUpdateSql(materialInfo: DataMaterialInfo): string {
    return `UPDATE GD_MATERIALINFO SET S_INFOS = '${JSON.stringify(materialInfo.infos)}',
    I_UPLOADEDFLAG=${materialInfo.uploadFlag} WHERE S_TASKID = '${materialInfo.taskId}'`;
  }

  /**
   *
   * @param localWord
   * @returns {{wid: number, wName: string, wValue: string, wValueEx: string, wIsActive: Boolean, wGroup: string, wParentId: number, wRemark: string}}
   */
  private toWord(localWord: LocalWord): Word {
    return {
      wid: localWord.I_WID,
      wName: localWord.S_WNAME,
      wValue: localWord.S_WVALUE,
      wValueEx: localWord.S_WVALUEEX,
      wIsActive: Boolean(localWord.S_WISACTIVE),
      wGroup: localWord.S_WGROUP,
      wParentId: localWord.I_WPARENTID,
      wRemark: localWord.S_WREMARK
    };
  }

  private toMaterial(localMaterial: LocalMaterial): Material {
    return {
      id: localMaterial.I_MID,
      parentId: localMaterial.I_PARENTID,
      groupKey: localMaterial.S_GROUPKEY,
      key: localMaterial.S_KEY,
      name: localMaterial.S_NAME
    }
  }

  private toMaintainInfo(localMaintainInfo: LocalMaintainInfo): MaintainInfo {
    return {
      id: localMaintainInfo.ID,
      serialNumber: localMaintainInfo.S_TASKID,
      maintenanceType: localMaintainInfo.S_TYPE,
      maintenanceAddress: localMaintainInfo.S_ADDRESS,
      area: localMaintainInfo.S_AREA,
      repairContent: localMaintainInfo.S_CONTENT,
      remark: localMaintainInfo.S_REMARK
    }
  }

  /**
   * task转insert sql
   * @param task
   * @returns {string}
   */
  private toTaskInsertSql(task: Task): string {
    return `INSERT INTO GD_TASKS VALUES (null, ${this.globalService.userId}, '${task.taskId}', '${task.taskType}', '${task.desc}', '${task.source}', ${task.createTime}, ${task.assignTime}, ${task.acceptTime}, ${task.goTime}, ${task.arrivedTime}, ${task.replyTime}, ${task.compltedTime}, ${task.state}, ${task.location.type}, ${task.location.lng}, ${task.location.lat}, null);`;
  }

  /**
   * task转update sql
   * @param serverTask
   * @param localTask
   * @returns {string}
   */
  private toTaskUpdateSql(serverTask: Task, localTask?: LocalTask): string {
    let sql: string = '';
    if (localTask) {
      if (serverTask.acceptTime > localTask.D_ACCEPTTIME) {
        sql += `D_ACCEPTTIME = ${serverTask.acceptTime}, `;
      }

      if (serverTask.arrivedTime > localTask.D_ARRIVEDTIME) {
        sql += `D_ARRIVEDTIME = ${serverTask.arrivedTime}, `;
      }

      if (serverTask.assignTime > localTask.D_ASSGINTIME) {
        sql += `D_ASSGINTIME = ${serverTask.assignTime}, `;
      }

      if (serverTask.compltedTime > localTask.D_COMPLETEDTIME) {
        sql += `D_COMPLETEDTIME = ${serverTask.compltedTime}, `;
      }

      if (serverTask.createTime > localTask.D_CREATETIME) {
        sql += `D_CREATETIME = ${serverTask.createTime}, `;
      }

      if (serverTask.goTime > localTask.D_GOTIME) {
        sql += `D_GOTIME = ${serverTask.goTime}, `;
      }

      if (serverTask.replyTime > localTask.D_REPLYTIME) {
        sql += `D_REPLYTIME = ${serverTask.replyTime}, `;
      }

      // TBD
      // if (serverTask.state > localTask.I_STATE) {
      //   sql += `SET I_STATE = ${serverTask.state}, `;
      // }
    } else {
      if (serverTask.acceptTime > 0) {
        sql += `D_ACCEPTTIME = ${serverTask.acceptTime}, `;
      }

      if (serverTask.arrivedTime > 0) {
        sql += `D_ARRIVEDTIME = ${serverTask.arrivedTime}, `;
      }

      if (serverTask.assignTime > 0) {
        sql += `D_ASSGINTIME = ${serverTask.assignTime}, `;
      }

      if (serverTask.compltedTime > 0) {
        sql += `D_COMPLETEDTIME = ${serverTask.compltedTime}, `;
      }

      if (serverTask.createTime > 0) {
        sql += `D_CREATETIME = ${serverTask.createTime}, `;
      }

      if (serverTask.goTime > 0) {
        sql += `D_GOTIME = ${serverTask.goTime}, `;
      }

      if (serverTask.replyTime > 0) {
        sql += `D_REPLYTIME = ${serverTask.replyTime}, `;
      }

      if (serverTask.state > 0) {
        sql += `I_STATE = ${serverTask.state}, `;
      }
    }

    if (sql.length > 0) {
      const seperator: string = ', ';
      let index: number = sql.lastIndexOf(seperator);
      if (sql.endsWith(seperator) && index > 0) {
        sql = sql.substring(0, index);
      }

      if (sql && sql.length > 0) {
        sql = `UPDATE GD_TASKS SET ${sql} WHERE S_TASKID = '${serverTask.taskId}';`;
      } else {
        sql = '';
      }
    }

    return sql;
  }

  /**
   *
   * @param taskDetail
   * @returns {string}
   */
  private toTaskDetailInsertSql(taskDetail: TaskDetail): string {
    return `INSERT INTO GD_TASKDETAILS VALUES (null, '${taskDetail.taskId}', '${JSON.stringify(taskDetail)}', '${taskDetail.extendedInfo ? taskDetail.extendedInfo : null}');`
  }

  /**
   *
   * @param taskDetail
   * @returns {string}
   */
  private toTaskDetailUpdateSql(taskDetail: TaskDetail): string {
    let sql: string = `UPDATE GD_TASKDETAILS SET S_DETAILINFO = '${JSON.stringify(taskDetail)}'`;
    if (taskDetail.extendedInfo) {
      sql += `, S_EXTENDEDINFO = '${taskDetail.extendedInfo}'}`;
    }
    sql += ` WHERE S_TASKID = '${taskDetail.taskId}';`;
    return sql
  }

  /**
   *
   * @param history
   * @returns {string}
   */
  private toHistoryInsertSql(history: History): string {
    let extendInfo: HistoryExtendedInfo = {};
    if (history.taskDetail) {
      extendInfo.taskDetail = history.taskDetail;
    }

    if (history.mediaNames && history.mediaNames.length > 0) {
      extendInfo.mediaNames = history.mediaNames.join(',');
    }

    return `INSERT INTO GD_HISTORIES VALUES (null, ${history.userId}, '${history.task.taskId}', ${history.task.state}, '${JSON.stringify(history.task)}', '${JSON.stringify(history.reply)}', ${history.uploadedFlag}, '${JSON.stringify(extendInfo)}');`
  }

  /**
   *
   * @param history
   * @returns {string}
   */
  private toHistoryUpdateSql(history: History): string {
    let extendInfo: HistoryExtendedInfo = {};
    if (history.taskDetail) {
      extendInfo.taskDetail = history.taskDetail;
    }

    if (history.mediaNames && history.mediaNames.length > 0) {
      extendInfo.mediaNames = history.mediaNames.join(',');
    }

    return `UPDATE GD_HISTORIES SET S_CONTENT = '${JSON.stringify(history.task)}', S_REPLY = '${JSON.stringify(history.reply)}', I_UPLOADEDFLAG = ${history.uploadedFlag}, S_EXTENDEDINFO = '${JSON.stringify(extendInfo)}' WHERE I_USERID = ${history.userId} AND S_TASKID = '${history.taskId}' AND I_STATE = ${history.state};`
  }

  /**
   * 转换task
   * @param localTask
   * @returns {{acceptTime: number, arrivedTime: number, assignTime: number, compltedTime: number, createTime: number, desc: string, goTime: number, location: {type: string, lng: string, lat: string}, replyTime: number, source: string, state: number, taskId: string, taskType: string}}
   */
  private toTask(localTask: LocalTask): Task {
    return {
      acceptTime: localTask.D_ACCEPTTIME,
      arrivedTime: localTask.D_ARRIVEDTIME,
      assignTime: localTask.D_ASSGINTIME,
      compltedTime: localTask.D_COMPLETEDTIME,
      createTime: localTask.D_CREATETIME,
      desc: localTask.S_DESC,
      goTime: localTask.D_GOTIME,
      location: {
        type: localTask.S_LNGLATTYPE,
        lng: localTask.S_LONGITUDE,
        lat: localTask.S_LATITUDE
      },
      replyTime: localTask.D_REPLYTIME,
      source: localTask.S_SOURCE,
      state: localTask.I_STATE,
      taskId: localTask.S_TASKID,
      taskType: localTask.S_TASKTYPE
    };
  }

  /**
   * 转换task detail
   * @param localTaskDetail
   * @returns {TaskDetail}
   */
  private toTaskDetail(localTaskDetail: LocalTaskDetail): TaskDetail {
    try {
      let taskDetail: TaskDetail = JSON.parse(localTaskDetail.S_DETAILINFO);
      if (localTaskDetail.S_EXTENDEDINFO) {
        taskDetail.extendedInfo = JSON.parse(localTaskDetail.S_EXTENDEDINFO);
      }
      return taskDetail;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   *
   * @param localHistory
   * @returns {{userId: number, taskId: string, state: number, task: null, reply: any, uploadedFlag: number, taskDetail: TaskDetail, mediaIds: Array<number>}}
   */
  private toHistory(localHistory: LocalHistory): History {
    try {
      let taskDetail: TaskDetail;
      let mediaNames: Array<string>;
      if (localHistory.S_EXTENDEDINFO) {
        let historyExtendedInfo: HistoryExtendedInfo = JSON.parse(localHistory.S_EXTENDEDINFO);
        if (historyExtendedInfo.taskDetail) {
          taskDetail = historyExtendedInfo.taskDetail;
        }
        if (historyExtendedInfo.mediaNames && historyExtendedInfo.mediaNames.length > 0) {
          mediaNames = historyExtendedInfo.mediaNames.split(',');
        }
      }
      return {
        userId: localHistory.I_USERID,
        taskId: localHistory.S_TASKID,
        state: localHistory.I_STATE,
        task: localHistory.S_CONTENT ? JSON.parse(localHistory.S_CONTENT) : null,
        reply: JSON.parse(localHistory.S_REPLY),
        uploadedFlag: localHistory.I_UPLOADEDFLAG,
        taskDetail,
        mediaNames
      };
    } catch (e) {
      console.error(e);
    }
  }

  /**
   *
   * @param media
   * @returns {string}
   */
  private toMediaInsertSql(media: Media): string {
    return `INSERT INTO GD_MULTIMEDIAS VALUES (null, ${media.userId}, '${media.taskId}', ${media.fileType}, '${media.fileName}', ${media.uploadedFlag}, '${media.fileId ? media.fileId : null}', null);`
  }

  /**
   *
   * @param media
   * @param localMedia
   * @returns {string}
   */
  private toMediaUpdateSql(media: Media, localMedia: LocalMedia): string {
    if (localMedia) {
      let sql: string = `UPDATE GD_MULTIMEDIAS SET I_UPLOADEDFLAG = ${media.uploadedFlag}`;
      if (media.fileId) {
        sql += `, S_FILEID = '${media.fileId}'`;
      }
      if (media.extendedInfo) {
        sql += `, S_EXTENDEDINFO = '${media.extendedInfo}'`;
      }
      sql += ` WHERE ID = ${localMedia.ID};`;
      return sql;
    } else {
      return this.toMediaInsertSql(media);
    }
  }

  /**
   *
   * @param localMedia
   * @returns {{userId: number, taskId: string, fileType: number, fileName: string, uploadedFlag: number, fileId: string, extendedInfo: string}}
   */
  private toMedia(localMedia: LocalMedia): Media {
    return {
      userId: localMedia.I_USERID,
      taskId: localMedia.S_TASKID,
      fileType: localMedia.I_FILETYPE,
      fileName: localMedia.S_FILENAME,
      uploadedFlag: localMedia.I_UPLOADEDFLAG,
      fileId: localMedia.S_FILEID,
      extendedInfo: localMedia.S_EXTENDEDINFO
    };
  }
}
