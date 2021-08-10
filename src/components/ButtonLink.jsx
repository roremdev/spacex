import React from 'react';

import Icon from '@components/Icon.jsx';
import Wikipedia from '@svg/wikipedia.svg';

const ButtonLink = ({ link, vector }) => (
    <a
        href={link}
        target="_blank"
        className="self-end"
        style={{ visibility: link ? 'visible' : 'hidden' }}
    >
        <div className="buttonlink">
            <Icon vector={vector ?? Wikipedia} />
        </div>
    </a>
);

export default ButtonLink;
