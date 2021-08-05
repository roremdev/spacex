import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Brand from '@svg/brand.svg';

const Header = () => {
    const { pathname } = useLocation();

    return (
        <header className={`${pathname === '/' ? 'header' : 'header-center'}`}>
            <Link to="/">
                <img src={Brand} alt="brand" />
            </Link>
            {pathname === '/' && (
                <Link to="/about" className="navigation">
                    Acerca de
                </Link>
            )}
        </header>
    );
};

export default Header;
