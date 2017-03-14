var webpack = require("webpack")

module.exports = {
    entry : "./main.js",
    output : {
        //path : __dirname + '/dist',
        filename : 'bundle.js'
    },
    modules:{
        loaders : [
            { test: /\.css$/, loader : 'style-loader!css-loader' }
        ]
    }
}