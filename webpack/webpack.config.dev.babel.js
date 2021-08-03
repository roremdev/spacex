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
        module: {
            rules: [
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
        devServer: {
            contentBase: join(__dirname, 'dist'),
            compress: true,
            port: 3000,
            injectClient: false,
            historyApiFallback: true,
        },
    });
