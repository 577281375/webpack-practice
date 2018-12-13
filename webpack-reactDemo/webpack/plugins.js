const webpack = require('webpack');
const path = require('path');
const WebpackBar = require('webpackbar');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (ENVIROMENT, SERVICEURL, VERSION) => {
    return [
        new htmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template:path.resolve(__dirname,'../resources/index.html'),
            favicon: path.resolve(__dirname, '../resources/images/WechatIMG5.jpg'),
            minify: {
                collapseWhitespace: true,
            },
            hash: true,
        }),
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
        }),
        new MiniCssExtractPlugin({
            filename: ENVIROMENT ? '[name].[hash].css' : '[name].css',
            chunkFilename: ENVIROMENT ? '[id].[hash].css' : '[id].css',
        }),
        // new webpack.DllPlugin({

        // })
    ]
}