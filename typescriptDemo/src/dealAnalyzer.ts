import cheerio from "cheerio";
import fs from "fs";
import {Analyzer} from "./crowller";

interface Course {
    title: string,
    count: number
}

interface CourseInfo {
    time: number,
    data: Course[]
}

interface Content {
    [propName: number]: Course[],
}

export default class DealAnalyzer implements Analyzer{

    private static instance: DealAnalyzer;

    static getInstance(){
        if(!DealAnalyzer.instance){
            DealAnalyzer.instance = new DealAnalyzer();
        }
        return DealAnalyzer.instance;
    }

    private getCourseInfo(html: string) {
        const $ = cheerio.load(html);
        const courseItems = $(".entry-item");
        const courseInfo: Course[] = [];
        courseItems.map((index, item) => {
            const desc = $(item).find('.course-desc');
            const title = desc.eq(0).text();
            const count = parseInt(desc.eq(1).text().split("：")[1], 10);
            courseInfo.push({count, title});
        });
        return {
            time: Date.now(),
            data: courseInfo
        }
    }

    private genderJsonFile(courseInfo: CourseInfo, filePath: string) {
        let fileContent: Content = {};
        console.log(fs.existsSync(filePath))
        if (fs.existsSync(filePath)) {
            fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        }

        fileContent[courseInfo.time] = courseInfo.data;
        return JSON.stringify(fileContent)
    }

    public analyzer(html: string, filePath: string) {
        const courseInfo = this.getCourseInfo(html);
        return this.genderJsonFile(courseInfo, filePath)
    }

    private constructor() {
    }
}