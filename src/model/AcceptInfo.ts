import {Location} from "./Location";

export interface AcceptInfo {
  acceptTime: number;
  location: Location;
  taskId: string;
  userId: number;
}

export interface AcceptExInfo {
  acceptOperator: number;
  acceptTime: number;
  taskId: string;
}
