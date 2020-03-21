import { all } from 'redux-saga/effects';
// plop import section
import modalsSaga from './modals.saga'
import productsSaga from './products.saga'

function* rootSaga() {
    yield all([
        // plop sagas section
    modalsSaga(),
    productsSaga(),
    ]);
}

export default rootSaga;
