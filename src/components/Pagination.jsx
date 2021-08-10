import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    incrementBySelection,
    decrement,
    increment,
} from '@redux/pageSlice.js';

import Icon from '@components/Icon.jsx';
import ArrowBack from '@svg/arrowback.svg';
import ArrowNext from '@svg/arrownext.svg';

const Pagination = () => {
    const currentPage = useSelector((state) => state.page.current);
    const dispatch = useDispatch();

    const previousPage = () => dispatch(decrement());

    const selectPage = (page) => dispatch(incrementBySelection(page));

    const nextPage = () => dispatch(increment());

    return (
        <div className="pagination">
            <div onClick={previousPage} className="cursor-pointer">
                <Icon vector={ArrowBack} />
            </div>
            <div className="pages">
                <div
                    className={`cursor-pointer ${
                        currentPage === 1 ? 'page-selected' : ''
                    }`}
                    onClick={() => selectPage(1)}
                >
                    1
                </div>
                <div
                    className={`cursor-pointer ${
                        currentPage === 2 ? 'page-selected' : ''
                    }`}
                    onClick={() => selectPage(2)}
                >
                    2
                </div>
                <div
                    className={`cursor-pointer ${
                        currentPage === 3 ? 'page-selected' : ''
                    }`}
                    onClick={() => selectPage(3)}
                >
                    3
                </div>
            </div>
            <div onClick={nextPage} className="cursor-pointer">
                <Icon vector={ArrowNext} />
            </div>
        </div>
    );
};

export default Pagination;
