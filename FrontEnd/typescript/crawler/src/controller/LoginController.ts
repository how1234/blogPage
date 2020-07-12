import { Request, Response, NextFunction } from "express";
import "reflect-metadata";
import { getResponseData } from "../utils/util";


import {controller,use,get,post} from '../decorator/'
interface BodyRequest extends Request {
  body: {
    //范匹配
    [key: string]: string | undefined;
  };
}



@controller('/')
export class LoginController {
  static isLogin(req:BodyRequest) : boolean{
    return !!(req.session ? req.session.login : undefined)
  }
  @post("/login")
  login(req: BodyRequest, res: Response) {
    const { password } = req.body;

    const isLogin = LoginController.isLogin(req)

    if (isLogin) {
      res.send("用户已登陆");
    } else {
      if (password === "123" && req.session) {
        //做一个类型保护
        req.session.login = true;

        res.json(getResponseData(true));
      } else {
        res.json(getResponseData(false, "登陆失败"));
      }
    }
  }

  @get("/logout")
  logout(req: BodyRequest, res: Response) {
    const isLogin = LoginController.isLogin(req)

    if (isLogin && req.session) {
      req.session.login = false;
    }
    res.json(getResponseData(true));
  }
  
  @get("/")
  home(req: BodyRequest, res: Response) {
    const isLogin = LoginController.isLogin(req)

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
  }

}
