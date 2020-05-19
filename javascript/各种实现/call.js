Function.prototype.callImplement = function(context){

    if(typeof this !== 'function'){
        return new TypeError('not a valid function')
    }
    let args = [...arguments].slice(1)
    
    context = context || window
    let fn = this
    context.fn = fn
    let result = context.fn(args)
    delete context.fn
    return result
}


name = "global name"

function fun(number){
    console.log(this.name + number)
}

let obj = {
    name:"hi"
}
fun(2)
fun.callImplement(obj,2)