import { call, all, put, takeLatest } from 'redux-saga/effects';
import {
  fetchCategoriesFail,
  fetchCategoriesSuccess,
} from "./categories.action";
import CATEGORIES_ACTION_TYPES from "./categories.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";



export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFail(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}


