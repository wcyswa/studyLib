ts优点
1.错误提示
2.代码整洁

爬虫工程
npm init -y  //生成package.json文件
tsc --init //生成tsconfig.json 文件,生成不了就全局安装一个typescript,typescript 编译配置文件

tsc demo.ts //编译ts文件为js

tsc 编译项目下的文件，可以通过配置tsconfig.json文件，去编译需要编译的文件范围，可以查看ts中文文档

定义全局的变量或者方法
declare var $:(param:()=>void)=>void;
declare function


启动前端的服务
http-server