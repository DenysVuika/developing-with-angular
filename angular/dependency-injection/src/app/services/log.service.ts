import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  info(message: string) {
    console.log(`[info] ${message}`);
  }

}
