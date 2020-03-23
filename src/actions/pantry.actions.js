// plop actions section
export const ACTION_FETCH_PANTRY_FAILURE = 'ACTION_FETCH_PANTRY_FAILURE';
export const ACTION_FETCH_PANTRY_SUCCESS = 'ACTION_FETCH_PANTRY_SUCCESS';
export const ACTION_FETCH_PANTRY = 'ACTION_FETCH_PANTRY';
export const ACTION_ADD_PRODUCT_TO_PANTRY_FAILURE = 'ACTION_ADD_PRODUCT_TO_PANTRY_FAILURE';
export const ACTION_ADD_PRODUCT_TO_PANTRY_SUCCESS = 'ACTION_ADD_PRODUCT_TO_PANTRY_SUCCESS';
export const ACTION_ADD_PRODUCT_TO_PANTRY = 'ACTION_ADD_PRODUCT_TO_PANTRY';

// plop action generators section
export const fetchPantryAction = (payload) => ({ type: ACTION_FETCH_PANTRY, payload });
export const addProductToPantryAction = (payload) => ({ type: ACTION_ADD_PRODUCT_TO_PANTRY, payload });
