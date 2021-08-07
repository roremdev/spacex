import React from 'react';

import Gallery from '@components/Gallery.jsx';
import Astronaut from '@svg/astronaut.svg';

const Home = () => (
    <main className="home">
        <div className="title-container">
            <img src={Astronaut} alt="astronaut" />
            <h1 className="title">Lanzamientos recientes</h1>
        </div>
        <Gallery />
    </main>
);

export default Home;
