import { combineReducers } from 'redux';
// plop import section
import modalsReducer from './modals.reducer'
import productsReducer from './products.reducer'

export default combineReducers({
    // plop reducers section
  modals: modalsReducer,
  products: productsReducer,
});
