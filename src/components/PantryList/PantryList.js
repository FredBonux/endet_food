import React, {useState} from 'react';
import { connect } from 'react-redux';
import './PantryList.scss';
import {fetchPantryAction} from "../../actions/pantry.actions";
import {selectUpdatingProductAction} from "../../actions/products.actions";
import ProductCard from "../ProductCard/ProductCard";

const PantryList = ({products, fetchProducts, openUpdateProduct}) => {
    useState(() => {
        if(products === null) fetchProducts();
    });

    const _openUpdateProductModal = (code) => {
        openUpdateProduct(code);
    };

    const list = products?.map(product =>
        <ProductCard
            onClickEvent={() => _openUpdateProductModal(product.lsKey)}
            key={`pantry-product-${product.code}-${product.lsKey}`}
            product={product}
        />);

    return (
        <div className={`PantryList`}>
            {list}
        </div>
    );
};

export default connect(
    state => ({
        products: state.pantry.fetch.data
    }),
    {
        fetchProducts: fetchPantryAction,
        openUpdateProduct: selectUpdatingProductAction
    }
)(PantryList);
