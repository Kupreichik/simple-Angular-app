import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SearchItem } from '../../models/search-item.model';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-video-info-page',
  templateUrl: './video-info-page.component.html',
  styleUrls: ['./video-info-page.component.scss'],
})
export class VideoInfoPageComponent implements OnInit {
  id!: string;
  searchItem!: SearchItem;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    const data = this.videoService.getSearchItemById(this.id);
    if (!data) {
      this.router.navigateByUrl('page-not-found');
    } else {
      this.searchItem = data;
    }
  }

  get publishedDate(): string {
    return this.searchItem.snippet.publishedAt;
  }

  get previewSrc(): string {
    return this.searchItem.snippet.thumbnails.standard.url;
  }

  goToPreviousPage(): void {
    history.back();
  }
}
