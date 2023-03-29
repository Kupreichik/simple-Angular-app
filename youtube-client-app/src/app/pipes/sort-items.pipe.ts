import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sortItems',
})
export class SortItemsPipe implements PipeTransform {
  transform(searchItems: SearchItem[], sortingField: string, isDesc: boolean): SearchItem[] {
    const direction = isDesc ? 1 : -1;
    if (sortingField === 'date') {
      return searchItems.sort(
        (a, b) => (Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt)) * direction)
    }
    if (sortingField === 'views') {
      return searchItems.sort(
        (a, b) => (+b.statistics.viewCount - +a.statistics.viewCount) * direction,
      );
    }
    return searchItems;
  }
}
