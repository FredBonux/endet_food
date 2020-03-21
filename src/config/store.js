import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

export default function  configureStore() {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [
        thunk,
        logger,
        sagaMiddleware,
    ];

    let store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(...middleware))
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
