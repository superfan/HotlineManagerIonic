import {Location} from "./Location";

export class AcceptInfo {
  acceptTime: number;
  location: Location;
  taskId: string;
  userId: number;
}

export class AcceptExInfo {
  acceptOperator: number;
  acceptTime: number;
  taskId: string;
}
