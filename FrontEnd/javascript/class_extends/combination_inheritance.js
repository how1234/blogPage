function SuperType(name){
    this.name = name
    this.colors = ["red","blue","green"]
}

SuperType.prototype.sayName = function(){
    return this.name
}


function SubType(name){
    SuperType.call(this,name)
}

SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType;
SubType.prototype.sayColor = function(){
    return this.colors
}

var instance1 = new SubType('John')
instance1.colors.push('black')
console.log(instance1.sayColor())

