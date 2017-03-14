# webpack

插件

    var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

    html-webpack-plugin

    open-browser-webpack-plugin

    var devFlagPlugin = new webpack.DefinePlugin({
        __DEV__ : JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    });

    // 当多个脚本有共同的部分，可以提取公共部分为一个单独的文件commonschunkplugin
    var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

        plugins: [
            new UglifyJsPlugin({                // 字符串扩展
                compress : {
                    warnings : false
                }
            }),
            new HtmlwebpackPlugin({             // 指定文件打开
                title : "",
                filename : "index.html"
            }),
            new OpenBrowserPlugin({             // 打开路径
                url : "http://localhost:port"
            }),
            devFlagPlugin,
            // 当多个脚本有共同的部分，可以提取公共部分为一个单独的文件commonschunkplugin
            new CommonsChunkPlugin('init.js')
        ]

use

    // require.ensure tells Webpack that ./a.js should be separated from bundle.js and built into a single chunk file.
    require.ensure([file], function (require){
        var content = require("./a")
    })

    bundle-loader

        npm/cnpm install  bundle-loader -D/--save-dev

Vendor chunk

    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js')
    ]

    plugins: [
        new webpack.ProvidePlugin({
            $ : 'jquery',
            jquery : 'jquery',
            window.jquery : 'jquery'
        })
    ]