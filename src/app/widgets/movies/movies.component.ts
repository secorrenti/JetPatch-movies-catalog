import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MoviesService } from './movies.service';
import { MovieModel } from './movie/movie.model';

@Component({
  selector: 'sec-movies',
  template: `
  <sec-movie
    [movie]="movie"
    *ngFor="let movie of movies">
  </sec-movie>`,
})
export class MoviesComponent {

  movies: Array<MovieModel>;

  constructor(
    moviesService: MoviesService
  ) {
    this.updateMovies(moviesService.getAllMovies());
  }

  updateMovies(movies: Array<MovieModel>) {
    this.movies = movies;
  }

}
