import React from 'react';

import Tag from '@components/Tag.jsx';

export default {
    component: Tag,
    title: 'Components/Tag',
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = { text: "I'm a tag" };
