import 'reflect-metadata'
import {Router, Request, Response, NextFunction} from 'express';
import {controller, get, post} from "./decorator";
import {getResponseData} from "../utils/util";

interface BodyRequest extends Request {
    body: {
        // password: string | undefined,
        [key: string]: string | undefined,
    }
}


@controller
class LoginController {
    @get('/api/isLogin')
    isLogin(req: BodyRequest, res: Response) {
        console.log('页面访问到了吗')
        const isLogin = !!(req.session ? req.session.login : false);
        return res.json(getResponseData(isLogin));
    }

    @get('/api/loginOut')
    loginOut(req: BodyRequest, res: Response) {
        const isLogin = req.session ? req.session.login : false;
        if (isLogin && req.session) {
            req.session.login = false;
        }
        res.json(getResponseData(true, '登出成功'));
    }

    @get('/')
    home(req: BodyRequest, res: Response) {
        const isLogin = req.session ? req.session.login : false;
        if (isLogin) {
            res.send(
                `<div>
                        <a href="/api/loginOut">登出</a>
                        <a href="/api/getData">获取数据</a>
                        <a href="/api/showData">展示数据</a>
                    </div>`
            )
        } else {
            res.send(
                `<html>
    <form method="post" action="/api/login">
    <input type="password" name="password"><button>登录1</button>
</form>
</body>
</html>`);
        }
    }

    @post('/api/login')
    login(req: BodyRequest, res: Response) {
        const {password} = req.body;
        console.log(password, '传递的密码')
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
    }
}