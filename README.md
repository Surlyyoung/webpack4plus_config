# dd

> A LEARNING FILE

## summary
<!-- 2018-7-20 -->
``` bash
1. webpack-cli必须要全局安装，否则不能使用webpack指令； 
2. webpack也必须要全局安装，否则也不能使用webpack指令。 (实际上可以运行 加上node_modules/.bin/webpack)
3. webpack4.x中webpack.config.js这样的配置文件不是必须的。 
4. 默认入口文件是./src/index.js，默认输出文件./dist/main.js。
```

### Build Setup

``` bash
1. 创建工程目录； 
2. 初始化工程目录：npm init。 
3. 全局安装webpack-cli。 
4. 全局安装webpack。 
5. webpack –mode development/production进行打包，可在package.json中配置dev和build的脚本，便只需运行npm run dev/build，作用相同。 
6. 在webpack –mode development/production可串联设置其他参数。
```
