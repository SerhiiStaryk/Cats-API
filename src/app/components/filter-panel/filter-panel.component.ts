import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  SetFilterByBreed,
  SetFilterByCount,
} from 'src/app/state/actions/cats.action';
import { AppState } from 'src/app/types/cat/app-state';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss'],
})
export class FilterPanelComponent {
  constructor(private store: Store<AppState>) {}

  setBreed(breedId: string) {
    this.store.dispatch(SetFilterByBreed({ breed: breedId }));
  }

  setCount(count: number) {
    this.store.dispatch(SetFilterByCount({ count }));
  }
}
