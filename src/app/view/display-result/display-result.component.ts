import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../api/data.service';


@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.sass']
})
export class DisplayResultComponent implements OnInit {

  query: string;
  shows: any;

  constructor(private dataService: DataService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params) => {
        this.query = params.get('id');
        this.getShows();
      }
    );
  }

  getShows(): void {
    this.dataService.getQuery(this.query).subscribe((results) => {
      this.shows = results;
      console.log(this.shows);
    });
  }
}
