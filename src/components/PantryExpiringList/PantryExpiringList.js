import React, {useState} from 'react';
import { connect } from 'react-redux';
import './PantryExpiringList.scss';
import {fetchPantryAction} from "../../actions/pantry.actions";
import ProductCard from "../ProductCard/ProductCard";

const PantryExpiringList = ({products, fetchProducts}) => {
    useState(() => {
       if(products === null) fetchProducts();
    });

    const list = products?.map(product => <ProductCard key={`expiring-product-${product.code}`} product={product}/>);
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
        fetchProducts: fetchPantryAction
    }
)(PantryExpiringList);
