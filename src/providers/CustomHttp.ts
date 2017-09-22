import {Injectable} from '@angular/core';
import {Http, Request, RequestOptionsArgs, Response, RequestOptions, ConnectionBackend} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CustomHttp extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options ?: RequestOptionsArgs): Observable <Response> {
    console.log(url);
    options && console.log(options);
    return this.intercept(super.request(url, options));
  }

  get(url: string, options ?: RequestOptionsArgs): Observable <Response> {
    console.log(url);
    options && console.log(options);
    return this.intercept(super.get(url, options));
  }

  post(url: string, body: string, options ?: RequestOptionsArgs): Observable <Response> {
    console.log(url);
    console.log(body);
    options && console.log(options);
    return this.intercept(super.post(url, body, options));
  }

  put(url: string, body: string, options ?: RequestOptionsArgs): Observable <Response> {
    console.log(url);
    console.log(body);
    options && console.log(options);
    return this.intercept(super.put(url, body, options));
  }

  delete(url: string, options ?: RequestOptionsArgs): Observable <Response> {
    console.log(url);
    options && console.log(options);
    return this.intercept(super.put(url, options));
  }

  intercept(observable: Observable < Response >): Observable <Response> {
    observable.subscribe(data => {
      console.log(data)
    });
    return observable;
  }
}
