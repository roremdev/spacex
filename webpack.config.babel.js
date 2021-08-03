import { resolve, join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default () => {
    return {
        mode: 'production',
        devtool: 'source-map',
        entry: './src/index.js',
        output: {
            path: resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: './',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.scss', '.css', '.pug'],
            alias: {
                '@': resolve(__dirname, 'src'),
                '@styles': resolve(__dirname, 'src/scss'),
                '@styles-base': resolve(__dirname, 'src/scss/base'),
                '@styles-components': resolve(__dirname, 'src/scss/components'),
                '@styles-utils': resolve(__dirname, 'src/scss/utils'),
                '@layouts': resolve(__dirname, 'src/layouts'),
                '@assets-images': resolve(__dirname, 'src/assets/images'),
                '@assets-svg': resolve(__dirname, 'src/assets/svg'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    loader: 'pug-loader',
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
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
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
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: resolve(__dirname, './src/public/index.pug'),
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
            new CleanWebpackPlugin(),
        ],
        optimization: {
            minimize: true,
            minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
        },
    };
};
