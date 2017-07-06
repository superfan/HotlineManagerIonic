import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  readonly isChrome: boolean = true;
  readonly httpCode: number = 0;
  readonly httpSuccessStatusCode: number = 200;
  userName: string = "zz";
  userId: number = 5005;

  constructor() {

  }
}
