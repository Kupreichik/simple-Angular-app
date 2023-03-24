import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client-app';
  searching = '';

  submitSearchingText(searchingText: string): void {
    this.searching = searchingText;
  }
}