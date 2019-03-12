const path=require("path");
const merge=require("webpack-merge");
const baseConfig=require("./webpack.base.config");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports=merge(baseConfig,{
    mode:"production",
    entry:{
        index:path.resolve(__dirname,'./src/main.js'),
    },
    plugins:[
        new BundleAnalyzerPlugin({
            analyzerPort:9090
        }),
        new CopyPlugin([
            {from:path.resolve(__dirname,"./static/js"),to:path.resolve(__dirname,"./dist/static/js")}
        ])
    ],
    optimization:{
        minimize:true,
        minimizer:[
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
                sourceMap:true
            })
        ],
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
    }

});
