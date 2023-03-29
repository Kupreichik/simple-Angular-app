import { Input, Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';
import { data } from '../../../constants/response.constant';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() itemData!: SearchItem
  fullTitle!: string;
  publishedDate!: string;

  ngOnInit(): void {
    this.fullTitle = this.itemData.snippet.title;
    this.publishedDate = this.itemData.snippet.publishedAt;
  }

  get previewSrc() {
    return this.itemData.snippet.thumbnails.medium.url;
  }
}
