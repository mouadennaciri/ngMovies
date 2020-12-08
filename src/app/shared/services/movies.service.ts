import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Movies } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  /**
   * Get all movies.
   * Used in home component.
   * @returns An observable of movies.
   */
  getMovies(search: string): Observable<Movies> {
    return this.http.get<Movies>(environment.API, { params: { query: search } });
    // TODO: format to camelCase.
  }
}
