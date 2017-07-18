import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import {SQLitePorter} from '@ionic-native/sqlite-porter';
import {GlobalService} from "./GlobalService";
import {FileService} from "./FileService";

@Injectable()
export class DbService {
  private readonly dbName: string = 'main.db';
  //private readonly dbVersion: string = '1.0';
  private dbPath: string;

  constructor(private sqlite: SQLite,
              private sqlitePorter: SQLitePorter,
              private globalService: GlobalService,
              private fileService: FileService) {
    this.dbPath = globalService.isChrome ? this.dbName : `${fileService.getDbDir()}/${this.dbName}`;
  }

  public createTables(): void {
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

    this.openDb()
      .then(db => {
        return this.sqlitePorter.importSqlToDb(db, sql);
      })
      .then(() => console.log('success'))
      .catch(error => console.error(error));
  }

  private openDb(): Promise<any> {
    if (this.globalService.isChrome) {
      return Promise.reject("chrome has no sqlite");
    } else {
      return this.sqlite.create({
        name: this.dbPath,
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          return Promise.resolve(db);
        })
        .catch(e => {
          console.log(e);
          return Promise.reject(e);
        });
    }
  }
}
