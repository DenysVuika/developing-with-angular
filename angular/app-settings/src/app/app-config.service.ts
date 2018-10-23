import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './app-config';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  data: AppConfig = {};

  constructor(private http: HttpClient) {}

  load(defaults?: AppConfig): Promise<AppConfig> {
    return new Promise<AppConfig>(resolve => {
      this.http.get('app.config.json').subscribe(
        response => {
          console.log('using server-side configuration');
          this.data = Object.assign({}, defaults || {}, response || {});
          resolve(this.data);
        },
        () => {
          console.log('using default configuration');
          this.data = Object.assign({}, defaults || {});
          resolve(this.data);
        }
      );
    });
  }
}
