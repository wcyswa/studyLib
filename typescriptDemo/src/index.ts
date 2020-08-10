import express, {NextFunction, Request, Response} from 'express';
import router from "./router";
import bodyParser from 'body-parser';
import cookieSession from "cookie-session";

// 问题1. express 库的类型定义文件， .d.ts文件类型描述不准确
// 问题2. 当我使用中间件的时候，对req 或者res 做了修改之后，实际上类型并不能改变
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
/*
* 自定义中间件
* */
app.use((req: Request, res: Response, next: NextFunction) => {
    req.teacherName = 'dell';
    next();
});

app.use(cookieSession({
    name:'session',
    keys:['login'],
    maxAge:24*60*60*1000
}));
app.use(router);


app.listen(7001, () => {
    console.log('server is running')
});