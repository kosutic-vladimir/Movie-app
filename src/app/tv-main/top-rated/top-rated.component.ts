import { Component, OnInit } from '@angular/core';
import { TvSeries } from '../shared/tv.series.model';
import { TvSeriesService } from '../shared/tv-series.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TvTopRatedComponent implements OnInit {
  topRatedData: TvSeries[] = [];

  constructor(private sharedService: SharedService, private tvSeriesService: TvSeriesService, private route: ActivatedRoute) {}

  ngOnInit() {
      // gets current page from url snapshot and passes it as argument 
      this.route.params.subscribe(params => {
        const currentPage = +params['page'];
  
        // gets data from tvSeriesService , and sets topRatedData 
        this.tvSeriesService.fetchTopRated(currentPage).subscribe(responseData => {
          this.topRatedData = responseData.results;
          //use shared service to send total pages data to tv-main component
          this.sharedService.setTotalPages(responseData.total_pages);
        }) 
      })
    }
}
