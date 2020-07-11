"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var crawler_1 = __importDefault(require("./utils/crawler"));
var analyzer_1 = __importDefault(require("./utils/analyzer"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var util_1 = require("./utils/util");
var router = express_1.Router();
//自定义一个中间件
var checkLogin = function (req, res, next) {
    var isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        next();
    }
    else {
        res.json(util_1.getResponseData(null, '请先登录'));
    }
};
router.get("/", function (req, res) {
    var isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        res.send("\n    <html>\n      <body>\n        <a href=\"/getData\">\u722C\u53D6\u6570\u636E</a>\n        <a href=\"/showData\">\u6570\u636E\u5C55\u793A</a>\n        <a href=\"/logout\">\u767B\u51FA</a>\n      \n      </body>\n    \n    </html>");
    }
    else {
        res.send("\n      <html>\n        <body>\n          <form method=\"post\" action=\"/login\">\n            <label for=\"password\">\u5BC6\u7801</label>\n            <input type=\"password\" name=\"password\">\n            <button>\u767B\u9646</button>\n          </form>\n        </body>    \n      </html>\n  ");
    }
});
router.get("/logout", function (req, res) {
    var isLogin = req.session ? req.session.login : undefined;
    if (isLogin && req.session) {
        req.session.login = false;
    }
    res.json(util_1.getResponseData(true));
});
router.post("/login", function (req, res) {
    var password = req.body.password;
    var isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        res.send("用户已登陆");
    }
    else {
        if (password === "123" && req.session) {
            //做一个类型保护
            req.session.login = true;
            res.json(util_1.getResponseData(true));
        }
        else {
            res.json(util_1.getResponseData(false, "登陆失败"));
        }
    }
});
router.get("/getData", checkLogin, function (req, res) {
    var secret = "x3b174jsx";
    var url = "http://www.dell-lee.com/typescript/demo.html";
    var analyzer = analyzer_1.default.getInstance();
    var crawler = new crawler_1.default(analyzer, url, secret);
    res.send("数据获取成功");
});
router.get("/showData", checkLogin, function (req, res) {
    try {
        var directoryPath = path_1.default.resolve(__dirname, "../course.json");
        console.log(directoryPath);
        var result = fs_1.default.readFileSync(directoryPath, "utf-8");
        res.json(util_1.getResponseData(JSON.parse(result)));
    }
    catch (e) {
        res.send("尚未有数据");
    }
});
exports.default = router;
