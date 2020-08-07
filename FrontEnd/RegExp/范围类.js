let reg = /[0-9]/g //表示0-9

let str = '0123abcABC'

console.log(str.replace(reg,'n')) //nnnnabcABC

console.log(str.replace(/[1-9]/g,'n')) //0nnnabcABC


console.log(str.replace(/[a-z]/g,'z')) //0123zzzABC

console.log(str.replace(/[b-z]/g,'z')) //0123azzABC


console.log(str.replace(/[a-zA-Z]/g,'z')) //0123zzzzzz

console.log(str.replace(/[b-zB-Z]/g,'z')) //0123azzAzz


