
export enum MediaType {
  Picture,
  Audio,
  Vedio
}

export interface MediaExtendedInfo {
  fileId?: number;
  url?: string;
  downloadUrl?: string;
  fileType?: string;
  fileSize?: number;
  fileHash?: string;
  originFileName?: string;
}

export interface Media {
  userId: number;
  taskId: string;
  fileType: MediaType;
  fileName: string;
  uploadedFlag: number;
  fileId?: string;
  extendedInfo?: MediaExtendedInfo;
}
