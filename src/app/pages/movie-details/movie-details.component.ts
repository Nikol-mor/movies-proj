import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movie: Movie[] | undefined;
  subscription: Subscription;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getMovie();
    // this.subscription = this.route.params.subscribe((params) => {
    //   console.log('params', params);
    //   // console.log('params.id', params['id']);
    //   this.movieService.getById(params['id']).toPromise();
    // });
    // console.log('susbc', this.subscription);
  }

  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('id', id);
    this.movieService.getById(id).subscribe((movie) => (this.movie = movie));
    console.log('this.movie', this.movie);
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
