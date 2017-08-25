import {Material} from "./Material";
import {MaterialUnit} from "./MaterialUnit";
/**
 * Created by zhangjing on 2017/7/31.
 */
export class MaterialsInfo {
  category: Material;
  type: Material;
  size: Material;
  productor: Material;
  unit: MaterialUnit;
  count: number;
  remark: string;
}

/**
 * 接口
 */
export class UploadMaterials {
  userId: number;
  serialNumber: string;
  materialCategory: number;
  materialType: number;
  materialSize: number;
  manufacturer: number;
  materialUnit: number;
  count: number;
  remark: string
}

/**
 * 本地
 */
export class DataMaterialInfo {
  taskId: string;
  infos: Array<UploadMaterials>;
  uploadFlag: number;
}

export class MaterialInfoEx {
  taskId: string;
  infos: Array<MaterialsInfo>;
  uploadFlag: number;
}
