import React, {useState} from 'react';
import { connect } from 'react-redux';
import './PantryExpiringList.scss';
import {fetchPantryAction} from "../../actions/pantry.actions";
import ProductCard from "../ProductCard/ProductCard";
import {selectUpdatingProductAction} from "../../actions/products.actions";

const PantryExpiringList = ({products, fetchProducts, openUpdateProduct}) => {
    useState(() => {
       if(products === null) fetchProducts();
    });

    const _openUpdateProductModal = (code) => {
        openUpdateProduct(code);
    };

    const list = products?.map(product =>
        <ProductCard
            onClickEvent={() => _openUpdateProductModal(product.lsKey)}
            key={`expiring-product-${product.code}-${product.lsKey}`}
            product={product}
        />);
    return (
        <div className={`PantryExpiringList`}>
            {list}
        </div>
    );
};

export default connect(
    state => ({
        products: state.pantry.expiring.data
    }),
    {
        fetchProducts: fetchPantryAction,
        openUpdateProduct: selectUpdatingProductAction
    }
)(PantryExpiringList);
