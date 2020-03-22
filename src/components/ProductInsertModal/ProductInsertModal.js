import React, {useState} from 'react';
import './ProductInsertModal.scss';
import { connect } from "react-redux";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/arrow-left.svg";
import {closeProductInsertModalAction, openScanModalAction} from "../../actions/modals.actions";

const ProductInsertModal = ({open, closeModal, openScanModal, product}) => {
    const [qtaValue, setQtaValue] = useState("");
    const [dateValue, setDateValue] = useState((new Date()).toISOString().substr(0, 10));

    const resetModal = () => {
      setQtaValue("");
      setDateValue((new Date()).toISOString().substr(0, 10));
    };

    const _onCloseBtnClick = () => {
        resetModal();
        closeModal();
        openScanModal();
    };

    return (
        <div className={`ProductInsertModal ${open ? 'open' : ''}`}>
            <div className={'header'}>
                <div onClick={_onCloseBtnClick.bind(this)} className={'close-btn'}>
                    <ArrowLeftIcon/>
                </div>
                <div className={'app-title'}>Verifica e aggiungi</div>
            </div>
            <div className={'content'}>
                <div className={'product-head'}>
                    <img src={product?.image_thumb_url} className={'product-image'} alt={'product-image'} />
                    <div className={'product-info'}>
                        <div className={'product-name'}>{product?.product_name}</div>
                        <div className={'description'}>
                            <span className={'title'}>Ingredienti: </span>
                            <span className={'ingredients'}>{product?.ingredients_text_it || product?.ingredients_text_en || product?.ingredients_text}</span>
                        </div>
                    </div>
                </div>
                <div className={'nutriscore-container'}>
                    <img src={`/img/nutriscore-${product?.nutrition_grades}.svg`} className={'nutriscore'} alt={'Nessun nutriscore'}/>
                    <img src={`/img/nova-group-${product?.nova_group}.svg`} className={'novagroup'} alt={'Nessun novagroup'}/>
                </div>

                <div className={'form'}>
                    <div className={'input-group card'}>
                        <div className={'label'}>Quanità</div>
                        <input type="text" placeholder={'100 g'} value={qtaValue} onChange={e => setQtaValue(e.target.value)}/>
                    </div>
                    <div className={'input-group card'}>
                        <div className={'label'}>Data di scadenza</div>
                        <input type="date" className={'date'} placeholder={'tra 5 giorni'} value={dateValue} onChange={e => setDateValue(e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default connect(
    state => ({
        open: state.modals.productInsertModal?.open,
        product: state.products.scannedProduct
    }),
    {
        closeModal: closeProductInsertModalAction,
        openScanModal: openScanModalAction
    }
)(ProductInsertModal);
