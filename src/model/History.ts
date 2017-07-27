import {Task} from "./Task";
import {AcceptInfo} from "./AcceptInfo";
import {ArriveInfo} from "./ArriveInfo";
import {CancelInfo} from "./CancelInfo";
import {DelayInfo} from "./DelayInfo";
import {GoInfo} from "./GoInfo";
import {RejectInfo} from "./RejectInfo";
import {ReplyInfo} from "./ReplyInfo";
import {TaskDetail} from "./TaskDetail";


export interface History {
  userId: number;
  taskId: string;
  state: number;
  task: Task; // -> save to the content field in db
  reply: AcceptInfo | ArriveInfo | CancelInfo | DelayInfo | GoInfo | RejectInfo | ReplyInfo;
  uploadedFlag: number;
  taskDetail?: TaskDetail;
  mediaNames?: Array<string>;
}
