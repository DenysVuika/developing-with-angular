import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { PanelHeaderComponent } from './panel-header/panel-header.component';
import { PanelFooterComponent } from './panel-footer/panel-footer.component';
import { PanelService } from './panel.service';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    PanelHeaderComponent,
    PanelFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PanelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
