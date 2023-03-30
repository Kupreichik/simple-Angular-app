import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

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
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HeaderComponent,
    SearchFormComponent,
    SortFormComponent
  ],
    providers: [],
})
export class CoreModule {}
