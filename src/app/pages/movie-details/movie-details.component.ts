import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  @Input() movieId: string;
  movie: Movie;

  constructor(private movieService: MovieService) {}

  async ngOnInit() {
    this.movie = await this.movieService.getById(this.movieId).toPromise();
    // this.movieService.getById(this.movieId).subscribe((movie) => {
    //   this.movie = movie;
    // });
  }

  ngOnDestroy(): void {}
}
