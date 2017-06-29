export class DelayExtend {
  comment: string;
  deadline: Date;
}

export class RejectExtend {
  rejectReason: string;
}

export class Process {
  event: string;
  name: string;
  time: Date;
  show: boolean;
  color: string;
  done: boolean;
  extend: any;
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
