//正则表达式从文本头部向尾部解析，朝着文本尾部方向就是前瞻。 ->

//前瞻就是在正则表达式匹配到规则的时候，向前检查是否符合断言，前瞻的反义词是后顾
//js不支持后顾



//正向前瞻 exp(?=assert)
//负向前瞻 exp(?!assert)

let str = 'a2*3'
let str1 = 'a2*34v8'
let pattern = /\w(?=\d)/g 





console.log(str.replace(pattern,'X')) //X2*3
console.log(str1.replace(pattern,'X')) //X2*X4X8



