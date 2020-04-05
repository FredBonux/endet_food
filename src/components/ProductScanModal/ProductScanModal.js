import React, {useRef, useState} from 'react';
import './ProductScanModal.scss';
import { connect } from "react-redux";
import { ReactComponent as TimesIcon } from "../../assets/icons/plus.svg";
import {closeScanModalAction, openProductManualInsertModalAction} from "../../actions/modals.actions";
import Scanner from "../Scanner/Scanner";
import {productScanAction} from "../../actions/products.actions";
import {searchProductAction} from "../../actions/search.actions";
import SearchContainer from "../../containers/SearchContainer/SearchContainer";

const ProductScanModal = ({open, closeModal, productScan, searchForProduct, openManualInsertModal}) => {
    const [searchValue, setSearchValue] = useState("");
    const [canUseCamera, setCanUseCamera] = useState(true);
    const ScannerRef = useRef(null);
    const InputRef = useRef(null);

    const onCodeDetect = (result) => {
        if(!open) return;
        if(ScannerRef.current) ScannerRef.current.stop();
        closeModal();
        productScan(result.codeResult);
    };

    const _closeModal = () => {
        if(ScannerRef.current) ScannerRef.current.stop();
        setSearchValue("");
        closeModal();
    };

    const _onSearch = (e) => {
        e.preventDefault();
        if(ScannerRef.current) ScannerRef.current.stop();
        if(searchValue.length <= 2) return;
        if(InputRef.current) InputRef.current.blur();
        searchForProduct(searchValue);
    };

    const _onSearchValueInputChange = e => {
        const value = e.target.value;
        if(value.length > 0 && ScannerRef.current) ScannerRef.current.stop();
        setSearchValue(value);
    };

    const _onCameraError = () => {
        if(ScannerRef.current) ScannerRef.current.stop();
        setCanUseCamera(false);
    };

    const _onProductSelect = product => {
        if(product.code) {
            closeModal();
            productScan(product);
        }
    };

    const _onManualInsertClick = () => {
        _closeModal();
        openManualInsertModal();
    };

    return (
        <div className={`ProductScanModal ${open ? 'open' : ''}`}>
            <div className={'header'}>
                <div onClick={_closeModal.bind(this)} className={'close-btn'}>
                    <TimesIcon/>
                </div>
                <div className={'app-title'}>Scansiona il codice a barre</div>
            </div>
            <div className={'search-container'}>
                <form onSubmit={_onSearch.bind(this)}>
                    <input
                        type={'text'}
                        value={searchValue}
                        placeholder={'Cerca un prodotto'}
                        ref={InputRef}
                        onChange={_onSearchValueInputChange.bind(this)}
                    />
                </form>
            </div>
            <div className={`reader ${open && canUseCamera && searchValue.length <= 0 ? '':'searching'}`}>
                {open && canUseCamera && searchValue.length <= 0 ?
                    <Scanner
                        ref={ScannerRef}
                        onDetected={onCodeDetect.bind(this)}
                        onError={_onCameraError.bind(this)}
                    />
                    :
                    <SearchContainer onProductSelect={_onProductSelect.bind(this)}/>
                }
            </div>
            {searchValue.length <= 0 && <div onClick={_onManualInsertClick.bind(this)} className={'btn add-custom-btn'}>Inserisci manualmente</div>}
        </div>
    );
};

export default connect(
    state => ({
        open: state.modals.productScanModal?.open
    }),
    {
        closeModal: closeScanModalAction,
        productScan: productScanAction,
        searchForProduct: searchProductAction,
        openManualInsertModal: openProductManualInsertModalAction
    }
)(ProductScanModal);
