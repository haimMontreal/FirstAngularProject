import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  enter: string = '';
  id: number;
  name: string;
  url: string;
  found: boolean;

  constructor(private httpClient: HttpClient) {
  }

  onNameKeyUp(event: any) {
    this.name = event.target.value;
    this.found = false;
  }

  getProfile() {
    this.httpClient.get(`http://api.tvmaze.com/search/shows?q=${this.enter}`)
      .subscribe(
        (data: any[]) => {
          if (data.length) {
            this.found = true;
          }
          else {
            this.found = true;
          }

        }
      )
  }
}



