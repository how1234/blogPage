var obj1 = function() {}

var obj2 = {}

var obj1Property = Object.getPrototypeOf(obj1) 

console.log(obj1Property) //[function]

console.log(Object.getPrototypeOf(obj1Property) === Object.prototype) //true

console.log(Object.getPrototypeOf(obj2) === Object.prototype) //true
