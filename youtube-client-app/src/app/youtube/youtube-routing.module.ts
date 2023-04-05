import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';
import { VideoInfoPageComponent } from './pages/video-info-page/video-info-page.component';

const routes: Routes = [
  { path: '', component: SearchResultsPageComponent },
  { path: 'video/:id', component: VideoInfoPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
