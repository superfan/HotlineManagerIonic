import {Location} from './Location';
import {Process, ProcessEx, DisableColor, EnableColor} from "./Process";
import {ReplyInfo} from "./ReplyInfo";
import {AcceptInfo} from "./AcceptInfo";
import {GoInfo} from "./GoInfo";
import {ArriveInfo} from "./ArriveInfo";
import {RejectInfo} from "./RejectInfo";
import {DelayInfo} from "./DelayInfo";
import {CancelInfo} from "./CancelInfo";

export enum TaskState {
  Dispatch,   // 0
  Accept,     // 1
  Go,         // 2
  Arrived,    // 3
  Reply,      // 4
  Reject,     // 5
  Delay,      // 6
  Cancel,     // 7
  Continue    // 8
}

export interface TaskExtendedInfo {
  rejectTime?: number;
  delayTime?: number;
  destroyTime?: number;
  arrivedDeadLine?: number;
  replyDeadLine?: number;
  delayReplyDeadLine?: number;
}

export interface Task {
  acceptTime: number;
  arrivedTime: number;
  assignTime: number;
  compltedTime: number;
  createTime: number;
  desc: string;
  goTime: number;
  location: Location;
  replyTime: number;
  source: string;
  state: number;
  taskId: string;
  taskType: string;
  extendedInfo?: TaskExtendedInfo;
}

export class TaskEx {
  id: string;
  type: string;
  state: TaskState;
  describe: string;
  location: Location;
  source: string;
  processes: Process[];
  lastProcess: string;
  photoCount: number;
  audioCount: number;
  videoCount: number;
  isPreview: boolean;
  isLocationValid: boolean;
  extendedInfo?: TaskExtendedInfo;
  isUploaded?: boolean;
  isOverdueArrivedLine? :boolean;
  isOverdueReplyLine? :boolean;

  constructor(task: Task) {
    this.id = task.taskId;
    this.type = '热线工单';//task.taskType;
    this.state = task.state;//TaskEx.convertState(task.state);
    this.describe = task.desc;
    this.location = {
      type: task.location.type,
      lng: task.location.lng,
      lat: task.location.lat
    };
    this.source = task.source;
    this.lastProcess = '';
    this.photoCount = 0;
    this.audioCount = 0;
    this.videoCount = 0;
    this.isPreview = false;
    this.isLocationValid = TaskEx.checkLocation(this.location);
    this.extendedInfo = task.extendedInfo;
    this.isUploaded = true;
    this.isOverdueArrivedLine = false;
    this.isOverdueReplyLine = false;

    this.processes = [];
    this.processes.push({
      event: 'create',
      name: '创建时间',
      time: TaskEx.utc2Date(task.createTime),
      show: true,
      color: DisableColor,
      done: false,
      extend: null,
      isUploaded: true
    });

    this.processes.push({
      event: 'dispatch',
      name: '派发时间',
      time: TaskEx.utc2Date(task.assignTime),
      show: true,
      color: DisableColor,
      done: false,
      extend: null,
      isUploaded: true
    });

    this.processes.push({
      event: 'accept',
      name: '接单时间',
      time: TaskEx.utc2Date(task.acceptTime),
      show: true,
      color: EnableColor,
      done: false,
      extend: null,
      isUploaded: true
    });

    this.processes.push({
      event: 'go',
      name: '出发时间',
      time: TaskEx.utc2Date(task.goTime),
      show: false,
      color: EnableColor,
      done: false,
      extend: null,
      isUploaded: true
    });

    this.processes.push({
      event: 'arrive',
      name: '到场时间',
      time: TaskEx.utc2Date(task.arrivedTime),
      show: false,
      color: EnableColor,
      done: false,
      extend: null,
      isUploaded: true
    });

    this.processes.push({
      event: 'reply',
      name: '回复时间',
      time: TaskEx.utc2Date(task.replyTime),
      show: false,
      color: EnableColor,
      done: false,
      extend: null,
      isUploaded: true
    });

    this.processes.push({
      event: 'reject',
      name: '退单时间',
      time: undefined,
      show: false,
      color: EnableColor,
      done: false,
      extend: null,
      isUploaded: true
    });

    this.processes.push({
      event: 'delay',
      name: '延迟时间',
      time: undefined,
      show: false,
      color: EnableColor,
      done: false,
      extend: null,
      isUploaded: true
    });

    this.processes.push({
      event: 'cancel',
      name: '销单时间',
      time: undefined,
      show: false,
      color: EnableColor,
      done: false,
      extend: null,
      isUploaded: true
    });
  }

  public static transform(tasks: Array<Task>, taskExs: Array<TaskEx>): Array<TaskEx> {
    let start: number = taskExs.length;
    for (let task of tasks) {
      let taskEx = new TaskEx(task);
      taskExs.push(taskEx);
    }
    return taskExs.slice(start);
  }

  private static utc2Date(utc: number): Date {
    return utc > 0 ? new Date(utc) : undefined;
  }

  public static checkLocation(location: Location): boolean {
    let lng: number;
    let lat: number;
    if (location && location.lng && location.lat) {
      lng = Number.parseFloat(location.lng);
      lat = Number.parseFloat(location.lat);
    }
    return !!lng && !!lat;
  }

  public static convertState(state: number): TaskState {
    let taskState: TaskState;

    switch (state) {
      case 0: // 已派遣
      case 1: // 接收
      case 2: // 已派工
        taskState = TaskState.Dispatch;
        break;
      case 3: // 已出发
        taskState = TaskState.Go;
        break;
      case 4: // 已到场
        taskState = TaskState.Arrived;
        break;
      case 5: // 已处理
        taskState = TaskState.Reply;
        break;
      case 99: // 已销单
        taskState = TaskState.Cancel;
        break;
      case -1: // 已退单
      case -2: // 退单已重新派单
      case -3: // 退单结束
        taskState = TaskState.Reject;
        break;
      default:
        taskState = TaskState.Continue;
        break;
    }

    return taskState;
  }
}

/**
 * 处理步骤数组转对象
 * @param taskEx
 * @param processEx
 * @returns {boolean}
 */
export function transform2ProcessEx(taskEx: TaskEx, processEx: ProcessEx): boolean {
  if (!taskEx && !processEx) {
    return false;
  }

  for (let i of taskEx.processes) {
    switch (i.event) {
      case 'create':
        processEx.create = i;
        break;
      case 'dispatch':
        processEx.dispatch = i;
        break;
      case 'accept':
        processEx.accept = i;
        break;
      case 'go':
        processEx.go = i;
        break;
      case 'arrive':
        processEx.arrive = i;
        break;
      case 'reply':
        processEx.reply = i;
        break;
      case 'reject':
        processEx.reject = i;
        break;
      case 'delay':
        processEx.delay = i;
        break;
      case 'cancel':
        processEx.cancel = i;
        break;
      default:
        console.error(this.tag, i.event);
        break;
    }
  }

  return !!(processEx && processEx.create && processEx.dispatch && processEx.accept && processEx.go
  && processEx.arrive && processEx.reply && processEx.reject && processEx.delay && processEx.cancel);
}

function getTime(date: Date): number {
  return date ? date.getTime() : 0;
}

/**
 *
 * @param info
 * @param taskEx
 * @param processEx
 * @returns {any}
 */
export function transform2Task(info: any, taskEx: TaskEx, processEx: ProcessEx): Task {
  if (info.hasOwnProperty('acceptTime')) {
    let acceptInfo: AcceptInfo = info as AcceptInfo;
    return {
      acceptTime: acceptInfo.acceptTime,
      arrivedTime: getTime(processEx.arrive.time),
      assignTime: getTime(processEx.dispatch.time),
      compltedTime: 0,
      createTime: getTime(processEx.create.time),
      desc: taskEx.describe,
      goTime: getTime(processEx.go.time),
      location: {
        type: taskEx.location.type,
        lng: taskEx.location.lng,
        lat: taskEx.location.lat
      },
      replyTime: getTime(processEx.reply.time),
      source: taskEx.source,
      state: TaskState.Accept,
      taskId: taskEx.id,
      taskType: taskEx.type
    };
  } else if (info.hasOwnProperty('goTime')) {
    let goInfo: GoInfo = info as GoInfo;
    return {
      acceptTime: getTime(processEx.accept.time),
      arrivedTime: getTime(processEx.arrive.time),
      assignTime: getTime(processEx.dispatch.time),
      compltedTime: 0,
      createTime: getTime(processEx.create.time),
      desc: taskEx.describe,
      goTime: goInfo.goTime,
      location: {
        type: taskEx.location.type,
        lng: taskEx.location.lng,
        lat: taskEx.location.lat
      },
      replyTime: getTime(processEx.reply.time),
      source: taskEx.source,
      state: TaskState.Go,
      taskId: taskEx.id,
      taskType: taskEx.type
    };
  } else if (info.hasOwnProperty('arrivedTime')) {
    let arriveInfo: ArriveInfo = info as ArriveInfo;
    return {
      acceptTime: getTime(processEx.accept.time),
      arrivedTime: arriveInfo.arrivedTime,
      assignTime: getTime(processEx.dispatch.time),
      compltedTime: 0,
      createTime: getTime(processEx.create.time),
      desc: taskEx.describe,
      goTime: getTime(processEx.go.time),
      location: {
        type: taskEx.location.type,
        lng: taskEx.location.lng,
        lat: taskEx.location.lat
      },
      replyTime: getTime(processEx.reply.time),
      source: taskEx.source,
      state: TaskState.Arrived,
      taskId: taskEx.id,
      taskType: taskEx.type
    };
  } else if (info.hasOwnProperty('rejectTime')) {
    let rejectInfo: RejectInfo = info as RejectInfo;
    if (!taskEx.extendedInfo) {
      taskEx.extendedInfo = {
        rejectTime: rejectInfo.rejectTime
      };
    } else {
      taskEx.extendedInfo.rejectTime = rejectInfo.rejectTime;
    }

    return {
      acceptTime: getTime(processEx.accept.time),
      arrivedTime: getTime(processEx.arrive.time),
      assignTime: getTime(processEx.dispatch.time),
      compltedTime: 0, //rejectInfo.rejectTime,
      createTime: getTime(processEx.create.time),
      desc: taskEx.describe,
      goTime: getTime(processEx.go.time),
      location: {
        type: taskEx.location.type,
        lng: taskEx.location.lng,
        lat: taskEx.location.lat
      },
      replyTime: getTime(processEx.reply.time),
      source: taskEx.source,
      state: TaskState.Reject,
      taskId: taskEx.id,
      taskType: taskEx.type,
      extendedInfo: taskEx.extendedInfo
    };
  } else if (info.hasOwnProperty('delayTime')) {
    let delayInfo: DelayInfo = info as DelayInfo;
    if (!taskEx.extendedInfo) {
      taskEx.extendedInfo = {
        delayTime: delayInfo.delayTime
      };
    } else {
      taskEx.extendedInfo.delayTime = delayInfo.delayTime;
    }

    return {
      acceptTime: getTime(processEx.accept.time),
      arrivedTime: getTime(processEx.arrive.time),
      assignTime: getTime(processEx.dispatch.time),
      compltedTime: 0, //rejectInfo.rejectTime,
      createTime: getTime(processEx.create.time),
      desc: taskEx.describe,
      goTime: getTime(processEx.go.time),
      location: {
        type: taskEx.location.type,
        lng: taskEx.location.lng,
        lat: taskEx.location.lat
      },
      replyTime: getTime(processEx.reply.time),
      source: taskEx.source,
      state: TaskState.Delay,
      taskId: taskEx.id,
      taskType: taskEx.type,
      extendedInfo: taskEx.extendedInfo
    };
  } else if (info.hasOwnProperty('opTime')) {
    let replyInfo: ReplyInfo = info as ReplyInfo;
    return {
      acceptTime: getTime(processEx.accept.time),
      arrivedTime: getTime(processEx.arrive.time),
      assignTime: getTime(processEx.dispatch.time),
      compltedTime: 0,
      createTime: getTime(processEx.create.time),
      desc: taskEx.describe,
      goTime: getTime(processEx.go.time),
      location: {
        type: taskEx.location.type,
        lng: taskEx.location.lng,
        lat: taskEx.location.lat
      },
      replyTime: replyInfo.opTime,
      source: taskEx.source,
      state: TaskState.Reply,
      taskId: taskEx.id,
      taskType: taskEx.type,
      extendedInfo: taskEx.extendedInfo
    };
  } else if (info.hasOwnProperty('destroyTime')) {
    let cancelInfo: CancelInfo = info as CancelInfo;
    if (!taskEx.extendedInfo) {
      taskEx.extendedInfo = {
        destroyTime: cancelInfo.destroyTime
      };
    } else {
      taskEx.extendedInfo.destroyTime = cancelInfo.destroyTime;
    }

    return {
      acceptTime: getTime(processEx.accept.time),
      arrivedTime: getTime(processEx.arrive.time),
      assignTime: getTime(processEx.dispatch.time),
      compltedTime: 0,
      createTime: getTime(processEx.create.time),
      desc: taskEx.describe,
      goTime: getTime(processEx.go.time),
      location: {
        type: taskEx.location.type,
        lng: taskEx.location.lng,
        lat: taskEx.location.lat
      },
      replyTime: getTime(processEx.reply.time),
      source: taskEx.source,
      state: TaskState.Cancel,
      taskId: taskEx.id,
      taskType: taskEx.type,
      extendedInfo: taskEx.extendedInfo
    };
  } else {
    return null;
  }
}

