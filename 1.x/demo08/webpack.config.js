var webpack = require("webpack");
var HtmlwebpackPlugin = require("html-webpack-plugin");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");

module.exports = {
    entry : "./main.js",
    output : {
        //path : __dirname + '/dist',
        filename : 'bundle.js'
    },
    plugins : [
        new HtmlwebpackPlugin({
            title : "webpack-demos",
            filename : 'index.html'
        }),
        new OpenBrowserPlugin({
            url : 'http://localhost:8989'
        })
    ]
}