import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  searchingText = '';

  constructor(private searchService: SearchService) {}

  submitSearchingText() {
    this.searchService.setSearchText(this.searchingText);
  }
}
