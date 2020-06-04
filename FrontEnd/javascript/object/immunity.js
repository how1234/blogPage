//1. Object constant

var myObject = {}

Object.defineProperty(myObject, "FAVORITE_NUMBER",{
    value:[1,2,3],
    writable:false,
    configurable:false
})

console.log(myObject['FAVORITE_NUMBER'])
myObject['FAVORITE_NUMBER'].push(4)
console.log(myObject['FAVORITE_NUMBER']) //1,2,3,4


// preventExtenstions

var myObject1 = {
    a:2
}

Object.preventExtensions(myObject1)

myObject1.a = 3

myObject1.b = 3

console.log(myObject1) //{a:3}

//seal, it actual calling the preventExtensions in the object and change the 
//descriptor of all attribute to "configurable:false"


Object.seal(myObject1)

console.log(myObject1)

//Freeze, it is based on the seal() method and change all attribute to "writable false"



var myObject2 = {a : [1,2,3]}

Object.freeze(myObject2)

myObject2.a.push(4)
myObject2.a = 2

console.log(myObject2) //[1,2,3,4]