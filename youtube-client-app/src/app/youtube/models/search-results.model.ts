import { SearchItem } from "src/app/redux/state.models";

export interface SearchResults<T> {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: SearchItem<T>[];
}

export type ResultSearchId = {
  kind: string;
  videoId: string;
}
