import { resolve } from 'path';

import stories from './config/stories';
import addons from './config/addons';
import core from './config/core';

export default {
    stories,
    addons,
    core,
    webpackFinal: (config) => {
        return {
            ...config,
            resolve: {
                alias: {
                    ...config.resolve.alias,
                    '@styles': resolve(__dirname, '../src/scss'),
                    '@styles-base': resolve(__dirname, '../src/scss/base'),
                    '@styles-components': resolve(
                        __dirname,
                        '../src/scss/components'
                    ),
                    '@styles-utils': resolve(__dirname, '../src/scss/utils'),
                    '@layouts': resolve(__dirname, '../src/layouts'),
                    '@assets-images': resolve(
                        __dirname,
                        '../src/assets/images'
                    ),
                    '@assets-svg': resolve(__dirname, '../src/assets/svg'),
                    '@componets': resolve(__dirname, '../src/components'),
                },
            },
        };
    },
};
