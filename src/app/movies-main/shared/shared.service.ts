import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class SharedService {
    // set observable to emit total pages data
    private totalPagesSubject = new BehaviorSubject<number>(0);
    // subscribed in movies-main.component to get data
    totalPages$ = this.totalPagesSubject.asObservable();

    trailerModal = new Subject<string>();

    constructor(private http: HttpClient) {}
    
    // called in playing now / top rated / upcoming components to emit total pages data
    setTotalPages(pages: number) {
        this.totalPagesSubject.next(pages);
    }

     // called by onWatchTrailer in movie-card-component and subsribed in app component
     openTrailerModal(url: string) {
        this.trailerModal.next(url);
    }
 
}