import { SearchItem } from "src/app/redux/state.models";


export interface SearchResults {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: SearchItem[];
}
