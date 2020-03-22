import { all } from 'redux-saga/effects';
// plop import section
import searchSaga from './search.saga'
import modalsSaga from './modals.saga'
import productsSaga from './products.saga'

function* rootSaga() {
    yield all([
        // plop sagas section
    searchSaga(),
    modalsSaga(),
    productsSaga(),
    ]);
}

export default rootSaga;
