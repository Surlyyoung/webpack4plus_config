/*
* 使用 commonJS 规范 导出   一个函数  module.exports = function(){}
*/
module.exports = function(){
	var node = document.createElement("div");
	node.textContent = "这句话是hi.js引入的";
	return node;
}