import {createSelector }from 'reselect';
import { CategoriesState } from './categories.reducer';
import { CategoryMap } from './categories.types';
import { RootState } from '../store';

export const selectCategoriesReducer = (state:RootState):CategoriesState => state.categories;

export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories):CategoryMap => categories.reduce(
        (acc, { title, items }) => {
          acc[title.toLowerCase()] = items;
          return acc;
        },
        {} as CategoryMap
      )
)

export const selectIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) =>categoriesSlice.isLoading
);

