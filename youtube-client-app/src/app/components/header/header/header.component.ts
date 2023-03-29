import { Component, EventEmitter, Output } from '@angular/core';
import { SortingOptions } from 'src/app/models/sorting-options.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  sortingVisible = false;
  @Output() submitSearch = new EventEmitter<string>();
  @Output() setSortingOptions = new EventEmitter<SortingOptions>();
  @Output() setSortText = new EventEmitter<string>();


  toggleSortingVisible() {
    this.sortingVisible = !this.sortingVisible;
  }

  submitSearchingText(submitText: string) {
    this.submitSearch.emit(submitText);
  }

  submitSortingOptions(options: SortingOptions) {
    this.setSortingOptions.emit(options);
  }

  setSortingText(text: string) {
    this.setSortText.emit(text);
  }
}
