import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {
  HeaderComponent,
  SearchFormComponent,
  SortFormComponent
} from './components';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchFormComponent,
    SortFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    SearchFormComponent,
    SortFormComponent
  ],
    providers: [],
})
export class CoreModule {}
