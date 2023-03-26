import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  sortingVisible = false;
  @Output() submitSearch = new EventEmitter<string>();
  @Output() setSorting = new EventEmitter<string>();
  @Output() setSortIsDesc = new EventEmitter<boolean>();
  @Output() setSortText = new EventEmitter<string>();
  searchingText = '';

  sortingVisibleToggle() {
    this.sortingVisible = !this.sortingVisible;
  }

  submitSearchingText(submitText: string) {
    this.searchingText = submitText;
    this.submitSearch.emit(this.searchingText);
    this.searchingText = '';
  }

  setSortingField(field: string) {
    this.setSorting.emit(field);
  }

  setSortingIsDesc(isDesc: boolean) {
    this.setSortIsDesc.emit(isDesc);
  }

  setSortingText(text: string) {
    this.setSortText.emit(text);
  };
}
