import { Input, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchItem } from 'src/app/redux/state.models';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() itemData!: SearchItem;
  fullTitle!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.fullTitle = this.itemData.snippet.title;
  }

  get previewSrc(): string {
    return this.itemData.snippet.thumbnails.medium.url;
  }

  get publishedDate(): string {
    return this.itemData.snippet.publishedAt;
  }

  openVideoInfoPage(): void {
    this.router.navigate(['/video', this.itemData.id]);
  }
}
