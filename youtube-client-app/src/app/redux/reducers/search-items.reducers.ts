import { createReducer, on } from "@ngrx/store";
import { initialState } from ".";
import { uploadSearchItems } from "../actions/search-items.actions";

export const searchItemsReducer = createReducer(
  initialState.searchItems,
  on(uploadSearchItems, (state, { searchItems }) => (
    {...state, searchItems}
  ))
)