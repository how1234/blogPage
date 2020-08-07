// /d等于[0-9] 数字字符

// /D等于[^0-9] 非数字字符

// /s等于[\t\n\x0B\f\r] 空白符

// /S等于[\t\n\x0B\f\r] 非空白符


// /w等于[a-zA-Z_0-9]单词字符 包括下划线


// /W等于[^a-zA-Z_0-9]非单词字符 包括下划线


//边界
// /b单词边界 


let str = 'this is a boy'

console.log(str.replace(/is/g, '0')) //th0 0 a boy

console.log(str.replace(/\bis\b/g, '0')) //this 0 a boy


// ^ 字符串开始
let str1 = '@123@abc@'

console.log(str1.replace(/@./g, '0')) //0230bc@

console.log(str1.replace(/^@./g ,'0')) //023@abc@


 
// $字符串结束

console.log(str1.replace(/.@$/g ,'0')) //@123@abc0


//多行匹配

let str2 = '@123\n@456\n@789'

console.log(str2.replace(/^@\d/g,'X')) 
// X23
// @456
// @789



console.log(str2.replace(/^@\d/gm,'X')) 
// X23
// X56
// X89