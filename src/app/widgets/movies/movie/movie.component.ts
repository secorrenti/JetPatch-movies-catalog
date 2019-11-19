import { Component, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';
import { MovieModel } from './movie.model';

@Component({
  selector: 'sec-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieComponent implements AfterViewInit {

  @Input() movie: MovieModel;
  color: string;

  constructor(
    private detector: ChangeDetectorRef,
  ) {}

  ngAfterViewInit(): void {
    this.detector.markForCheck();
  }

}


