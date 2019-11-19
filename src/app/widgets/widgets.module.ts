import { NgModule } from '@angular/core';
import { MoviesService } from './movies/movies.service';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { ShareModule } from './../../shared/share.module';


const exportsFiles = [
  MoviesComponent,
];

const declarations = [
  ...exportsFiles,
  MovieComponent,
];

const imports = [
  ShareModule,
];


const providers = [
  MoviesService,
];


@NgModule({ declarations, imports, exports: exportsFiles, providers })
export class WidgetsModule { }
