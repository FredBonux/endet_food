// plop imports section
import { ACTION_FETCH_PANTRY, ACTION_FETCH_PANTRY_SUCCESS, ACTION_FETCH_PANTRY_FAILURE } from '../actions/pantry.actions';
import { ACTION_ADD_PRODUCT_TO_PANTRY, ACTION_ADD_PRODUCT_TO_PANTRY_SUCCESS, ACTION_ADD_PRODUCT_TO_PANTRY_FAILURE } from '../actions/pantry.actions';

const BASE_STATE = {
  loading: false,
  success: false,
  error: false,
  data: null
};

const DEFAULT_STATE = {
  addProduct: BASE_STATE,
  fetch: BASE_STATE,
  expiring: BASE_STATE
};

const handlers = {};

// plop action handlers section
handlers[ACTION_FETCH_PANTRY] = function (state, action){
  const newState = {...state};
  newState.fetch = {
    ...newState.fetch,
    loading: true
  };
  return newState;
};

handlers[ACTION_FETCH_PANTRY_SUCCESS] = function (state, action){
  const newState = {...state};
  newState.fetch = {
    ...newState.fetch,
    success: true,
    data: [...action.payload.pantry]
  };
  newState.expiring = {
    ...newState.expiring,
    success: true,
    data: [...action.payload.expiring]
  };
  return newState;
};

handlers[ACTION_FETCH_PANTRY_FAILURE] = function (state, action){
  const newState = {...state};
  newState.fetch = {
    ...newState.fetch,
    error: true
  };
  return newState;
};


handlers[ACTION_ADD_PRODUCT_TO_PANTRY] = function (state, action){
  const newState = {...state};
  newState.addProduct = {
    ...newState.addProduct,
    loading: true
  };
  return newState;
};

handlers[ACTION_ADD_PRODUCT_TO_PANTRY_SUCCESS] = function (state, action){
  const newState = {...state};
  newState.addProduct = {
    ...newState.addProduct,
    success: true
  };
  return newState;
};

handlers[ACTION_ADD_PRODUCT_TO_PANTRY_FAILURE] = function (state, action){
  const newState = {...state};
  newState.addProduct = {
    ...newState.addProduct,
    error: true
  };
  return newState;
};



function pantryReducer(state = DEFAULT_STATE, action) {
  if(typeof handlers[action.type] === 'function'){
    return handlers[action.type](state, action);
  }
  return state;
}

export default pantryReducer;
