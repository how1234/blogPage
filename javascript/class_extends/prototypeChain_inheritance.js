function SuperType(){
    this.colors = ['red','blue','green']
}


SuperType.prototype.getSuperValue = function(){
    return this.colors
}

function SubType(){
}


SubType.prototype = new SuperType()

SubType.prototype.constructor = SubType;

var instance1 = new SubType()
console.log(instance1.getSuperValue())
instance1.colors.push('black')


var instance2 = new SubType()
console.log(instance2.getSuperValue())