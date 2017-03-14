var webpack = require("webpack")

module.exports = {
    // devtool : 'eval-sourece-map', // //配置生成Source Maps，选择合适的选项  
    // 在学习阶段以及在小到中性的项目上，eval-source-map是一个很好的选项，不过记得只在开发阶段使用它  
    entry : "./main.js",
    output : {
        //path : __dirname + '/dist',
        filename : 'bundle.js'
    }
    // devserver : {
    //     inline : true,              //实时刷新  
    //     historyApiFallback : true,  //不跳转  
    //     colors : true,              //终端中输出结果为彩色 
    //     contentBase : './public'    //本地服务器所加载的页面所在的目录  
    // }
}