//两种方式可以对一个正则表达式对象进行实例化


//字面量

let reg = /\bis\b/
//g的意思就是全文匹配，如果不添加g的话，正则表达式会到匹配到第一个对象为止。
let reg1 = /\bis\b/g
let str = 'He is a boy. This is a dog. Where is she'

let replacedStr = str.replace(reg,'IS')
let replacedStr1 = str.replace(reg1,'IS')

console.log('0:' + replacedStr) //He IS a boy. This is a dog. Where is she
console.log('1:' + replacedStr1) //He IS a boy. This IS a dog. Where IS she


//构造函数
//这里面需要注意的是需要多添加转义符，因为'\'在字符串里面就是一个特殊符号
let reg3 = new RegExp('\\bis\\b')
let reg4 = new RegExp('\\bis\\b','g')

let replacedStr3 = str.replace(reg3,'IS')
let replacedStr4 = str.replace(reg4,'IS')

console.log('2:' + replacedStr3) //He IS a boy. This is a dog. Where is she
console.log('3:' + replacedStr4) //He IS a boy. This IS a dog. Where IS she

//i标识符，表示忽视大小写

let reg5 = new RegExp('\\bis\\b','gi')
let reg6 =/\bis\b/gi


let str2 = 'He IS a boy. This IS a dog. Where IS she'

let replacedStr5 = str2.replace(reg5,'0') 
let replacedStr6 = str2.replace(reg5,'0') 

console.log('4:' + replacedStr5) //He 0 a boy. This 0 a dog. Where 0 she
console.log('5:' + replacedStr6)  //He 0 a boy. This 0 a dog. Where 0 she