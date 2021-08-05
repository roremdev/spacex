import React from 'react';
import PropTypes from 'prop-types';

import ButtonLink from '@components/ButtonLink.jsx';
import Description from './Description.jsx';
import Blank from '@svg/blank.svg';

const Card = ({ image, success, link }) => {
    const schedule = {
        time: '11:31 hrs',
        date: '12/12/2018',
    };
    return (
        <div className="card">
            <div className="content">
                <ButtonLink link={link} />
                <Description
                    title="Starlink-9 (v1.0) & BlackSky Global 5-6"
                    schedule={schedule}
                    success={success}
                />
            </div>
            <div
                className="media"
                style={{ backgroundImage: `url(${image ?? Blank})` }}
            ></div>
        </div>
    );
};

Card.prototype = {
    image: PropTypes.node.isRequired,
    success: PropTypes.bool.isRequired,
    link: PropTypes.string.isRequired,
};

export default Card;
