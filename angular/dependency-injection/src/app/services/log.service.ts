import { Injectable /*Inject*/ } from '@angular/core';
// import { REST_API_URL } from './../tokens';

export interface LoggerConfig {
  logLevel?: string;
  prefix?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LogService {
  constructor() {
    /*
    @Inject('logger.config') config: LoggerConfig,
    @Inject(REST_API_URL) restApiUrl: string
    */
    /*
        console.log(config);
        console.log(restApiUrl);
    */
  }

  info(message: string) {
    console.log(`[info] ${message}`);
  }
}
