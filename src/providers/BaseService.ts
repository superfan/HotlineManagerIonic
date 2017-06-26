import {Injectable} from '@angular/core';
import {Headers, RequestOptions} from "@angular/http";

@Injectable()
export abstract class BaseService {
  constructor() {

  }

  /**
   *
   * @returns {RequestOptions}
   */
  protected getOptions(): any {
    let headers = new Headers({
      'Content-Type': 'application/json;charset=UTF-8',
      'X-Access-Token': '',
      'X-Device-ID': 'aa5eaa1d715240d8'
    });
    let options = new RequestOptions({headers: headers});
    return options;
  }

  /**
   * 出错处理
   * @param error
   * @returns {Promise<never>}
   */
  protected handleError(error: any): Promise<never> {
    let errMsg = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}

