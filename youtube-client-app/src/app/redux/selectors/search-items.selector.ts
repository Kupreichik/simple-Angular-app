import { createFeatureSelector } from '@ngrx/store';
import { SearchItem } from '../state.models';

export const searchItemsFeatureSelector = createFeatureSelector<SearchItem<string>[]>('searchItems');
