// 1. 使用 CommonJs 规范
const {add, mul} = require('./js/mathUtil.js')

console.log( add(20, 30));
console.log( mul(20, 30));

// 2. 使用 ES6 的模块化规范
import { name, age, height} from "./js/info";
console.log(name, age, height);

// 3. 依赖 css 文件
require('./css/normal.css');

// 4. 依赖 less 文件
require("./css/special.less");

// 5. 利用vue 进行开发

import Vue from 'vue';

const App = new Vue({
    el: "#app",
    data: {
        message: "Hello, World"
    }
})