var webpack = require("webpack")
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry : {
        bundle1 : 'main1.jsX' 
    },
    output : {
        //path : __dirname + '/dist',
        filename : '[name].js'
    },
    module: {
        loaders:[
        {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
            presets: ['es2015', 'react']
            }
        },
        ]
    },
    plugins: [
        new CommonsChunkPlugin('init.js')
    ]
}