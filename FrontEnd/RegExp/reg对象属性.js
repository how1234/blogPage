let reg1 = /\w/
let reg2 = /\w/gim


//global，ignoreCase，multiLine 三个flag

console.log(reg1.global) //false
console.log(reg1.ignoreCase) //false
console.log(reg1.multiline) //multiline


console.log(reg2.global) //true
console.log(reg2.ignoreCase) //true
console.log(reg2.multiline) //true


//这三个对象属性都是只读的
reg1.global = true 
console.log(reg1.global) //false

//正则表达式的文本内容
console.log(reg1.source) //\w


//lastIndex是当前表达式匹配内容的最后一个字符的下一个index
console.log(reg1.lastIndex) //false