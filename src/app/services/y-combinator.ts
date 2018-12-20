import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/** Provide a REST service for YCombinator apis */
@Injectable()
export class YCombinatorService {

  /** Construct the service */
  constructor(private http: HttpClient) {}

  /**
   * Query the API for news by search text
   * @param text  The text string to search news by
   * @returns  News data
   * @see  https://hn.algolia.com/api
   */
  async searchNewsByText(text: string, page?: number): Promise<any> {
    return this.http.get(`https://hn.algolia.com/api/v1/search?query=${text}&page=${page || ''}`).toPromise();
  }

  /**
   * Loads recent news stories
   * @param page  The page number to load
   * @returns  News data
   * @see  https://hn.algolia.com/api
   */
  async loadRecentNews(page?: number): Promise<any> {
    return this.http.get(`https://hn.algolia.com/api/v1/search_by_date?page=${page || ''}`).toPromise();
  }
}
