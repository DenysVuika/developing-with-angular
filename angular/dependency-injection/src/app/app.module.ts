import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { CustomLogService } from './services/custom-log.service';
import { REST_API_URL } from './tokens';

export function customLogServiceFactory() {
  const service = new CustomLogService();
  service.setPrefix('(factory demo)');
  return service;
}

export function dateFactory() {
  return new Date();
}

@NgModule({
  declarations: [AppComponent, Component1Component, Component2Component],
  imports: [BrowserModule],
  providers: [
    // { provide: LogService, useClass: CustomLogService }
    // { provide: LogService, useFactory: customLogServiceFactory },
    { provide: 'DATE_NOW', useFactory: dateFactory },
    {
      provide: 'logger.config',
      useValue: {
        logLevel: 'info',
        prefix: 'my-logger'
      }
    },
    { provide: REST_API_URL, useValue: 'http://localhost:4200/api' }

    // { provide: LOGGER_PLUGIN, useClass: ErrorLogPlugin, multi: true },
    // { provide: LOGGER_PLUGIN, useClass: WarningLogPlugin, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
