import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowcaseComponent } from './showcase/showcase.component';

import { TvMainComponent } from './tv-main/tv-main.component';
import { OnTheAirComponent } from './tv-main/on-the-air/on-the-air.component';
import { PopularComponent } from './tv-main/popular/popular.component';
import { TvTopRatedComponent } from './tv-main/top-rated/top-rated.component';

import { MoviesMainComponent } from './movies-main/movies-main.component';
import { PlayingNowComponent } from './movies-main/playing-now/playing-now.component';
import { MoviesTopRatedComponent } from './movies-main/top-rated/top-rated.component';
import { UpcomingComponent } from './movies-main/upcoming/upcoming.component';
import { MovieOverviewComponent } from './movies-main/shared/movies-overview/movies-overview.component';
import { GenreComponent } from './movies-main/genre/genre.component';
import { SearchComponent } from './movies-main/search/search.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: ShowcaseComponent},
  {path: 'search/:query', component: SearchComponent},
  {path: 'movies', component: MoviesMainComponent, children: [
    {path: '', redirectTo: 'playing-now/1', pathMatch: 'full'},
    {path: 'playing-now', redirectTo: 'playing-now/1', pathMatch: 'full'},
    {path: 'playing-now/:page', component: PlayingNowComponent},
    {path: 'top-rated', redirectTo: 'top-rated/1', pathMatch: 'full'},
    {path: 'top-rated/:page', component: MoviesTopRatedComponent},
    {path: 'upcoming', redirectTo: 'upcoming/1', pathMatch: 'full'},
    {path: 'upcoming/:page', component: UpcomingComponent},
    {path: 'genre/:id/:page', component: GenreComponent},
  ]},
  {path: 'movies/overview/:movieID', component: MovieOverviewComponent},
  {path: 'tv-series', component: TvMainComponent, children: [
    {path: '', redirectTo: 'popular/1', pathMatch: 'full'},
    {path: 'popular', redirectTo: 'popular/1', pathMatch: 'full'},
    {path: 'popular/:page', component: PopularComponent},
    {path: 'on-the-air', redirectTo: 'on-the-air/1', pathMatch: 'full'},
    {path: 'on-the-air/:page', component: OnTheAirComponent},
    {path: 'top-rated', redirectTo: 'top-rated/1', pathMatch: 'full'},
    {path: 'top-rated/:page', component: TvTopRatedComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
