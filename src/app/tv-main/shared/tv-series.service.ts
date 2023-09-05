import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TvSeriesResponse } from "./tv.series.model";
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TvSeriesService {
    private baseUrl = 'https://api.themoviedb.org/3';
    private apiKey = '';

    constructor(private http: HttpClient) {}

    // fetch popular data from API , subscribed in popular.component.ts
    fetchPopular(page: number) {
        return this.http.get<TvSeriesResponse>(
            `${this.baseUrl}/tv/on_the_air?with_original_language=en&language=en-US&page=${page}&api_key=${this.apiKey}`).pipe(
                map(response => {
                    response.results = response.results.filter(series => series.poster_path !== null);
                    return response;
                })
            )
    }

    // fetch top rated data from API , subscribed in top-rated.component.ts
    fetchTopRated(page: number) {
        return this.http.get<TvSeriesResponse>(
            `${this.baseUrl}/tv/top_rated?with_original_language=en&language=en-US&page=${page}&api_key=${this.apiKey}`).pipe(
                map(response => {
                    response.results = response.results.filter(series => series.poster_path !== null);
                    return response;
                })
            )
    }

    // fetch on the air data from API , subscribed in on-the-air.component.ts
    fetchOnTheAir(page: number) {
        return this.http.get<TvSeriesResponse>(
            `${this.baseUrl}/tv/airing_today?with_original_language=en&language=en-US&page=${page}&api_key=${this.apiKey}`).pipe(
                map(response => {
                    response.results = response.results.filter(series => series.poster_path !== null);
                    return response;
                })
            )
    }
}   
