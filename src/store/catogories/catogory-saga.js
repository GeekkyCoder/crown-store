import { all, call, takeLatest, put } from "redux-saga/effects";

import { CATOGORIES_ACTION_TYPES } from "./catogories_action_types";

import { getCatogriesandDocuments } from "../../utils/firebase/firebase-utils";

import {
  fetch_catogries_start,
  fetch_catogories_success,
  fetch_Catogories_fail,
} from "./catogories-action";

export function* fetchCatogoryAsync() {
  try {
    const catogoryMap = yield call(getCatogriesandDocuments);
    yield put(fetch_catogories_success(catogoryMap));
  } catch (error) {
    yield put(fetch_Catogories_fail(error));
  }
}

export function* onFetchCatogories() {
  yield takeLatest(
    CATOGORIES_ACTION_TYPES.FETCH_CATOGORIES_START,
    fetchCatogoryAsync
  );
}

export function* catogoriesSaga() {
  yield all([call(onFetchCatogories)]);
}
