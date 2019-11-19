import { NgModule } from '@angular/core';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';
import { HeaderComponent } from './header.component';
import { ShareModule } from './../../../shared/share.module';


const exportsFiles = [
  HeaderComponent,
];

const declarations = [
  ...exportsFiles,
  MovieDialogComponent,
];

const imports = [
  ShareModule,
];


@NgModule({ declarations, imports, exports: exportsFiles })
export class HeaderModule { }
