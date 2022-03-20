import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieAppComponent } from './pages/movie-app/movie-app.component';
import { MovieListComponent } from './cmps/movie-list/movie-list.component';
import { MoviePreviewComponent } from './cmps/movie-preview/movie-preview.component';
import { MovieFilterComponent } from './cmps/movie-filter/movie-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovieAppComponent,
    MovieListComponent,
    MoviePreviewComponent,
    MovieFilterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
