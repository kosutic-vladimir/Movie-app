import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { MovieDetail } from '../movies.model';
import { Review } from '../movies.model';

@Component({
  selector: 'app-moviee-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.css']
})
export class MovieOverviewComponent implements OnInit {
  movieID: string;
  movieDetailsData: MovieDetail;
  showReviews = false;
  reviewData: Review[] = [];
  threshold = 1000;  
  isExpanded = false;
  noReviewsMessage: string;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit() {
    // subscribe to get movie id
    this.route.params.subscribe(params => {
      this.movieID = params['movieID'];

      // subscibe and set movieDetailsData
      this.moviesService.fetchMovieDetail(this.movieID).subscribe(responseData => {
        this.movieDetailsData = responseData;
      })
    })
  }

  // return backdrop image url
  getBackdropImage(backdropPath: string) {
    const baseImageUrl = "https://image.tmdb.org/t/p/w780";
    return `${baseImageUrl}${backdropPath}`
  }

  onShowReviews() {
    // toggle show reviews section
    this.showReviews = !this.showReviews;

    // subscribe and set reviewData
    if (this.showReviews && this.reviewData.length === 0) {
    this.moviesService.fetchReviews(this.movieID).subscribe(responseData => {
      this.reviewData = responseData;
      this.noReviewsMessage = 'Currently there are no reviews for this movie.';
    })
  }
  }

  toggleAccordion() {
    this.isExpanded = !this.isExpanded;
  }

}
