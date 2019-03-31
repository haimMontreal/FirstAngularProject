import { Component } from '@angular/core';
import {DataService} from '../services/data.service';
import {AppComponent} from '../app.component';


@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.sass']
})
export class DisplayResultComponent {



  constructor(private dataService: DataService, private appComponent: AppComponent){
    /*
    this.idDisplay= this.dataService.id;
    this.nameDisplay= this.dataService.name;
    this.urlDisplay= this.dataService.url;
    this.imagesDisplay= this.dataService.images;
    this.foundDisplay= this.dataService.found;
    */

  }
  idDisplay: number[]=this.dataService.id;
  nameDisplay: string[]=this.dataService.name;
  urlDisplay: string[]=this.dataService.url;
  imagesDisplay: string[]=this.dataService.images;
  foundDisplay: boolean = this.dataService.found;


}
