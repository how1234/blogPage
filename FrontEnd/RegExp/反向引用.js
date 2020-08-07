//2015-12-25 => 12/25/2015

let str = '2015-12-25'


let pattern = /(\d{4})-(\d{2})-(\d{2})/g

console.log(pattern.exec(str)) 

// [
//   '2015-12-25',
//   '2015',
//   '12',
//   '25',
//   index: 0,
//   input: '2015-12-25',
//   groups: undefined
// ]



//$表示分组的结果，比如$1在这里是2015 $0无含义
console.log(str.replace(pattern,'$3/$2/$1')) //25/12/2015

console.log(str.replace(pattern,'$2/$3/$1')) //12/25/2015

console.log(str.replace(pattern,'$0$0')) //$0$0

//忽略分组，在分组里面加上"?:"就可以非捕获性分组

let pattern1 = /(?:\d{4})-(\d{2})-(\d{2})/g

console.log(pattern1.exec(str)) 
// [
//   '2015-12-25',
//   '12',
//   '25',
//   index: 0,
//   input: '2015-12-25',
//   groups: undefined
// ]

// 没有2015