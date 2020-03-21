import React from "react";
import './DefaultLayout.scss';
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";

const DefaultLayout = ({children}) => {

    return (
        <div className={'DefaultLayout'}>
            {children}
            <BottomNavbar/>
        </div>
    );
};

export default DefaultLayout;
