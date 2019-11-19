import { NgModule } from '@angular/core';
import { MoviesService } from './movies/movies.service';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { ShareModule } from 'src/shared/share.module';


const exports = [
  MoviesComponent,
];

const declarations = [
  ...exports,
  MovieComponent,
];

const imports = [
  ShareModule,
];


const providers = [
  MoviesService,
];


@NgModule({ declarations, imports, exports, providers })
export class WidgetsModule { }
