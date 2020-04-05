import React, {useEffect, useState} from 'react';
import './ProductUpdateModal.scss';
import { connect } from "react-redux";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/arrow-left.svg";
import {addProductToPantryAction, removeProductFromPantryAction} from "../../actions/pantry.actions";
import {closeUpdateProductModalAction} from "../../actions/modals.actions";

const ProductUpdateModal = ({open, closeModal, product, updateProduct, deleteProduct}) => {
    const [qtaValue, setQtaValue] = useState("");
    const [dateValue, setDateValue] = useState("");

    useEffect(() => {
        setQtaValue(product?.qta || "");
        setDateValue(product?.expiryDate || "");
    }, [product]);

    const resetModal = () => {
      setQtaValue("");
      setDateValue((new Date()).toISOString().substr(0, 10));
    };

    const _onCloseBtnClick = () => {
        resetModal();
        closeModal();
    };

    const _onSaveBtnClick = () => {
        console.log([qtaValue, dateValue]);
        updateProduct({
            ...product,
            qta: qtaValue || product.qta,
            expiryDate: dateValue || product.expiryDate
        });
        resetModal();
        closeModal();
    };

    const _onDeleteBtnClick = () => {
        console.log([qtaValue, dateValue]);
        deleteProduct({lsKey: product.lsKey});
        resetModal();
        closeModal();
    };

    return (
        <div className={`ProductUpdateModal ${open ? 'open' : ''}`}>
            <div className={'header'}>
                <div onClick={_onCloseBtnClick.bind(this)} className={'close-btn'}>
                    <ArrowLeftIcon/>
                </div>
                <div className={'app-title'}>Scheda prodotto</div>
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
                    {product?.nutrition_grades && <img src={`/img/nutriscore-${product?.nutrition_grades}.svg`} className={'nutriscore'} alt={'Nessun nutriscore'}/>}
                    {product?.nova_group && <img src={`/img/nova-group-${product?.nova_group}.svg`} className={'novagroup'} alt={'Nessun novagroup'}/>}
                </div>

                <div className={'form'}>
                    <div className={'input-group card'}>
                        <div className={'label'}>Quantità</div>
                        <input type="text" placeholder={'100 g'} value={qtaValue} onChange={e => setQtaValue(e.target.value)}/>
                    </div>
                    <div className={'input-group card'}>
                        <div className={'label'}>Data di scadenza</div>
                        <input type="date" className={'date'} value={dateValue} onChange={e => setDateValue(e.target.value)}/>
                    </div>
                    <div onClick={_onSaveBtnClick.bind(this)} className={'btn btn-success'}>AGGIORNA PRODOTTO</div>
                    <div onClick={_onDeleteBtnClick.bind(this)} className={'btn btn-simple text-danger'}>RIMUOVI PRODOTTO</div>
                </div>
            </div>
        </div>
    );

};

export default connect(
    state => ({
        open: state.modals.productUpdateModal?.open,
        product: state.products.updatingProduct
    }),
    {
        closeModal: closeUpdateProductModalAction,
        updateProduct: addProductToPantryAction,
        deleteProduct: removeProductFromPantryAction
    }
)(ProductUpdateModal);
