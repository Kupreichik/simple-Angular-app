import { createFeatureSelector } from '@ngrx/store';
import { SearchItem, State } from '../state.models';

export const searchItemsFeatureSelector = createFeatureSelector<SearchItem[]>('searchItems');
