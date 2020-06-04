# ES6


## Modular

### Export Syntax

```javascript
/* */
export default{}
export function fn1{}
export function fn2{}

```


## Babel

Babel can compile ES6 syntax into the sytax of lower version JS.

*.babelrc* 

## Webpack

Packing different JS files into one bundle JS entry file.
*webpack.config.js*



## Class

The code below is a standard JavaScript constructor syntax.

```javascript

function Math(x,y){
	this.x = x
	this.y = y
}

Math.prototype.add = function(){
	return this.x + this.y
}

var m = new Math(1,2)
console.log(m.add()) //3


```
Class is a syntatical sugar.

```javascript
class Math{
	constructor(x,y){
		this.x = this.x
		this.y = this.y
	}
	
	add(){
		return this.x + this.y
	}
}

var m = new Math(1,2)
console.log(m.add()) //3

typeof Math // function
Math === Math.prototype.constructor //true
m.__proto__ === Math.prototype //true

```

## Extends
Extends before ES6

``` javascript
function Animal(){
	this.eat = function(){
		console.log('eat')
	}
}

function Dog(){
	this.bark = function(){
		console.log('bark')
	}
}
Dog.prototype = new Animal()

var dog = new Dog()
dog.eat() //eat
dog.bark() //bark

```

Extends in ES6

```javascript
class Animal{
	constructor(){
		
	}
	eat(){
		console.log('eat')
	}
}

class Dog extends Animal{
	constructor(){
		super()
	}
	bark(){
		console.log('bark')
	}
}

var dog = new Dog()

dog.bark()
dog.eat()

```

The essence of extends is still prototype.

## Promise

Promise became standard after ES6

To avoid callback hell.


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
Syntax

```javascript

var successFlag = true

const promise = new Promise((resolve,reject) =>{
    if(successFlag){
        resolve("success")
    }else{
        reject("fail")
    }
})
//new Promise( (resolve,reject) => fn())




successFlag = false
const promise1 = new Promise((resolve,reject) =>{
    if(successFlag){
        resolve("success")
    }else{
        reject("fail")
    }
})

promise.then( parameterInResolve => {console.log(parameterInResolve)}).catch(parameterInReject => {console.log(parameterInReject)}) //hi
promise1.then( parameterInResolve => 
{console.log(parameterInResolve)}).catch(parameterInReject => {console.log(parameterInReject)}) //fail
	
promise.then(function(parameterInResolve){console.log(parameterInResolve)}).catch(function(parameterInReject){console.log(parameterInReject)}) //success
promise1.then(function(parameterInResolve){console.log(parameterInResolve)}).catch(function(parameterInReject){console.log(parameterInReject)}) //fail
```


## let/const

```javascript
var i = 10;
i = 100;
var j = 20;
j = 200;

```


```javascript 
let i = 10;
i = 100;

const j = 20;
j = 200 //error

```

## template string(multiple line string)

Before ES6

```javascript
var name = 'john';
var age = 20;
html='';
html+='<div>'
html += "name: " + name + ", age: " + age 
html += '</div>

```

ES6

```javascript
const name = 'john'
const age = 20
const html = `<div>
					`name : ${name}, age:${age}`
				</div>`

```


## deconstruction
Before ES6


```javascript
var obj = {a:100,b:200,c:300}
var a = obj.a
var b = obj.b
var c = obj.c

var arr = ['xxx','yyy','zzz']
var x = arr[0]

```

ES6

```javascript
const obj = {a:100,b:200,c:300}
const {a,c} = obj
console.log(a) //100
console.log(c) //300

const arr = ['xxx','yyy','zzz']
const [x,y,z] = arr //get first three value and declare them

console.log(x)


```
## Block scope

Before ES6

```javascript
var obj = {a:100,b:200,c:300}
for (var item in obj){
	console.log(item)
}

console.log(item) //'c'

```

ES6

```javascript
var obj = {a:100,b:200,c:300}
for (let item in obj){
	console.log(item)
}

console.log(item) //'undefined'

```

## Default parameter

Before ES6
```javascript
function (a,b){
	if(b==null){
	 	b=0
	}
}
```

ES6 

```javascript
function (a,b=0)	{}
```

## Arrow function
Syntax before ES6

```javascript
var arr = [1,2,3]
arr.map(function(item){
	return item + 1
})
arr.map( function(item,index){ 
console.log(index)
return item + 1
})
```

ES6 
```javascript
const arr = [1,2,3]
arr.map(item => item + 1)
arr.map( (item,index) => { 
console.log(index)
return item + 1
})

```

The **this** in arrow function is the **this** of its closest context.


```javascript
function fn(){
	console.log('real',this) //{a:100}
	var arr = [1,2,3]
	//Normal function
	arr.map(function(item){
		console.log('function',this) //window
		return item
	})
	
	//arrow function
	arr.map((item) =>{
		console.log('arrow function',this) //{a:100}
		return item
	})
}

fn.call({a:100})

```

