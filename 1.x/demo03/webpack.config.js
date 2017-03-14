var webpack = require("webpack")

module.exports = {
    entry : "./main.jsx",
    output : {
        //path : __dirname + '/dist',
        filename : 'bundle.js'
    },
    module:{
        loaders : [
            {
                test : /\.js[x]?$/,
                exclude : /node_modules/,
                loader : 'babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    }
}