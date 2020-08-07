let reg = /[abc]/g //[]意味着one of [a,b,c]

let reg1 = /[^abc]/g //[^]意味着not one of [a,b,c]
let str = 'a1b1c1d1'

console.log(str.replace(reg,'z')) //z1z1z1d1
console.log(str.replace(reg1,'g')) //agbgcggg 
