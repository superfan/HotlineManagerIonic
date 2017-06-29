import {HttpInterceptorBackend} from "./HttpInterceptorBackend";
import {RequestOptions, Http} from "@angular/http";


export function httpFactory(httpInterceptorBackend: HttpInterceptorBackend,
                            requestOptions: RequestOptions): Http {
  return new Http(httpInterceptorBackend, requestOptions);
}

