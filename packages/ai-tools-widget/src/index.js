"use strict";
exports.__esModule = true;
var toolbar_1 = require("./views/toolbar");
// 创建 MyElement 组件的实例
var myElement = new toolbar_1.MyElement();
// 获取 body 元素
var body = document.body;
// 将 MyElement 组件挂载到 body 上
body.appendChild(myElement);
