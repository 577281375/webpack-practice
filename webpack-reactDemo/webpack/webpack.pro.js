const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = (env) => {
    return merge(common(env), {
        mode:'production',
        optimization: {
            minimizer: [new UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_debugger: true,
                    drop_console: true
                },
                sourceMap: true
            })]
        }
    } )
}