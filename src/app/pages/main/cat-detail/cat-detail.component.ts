import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadCatById } from 'src/app/state/actions/cats.action';
import { selectCatById } from 'src/app/state/selectors/cats.selector';
import { AppState } from 'src/app/types/cat/app-state';
import { Cat } from 'src/app/types/cat/cat';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.scss'],
})
export class CatDetailComponent implements OnInit {
  public readonly id: string | null = this.route.snapshot.paramMap.get('id');
  public cat$: Observable<Cat | null> = this.store.select(selectCatById);

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.id) {
      this.store.dispatch(LoadCatById({ id: this.id }));
    }
  }
}
