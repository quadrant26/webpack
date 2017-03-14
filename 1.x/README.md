1. demo1

    webpack.config.js

        {
            entry : 'main.js',
            output : {
                filename : 'bundle.js'
            }
        }

    package.json

        scripts : {
            "dev" : "webpack-dev-server --devtool eval --progress --colors --hot --port 8989"
        }

2. demo2

    webpack.config.js

        {
            entry : {
                bundle1 : 'main1.js',
                bundle2 : 'main2.js'
            }
            output : {
                filename : '[name].js'
            }
        }

3. babel-laoder

    webpack.config.js

        module:{
            loaders : [
                {
                    test : /\.js[x]?/,
                    exclude : /node_modules/,
                    loader : 'babel-loader?presets[]=es2015&presets[]=react'
                }
            ]
        }

    package.json

        "devDependencies": {
            "babel-core": "^6.24.0",
            "babel-loader": "^6.4.0",
            "babel-preset-es2015": "^6.24.0",
            "babel-preset-react": "^6.23.0",
            "react": "^15.4.2",
            "react-dom": "^15.4.2",
            "webpack": "^1.14.0",
            "webpack-dev-server": "^1.16.3"
        }

4. css-laoder

    webpack.config.js

        module:{
            loaders : [
                {test : /\.css$/, loader : 'style-loader!css-loader'}
            ]
        }

5. Image loader

    webpack.config.js

        module : {
            loaders : [
                {
                    test : /\.(png|jpgy)$/, loader : 'url-loader?limit=8192'
                }
            ]
        }

6. CSS Module

    webpack.config

        module: {
            loaders:[
                {
                    test: /\.js[x]?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react']
                    }
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader?modules'
                }
            ]
        }

07. UglifyJs Plugin

    webpack.config

        var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

        plugins: [
            new uglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]

08. HTML Webpack Plugin and Open Browser Webpack Plugin

    webpack.config

        var HtmlwebpackPlugin = require('html-webpack-plugin');
        var OpenBrowserPlugin = require('open-browser-webpack-plugin');

        plugins: [
            new HtmlwebpackPlugin({
                title: 'Webpack-demos',
                filename: 'index.html'
            }),
            new OpenBrowserPlugin({
                url: 'http://localhost:8080'
            })
        ]

10. Environment flags 

    webpack.config

        var devFlagPlugin = new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
        });

        plugins: [devFlagPlugin]

    start

        # Linux & Mac
        $ env DEBUG=true webpack-dev-server

        # Windows
        $ set DEBUG=true
        $ webpack-dev-server

10. Code splitting

    main.js

        require.ensure(['./a'], function(require) {
            var content = require('./a');
            document.open();
            document.write('<h1>' + content + '</h1>');
            document.close();
        });

11. Code splitting with bundle-loader

    npm/cnpm install  bundle-loader -D/--save-dev

12. Common chunk

    webpack.config.js

        // 当多个脚本有共同的部分，可以提取公共部分为一个单独的文件commonschunkplugin
        var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

        module: {
            loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                presets: ['es2015', 'react']
                }
            },
            ]
        },
        plugins: [
            new CommonsChunkPlugin('init.js')
        ]
    
13. Vendor chunk

    webpack.config.js

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

14. Exposing global variables

    webpack.config.js

        externals: {
            // require('data') is external and available
            //  on the global var data
            'data': 'data'
        }

15. Hot Module Replacement

    webpack-dev-server --hot --inline
    
    1.Meaning of the options:

        --hot: adds the HotModuleReplacementPlugin and switch the server to hot mode.
        --inline: embed the webpack-dev-server runtime into the bundle.
        --hot --inline: also adds the webpack/hot/dev-server entry.

    2. Modify webpack.config.js.

        add new webpack.HotModuleReplacementPlugin() to the plugins field
        add webpack/hot/dev-server and webpack-dev-server/client?http://localhost:8080 to the entry field

            entry: [
                'webpack/hot/dev-server',
                'webpack-dev-server/client?http://localhost:8080',
                './index.js'
            ],
            plugins: [
                new webpack.HotModuleReplacementPlugin()
            ],
            module: {
                loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
                include: path.join(__dirname, '.')
                }]
            }

16. React router

    









