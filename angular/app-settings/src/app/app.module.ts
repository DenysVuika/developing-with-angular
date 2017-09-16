import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppConfigService } from './app-config.service';

export function setupAppConfigServiceFactory(service: AppConfigService): Function {
  return () => service.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    AppConfigService,
    {
        provide: APP_INITIALIZER,
        useFactory: setupAppConfigServiceFactory,
        deps: [
            AppConfigService
        ],
        multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
