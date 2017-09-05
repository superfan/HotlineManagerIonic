import {Injectable} from '@angular/core';
import {DownloadService} from "./DownloadService";
import {TaskState, Task} from "../model/Task";
import {GlobalService} from "./GlobalService";
import {AcceptExInfo} from "../model/AcceptInfo";
import {UploadService} from "./UploadService";
import {CancelExInfo} from "../model/CancelInfo";
import {TaskDetail} from "../model/TaskDetail";
import {Word} from "../model/Word";
import {SearchTask} from "../model/SearchTask";
import {SearchTaskDetails} from "../model/SearchTaskDetails";
import {SearchTaskCount} from "../model/SearchTaskCount";
import {News} from "../model/News";
import {SearchTaskRequest} from "../model/SearchTaskRequest";
import {UserInfo} from "../model/UserInfo";
import {UserResult} from "../model/UserResult";
import {Personnel} from "../model/Personnel";
import {DispatchInfo} from "../model/DispatchInfo";
import {DbService} from "./DbService";
import {MediaService} from "./MediaService";
import {MediaType} from "../model/Media";
import {SyncService, MsgType} from "./SyncService";
import {Events} from "ionic-angular";
import {History} from "../model/History";
import {Material} from "../model/Material";
import {MaintainInfo} from "../model/MaintainInfo";
import {DataMaterialInfo, MaterialInfoEx, MaterialsInfo, UploadMaterials} from "../model/MaterialsInfo";
import {ConfigService} from "./ConfigService";

@Injectable()
export class DataService extends SyncService {
  private optTypes: Array<Word>;
  private optContents: Array<Word>;
  private optReasons: Array<Word>;
  private optSolutions: Array<Word>;
  private optResults: Array<Word>;
  private reflectTypes: Array<Word>;
  private reflectContents: Array<Word>;
  private personnels: Array<Personnel>;
  private isInitialized: boolean;
  private optMaterialLB: Array<Material>;//材料类别
  private optMaterialXH: Array<Material>;//材料型号
  private optMaterialGG: Array<Material>;//材料规格
  private optMaterialCJ: Array<Material>;//材料厂家

  constructor(downloadService: DownloadService,
              uploadService: UploadService,
              globalService: GlobalService,
              dbService: DbService,
              configService: ConfigService,
              mediaService: MediaService,
              events: Events) {
    super(downloadService, uploadService, globalService, dbService, mediaService, events, configService);
    this.isInitialized = false;
  }

  /**
   * 初始化
   * @returns {Promise<boolean>}
   */
  public init(): Promise<boolean> {
    if (this.isInitialized) {
      return Promise.resolve(true);
    } else {
      super.init();
      return this.dbService.init()
        .then(result => this.isInitialized = result);
    }
  }

  /**
   * 销毁
   */
  public destroy(): void {
    if (this.isInitialized) {
      super.destroy();
      this.dbService.destroy();
    }
  }

  /**
   * 下载所有任务和详情
   */
  public downloadTasksAndDetails(): void {
    super.sendMsg({msgType: MsgType.DownloadTasksAndDetails});
  }

  /**
   * 上传历史工单和多媒体信息
   */
  public uploadHistoriesAndMedias(): void {
    super.sendMsg({msgType: MsgType.UploadHistoriesAndMedias});
  }

  /**
   * 上传所有信息
   */
  public uploadAllInfos(): void {
    super.sendMsg({msgType: MsgType.UploadAllInfos});
  }

  /**
   * 上传一条任务的多媒体信息
   * @param taskId
   */
  public uploadMediasOfOneTask(taskId: string): void {
    super.sendMsg({
      msgType: MsgType.UploadMediasOfHistory,
      taskId
    });
  }

  /**
   * 分页获取任务
   * @param since
   * @param count
   * @param key
   * @returns {Promise<Array<Task>>}
   */
  public getTasks(since: number, count: number, key?: string): Promise<Array<Task>> {
    if (this.globalService.isChrome) {
      return this.downloadService.getTasks(this.globalService.userId, since, count);
    } else {
      return this.dbService.getTasks(this.globalService.userId, since, count,
        [TaskState.Dispatch, TaskState.Accept, TaskState.Go, TaskState.Arrived, TaskState.Reply, TaskState.Delay, TaskState.Continue],
        key);
    }
  }

  /**
   * 获取任务总数
   * @returns {Promise<number>}
   */
  public getTaskCount(): Promise<number> {
    if (this.globalService.isChrome) {
      return Promise.resolve(0);
    } else {
      return this.dbService.getTaskCount(this.globalService.userId);
    }
  }

  /**
   * 获取任务详情
   * @param taskId
   * @returns {Promise<TaskDetail>}
   */
  public getTaskDetail(taskId: string): Promise<TaskDetail> {
    if (this.globalService.isChrome) {
      return this.downloadService.getTaskDetail(taskId);
    } else {
      return this.dbService.getTaskDetail(taskId)
        .then(detail => {
          return detail && detail.taskId
            ? Promise.resolve(detail)
            : this.downloadService.getTaskDetail(taskId.split('#')[0])
              .then(detail => {
                detail.taskId = taskId;
                return this.dbService.saveTaskDetail(detail)
              })
              .then(result => this.dbService.getTaskDetail(taskId));
        });
    }
  }

  /**
   * 历史工单获取记录
   * @param since
   * @param count
   * @param key
   * @returns {any}
   */
  public getHistories(since: number, count: number, key: string): Promise<Array<History>> {
    if (this.globalService.isChrome) {
      return Promise.reject('chrome');
    } else {
      return this.dbService.getHistories(this.globalService.userId, undefined,
        [TaskState.Reject, TaskState.Cancel], [], key, since, count);
    }
  }

  public getReplyHistories(taskIds: Array<string>): Promise<Array<History>> {
    if (this.globalService.isChrome) {
      return Promise.resolve([]);
    } else {
      return this.dbService.getSpecialHistories(this.globalService.userId, taskIds, TaskState.Reply);
    }
  }

  public getHistory(taskId: string, state: number): Promise<History> {
    if (this.globalService.isChrome) {
      return Promise.reject('chrome');
    } else {
      return this.dbService.getSpecialHistories(this.globalService.userId, [taskId], state)
        .then(histories => histories.length > 0 ? Promise.resolve(histories[0]) : Promise.reject('none history'));
    }
  }

  public checkIfExistNotUploadedHistories(taskIds: Array<string>): Promise<Array<History>> {
    if (this.globalService.isChrome) {
      return Promise.resolve([]);
    } else {
      return this.dbService.getSpecialHistories(this.globalService.userId, taskIds, undefined,
        [this.globalService.uploadedFlagForLocal, this.globalService.uploadedFlagForUploading]);
    }
  }

  public deleteOneTaskWithAllInfos(taskId: string): Promise<any> {
    if (this.globalService.isChrome) {
      return Promise.resolve(false);
    } else {
      return this.dbService.deleteOneTaskWithAllInfos(this.globalService.userId, taskId);
    }
  }

  /**
   * 获取未派工任务
   * @param since
   * @param count
   * @returns {Promise<Array<SearchTask>>}
   */
  public getUnDispatchedTasks(since: number, count: number): Promise<Array<SearchTask>> {
    return this.downloadService.getUnDispatchedTasks(this.globalService.userId, since, count);
  }

  /**
   * 获取已派工任务
   * @param since
   * @param count
   * @param minutes
   * @returns {Promise<Array<SearchTask>>}
   */
  public getDispatchedTasks(since: number, count: number, minutes: number): Promise<Array<SearchTask>> {
    return this.downloadService.getDispatchedTasks(this.globalService.userId, since, count, minutes);
  }

  /**
   * 站点任务接单
   * @param acceptExInfo
   * @returns {Promise<boolean>}
   */
  public acceptEx(acceptExInfo: AcceptExInfo): Promise<boolean> {
    return this.uploadService.acceptEx(acceptExInfo);
  }

  /**
   * 站点派单
   * @param dispatchInfo
   * @returns {Promise<boolean>}
   */
  public dispatch(dispatchInfo: DispatchInfo): Promise<boolean> {
    return this.uploadService.dispatch(dispatchInfo);
  }

  /**
   * 站点销单
   * @param cancelExInfo
   * @returns {Promise<boolean>}
   */
  public cancelEx(cancelExInfo: CancelExInfo): Promise<boolean> {
    return this.uploadService.cancelEx(cancelExInfo);
  }

  /**
   * 下载词语信息
   * @returns {Promise<Array<Word>>}
   */
  public downloadWords(): Promise<boolean> {
    return this.downloadService.getAllWords('all')
      .then(words => this.dbService.saveWords(words))
      .catch(error => {
        console.error(error);
        this.globalService.showToast(error);
        return Promise.resolve(false);
      });
  }

  /**
   *
   * @returns {Promise<boolean>}
   */
  public checkIfDownloadWords(): Promise<boolean> {
    return this.dbService.getWordsCount()
      .then(count => count > 0
        ? Promise.resolve(true)
        : this.downloadService.getAllWords('all')
          .then(words => this.dbService.saveWords(words)))
      .catch(error => {
        console.error(error);
        this.globalService.showToast(error);
        return Promise.resolve(false);
      });
  }

  /**
   *
   * @returns {Promise<boolean|boolean>}
   */
  public checkIfDownloadMaterials(): Promise<boolean> {
    return this.dbService.getMaterialsCount()
      .then(count => count > 0
        ? Promise.resolve(true)
        : this.downloadService.getAllMaterials('all')
          .then(materials => this.dbService.saveMaterials(materials)))
      .catch(error => {
        console.error(error);
        this.globalService.showToast(error);
        return Promise.resolve(false);
      });
  }

  /**
   * 下载材料信息
   */
  public downloadMaterials(): Promise<boolean> {
    return this.downloadService.getAllMaterials('all')
      .then(materials => this.dbService.saveMaterials(materials))
      .catch(error => {
        console.error(error);
        this.globalService.showToast(error);
        return Promise.resolve(false);
      });
  }

  /**
   * 材料类别
   * @returns {Promise<Array<Material>>}
   */
  public getOptMaterialLB(): Promise<Array<Material>> {
    const groupKey: string = 'LB';
    return (this.optMaterialLB && this.optMaterialLB.length > 0)
      ? Promise.resolve(this.optMaterialLB)
      : this.dbService.getMaterials(groupKey)
        .then(materials => {
          return this.optMaterialLB = materials;
        })
        .catch(error => {
          console.log(error);
        })
  }

  /**
   * 材料型号
   * @param parentId
   */
  public getOptMaterialXH(parentId: number): Promise<Array<Material>> {
    const groupKey: string = 'XH';
    return (this.optMaterialXH && this.optMaterialXH.length > 0 && this.optMaterialXH[0].parentId == parentId)
      ? Promise.resolve(this.optMaterialXH)
      : this.dbService.getMaterials(groupKey)
        .then(materials => {
          let newMaterials: Array<Material> = [];
          for (let material of materials) {
            if (material.parentId == parentId) {
              newMaterials.push(material);
            }
          }
          return this.optMaterialXH = newMaterials;
        })
        .catch(error => {
          console.log(error);
        });
  }

  /**
   * 材料规格
   * @param parentId
   * @returns {Promise<Array<Material>>|Promise<TResult|TResult2|Array<Material>>}
   */
  public getOptMaterialGG(parentId: number): Promise<Array<Material>> {
    const groupKey: string = 'GG';
    return (this.optMaterialGG && this.optMaterialGG.length > 0 && this.optMaterialGG[0].parentId == parentId)
      ? Promise.resolve(this.optMaterialGG)
      : this.dbService.getMaterials(groupKey)
        .then(materials => {
          let newMaterials: Array<Material> = [];
          for (let material of materials) {
            if (material.parentId == parentId) {
              newMaterials.push(material);
            }
          }
          return this.optMaterialGG = newMaterials;
        })
        .catch(error => {
          console.log(error);
        })
  }

  /**
   * 材料厂家
   * @param parentId
   * @returns {Promise<Array<Material>>|Promise<TResult|TResult2|Array<Material>>}
   */
  public getOptMaterialCJ(parentId: number): Promise<Array<Material>> {
    const groupKey: string = 'CJ';
    return (this.optMaterialCJ && this.optMaterialCJ.length > 0 && this.optMaterialCJ[0].parentId == parentId)
      ? Promise.resolve(this.optMaterialCJ)
      : this.dbService.getMaterials(groupKey)
        .then(materials => {
          let newMaterials: Array<Material> = [];
          for (let material of materials) {
            if (material.parentId == parentId) {
              newMaterials.push(material);
            }
          }
          return this.optMaterialCJ = newMaterials;
        })
        .catch(error => {
          console.log(error);
        })
  }

  /**
   * 获取处理类别
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getOptTypes(): Promise<Array<Word>> {
    const group: string = 'CL_LEIBIE';
    const rootName: string = '处理类别';
    return (this.optTypes && this.optTypes.length > 0)
      ? Promise.resolve(this.optTypes)
      : this.dbService.getWords(group)
        .catch(error => {
          console.error(error);
          return this.downloadService.getAllWords(group);
        })
        .then(words => {
          return this.optTypes = this.tree2list(words, rootName);
        });
  }

  /**
   * 获取处理内容
   * @param parentId
   * @returns {Promise<Array<Word>>}
   */
  public getOptContents(parentId: number): Promise<Array<Word>> {
    const group: string = 'CL_NEIRONG';
    return (this.optContents && this.optContents.length > 0 && this.optContents[0].wParentId === parentId)
      ? Promise.resolve(this.optContents)
      : this.dbService.getWords(group)
        .catch(error => {
          console.error(error);
          return this.downloadService.getAllWords(group);
        })
        .then(words => {
          let newWords: Array<Word> = [];
          for (let word of words) {
            if (word.wParentId === parentId) {
              newWords.push(word);
            }
          }
          return this.optContents = newWords;
        });
  }

  /**
   * 获取发生原因
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getOptReasons(): Promise<Array<Word>> {
    const group: string = 'FS_YUANYIN';
    const rootName: string = '发生原因';
    return (this.optReasons && this.optReasons.length > 0)
      ? Promise.resolve(this.optReasons)
      : this.dbService.getWords(group)
        .catch(error => {
          console.error(error);
          return this.downloadService.getAllWords(group);
        })
        .then(words => {
          return this.optReasons = this.tree2list(words, rootName);
        });
  }

  /**
   * 获取解决措施
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getOptSolutions(): Promise<Array<Word>> {
    const group: string = 'JJ_CUOSHI';
    const rootName: string = '解决措施';
    return (this.optSolutions && this.optSolutions.length > 0)
      ? Promise.resolve(this.optSolutions)
      : this.dbService.getWords(group)
        .catch(error => {
          console.error(error);
          return this.downloadService.getAllWords(group);
        })
        .then(words => {
          return this.optSolutions = this.tree2list(words, rootName);
        });
  }

  /**
   * 获取处理结果
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getOptResults(): Promise<Array<Word>> {
    const group: string = 'CL_JIEGUO';
    const rootName: string = '处理结果';
    return (this.optResults && this.optResults.length > 0)
      ? Promise.resolve(this.optResults)
      : this.dbService.getWords(group)
        .catch(error => {
          console.error(error);
          return this.downloadService.getAllWords(group);
        })
        .then(words => {
          return this.optResults = this.tree2list(words, rootName);
        });
  }

  /**
   * 获取反映类别（查询界面）
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getReflectTypes(): Promise<Array<Word>> {
    const group: string = 'FY_LEIBIE';
    const rootName: string = '反映类别';
    return (this.reflectTypes && this.reflectTypes.length > 0)
      ? Promise.resolve(this.reflectTypes)
      : this.dbService.getWords(group)
        .catch(error => {
          console.error(error);
          return this.downloadService.getAllWords(group);
        })
        .then(words => {
          return this.reflectTypes = this.tree2list(words, rootName);
        });
  }

  /**
   * 获取反映内容
   * @returns {Promise<Array<Word>>|Promise<TResult>}
   */
  public getReflectContents(): Promise<Array<Word>> {
    const group: string = 'FY_NEIRONG';
    const rootName: string = '反映内容';
    return (this.reflectContents && this.reflectContents.length > 0)
      ? Promise.resolve(this.reflectContents)
      : this.dbService.getWords(group)
        .catch(error => {
          console.error(error);
          return this.downloadService.getAllWords(group);
        })
        .then(words => {
          return this.reflectContents = this.tree2list(words, rootName);
        });
  }

  /**
   * 查询任务
   */
  public searchTask(request: SearchTaskRequest): Promise<Array<SearchTask>> {
    return this.downloadService.getSearchTasks(this.globalService.userId, request);
  }

  /**
   * 查询工单数量
   */
  public searchTaskCount(request: SearchTaskRequest): Promise<SearchTaskCount> {
    return this.downloadService.getSearchTaskCount(this.globalService.userId, request);
  }

  /**
   * 查询任务详情
   * @param taskId 任务编号
   */
  public searchTaskDetails(taskId: string): Promise<SearchTaskDetails> {
    return this.downloadService.getSearchTaskDetails(taskId);
  }

  /**
   * 获取公告信息
   * @returns {Promise<Array<News>>}
   */
  public getNews(): Promise<Array<News>> {
    return this.downloadService.getNews();
  }

  /**
   * 获取用户信息
   * @param user
   * @returns {Promise<UserResult>}
   */
  public doLogin(user: UserInfo): Promise<UserResult> {
    return this.downloadService.doLogin(user);
  }

  /**
   * 获取管理员用户信息
   * @returns {Promise<UserRole>}
   */
  public getManageInfo() {
    return this.downloadService.getManagerUserInfo(this.globalService.userId);
  }

  /**
   * 获取外勤用户信息
   * @returns {Promise<UserWorkInfo>}
   */
  public getWorkInfo() {
    return this.downloadService.getWorkerUserInfo(this.globalService.userId);
  }

  /**
   * 检查app更新
   * @param version
   * @returns {Promise<VersionInfo>}
   */
  public checkAppVersion(version: number) {
    return this.downloadService.checkAppVersion(version);
  }

  /**
   * 检查数据包更新
   * @param version
   * @returns {Promise<VersionInfo>}
   */
  public checkDataVersion(version: number) {
    return this.downloadService.checkDataVersion(version);
  }

  /**
   * 获取施工人员
   * @param userId
   * @returns {Promise<Array<Personnel>>}
   */
  public getPersonnels(userId: number): Promise<Array<Personnel>> {
    return (this.personnels && this.personnels.length > 0)
      ? Promise.resolve(this.personnels)
      : this.dbService.getPersonnels()
        .catch(error => {
          console.error(error);
          return this.downloadService.getPersonnels(this.globalService.userId);
        })
        .then(personnels => {
          return this.personnels = personnels;
        });
  }

  /**
   *
   * @returns {Promise<boolean|boolean>}
   */
  public downloadPersonnels(): Promise<boolean> {
    return this.downloadService.getPersonnels(this.globalService.userId)
      .then(personnels => this.dbService.savePersonnels(personnels))
      .catch(error => {
        console.error(error);
        this.globalService.showToast(error);
        return Promise.resolve(false);
      });
  }

  /**
   *
   * @returns {Promise<boolean|boolean>}
   */
  public checkIfDownloadPersonnels(): Promise<boolean> {
    return this.dbService.getPersonnelsCount()
      .then(count => count > 0
        ? Promise.resolve(true)
        : this.downloadService.getPersonnels(this.globalService.userId)
          .then(personnels => this.dbService.savePersonnels(personnels)))
      .catch(error => {
        console.error(error);
        this.globalService.showToast(error);
        return Promise.resolve(false);
      });
  }

  /**
   * 拍照
   * @param taskId
   * @returns {Promise<any>}
   */
  public takePicture(taskId: string): Promise<any> {
    return this.mediaService.takePicture(taskId);
  }

  /**
   * 开始录音
   * @returns {Promise<any>}
   */
  public startRecordAudio(): Promise<any> {
    return this.mediaService.startRecordAudio();
  }

  /**
   * 结束录音
   * @param file
   * @returns {Promise<boolean>}
   */
  public endRecordAudio(file: any): Promise<boolean> {
    return this.mediaService.endRecordAudio(file);
  }

  public playAudio(name: string): Promise<any> {
    return this.mediaService.playAudio(name);
  }

  public stopAudio(file: any): Promise<boolean> {
    return this.mediaService.stopAudio(file);
  }

  /**
   * 保存录音到数据库
   * @param taskId
   * @param fileName
   * @returns {Promise<boolean>}
   */
  public saveAudio(taskId: string, fileName: string): Promise<boolean> {
    if (taskId && fileName) {
      return this.dbService.saveMedia({
        userId: this.globalService.userId,
        taskId,
        fileType: MediaType.Audio,
        fileName,
        uploadedFlag: this.globalService.uploadedFlagForLocal
      });
    } else {
      return Promise.reject('taskId or fileName is error');
    }
  }

  /**
   *
   * @param fileName
   * @returns {any}
   */
  public deleteOneMedia(fileName: string): Promise<any> {
    if (fileName) {
      return this.dbService.deleteOneMedia(this.globalService.userId, fileName);
    } else {
      return Promise.reject('taskId or fileName is error');
    }
  }

  /**
   * 多级索引转一级索引
   * @param words
   * @param rootName
   * @returns {any}
   */
  private tree2list(words: Array<Word>, rootName: string): Array<Word> {
    function find(srcWords: Array<Word>, destWords: Array<Word>, srcWord: Word): void {
      let found: boolean = false;
      for (let word of srcWords) {
        if (word.wParentId === srcWord.wid) {
          find(srcWords, destWords, word);
          found = true;
        }
      }

      if (!found) {
        destWords.push(srcWord);
      }
    }

    let rootWord: Word;
    for (let word of words) {
      if (word.wName === rootName && word.wParentId === 0) {
        rootWord = word;
        break;
      }
    }

    if (!rootWord) {
      return [];
    }

    let newWords: Array<Word> = [];
    find(words, newWords, rootWord);
    return newWords;
  }

  /**
   * 材料清单保存以及上传
   * @param data
   * @returns {Promise<T>}
   */
  public saveMaterialInfo(data: DataMaterialInfo): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.dbService.saveMaterialInfo(data)
        .then(result => {
          if (result) {
            // resolve(true);
            return this.uploadService.uploadMaterialsAdd(data.infos)
              .then(result => {
                //更新上传标志
                if (result) {
                  data.uploadFlag = this.globalService.uploadedFlagForUploaded;//已上传
                  resolve(this.dbService.updateFlagMaterials(data));
                } else {
                  reject("upload failed");
                }
              })
              .catch(error => {
                reject(false);
              });
          } else {
            reject("save to db failed");
          }
        })
        .catch(error => {
          reject(error);
        })
    });
  }

  /**
   * 获取本地某工单编号的材料清单
   * @param serialNumber
   * @returns {Promise<Array<DataMaterialInfo>>}
   */
  public getMaterialInfo(serialNumber: string): Promise<MaterialInfoEx> {
    return new Promise((resolve, reject) => {
      this.dbService.getMaterialInfo(serialNumber)
        .then(data => {
          let arrays: Array<UploadMaterials> = data.infos;
          let promiseArray: Array<Promise<MaterialsInfo>> = [];
          for (let temp of arrays) {
            promiseArray.push(this.getMaterialAndUnit(temp));
          }
          Promise.all(promiseArray)
            .then(result => {
              let materialInfoEx = new MaterialInfoEx();
              materialInfoEx.taskId = serialNumber;
              materialInfoEx.infos = result;
              materialInfoEx.uploadFlag = data.uploadFlag;
              resolve(materialInfoEx);
            })
            .catch(error => {
              reject(error);
            })
        })
        .catch(error => {
          reject(error);
        })
    })
  }

  private getMaterialAndUnit(temp: UploadMaterials): Promise<MaterialsInfo> {
    return new Promise((resolve, reject) => {
      Promise.all([this.dbService.getMaterial(temp.materialCategory),
        this.dbService.getMaterial(temp.materialType), this.dbService.getMaterial(temp.materialSize),
        this.dbService.getMaterial(temp.manufacturer), this.configService.getOneMaterialUnit(temp.materialUnit)])
        .then(result => {
          console.log(result);
          let info = new MaterialsInfo();
          info.category = result[0];
          info.type = result[1];
          info.size = result[2];
          info.productor = result[3];
          info.unit = result[4];
          info.count = temp.count;
          info.remark = temp.remark;
          resolve(info);
        })
        .catch(error => {
          console.log(error);
        })
    })
  }

  /**
   * 获得维修信息
   * @param serialNumber
   * @returns {Promise<MaintainInfo>}
   */
  public getMaintainInfo(serialNumber: string): Promise<MaintainInfo> {
    return new Promise((resolve, reject) => {
      this.dbService.queryMaintainInfo(serialNumber)
        .then(maintainInfo => {
          resolve(maintainInfo);
        })
        .catch(error => {
          console.log("getMaintainInfo:" + error);
          return this.downloadService.getMaintainInfo(serialNumber)
            .then(maintainInfo => {
              this.dbService.saveMaintainInfo(maintainInfo)
                .then(result => {
                  if (result) {
                    resolve(maintainInfo);
                  } else {
                    reject(result);
                  }
                })
                .catch(error => {
                  reject(error);
                })
            })
            .catch(error => {
              reject(error);
            })
        })
    })
  }

  /**
   * 上传所有未上传的材料工单信息
   */
  public uploadNotUploadMaterialInfos(): void {
    super.sendMsg({msgType: MsgType.UploadMaterialInfos});
  }
}
