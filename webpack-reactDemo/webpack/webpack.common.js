const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');


module.exports = env => {
    const ENVIROMENT = env.ENVIROMENT === 'production' ? true : false;//开发环境
    const SERVICEURL = env.SERVICEURL;//开发service 链接
    const VERSION = '5fa3b9';//开发版本
    const title = 'SongxueWebpackReactDemo';
    return {
        entry: {
            index: './src/index.js',
        },
        output: {
            filename: '[name].bundle.js',
            chunkFilename:"[name].bundle.js",
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new htmlWebpackPlugin({
                title: title,
                filename: 'index.html',
                minify: {
                    collapseWhitespace: true,
                },
                hash: true,
            }),
            // new BundleAnalyzerPlugin({
            //     analyzerMode:'server'
            // }),
            new WebpackBar(
                {
                    name: ENVIROMENT ? 'production' : 'development',
                    color: ENVIROMENT ? '#f2a900' : '#00953a'
                }
            ),
            new webpack.DefinePlugin({
                SERVICEURL: JSON.stringify(SERVICEURL),
                ENVIROMENT: JSON.stringify(ENVIROMENT),
                VERSION: JSON.stringify(VERSION),
            })
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                // {
                //     test: /\.less$/,
                //     use: [{
                //         loader: "style-loader" // creates style nodes from JS strings
                //     }, {
                //         loader: "css-loader",// translates CSS into CommonJS
                //         options: {
                //             sourceMap: true
                //         }
                //     }, {
                //         loader: "less-loader",
                //             options: {
                //             sourceMap: true,
                //             strictMath: true,
                //             noIeCompat: true,
                //             paths: [
                //                 path.resolve(__dirname, "node_modules")
                //             ]
                //         } // compiles Less to CSS
                //     }]
                // }
            ]
        }
    }
}
