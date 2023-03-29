import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  @Output() submitSearch = new EventEmitter<string>();
  searchingText = '';

  submitSearchingText() {
    this.submitSearch.emit(this.searchingText);
  }
}
