import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { ModalService } from 'src/app/services/modal.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'movie-app',
  templateUrl: './movie-app.component.html',
  styleUrls: ['./movie-app.component.scss'],
})
export class MovieAppComponent implements OnInit, OnDestroy {
  movies: Movie[];
  movies$: Observable<Movie[]>;
  subscription: Subscription;
  isModalListOpen: boolean;

  constructor(
    private movieService: MovieService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    console.log('movoie-app renders');
    this.getMovies();
    this.subscription = this.modalService.modalListChange.subscribe(
      (isClicked) => (this.isModalListOpen = isClicked)
    );
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe((movies) => {
      console.log('movies', movies);
      this.movies = movies;
      console.log('this.movies', this.movies);
    });
  }

  ngOnDestroy(): void {}
}
