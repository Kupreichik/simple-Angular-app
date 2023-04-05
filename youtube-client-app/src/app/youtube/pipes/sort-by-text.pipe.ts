import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sortByText',
})
export class SortByTextPipe implements PipeTransform {
  transform(searchItems: SearchItem[], sortText: string): SearchItem[] {
    if (sortText) {
      return searchItems.filter((e) =>
        e.snippet.title.toLocaleLowerCase().includes(sortText.toLocaleLowerCase()),
      );
    }
    return searchItems;
  }
}
