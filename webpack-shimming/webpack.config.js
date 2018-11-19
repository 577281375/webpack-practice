const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const loginEnv = process.env.login_env;
console.log(loginEnv,"loginEnv")
module.exports =
    (env) => {
        console.log(env, 'env.SERVICE_URL');

    console.log(env.SERVICE_URL, 'env.SERVICE_URL');
    // console.log(env.production, 'env.production');
    // console.log(process.env.login_env,"login_env");
    // const SERVICE_URL = env.SERVICE_URL;//api环境
    // const PRODUCTION = process.env.NODE_ENV == 'development' ?
    //     JSON.stringify(true) : JSON.stringify(false);//环境变量
    return{
        entry: {
            index: './src/index.js',
            polyfills: './src/polyfills.js'
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: require.resolve('./src/globals.js'),
                    use: 'exports-loader?file,parse=helpers.parse'
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'shimming',
            }),
            new webpack.ProvidePlugin({
                // _:'lodash'
                join: ['lodash', 'join']
            }),
            // new webpack.DefinePlugin({
            //     // 'process.env.NODE_ENV': JSON.stringify(process.env.production),
            //     // 'SERVICE_URL': JSON.stringify(SERVICE_URL),
            //     // login_env: JSON.stringify( process.env.login_env)
            // })
        ],
    }
}