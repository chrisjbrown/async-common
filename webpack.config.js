var webpack = require("webpack");
var path = require("path");

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
        }
    }
}
