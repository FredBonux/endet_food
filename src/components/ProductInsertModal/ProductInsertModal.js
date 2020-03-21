import React from 'react';
import './ProductInsertModal.scss';
import { connect } from "react-redux";
import { ReactComponent as TimesIcon } from "../../assets/icons/plus.svg";
import {closeProductInsertModalAction} from "../../actions/modals.actions";

const ProductInsertModal = ({open, closeModal, product}) => {

    return (
        <div className={`ProductInsertModal ${open ? 'open' : ''}`}>
            <div className={'header'}>
                <div onClick={closeModal} className={'close-btn'}>
                    <TimesIcon/>
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
                    <img src={`/img/nutriscore-${product?.nutrition_grades}.svg`} className={'nutriscore'} alt={'nutrition_score'}/>
                    <img src={`/img/nova-group-${product?.nova_group}.svg`} className={'novagroup'} alt={'nutrition_score'}/>
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
    }
)(ProductInsertModal);
