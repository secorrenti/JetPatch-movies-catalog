import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MovieModel } from './movie/movie.model';


@Injectable()
export class MoviesService {

  private movies = [
    new MovieModel('The Matrix Reloaded', 'https://en.wikipedia.org/wiki/The_Matrix_Reloaded'),
    new MovieModel('The Matrix', 'https://en.wikipedia.org/wiki/The_Matrix'),
    new MovieModel('The Matrix Revolutions', 'https://en.wikipedia.org/wiki/The_Matrix_Revolutions'),
  ];

  addMovie(movie: MovieModel): void {
    this.movies.push(movie);
  }

  getAllMovies(): Array<MovieModel> {
    return this.movies;
  }


}
