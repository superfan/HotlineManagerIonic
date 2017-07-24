import {Location} from "./Location";

export interface CancelInfo {
  destroyTime: number;
  destroyRemark: string;
  location: Location;
  taskId: string;
  userId: number;
}

export interface CancelExInfo {
  TaskNo: string;
  TaskType: string;
  WcOperator: number;
  WcTime: number;
  XdComment: string;
  XdOperator: number;
}
