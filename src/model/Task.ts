import {Location} from './Location';
import {Process} from "./Process";

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

export class Task {
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

  static transformCompletedData(tasks: Array<Task>, taskExs: Array<TaskEx>) {
    for (let task of tasks) {
      let taskEx = new TaskEx(task);
      taskEx.processes[2] = {
        event: 'accept',
        name: '接单时间',
        time: TaskEx.utc2Date(task.acceptTime),
        show: true,
        color: 'gray',
        done: false,
        extend: null
      };
      taskEx.processes[3] = {
        event: 'go', name: '出发时间', time: TaskEx.utc2Date(task.goTime), show: true,
        color: 'gray', done: true, extend: null
      };
      taskEx.processes[4] = {
        event: 'arrive',
        name: '到场时间',
        time: TaskEx.utc2Date(task.arrivedTime),
        show: true,
        color: 'gray',
        done: true,
        extend: null
      };
      taskEx.processes[5] = {
        event: 'reply',
        name: '回复时间',
        time: TaskEx.utc2Date(task.replyTime),
        show: true,
        color: 'gray',
        done: true,
        extend: null
      };
      taskEx.processes[6] = {
        event: 'reject',
        name: '退单时间',
        time: TaskEx.utc2Date(new Date().getTime()),
        show: false,
        color: 'gray',
        done: true,
        extend: null
      };
      taskEx.processes[7] = {
        event: 'delay',
        name: '延迟时间',
        time: TaskEx.utc2Date(new Date().getTime()),
        show: false,
        color: 'gray',
        done: true,
        extend: null
      };
      taskEx.processes[8] = {
        event: 'cancel',
        name: '销单时间',
        time: TaskEx.utc2Date(new Date().getTime()),
        show: true,
        color: 'gray',
        done: true,
        extend: null
      }
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
