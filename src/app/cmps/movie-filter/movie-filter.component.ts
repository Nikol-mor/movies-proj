import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterBy } from 'src/app/models/filter-by';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.scss'],
})
export class MovieFilterComponent implements OnInit, OnDestroy {
  filterBy: FilterBy;
  subscription: Subscription;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.subscription = this.movieService.filterBy$.subscribe((filterBy) => {
      console.log(
        '🚀 ~ file: movie-filter.component.ts ~ line 21 ~ MovieFilterComponent ~ this.movieService.filterBy$.subscribe ~ filterBy',
        filterBy
      );
      this.filterBy = filterBy;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSetFilterBy() {
    // this.movieService.setFilterBy({ ...this.filterBy });
  }
}
