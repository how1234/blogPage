# Interview Questions


## 1. What are the possible ways to create objects in JavaScript

- Object constructor

```javascript
var obj = new Object()

`"

- Object.create()

```javascript
var obj = Object.create(null) // obj.prototype is null
var obj1 = Object.create(Person) //obj1.prototype is Person
```


The significant advantage of this method is that you can pass a prototype object as a parameter.


- Object literal syntax

```javascript
var obj = {} //It's prototype is null
```

- Function constructor

```javascript
function Person(name){
    var obj = {}
    obj.name = name
    return obj
}

var obj = new Person("John")

`"

- Function constructor with prototypes

```javascript
function Person(){}
Person.prototype.name = "John"

var obj = new Person()

```

- ES6 Class syntax

```javascipt
class Person{
    constructor(name){
    this.name = name
}    

var obj = new Person()
```


- 7.Singleton pattern

```javascript

var obj = new function(){
    this.name = "john"
}    

```

Every time you call this function will always return the same instance.


## 2. Data types
- string
- number 
- boolean
- null 
- undefined 
- symbol(new in ES5)
## 3. What is the prototype chain

The prototype is be using to implement inheritance in JavaScript.

```javascript
function Student() {
    this.name = 'John';
    this.gender = 'M';
}

Student.prototype.age = 15;

var student1 = new Student();
alert(student1.age); // 15

var student2 = new Student();
alert(student2.age); // 15

```

From the codes above, we can see that student1 and student2 inherit the age attribute. 


[image]:https://www.tutorialsteacher.com/Content/images/oo-js/prototype-2.png


For function, there always have a **prototype** property to access its prototype. However, for object instance, they don't have **prototype** property, but it has two ways to access its prototype. One is **Object.getProtypeOf(instance)**, and the other one is **__proto__**.  

For every function, its prototype chain will be terminated in Object, and the prototype of Object is null, which like the Object is the superclass of the functions(the essence of *class* in javascript is *function*). 


For the prototype function, it always has a construction property to point back to the original function. 

```javascript
function Student() {
    this.name = 'John';
    this.gender = 'M';
}

var studObj = new Student();

console.log(Student.prototype); // student
console.log(studObj.prototype); // undefined
console.log(studObj.__proto__); // student
console.log(Object.getPrototypeOf(studObj)); // object

console.log(typeof Student.prototype); // object
console.log(typeof studObj.__proto__); // object

console.log(Student.prototype === studObj.__proto__ ); // true

console.log(Student.prototype.constructor === Student); // true(means point back) 

```



## 4. Difference between *typeof* and *instanceof* operator

The *instanceof* systax is 
*object* **instanceof** *constructor*

The  *instanceof* operator returns a boolean value, which depends on whether or not the **constructor** appears in the prototype chain of an object.




```javascript

function Student() {
    this.name = 'John';
    this.gender = 'M';
}

function Human() {
    
}
var student1 = new Student()
console.log(student1 instanceof Student) //true
console.log(student1 instanceof Human) //false
console.log(student1 instanceof Object) //true
Student.prototype = new Human() 
//add Human to Student's prototype chain
var student2 = new Student()
console.log(student2 instanceof Human) //true
console.log(student1 instanceof Human) //false

```


The *typeof** operator returns a string indicating the type of the unevaluated operand. (undefined,boolean,number,string,symbol,function,object)

```javascript
console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined";

console.log(typeof null); //null will treated as object
// expected output: "object"

```

## 5. What is the free variable
In javascript closures, those are simply the variables that the function takes (read and write) in the enclosing scope where is declared the closure or in a parent scope. The free variable searching is in the scope when a function defined instead of executing scope(which is opposite to **this** keyword).

## 6. What are Closures, and where can they be used?

Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

>A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

So, where can we use it? The standard and useful ways of using closure are enclosing a function(hide a data), which means the variable in a closure can't be accessed by the outer environment. 


```javascript
// function as a return value
function create(){
    const a = 100 //if remove this line, the answer will be 200
    return function(){
        console.log(a)
    }
}

const fn = create()
const a  = 200
fn() //100

// function as a passing parameter
function print(fn){
    const b = 200
    fn()
}

const b = 100
function fn1(){
    console.log(b)
}


print(fn1) //100

```


## 7. Deep-Clone a Object

```javascript
/**
* Deep clone
**/

const obj = {
    age:20,
    name:'xxx',
    address:{
        city:'Melbourne'
    },
    arr:['a','b','c']
}


const obj_shallow = obj
const obj_deep = deepClone(obj)

obj.address.city = "Sydney"
console.log(obj_shallow.address.city)
console.log(obj_deep.address.city)


/**
 * @param {Object} obj object be cloned
 */


 function deepClone(obj = {}) {
     if(typeof obj !== 'object' || obj ==null){
         //If object is null, or is not a array or object, return 
         return obj
     }

     //Initial return value
     let result

     //The types of parameter only can be Array or Object
     if(obj instanceof Array){
         result = []
     }else{
         result = {}
     }

     for (let key in obj){
         //Make sure this key is not from Prototype of obj.
         if(obj.hasOwnProperty(key)){
             //Recursively call
             result[key] = deepClone(obj[key])
         }
     }
     return result
 }

 

```
## 8.What are the difference between *splice()* and *slice()*

*splice()* is not a pure function(If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value.), which means it has side effects. 

```javascript


let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];


let arrayIntegers1 = arrayIntegersOriginal1.splice(0,2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]

//start index:3, delete counts:1, adding element:"a","b","c"
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]

```

*slice()* is a pure function.


```javascript
let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0,2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2,3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]

```

## 9. What is AJAX

AJAX = Asynchronous JavaScript And XML.

>AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
	
```javascript
setTimeOut(callbackfunction,1000)
```


## 10.What is Promise

A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending. The syntax of promise would be as below
```javascript
const promise = new Promise(function(resolve, reject) {
})
```

Promise is used to avoid callback hell. The cause of callback hell is when people try to write JavaScript in a way where execution happens visually from top to bottom. 

```javascript
async1(function(){
    async2(function(){
        async3(function(){
            async4(function(){
                ....
            });
        });
    });
});

```

A standard Ajax example:

```javascript
function ajax(url){
    const p = new Promise( (resolve,reject)=> {
        const xhr = new XMLHttpRequest()
        xhr.open('GET','/data/test.json',true)
        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(
                        JSON.parse(xhr.responseText)
                    )
                }else if(xhr.status === 404){
                    reject(new Error('404 not found'))
                }
            }
        }
        xhr.send(null)
    })
    return p
}


const url = '/data/test.json'
ajax(url).then( res => console.log(res) ).catch(err => console.log(err))

```


## 11. What are event bubbling capturing

Event bubbling: When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.


Event Capturing: When an event happens on an element, it first runs the handlers on its ancestors, then on its parent, then all the way down on it.





