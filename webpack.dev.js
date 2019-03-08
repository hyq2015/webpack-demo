const path=require("path");
const merge=require("webpack-merge");
const baseConfig=require("./webpack.base.config");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports=merge(baseConfig,{
    mode:"development",
    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: path.posix.join('/dist', 'index.html') },
            ],
        },
        publicPath:"/assets/",
        hot: true,
        host:"localhost",
        port:9999,
        contentBase: path.join(__dirname, "/static/")
    },
    plugins:[
        new BundleAnalyzerPlugin()
    ]
});
