import {Injectable} from "@angular/core";
import {Request, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpInterceptor {

  beforeRequest(request: Request): Request {
    console.log(request);
    return request;
  }

  afterResponse(res: Observable<Response>): Observable<any> {
    res.subscribe(data => {
      console.log(data);
    });

    return res;
  }
}
