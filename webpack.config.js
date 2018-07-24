/*
* webpack 打包配置 文件  module.exports= {}; + require(''); commonjs   >>>    export {}; + import xx form '' es6
* webpack 4+ 不再需要
*/
module.exports = {
	entry:__dirname + 'app/main.js', // 打包入口文件 __dirname 为当前文件的磁盘路径 
	output:{
		path:__dirname + 'public/', // 打包输出文件路径
		filename:'dabao.js'  // 打包输出文件名
	}
};  //             “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
