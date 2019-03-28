import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayResultComponent} from './display-result/display-result.component';


const routes: Routes = [
  {path: 'search', component: DisplayResultComponent},
  //{path: '**', component: notFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


