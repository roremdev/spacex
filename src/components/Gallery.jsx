// TODO error

import React from 'react';
import getLaunchesPast from '@graphql/index.js';

import Loader from '@components/Loader.jsx';
import Card from '@components/card/Card.jsx';

const Gallery = () => {
    const { loading, data } = getLaunchesPast({ offset: 0 });

    if (loading) return <Loader />;

    return (
        <div className="gallery">
            {data.launchesPast.map((launch) => (
                <Card key={launch.id} {...launch} />
            ))}
        </div>
    );
};

export default Gallery;
