import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
} from '@ngrx/store';
import { AppState } from 'src/app/types/cat/app-state';
import { CatState, catsReducer } from './cats.reducer';
import { environment } from '../../../environments/environment';

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

export const reducers: ActionReducerMap<AppState> = {
  cats: catsReducer,
};

export const selectCatsState = createFeatureSelector<CatState>('cats');
