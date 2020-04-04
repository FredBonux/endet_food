// plop imports section
import { ACTION_PRODUCT_UPDATE_CANCEL, ACTION_PRODUCT_UPDATE_CANCEL_SUCCESS, ACTION_PRODUCT_UPDATE_CANCEL_FAILURE } from '../actions/products.actions';
import { ACTION_SELECT_UPDATING_PRODUCT, ACTION_SELECT_UPDATING_PRODUCT_SUCCESS, ACTION_SELECT_UPDATING_PRODUCT_FAILURE } from '../actions/products.actions';
import { ACTION_PRODUCT_SCAN, ACTION_PRODUCT_SCAN_SUCCESS, ACTION_PRODUCT_SCAN_FAILURE } from '../actions/products.actions';
import { ACTION_FETCH_PRODUCT, ACTION_FETCH_PRODUCT_SUCCESS, ACTION_FETCH_PRODUCT_FAILURE } from '../actions/products.actions';

const DEFAULT_STATE = {

};

const handlers = {};

// plop action handlers section
handlers[ACTION_PRODUCT_UPDATE_CANCEL] = function (state, action){
  const newState = {...state};
  newState.updatingProduct = null;
  return newState;
};


handlers[ACTION_SELECT_UPDATING_PRODUCT] = function (state, action){
  const newState = {...state};

  return newState;
};

handlers[ACTION_SELECT_UPDATING_PRODUCT_SUCCESS] = function (state, action){
  const newState = {...state};
  newState.updatingProduct = action.payload;
  return newState;
};

handlers[ACTION_SELECT_UPDATING_PRODUCT_FAILURE] = function (state, action){
  const newState = {...state};

  return newState;
};


handlers[ACTION_PRODUCT_SCAN] = function (state, action){
  const newState = {...state};

  return newState;
};

handlers[ACTION_PRODUCT_SCAN_SUCCESS] = function (state, action){
  const newState = {...state};
  newState.scannedProduct = action.payload;
  return newState;
};

handlers[ACTION_PRODUCT_SCAN_FAILURE] = function (state, action){
  const newState = {...state};

  return newState;
};


handlers[ACTION_FETCH_PRODUCT] = function (state, action){
  const newState = {...state};

  return newState;
};

handlers[ACTION_FETCH_PRODUCT_SUCCESS] = function (state, action){
  const newState = {...state};
  newState.product = action.payload;
  return newState;
};

handlers[ACTION_FETCH_PRODUCT_FAILURE] = function (state, action){
  const newState = {...state};

  return newState;
};



function productsReducer(state = DEFAULT_STATE, action) {
  if(typeof handlers[action.type] === 'function'){
    return handlers[action.type](state, action);
  }
  return state;
}

export default productsReducer;
