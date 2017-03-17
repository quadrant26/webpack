var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname + "/build"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            }
        ]
    }
}