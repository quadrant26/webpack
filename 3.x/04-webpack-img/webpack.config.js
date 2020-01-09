const path = require('path')

module.exports = {
    entry: './src/main.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
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
            },
            // 早期DOS系统后缀名只支持三位的后缀名
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 当加载的图片，小于 limit 时，会将图片编译成 base64 字符串格式
                            // 当加载的图片，大于 limit 时，需要使用 file-loader 模块进行加载
                            limit: 8192,
                            name: 'img/[name]'
                        }
                    }
                ]
            }
        ]
    }
}