import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;

  constructor() {}

  ngOnInit(): void {
    this.formatMovie();
  }

  /**
   * Format the movie.
   * TODO: to move in the service or the statefull component.
   */
  formatMovie(): void {
    this.movie.poster_path = `${environment.API}/${this.movie.poster_path}`;
  }
}
