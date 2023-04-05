import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  sortField = '';
  isDesc = false;
  sortText = '';

  setSortingOptions(field: string) {
    this.sortField = field;
    this.isDesc = !this.isDesc;
  }

  setSortingText(text: string) {
    this.sortText = text;
  }
}
