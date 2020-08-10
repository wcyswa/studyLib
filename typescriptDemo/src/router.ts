import {Router, Request, Response} from 'express';
import path from "path";
import DealAnalyzer from "./dealAnalyzer";
import Crowller from "./crowller";

const router = Router();

//解决问题1.express 库的类型定义文件， .d.ts文件类型描述不准确
interface RequestWithBody extends Request {
    body: {
        password: string | undefined,
        // [key: string]: string | undefined,
    }
}

router.get('/', (req: Request, res: Response) => {
    res.send(
        `<html>
    <form method="post" action="/getData">
    <input type="password" name="password"><button>提交</button>
</form>
</body>
</html>`);
});

router.post('/getData', (req: RequestWithBody, res: Response) => {
    console.log(req, res, '参数', req.body)
    const {password} = req.body;
    if (password === '123') {
        const url = 'http://192.168.4.199:8080';
        const filePath = path.resolve(__dirname, '../data/course.json');
        const analyzer = DealAnalyzer.getInstance();
        new Crowller(url, filePath, analyzer);
        res.send('getData router success');
    } else {
        res.send('password Error')
    }

});

export default router;