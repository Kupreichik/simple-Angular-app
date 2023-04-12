import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResultsCount } from 'src/app/youtube/constants/response.constant';
import { SearchResults } from 'src/app/youtube/models/search-results.model';
import { SearchItem } from 'src/app/redux/state.models';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchItems$ = new BehaviorSubject<SearchItem[]>([]);
  errorMessage = '';

  constructor(private http: HttpClient) {}

  fetchSearchResults(search: string): Observable<string> {
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
}
