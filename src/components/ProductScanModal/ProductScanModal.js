import React, {useEffect, useRef} from 'react';
import './ProductScanModal.scss';
import { connect } from "react-redux";
import { ReactComponent as TimesIcon } from "../../assets/icons/plus.svg";
import {closeScanModalAction} from "../../actions/modals.actions";
import Scanner from "../Scanner/Scanner";
import {productScanAction} from "../../actions/products.actions";

const ProductScanModal = ({open, closeModal, productScan}) => {
    const ScannerRef = useRef(null);

    const onCodeDetect = (result) => {
        if(!open) return;
        if(ScannerRef.current) ScannerRef.current.stop();
        closeModal();
        productScan(result.codeResult);
    };

    const _closeModal = () => {
        if(ScannerRef.current) ScannerRef.current.stop();
        closeModal();
    };

    return (
        <div className={`ProductScanModal ${open ? 'open' : ''}`}>
            <div className={'header'}>
                <div onClick={_closeModal.bind(this)} className={'close-btn'}>
                    <TimesIcon/>
                </div>
                <div className={'app-title'}>Scansiona il codice a barre</div>
            </div>
            <div className={'reader'}>
                {open && <Scanner ref={ScannerRef} onDetected={onCodeDetect.bind(this)}/>}
            </div>
        </div>
    );
};

export default connect(
    state => ({
        open: state.modals.productScanModal?.open
    }),
    {
        closeModal: closeScanModalAction,
        productScan: productScanAction
    }
)(ProductScanModal);
