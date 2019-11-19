import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MovieModel } from './movie.model';

@Component({
  selector: 'sec-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieComponent {

  @Input() movie: MovieModel;
  color: string;

}


