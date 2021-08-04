import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ text }) => (
    <div className="tag">
        <span className="text">{text}</span>
    </div>
);

Tag.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Tag;
