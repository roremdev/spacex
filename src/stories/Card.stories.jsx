import React from 'react';
import dayjs from 'dayjs';

import Card from '@components/Card/Card.jsx';
import Image from '@images/media.jpeg';

export default {
    component: Card,
    title: 'Components/Card',
    args: {
        mission_name: 'Temporal Title',
        wikipedia: 'https://en.wikipedia.org/wiki/Test',
        image: Image,
        launch_success: true,
        launch_date_local: dayjs(),
    },
    argTypes: {
        mission_name: {
            name: 'Mission name',
            description: 'Title card',
            control: {
                type: 'text',
            },
        },
        wikipedia: {
            name: 'Wikipedia link',
            description: 'An external link to Wikipedia',
            control: {
                type: 'text',
            },
        },
        image: {
            name: 'Image cover',
            description: 'Enable/Disable image',
            options: ['Image', 'Null'],
            mapping: {
                Image,
                Null: null,
            },
            control: { type: 'radio' },
        },
        launch_success: {
            name: 'Success',
            description: 'Launch was success/Fail',
            control: { type: 'boolean' },
        },
        launch_date_local: {
            name: 'Date',
            description: 'Launch date',
            control: { type: 'date' },
        },
    },
};

const Template = ({ image, wikipedia, ...args }) => (
    <Card
        links={{
            flickr_images: [image],
            wikipedia,
        }}
        {...args}
    />
);

export const Default = Template.bind({});
