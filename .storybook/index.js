import { resolve } from 'path';

import stories from './config/stories';
import addons from './config/addons';
import core from './config/core';

import common from '../webpack//webpack.config.babel';

export default {
    stories,
    addons,
    core,
    webpackFinal: (config) => {
        return {
            ...config,
            resolve: {
                alias: { ...config.resolve.alias, ...common.resolve.alias },
            },
            module: {
                ...config.module,
                rules: [
                    ...config.module.rules,
                    {
                        test: /\.s[ac]ss$/i,
                        use: [
                            'style-loader',
                            'css-loader',
                            'postcss-loader',
                            'sass-loader',
                        ],
                    },
                ],
            },
        };
    },
};
