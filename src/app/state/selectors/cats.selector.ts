import { createSelector } from '@ngrx/store';
import { selectCatsState } from '../reducers';
import { CatState } from '../reducers/cats.reducer';

export const selectCats = createSelector(
  selectCatsState,
  (state: CatState) => state.cats
);

export const selectBreeds = createSelector(
  selectCatsState,
  (state: CatState) => state.breeds
);

export const selectCatById = createSelector(
  selectCatsState,
  (state: CatState) => state.cat
);


export const selectFilter = createSelector(
  selectCatsState,
  (state: CatState) => state.filter
);