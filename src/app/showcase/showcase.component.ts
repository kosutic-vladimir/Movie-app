import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { Router } from '@angular/router';



@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css'],
  animations: [
    trigger('slideAnimation', [
      state('firstSlide', style({transform: 'translateX(0%)'})),
      state('secondSlide', style({transform: 'translateX(-100%)'})),
      state('thirdSlide', style({transform: 'translateX(-200%)'})),
      state('fourthSlide', style({transform: 'translateX(-300%)'})),
      state('fifthSlide', style({transform: 'translateX(-400%)'})),
      transition('* <=> *', animate('2000ms ease-in-out'))
    ])
  ]
})
export class ShowcaseComponent implements OnInit, OnDestroy{
  slides = [
    {url: 'https://i.imgur.com/vJrLvPB.jpg'},
    {url: 'https://i.imgur.com/TrikA9X.jpg'},
    {url: 'https://i.imgur.com/d3a52rb.jpg'},
    {url: 'https://i.imgur.com/fs4qlnv.jpg'},
    {url: 'https://i.imgur.com/EVfTDCi.jpg'},
  ];
  currentSlide = 0;
  state = 'firstSlide';
  slideInterval: any;

  
  constructor(private router: Router) {}

  ngOnInit() {
    this.slideInterval = setInterval(() => {
      this.nextSlide()
    }, 5000);
  }

  nextSlide() {
    this.currentSlide++;

    if(this.currentSlide > this.slides.length - 1) {
      this.currentSlide = 0;
    }

    this.updateState();
  }
  
  updateState() {
    const slideStates = ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide', 'fifthSlide'];
    this.state = slideStates[this.currentSlide];
  }
  
  goToSlide(index: number) {
    clearInterval(this.slideInterval)
    this.currentSlide = index;
    this.updateState();
  }
  
  ngOnDestroy() {
    clearInterval(this.slideInterval);
  }

  onBrowseMovies() {
    this.router.navigate(['/movies']);
  }

  OnBrowseTvSeries() {
    this.router.navigate(['/tv-series']);
  }
}
