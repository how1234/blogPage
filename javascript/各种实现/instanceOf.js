function instanceOf(instance,constructor){
    
    while (instance !== null){
        if(instance.__proto__ === constructor.prototype){
            return true
        }
        instance = instance.__proto__
    }
    return false
}

function aFunction(){

}
let result = instanceOf(aFunction,Object)
console.log(result)