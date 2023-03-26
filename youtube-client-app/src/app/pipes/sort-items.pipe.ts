import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sortItems',
})
export class SortItemsPipe implements PipeTransform {
  transform(searchItems: SearchItem[], sortingField: string, isDesc: boolean): SearchItem[] {
    if (sortingField = 'date') {
      return searchItems.sort((a, b) => {
        if (isDesc) {
          return Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt);
        } else {
          return Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt);
        }
      })
    }
    if (sortingField = 'views') {
      return searchItems.sort((a, b) => {
        if (isDesc) {
          return +b.statistics.viewCount - +a.statistics.viewCount;
        } else {
          return +a.statistics.viewCount - +b.statistics.viewCount;
        }
      });
    }
    return searchItems;
  }
}
