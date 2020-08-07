// ?表示出现零次或一次（最多一次）

// +表示出现一次或者多次（至少出现一次）

// *表示出现零次或多次（任意次）

// {n} 表示出现n次

// {n,m} 表示出现n到m次

// {n,}至少出现n次

// {,m}至少出现m次




//贪婪模式，尽可能多的匹配

let str = '12345678'

console.log(str.replace(/\d{3,6}/g,'X')) //X78 

console.log(str.replace(/\d{3,6}?/g,'X')) //XX78


console.log(str.match(/\d{3,6}?/g)) //[ '123', '456' ]