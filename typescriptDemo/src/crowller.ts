//  .ts -> .d.ts -> .js  转换的过程中需要有.d.ts文件来做中间的翻译
import superagent from "superagent";
import cheerio from "cheerio";

class Crowller {
  private secret = "secretkey";
  private url = "http://10.8.0.86:8080/";
  private rowHtml = "";

  async getRowHtml() {
    let result = await superagent.get(this.url);
    this.rowHtml = result.text;
  }

  getCourseInfo(html: string) {
    const $ = cheerio.load(html);
    const courseItems = $(".entry-list");
    courseItems.map((item, index) => {});
    console.log(courseItems);
  }

  constructor() {
    this.getRowHtml();
    this.getCourseInfo(this.rowHtml);
  }
}

const crowller = new Crowller();
