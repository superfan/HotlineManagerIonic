import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  readonly isChrome: boolean = true;
  readonly httpCode: number = 0;
  readonly httpSuccessStatusCode: number = 200;
  userName: string = "wangchao";
  userId: number = 60;

  constructor() {

  }
}
