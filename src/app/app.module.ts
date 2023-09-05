import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { EuDateFormatPipe } from './movies-main/shared/pipes/date-format.pipe';
import { NumberPipe } from './movies-main/shared/pipes/number-format.pipe';

import { AppComponent } from './app.component';
import { PlayingNowComponent } from './movies-main/playing-now/playing-now.component';
import { HeaderComponent } from './header/header.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { TvMainComponent } from './tv-main/tv-main.component';
import { OnTheAirComponent } from './tv-main/on-the-air/on-the-air.component';
import { PopularComponent } from './tv-main/popular/popular.component';
import { TvTopRatedComponent } from './tv-main/top-rated/top-rated.component';
import { TvCardComponent } from './tv-main/shared/tv-card/tv-card.component';
import { MoviesMainComponent } from './movies-main/movies-main.component';
import { UpcomingComponent } from './movies-main/upcoming/upcoming.component';
import { MoviesTopRatedComponent } from './movies-main/top-rated/top-rated.component';
import { MovieCardComponent } from './movies-main/shared/movie-card/movie-card.component';
import { TrailerComponent } from './movies-main/shared/trailer/trailer.component';
import { MovieOverviewComponent } from './movies-main/shared/movies-overview/movies-overview.component';
import { GenreComponent } from './movies-main/genre/genre.component';
import { SearchComponent } from './movies-main/search/search.component';





@NgModule({
  declarations: [
    AppComponent,
    PlayingNowComponent,
    HeaderComponent,
    ShowcaseComponent,
    TvMainComponent,
    OnTheAirComponent,
    PopularComponent,
    TvTopRatedComponent,
    TvCardComponent,
    MoviesMainComponent,
    UpcomingComponent,
    MoviesTopRatedComponent,
    MovieCardComponent,
    TrailerComponent,
    MovieOverviewComponent,
    EuDateFormatPipe,
    NumberPipe,
    GenreComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
