import React from 'react';

import Pagination from '@components/Pagination.jsx';

export default {
    component: Pagination,
    title: 'Components/Pagination',
};

const PaginationStory = (args) => <Pagination {...args} />;

export const Default = PaginationStory.bind({});
