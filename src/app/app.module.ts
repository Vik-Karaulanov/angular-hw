import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisputesComponent } from './components/disputes/disputes.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    DisputesComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: 'windowObject', useValue: window
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
