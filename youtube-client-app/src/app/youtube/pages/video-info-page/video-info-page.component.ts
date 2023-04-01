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
  videoData!: SearchItem;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    const data = this.videoService.getVideoData(this.id);
    if (!data) {
      this.router.navigateByUrl('page-not-found');
    } else {
      this.videoData = data;
    }
  }

  get publishedDate(): string {
    return this.videoData.snippet.publishedAt;
  }

  get previewSrc(): string {
    return this.videoData.snippet.thumbnails.standard.url;
  }

  goBack(): void {
    history.back()
  };
}
