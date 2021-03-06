const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const pluginList = require('./plugins.js');
module.exports = env => {
    const ENVIROMENT = process.env.NODE_ENV === 'production' ? true : false;//开发环境
    const SERVICEURL = env.SERVICEURL;//开发service 链接
    const VERSION = '5fa3b9';//开发版本
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
            extensions: [".js", ".jsx"],
            alias: {
                '@': path.resolve(__dirname, '../src/'),
                GlobalUtils: path.resolve(__dirname, '../src/untils/'),
                components: path.resolve(__dirname, '../src/components/index.jsx'),
                containers: path.resolve(__dirname, '../src/containers/index.jsx'),
                untils: path.resolve(__dirname, '../src/untils/index.jsx'),
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                },
                {
                    test: /\.css$/i,
                    use: [
                        ENVIROMENT ? MiniCssExtractPlugin.loader : 'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                alias: {
                                    GlobalUtils: path.resolve(__dirname, '../assets/css/')
                                },
                            }
                        }
                    ],
                    exclude: [path.resolve(__dirname, '..', 'node_modules')]
                },
                {
                    test: /\.less$/i,
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
                                camelCase: true,
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                paths: [
                                    path.resolve(__dirname, "../node_modules"),
                                ],
                            }
                        }
                    ],
                    exclude: [path.resolve(__dirname, '..', 'node_modules')]
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
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        'file-loader'
                    ]
                },
            ]
        },
        plugins: pluginList(ENVIROMENT, SERVICEURL, VERSION),
        optimization: {
            splitChunks: {
                cacheGroups: {
                    //将第三方库(library) 提取到单独的 vendor chunk 文件中
                    vendor: {
                        name: 'vendor',
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'all',
                    },
                    //公共模块
                    commons: {
                        name: 'commons',
                        chunks: 'initial',
                        minChunks: 2,
                        priority: 2
                    },
                }
            },
            runtimeChunk: {
                name: "manifest"
            }
        }
    }
}
