import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

import { LogService } from './services/log.service';
import { CustomLogService } from './services/custom-log.service';

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
    // LogService
    // { provide: LogService, useClass: CustomLogService }
    { provide: LogService, useFactory: customLogServiceFactory },
    { provide: 'DATE_NOW', useFactory: dateFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
