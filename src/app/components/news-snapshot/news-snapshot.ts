import { Component, Input } from '@angular/core';

/** Provide a re-usable news snapshot component */
@Component({
  selector: 'app-news-snapshot',
  templateUrl: './news-snapshot.html'
})
export class NewsSnapshotComponent {
  /** The news snapshot data */
  @Input() newsItem: any;

  /** Construct the component */
  constructor() {}
}
