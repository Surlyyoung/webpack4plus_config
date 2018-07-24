/*
*  此处导入hi.js 导入的是一个函数 函数返回一个节点
*/
const creatDiv = require('./hi.js'); //function
document.querySelector("#root").appendChild(creatDiv());