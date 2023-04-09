import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { SearchResultsCount } from 'src/app/youtube/constants/response.constant';
import { SearchResults } from 'src/app/youtube/models/search-results.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchItems = new BehaviorSubject<SearchItem[]>([]);

  constructor(private http: HttpClient) {}

  private fetchSearchResults(search: string): Observable<string> {
    const params = new HttpParams()
      .append('type', 'video')
      .append('part', 'snippet')
      .append('maxResults', SearchResultsCount)
      .append('q', search);

    return this.http.get<SearchResults>('search', { params }).pipe(
      map((response) => {
        return response.items.map((item) => item.id.videoId).join(',');
      }),
    );
  }

  fetchSearchItems(itemsId: string): Observable<SearchItem[]> {
      const params = new HttpParams().append('part', 'snippet,statistics').append('id', itemsId);

      return this.http
        .get<SearchResults>('videos', { params })
        .pipe(map((response) => response.items));
  }

  updateSearchItems(search: string): void {
    this.fetchSearchResults(search).subscribe((itemsId) =>
      this.fetchSearchItems(itemsId).subscribe(
        (searchItems) => this.searchItems.next(searchItems)
      )
    );
  }
}
