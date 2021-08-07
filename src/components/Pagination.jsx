import React from 'react';

import Icon from '@components/Icon.jsx';
import ArrowBack from '@svg/arrowback.svg';
import ArrowNext from '@svg/arrownext.svg';

const Pagination = () => (
    <div className="pagination">
        <Icon vector={ArrowBack} />
        <div className="pages">
            <div className="page-selected">1</div>
            <div>2</div>
            <div>3</div>
            <div>...</div>
            <div>14</div>
        </div>
        <Icon vector={ArrowNext} />
    </div>
);

export default Pagination;
