function inheritance(superType,subType){
    //本质上是直接拿父类的原型副本作为自己的原型对象，不必通过父类的实例来连接原型副本。
    let prototype = Object.create(superType.prototype) //创建对象（克隆父类原型）
    
    prototype.constructor = subType//增强对象
    subType.prototype = prototype
}


function SuperType(name){
    this.name = name
}
SuperType.prototype.sayName = function(){
    console.log(this.name)
}

function SubType(){
    SuperType.apply(this,arguments)
}

inheritance(SuperType,SubType)


let obj1 = new SubType('blue')

obj1.sayName()

