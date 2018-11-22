const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const pluginList = require('./plugins.js');
console.log(process.env.NODE_ENV,"process.env.NODE_ENV")

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
                GlobalUtils: path.resolve(__dirname, '../src/untils/'),
                components: path.resolve(__dirname, '../src/components/'),
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                },
                // {
                //     test: /\.jsx$/,
                //     exclude: /node_modules/,
                //     loader: "babel-loader",
                // },
                {
                    test: /\.(le|c)ss$/i,
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
                                    path.resolve(__dirname, "../node_modules")
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                                name: ENVIROMENT ? '[hash].[ext]' : '[path][name].[ext]?[hash]',
                                outputPath: 'images/',
                            }
                        }
                    ]
                },
            ]
        },
        plugins: pluginList(ENVIROMENT, SERVICEURL, VERSION, TITLE)
    }
}
