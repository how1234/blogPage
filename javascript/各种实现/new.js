function newImp (fun){
    let obj = new Object()

    obj.__proto__ = fun.prototype

    fun.call(obj, ...arguments)

    return obj
}