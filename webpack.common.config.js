var webpack = require("webpack");
var path = require("path");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function(env) {
    return {
        entry: {
            app: "./src/app.js"
        },
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, "dist"),
            libraryTarget: "umd",
            library: "MyApp"
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: "async-common",
                async: true,
                children: true
            }),
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
            })
        ]
    }
}
