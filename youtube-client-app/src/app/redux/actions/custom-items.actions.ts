import { createAction, props } from "@ngrx/store";
import { SearchItem } from "../state.models";

export const createCustomItem = createAction(
  '[customItems] createCustomItem', 
  props<SearchItem<string>>()
  );
  