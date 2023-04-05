import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public searchText= '';
  
  setSearchText(text: string):void {
    this.searchText = text;
  }
}
