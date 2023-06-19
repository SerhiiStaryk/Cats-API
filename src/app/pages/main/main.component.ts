import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from 'src/app/types/cat/cat';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/types/cat/app-state';
import {
  selectCats,
  selectFilter,
} from 'src/app/state/selectors/cats.selector';
import { LoadCats, LoadCatsByBreeds } from 'src/app/state/actions/cats.action';
import { Filter } from 'src/app/state/reducers/cats.reducer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  public cats$: Observable<Cat[]> = this.store.select(selectCats);
  public filter$: Observable<Filter> = this.store.select(selectFilter);

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.filter$.subscribe((filter) => {
      if (filter.breed) {
        this.store.dispatch(
          LoadCatsByBreeds({ id: filter.breed, count: filter.count })
        );
      } else {
        this.store.dispatch(LoadCats({ count: filter.count }));
      }
    });
  }
}
