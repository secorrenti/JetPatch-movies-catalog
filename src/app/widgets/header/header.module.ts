import { NgModule } from '@angular/core';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';
import { HeaderComponent } from './header.component';
import { ShareModule } from 'src/shared/share.module';


const exports = [
  HeaderComponent,
];

const declarations = [
  ...exports,
  MovieDialogComponent,
];

const imports = [
  ShareModule,
];


@NgModule({ declarations, imports, exports })
export class HeaderModule { }
