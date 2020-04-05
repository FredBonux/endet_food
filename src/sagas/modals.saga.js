import { takeEvery, call, put } from 'redux-saga/effects';
// plop imports section
import { ACTION_CLOSE_PRODUCT_MANUAL_INSERT_MODAL } from '../actions/modals.actions';
import { ACTION_OPEN_PRODUCT_MANUAL_INSERT_MODAL } from '../actions/modals.actions';
import { ACTION_CLOSE_UPDATE_PRODUCT_MODAL } from '../actions/modals.actions';
import { ACTION_OPEN_UPDATE_PRODUCT_MODAL } from '../actions/modals.actions';
import { ACTION_CLOSE_PRODUCT_INSERT_MODAL } from '../actions/modals.actions';
import { ACTION_OPEN_PRODUCT_INSERT_MODAL } from '../actions/modals.actions';
import { ACTION_CLOSE_SCAN_MODAL } from '../actions/modals.actions';
import { ACTION_OPEN_SCAN_MODAL } from '../actions/modals.actions';
import {ACTION_PRODUCT_UPDATE_CANCEL} from "../actions/products.actions";
import {ACTION_CLEAR_SEARCH_RESULT} from "../actions/search.actions";

// plop saga action handlers section
function* onCloseProductManualInsertModal(action) {
  const { payload } = action;
}

function* onOpenProductManualInsertModal(action) {
  const { payload } = action;
}

function* onCloseUpdateProductModal(action) {
  const { payload } = action;
  yield put({type: ACTION_PRODUCT_UPDATE_CANCEL});
}

function* onOpenUpdateProductModal(action) {
  const { payload } = action;
}

function* onCloseProductInsertModal(action) {
  const { payload } = action;
}

function* onOpenProductInsertModal(action) {
  const { payload } = action;
}

function* onCloseScanModal(action) {
  const { payload } = action;
  yield put({type: ACTION_CLEAR_SEARCH_RESULT});
}

function* onOpenScanModal(action) {
  const { payload } = action;
}


function* modalsSaga() {
  // plop sagas section
yield takeEvery(ACTION_CLOSE_PRODUCT_MANUAL_INSERT_MODAL, onCloseProductManualInsertModal);
yield takeEvery(ACTION_OPEN_PRODUCT_MANUAL_INSERT_MODAL, onOpenProductManualInsertModal);
yield takeEvery(ACTION_CLOSE_UPDATE_PRODUCT_MODAL, onCloseUpdateProductModal);
yield takeEvery(ACTION_OPEN_UPDATE_PRODUCT_MODAL, onOpenUpdateProductModal);
yield takeEvery(ACTION_CLOSE_PRODUCT_INSERT_MODAL, onCloseProductInsertModal);
yield takeEvery(ACTION_OPEN_PRODUCT_INSERT_MODAL, onOpenProductInsertModal);
yield takeEvery(ACTION_CLOSE_SCAN_MODAL, onCloseScanModal);
yield takeEvery(ACTION_OPEN_SCAN_MODAL, onOpenScanModal);
}

export default modalsSaga;
