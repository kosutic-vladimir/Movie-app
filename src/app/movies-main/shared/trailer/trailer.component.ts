import { Component, Output, Input, EventEmitter } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent {
  @Output() close = new EventEmitter<void>();
  @Input() trailerUrl: SafeResourceUrl;

  onClose() {
    this.close.emit();
  }
}
