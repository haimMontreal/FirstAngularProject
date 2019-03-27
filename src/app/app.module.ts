import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {DataService} from './services/data.service';
import { DisplayResultComponent } from './display-result/display-result.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



