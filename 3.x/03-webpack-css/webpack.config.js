const path = require('path')

module.exports = {
    entry: './src/main.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                // css-loader 只负责将 css 文件进行加载
                // style-loader 负责将样式添加到 DOM 中
                // 使用多个 loader 时，是从右向左
                use: ["style-loader", 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    }
}