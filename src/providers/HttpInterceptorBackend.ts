import {Injectable} from "@angular/core";
import {ConnectionBackend, XHRBackend, Request, XHRConnection} from "@angular/http";
import {HttpInterceptor} from "./HttpInterceptor";


@Injectable()
export class HttpInterceptorBackend implements ConnectionBackend {
  constructor(private httpInterceptor: HttpInterceptor, private xhrBackend: XHRBackend) {

  }

  createConnection(request: Request): XHRConnection {
    let interceptor = this.httpInterceptor;
    let req = interceptor.beforeRequest ? interceptor.beforeRequest(request) : request;

    let result = this.xhrBackend.createConnection(req);
    result.response = interceptor.afterResponse ? interceptor.afterResponse(result.response): result.response;

    return result;
  }
}
