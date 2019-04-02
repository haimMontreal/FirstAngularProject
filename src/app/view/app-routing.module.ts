import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayResultComponent} from './display-result/display-result.component';
import {EpisodesComponent} from './episodes/episodes.component';
import {AppComponent} from './app.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {main} from '@angular/compiler-cli/src/main';


const routes: Routes = [
  {path: 'search/:id', component: DisplayResultComponent},
  {path: 'episodes/:id', component: EpisodesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
