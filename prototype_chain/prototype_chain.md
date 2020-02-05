## What is prototype? 
The prototype is a  characteristic of JavaScript. Each function is created with a prototype property. The benefit of using the prototype is that all of its properties and methods are shared among object instances. Instead of assigning object information in the constructor, they can be as assigned directly to the prototype, which can be used as an inheritance, as in the example:

```Javascript
	
	function Person() {}
	Person.prototype.name = "Nicholas"; 		
 	Person.prototype.sayName = function() 	{ 
 		console.log(this.name);
 	};
	let person1 = new Person(); 
	person1.sayName(); 
	// 	"Nicholas"
	let person2 = new Person(); 
	person2.sayName(); 
	// 	"Nicholas"
	
	console.log(person1.sayName == person2.sayName); 
	//true


```
It is a widespread use way in Javascript; the methods and properties in the prototype are shared among all instances. 

## How prototypes work?
On every prototypes, they all have a property called *constructor* that points back to the function. For example, *Person.prototype.constructor* points to *Person* function.

For every instance, each time the constructor is called to create a new instance, that instance has an internal pointer to the constructor's prototype. In ECMA-262, this is called *[[Prototype]]*. However, there is no standard way to access *[[Prototype]]* from script, but you can use *\__proto__* to access this property in some browser like Firefox, Safari, and Chrome.


By the way, the prototype of Object is null.



