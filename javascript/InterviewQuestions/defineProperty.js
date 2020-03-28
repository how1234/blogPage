//实现似有变量


var obj = (function(){
    let privateVariable = 10
    let getter = function(){
        return privateVariable
    }

    let setter = function(newValue){
        privateVariable = newValue
    }
    

    return {
        get:getter,
        set:setter
    }
})()


console.log(obj.get())
console.log(obj.privateVariable)

obj.set(100)
console.log(obj.get())