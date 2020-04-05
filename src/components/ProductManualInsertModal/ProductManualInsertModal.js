import React, {useState} from 'react';
import './ProductManualInsertModal.scss';
import { connect } from "react-redux";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/arrow-left.svg";
import {
    closeProductManualInsertModalAction,
    openScanModalAction
} from "../../actions/modals.actions";
import {addProductToPantryAction} from "../../actions/pantry.actions";

const ProductManualInsertModal = ({open, closeModal, openScanModal, addProduct}) => {
    const [nameValue, setNameValue] = useState("");
    const [qtaValue, setQtaValue] = useState("");
    const [dateValue, setDateValue] = useState((new Date()).toISOString().substr(0, 10));
    const image_url = "/placeholder.png";

    const resetModal = () => {
      setNameValue("");
      setQtaValue("");
      setDateValue((new Date()).toISOString().substr(0, 10));
    };

    const _onCloseBtnClick = () => {
        resetModal();
        closeModal();
        openScanModal();
    };

    const _onAddBtnClick = () => {
        addProduct({
            product_name: nameValue,
            qta: qtaValue,
            expiryDate: dateValue,
            image_thumb_url: image_url
        });
        resetModal();
        closeModal();
    };

    return (
        <div className={`ProductManualInsertModal ${open ? 'open' : ''}`}>
            <div className={'header'}>
                <div onClick={_onCloseBtnClick.bind(this)} className={'close-btn'}>
                    <ArrowLeftIcon/>
                </div>
                <div className={'app-title'}>Aggiungi un prodotto</div>
            </div>
            <div className={'content'}>
                <div className={'form'}>
                    <div className={'input-group card'}>
                        <div className={'label'}>Nome prodotto</div>
                        <input type="text" placeholder={'Pane e Nutella'} value={nameValue} onChange={e => setNameValue(e.target.value)}/>
                    </div>
                    <div className={'input-group card'}>
                        <div className={'label'}>Quantità</div>
                        <input type="text" placeholder={'100 g'} value={qtaValue} onChange={e => setQtaValue(e.target.value)}/>
                    </div>
                    <div className={'input-group card'}>
                        <div className={'label'}>Data di scadenza</div>
                        <input type="date" className={'date'} placeholder={'tra 5 giorni'} value={dateValue} onChange={e => setDateValue(e.target.value)}/>
                    </div>
                    <div onClick={_onAddBtnClick.bind(this)} className={'btn btn-success'}>AGGIUNGI PRODOTTO</div>
                </div>
            </div>
        </div>
    );

};

export default connect(
    state => ({
        open: state.modals.productManualInsertModal?.open,
    }),
    {
        closeModal: closeProductManualInsertModalAction,
        openScanModal: openScanModalAction,
        addProduct: addProductToPantryAction
    }
)(ProductManualInsertModal);
