import React from 'react';

import { Provider } from 'react-redux';
import store from '@redux/store.js';

import Pagination from '@components/Pagination.jsx';

export default {
    component: Pagination,
    title: 'Components/Pagination',
};

const PaginationStory = (args) => (
    <Provider store={store}>
        <Pagination {...args} />
    </Provider>
);
export const Default = PaginationStory.bind({});
