import React from 'react';
import './BottomNavbar.scss';
import {ReactComponent as HomeIcon} from "../../assets/icons/home.svg";
import {ReactComponent as SettingsIcon} from "../../assets/icons/settings.svg";
import {ReactComponent as ListIcon} from "../../assets/icons/form.svg";
import {ReactComponent as BasketIcon} from "../../assets/icons/basket.svg";
import {Link, useLocation} from "react-router-dom";

const BottomNavbar = () => {
    const location = useLocation()?.pathname;
    let activeIndex = 0;
    if(location.indexOf('spesa') >= 0) activeIndex = 1;
    else if(location.indexOf('dispensa') >= 0) activeIndex = 2;
    else if(location.indexOf('impostazioni') >= 0) activeIndex = 3;

    return (
        <div className="BottomNavbar">
            <div className={'pages'}>
                <Link to={'/'} className={`page ${activeIndex === 0 ? 'active' : ''}`}>
                    <div className={'icon'}>
                        <HomeIcon />
                    </div>
                    <div className={'text'}>
                        Home
                    </div>
                </Link>
                <Link to={'/spesa'} className={`page ${activeIndex === 1 ? 'active' : ''}`}>
                    <div className={'icon'}>
                        <BasketIcon />
                    </div>
                    <div className={'text'}>
                        Spesa
                    </div>
                </Link>
                <Link to={'/dispensa'} className={`page ${activeIndex === 2 ? 'active' : ''}`}>
                    <div className={'icon'}>
                        <ListIcon />
                    </div>
                    <div className={'text'}>
                        Dispensa
                    </div>
                </Link>
                <Link to={'/impostazioni'} className={`page ${activeIndex === 3 ? 'active' : ''}`}>
                    <div className={'icon'}>
                        <SettingsIcon />
                    </div>
                    <div className={'text'}>
                        Impostazioni
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default BottomNavbar;
