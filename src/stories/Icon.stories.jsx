import React from 'react';

import Icon from '@components/Icon.jsx';
import ArrowBack from '@svg/arrowback.svg';
import ArrowNext from '@svg/arrownext.svg';
import Astronaut from '@svg/astronaut.svg';
import Clock from '@svg/clock.svg';
import Rocket from '@svg/rocket.svg';
import Wikipedia from '@svg/wikipedia.svg';

const icons = { ArrowBack, ArrowNext, Astronaut, Clock, Rocket, Wikipedia };

export default {
    component: Icon,
    title: 'Components/Icon',
    argTypes: {
        vector: {
            name: 'Vector',
            description: 'Selectionables icons',
            options: Object.keys(icons),
            mapping: icons,
            control: {
                type: 'select',
            },
        },
    },
};

const IconStory = (args) => <Icon {...args} />;

export const Default = IconStory.bind({});
Default.args = {
    vector: 'Wikipedia',
};
