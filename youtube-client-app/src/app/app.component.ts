import { Component, OnInit } from '@angular/core';

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

  setSortingField(field: string) {
    this.sortField = field;
  }

  setSortingIsDesc(isDesc: boolean) {
    this.isDesc = isDesc;
  }

  setSortingText(text: string) {
    this.sortText = text;
  }
}