import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { SearchService } from '../../services/search/search.service';
import { SearchItem, Statistics } from 'src/app/redux/state.models';
import { Store } from '@ngrx/store';
import { allItemsSelector } from 'src/app/redux/selectors/all-items.selector';

@Component({
  selector: 'app-video-info-page',
  templateUrl: './video-info-page.component.html',
  styleUrls: ['./video-info-page.component.scss'],
})
export class VideoInfoPageComponent implements OnDestroy {
  id!: string;
  searchItem!: SearchItem<string>;
  urlParamSubscription!: Subscription;
  storeSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService,
    private store: Store,
  ) {
    this.urlParamSubscription = this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.storeSubscription = this.store
        .select(allItemsSelector)
        .pipe(
          map((items: SearchItem<string>[]) => {
            const item = items.find((item) => item.id === this.id);
            if (!item) {
              this.searchService.fetchSearchItems(this.id).subscribe((items) => {
                const data = items[0];
                if (!data) {
                  this.router.navigateByUrl('page-not-found');
                } else {
                  this.searchItem = data;
                }
              });
            } else {
              this.searchItem = item;
            }
          }),
        )
        .subscribe();
    });
  }

  ngOnDestroy(): void {
    this.urlParamSubscription.unsubscribe();
    this.storeSubscription.unsubscribe();
  }

  get publishedDate(): string {
    return this.searchItem?.snippet.publishedAt;
  }

  get description(): string {
    return this.searchItem?.snippet.description;
  }

  get title(): string {
    return this.searchItem?.snippet.title;
  }

  get previewSrc(): string {
    return this.searchItem?.snippet.thumbnails.standard.url;
  }

  get statistics(): Statistics {
    return this.searchItem?.statistics;
  }

  goToPreviousPage(): void {
    history.back();
  }
}
