import { Input, Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';
import { data } from '../../../constants/response.constant';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() itemData: SearchItem = data.items[0];
  previewSrc!: string;
  fullTitle!: string;

  ngOnInit(): void {
    this.previewSrc = this.itemData.snippet.thumbnails.medium.url;
    this.fullTitle = this.itemData.snippet.title;
  }
}
