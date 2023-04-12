import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { requestSearchItems, uploadSearchItems, uploadSearchItemsId } from "../actions/search-items.actions";
import { debounceTime, distinctUntilChanged, map, switchMap } from "rxjs";
import { debounceDelay } from "src/app/core/constants/constants";
import { SearchService } from "src/app/youtube/services/search/search.service";

@Injectable()
export class SearchItemsEffects {

  uploadSearchItemsId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(uploadSearchItemsId),
      distinctUntilChanged((previous, current) => previous.itemsId === current.itemsId),
      switchMap((props) => this.searchService$.fetchSearchItems(props.itemsId)),
      map((searchItems) => uploadSearchItems({searchItems})),
    );
  });

  uploadSearchItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(requestSearchItems),
      debounceTime(debounceDelay),
      distinctUntilChanged(
        (previous, current) => previous.searchingString === current.searchingString,
      ),
      switchMap((props) => this.searchService$.fetchSearchResults(props.searchingString)),
      map((itemsId) => uploadSearchItemsId({ itemsId })),
    );
  });

  constructor(private actions$: Actions, private searchService$: SearchService) {}
}
