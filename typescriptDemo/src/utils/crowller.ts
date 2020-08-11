//  .ts -> .d.ts -> .js  转换的过程中需要有.d.ts文件来做中间的翻译

import fs from 'fs';
import path from 'path';
import superagent from "superagent";
import DealAnalyzer from './dealAnalyzer'
import LeeAnalyzer from './leeAnalyzer';

export interface Analyzer {
    analyzer:(filePath:string,html:string)=> string;
}

class Crowller {

    private async getRowHtml(url:string) {
        let {text} = await superagent.get(url);
        return text;
    }

    private writeFile(filePath:string,fileContent:string){
        fs.writeFileSync(filePath,fileContent);
    }

    private async init(url:string,filePath:string,analyzer:Analyzer) {
        const html = await this.getRowHtml(url);
        const fileContent = analyzer.analyzer(html,filePath);
        this.writeFile(filePath,fileContent);
    }

    constructor(private url:string,private filePath:string,private analyzer:Analyzer) {
        this.init(url,filePath,analyzer);
    }
}

const url = 'http://192.168.4.199:8080';
const filePath = path.resolve(__dirname,'../data/course.json');



// 组合设计模式
// const analyzer1 = new DealAnalyzer();
// const analyzer2 = new LeeAnalyzer();

// 单例模式
// const analyzer = DealAnalyzer.getInstance();
// new Crowller(url,filePath,analyzer);

export default Crowller;