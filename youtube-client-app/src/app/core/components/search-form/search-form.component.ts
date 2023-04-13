import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../../../youtube/services/search/search.service';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, filter } from 'rxjs';
import { debounceDelay, debounceMinSearchLength } from '../../constants/constants';
import { Store } from '@ngrx/store';
import { requestSearchItems } from 'src/app/redux/actions/search-items.actions';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  searchInput = new FormControl();
  inputSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.inputSubscription = this.searchInput.valueChanges
      .pipe(
        filter((value) => value.length >= debounceMinSearchLength),
        debounceTime(debounceDelay),
      )
      .subscribe((value) => this.store.dispatch(requestSearchItems({ searchingString: value })));
  }

  ngOnDestroy(): void {
    this.inputSubscription.unsubscribe();
  }
}
