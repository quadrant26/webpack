var webpack = require("webpack")

module.exports = {
    entry : "./main.js",
    output : {
        //path : __dirname + '/dist',
        filename : 'bundle.js'
    },
    modules : {
        loaders : [
            {
                test : /\.(png|jpgy)$/, loader : 'url-loader?limit=8192'
            }
        ]
    }
}