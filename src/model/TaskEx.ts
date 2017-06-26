import {Task} from "./Task";

export class Process {
  event: string;
  name: string;
  time: Date;
  show: boolean;
  color: string;
  done: boolean;
}

export class TaskEx {
  id: string;
  type: string;
  describe: string;
  processes: Process[];
  lastProcess: string;
  photoCount: number;
  audioCount: number;
  videoCount: number;

  constructor(task: Task) {
    this.id = task.taskId;
    this.type = '热线工单';//task.taskType;
    this.describe = task.desc;
    this.lastProcess = '';
    this.photoCount = 0;
    this.audioCount = 0;
    this.videoCount = 0;

    this.processes = [];
    this.processes.push({
      event: 'create',
      name: '创建时间',
      time: this.utc2Date(task.createTime),
      show: true,
      color: 'gray',
      done: false});

    this.processes.push({
      event: 'dispatch',
      name: '派发时间',
      time: this.utc2Date(task.assignTime),
      show: true,
      color: 'gray',
      done: false});

    this.processes.push({
      event: 'accept',
      name: '接单时间',
      time: this.utc2Date(task.acceptTime),
      show: true,
      color: 'primary',
      done: false});

    this.processes.push({
      event: 'go',
      name: '出发时间',
      time: this.utc2Date(task.goTime),
      show: false,
      color: 'primary',
      done: false});

    this.processes.push({
      event: 'arrive',
      name: '到场时间',
      time: this.utc2Date(task.arrivedTime),
      show: false,
      color: 'primary',
      done: false});

    this.processes.push({
      event: 'reply',
      name: '回复时间',
      time: this.utc2Date(task.replyTime),
      show: false,
      color: 'primary',
      done: false});

    this.processes.push({
      event: 'reject',
      name: '退单时间',
      time: this.utc2Date(task.replyTime),
      show: false,
      color: 'primary',
      done: false});

    this.processes.push({
      event: 'delay',
      name: '延迟时间',
      time: undefined,
      show: false,
      color: 'primary',
      done: false});

    this.processes.push({
      event: 'cancel',
      name: '销单时间',
      time: undefined,
      show: false,
      color: 'primary',
      done: false});
  }

  static transform(tasks: Array<Task>, taskExs: Array<TaskEx>) {
    for (let task of tasks) {
      let taskEx = new TaskEx(task);
      taskExs.push(taskEx);
    }
  }

  private utc2Date(utc: number): Date {
    return utc > 0 ? new Date(utc) : undefined;
  }
}

