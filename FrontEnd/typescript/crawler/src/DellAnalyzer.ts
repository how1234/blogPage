import fs from "fs";
import cheerio from "cheerio";
import { Analyzer } from './crawler' 

interface CourseInfo {
  title: string;
  counts: number;
}

interface CourseRes {
  time: number;
  data: CourseInfo[];
}
interface JSONContent {
  [propName: number]: CourseInfo[];
}

export default class DellAnalyzer implements Analyzer {

  private static instance : DellAnalyzer

  public static getInstance(){
    if(!DellAnalyzer.instance){
      DellAnalyzer.instance = new DellAnalyzer()
    }
    return DellAnalyzer.instance
  }
  private getCourseInfo(rawhtml: string): CourseRes {
    const courseInfos: CourseInfo[] = [];
    const $ = cheerio.load(rawhtml);
    const courseItems = $(".course-item");

    courseItems.map((index, el) => {
      const descriptions = $(el).find(".course-desc");
      const title = descriptions.eq(0).text();

      const counts = parseInt(
        descriptions
          .eq(1)
          .text()
          .split("：")[1]
      );

      courseInfos.push({ title, counts });
    });
    const res = {
      time: new Date().getTime(),
      data: courseInfos
    };
    return res;
  }



  private generateJsonContent(courseResult: CourseRes, filePath: string) {
    let fileContent: JSONContent = {};

    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }

    fileContent[courseResult.time] = courseResult.data;
    return fileContent;
  }
  public analyze(html: string, filePath: string) : string{
    const courseRes = this.getCourseInfo(html);

    const fileContent = this.generateJsonContent(courseRes, filePath);

    return JSON.stringify(fileContent)
  }

  private constructor(){}
}
