import { Component } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { Movies } from '../shared/movies.model';
import { SharedService } from '../shared/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent {
  upcomingData: Movies[];

  constructor(private moviesService: MoviesService, private sharedService: SharedService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // gets current page from url snapshot and passes it as argument 
    this.route.params.subscribe(params => {
      const currentPage = +params['page'];

      // gets data from moviesService , and sets upcomingData 
      this.moviesService.fetchUpcoming(currentPage).subscribe(responseData => {
        this.upcomingData = responseData.results;
        //use shared service to send total pages data to movies-main component
        this.sharedService.setTotalPages(responseData.total_pages);
      })
    })
  }
}
