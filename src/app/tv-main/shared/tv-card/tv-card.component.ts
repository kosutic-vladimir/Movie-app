import { Component, Input } from '@angular/core';
import { TvSeries } from '../tv.series.model';

@Component({
  selector: 'app-tv-card',
  templateUrl: './tv-card.component.html',
  styleUrls: ['./tv-card.component.css']
})
export class TvCardComponent {
  // Inputs card data from parent components popular/ top rated / on the air
  @Input() tvCardData: TvSeries;

  getPosterUrl() {
    const imagesBaseUrl = 'https://image.tmdb.org/t/p/';
    const size = 'w185';
    return `${imagesBaseUrl}${size}${this.tvCardData.poster_path}`
  }

  getFirstSentence(overview: string): string {
    const firstSentence = overview.split('.')[0];
    return firstSentence + '.';
  }
  
}
