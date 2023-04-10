import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {
  HeaderComponent,
  SearchFormComponent,
  SortFormComponent
} from './components';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthYoutubeInterceptor } from './interceptors/auth-youtube.interceptor';

const COMPONENTS = [HeaderComponent, SearchFormComponent, SortFormComponent];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthYoutubeInterceptor,
    multi: true
  }],
})
export class CoreModule {}
