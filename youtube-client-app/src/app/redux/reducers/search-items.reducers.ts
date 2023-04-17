import { createReducer, on } from "@ngrx/store";
import { uploadSearchItems } from "../actions/search-items.actions";
import { SearchItem } from '../state.models';

const initialState: SearchItem<string>[] = [];

export const searchItemsReducer = createReducer(
  initialState,
  on(uploadSearchItems, (state, { searchItems }) => (
    [...searchItems]
  ))
)
