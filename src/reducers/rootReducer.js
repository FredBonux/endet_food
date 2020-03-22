import { combineReducers } from 'redux';
// plop import section
import searchReducer from './search.reducer'
import modalsReducer from './modals.reducer'
import productsReducer from './products.reducer'

export default combineReducers({
    // plop reducers section
  search: searchReducer,
  modals: modalsReducer,
  products: productsReducer,
});
