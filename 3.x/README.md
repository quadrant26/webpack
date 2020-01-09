# Webpack 3.6.0

### 对css的配置
    
    ```
	npm i -D style-loader css-loader
    
    javascript
        module:{
            rules: [
                {
                    test: /\.css$/,
                    // css-loader 只负责将 css 文件进行加载
                    // style-loader 负责将样式添加到 DOM 中
                    // 使用多个 loader 时，是从右向左
                    use: ["style-loader", 'css-loader']
                }
            ]
        }
    ```
    
### 对 less 配置
    
    ```
        npm i -D less less-loader
    
        {
            test: /\.less$/,
            user: [ {
                loader: "style-loader"
            },{
                loader: "css-loader"
            },{
                loader: "less-loader"
            }]
        }
    ```
    
### 对 image 配置
     
- **大于8kb（默认 limit 8192） 使用 fileloader 打包后，文件的路径是根目录， 不是打包后的目录，所以需要在 output 属性中，设置 publicPath=path**
---
  
    ```
        npm install --save-dev url-loader
    
        output:{
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: 'dist/'
        },
        module:{
            rules: [
                
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
                                // 设置图片的输出地址和命名方式
                                name: "img/[name].[ext]"
                            }
                        }
                    ]
                }
            ]
        }
    ```
	
### ES6 语法处理

    ```
        npm install babel-loader babel-core babel-preset-env
    ```

### vue 开发

    ```
        npm install vue@2.5.11 -S
        // webpack.config.js
        // 出现报错 error 的 解决方法
        // You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build
        module:{
            resolve: {
                // 别名
                // git commit -m ''
                // git c ''
                alias: {
                    'vue$': 'vue/dist/vue.esm.js'
                }
            }
        }
    ````

### vue 模班开发

    ```
        npm install -D vue-loader@13.0.0 vue-template-compiler@2.5.21

        // loader
        {
            test: /\.vue$/,
            use:['vue-loader']
        }

        // 不用填写后缀名
        resolve: {
            extensions: ['.js', '.css', '.vue'],
        }
    ```

### plugin

>- **添加版权信息**
>- ***BannerPlugin()***

    ```
        // 在打包的文件 第一行添加的信息
        plugins: [
            new webpack.BannerPlugin('最终版权信息所有')
        ]
    ```

>+ **将index.html 打包到 dist 目录**
>- ***webpack-plugin-html***

    ```
        npm install -D html-webpack-plugin

        // 出现的两个问题
        // index.html 没有 <div id="app"></div>
        // 解决 -> 指定模版 template: 'index.html'
        // 解决 index 页面 js 使用的路径问题
        // 把模版 index 页面中的 script 标签删除 webpack 会自动把打包后的bundle.js 引入

        // 导入插件     
        const HtmlWebpackPlugin = require('html-webpack-plugin')

        // use
        plugins: [
            new HtmlWebpackPlugin({
                // 指定模版
                template: 'index.html'
            }),
        ]   
    ```

>+ **js压缩**
>- ***uglifyjs-webpack-plugin@1.1.1***

    ```
        npm install -D uglifyjs-webpack-plugin@1.1.1

        // 导入
        const uglifyJsPlugin = require('uglifyjs-webpack-plugin')

        // use
        plugins: [
            new uglifyJsPlugin(),
        ] 
    ```

### 开启服务

    CLI2.x -> webpack-dev-server@2.9.3

>- **开启服务**
>+ ***webpack-dev-server@2.9.3***
>+ *开启服务 webpack-dev-server (需要在全局安装 webpack-dev-server 或 在安装的相对的路径去运行 )*
>- 自动打开浏览器： 在package.json 中的 scripts 设置  `"dev": "webpack-dev-server --open"`

    ```
        npm install -D webpack-dev-server@2.9.3
        
        // use
        devServer: {
            contentBase: '/dist',
            port: 8989,
            inline: true
        }
    ```

### 配置分离

    ```
        npm install -D webpack-merge

        // prod.config.js
        const webpackMerge = require('webpack-merge')
        const baseConfig = require('./base.config')

        module.exports = webpackMerge(baseConfig, {
            plugins: [
                new uglifyJsPlugin(),
            ]
        });

        // dev.config.js
        const webpackMerge = require('webpack-merge')
        const baseConfig = require('./base.config')

        module.exports = webpackMerge(baseConfig, {
            devServer: {
                contentBase: '/dist',
                port: 8989,
                inline: true
            }
        })

        // 指定配置文件的路径 --config
        // package.json 设置
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "build": "webpack --config ./build/prod.config.js",
            "dev": "webpack-dev-server --open --config ./build/dev.config.js"
        },
    ```