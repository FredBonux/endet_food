// plop imports section
import { ACTION_CLOSE_UPDATE_PRODUCT_MODAL, ACTION_CLOSE_UPDATE_PRODUCT_MODAL_SUCCESS, ACTION_CLOSE_UPDATE_PRODUCT_MODAL_FAILURE } from '../actions/modals.actions';
import { ACTION_OPEN_UPDATE_PRODUCT_MODAL, ACTION_OPEN_UPDATE_PRODUCT_MODAL_SUCCESS, ACTION_OPEN_UPDATE_PRODUCT_MODAL_FAILURE } from '../actions/modals.actions';
import { ACTION_CLOSE_PRODUCT_INSERT_MODAL } from '../actions/modals.actions';
import { ACTION_OPEN_PRODUCT_INSERT_MODAL } from '../actions/modals.actions';
import { ACTION_CLOSE_SCAN_MODAL } from '../actions/modals.actions';
import { ACTION_OPEN_SCAN_MODAL } from '../actions/modals.actions';

const DEFAULT_MODAL_STATE = {
  open: false
};

const DEFAULT_STATE = {
  productScanModal: DEFAULT_MODAL_STATE,
  productInsertModal: DEFAULT_MODAL_STATE,
  productUpdateModal: DEFAULT_MODAL_STATE
};

const handlers = {};

// plop action handlers section
handlers[ACTION_CLOSE_UPDATE_PRODUCT_MODAL] = function (state, action){
  const newState = {...state};
  newState.productUpdateModal = {
    open: false
  };
  return newState;
};


handlers[ACTION_OPEN_UPDATE_PRODUCT_MODAL] = function (state, action){
  const newState = {...state};
  newState.productUpdateModal = {
    open: true
  };
  return newState;
};


handlers[ACTION_CLOSE_PRODUCT_INSERT_MODAL] = function (state, action){
  const newState = {...state};
  newState.productInsertModal = {
    open: false
  };
  return newState;
};


handlers[ACTION_OPEN_PRODUCT_INSERT_MODAL] = function (state, action){
  const newState = {...state};
  newState.productInsertModal = {
    open: true
  };
  return newState;
};


handlers[ACTION_CLOSE_SCAN_MODAL] = function (state, action){
  const newState = {...state};
  newState.productScanModal = {
    open: false
  };
  return newState;
};


handlers[ACTION_OPEN_SCAN_MODAL] = function (state, action){
  const newState = {...state};
  newState.productScanModal = {
    open: true
  };
  return newState;
};



function modalsReducer(state = DEFAULT_STATE, action) {
  if(typeof handlers[action.type] === 'function'){
    return handlers[action.type](state, action);
  }
  return state;
}

export default modalsReducer;
