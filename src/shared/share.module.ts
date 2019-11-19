import { NgModule } from '@angular/core';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackgroundHandlerDirective } from './directives/background-handler.directive';



const declarations = [
  BackgroundHandlerDirective,
];


const exportsFiles = [
  PrimeNgModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];


const imports = [
  ...exportsFiles,
];


@NgModule({
  declarations, imports,
  exports: [...exportsFiles, ...declarations] })
export class ShareModule { }


