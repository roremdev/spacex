import React from 'react';
import { Link } from 'react-router-dom';

import { getAbout } from '@graphql/index.js';
import Loader from '@components/Loader.jsx';

import Icon from '@components/Icon.jsx';
import Twitter from '@svg/twitter.svg';
import Flickr from '@svg/flickr.svg';
import Website from '@svg/website.svg';

const About = () => {
    const { loading, data } = getAbout();

    if (loading) return <Loader />;

    return (
        <main className="about">
            <div className="text">
                <h1 className="title">{data.company.name}</h1>
                <p className="body">{data.company.summary}</p>
            </div>
            <div className="description">
                <div className="links-social">
                    <a href={data.company.links.twitter} target="_blank">
                        <Icon vector={Twitter} />
                    </a>
                    <a href={data.company.links.flickr} target="_blank">
                        <Icon vector={Flickr} />
                    </a>
                    <a href={data.company.links.website} target="_blank">
                        <Icon vector={Website} />
                    </a>
                </div>
                <Link to="/" className="navigation">
                    Volver al inicio
                </Link>
            </div>
        </main>
    );
};

export default About;
