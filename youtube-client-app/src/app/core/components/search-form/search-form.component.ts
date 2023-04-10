import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../../../youtube/services/search/search.service';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, filter } from 'rxjs';
import { debounceDelay, debounceMinSearchLength } from '../../constants/constants';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  searchInput = new FormControl();
  inputSubscription!: Subscription;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.inputSubscription = this.searchInput.valueChanges
      .pipe(
        filter((value) => value.length >= debounceMinSearchLength),
        debounceTime(debounceDelay),
      )
      .subscribe((value) => this.searchService.updateSearchItems(value));
  }

  ngOnDestroy(): void {
    this.inputSubscription.unsubscribe();
  }
}
