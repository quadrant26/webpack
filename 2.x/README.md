# webpack
webpack 使用

1. webpack 安装

    使用 Node 的 npm 进行安装

    npm install webpack -g  全局安装

2. 简单使用

    demo

        npm init

        package.json

            安装 webpack 依赖   npm install webpack --save-dev

        创建文件app和public。其中app文件夹用来存放原始数据和JavaScript模块；public文件夹用来存放HTML以及打包后的JS文件.

        public

            -- index.html ( srcipt src="bundle.js" 打包后的文件 )

        app

            -- entry.js ( js 入口文件 )

3. 打包

    编译打包

    webpack app/entry.js public/bundle.js

    配置文件 webpack.config.js

        module.exports = {

          entry: __dirname + '/app/entry.js',

          output: {

            filename: 'bundle.js',

            path: __dirname + '/public'

          }

        }


        __dirname”（双下划线），它是node.js中的一个全局变量，它指向当前执行脚本所在的目录

        run

            webpack --config webpack.config.js  ||  webpack

    实时更新 webpack

        npm install -g webpack-dev-server

        执行webpack-dev-server

            自动刷新的两种模式

                1. ifarme  ->  localhost:8080/webpack-dev-server/index.html

                2. inline  ->  webpack-dev-server --inline ( 命令行输入 )

4. 资源压缩

    webpack -p

    webpack --config XXX.js //使用另一份配置文件（比如webpack.config2.js）来打包

    webpack --watch //监听变动并自动打包

    webpack -p //压缩混淆脚本

    webpack -d //生成map映射文件，告知哪些模块被最终打包到哪里


5. loaders

    npm install css-loader style-loader url-loader babel-loader  --save-dev

    css-loader：CSS文件处理

    style-loader：为了在html中以style的方式嵌入css

    url-loader：图片资源处理

    babel-loader：处理包含ES6、JSX等文件

    需要添加module.loaders ，这是最关键的一个配置。它告知 webpack 对每一种文件都需要使用什么加载器来处理。

    loaders是一个数组，里面元素都是一个对象，每个对象都有相应的参数

        test：必须，一个匹配loaders所处理的文件的拓展名的正则表达式

        loader：必须，相应loader的名称

        include/exclude：可选，手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）

        query：可选，为loaders提供额外的设置选项

            module.exports = {

                // 新增新的 module 属性

                module: {

                    loaders: [

                      { test: /\.css$/, loader: "style!css" },

                      { test: /\.(jpg|png)$/, loader: "url?limit=8192" }

                      // 不同的处理器通过 ! 分隔并串联起来。

                      // 处理图片时，limit=8192的意思是不大于8KB（1024×8）的图片才会被打包处理为base64的图片

                      // 省略掉 -loader ，也就是原本应该写成 style-loader!css-loader，可以写成style!css

                    ]

                  }
            }

    public文件夹里新建一个style.css文件

    载入 css

        require("!style-loader!css-loader!./style.css")


6. 插件

    使用内置插件，需要先加载 webpack

        var webpack = require('webpack')

    在 plugins 添加

        plugins : [

            new webpack.插件名('')

        ]

7. 调试

    Sourece Maps

    在webpack的配置文件中配置source maps，需要配置devtool，它有以下7种不同的配置选项：

        eval：每个module会封装到 eval 里包裹起来执行，并且会在末尾追加注释 //@ sourceURL.

        source-map：在一个单独的文件中产生一个完整且功能完全的SourceMap文件。

        hidden-source-map：和 source-map 一样，但不会在 bundle 末尾追加注释。

        inline-source-map：生成一个 DataUrl 形式的 SourceMap 文件.

        cheap-source-map：生成一个没有列信息（即同行显示）的SourceMaps文件，不包含loader的 sourcemap（比如 babel 的 sourcemap）

        eval-source-map：使每个module会通过eval()来执行，并且生成一个DataUrl形式的SourceMap。

        cheap-module-source-map：生成一个没有列信息（即同行显示）的SourceMaps文件，同时 loader 的 sourcemap 也被简化为只包含对应行的。


        module.exports = {

          devtool: 'eval-source-map',  // 配置生成Source Maps

          entry: __dirname + "entry.js",

          output: {

            path: __dirname + "/dist",

            filename: "bundle.js"

          }

        }


9. 开启服务

    npm install webpack-dev-server --save-dev

    webpack -dev-server

    可以通过127.0.0.1:8080/public 或者localhost:8080/public 访问public文件夹中的index.html页面了！

    webpack.config.js

        devServer: {

          contentBase: "./public",

          colors: true,

          historyApiFallback: true,

          inline: true,

          port: '8080'

        }

    参数说明：

        contentBase：默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）

        port：设置默认监听端口，如果省略，默认为”8080“

        inline： 设置为true，当源文件改变时会自动刷新页面

        colors： 设置为true，使终端输出的文件为彩色的

        historyApiFallback： 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html