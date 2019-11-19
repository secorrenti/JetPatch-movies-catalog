import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { MoviesService } from './movies.service';
import { MovieModel } from './movie/movie.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'sec-movies',
  template: `
  <sec-movie [@movieAnim]
    [movie]="movie"
    *ngFor="let movie of movies">
  </sec-movie>`,
  animations: [
    trigger('movieAnim', [
      state('in', style({
          opacity: 1,
          transform: 'translateY(0px)'
      })),
      transition('void => *', [
          style({
              opacity: 0,
              transform: 'translateY(-100px)'
          }),
          animate(1000)
      ]),
  ]),
  ]
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
