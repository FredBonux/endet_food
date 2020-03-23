import React from 'react';
import './ProductCard.scss';
import moment from "moment";
import 'moment/locale/it';

const ProductCard = ({product}) => {
    moment.locale('it');
    const dateDiffText = moment(product?.expiryDate, "YYYY-MM-DD").fromNow();
    const dateDiff = - moment(new Date()).diff(product.expiryDate, "days");
    console.log("datediff", dateDiff);
    let dateDiffClass = dateDiff <= 0 ? 'expired' : 'expiring';
    return (
        <div className={`ProductCard card ${dateDiffClass}`}>
            <img className={'product-image'} src={product?.image_thumb_url} alt={"product_image"}/>
            <div className={'content'}>
                <div className={`expiry`}>{dateDiffText}</div>
                <div className={'name'}>{product?.product_name}</div>
                <div className={'footer'}>
                    {product?.nutrition_grades && <img src={`/img/nutriscore-${product?.nutrition_grades}.svg`} className={'nutriscore'} alt={'nutrition_score'}/>}
                    {product?.nova_group && <img src={`/img/nova-group-${product?.nova_group}.svg`} className={'novagroup'} alt={'nutrition_score'}/>}
                    <div className={'qta'}>{product?.qta}</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
