var testModule = (function(){
    var __privateVariable = 'private'

    var publicMethod_Get = function(){
        return __privateVariable
    }

    var publicMethod_Set = function(value){
        __privateVariable = value
    }

    return {
        publicMethod_Get,
        publicMethod_Set
    }
})()




var module1  = testModule; 
console.log(module1.__privateVariable) //undefined
console.log(module1.publicMethod_Get()) //private
module1.publicMethod_Set("private one")

console.log(module1.publicMethod_Get()) //private one


var testRevealingModule = (function(){
    var __privateVariable = 'private'

    var publicMethod_Get = function(){
        return __privateVariable
    }

    var publicMethod_Set = function(value){
        __privateVariable = value
    }

    return {
        getName:publicMethod_Get,
        setName:publicMethod_Set
    }
})()



var module2  = testRevealingModule; 
console.log(module2.__privateVariable) //undefined
console.log(module2.getName()) //private
module2.setName("private two")

console.log(module2.getName()) //private two