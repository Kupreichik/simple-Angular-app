import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search/search.service';
import { SortService } from 'src/app/core/services/sort/sort.service';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { data } from '../../constants/response.constant'

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.scss'],
})
export class SearchResultsPageComponent {
  searchItems: SearchItem[] = data.items;

  constructor(public searchService: SearchService, public sortService: SortService) {
  }
}
