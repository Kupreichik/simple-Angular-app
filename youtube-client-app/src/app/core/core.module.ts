import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {
  HeaderComponent,
  SearchFormComponent,
  SortFormComponent
} from './components';

const COMPONENTS = [HeaderComponent, SearchFormComponent, SortFormComponent];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ...COMPONENTS
  ],
    providers: [],
})
export class CoreModule {}
