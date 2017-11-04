import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OnChangesDemoComponent } from './on-changes-demo/on-changes-demo.component';
import { OnInitDemoComponent } from './on-init-demo/on-init-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    OnChangesDemoComponent,
    OnInitDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
