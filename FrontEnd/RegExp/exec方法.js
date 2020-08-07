//exec 使用正则表达式模式对字符串执行搜索，并将更新全局RegExp对象的属性以反映结果
//如果没有匹配文本可以返回null，否则返回一个结果数组

//index声明匹配文本的第一个字符的位置
//input 存放被检索的字符串string

//非全局调用
//调用非全局的RegExp对象的exec()时，返回数组
//第一个元素是与正则表达式相匹配的文本
//第二个元素是与RegExpObject的第一个子表达式相匹配的文本（如果有的话）


var reg1 = /\d(\w)(\w)\d/;
var reg2 = /\d(\w)(\w)\d/g;

var str = '$1az2bb3cy4dd5ee'

let ret = reg1.exec(str)

console.log(reg1.lastIndex + '\t' + ret.index + '\t' + ret) // 0	1	1az2,a,z


while(ret = reg2.exec(str)){
  console.log(reg2.lastIndex + '\t' + ret.index + '\t' + ret)

//  5	1	1az2,a,z
//第一次搜索 lastIndex指向5（1az2）结尾的索引， ret index指向1，（1az2）开始的索引
// 11	7	3cy4,c,y
//第二次搜索 lastIndex指向11（3cy4）结尾的索引， ret index指向7，（3cy4）开始的索引
}