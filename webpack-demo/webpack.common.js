const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: [
            'lodash',
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Caching',
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.HashedModuleIdsPlugin(),
    ],
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename:'[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                //将第三方库(library) 提取到单独的 vendor chunk 文件中
                vendor: {
                    name: 'vendor',
                    test:/[\\/]node_modules[\\/]/,
                    chunks: 'all',
                },
                //公共模块
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2,
                    priority:2
                },
            }
        },
        runtimeChunk: {
            name: "manifest"
        }
    }
};