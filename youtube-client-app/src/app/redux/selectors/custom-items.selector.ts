import { createFeatureSelector } from "@ngrx/store";
import { SearchItem } from "../state.models";

export const customItemsFeatureSelector = createFeatureSelector<SearchItem[]>('customItems');
