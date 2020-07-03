function _new(fn,...arg){
    const obj = Object.create(fn.prototype)

    console.log(arg)
    const res = fn.apply(fn,arg)

    //是否为基本类型的值
    return res instanceof Object ? res : obj
    
}




let a = new String('123')



let a1 = _new(String,'123','345')

console.log(a)
console.log(a1)
