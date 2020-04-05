import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import './PantryList.scss';
import {fetchPantryAction} from "../../actions/pantry.actions";
import {selectUpdatingProductAction} from "../../actions/products.actions";
import ProductCard from "../ProductCard/ProductCard";

const PantryList = ({products, fetchProducts, openUpdateProduct}) => {
    const [currentSort, setCurrentSort] = useState("expiryDate");

    useEffect(() => {
        if(products === null) fetchProducts();
    });

    const _openUpdateProductModal = (code) => {
        openUpdateProduct(code);
    };

    const sortedProducts = products?.sort((a, b) => a[currentSort] > b[currentSort] ? 1 : -1);

    const list = sortedProducts?.map(product =>
        <ProductCard
            onClickEvent={() => _openUpdateProductModal(product.lsKey)}
            key={`pantry-product-${product.code}-${product.lsKey}`}
            product={product}
        />);

    return (
        <div className={`PantryList`}>
            <div className={'list-header'}>
                <label>Ordina per:</label>
                <select onChange={e => setCurrentSort(e.target.value)}>
                    <option value={'expiryDate'}>Data scadenza</option>
                    <option value={'product_name'}>Nome</option>
                    <option value={'nova_group'}>Nova group</option>
                    <option value={'nutrition_grades'}>Nutriscore</option>
                </select>
            </div>
            <div className={'list'}>
                {list}
            </div>
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
