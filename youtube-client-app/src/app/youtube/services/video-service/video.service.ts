import { Injectable } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { data } from '../../constants/response.constant';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  searchItems: SearchItem[] = data.items;

  getAllSearchItems(): SearchItem[] {
    return this.searchItems;
  }

  getSearchItemById(id: string): SearchItem | undefined {
    return this.searchItems.find((searchItem) => searchItem.id === id);
  }
}
