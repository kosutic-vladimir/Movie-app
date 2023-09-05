import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MovieDetail, MoviesResponse } from "./movies.model";
import { ReviewResponse } from "./movies.model";
import { map } from "rxjs";


@Injectable({providedIn: 'root'})
export class MoviesService {
    private apiKey = '8e14c69691252552379ed2d6518ab638';
    private youtubeApiKey = 'AIzaSyBFFjrxPwTsaQ1rz8w37-YI_CFiDzLFtGc';
    private baseUrl = 'https://api.themoviedb.org/3';

    constructor(private http: HttpClient) {}

    // fetch popular data from API , subscribed in playing-now.component
    fetchPlayingNow(page: number) {
        return this.http.get<MoviesResponse>(`${this.baseUrl}/movie/now_playing?language=en-US&page=${page}&api_key=${this.apiKey}`)
    }

    // fetch popular data from API , subscribed in top-rated.component
    fetchTopRated(page: number) {
        return this.http.get<MoviesResponse>(`${this.baseUrl}/movie/top_rated?language=en-US&page=${page}&api_key=${this.apiKey}`)
    }

    // fetch popular data from API , subscribed in upcoming.component
    fetchUpcoming(page: number) {
        return this.http.get<MoviesResponse>(`${this.baseUrl}/movie/upcoming?language=en-US&page=${page}&api_key=${this.apiKey}`)
    }

    // fetch url data from API , subscribed in movie-card.component
    fetchYouTubeTrailer(movieTitle: string) {
        const searchQuery = encodeURIComponent(`${movieTitle} trailer`);
        const url = `https://www.googleapis.com/youtube/v3/search?key=${this.youtubeApiKey}&q=${searchQuery}&part=snippet&type=video`;
        return this.http.get(url);
    }

    // fetch movie details data from API , subscribed in moview-overview.component
    fetchMovieDetail(movieID: string) {
        return this.http.get<MovieDetail>(`${this.baseUrl}/movie/${movieID}?language=en-US&api_key=${this.apiKey}`)
    }

    // fetch reviews data from API , subscribed in moview-overview.component
    fetchReviews(movieID: string) {
        return this.http.get<ReviewResponse>(`${this.baseUrl}/movie/${movieID}/reviews?language=en-US&page=1&api_key=${this.apiKey}`).pipe(
            map(responseData => responseData.results)
          );
    }

    // fetch genre movie data from API , genre.component
    fetchMoviesByGenre(genreID: string, page: string = '1') {
        return this.http.get<MoviesResponse>(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=${genreID}&page=${page}`)
    }

    fetchSearchMovies(query: string) {
        return this.http.get<MoviesResponse>(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`).pipe(
            map(response => {
                response.results = response.results.filter(series => series.poster_path !== null);
                return response;
            })
        )
    }
}