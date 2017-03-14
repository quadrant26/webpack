var webpack = require("webpack")

module.exports = {
    entry : "./main.js",
    output : {
        //path : __dirname + '/dist',
        filename : 'bundle.js'
    },
    module:{
        loaders : [
            { test: /\.css$/, loader : 'style-loader!css-loader' }
        ]
    }
}