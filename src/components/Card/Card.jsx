import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import ButtonLink from '@components/ButtonLink.jsx';
import Description from './Description.jsx';
import Blank from '@svg/blank.svg';

const Card = ({
    mission_name,
    launch_success,
    launch_date_local,
    links: { wikipedia, flickr_images },
}) => {
    const schedule = {
        time: `${dayjs(launch_date_local).format('HH:mm')} hrs`,
        date: dayjs(launch_date_local).format('DD/MM/YYYY'),
    };
    return (
        <div className="card">
            <div className="content">
                <ButtonLink link={wikipedia} />
                <Description
                    title={mission_name}
                    schedule={schedule}
                    success={launch_success}
                />
            </div>
            <div
                className="media"
                style={{ backgroundImage: `url(${flickr_images[0] ?? Blank})` }}
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
