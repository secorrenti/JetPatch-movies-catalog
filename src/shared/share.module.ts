import { NgModule } from '@angular/core';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackgroundHandlerDirective } from './directives/background-handler.directive';



const declarations = [
  BackgroundHandlerDirective,
];


const exports = [
  PrimeNgModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];


const imports = [
  ...exports,
];


@NgModule({
  declarations, imports,
  exports: [...exports, ...declarations] })
export class ShareModule { }


