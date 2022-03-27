import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterBy } from 'src/app/models/filter-by';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.scss'],
})
export class MovieFilterComponent implements OnInit, OnDestroy {
  // @Input() getMovies: void;

  filterBy: FilterBy;
  subscription: Subscription;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.subscription = this.movieService.filterBy$.subscribe((filterBy) => {
      console.log('filterBy', filterBy);
      this.filterBy = filterBy;
    });
    // this.getMovies();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSetFilterBy() {
    this.movieService.setFilterBy({ ...this.filterBy });
  }
}
