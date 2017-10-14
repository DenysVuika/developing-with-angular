import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HostEventsComponent } from './host-events/host-events.component';
import { HostPropertiesDirective } from './host-properties.directive';

@NgModule({
  declarations: [
    AppComponent,
    HostEventsComponent,
    HostPropertiesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
