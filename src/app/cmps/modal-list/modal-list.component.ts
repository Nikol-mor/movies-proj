import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'modal-list',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.scss'],
})
export class ModalListComponent implements OnInit {
  @Input() movies: Movie[];
  searchForm;
  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({ search: '' });
    console.log('this.searchForm', this.searchForm);
  }

  ngOnInit(): void {}
}
