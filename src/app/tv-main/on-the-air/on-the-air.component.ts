import { Component, OnInit } from '@angular/core';
import { TvSeries } from '../shared/tv.series.model';
import { TvSeriesService } from '../shared/tv-series.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-on-the-air',
  templateUrl: './on-the-air.component.html',
  styleUrls: ['./on-the-air.component.css']
})
export class OnTheAirComponent implements OnInit {
  onTheAirData: TvSeries[] = [];

  constructor(private sharedService: SharedService, private tvSeriesService: TvSeriesService, private route: ActivatedRoute) {}

  ngOnInit() {
    // gets current page from url snapshot and passes it as argument 
    this.route.params.subscribe(params => {
      const currentPage = +params['page'];

      // gets data from tvSeriesService , and sets onTheAirData 
      this.tvSeriesService.fetchOnTheAir(currentPage).subscribe(responseData => {
        this.onTheAirData = responseData.results;
        //use shared service to send total pages data to tv-main component
        this.sharedService.setTotalPages(responseData.total_pages);
      }) 
    })
  }
}
