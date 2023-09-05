import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { SharedService } from './movies-main/shared/shared.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  showTrailerModal = false;
  trailerUrl: SafeResourceUrl;
  trailerSub: Subscription;

  constructor(private sharedService: SharedService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // activated when watched trailer button is clicked
    this.trailerSub = this.sharedService.trailerModal.subscribe(url=> {
      this.showTrailerModal = true;
      this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    })
 }

  onCloseTrailer() {
    this.showTrailerModal = false;
  }

  ngOnDestroy() {
    this.trailerSub.unsubscribe();
  }
}
