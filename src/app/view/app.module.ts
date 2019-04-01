import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {DataService} from '../api/data.service';
import {DisplayResultComponent} from './display-result/display-result.component';
import {Routes, RouterModule} from '@angular/router';
import {EpisodesComponent} from './episodes/episodes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: 'search', component: DisplayResultComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    DisplayResultComponent,
    EpisodesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
