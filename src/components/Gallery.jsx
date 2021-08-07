import React from 'react';

import Card from '@components/card/Card.jsx';
import Image from '@images/media.jpeg';

const Gallery = () => (
    <div className="gallery">
        <Card image={Image} success={true} link={true} />
        <Card success={true} link={false} />
        <Card success={true} link={false} />
        <Card success={true} link={false} />
    </div>
);

export default Gallery;
