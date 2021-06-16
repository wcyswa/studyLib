参考文章
https://juejin.cn/post/6844903943902855176

server/app2.js 运行的时候因为node 中不能直接运行es6+代码，所以需要编译
npx babel script.js --out-file script-compiled.js --presets=@babel/preset-react
script.js 为源文件, script-compiled.js 编译后的

node script-compiled.js 启动服务
