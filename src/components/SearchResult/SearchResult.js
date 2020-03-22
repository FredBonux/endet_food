import React from 'react';
import './SearchResult.scss';

const SearchResult = ({product, onClickEvent}) => {
    return (
        <div onClick={onClickEvent} className={`SearchResult card`}>
            <img className={'product-image'} src={product?.image_thumb_url} alt={"product_image"}/>
            <div className={'name'}>{product?.product_name}</div>
        </div>
    );
};

export default SearchResult;
