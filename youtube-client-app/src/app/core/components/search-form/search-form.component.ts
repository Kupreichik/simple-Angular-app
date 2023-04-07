import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  searchInput = new FormControl;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchInput.valueChanges.pipe(
      filter(value => value.length >= 3),
      debounceTime(500)
    ).subscribe(
      (value) => this.searchService.setSearchText(value)
    )
  }
}
