import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-sort-form',
  templateUrl: './sort-form.component.html',
  styleUrls: ['./sort-form.component.scss'],
})
export class SortFormComponent {
  @Output() setSorting = new EventEmitter<string>();
  @Output() setSortIsDesc = new EventEmitter<boolean>();
  @Output() setSortingText = new EventEmitter<string>();
  isDesc = false;
  sortingText = '';

  setSortingField(field: string) {
    this.setSorting.emit(field);
    this.isDesc = !this.isDesc;
    this.setSortIsDesc.emit(this.isDesc);
  }

  submitSortingText() {
    this.setSortingText.emit(this.sortingText);
  }
}
