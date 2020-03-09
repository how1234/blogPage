// var child1 = Object.create(Object) //child1's prototype is Object

// var child2 = Object.create(child1) //child2's prototype is child1


// console.log(child2.hasOwnProperty === Object.prototype.hasOwnProperty) // true



// var a = new Object()
// console.log(a.__proto__ === Object.prototype) //true

// var b = []
// console.log(b.__proto__ === Array.prototype) //true



function Person(name){
    this.name = name
}

Person.prototype.getName = function(){
    return this.name
}

var obj1 = {}
obj1.__proto__ = Person.prototype

console.log(obj1.getName === Person.prototype.getName) //true
console.log(obj1 instanceof Person) //true


var obj2 = {}
obj2.__proto__ = Array.prototype
console.log(obj2.values === Array.prototype.values) //true 
console.log(obj2 instanceof Array) //true

console.log(obj1.__proto__.constructor)
console.log(Person.prototype.constructor)
