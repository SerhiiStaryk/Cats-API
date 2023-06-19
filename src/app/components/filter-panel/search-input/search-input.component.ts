import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Breed } from 'src/app/types/cat/breed';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/types/cat/app-state';
import { LoadBreeds } from 'src/app/state/actions/cats.action';
import { selectBreeds } from 'src/app/state/selectors/cats.selector';

export interface User {
  name: string;
}

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @Output() breedIdEvent = new EventEmitter<string>();

  public breeds$: Observable<Breed[]> = this.store.select(selectBreeds);
  public breedControl = new FormControl('');

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(LoadBreeds());

    this.breedControl.valueChanges.subscribe((id) => {
      id ? this.breedIdEvent.emit(id) : this.breedIdEvent.emit('');
    });
  }
}
