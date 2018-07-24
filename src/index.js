/*
*  此处导入hi.js 导入的是一个函数 函数返回一个节点
*/
const creatDiv = require('./../app/hi.js'); //function
document.querySelector("#root").appendChild(creatDiv());


/*================默认入口为 根目录src/index.js  需要手动创建=================*/