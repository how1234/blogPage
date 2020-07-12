"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrawlerController = void 0;
var crawler_1 = __importDefault(require("../utils/crawler"));
var analyzer_1 = __importDefault(require("../utils/analyzer"));
var decorator_1 = require("../decorator/");
var util_1 = require("../utils/util");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var checkLogin = function (req, res, next) {
    var isLogin = !!(req.session ? req.session.login : undefined);
    if (isLogin) {
        next();
    }
    else {
        res.json(util_1.getResponseData(null, '请先登录'));
    }
};
var CrawlerController = /** @class */ (function () {
    function CrawlerController() {
    }
    CrawlerController.prototype.getData = function (req, res) {
        var secret = "x3b174jsx";
        var url = "http://www.dell-lee.com/typescript/demo.html";
        var analyzer = analyzer_1.default.getInstance();
        var crawler = new crawler_1.default(analyzer, url, secret);
        res.send("数据获取成功");
    };
    CrawlerController.prototype.showData = function (req, res) {
        try {
            var directoryPath = path_1.default.resolve(__dirname, "../../course.json");
            console.log(directoryPath);
            var result = fs_1.default.readFileSync(directoryPath, "utf-8");
            res.json(util_1.getResponseData(JSON.parse(result)));
        }
        catch (e) {
            res.send("尚未有数据");
        }
    };
    __decorate([
        decorator_1.get('/getData'),
        decorator_1.use(checkLogin),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CrawlerController.prototype, "getData", null);
    __decorate([
        decorator_1.get('/showData'),
        decorator_1.use(checkLogin),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CrawlerController.prototype, "showData", null);
    CrawlerController = __decorate([
        decorator_1.controller('/')
    ], CrawlerController);
    return CrawlerController;
}());
exports.CrawlerController = CrawlerController;
