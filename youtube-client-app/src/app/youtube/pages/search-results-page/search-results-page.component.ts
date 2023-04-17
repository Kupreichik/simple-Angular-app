import { Component } from '@angular/core';
import { SearchService } from 'src/app/youtube/services/search/search.service';
import { SortService } from 'src/app/core/services/sort/sort.service';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { allItemsSelector } from 'src/app/redux/selectors/all-items.selector';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.scss'],
})
export class SearchResultsPageComponent {
  searchItems$ = this.store.select(allItemsSelector);

  constructor(
    private store: Store,
    public sortService: SortService,
    private searchService: SearchService,
  ) {}

  hasSearchItems(): Observable<boolean> {
    return this.searchItems$.pipe(map((items) => !!items.length));
  }

  getFetchErrorMessage(): string {
    return this.searchService.errorMessage;
  }
}
