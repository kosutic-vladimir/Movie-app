import { Component, OnInit } from '@angular/core';
import { TvSeriesService } from '../shared/tv-series.service';
import { TvSeries } from '../shared/tv.series.model';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  popularData: TvSeries[] = [];
    
  constructor(private tvSeriesService: TvSeriesService, private sharedService: SharedService, private route: ActivatedRoute) {}
  
  ngOnInit() {
    // gets current page from url snapshot and passes it as argument 
    this.route.params.subscribe(params => {
      const currentPage = +params['page'];

      // gets data from tvSeriesService , and sets popularData 
      this.tvSeriesService.fetchPopular(currentPage).subscribe(responseData => {
        this.popularData = responseData.results;
        //use shared service to send total pages data to tv-main component
        this.sharedService.setTotalPages(responseData.total_pages);
      })
      
      
    })
  }
}
