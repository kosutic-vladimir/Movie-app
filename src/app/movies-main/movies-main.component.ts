import { Component } from '@angular/core';
import { SharedService } from './shared/shared.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-main',
  templateUrl: './movies-main.component.html',
  styleUrls: ['./movies-main.component.css']
})
export class MoviesMainComponent {
  currentPage: number;
  totalPages: number;
  showPages: number[] = [];
  genres = [{"id": 28,"name": "Action"},{"id": 12,"name": "Adventure"},{"id": 16,"name": "Animation"},{"id": 35,"name": "Comedy"},
  {"id": 80,"name": "Crime"},{"id": 18,"name": "Drama"},{"id": 10751,"name": "Family"},
  {"id": 14,"name": "Fantasy"},{"id": 36,"name": "History"},{"id": 27,"name": "Horror"},{"id": 10402,"name": "Music"},
  {"id": 9648,"name": "Mystery"},{"id": 10749,"name": "Romance"},{"id": 878,"name": "Science Fiction"},{"id": 10770,"name": "TV Movie"},
  {"id": 53,"name": "Thriller"},{"id": 10752,"name": "War"},{"id": 37,"name": "Western"}];

  constructor(private sharedService: SharedService, private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    // gets page params from child element if child element exist
    this.route.firstChild?.params.subscribe(params => {
      this.currentPage = +params['page'];
    })

    // gets total pages from shared service observable
    this.sharedService.totalPages$.subscribe(totalPages => {
    
      this.totalPages = totalPages;
      this.setPagesToShow();
    })
  }

  // changes shown page
  goToPage(page: number) {
    // get current child path 
    const currentPath = this.route.firstChild?.snapshot.routeConfig?.path;
    const currentParams = this.route.firstChild?.snapshot.params;
    if(currentPath && currentParams) {
    const basePath = currentPath.split('/')[0];
    this.currentPage = page;
    const genreId = currentParams['id'];

    // navigate to correct path
    if(basePath === 'genre') {
      this.router.navigate([`/movies/${basePath}/${genreId}/${page}`]);
    } else {
    this.router.navigate([`/movies/${basePath}/${page}`]);
    }
    }
    // show correct pages
    this.setPagesToShow();
  }

  // set which pages are correct
  setPagesToShow() {
    // calulates min and max page
    const startPage = Math.max(this.currentPage - 2, 1);
    const endPage = Math.min(startPage + 4, this.totalPages);
    // clear array 
    this.showPages = [];
    // place new pages into array
    for (let i = startPage; i <= endPage; i++) {
      this.showPages.push(i);
    }
  }

  // go to next page
  onNext() {
    this.currentPage = Math.min(this.currentPage + 1, this.totalPages);
    this.goToPage(this.currentPage);
  }

  // go to previous page
  onPrev() {
    this.currentPage = Math.max(this.currentPage - 1, 1);
    this.goToPage(this.currentPage);
  }

  setPage() {
    this.currentPage = 1;
  }
}
