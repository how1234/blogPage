function SuperType(){
    this.colors = ['red','blue','green']
    this.getSuperValue = function(){
        return this.colors
    }
}

function SubType(){
    SuperType.call(this)
}


var instance1 = new SubType()

instance1.colors.push('black')
console.log(instance1.getSuperValue())


var instance2 = new SubType()
console.log(instance2.getSuperValue())