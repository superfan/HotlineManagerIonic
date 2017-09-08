import {Injectable} from '@angular/core';
import {Headers, RequestOptions, Http, Request, RequestOptionsArgs, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export abstract class BaseService {
  constructor(protected http: Http) {
  }

  /**
   *
   * @returns {RequestOptions}
   */
  protected getOptions(): any {
    let headers = new Headers({
      'Content-Type': 'application/json;charset=UTF-8',
      'X-Access-Token': '123',
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
    let errMsg = error.json().Message ? error.json().Message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

  /**
   * Performs any type of http request. First argument is required, and can either be a url or
   * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
   * object can be provided as the 2nd argument. The options object will be merged with the values
   * of {@link BaseRequestOptions} before performing the request.
   */
  protected request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.request(url, options);
  }

  /**
   * Performs a request with `get` http method.
   */
  protected get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    console.log(url);
    options && console.log(options);
    return this.http.get(url, options);
  }

  /**
   * Performs a request with `post` http method.
   */
  protected post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    console.log(url);
    body && console.log(body);
    options && console.log(options);
    return this.http.post(url, body, options);
  }

  /**
   * Performs a request with `put` http method.
   */
  protected put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    console.log(url);
    body && console.log(body);
    options && console.log(options);
    return this.http.put(url, body, options);
  }

  /**
   * Performs a request with `delete` http method.
   */
  protected delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.delete(url, options);
  }

  /**
   * Performs a request with `patch` http method.
   */
  protected patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.patch(url, body, options);
  }

  /**
   * Performs a request with `head` http method.
   */
  protected head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.head(url, options);
  }

}

