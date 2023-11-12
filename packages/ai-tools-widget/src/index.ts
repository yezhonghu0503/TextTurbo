import { MyElement } from "./views/toolbar";

// 创建 MyElement 组件的实例
const myElement = new MyElement();

// 获取 body 元素
const body = document.body;

// 将 MyElement 组件挂载到 body 上
body.appendChild(myElement);
