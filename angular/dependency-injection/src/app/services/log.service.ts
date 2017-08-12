import { Injectable, Inject } from '@angular/core';

export interface LoggerConfig {
  logLevel?: string;
  prefix?: string;
}

@Injectable()
export class LogService {

  constructor(@Inject('logger.config') config: LoggerConfig) {
    console.log(config);
  }

  info(message: string) {
    console.log(`[info] ${message}`);
  }

}
