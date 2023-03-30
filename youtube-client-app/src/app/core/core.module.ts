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
import { SearchService } from './services/search/search.service';
import { SortService } from './services/sort/sort.service';


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
    HeaderComponent,
    SearchFormComponent,
    SortFormComponent,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
    providers: [SearchService, SortService],
})
export class CoreModule {}
