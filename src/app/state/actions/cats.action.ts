import { createAction, props } from '@ngrx/store';
import { Breed } from 'src/app/types/cat/breed';
import { Cat } from 'src/app/types/cat/cat';

export const LoadCats = createAction(
  '[Cats List] Load Cats',
  props<{ count: number }>()
);

export const LoadCatsSuccess = createAction(
  '[Cats List] Load Cats Success',
  props<{ cats: Cat[] }>()
);

export const LoadBreeds = createAction('[Cats List] Load Breeds');

export const LoadBreedsSuccess = createAction(
  '[Cats List] Load Breeds Success',
  props<{ breeds: Breed[] }>()
);

export const LoadCatsByBreeds = createAction(
  '[Cats List] Load Cats By Bread',
  props<{ id: string; count: number }>()
);

export const LoadCatsByBreedsSuccess = createAction(
  '[Cats List] Load Cats By Bread Success',
  props<{ cats: Cat[] }>()
);

export const LoadCatById = createAction(
  '[Cats List] Load Cat By Id',
  props<{ id: string }>()
);

export const LoadCatByIdSuccess = createAction(
  '[Cats List] Load Cat By Id Success',
  props<{ cat: Cat }>()
);

export const SetFilterByBreed = createAction(
  '[Cats List] Set Filter By Breed ',
  props<{ breed: string }>()
);

export const SetFilterByCount = createAction(
  '[Cats List] Set Filter By Count ',
  props<{ count: number }>()
);
