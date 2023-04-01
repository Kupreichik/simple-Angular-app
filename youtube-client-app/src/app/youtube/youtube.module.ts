import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortenTitlePipe, SortItemsPipe, SortByTextPipe } from './pipes';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';
import { PublicationDateColorDirective } from './directives/publication-date-color.directive';
import { SharedModule } from '../shared/shared.module';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { ItemStatisticsComponent } from './components/item-statistics/item-statistics.component';
import { VideoInfoPageComponent } from './pages/video-info-page/video-info-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    ShortenTitlePipe,
    SortItemsPipe,
    SortByTextPipe,
    SearchItemComponent,
    SearchResultsPageComponent,
    PublicationDateColorDirective,
    ItemStatisticsComponent,
    VideoInfoPageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    YoutubeRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports: [
  ],
})
export class YoutubeModule {}
