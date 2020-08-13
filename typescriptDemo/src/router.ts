/*
* s
* */

/*
import {Router, Request, Response, NextFunction} from 'express';
import path from "path";
import DealAnalyzer from "./utils/dealAnalyzer";
import Crowller from "./utils/crowller";
import fs from 'fs';
import {getResponseData} from "./utils/util";

const router = Router();

//解决问题1.express 库的类型定义文件， .d.ts文件类型描述不准确
interface BodyRequest extends Request {
    body: {
        // password: string | undefined,
        [key: string]: string | undefined,
    }
}

const checkLogin = (req: Request, res: Response, next: NextFunction) => {
    const isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        next();
    } else {
        res.json(getResponseData(null, '请先登录'))
    }
};

router.get('/', (req: BodyRequest, res: Response) => {
    const isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.send(
            `<div>
                        <a href="/loginOut">登出</a>
                        <a href="/getData">获取数据</a>
                        <a href="/showData">展示数据</a>
                    </div>`
        )
    } else {
        res.send(
            `<html>
    <form method="post" action="/login">
    <input type="password" name="password"><button>登录</button>
</form>
</body>
</html>`);
    }
});

router.post('/login', (req: BodyRequest, res: Response) => {
    const {password} = req.body;
    const isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.redirect('/')
        res.json(getResponseData(false, '已经登录过了'))
    } else {
        if (password === '123' && req.session) {
            req.session.login = true;
            res.json(getResponseData(true))

        } else {
            res.json(getResponseData(false, '密码错误啦'))
        }
    }
});

router.get('/loginOut', checkLogin, (req: BodyRequest, res: Response) => {
    const isLogin = req.session ? req.session.login : false;
    if (isLogin && req.session) {
        req.session.login = false;
    }
    res.json(getResponseData(false, '登出成功'));
});

router.get('/getData', checkLogin, (req: BodyRequest, res: Response) => {
    const url = 'http://192.168.4.199:8080';
    const filePath = path.resolve(__dirname, '../data/course.json');
    const analyzer = DealAnalyzer.getInstance();
    new Crowller(url, filePath, analyzer);
    res.json(getResponseData(true))
});

router.get('/showData', checkLogin, (req: BodyRequest, res: Response) => {
    try {
        const position = path.resolve(__dirname, '../data/course.json');
        const result = fs.readFileSync(position, 'utf-8');
        res.json(getResponseData(JSON.parse(result)))
    } catch (e) {
        res.json(getResponseData(false, '数据不存在'))
    }

});

export default router;*/
