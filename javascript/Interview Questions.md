# JavaScript Interview Questions


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

It also a way to implement getter and setter.

```javascript
let obj = function(){
	var i = 0; //if you remove this line, the getI() answer will be 10
	return {
		setI(p){
			i=p;
		},
		getI(){
			return i
		}
	}

}


let x = obj()

x.setI(5)

i = 10

console.log(x.getI()); //5


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





## 12. What is token, and how to use it in projects

Token is a encrypted key generated by the server, and it can be used in client-server communication. 

A brief process is:

1. The client sends an authentication request by using their user name and password.
2. The server receives the request, then validate the user name and password
3. After validation, the server will generate a token and send it back to the client.
4. Client store the token after receiving it, and the token could be stored in session or localStorage.
5. Every time the client sends a request to the server, they can use this token to do the authentication. 
6. The server will check the token to pass the authentication. 



## 13. The difference between bubble sorting,quick sorting and divided sorting.

The time complexity of bubble sorting is n^2, space complexity is n(1) and it is a stable algorithm.


The time complexity of divided sorting is nlogn, space complexity is n(n) and it is a stable algorithm.

The time complexity of quick sorting is nlogn, space complexity is n(logn) and it is a non-stable algorithm.

## 15. How many ajax ways between server and client

[blog](https://medium.com/@Sharad35386442/6-different-ways-to-do-ajax-calls-in-javascript-b47200fe7a38)
## 16. The difference between Vue and React

## 17. Differences between HTTP and HTTPS 

## 18. Explain relations between fetch() and XMLHTTPRequest

## 19. How to check the language of current environment

window.navigator.language

## 20. Differences between Object and Map

A Map object can iterate its elements in insertion order - a for..of loop will return an array of [key, value] for each iteration.

Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Because of this, Objects have been used as Maps historically; however, there are important differences between Objects and Maps that make using a Map better.

An Object has a prototype, so there are default keys in the map. However, this can be bypassed using map = Object.create(null). The keys of an Object are Strings, where they can be any value for a Map. You can get the size of a Map easily while you have to manually keep track of size for an Object.

Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.

Use objects when there is logic that operates on individual elements.


## 21. What's Service Worker

A service worker is an event-driven worker registered against an origin and a path. It uses the JS file to control the related web page in intercepting, modifying, and control resources requests. Moreover, it can also caching resources. In conclusion,using service worker can let you to control the performance of your webpage under specific situation. 


The service worker is running under the **worker** context, so it can't access the DOM. 

## 22. Implement a trim() method

```javascript
function trim(str){
    return str.replace(/^\s+|\s+$/g,"")
}


console.log(trim("  asd asd asd asd asd "))


```



## 23. Remove duplicated Item in an Array


```javascript
function removeElement(arr){
    return arr.filter( (element,index) =>  arr.indexOf(element) === index)
}

function removeElement1(arr){
    return [...new Set(arr)]
}


```

## 24. Implement a inheritance in different ways of ES5

```javascript

function Parent(x, y) {
    this.x = x;
    this.y = y;
  }
  
  Parent.prototype.methodOne = function(x, y) {
    this.x += x;
    this.y += y;
  }
  

  function Children(x, y, r) {
    Parent.call(this, x, y);
  
    this.r = r;
  }
  
  Children.prototype = Object.create(Parent.prototype);

  Children.prototype.constructor = Children;
  


```

## 25. How to prevent double submitting when users submit the form.

When submit event fired, add a decision statement to determine if it's already implemented.

## 26. eval() function

The eval() function evaluates or executes an argument.

If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements.

## 27. What is CORS, and it's mechanism
Cross-Origin Resource Sharing (CORS) is a W3C Working Draft that defines how the browser and server must communicate when accessing sources across origins. The basic idea behind CORS is to use custom HTTP headers to allow both the browser and the server to know enough about each other to determine if the request or response should succeed or fail.

For a simple request, one that uses either GET or POST with no custom headers and whose body is text/plain, the request is sent with an extra header called **Origin**. The **Origin** header contains the origin(protocol,domain name,and port). Then the server will determine whether or not it should serve a response. An example of **Origin** headr might look like that:

```
Origin: http://www.google.com

```

Then if the server decides that the request should be allowed, it sends an **Access-Control-Allow-Origin** header back the same origin that was sent or "*" if it's a public resource. For example

```
Access-Control-Allow-Origin: http://www.google.com

```


If this header is missing, or the origins don’t match, then the browser disallows the request. If all is well, then the browser processes the request. Note that neither the requests nor the responses include cookie information.

## 28. What's Preflighted Requests
It is the request when you try to make a request with one of the advance options
For client:
- Origin — Same as in simple requests.
- Access-Control-Request-Method — The method that the request wants to use.Access-Control
- Request-Headers — (Optional) A comma-separated list of the custom headers being used.

```
Origin: http://www.nczonline.net
Access-Control-Request-Method: POST
Access-Control-Request-Headers: NCZ

```
For server:

- Access-Control-Allow-Origin — Same as in simple requests.Access-Control-Allow-Methods — A comma-separated list of allowed methods.
- Access-Control-Allow-Headers — A comma-separated list of headers that the server will allow.
- Access-Control-Max-Age — The amount of time in seconds that this prefl ight request should be cached for.

```
Access-Control-Allow-Origin: http://www.nczonline.net
Access-Control-Allow-Methods: POST
GETAccess-Control-Allow-Headers: NCZ
Access-Control-Max-Age: 1728000
```

Once a preflight request has been made, the result is cached for the period of time specified in the response; you’ll only incur the cost of an extra HTTP request the fi rst time a request of this type is made.

## 29. What's others alternate Cross-domian techniques

### Image Pings
Image pings are simple,cross-domain, one way communication with the server. You can use **onload** and **onError** method to listen the reponse by server. However, it can't get any specific data back from an image ping.

### JSONP

JSONP is a short for "JSON with padding" . The JSONP format is made up of two parts: the callback and the data. The callback is the function that should be called on the page when the response has been received. The data is simply the JSON data to pass to the function, which is also the response of server.


For example, there are such code pieces in the page.

```javascript
function print(e){
  console.log(e)
}
```

And you can add such <scritp> tag into html to implement JSONP

````html
<script src="http://server.com/jsonp.php?callback=print" />
````

When the server detect the callback function, it will pass the executed parameter into this callback function, so the client can get console log the response data. It is a two-way communication between client and server.


### Comet

>Comet is a term coined by Alex Russell to describe a more advanced Ajax technique sometimes referred to as server push.

Comet is described as the server pushing data to the page. This approach allows information to come into the page in a manner closer to real time, making it ideal for information such as sports scores or stock market prices.


There are two popular ways of Comet, one is **polling** which contains long and short polling, and the other one is **HTTP Streaming**. In polling method, the browser sends a request to the server in regular intervals to see if there's any data.
Moreover, the difference between long and short polling is the short polling will sends a response immediately regardless of the data availability, while long polling waits to send a response.

Differs from polling technique, HTTP streaming uses a single HTTP connection for the entire lifetime of the page.The browser sends a request to the server and the server holds that connection open, periodically sending data through the connection to the server. 

## 30. Difference between **let**, **var**, and **const**


1. "let" was introduced in ES6, but "var" is there in JS from the beginning
2. "let" has block scope, but "var" has function scope.
3. "var" get hoisted

You only can assign value once when you **const**, but you can modify an already assigned object-type value.

```javascript
let x = function () {
	if(true){
		var v = 2
		let i = 1
		
	}
	
	console.log(v) //2
	console.log(i) //i is no defined
}
const c = [1,2]
c = [1,2,3]
console.log(c)//[1,2,3]


``` 

## 31. Difference between **===** and **==**

They are both comparator symbol
**==** only compares values
**===** compares value and types

## 32. Difference between **null** and **undefined**

1. **typeof** undefined is undefined, **typeof** null is Object.

## 33. What is arrow function

Arrow functions do not bind their own this, instead, they inherit the one from the parent scope, which is called "lexical scoping". 

```javascript

const myObject = {
    myArrowFunction: () => console.log(this),
    myMethod: function () {
       console.log(this) ;
    }
  };
myObject.myMethod() // this === myObject
myObject.myArrowFunction() // this === window




```

## 34. What's the difference between function declaration and function expression.

```javascript 
console.log(functionD()) //it works due to hoisting.
console.log(functionE()) //it can't work

function functionD(){

}

let functionE = function(){

}


```
 
# React Interview Questions

## 1. Licycle methods

React(v16.4)

Three phases
### Render

1. Constructor
	- Set initial state
	- this.state = {}
2. static getDerivedStateFromProps
   - Replacement for componentWillReceiveProps()
   - Get derived state from props, when passed props change,
   - Class static method, they don't want user to access **this** keyword directly inside the method, such as you can't use 
   - return a new state or null
3.  render()
	- Mandoary
	- Can't call setState(), otherwise it will goes into infinitely loop
4. componentDidMount()
	- Triggered when DOM is ready.
	- Best place for making API calls
	
### re-render
1. static getDerivedStateFromProps
2. shouldComponentUpdate
	- Determine if a component needs updated.
3. render
4. getSnapShotBeforeUpdate
	- Replacement for componentWillUpdate()
5. ComponentDidUpdate()
	-  Triggered when DOM is updated.

### Unmount
1. componentWillUnmount()

## How to prevent components from re-rendering

- shouldComponentUpdate()
- React.PureComponent
- React.Memo

Both PureComponent and Memo will do a shallow comparison of props and objects of props.



## Error boundaries

### ErrorBoundaries Component

```
	<ErrorBoundariesComponent>
		<MyComp/>
	<ErrorBoundariesComponent>
```
It has special lifecycle hooks,It should have one of following lifecycle to make it as 
ErrorBoundaries Component:
   
- static getDerivedStateFromProps
- componentDidCatch, it can has fallback component here.


## What is HOC

## Why we can't directly change the state
The idea behind that is that in order to track changes in state and than re-render the component according to the changes, you have to use setState, because after setState, the render function is triggered.


## Ways in conditionally render react

```javascript

if(flag){
	return <TrueComponent/>
}else{
	return <FalseComponent/>
}


{ flag && <TrueComponent/>}

{ flag ? (<TrueComponent/>) : (<FalseComponent/>)}


```

## What is Fragment and why we use it

We can only render single child. Which means we should wrap different child nodes into under one node.

```
//won't work
render(){
	return (
			<ChildA/>
			<ChildB/>
	)
}

//work
render(){
	return (
		<React.Fragment>
			<ChildA/>
			<ChildB/>
		<React.Fragment/>
	)
}
```

## Lazy Loading

This code piece will load asychoronously

```

const LazyComp = React.lazy(() => {'./lazyComp'})

<Suspense fallback={<div>Loading...</div>}>
	<LazyComp/>

<Suspense/>
```


## Virtual DOM



## 2. What is React Hook



> Hooks are functions that lets you "Hook into" React state and lifecycle features from function component.


## 3. Why React Hook
- Different ways of doing the same things
- No more complex lifecycle methods

## 4. Rules of React Hook

- Only call Hooks at the top level
- Don't call hooks inside loops, conditions, or nested functions.
- Call Hooks from React Components or Custom Hooks.


## 5. Map Lifecycle class 

- Initial Render

```javascript
getDerivedStateFromProps

useEffect( () => {},[prop1,prop2])

componentDidMount

useEffect( () => {},[])


```
- Updates 

```javascript
getDerivedStateFromProps

useEffect( () => {},[prop1,prop2])

shouldComponentUpdate

useMemo()

componentDidUpdate
useEffect( ()=> {})

getSnapshotBeforeUpdate()
custom hook to hold previous state


```
- Unmount

```javascript
Unmount

useEffect( () => {return ()=>cleanUpFunction() },[prop1,prop2])




```



