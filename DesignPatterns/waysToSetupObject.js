//3 common ways to create a new object

var obj1 = {}
var obj2 = Object.create(Object.prototype)
var obj3 = new Object()


// 4 ways to set up the properties of an Object


//Works after ES3

//1.Dot syntax
obj1.someKey = 'value1'
var value1 = obj1.someKey //value1
//2.Square Bracket syntax
obj2['somekey'] = 'value2'
var value2 = obj2['somekey'] //value2



//Works after ES5
//3.defineProperty
Object.defineProperty(obj3,"somekey",{
    value:"for more control of the property's behavior",
    writable:true,
    enumerable:true,
    configurable:true
})
console.log(obj3.somekey) //for more control of the property's behavior

//4.defineProperties

Object.defineProperties(obj1,{
    "somekey":{
        value:"value4",
        writable:true
    },
    "anotherkey":{
        value:"can't edit",
        writable:false
    }
})

console.log(obj1['anotherkey']) 
obj1.anotherkey = 'edited value' 
obj1.somekey = 'edited value'
console.log(obj1['anotherkey'])  //can't edit
console.log(obj1['somekey'])  //edited value

