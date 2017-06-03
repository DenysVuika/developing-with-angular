import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PublicPostsPipe } from './pipes/public-posts.pipe';
import { PublicPostsImpurePipe } from './pipes/public-posts-impure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PublicPostsPipe,
    PublicPostsImpurePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
