import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css', '.pug'],
        alias: {
            '@': resolve(__dirname, '../src'),
            '@styles': resolve(__dirname, '../src/scss'),
            '@styles-base': resolve(__dirname, '../src/scss/base'),
            '@styles-pages': resolve(__dirname, '../src/scss/pages'),
            '@styles-components': resolve(__dirname, '../src/scss/components'),
            '@styles-utils': resolve(__dirname, '../src/scss/utils'),
            '@layouts': resolve(__dirname, '../src/layouts'),
            '@pages': resolve(__dirname, '../src/pages'),
            '@images': resolve(__dirname, '../src/assets/images'),
            '@svg': resolve(__dirname, '../src/assets/svg'),
            '@components': resolve(__dirname, '../src/components'),
            '@graphql': resolve(__dirname, '../src/graphql'),
        },
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.(js|jsx)?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(html)?$/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: './assets/images/[hash][ext][query]',
                },
            },
            {
                test: /\.(svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: './assets/svg/[hash][ext][query]',
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    process.env.NODE_ENV === 'production'
                        ? MiniCssExtractPlugin.loader
                        : 'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../src/public/index.pug'),
        }),
        new CleanWebpackPlugin(),
    ],
};
