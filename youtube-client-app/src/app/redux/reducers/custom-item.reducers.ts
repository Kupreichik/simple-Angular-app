import { createReducer, on } from "@ngrx/store";
import { initialState } from "./index";
import { createCustomItem } from "../actions/custom-items.actions";

export const customItemReducer = createReducer(
  initialState.customItems,
  on(createCustomItem, (state, customItem) => ([
    ...state,
    customItem,
  ])),
);