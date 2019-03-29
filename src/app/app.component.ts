import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

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
  }



  getProfile() {
    console.log(this.id);
    this.httpClient.get(`http://api.tvmaze.com/search/shows?q=${this.enter}`)
      .subscribe(
        (data: any[]) => {
          if (data.length) {
            this.id=[]=[];  //If I dont clear the array It will be keep.
            this.name=[]=[];
            this.url=[]=[];
            this.images=[]=[];
            console.log(this.id);
            for (var i=0; i<=data.length; i++) {
              this.id.push(data[i].show.id);
              this.name.push(data[i].show.name);
              this.url.push(data[i].show.url);
              this.images.push(data[i].show.image.medium);
              this.found = true;
              this.dataService.id=this.id;
              this.dataService.name= this.name;
              this.dataService.url = this.url;
              this.dataService.images = this.images;
              this.dataService.found = this.found;
              console.log(this.dataService.id);
            }
          }
          else {
            this.found = false;
          }

        }
      )
  }

  ngOnInit() {

    console.log(this.dataService);

  }



}












