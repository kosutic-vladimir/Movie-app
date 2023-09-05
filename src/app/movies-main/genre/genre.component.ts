import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { SharedService } from '../shared/shared.service';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../shared/movies.model';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genreMovieData: Movies[];

  constructor(private moviesService: MoviesService, private sharedService: SharedService, private route: ActivatedRoute) {}

  ngOnInit() {
    // gets current page from url snapshot and passes it as argument 
    this.route.params.subscribe(params => {
      const currentPage = params['page'];
      const currentGenre = params['id'];

      // gets data from moviesService , and sets genreMovieData
      this.moviesService.fetchMoviesByGenre(currentGenre, currentPage).subscribe(responseData => {
        this.genreMovieData = responseData.results;
        
        //use shared service to send total pages data to movies-main component
        this.sharedService.setTotalPages(responseData.total_pages);
      })
    })
  }
}
