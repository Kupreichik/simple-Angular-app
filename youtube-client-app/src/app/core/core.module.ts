import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {
  HeaderComponent,
  SearchFormComponent,
  SortFormComponent
} from './components';
import { RouterModule } from '@angular/router';

const COMPONENTS = [HeaderComponent, SearchFormComponent, SortFormComponent];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ...COMPONENTS
  ],
    providers: [],
})
export class CoreModule {}
