import superagent from "superagent";
import cheerio from "cheerio";
import fs from 'fs'
import path from 'path'
import DellAnalyzer from './DellAnalyzer'

export interface Analyzer{
  analyze:(html:string,filePath:string) => string
}

class Crawler {
 

  private filePath = path.resolve(__dirname,'../course.json')

  constructor(private analyer:Analyzer,private url:string,private secret:string) {
    this.url = `${this.url}?secret=${this.secret}`;
    this.initSpiderProcess();
  }

  private async getRawHTML() {
    const result = await superagent.get(this.url);
    return result.text;
  }
 
  private writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }
  private async initSpiderProcess() {
    const rawHTML = await this.getRawHTML();
    const fileContent = this.analyer.analyze(rawHTML,this.filePath)
    
    this.writeFile(fileContent)
    
    
  }
}

let secret = "x3b174jsx";

let url = `http://www.dell-lee.com/typescript/demo.html`;

const analyzer =  DellAnalyzer.getInstance();
let crawler = new Crawler(analyzer,url,secret);

let a = 3

