import {Location} from './Location';

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
