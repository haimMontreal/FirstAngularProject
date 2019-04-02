import { Component, OnInit } from '@angular/core';
import {DataService} from '../../api/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-seasons',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.sass']
})
export class EpisodesComponent implements OnInit {

  showId: string;
  seasons: any;
  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params) => {
        this.showId = params.get('id');
        this.getShows();
      }
    );
  }

  getShows(): void {
    this.dataService.getSeasons(this.showId).subscribe((results) => {
      this.seasons = results;
    });
  }

}
