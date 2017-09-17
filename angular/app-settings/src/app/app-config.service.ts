import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfig } from './app-config';

@Injectable()
export class AppConfigService {

  data: AppConfig = {};

  constructor(private http: Http) {}

  load(defaults?: AppConfig): Promise<AppConfig> {
    return new Promise<AppConfig>((resolve, reject) => {
      this.http.get('app.config.json').subscribe(
        response => {
          console.log('using server-side configuration');
          this.data = Object.assign({}, defaults || {}, response.json() || {});
          resolve(this.data);
        },
        err => {
          console.log('using default configuration');
          this.data = Object.assign({}, defaults || {});
          resolve(this.data);
        }
      );
    });
  }

}
