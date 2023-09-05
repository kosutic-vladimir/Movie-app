import { Component } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../shared/movies.model';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-playing-now',
  templateUrl: './playing-now.component.html',
  styleUrls: ['./playing-now.component.css']
})
export class PlayingNowComponent {
  playingNowData: Movies[];

  constructor(private moviesService: MoviesService, private sharedService: SharedService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // gets current page from url snapshot and passes it as argument 
    this.route.params.subscribe(params => {
      const currentPage = +params['page'];

      // gets data from moviesService , and sets playingNowData 
      this.moviesService.fetchPlayingNow(currentPage).subscribe(responseData => {
        this.playingNowData = responseData.results;
        
        //use shared service to send total pages data to movies-main component
        this.sharedService.setTotalPages(responseData.total_pages);
      })
    })
  }
}
