import Crawler from "../utils/crawler";
import Analyzer from "../utils/analyzer";
import {controller,use,get,post} from '../decorator/'
import { getResponseData } from "../utils/util";
import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
interface BodyRequest extends Request {
  body: {
    //范匹配
    [key: string]: string | undefined;
  };
}


const checkLogin = (
  req: BodyRequest,
  res: Response,
  next: NextFunction
):void => {
  const isLogin = !!(req.session ? req.session.login : undefined);
  if (isLogin) {
    next();
  } else {
    res.json(getResponseData(null,'请先登录'))
  }
};
@controller('/')
export class CrawlerController {
  
 
  @get('/getData')
  @use(checkLogin)
  getData(req:BodyRequest,res:Response){
    let secret = "x3b174jsx";

    let url = `http://www.dell-lee.com/typescript/demo.html`;
    const analyzer = Analyzer.getInstance();
    let crawler = new Crawler(analyzer, url, secret);
    res.send("数据获取成功");
  }
 
  @get('/showData')
  @use(checkLogin)
  showData(req:BodyRequest,res:Response){
    try {
      const directoryPath = path.resolve(__dirname, "../../course.json");
      console.log(directoryPath);
      const result = fs.readFileSync(directoryPath, "utf-8");
      res.json(getResponseData(JSON.parse(result)));
    } catch (e) {
      res.send("尚未有数据");
    }
  }
}
