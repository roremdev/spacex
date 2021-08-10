// TODO error

import React from 'react';
import { useSelector } from 'react-redux';

import { getLaunchesPast } from '@graphql/index.js';
import Loader from '@components/Loader.jsx';
import Card from '@components/Card/Card.jsx';

const Gallery = () => {
    const offset = useSelector((state) => state.page.current);

    const { loading, data } = getLaunchesPast({ offset });

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
