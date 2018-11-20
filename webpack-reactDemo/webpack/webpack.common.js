const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const pluginList = require('./plugins.js');

module.exports = env => {
    const ENVIROMENT = env.ENVIROMENT === 'production' ? true : false;//开发环境
    const SERVICEURL = env.SERVICEURL;//开发service 链接
    const VERSION = '5fa3b9';//开发版本
    const TITLE = 'SongxueWebpackReactDemo';
    return {
        entry: {
            index: './src/index.js',
        },
        output: {
            filename: '[name].bundle.js',
            chunkFilename: "[name].bundle.js",
            path: path.resolve(__dirname, '../dist')
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '../src/'),
                GlobalUtils: path.resolve(__dirname, '../src/untils/')
            }
        },
        module: {
            rules: [
                {
                    test: /\.(le|c)ss$/,
                    use: [
                        ENVIROMENT ? MiniCssExtractPlugin.loader : 'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                alias: {
                                    GlobalUtils: path.resolve(__dirname, '../assets/css/')
                                },
                                importLoaders: 1,
                                modules: true,
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                                camelCase: true
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                paths: [
                                    path.resolve(__dirname, "node_modules")
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        plugins: pluginList(ENVIROMENT, SERVICEURL, VERSION, TITLE)
    }
}
