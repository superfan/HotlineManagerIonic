import {Location} from "./Location";

export interface ReplyInfo {
  opTime: number;
  opDepartment: number;
  opPerson: number;
  opLeiBie: number;
  opContent: number;
  reason: number;
  solution: number;
  result: number;
  replayComment: string;
  files: string;
  location: Location;
  taskId: string;
  userId: number;
}
