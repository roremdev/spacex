import React from 'react';

import Astronaut from '@svg/astronaut.svg';
import Card from '@components/card/Card.jsx';

const Home = () => (
    <main className="home">
        <div className="title-container">
            <img src={Astronaut} alt="astronaut" />
            <h1 className="title">Lanzamientos recientes</h1>
        </div>
        <div className="gallery grid">
            <Card success={true} link={false} />
            <Card success={true} link={false} />
            <Card success={true} link={false} />
            <Card success={true} link={false} />
        </div>
    </main>
);

export default Home;
