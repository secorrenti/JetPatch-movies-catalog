import { NgModule } from '@angular/core';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';
import { HeaderComponent } from './header.component';
import { ShareModule } from './../../../shared/share.module';


const _exports = [
  HeaderComponent,
];

const declarations = [
  ..._exports,
  MovieDialogComponent,
];

const imports = [
  ShareModule,
];


@NgModule({ declarations, imports, exports: _exports })
export class HeaderModule { }
