import { Component, Input, Output, EventEmitter } from '@angular/core';
 
/** Provide a re-usable news body pagination */
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.html'
})
export class PaginationComponent {
  /** The news items data */
  @Input() newsItems: any;

  /** Emitting an event to the parent component when previous button is clicked */
  @Output() onPrevious: EventEmitter<MouseEvent> = new EventEmitter();

  /** Emitting an event to the parent component when next button is clicked */
  @Output() onNext: EventEmitter<MouseEvent> = new EventEmitter();

  /** Construct the component */
  constructor() {}

  /** Go to previous page */
  previous(event: MouseEvent) {
    this.onPrevious.emit(event);
  }

  /** Go to next page */
  next(event: MouseEvent) {
    this.onNext.emit(event);
  }
}
