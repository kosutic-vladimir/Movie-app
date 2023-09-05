import { Component, Input } from '@angular/core';
import { Movies } from '../movies.model';
import { MoviesService } from '../movies.service';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
 @Input() movieCardData: Movies;

 constructor(private moviesService: MoviesService, private sharedService: SharedService, private router: Router) {}

  // returns image url that is set as src attribute in movie card
  getPosterImage(posterPath: string) {
    const baseImageUrl = "https://image.tmdb.org/t/p/w342";
    return `${baseImageUrl}${posterPath}`
  }

  // gets video url and sent it to shared service
  OnWatchTrailer(movieTitle: string) {
    this.moviesService.fetchYouTubeTrailer(movieTitle).subscribe((response: any) => {
      const videoId = response.items[0]?.id?.videoId;
      if (videoId) {
        const videoUrl = `https://www.youtube.com/embed/${videoId}`;

        // emit url data , subscribed in app component
        this.sharedService.openTrailerModal(videoUrl);
      }}
      )
  }

  // navigate to overview component with movie ID
  goToOverview(movieID: number) {
    this.router.navigate(['/movies/overview', movieID])
  }
}
