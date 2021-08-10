import React from 'react';

import ButtonLink from '@components/ButtonLink.jsx';

export default {
    component: ButtonLink,
    title: 'Components/ButtonLink',
    args: {
        link: 'https://en.wikipedia.org/wiki/Test',
    },
    argsTypes: {
        link: {
            name: 'Wikipedia link',
            description: 'An external link to Wikipedia',
            control: {
                type: 'text',
            },
        },
    },
};

const Template = (args) => <ButtonLink {...args} />;

export const Default = Template.bind({});
