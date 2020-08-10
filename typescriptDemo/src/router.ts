import {Router, Request, Response} from 'express';
import path from "path";
import DealAnalyzer from "./dealAnalyzer";
import Crowller from "./crowller";
import fs from 'fs';

const router = Router();

//解决问题1.express 库的类型定义文件， .d.ts文件类型描述不准确
interface RequestWithBody extends Request {
    body: {
        password: string | undefined,
        // [key: string]: string | undefined,
    }
}

router.get('/', (req: Request, res: Response) => {
    const isLogin = req.session ? req.session.login : false;
    if(isLogin){
        res.send(
            `<div>
                        <a href="/loginOut">登出</a>
                        <a href="/getData">获取数据</a>
                        <a href="/showData">展示数据</a>
                    </div>`
        )
    }else{
        res.send(
            `<html>
    <form method="post" action="/login">
    <input type="password" name="password"><button>登录</button>
</form>
</body>
</html>`);
    }
});

router.post('/login', (req: Request, res: Response) => {
    const {password} = req.body;
    const isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.redirect('/')
        res.send('已经登录')

    } else {
        if (password === '123' && req.session) {
            req.session.login = true;
            res.redirect('/')
            res.send('登录成功')

        } else {
            res.send('密码错误')
        }
    }
});

router.get('/loginOut',(req:Request,res:Response)=>{
    const isLogin = req.session ? req.session.login : false;
    if(isLogin && req.session){
        req.session.login = false;
        res.send('登出成功')
    }
    res.redirect('/')
});

router.get('/getData', (req: RequestWithBody, res: Response) => {
    console.log(req, res, '参数', req.body)
    const isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        const url = 'http://192.168.4.199:8080';
        const filePath = path.resolve(__dirname, '../data/course.json');
        const analyzer = DealAnalyzer.getInstance();
        new Crowller(url, filePath, analyzer);
        res.send('getData router success');
    } else {
        res.send('请登录后获取数据')
    }
});

router.get('/showData',(req:Request,res:Response)=>{
    const isLogin = req.session ? req.session.login : false;
    if(isLogin){
        const position = path.resolve(__dirname,'../data/course.json');
        const result = fs.readFileSync(position,'utf-8');
        res.json(JSON.parse(result))
    }else{
        res.send('请登录后查看')
    }
});

export default router;