import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimeNgModule } from 'src/shared/prime-ng/prime-ng.module';
import { WidgetsModule } from './widgets/widgets.module';
import { HeaderModule } from './widgets/header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    WidgetsModule,
    HeaderModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
