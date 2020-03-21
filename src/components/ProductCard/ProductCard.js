import React from 'react';
import './ProductCard.scss';

const ProductCard = ({product}) => {
    return (
        <div className="ProductCard card">
            <img className={'product-image'} src={product?.image_thumb_url} alt={"product_image"}/>
            <div className={'content'}>
                <div className={'expiry'}>0 giorni</div>
                <div className={'name'}>{product?.product_name}</div>
                <div className={'footer'}>
                    <img src={`/img/nutriscore-${product?.nutrition_grades}.svg`} className={'nutriscore'} alt={'nutrition_score'}/>
                    <img src={`/img/nova-group-${product?.nova_group}.svg`} className={'novagroup'} alt={'nutrition_score'}/>
                    <div className={'qta'}>100g</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
