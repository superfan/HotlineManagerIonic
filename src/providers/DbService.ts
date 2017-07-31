import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import {SQLitePorter} from '@ionic-native/sqlite-porter';
import {GlobalService} from "./GlobalService";
import {FileService} from "./FileService";
import {Word} from "../model/Word";
import {Task, TaskState} from "../model/Task";
import {TaskDetail} from "../model/TaskDetail";
import {History} from "../model/History";
import {Media} from "../model/Media";

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

@Injectable()
export class DbService {
  private readonly dbName: string = 'main.db';
  //private readonly dbVersion: string = '1.0';
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
    if (this.globalService.isChrome || words.length <= 0) {
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
   *
   * @param group
   * @returns {any}
   */
  public getWords(group: string): Promise<Array<Word>> {
    if (this.globalService.isChrome) {
      return Promise.reject('chrome');
    } else {
      return this.openDb()
        .then(db => {
          return db.executeSql(`SELECT * FROM GD_WORDS WHERE S_WGROUP = '${group}';`, {})
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
   * 保存任务列表
   * @param userId
   * @param serverTasks
   * @returns {any}
   */
  public saveTasks(userId: number, serverTasks: Array<Task>): Promise<any> {
    if (this.globalService.isChrome || serverTasks.length <= 0) {
      return Promise.reject('chrome');
    } else {
      return this.openDb()
        .then(db => {
          return db.executeSql(`SELECT * FROM GD_TASKS WHERE I_USERID = ${userId};`, {})
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
   * 更新任务
   * @param task
   * @returns {any}
   */
  public saveTask(task: Task): Promise<any> {
    if (this.globalService.isChrome) {
      return Promise.reject('chrome');
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
      return Promise.reject('chrome');
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = `SELECT * FROM GD_TASKS WHERE I_USERID = ${userId}`;
          if (states && states.length > 0) {
            sql += ` AND I_STATE IN (${states.join(',')})`;
          }
          if (key && key !== '') {
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
      return Promise.reject('chrome');
    } else {
      return this.openDb()
        .then(db => {
          return db.executeSql(`SELECT COUNT(*) FROM GD_TASKS WHERE I_USERID = ${userId};`, {})
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
    if (this.globalService.isChrome) {
      return Promise.reject('chrome');
    } else {
      return this.openDb()
        .then(db => {
          return db.executeSql(`SELECT * FROM GD_TASKDETAILS WHERE S_TASKID = '${taskDetail.taskId}';`, {})
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
    if (this.globalService.isChrome) {
      return Promise.reject('chrome');
    } else {
      return this.openDb()
        .then(db => {
          return db.executeSql(`SELECT * FROM GD_TASKDETAILS WHERE S_TASKID = '${taskId}';`, {})
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
      return Promise.reject('chrome');
    } else {
      return this.openDb()
        .then(db => {
          return db.executeSql(`SELECT S_TASKID FROM GD_TASKS WHERE I_USERID = ${userId} AND S_TASKID NOT IN (SELECT S_TASKID FROM GD_TASKDETAILS);`, {})
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
    if (this.globalService.isChrome) {
      return Promise.reject('chrome');
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
   * @param uploadedFlag
   * @returns {any}
   */
  public getHistories(userId: number, taskId: string, uploadedFlag?: number): Promise<Array<History>> {
    if (this.globalService.isChrome) {
      return Promise.reject('chrome');
    } else {
      return this.openDb()
        .then(db => {
          let sql = `SELECT * FROM GD_HISTORIES WHERE I_USERID = ${userId} AND S_TASKID = '${taskId}'`;
          if (uploadedFlag != undefined && uploadedFlag != null) {
            sql += ` AND I_UPLOADEDFLAG = ${uploadedFlag}`;
          }
          sql += ' ORDER BY ID;';
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
  public deleteTaskAndDetail(userId: number, taskId: string) {
    if (this.globalService.isChrome) {
      return Promise.reject('chrome');
    } else {
      return this.openDb()
        .then(db => {
          let sql = `DELETE FROM GD_TASKS WHERE I_USERID = ${userId} AND S_TASKID = '${taskId}';`
            + `DELETE FROM GD_TASKDETAILS WHERE S_TASKID = '${taskId}';`;
          return this.sqlitePorter.importSqlToDb(db, sql);
        });
    }
  }

  /**
   *
   * @param media
   * @returns {any}
   */
  public saveMedia(media: Media): Promise<boolean> {
    if (this.globalService.isChrome) {
      return Promise.reject('chrome');
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = this.toMediaInsertSql(media);
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

  private toMediaInsertSql(media: Media): string {
    return `INSERT INTO GD_MULTIMEDIAS VALUES (null, ${media.userId}, '${media.taskId}', ${media.fileType}, '${media.fileName}', ${media.uploadedFlag}, '${media.fileId ? media.fileId : null}', null);`
  }

  /**
   * 历史工单获取记录
   * @param {number} userId
   * @param {number} since
   * @param {number} count
   * @param {string} key  搜索关键字
   * @param {number} uploadFlag 上传标志
   * @param {TaskState[]} taskStates 工单状态
   */
  getHistory(userId: number, since: number, count: number,
             key: string, uploadFlag: number, taskStates: TaskState[]): Promise<Array<History>> {
    if (this.globalService.isChrome) {
      return Promise.reject('chrome');
    } else {
      return this.openDb()
        .then(db => {
          let sql: string = `SELECT * FROM GD_HISTORIES WHERE I_USERID=${userId}`;
          if (taskStates && taskStates.length > 0) {
            sql += ` AND I_STATE IN (${taskStates.join(',')})`;
          }
          if (key && key !== '') {
            sql += ` AND S_TASKID LIKE '%${key}%'`;
          }
          if (uploadFlag > 0) {
            sql += ` AND I_UPLOADEDFLAG=${uploadFlag}`
          }
          sql += ` ORDER BY ID LIMIT ${count} OFFSET ${since};`;
          debugger;
          return db.executeSql(sql, {})
            .then(data => {
              let rows: any = data.rows;
              let historys: Array<History> = [];
              if (rows && rows.length > 0) {
                for (let i = 0; i < rows.length; i++) {
                  let localHistory: LocalHistory = rows.item(i) as LocalHistory;
                  if (!localHistory || !localHistory.S_TASKID) {
                    continue;
                  }
                  historys.push(this.toHistory(localHistory));
                }
              }
              return Promise.resolve(historys);
            });
        })
    }
  }
}
