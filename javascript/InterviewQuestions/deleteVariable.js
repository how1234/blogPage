

var c = {};

var b = c

c.a = c = ["a"];


console.log('====================================');
console.log(c.a);
console.log(b)
console.log('====================================');


