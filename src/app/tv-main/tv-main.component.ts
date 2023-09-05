import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from './shared/shared.service';


@Component({
  selector: 'app-tv-main',
  templateUrl: './tv-main.component.html',
  styleUrls: ['./tv-main.component.css']
})
export class TvMainComponent implements OnInit{
  currentPage: number;
  totalPages: number;
  showPages: number[] = [];

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
    if(currentPath) {
    const basePath = currentPath.split('/')[0];
    this.currentPage = page;
    // navigate to correct path
    this.router.navigate([`/tv-series/${basePath}/${page}`]);
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
