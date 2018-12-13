const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
module.exports = (env) => {
    return merge(common(env), {
        // devtool: 'cheap-module-eval-source-map',
        devtool: 'source-map',
        devServer: {
            contentBase: './dist',//修改配置文件，告诉开发服务器(dev server)，在哪里查找文件
            hot: true
        },
        mode: 'development',
        module: {
            rules: [
            ]
        },
        plugins: [
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ]
    })
}


