import {Router, Request, Response} from 'express';
import path from "path";
import DealAnalyzer from "./dealAnalyzer";
import Crowller from "./crowller";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('hello');
});

router.get('/getData', (req: Request, res: Response) => {
    const url = 'http://192.168.4.199:8080';
    const filePath = path.resolve(__dirname,'../data/course.json');
    const analyzer = DealAnalyzer.getInstance();
    new Crowller(url,filePath,analyzer);
    res.send('getData router');
});

export default router;