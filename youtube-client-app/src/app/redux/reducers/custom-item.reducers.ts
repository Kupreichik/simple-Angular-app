import { createReducer, on } from "@ngrx/store";
import { createCustomItem } from "../actions/custom-items.actions";
import { SearchItem } from "../state.models";

const initialState: SearchItem[] = [];

export const customItemReducer = createReducer(
  initialState,
  on(createCustomItem, (state, customItem) => ([
    ...state,
    customItem,
  ])),
);
