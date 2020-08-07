//test方法

//用于测试字符串参数中是否存在匹配正则表达式模式的字符串
//如果存在返回true，否则返回false

let reg1 = /\w/
let reg2 = /\w/gim


//加上global flag的时候，lastIndex 作用生效
console.log(reg1.test('a')) //true
console.log(reg1.test('$')) //false


console.log(reg2.lastIndex) // 0
console.log(reg2.test('ab')) //false
console.log(reg2.lastIndex) // 1
console.log(reg2.test('ab')) //false
console.log(reg2.lastIndex) // 2
console.log(reg2.test('ab')) //false
console.log(reg2.lastIndex) //0



