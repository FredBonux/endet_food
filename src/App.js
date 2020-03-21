import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import MainRouter from "./config/router/MainRouter";
import './assets/app-style.scss';

function App() {
    return (
        <div className="App">
            <Router basename={window.baseUrl}>
                <MainRouter />
            </Router>
        </div>
    );
}

export default App;
