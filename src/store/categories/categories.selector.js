import {createSelector }from 'reselect';

export const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce(
        (acc, { title, items }) => {
          acc[title.toLowerCase()] = items;
          return acc;
        },
        {}
      )
)

export const selectIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) =>categoriesSlice.isLoading
);

