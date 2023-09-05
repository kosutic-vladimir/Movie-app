import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SharedService {
    // set observable to emit total pages data
    private totalPagesSubject = new BehaviorSubject<number>(0);
    // subscribed in tv-main.component to get data
    totalPages$ = this.totalPagesSubject.asObservable();
    
    // called in popular / top rated / on the air components to emit total pages data
    setTotalPages(pages: number) {
        this.totalPagesSubject.next(pages);
    }
}