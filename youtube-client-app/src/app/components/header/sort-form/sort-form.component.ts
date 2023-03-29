import { Component, EventEmitter, Output  } from '@angular/core';
import { SortingOptions } from 'src/app/models/sorting-options.model';

@Component({
  selector: 'app-sort-form',
  templateUrl: './sort-form.component.html',
  styleUrls: ['./sort-form.component.scss'],
})
export class SortFormComponent {
  @Output() setSortingOptions = new EventEmitter<SortingOptions>();
  @Output() setSortingText = new EventEmitter<string>();
  isDesc = false;
  sortingText = '';

  setSortingField(field: string) {
    this.isDesc = !this.isDesc;
    this.setSortingOptions.emit({ field, isDesc: this.isDesc });
  }

  submitSortingText() {
    this.setSortingText.emit(this.sortingText);
  }
}
