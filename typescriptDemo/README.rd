ts优点
1.错误提示
2.代码整洁

爬虫工程
npm init -y  //生成package.json文件
tsc --init //生成tsconfig.json 文件,生成不了就全局安装一个typescript

定义全局的变量或者方法
declare var $:(param:()=>void)=>void;
declare function