import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplatedListComponent } from './templated-list/templated-list.component';
import {
  DynamicContentComponent,
  DynamicSample1Component,
  DynamicSample2Component,
  UnknownDynamicComponent
} from './dynamic-content/dynamic-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatedListComponent,
    DynamicContentComponent,
    DynamicSample1Component,
    DynamicSample2Component,
    UnknownDynamicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [
    DynamicSample1Component,
    DynamicSample2Component,
    UnknownDynamicComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
