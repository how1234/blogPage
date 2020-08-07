// 匹配字符串"byron" 连续出现3次的场景

let str = 'byronbyronbyron'

let str1 = 'byronnnbyronbyron' 

// /byron{3}/实际上是 byronnn，这个量词只作用于n
console.log(str.match(/byron{3}/g)) //null
console.log(str1.match(/byron{3}/g)) //[ 'byronnn' ]


//()可以达到分组的功能，让量词作用于分组

console.log(str.match(/(byron){3}/g)) //[ 'byronbyronbyron' ]


// ｜可以实现分组效果

let str2 = 'ByronCasper'
let str3 = 'ByronsperByrCasper'

console.log(str2.replace(/Byron|Casper/g, 'X')) //XX

console.log(str3.match(/Byr(on|Ca)sper/g)) // [ 'Byronsper', 'ByrCasper' ]


//忽略分组





