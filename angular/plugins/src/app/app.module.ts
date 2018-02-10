import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PluginsModule } from './/plugins.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    SettingsComponent,
    SidebarComponent,
    DynamicPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PluginsModule,
    HttpClientModule
  ],
  entryComponents: [
    SettingsComponent,
    DynamicPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
