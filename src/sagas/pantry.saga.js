import { takeEvery, call, put } from 'redux-saga/effects';
import PantryService from "../libs/PantryLocalStorageService";
// plop imports section
import {ACTION_REMOVE_PRODUCT_FROM_PANTRY, ACTION_REMOVE_PRODUCT_FROM_PANTRY_SUCCESS} from '../actions/pantry.actions';
import {ACTION_FETCH_PANTRY, ACTION_FETCH_PANTRY_SUCCESS} from '../actions/pantry.actions';
import {
  ACTION_ADD_PRODUCT_TO_PANTRY,
  ACTION_ADD_PRODUCT_TO_PANTRY_SUCCESS
} from '../actions/pantry.actions';

// plop saga action handlers section
function* onRemoveProductFromPantry(action) {
  const { payload } = action;
  PantryService.removeFromPantry(payload);
  yield put({
    type: ACTION_REMOVE_PRODUCT_FROM_PANTRY_SUCCESS
  });
  yield put({
    type: ACTION_FETCH_PANTRY
  });
}

function* onFetchPantry(action) {
  yield put({
    type: ACTION_FETCH_PANTRY_SUCCESS,
    payload: {
      pantry: PantryService.getPantry(),
      expiring: PantryService.getExpiring()
    }
  });
}

function* onAddProductToPantry(action) {
  const { payload } = action;
  PantryService.insertIntoPantry(payload);
  yield put({
    type: ACTION_ADD_PRODUCT_TO_PANTRY_SUCCESS
  });
  yield put({
    type: ACTION_FETCH_PANTRY
  });
}


function* pantrySaga() {
  // plop sagas section
yield takeEvery(ACTION_REMOVE_PRODUCT_FROM_PANTRY, onRemoveProductFromPantry);
yield takeEvery(ACTION_FETCH_PANTRY, onFetchPantry);
yield takeEvery(ACTION_ADD_PRODUCT_TO_PANTRY, onAddProductToPantry);
}

export default pantrySaga;
