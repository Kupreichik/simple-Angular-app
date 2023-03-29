import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';
import { data } from '../../../constants/response.constant'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  searchItems: SearchItem[] = data.items;
  @Input() sortField = '';
  @Input() isDesc = false;
  @Input() sortText = '';
}
