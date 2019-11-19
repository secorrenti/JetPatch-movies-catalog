import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MoviesService } from '../../movies/movies.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'sec-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDialogComponent {

  @Output() closeDialog = new EventEmitter();

  urlValidation = '^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?';

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    imdb: new FormControl('', [Validators.required, Validators.pattern(this.urlValidation)]),
  });


  constructor(
    private moviesService: MoviesService,
  ) { }


  addMovie() {
    this.moviesService.addMovie(this.form.getRawValue());
    this.closeDialog.emit();
    this.form.reset();
  }


}
