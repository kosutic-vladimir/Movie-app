import { Component } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../shared/movies.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchMoviesData: Movies[];

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit() {
    // gets current page from url snapshot and passes it as argument 
    this.route.params.subscribe(params => {
      const searchQuery = params['query'];

      // gets data from moviesService , and sets playingNowData 
      this.moviesService.fetchSearchMovies(searchQuery).subscribe(responseData => {
        this.searchMoviesData = responseData.results;
      })
    })
  }
}
