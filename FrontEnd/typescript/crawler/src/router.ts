import { Router, Request, Response, NextFunction } from "express";
import Crawler from "./utils/crawler";
import Analyzer from "./utils/analyzer";
import fs from "fs";
import path from "path";
import {getResponseData} from './utils/util'


const router = Router();

interface RequestWithBody extends Request {
  body: {
    //范匹配
    [key: string]: string | undefined;
  };
}
//自定义一个中间件
const checkLogin = (
  req: RequestWithBody,
  res: Response,
  next: NextFunction
) => {
  const isLogin = req.session ? req.session.login : undefined;
  if (isLogin) {
    next();
  } else {
    res.json(getResponseData(null,'请先登录'))
  }
};

router.get("/", (req: Request, res: Response) => {
  const isLogin = req.session ? req.session.login : undefined;

  if (isLogin) {
    res.send(`
    <html>
      <body>
        <a href="/getData">爬取数据</a>
        <a href="/showData">数据展示</a>
        <a href="/logout">登出</a>
      
      </body>
    
    </html>`);
  } else {
    res.send(`
      <html>
        <body>
          <form method="post" action="/login">
            <label for="password">密码</label>
            <input type="password" name="password">
            <button>登陆</button>
          </form>
        </body>    
      </html>
  `);
  }
});

router.get("/logout", (req: Request, res: Response) => {
  const isLogin = req.session ? req.session.login : undefined;

  if (isLogin && req.session) {
    req.session.login = false;
  }
  res.json(getResponseData(true))
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { password } = req.body;

  const isLogin = req.session ? req.session.login : undefined;

  if (isLogin) {
    res.send("用户已登陆");
  } else {
    if (password === "123" && req.session) {
      //做一个类型保护
      req.session.login = true;

      res.json(getResponseData(true))
     
    } else {
      res.json(getResponseData(false,"登陆失败"))
      
    }
  }
});
router.get("/getData", checkLogin, (req: RequestWithBody, res: Response) => {
  let secret = "x3b174jsx";

  let url = `http://www.dell-lee.com/typescript/demo.html`;
  const analyzer = Analyzer.getInstance();
  let crawler = new Crawler(analyzer, url, secret);
  res.send("数据获取成功");
});

router.get("/showData", checkLogin, (req: RequestWithBody, res: Response) => {
  try {
    const directoryPath = path.resolve(__dirname, "../course.json");
    console.log(directoryPath);
    const result = fs.readFileSync(directoryPath, "utf-8");
    res.json(getResponseData(JSON.parse(result)));
  } catch (e) {
    res.send("尚未有数据");
  }
});

export default router;
