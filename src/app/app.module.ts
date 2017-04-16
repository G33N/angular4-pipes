import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LinkifyPipe } from './pipes/linkify/linkify.pipe';
import { Base64DecodePipe } from './pipes/base64-decode/base64-decode.pipe';
import { CommaSeparatedNumberPipe } from './pipes/comma-separated-number/comma-separated-number.pipe';

import { AppComponent } from './app.component';
import { LinkifyComponent } from './components/linkify/linkify.component';
import { Base64DecodeComponent } from './components/base64-decode/base64-decode.component';
import { CommaSeparatedNumberComponent } from './components/comma-separated-number/comma-separated-number.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkifyPipe,
    Base64DecodePipe,
    CommaSeparatedNumberPipe,
    LinkifyComponent,
    Base64DecodeComponent,
    CommaSeparatedNumberComponent
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
