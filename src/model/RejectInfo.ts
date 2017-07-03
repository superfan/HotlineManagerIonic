import {Location} from "./Location";

export class RejectInfo {
  rejectTime: number;
  rejectReason: string;
  location: Location;
  taskId: string;
  userId: number;
}
