import { Component } from '@angular/core';
import { SearchService } from 'src/app/core/services/search/search.service';
import { SortService } from 'src/app/core/services/sort/sort.service';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { VideoService } from '../../services/video-service/video.service';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.scss'],
})
export class SearchResultsPageComponent {
  searchItems: SearchItem[];

  constructor(
    public searchService: SearchService,
    public sortService: SortService,
    private videoService: VideoService
    ) {
      this.searchItems = this.videoService.getAllSearchItems()
    }
}
