import { resolve, join } from 'path';

import { merge } from 'webpack-merge';
import common from './webpack.config.babel';

export default () =>
    merge(common, {
        mode: 'development',
        entry: '@/index.js',
        output: {
            path: resolve(__dirname, '../dist'),
            filename: 'bundle.js',
        },
        devServer: {
            contentBase: join(__dirname, 'dist'),
            compress: true,
            port: 3000,
            injectClient: false,
            historyApiFallback: true,
        },
    });
