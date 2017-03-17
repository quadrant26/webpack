var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname + "/build"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.css$/,
                //use: ['style-loader', 'css-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            reject: 'body',
            template: './src/index.html'
        }),
        new ExtractTextPlugin("style.css")
    ]
}