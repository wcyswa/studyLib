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
    @get('/loginOut')
    loginOut(req: BodyRequest, res: Response) {
        const isLogin = req.session ? req.session.login : false;
        if (isLogin && req.session) {
            req.session.login = false;
        }
        res.json(getResponseData(false, '登出成功'));
    }

    @get('/')
    home(req: BodyRequest, res: Response) {
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
    <input type="password" name="password"><button>登录1</button>
</form>
</body>
</html>`);
        }
    }

    @post('/login')
    login(req: BodyRequest, res: Response) {
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
    }
}