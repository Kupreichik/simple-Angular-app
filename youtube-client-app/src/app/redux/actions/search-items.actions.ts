import { createAction, props } from "@ngrx/store";
import { SearchItem } from "../state.models";

export const requestSearchItems = createAction(
  '[searchItems] request search items',
  props<{searchingString: string}>()
);

export const uploadSearchItemsId = createAction(
  '[searchItems] upload search items Id',
  props<{ itemsId: string }>(),
);

export const uploadSearchItems = createAction(
  '[searchItems] upload search items',
  props<{ searchItems: SearchItem<string>[] }>(),
);
