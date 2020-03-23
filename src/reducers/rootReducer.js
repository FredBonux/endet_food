import { combineReducers } from 'redux';
// plop import section
import pantryReducer from './pantry.reducer'
import searchReducer from './search.reducer'
import modalsReducer from './modals.reducer'
import productsReducer from './products.reducer'

export default combineReducers({
    // plop reducers section
  pantry: pantryReducer,
  search: searchReducer,
  modals: modalsReducer,
  products: productsReducer,
});
