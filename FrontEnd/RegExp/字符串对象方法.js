//search

//String.prototype.search(reg) 可以查找指定的子字符串，也可以查找与正则表达式相符合的子字符串，方法返回第一个匹配结果index，查不到则返回-1
//search会自动忽略g标识符


let str = 'a1b2c3d1'

console.log(str.search('1')) //1

console.log(str.search('g')) //-1
console.log(str.search(/1b/)) //1


//match
//match方法会返回match的结果 ，g标识符在此起作用
//和reg的exec方法非常像

var reg1 = /\d(\w)(\w)\d/;
var reg2 = /\d(\w)(\w)\d/g;

var str1 = '$1az2bb3cy4dd5ee'

let ret = str1.match(reg2)
let ret1 = str1.match(reg1)
console.log(ret) // [ '1az2', '3cy4' ]
console.log(ret1) 
// [
//   '1az2',
//   'a',
//   'z',
//   index: 1,
//   input: '$1az2bb3cy4dd5ee',
//   groups: undefined
// ]

//split也可以传入正则
//replace第一个参数是查找的字符串，第二个是替换的结果


//replace(reg,function)

//function有四个参数，
//第一个是匹配字符串
//第二个是分组内容，如果没有则没有
//第三个是匹配项的index
//第四个是原字符串
let res = 'a1b2c3d4e5'.replace(/\d/g,function(match,index,origin){
  return parseInt(match) + 1
})

console.log(res) //a2b3c4d5e6


let res1 = 'a1b2c3d4e5'.replace(/(\d)(\w)(\d)/g,function(match,g1,g2,g3,index,origin){
  console.log(match)
  
  return g1+g3 //相当于把b和d去掉
})
