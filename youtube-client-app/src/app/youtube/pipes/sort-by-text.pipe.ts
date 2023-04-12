import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/redux/state.models';

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
