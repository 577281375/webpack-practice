const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap:true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('production')
        }),
        // new MiniCssExtractPlugin({
        //     filename: "[name].css",
        //     chunkFilename: "[id].css"
        // })
    ],
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: [
    //                 {
    //                     loader: MiniCssExtractPlugin.loader,
    //                     options: {
    //                         publicPath: '../'
    //                     }
    //                 },
    //                 'css-loader'
    //             ]
    //         }
    //     ],
    // },
    mode:'production'
});