import { Component, ReflectiveInjector } from '@angular/core';
import { LogService } from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    const injector = ReflectiveInjector.resolveAndCreate([ LogService ]);
    const logService: LogService = injector.get(LogService);
    logService.info('hello world');
  }
}
