import { Component } from '@angular/core';
import { AppConfigService } from './app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(appConfig: AppConfigService) {
    this.title = appConfig.data.title;
  }
}
