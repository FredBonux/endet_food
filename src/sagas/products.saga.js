import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
// plop imports section
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
import {ACTION_OPEN_PRODUCT_INSERT_MODAL} from "../actions/modals.actions";

// plop saga action handlers section
function* onProductScan(action) {
  const { payload } = action;
  const url = `https://world.openfoodfacts.org/api/v0/product/${payload.code}.json?fields=image_thumb_url,product_name,nutrition_grades,nova_group,ingredients_text_it,ingredients_text_en,ingredients_text`;
  const json = yield fetch(url).then(r => r.json());

  if(json.status === 1 && json.product) {
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
yield takeLatest(ACTION_PRODUCT_SCAN, onProductScan);
yield takeEvery(ACTION_FETCH_PRODUCT, onFetchProduct);
}

export default productsSaga;
