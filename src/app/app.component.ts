import { Component, OnInit, HostListener } from '@angular/core';
import { YCombinatorService } from './services/y-combinator';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

/** The application main component */
@Component({
  selector: 'app-root',
  providers: [YCombinatorService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /** List of recent news */
  newsItems: any;

  /** List of searched news items */
  searchedNewsItems: any;

  /** Whether the news items are loading */
  isLoading: boolean;

  /** Search text to query for news by relevance */
  searchText: string;

  /** An observable search text */
  searchText$: Subject<string> = new Subject<string>();

  /** Whether the page is not at the top */
  pageNotTop: boolean;
  
  /** Construct the component */
  constructor(private yCombinatorService: YCombinatorService) {
    this.searchText$.pipe(
      distinctUntilChanged(),
      debounceTime(400),
    ).subscribe(async (text: string) => {
      if (!text) {
        this.searchedNewsItems = undefined;
      } else {
        this.isLoading = true;
        this.searchedNewsItems = await this.yCombinatorService.searchNewsByText(text);
        this.isLoading = false;
      }
    });
  }

  /** Listening the scroll event to see if we need to scroll to top */
  @HostListener('window:scroll', [])
  onscroll(event: MouseEvent) {
    this.pageNotTop = window.scrollY > window.innerHeight;
  }

  /** Scroll to the top of the page */
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  /** Initialise the component */
  async ngOnInit() {
    this.newsItems = await this.yCombinatorService.loadRecentNews();
  }

  /** Search for news items by text query */
  async searchNewsItems(value: string) {
    this.searchText = value;
    this.searchText$.next(value);
  }

  /** Go to the next page on recent news items */
  async nextRecentNewsPage() {
    this.isLoading = true;
    this.newsItems = await this.yCombinatorService.loadRecentNews(this.newsItems.page + 1);
    this.isLoading = false;
  }

  /** Go to the previous page on recent news items */
  async prevRecentNewsPage() {
    this.isLoading = true;
    this.newsItems = await this.yCombinatorService.loadRecentNews(this.newsItems.page - 1);
    this.isLoading = false;
  }

  /** Go to the next page on recent news items */
  async nextSearchedNewsPage() {
    this.isLoading = true;
    this.searchedNewsItems = await this.yCombinatorService.searchNewsByText(this.searchText, this.searchedNewsItems.page + 1);
    this.isLoading = false;
  }

  /** Go to the previous page on recent news items */
  async prevSearchedNewsPage() {
    this.isLoading = true;
    this.searchedNewsItems = await this.yCombinatorService.searchNewsByText(this.searchText, this.searchedNewsItems.page - 1);
    this.isLoading = false;
  }
}
