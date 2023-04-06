import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';
import { VideoInfoPageComponent } from './pages/video-info-page/video-info-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminGuard } from '../core/guards/admin/admin.guard';

const routes: Routes = [
  { path: '', component: SearchResultsPageComponent },
  { path: 'video/:id', component: VideoInfoPageComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
