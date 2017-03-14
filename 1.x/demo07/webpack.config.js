var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry : "./main.js",
    output : {
        //path : __dirname + '/dist',
        filename : 'bundle.js'
    },
    plugins: [
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}