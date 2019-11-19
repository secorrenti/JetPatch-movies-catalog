

import { Directive, Renderer2, ElementRef, Input, OnDestroy } from '@angular/core';
import { ConfigurationService } from '../../app/configuration.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[secBackgroundHandler]'
})
export class BackgroundHandlerDirective implements OnDestroy {

  private readonly subs = new Subscription();
  private globalColor: string;
  private color: string;

  @Input() set secBackgroundHandler(color: string) {
    if (color) {
      this.subs.unsubscribe();
    }
    this.color = color;
    this.updateColor();
  }

  constructor(
    configurationService: ConfigurationService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.globalColor = configurationService.getGlobalColor();
    this.subs.add(configurationService.colorListener.subscribe(color => {
      this.globalColor = color;
      this.updateColor();
    }));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  updateColor(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this.color || this.globalColor);
  }




}


