import { createSelector } from "@ngrx/store";
import { customItemsFeatureSelector } from "./custom-items.selector";
import { searchItemsFeatureSelector } from "./search-items.selector";

export const allItemsSelector = createSelector(
  searchItemsFeatureSelector,
  customItemsFeatureSelector,
  ( searchItems, customItems ) => [...searchItems, ...customItems],
);
