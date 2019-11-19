import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ColorPickerModule } from 'primeng/colorpicker';


const exports = [
  DialogModule,
  ButtonModule,
  InputTextModule,
  ColorPickerModule,
];

const imports = [
  ...exports,
];


@NgModule({ imports, exports })
export class PrimeNgModule { }


