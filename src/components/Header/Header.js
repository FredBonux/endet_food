import React from 'react';
import './Header.scss';

const Header = ({withBackground, subtitle}) => {
    return (
        <div className={`Header ${withBackground ? 'withBackground' : ''}`}>
            <div className={'app-title'}>Ciao Federico!</div>
            <div className={'app-subtitle'}>{subtitle}</div>
        </div>
    );
};

export default Header;
