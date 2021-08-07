import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '@components/Header.jsx';
import Footer from '@components/Footer.jsx';
import Home from '@pages/Home.jsx';
import About from '@pages/About.jsx';
import Error from '@pages/Error.jsx';

const Default = () => {
    const { pathname } = useLocation();

    const content = {
        '/': <Home />,
        '/about': <About />,
    };

    return (
        <>
            <Header />
            {content[pathname] ?? <Error />}
            {pathname === '/' && <Footer />}
        </>
    );
};
export default Default;
