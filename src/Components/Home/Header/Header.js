import React from 'react';
import Nav from '../../Shared/Nav/Nav';
import HeaderMain from '../HomeMain/HeaderMain';
import './headers.css'

const Header = () => {
    return (
        <div className="headers" style={{backgroundColor: "#FBD062"}}>
            <div className="container">
            <Nav></Nav>
            <HeaderMain></HeaderMain>
            </div>
        </div>
    );
};

export default Header;