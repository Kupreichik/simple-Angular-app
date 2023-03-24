import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  sortingVisible = false;
  @Output() submitSearch = new EventEmitter<string>();
  searchingText = '';

  sortingVisibleToggle() {
    this.sortingVisible = !this.sortingVisible;
  }

  submitSearchingText(submitText: string) {
    this.searchingText = submitText;
    this.submitSearch.emit(this.searchingText);
    this.searchingText = '';
  }
}
