import { Component, EventEmitter, Output  } from '@angular/core';
import { SortingOptions } from 'src/app/youtube/models/sorting-options.model';
import { SortService } from '../../services/sort/sort.service';

@Component({
  selector: 'app-sort-form',
  templateUrl: './sort-form.component.html',
  styleUrls: ['./sort-form.component.scss'],
})
export class SortFormComponent {
  sortingText = '';

  constructor(private sortService: SortService) {}

  setSortingField(field: string) {
    this.sortService.setSortingOptions(field);
  }

  submitSortingText() {
    this.sortService.setSortingText(this.sortingText);
  }
}
