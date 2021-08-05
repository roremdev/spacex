import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ vector }) => (
    <img src={vector} alt="vector" className="vector" />
);

Icon.propTypes = {
    vector: PropTypes.node.isRequired,
};

export default Icon;
