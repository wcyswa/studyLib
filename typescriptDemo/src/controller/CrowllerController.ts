import 'reflect-metadata'
import {Request, NextFunction, Response} from "express";
import path from "path";
import fs from 'fs';
import {controller, get, use} from "./decorator";

import {getResponseData} from "../utils/util";
import DealAnalyzer from "../utils/dealAnalyzer";
import Crowller from "../utils/crowller";

interface BodyRequest extends Request {
    body: {
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

@controller
class CrowllerController {

    @get('/getData')
    @use(checkLogin)
    getData(req: BodyRequest, res: Response) {
        const url = 'http://192.168.4.199:8080';
        const filePath = path.resolve(__dirname, '../../data/course.json');
        const analyzer = DealAnalyzer.getInstance();
        new Crowller(url, filePath, analyzer);
        res.json(getResponseData(false, ''))
    }

    @get('/showData')
    @use(checkLogin)
    showData(req:BodyRequest,res:Response){
        try {
            const position = path.resolve(__dirname, '../../data/course.json');
            const result = fs.readFileSync(position, 'utf-8');
            res.json(getResponseData(JSON.parse(result)))
        } catch (e) {
            res.json(getResponseData(false, '数据不存在'))
        }
    }
}