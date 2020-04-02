var anotherObject = {
    a:2
}

var myObject = Object.create(anotherObject)

console.log(anotherObject.a)

console.log(myObject.a)


console.log(anotherObject.hasOwnProperty('a')) //true
console.log(myObject.hasOwnProperty('a')) //false


myObject.a++

console.log(anotherObject.a) //2
console.log(myObject.a)//3

console.log(myObject.hasOwnProperty('a')) //true
