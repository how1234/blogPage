function SuperType(name){
    this.name = name
}  


function SubType(){
    SuperType.apply(this,arguments)
}


SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType
SubType.prototype.sayName = function(){
    console.log(this.name)
}

let obj1  = new SubType("name")


//SubType函数里面调用SuperType函数来构造实例
//然后将SubType本来的原型对象替换为新的SuperType实例。
//新的SuperType实例（也就是Subtype函数现在的显式原型）并没有Consturcor指向SubType函数，所以需要手动连接。

//新的SuperType实例里面有__prototype__这个隐性原型指向SuperType函数的显式原型
//所以有下面这些为true的判断
console.log(obj1.__prototype__ === SubType.prototype) //先指向Subtype的显式原型
console.log(SubType.prototype.__proto__ === SuperType.prototype)//SubType.prototype实际上就是SuperType的一个实例，所以有该实例的隐式原型指向SuperType的显式原型

obj1.sayName()
console.log(obj1 instanceof SuperType) 