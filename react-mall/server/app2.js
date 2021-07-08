/**
 * create by wangchunyan1 on 2021/6/8
 */

const React = require('react');
const http = require('http');
const ejs = require('ejs')
const {renderToString}  = require('react-dom/server');

class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>{this.props.data.title}</div>
    }
}


http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        const data = {title:'1234'}

        const html = renderToString(<Index data={data}/>);
        res.end(html);
    }
}).listen(8080,()=>{
    console.log('服务启动了,将服务端的组件发送到请求地址上 http://localhost:8080/')
});
