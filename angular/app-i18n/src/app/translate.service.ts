import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TranslateService {

  data: any = {};

  constructor(private http: Http) {}

  use(lang: string): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const langPath = `assets/i18n/${lang || 'en'}.json`;

      this.http.get(langPath).subscribe(
        response => {
          this.data = Object.assign({}, response.json() || {});
          resolve(this.data);
        },
        errr => {
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }
}
