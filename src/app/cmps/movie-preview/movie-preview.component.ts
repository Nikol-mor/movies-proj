import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss'],
})
export class MoviePreviewComponent implements OnInit {
  @Input() movie: Movie;
  constructor() {}

  ngOnInit(): void {}
}
