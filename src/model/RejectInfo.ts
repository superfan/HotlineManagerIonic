import {Location} from "./Location";

export interface RejectInfo {
  rejectTime: number;
  rejectReason: string;
  location: Location;
  taskId: string;
  userId: number;
}
