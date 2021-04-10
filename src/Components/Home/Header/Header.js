import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavbarHeader from '../Navbar/NavbarHeader';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <NavbarHeader></NavbarHeader>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;