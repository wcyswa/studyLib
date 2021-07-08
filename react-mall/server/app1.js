/**
 * create by wangchunyan1 on 2021/6/8
 */

const React = require('react');
const http = require('http');
const ejs = require('ejs')
const {renderToString}  = require('react-dom/server');

http.createServer((req,res)=>{
    if (req.url === '/') { // 直接通过模板渲染数据
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        // 渲染文件 index.ejs
        ejs.renderFile('../views/index.ejs', {
                title: 'react ssr',
                data: '首页'},
            (err, data) => {
                if (err ) {
                    console.log(err);
                } else {
                    res.end(data);
                }
            })
    }

}).listen(8080,()=>{
    console.log('服务启动了页面直接访问: http://localhost:8080/',)
});
