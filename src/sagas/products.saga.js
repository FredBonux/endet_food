import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
// plop imports section
import { ACTION_PRODUCT_UPDATE_CANCEL } from '../actions/products.actions';
import {ACTION_SELECT_UPDATING_PRODUCT, ACTION_SELECT_UPDATING_PRODUCT_SUCCESS} from '../actions/products.actions';
import {
  ACTION_PRODUCT_SCAN,
  ACTION_PRODUCT_SCAN_FAILURE,
  ACTION_PRODUCT_SCAN_SUCCESS
} from '../actions/products.actions';
import {
  ACTION_FETCH_PRODUCT,
  ACTION_FETCH_PRODUCT_FAILURE,
  ACTION_FETCH_PRODUCT_SUCCESS
} from '../actions/products.actions';
import {ACTION_OPEN_PRODUCT_INSERT_MODAL, ACTION_OPEN_UPDATE_PRODUCT_MODAL} from "../actions/modals.actions";
import PantryService from "../libs/PantryLocalStorageService";

// plop saga action handlers section
function* onProductUpdateCancel(action) {
  const { payload } = action;
}

function* onSelectUpdatingProduct(action) {
  const { payload } = action;
  yield put({
    type: ACTION_SELECT_UPDATING_PRODUCT_SUCCESS,
    payload: PantryService.getProduct(payload)
  });
  yield put({
    type: ACTION_OPEN_UPDATE_PRODUCT_MODAL
  })
}

function* onProductScan(action) {
  const { payload } = action;
  if(payload.code && payload.product_name?.length > 0) {
    yield put({
      type: ACTION_PRODUCT_SCAN_SUCCESS,
      payload: payload
    });
    yield put({
      type: ACTION_OPEN_PRODUCT_INSERT_MODAL
    })
  } else {
    const url = `https://world.openfoodfacts.org/api/v0/product/${payload.code}.json?fields=image_thumb_url,product_name,nutrition_grades,nova_group,ingredients_text_it,ingredients_text_en,ingredients_text`;
    const json = yield fetch(url).then(r => r.json());

    if (json.status === 1 && json.product) {
      yield put({
        type: ACTION_PRODUCT_SCAN_SUCCESS,
        payload: json.product
      });
      yield put({
        type: ACTION_OPEN_PRODUCT_INSERT_MODAL
      })
    } else {
      yield put({
        type: ACTION_PRODUCT_SCAN_FAILURE,
        payload: json
      });
    }
  }
}

function* onFetchProduct(action) {
  const { payload } = action;
  const url = "https://world.openfoodfacts.org/api/v0/product/3302749508029.json?fields=image_thumb_url,product_name,nutrition_grades,nova_group";
  const json = yield fetch(url).then(r => r.json());

  if(json.status === 1 && json.product) {
    yield put({
      type: ACTION_FETCH_PRODUCT_SUCCESS,
      payload: json.product
    });
  } else {
    yield put({
      type: ACTION_FETCH_PRODUCT_FAILURE,
      payload: json
    });
  }
}


function* productsSaga() {
  // plop sagas section
yield takeEvery(ACTION_PRODUCT_UPDATE_CANCEL, onProductUpdateCancel);
yield takeEvery(ACTION_SELECT_UPDATING_PRODUCT, onSelectUpdatingProduct);
yield takeLatest(ACTION_PRODUCT_SCAN, onProductScan);
yield takeEvery(ACTION_FETCH_PRODUCT, onFetchProduct);
}

export default productsSaga;
