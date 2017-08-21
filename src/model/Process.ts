export class DelayExtend {
  comment: string;
  deadline: Date;
}

export class RejectExtend {
  reason: string;
}

export class CancelExtend {
  remark: string;
}

export const DisableColor: string = 'gray';
export const EnableColor: string = 'primary';
export const NotUploadedColor: string = 'danger';

export class Process {
  event: string;
  name: string;
  time: Date;
  show: boolean;
  color: string;
  done: boolean;
  extend: any;
  isUploaded: boolean;
}

export class ProcessEx {
  create: Process;
  dispatch: Process;
  accept: Process;
  go: Process;
  arrive: Process;
  reply: Process;
  reject: Process;
  delay: Process;
  cancel: Process;
}
