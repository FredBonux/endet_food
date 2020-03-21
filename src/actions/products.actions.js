// plop actions section
export const ACTION_PRODUCT_SCAN_FAILURE = 'ACTION_PRODUCT_SCAN_FAILURE';
export const ACTION_PRODUCT_SCAN_SUCCESS = 'ACTION_PRODUCT_SCAN_SUCCESS';
export const ACTION_PRODUCT_SCAN = 'ACTION_PRODUCT_SCAN';
export const ACTION_FETCH_PRODUCT_FAILURE = 'ACTION_FETCH_PRODUCT_FAILURE';
export const ACTION_FETCH_PRODUCT_SUCCESS = 'ACTION_FETCH_PRODUCT_SUCCESS';
export const ACTION_FETCH_PRODUCT = 'ACTION_FETCH_PRODUCT';

// plop action generators section
export const productScanAction = (payload) => ({ type: ACTION_PRODUCT_SCAN, payload });
export const fetchProductAction = (payload) => ({ type: ACTION_FETCH_PRODUCT, payload });
