// plop imports section
import { ACTION_SEARCH_PRODUCT, ACTION_SEARCH_PRODUCT_SUCCESS, ACTION_SEARCH_PRODUCT_FAILURE } from '../actions/search.actions';

const DEFAULT_STATE = {
  loading: false,
  success: false,
  error: false,
  results: []
};

const handlers = {};

// plop action handlers section
handlers[ACTION_SEARCH_PRODUCT] = function (state, action){
  let newState = {...state};
  newState = {
    loading: true,
    success: false,
    error: false,
    results: []
  };
  return newState;
};

handlers[ACTION_SEARCH_PRODUCT_SUCCESS] = function (state, action){
  let newState = {...state};
  newState = {
    loading: false,
    success: true,
    error: false,
    results: action.payload.filter(o => o.product_name?.length > 0 && o.code.length > 0)
  };
  return newState;
};

handlers[ACTION_SEARCH_PRODUCT_FAILURE] = function (state, action){
  let newState = {...state};
  newState = {
    loading: false,
    success: false,
    error: true,
    results: []
  };
  return newState;
};



function searchReducer(state = DEFAULT_STATE, action) {
  if(typeof handlers[action.type] === 'function'){
    return handlers[action.type](state, action);
  }
  return state;
}

export default searchReducer;
