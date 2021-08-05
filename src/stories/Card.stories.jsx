import React from 'react';

import Card from '@components/Card/Card.jsx';
import Image from '@images/media.jpeg';

export default {
    component: Card,
    title: 'Components/Card',
    argTypes: {
        image: {
            name: 'Image',
            description: 'Enable/Disable image',
            options: ['Image', 'Null'],
            mapping: {
                Image,
                Null: null,
            },
            control: { type: 'radio' },
        },
        success: {
            name: 'Success',
            description: 'Success/Fail',
            control: { type: 'boolean' },
        },
        link: {
            name: 'Link',
            description: 'Link or not link',
            control: { type: 'boolean' },
        },
    },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    image: Image,
    success: true,
    link: true,
};
