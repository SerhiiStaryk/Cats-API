import { createReducer, on } from '@ngrx/store';
import { Breed } from 'src/app/types/cat/breed';
import { Cat } from 'src/app/types/cat/cat';
import {
  LoadCatsSuccess,
  SetFilterByCount,
  SetFilterByBreed,
  LoadBreedsSuccess,
  LoadCatByIdSuccess,
  LoadCatsByBreedsSuccess,
} from '../actions/cats.action';

export interface Filter {
  breed: string;
  count: number;
}

export interface CatState {
  cats: Cat[];
  breeds: Breed[];
  cat: Cat | null;
  filter: Filter;
}

const initialState: CatState = {
  cats: [],
  breeds: [],
  cat: null,
  filter: {
    breed: '',
    count: 10,
  },
};

export const reducer = createReducer(
  initialState,
  on(LoadCatsSuccess, (state, action) => {
    return {
      ...state,
      cat: null,
      cats: action.cats,
    };
  }),
  on(LoadBreedsSuccess, (state, action) => {
    return {
      ...state,
      cat: null,
      breeds: action.breeds,
    };
  }),
  on(LoadCatByIdSuccess, (state, action) => {
    return {
      ...state,
      cat: action.cat,
    };
  }),
  on(LoadCatsByBreedsSuccess, (state, action) => {
    return {
      ...state,
      cat: null,
      cats: action.cats,
    };
  }),
  on(SetFilterByBreed, (state, action) => {
    return {
      ...state,
      filter: {
        ...state.filter,
        breed: action.breed,
      },
    };
  }),
  on(SetFilterByCount, (state, action) => {
    return {
      ...state,
      filter: {
        ...state.filter,
        count: action.count,
      },
    };
  })
);

export function catsReducer(state: any, action: any) {
  return reducer(state, action);
}
