//writable

// var myObject = {}
// Object.defineProperty(myObject,"a",{
//     value:2,
//     writable:false,
//     configurable:true,
//     enumerable:true

// })

// myObject.a = 3

// console.log(myObject.a) //2


//configurable


var myObject = {
    a:2
}
Object.defineProperty(myObject,"a",{
    value:3,
    writable:true,
    configurable:false,
    enumerable:true

})

myObject.a = 4


console.log(myObject.a) //4


Object.defineProperty(myObject,"a",{
    value:3,
    writable:false,
    configurable:false,
    enumerable:true

}) //Type error


console.log(myObject.a) //3

delete myObject.a

console.log(myObject.a) //3



var obj2 ={
    a:1,
    b:2
}

Object.defineProperty(obj2,"a",{
    value:3,
    writable:true,
    configurable:true,
    enumerable:false

})

for( let i in obj2){
    console.log(i) //b
}


Object.defineProperty(obj2,"a",{
    value:3,
    writable:true,
    configurable:true,
    enumerable:true

})

for( let i in obj2){
    console.log(i) //a,b
}
