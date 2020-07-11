"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var crawler_1 = __importDefault(require("./crawler"));
var DellAnalyzer_1 = __importDefault(require("./DellAnalyzer"));
var router = express_1.Router();
router.get("/", function (req, res) {
    res.send("\n    <html>\n      <body>\n        <form method=\"post\" action=\"/getData\">\n          <label for=\"password\">\u5BC6\u7801</label>\n          <input type=\"password\" name=\"password\">\n          <button> \u63D0\u4EA4</button>\n        </form>\n      </body>    \n    </html>\n  \n  ");
});
router.post("/getData", function (req, res) {
    var password = req.body.password;
    if (password === '123') {
        var secret = "x3b174jsx";
        var url = "http://www.dell-lee.com/typescript/demo.html";
        var analyzer = DellAnalyzer_1.default.getInstance();
        var crawler = new crawler_1.default(analyzer, url, secret);
        res.send("bye world");
    }
    else {
        res.send(req.teacherName + "password error");
    }
});
exports.default = router;
