import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortenTitlePipe, SortItemsPipe, SortByTextPipe } from './pipes';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';
import { PublicationDateColorDirective } from './directives/publication-date-color.directive';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule
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
