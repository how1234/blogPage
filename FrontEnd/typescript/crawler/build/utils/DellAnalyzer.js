"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var cheerio_1 = __importDefault(require("cheerio"));
var DellAnalyzer = /** @class */ (function () {
    function DellAnalyzer() {
    }
    DellAnalyzer.getInstance = function () {
        if (!DellAnalyzer.instance) {
            DellAnalyzer.instance = new DellAnalyzer();
        }
        return DellAnalyzer.instance;
    };
    DellAnalyzer.prototype.getCourseInfo = function (rawhtml) {
        var courseInfos = [];
        var $ = cheerio_1.default.load(rawhtml);
        var courseItems = $(".course-item");
        courseItems.map(function (index, el) {
            var descriptions = $(el).find(".course-desc");
            var title = descriptions.eq(0).text();
            var counts = parseInt(descriptions
                .eq(1)
                .text()
                .split("：")[1]);
            courseInfos.push({ title: title, counts: counts });
        });
        var res = {
            time: new Date().getTime(),
            data: courseInfos
        };
        return res;
    };
    DellAnalyzer.prototype.generateJsonContent = function (courseResult, filePath) {
        var fileContent = {};
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, "utf-8"));
        }
        fileContent[courseResult.time] = courseResult.data;
        return fileContent;
    };
    DellAnalyzer.prototype.analyze = function (html, filePath) {
        var courseRes = this.getCourseInfo(html);
        var fileContent = this.generateJsonContent(courseRes, filePath);
        return JSON.stringify(fileContent);
    };
    return DellAnalyzer;
}());
exports.default = DellAnalyzer;
