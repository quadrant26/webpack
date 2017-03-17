1. extract-text-webpacl-plugin

    const ExtractTextWebpackPlugin = require("extract-text-webpacl-plugin")

    1.normal

        module:{
            rules: [
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader"
                    })
                }
            ]
        },
        plugins : [
            new ExtractTextPlugin("style.css")
        ]

    2.multiple instances

        const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
        const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');

        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
                },
                {
                    test: /\.less$/i,
                    use: extractLESS.extract([ 'css-loader', 'less-loader' ])
                },
            ]
        },
        plugins: [
            extractCSS,
            extractLESS
        ]

    3.Sass or LESS

        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        //resolve-url-loader may be chained before sass-loader if necessary
                        use: ['css-loader', 'sass-loader']
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('style.css')
            //if you want to pass in options, you can do so:
            //new ExtractTextPlugin({
            //  filename: 'style.css'
            //})
        ]


2. html-webpack-plugin

    const HtmlWebpackPlugin = require("html-webpack-plugin")

        plugins : [
            new HtmlWebpackPlugin({
                filename : "index.html",
                reject : "body",
                template : "./src/index.html"
            })
        ]