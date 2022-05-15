const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'do whats to-do'
        }),
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.module\.s(a|c)ss$/i,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: isDevelopment,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },
            {
                test: /\.s(a|c)ss$/i,
                exclude: /\.module.(s(a|c)ss)$/i,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                        sourceMap: isDevelopment,
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ott)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
    },
};