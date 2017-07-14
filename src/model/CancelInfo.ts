import {Location} from "./Location";

export class CancelInfo {
  destroyTime: number;
  destroyRemark: string;
  location: Location;
  taskId: string;
  userId: number;
}

export class CancelExInfo {
  TaskNo: string;
  TaskType: string;
  WcOperator: number;
  WcTime: number;
  XdComment: string;
  XdOperator: number;
}
