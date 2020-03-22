import { takeEvery, call, put } from 'redux-saga/effects';
// plop imports section
import {
  ACTION_SEARCH_PRODUCT,
  ACTION_SEARCH_PRODUCT_FAILURE,
  ACTION_SEARCH_PRODUCT_SUCCESS
} from '../actions/search.actions';

// plop saga action handlers section
function* onSearchProduct(action) {
  const { payload } = action;
  const json = yield fetch(
      `https://it.openfoodfacts.org/cgi/search.pl?
      action=process
      &json=true
      &simple_search=1
      &sort_by=unique_scans_n
      &fields=code,image_thumb_url,product_name,nutrition_grades,nova_group,ingredients_text_it,ingredients_text_en,ingredients_text
      &search_terms=${encodeURI(payload)}`
  ).then(r => r.json());

  if(json) {
    yield put({
      type: ACTION_SEARCH_PRODUCT_SUCCESS,
      payload: json.products
    })
  } else {
    yield put({
      type: ACTION_SEARCH_PRODUCT_FAILURE,
    });
  }
}


function* searchSaga() {
  // plop sagas section
yield takeEvery(ACTION_SEARCH_PRODUCT, onSearchProduct);
}

export default searchSaga;
