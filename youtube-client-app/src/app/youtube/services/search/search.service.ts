import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResultsCount } from 'src/app/youtube/constants/response.constant';
import { ResultSearchId, SearchResults } from 'src/app/youtube/models/search-results.model';
import { SearchItem } from 'src/app/redux/state.models';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  errorMessage = '';

  constructor(private http: HttpClient) {}

  fetchSearchResults(search: string): Observable<string> {
    const params = new HttpParams()
      .append('type', 'video')
      .append('part', 'snippet')
      .append('maxResults', SearchResultsCount)
      .append('q', search);

    return this.http.get<SearchResults<ResultSearchId>>('search', { params }).pipe(
      map((response) => {
        return response.items.map((item) => item.id.videoId).join(',');
      }),
      catchError((err) => {
        this.errorMessage = err.message;
        return EMPTY;
      }),
    );
  }

  fetchSearchItems(itemsId: string): Observable<SearchItem<string>[]> {
    const params = new HttpParams().append('part', 'snippet,statistics').append('id', itemsId);

    return this.http
      .get<SearchResults<string>>('videos', { params })
      .pipe(map((response) => response.items));
  }
}
