import cheerio from "cheerio";
import fs from "fs";
import {Analyzer} from "./crowller";

export default class leeAnalyzer implements Analyzer{

    analyzer(html: string) {
        return html;
    }
}