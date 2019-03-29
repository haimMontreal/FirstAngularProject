import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {DataService} from './services/data.service';
import { DisplayResultComponent } from './display-result/display-result.component';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  {path: 'search', component: DisplayResultComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    DisplayResultComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

