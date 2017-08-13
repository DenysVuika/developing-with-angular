import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

import { REST_API_URL, LOGGER_PLUGIN } from './tokens';

import { LogService } from './services/log.service';
import { CustomLogService } from './services/custom-log.service';
import { CompositeLogService } from './services/composite-log.service';
import { ErrorLogPlugin, WarningLogPlugin } from './services/loggers';

export function customLogServiceFactory() {
  const service = new CustomLogService();
  service.setPrefix('(factory demo)');
  return service;
}

export function dateFactory() {
  return new Date();
}


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LogService,
    // { provide: LogService, useClass: CustomLogService }
    // { provide: LogService, useFactory: customLogServiceFactory },
    { provide: 'DATE_NOW', useFactory: dateFactory },
    {
      provide: 'logger.config', useValue: {
        logLevel: 'info',
        prefix: 'my-logger'
      }
    },
    { provide: REST_API_URL, useValue: 'http://localhost:4200/api' },

    CompositeLogService,
    { provide: LOGGER_PLUGIN, useClass: ErrorLogPlugin, multi: true },
    { provide: LOGGER_PLUGIN, useClass: WarningLogPlugin, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
