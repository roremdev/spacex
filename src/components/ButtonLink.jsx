import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/Icon.jsx';
import Wikipedia from '@svg/wikipedia.svg';

const ButtonLink = ({ link }) => (
    <a
        href={link}
        target="_blank"
        className="self-end"
        style={{ visibility: link ? 'visible' : 'hidden' }}
    >
        <div className="buttonlink">
            <Icon vector={Wikipedia} />
        </div>
    </a>
);

ButtonLink.propTypes = {
    link: PropTypes.string,
};

export default ButtonLink;
