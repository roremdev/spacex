import React from 'react';
import { Link } from 'react-router-dom';

import NotFound from '@svg/notfound.svg';

const Error = () => (
    <main className="error">
        <div>
            <h1 className="title">Página no encontrada.</h1>
            <img src={NotFound} alt="not found" />
        </div>
        <Link to="/" className="navigation">
            Volver al inicio
        </Link>
    </main>
);
export default Error;
