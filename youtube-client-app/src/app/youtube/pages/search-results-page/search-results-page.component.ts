import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from 'src/app/youtube/services/search/search.service';
import { SortService } from 'src/app/core/services/sort/sort.service';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.scss'],
})
export class SearchResultsPageComponent implements OnInit, OnDestroy {
  searchItems!: SearchItem[];
  itemsSubscription!: Subscription;

  constructor(public searchService: SearchService, public sortService: SortService) {}

  ngOnInit(): void {
    this.itemsSubscription = this.searchService.searchItems.subscribe(
      (searchItems) => (this.searchItems = searchItems),
    );
  }

  ngOnDestroy(): void {
    this.itemsSubscription.unsubscribe;
  }

  hasSearchItems(): boolean {
    return this.searchService.searchItems.getValue().length > 0;
  }
}
