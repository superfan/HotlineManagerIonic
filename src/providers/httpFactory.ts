//import {HttpInterceptorBackend} from "./HttpInterceptorBackend";
import {RequestOptions, Http, XHRBackend} from "@angular/http";
import {CustomHttp} from "./CustomHttp";


// export function httpFactory(httpInterceptorBackend: HttpInterceptorBackend,
//                             requestOptions: RequestOptions): Http {
//   return new Http(httpInterceptorBackend, requestOptions);
// }

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
  return new CustomHttp(xhrBackend, requestOptions);
}
