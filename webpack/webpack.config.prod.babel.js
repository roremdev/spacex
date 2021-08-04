import { resolve } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

import { merge } from 'webpack-merge';
import common from './webpack.config.babel';

export default () =>
    merge(common, {
        mode: 'production',
        devtool: 'source-map',
        entry: '@/index.js',
        output: {
            path: resolve(__dirname, '../dist'),
            filename: 'bundle.js',
            publicPath: './',
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
        ],
        optimization: {
            minimize: true,
            minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
        },
    });
