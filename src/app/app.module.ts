import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieAppComponent } from './pages/movie-app/movie-app.component';
import { MovieListComponent } from './cmps/movie-list/movie-list.component';
import { MoviePreviewComponent } from './cmps/movie-preview/movie-preview.component';
import { MovieFilterComponent } from './cmps/movie-filter/movie-filter.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { LoginComponent } from './pages/login/login.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { HttpClientModule } from '@angular/common/http';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { ModalListComponent } from './cmps/modal-list/modal-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieAppComponent,
    MovieListComponent,
    MoviePreviewComponent,
    MovieFilterComponent,
    MovieDetailsComponent,
    LoginComponent,
    AppHeaderComponent,
    AppFooterComponent,
    ModalListComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
