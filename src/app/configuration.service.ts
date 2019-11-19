import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ConfigurationService {

  private globalColor = '#a9caf2';

  colorListener = new Subject<string>();

  getGlobalColor(): string {
    return this.globalColor;
  }

  setGlobalColor(color: string): void {
    this.globalColor = color;
    this.colorListener.next(this.globalColor);
  }

}

