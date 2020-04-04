import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import Header from "../../components/Header/Header";
import './PantryPage.scss';
import { connect } from "react-redux";
import FloatingActionButton from "../../components/FloatingActionButton/FloatingActionButton";
import {ReactComponent as PlusIcon} from "../../assets/icons/plus.svg";
import {openScanModalAction} from "../../actions/modals.actions";
import PantryList from "../../components/PantryList/PantryList";

const PantryPage = ({openScanModal}) => {
    return (
        <DefaultLayout>
            <Header
                withBackground={false}
                subtitle={"Ecco cosa hai in dispensa"}
            />
            <div className={"PantryPage"}>
                <div className={'content'}>
                    <PantryList />
                </div>
                <FloatingActionButton onClickEvent={() => openScanModal()}>
                    <PlusIcon/>
                </FloatingActionButton>
            </div>
        </DefaultLayout>
    );
};

export default connect(
    state => ({}),
    {
        openScanModal: openScanModalAction
    }
)(PantryPage);
