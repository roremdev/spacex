import React from 'react';
import PropTypes from 'prop-types';

import Schedule from './Schedule.jsx';

const Description = ({ title, schedule, success }) => (
    <div className="description">
        <span className={`title ${success ? 'title-success' : 'title-failed'}`}>
            {title}
        </span>
        <Schedule {...schedule} />
    </div>
);

Description.propTypes = {
    title: PropTypes.string.isRequired,
    schedule: PropTypes.object.isRequired,
    success: PropTypes.bool.isRequired,
};

export default Description;
