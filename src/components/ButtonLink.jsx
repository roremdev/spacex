import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/Icon.jsx';
import Wikipedia from '@svg/wikipedia.svg';

const ButtonLink = ({ link }) => (
    <div
        className="buttonlink"
        style={{ visibility: link ? 'visible' : 'hidden' }}
    >
        <Icon vector={Wikipedia} />
    </div>
);

ButtonLink.propTypes = {
    link: PropTypes.bool.isRequired,
};

export default ButtonLink;
