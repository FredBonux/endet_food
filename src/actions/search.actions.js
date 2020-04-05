// plop actions section
export const ACTION_CLEAR_SEARCH_RESULT = 'ACTION_CLEAR_SEARCH_RESULT';
export const ACTION_SEARCH_PRODUCT_FAILURE = 'ACTION_SEARCH_PRODUCT_FAILURE';
export const ACTION_SEARCH_PRODUCT_SUCCESS = 'ACTION_SEARCH_PRODUCT_SUCCESS';
export const ACTION_SEARCH_PRODUCT = 'ACTION_SEARCH_PRODUCT';

// plop action generators section
export const clearSearchResultAction = (payload) => ({ type: ACTION_CLEAR_SEARCH_RESULT, payload });
export const searchProductAction = (payload) => ({ type: ACTION_SEARCH_PRODUCT, payload });
