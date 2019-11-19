import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ColorPickerModule } from 'primeng/colorpicker';


const exportsFiles = [
  DialogModule,
  ButtonModule,
  InputTextModule,
  ColorPickerModule,
];

const imports = [
  ...exportsFiles,
];


@NgModule({ imports, exports: exportsFiles })
export class PrimeNgModule { }


