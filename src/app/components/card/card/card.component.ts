import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Filter } from 'src/app/state/reducers/cats.reducer';
import { selectFilter } from 'src/app/state/selectors/cats.selector';
import { AppState } from 'src/app/types/cat/app-state';
import { Cat } from 'src/app/types/cat/cat';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() cat: Cat;

  public isShare = false;

  public filter$: Observable<Filter> = this.store.select(selectFilter);

  constructor(private store: Store<AppState>) {}

  setIsShare() {
    this.isShare = !this.isShare;
  }
}
