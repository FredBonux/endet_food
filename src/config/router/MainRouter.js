/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import { connect } from 'react-redux';
import HomePage from "../../containers/HomePage/HomePage";
import SpesaPage from "../../containers/SpesaPage/SpesaPage";

function MainRouter({ authenticated }) {
    return (
        <div style={{ minHeight: '100%', minWidth: '100%' }}>
            <Switch>
                <Route label="Home" component={HomePage} path="/" exact={true} />
                <Route label="Spesa" component={SpesaPage} path="/spesa" exact={true} />
            </Switch>
        </div>
    );
}

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps)(MainRouter));
