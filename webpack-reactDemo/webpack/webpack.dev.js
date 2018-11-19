const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = (env) => {
    return merge(common(env), {
        devtool: 'cheap-module-eval-source-map',
            // devtool: 'inline-source-map',
            devServer: {
            contentBase: './dist',//修改配置文件，告诉开发服务器(dev server)，在哪里查找文件
        },
        mode: 'development',
    })
}


