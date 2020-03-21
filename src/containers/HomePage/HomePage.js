import React, {useEffect} from "react";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import Header from "../../components/Header/Header";
import './HomePage.scss';
import { connect } from "react-redux";
import {fetchProductAction} from "../../actions/products.actions";
import ProductCard from "../../components/ProductCard/ProductCard";
import FloatingActionButton from "../../components/FloatingActionButton/FloatingActionButton";
import {ReactComponent as PlusIcon} from "../../assets/icons/plus.svg";
import {openScanModalAction} from "../../actions/modals.actions";
import ProductScanModal from "../../components/ProductScanModal/ProductScanModal";
import ProductInsertModal from "../../components/ProductInsertModal/ProductInsertModal";

const HomePage = ({product, fetchProduct, openScanModal}) => {
    useEffect(() => {
        if(!product) fetchProduct();
    }, [fetchProduct, product]);

    return (
        <DefaultLayout>
            <Header
                withBackground={true}
                subtitle={[`Hai `, <strong>4</strong>, ` prodotti in scadenza`]}
            />
            <div className={"HomePage"}>
                <div className={'content'}>
                    {product && <ProductCard product={product} />}
                </div>
                <FloatingActionButton onClickEvent={() => openScanModal()}>
                    <PlusIcon/>
                </FloatingActionButton>
            </div>
            <ProductScanModal/>
            <ProductInsertModal/>
        </DefaultLayout>
    );
};

export default connect(
    state => ({
        product: state.products.product
    }),
    {
        fetchProduct: fetchProductAction,
        openScanModal: openScanModalAction
    }
)(HomePage);
