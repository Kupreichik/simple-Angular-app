import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { ShortenTitlePipe, SortItemsPipe, SortByTextPipe } from './pipes';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';
import { PublicationDateColorDirective } from './directives/publication-date-color.directive';

@NgModule({
  declarations: [
    ShortenTitlePipe,
    SortItemsPipe,
    SortByTextPipe,
    SearchItemComponent,
    SearchResultsPageComponent,
    PublicationDateColorDirective,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  exports: [
    ShortenTitlePipe,
    SortItemsPipe,
    SortByTextPipe,
    SearchItemComponent,
    SearchResultsPageComponent,
    PublicationDateColorDirective,
  ],
})
export class YoutubeModule {}
