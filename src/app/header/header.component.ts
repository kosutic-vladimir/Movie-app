import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchControl = new FormControl('');

  constructor(private router: Router) {

  }

  onSubmit(search: {searchQuery: string}) {
    const query = search.searchQuery;
  
    if(query) {
      this.router.navigate(['/search', query]);
    }
  }
}
