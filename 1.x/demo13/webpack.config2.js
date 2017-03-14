// webpack.config.js
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './main2.js'
    },
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};