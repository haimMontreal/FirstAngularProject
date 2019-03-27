import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.sass']
})
export class DisplayResultComponent implements OnInit {

  enter: string = '';
  id: number[]=[];
  name: string[]=[];
  url: string[]=[];
  images: string[]=[];
  found: boolean;


  constructor(private httpClient: HttpClient, private dataService: DataService) {
  }

  onNameKeyUp(event: any) {
    this.enter = event.target.value;
    this.found = false;
  }

  getProfile() {
    this.httpClient.get(`http://api.tvmaze.com/search/shows?q=${this.enter}`)
      .subscribe(
        (data: any[]) => {
          if (data.length) {
            this.id=[];  //If I dont clear the array It will be keep.
            this.name=[];
            this.url=[];
            this.images=[];
            for (var i=0; i<=data.length; i++) {
              this.id.unshift(data[i].show.id);
              this.name.unshift(data[i].show.name);
              this.url.unshift(data[i].show.url);
              this.images.unshift(data[i].show.image.medium);
              this.found = true;
            }
          }
          else {
            this.found = true;
          }

        }
      )
  }

  ngOnInit() {
    this.id= this.dataService.id;
    this.name = this.dataService.name;
    this.url = this.dataService.url;
    this.images = this.dataService.images;
  }


}
