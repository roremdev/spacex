import React from 'react';

import ButtonLink from '@components/ButtonLink.jsx';

export default {
    component: ButtonLink,
    title: 'Components/ButtonLink',
};

const Template = (args) => <ButtonLink {...args} />;

export const Default = Template.bind({});
Default.args = {
    link: true,
};
