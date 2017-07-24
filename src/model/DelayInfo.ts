import {Location} from "./Location";

export interface DelayInfo {
  delayTime: number;
  deadline: number;
  comment: string;
  location: Location;
  taskId: string;
  userId: number;
}
