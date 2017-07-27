import {Location} from "./Location";

export interface ArriveInfo {
  arrivedTime: number;
  location: Location;
  taskId: string;
  userId: number;
}
