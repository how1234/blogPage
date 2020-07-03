//原型链组合继承

function SuperType(name,age){

    this.name = name
    this.age = age
}

function SubType(){
    SuperType.apply(this,arguments)
}


SuperType.prototype.sayHello = function(){
    console.log(`Hi, my name is ${this.name}, my age is ${this.age}`)
}
SubType.prototype = SuperType.prototype


let obj1 = new SubType('name1',"11")

obj1.sayHello()

console.log(obj1.constructor) //superType 

SubType.prototype.constructor = SubType 

console.log(SuperType.prototype.constructor) //subtype