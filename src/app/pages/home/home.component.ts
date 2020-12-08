import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { HomeConstants } from '../../shared/constants';
import { Movies } from '../../shared/models';
import { MoviesService } from '../../shared/services/movies.service';


@Component({
  selector: 'app-homme',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies$: Observable<Movies>;
  readonly backgroundImagePath: typeof HomeConstants.BACKGROUND_IMAGE_PATH;
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private moviesService: MoviesService) {
    this.backgroundImagePath = HomeConstants.BACKGROUND_IMAGE_PATH;
  }

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * Create `searchForm`.
   */
  createForm(): void {
    this.searchForm = this.fb.group({
      movie: ['', Validators.required]
    });
  }

  /**
   * Search movie.
   */
  search(): void {
    // TODO: get the value from a getter.
    this.movies$ = this.moviesService.getMovies(this.searchForm.controls['movie'].value);
  }
}
