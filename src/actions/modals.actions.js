// plop actions section
export const ACTION_CLOSE_PRODUCT_MANUAL_INSERT_MODAL_FAILURE = 'ACTION_CLOSE_PRODUCT_MANUAL_INSERT_MODAL_FAILURE';
export const ACTION_CLOSE_PRODUCT_MANUAL_INSERT_MODAL_SUCCESS = 'ACTION_CLOSE_PRODUCT_MANUAL_INSERT_MODAL_SUCCESS';
export const ACTION_CLOSE_PRODUCT_MANUAL_INSERT_MODAL = 'ACTION_CLOSE_PRODUCT_MANUAL_INSERT_MODAL';
export const ACTION_OPEN_PRODUCT_MANUAL_INSERT_MODAL_FAILURE = 'ACTION_OPEN_PRODUCT_MANUAL_INSERT_MODAL_FAILURE';
export const ACTION_OPEN_PRODUCT_MANUAL_INSERT_MODAL_SUCCESS = 'ACTION_OPEN_PRODUCT_MANUAL_INSERT_MODAL_SUCCESS';
export const ACTION_OPEN_PRODUCT_MANUAL_INSERT_MODAL = 'ACTION_OPEN_PRODUCT_MANUAL_INSERT_MODAL';
export const ACTION_CLOSE_UPDATE_PRODUCT_MODAL_FAILURE = 'ACTION_CLOSE_UPDATE_PRODUCT_MODAL_FAILURE';
export const ACTION_CLOSE_UPDATE_PRODUCT_MODAL_SUCCESS = 'ACTION_CLOSE_UPDATE_PRODUCT_MODAL_SUCCESS';
export const ACTION_CLOSE_UPDATE_PRODUCT_MODAL = 'ACTION_CLOSE_UPDATE_PRODUCT_MODAL';
export const ACTION_OPEN_UPDATE_PRODUCT_MODAL_FAILURE = 'ACTION_OPEN_UPDATE_PRODUCT_MODAL_FAILURE';
export const ACTION_OPEN_UPDATE_PRODUCT_MODAL_SUCCESS = 'ACTION_OPEN_UPDATE_PRODUCT_MODAL_SUCCESS';
export const ACTION_OPEN_UPDATE_PRODUCT_MODAL = 'ACTION_OPEN_UPDATE_PRODUCT_MODAL';
export const ACTION_CLOSE_PRODUCT_INSERT_MODAL_FAILURE = 'ACTION_CLOSE_PRODUCT_INSERT_MODAL_FAILURE';
export const ACTION_CLOSE_PRODUCT_INSERT_MODAL_SUCCESS = 'ACTION_CLOSE_PRODUCT_INSERT_MODAL_SUCCESS';
export const ACTION_CLOSE_PRODUCT_INSERT_MODAL = 'ACTION_CLOSE_PRODUCT_INSERT_MODAL';
export const ACTION_OPEN_PRODUCT_INSERT_MODAL_FAILURE = 'ACTION_OPEN_PRODUCT_INSERT_MODAL_FAILURE';
export const ACTION_OPEN_PRODUCT_INSERT_MODAL_SUCCESS = 'ACTION_OPEN_PRODUCT_INSERT_MODAL_SUCCESS';
export const ACTION_OPEN_PRODUCT_INSERT_MODAL = 'ACTION_OPEN_PRODUCT_INSERT_MODAL';
export const ACTION_CLOSE_SCAN_MODAL_FAILURE = 'ACTION_CLOSE_SCAN_MODAL_FAILURE';
export const ACTION_CLOSE_SCAN_MODAL_SUCCESS = 'ACTION_CLOSE_SCAN_MODAL_SUCCESS';
export const ACTION_CLOSE_SCAN_MODAL = 'ACTION_CLOSE_SCAN_MODAL';
export const ACTION_OPEN_SCAN_MODAL_FAILURE = 'ACTION_OPEN_SCAN_MODAL_FAILURE';
export const ACTION_OPEN_SCAN_MODAL_SUCCESS = 'ACTION_OPEN_SCAN_MODAL_SUCCESS';
export const ACTION_OPEN_SCAN_MODAL = 'ACTION_OPEN_SCAN_MODAL';

// plop action generators section
export const closeProductManualInsertModalAction = (payload) => ({ type: ACTION_CLOSE_PRODUCT_MANUAL_INSERT_MODAL, payload });
export const openProductManualInsertModalAction = (payload) => ({ type: ACTION_OPEN_PRODUCT_MANUAL_INSERT_MODAL, payload });
export const closeUpdateProductModalAction = (payload) => ({ type: ACTION_CLOSE_UPDATE_PRODUCT_MODAL, payload });
export const openUpdateProductModalAction = (payload) => ({ type: ACTION_OPEN_UPDATE_PRODUCT_MODAL, payload });
export const closeProductInsertModalAction = (payload) => ({ type: ACTION_CLOSE_PRODUCT_INSERT_MODAL, payload });
export const openProductInsertModalAction = (payload) => ({ type: ACTION_OPEN_PRODUCT_INSERT_MODAL, payload });
export const closeScanModalAction = (payload) => ({ type: ACTION_CLOSE_SCAN_MODAL, payload });
export const openScanModalAction = (payload) => ({ type: ACTION_OPEN_SCAN_MODAL, payload });
