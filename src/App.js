import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import MainRouter from "./config/router/MainRouter";
import './assets/app-style.scss';
import ProductScanModal from "./components/ProductScanModal/ProductScanModal";
import ProductInsertModal from "./components/ProductInsertModal/ProductInsertModal";
import ProductUpdateModal from "./components/ProductUpdateModal/ProductUpdateModal";
import ProductManualInsertModal from "./components/ProductManualInsertModal/ProductManualInsertModal";

function App() {
    return (
        <div className="App">
            <Router basename={window.baseUrl}>
                <MainRouter />
            </Router>
            <ProductScanModal/>
            <ProductInsertModal/>
            <ProductManualInsertModal/>
            <ProductUpdateModal/>
        </div>
    );
}

export default App;
