import { Component } from '@angular/core';
import { SortingOptions } from './models/sorting-options.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client-app';
  searching = '';
  sortField = '';
  isDesc = false;
  sortText = '';

  submitSearchingText(searchingText: string): void {
    this.searching = searchingText;
  }

  setSortingOptions(options: SortingOptions) {
    this.sortField = options.field;
    this.isDesc = options.isDesc;
  }

  setSortingText(text: string) {
    this.sortText = text;
  }
}