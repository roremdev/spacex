import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ version }) => (
    <div className="tag">
        <span className="text">{version}</span>
    </div>
);

Tag.propTypes = {
    version: PropTypes.string.isRequired,
};

export default Tag;
