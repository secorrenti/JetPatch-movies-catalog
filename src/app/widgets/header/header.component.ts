import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ConfigurationService } from './../../configuration.service';

@Component({
  selector: 'sec-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  display = false;
  color: string;

  constructor(
    private configurationService: ConfigurationService,
  ) {
    this.color = configurationService.getGlobalColor();
  }

  onChange(color: string): void {
    this.configurationService.setGlobalColor(color);
  }


}
