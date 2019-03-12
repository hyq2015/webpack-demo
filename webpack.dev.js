const path=require("path");
const merge=require("webpack-merge");
const baseConfig=require("./webpack.base.config");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports=merge(baseConfig,{
    mode:"development",
    entry:{
        index:path.resolve(__dirname,'./src/main.js'),
    },
    devServer: {
        historyApiFallback: true,
        publicPath:"/",
        hot: true,
        host:"localhost",
        port:8000,
        contentBase: path.join(__dirname, "/dist")
    },
    plugins:[
        // new BundleAnalyzerPlugin()
    ]
});
