import {Location} from './Location';
import {Process, ProcessEx} from "./Process";
import {ReplyInfo} from "./ReplyInfo";
import {AcceptInfo} from "./AcceptInfo";
import {GoInfo} from "./GoInfo";
import {ArriveInfo} from "./ArriveInfo";

export enum TaskState {
  Dispatch,
  Accept,
  Go,
  Arrived,
  Reply,
  Reject,
  Delay,
  Cancel,
  Continue
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

  constructor(task: Task) {
    this.id = task.taskId;
    this.type = '热线工单';//task.taskType;
    this.state = TaskEx.convertState(task.state);
    this.describe = task.desc;
    this.location = {
      type: task.location.type,
      lng: task.location.lng,
      lat: task.location.lat
    }
    this.source = task.source;
    this.lastProcess = '';
    this.photoCount = 0;
    this.audioCount = 0;
    this.videoCount = 0;
    this.isPreview = false;

    this.processes = [];
    this.processes.push({
      event: 'create',
      name: '创建时间',
      time: TaskEx.utc2Date(task.createTime),
      show: true,
      color: 'gray',
      done: false,
      extend: null
    });

    this.processes.push({
      event: 'dispatch',
      name: '派发时间',
      time: TaskEx.utc2Date(task.assignTime),
      show: true,
      color: 'gray',
      done: false,
      extend: null
    });

    this.processes.push({
      event: 'accept',
      name: '接单时间',
      time: TaskEx.utc2Date(task.acceptTime),
      show: true,
      color: 'primary',
      done: false,
      extend: null
    });

    this.processes.push({
      event: 'go',
      name: '出发时间',
      time: TaskEx.utc2Date(task.goTime),
      show: false,
      color: 'primary',
      done: false,
      extend: null
    });

    this.processes.push({
      event: 'arrive',
      name: '到场时间',
      time: TaskEx.utc2Date(task.arrivedTime),
      show: false,
      color: 'primary',
      done: false,
      extend: null
    });

    this.processes.push({
      event: 'reply',
      name: '回复时间',
      time: TaskEx.utc2Date(task.replyTime),
      show: false,
      color: 'primary',
      done: false,
      extend: null
    });

    this.processes.push({
      event: 'reject',
      name: '退单时间',
      time: undefined,
      show: false,
      color: 'primary',
      done: false,
      extend: null
    });

    this.processes.push({
      event: 'delay',
      name: '延迟时间',
      time: undefined,
      show: false,
      color: 'primary',
      done: false,
      extend: null
    });

    this.processes.push({
      event: 'cancel',
      name: '销单时间',
      time: undefined,
      show: false,
      color: 'primary',
      done: false,
      extend: null
    });
  }

  static transform(tasks: Array<Task>, taskExs: Array<TaskEx>) {
    for (let task of tasks) {
      let taskEx = new TaskEx(task);
      taskExs.push(taskEx);
    }
  }

  private static utc2Date(utc: number): Date {
    return utc > 0 ? new Date(utc) : undefined;
  }

  private static convertState(state: number): TaskState {
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
    //let rejectInfo: RejectInfo = info as RejectInfo;
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
      taskType: taskEx.type
    };
  } else if (info.hasOwnProperty('delayTime')) {
    //let delayInfo: DelayInfo = info as DelayInfo;
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
      taskType: taskEx.type
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
      taskType: taskEx.type
    };
  } else {
    return null;
  }
}
