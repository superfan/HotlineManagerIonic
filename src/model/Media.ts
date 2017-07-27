
export enum MediaType {
  Picture,
  Audio,
  Vedio
}

export interface Media {
  userId: number;
  taskId: string;
  fileType: MediaType;
  fileName: string;
  uploadedFlag: number;
  fileId?: string;
  extendedInfo?: string;
}
