
import {Attachment} from "./Attachment";
export interface TaskDetail {
  taskId: string;
  Type: string;
  desc: string;
  source: string;
  createTime: number;
  stationAcceptTime: number;
  assignTime: number;
  acceptTime: number;
  goTime: number;
  arrivedTime: number;
  replyTime: number;
  completedTime: number;
  rejectTime: number;
  superviseTime: number;
  state: number;
  delayState: number;
  contactName: string;
  contactPhone: string;
  issueType: string;
  issueContent: string;
  issueAddress: string;
  issueTime: number;
  receiveComment: string;
  bookingStartTime: number;
  bookingEndTime: number;
  arrivedDeadLine: number;
  replyDeadLine: number;
  delayReplyDeadLine: number;
  assignStation: string;
  assignPerson: string;
  assignComment: string;
  extendedInfo?: string;
  attachments?: Attachment[];
}
