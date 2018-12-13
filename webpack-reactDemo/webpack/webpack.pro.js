const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");



module.exports = (env) => {
    return merge(common(env), {
        mode: 'production',
        module: {
            rules: [
            ]
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    output: {
                        // 去掉注释内容
                        comments: false,
                    },
                    sourceMap: true // set to true if you want JS source maps
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['dist'], {
                root: process.cwd(),
                verbose: true,
                dry: false
            }),
        ]
    })
}