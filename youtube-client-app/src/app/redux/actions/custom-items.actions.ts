import { createAction, props } from "@ngrx/store";
import { SearchItem } from "../state.models";

export const createCustomItem = createAction(
  '[customItems] create custom item', 
  props<SearchItem<string>>()
  );
