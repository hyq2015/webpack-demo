const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry:{
        index:path.resolve(__dirname,'./src/index.js')
    },
    output: {
        /**
         * 最终生成的html文件在引用一下js文件时的前缀
         */
        publicPath: "",

        /**
         * 普通js文件的名字
         */
        filename: './js/[name][hash].bundle.js',

        /**
         * 代码切割（按需加载）的文件名字
         */
        chunkFilename: "./js/[name][hash].bundle.js",

        /**
         * 所有文件输出的根目录目录
         */
        path: path.resolve(__dirname,"dist")
    },
    resolve: {
        extensions: [".js",".json",".vue"],
        alias: {
            'vue': 'vue/dist/vue.js',
            '@':path.resolve(__dirname,'./src')
        }
    },
    devtool: "inline-source-map",
    optimization:{
        splitChunks:{
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude:/node_modules/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                use: {
                    loader:'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader:'file-loader',
                    options:{
                        name(file){
                            return '[path][name][hash].[ext]'
                        }
                    }
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html"),
            inject: "body"
        })
    ]
};
