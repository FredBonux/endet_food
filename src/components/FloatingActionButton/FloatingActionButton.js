import React from 'react';
import './FloatingActionButton.scss';

const FloatingActionButton = ({onClickEvent, children}) => {
    return (
        <div onClick={onClickEvent} className="FloatingActionButton">
            {children}
        </div>
    );
};

export default FloatingActionButton;
