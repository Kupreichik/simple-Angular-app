import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent, SearchFormComponent, SortFormComponent, SearchResultsComponent, SearchItemComponent } from './components';
import { ShortenTitlePipe, SortItemsPipe, SortByTextPipe } from './pipes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { PublicationDateColorDirective } from './directives/publication-date-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFormComponent,
    SortFormComponent,
    SearchResultsComponent,
    SearchItemComponent,
    ShortenTitlePipe,
    PublicationDateColorDirective,
    SortItemsPipe,
    SortByTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
