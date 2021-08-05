import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/Icon.jsx';
import Clock from '@svg/clock.svg';
import Rocket from '@svg/rocket.svg';

const Schedule = ({ time, date }) => (
    <div className="schedule">
        <div>
            <Icon vector={Clock} />
            <span>{time}</span>
        </div>
        <div>
            <Icon vector={Rocket} />
            <span>{date}</span>
        </div>
    </div>
);

Schedule.propTypes = {
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default Schedule;
