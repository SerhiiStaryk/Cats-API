import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, debounce, EMPTY, exhaustMap, map, timer } from 'rxjs';

import * as CatsActions from '../actions/cats.action';
import { CatsService } from 'src/app/services/cats.service';

@Injectable()
export class CatsEffect {
  loadCats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CatsActions.LoadCats),
      exhaustMap((action) =>
        this.catsService.getAllCats(action.count).pipe(
          map((cats) => {
            return CatsActions.LoadCatsSuccess({ cats });
          }),
          catchError((err) => EMPTY)
        )
      )
    )
  );

  loadBreeds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CatsActions.LoadBreeds),
      debounce(() => timer(1000)),
      exhaustMap(() =>
        this.catsService.getBreeds().pipe(
          map((breeds) => {
            return CatsActions.LoadBreedsSuccess({ breeds });
          }),
          catchError((err) => EMPTY)
        )
      )
    )
  );

  LoadCatsByBreeds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CatsActions.LoadCatsByBreeds),
      debounce(() => timer(1000)),
      exhaustMap((action) => {
        return this.catsService.getCatsByBreed(action.id, action.count).pipe(
          map((cats) => {
            return CatsActions.LoadCatsByBreedsSuccess({ cats });
          }),
          catchError((err) => EMPTY)
        );
      })
    )
  );

  LoadCatById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CatsActions.LoadCatById),
      exhaustMap((action) =>
        this.catsService.getCatById(action.id).pipe(
          map((cat) => {
            return CatsActions.LoadCatByIdSuccess({ cat });
          }),
          catchError((err) => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private catsService: CatsService) {}
}
