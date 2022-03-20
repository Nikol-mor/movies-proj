import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'movie-app',
  templateUrl: './movie-app.component.html',
  styleUrls: ['./movie-app.component.scss'],
})
export class MovieAppComponent implements OnInit, OnDestroy {
  movies: Movie[];
  subscription: Subscription;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.query();
    this.subscription = this.movieService.movies$.subscribe((movies) => {
      console.log(
        '🚀 ~ file: movie-app.component.ts ~ line 22 ~ MovieAppComponent ~ this.subscription=this.movieService.movies$.subscribe ~ movies',
        movies
      );
      this.movies = movies;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
