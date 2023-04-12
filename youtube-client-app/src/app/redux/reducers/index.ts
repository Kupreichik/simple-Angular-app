import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { State } from '../state.models';
import { customItemReducer } from './custom-item.reducers';
import { searchItemsReducer } from './search-items.reducers';

export const initialState: State = {
  searchItems: [],
  customItems: []
}

export const reducers: ActionReducerMap<State> = {
  searchItems: searchItemsReducer,
  customItems: customItemReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
