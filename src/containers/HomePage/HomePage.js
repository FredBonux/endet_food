import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import Header from "../../components/Header/Header";
import './HomePage.scss';
import { connect } from "react-redux";
import FloatingActionButton from "../../components/FloatingActionButton/FloatingActionButton";
import {ReactComponent as PlusIcon} from "../../assets/icons/plus.svg";
import {openScanModalAction} from "../../actions/modals.actions";
import PantryExpiringList from "../../components/PantryExpiringList/PantryExpiringList";

const HomePage = ({expiring, openScanModal}) => {
    return (
        <DefaultLayout>
            <Header
                withBackground={true}
                subtitle={[`Hai `, <strong key={'expiring-length'}>{expiring?.length || 0}</strong>, ` prodotti in scadenza`]}
            />
            <div className={"HomePage"}>
                <div className={'content'}>
                    <PantryExpiringList />
                </div>
                <FloatingActionButton onClickEvent={() => openScanModal()}>
                    <PlusIcon/>
                </FloatingActionButton>
            </div>
        </DefaultLayout>
    );
};

export default connect(
    state => ({
        expiring: state.pantry.expiring.data
    }),
    {
        openScanModal: openScanModalAction
    }
)(HomePage);
