# What is prototype inheritance.

## Inheritance in Java

The inheritance in Java is based on the class. The relation between an instance and its class is like a product and factory. For example, there is a class (factory) called "bird," and we can use the "new" keyword to instantiate(get) a "bird" instance(product). It is called the factory method pattern. However, the inheritance in Javascript is different, is called the prototype pattern.  We have to clone an object from its prototype if we want to instantiate it. Under this situation, we don't have to care about the name of the prototype.  It's like if a boy wants to buy a 737 Boeing aircraft toy, he points to the toy on the shelf even though he doesn't know what 737 Boeing aircraft is.

There are four basic rule of Prototype inheritance in JavaScript.

## All object type variable is the descendant of Object.prototype

As we mentioned above, every instance object is a clone of its prototype(parent), and the prototype of the parent object is also a clone of its prototype(grandparent), which so-called prototype chain. In other words, we can say all object type variables are the descendant of a common ancestor. In JavaScript, this root object is `Object.prototype.` 


```javascript

var obj1 = function() {}

var obj2 = {}

var obj1Property = Object.getPrototypeOf(obj1) 

console.log(obj1Property) //[function]

console.log(Object.getPrototypeOf(obj1Property) === Object.prototype) //true

console.log(Object.getPrototypeOf(obj2) === Object.prototype) //true


```    



## Using prototype to clone(instantiate) a object instance.


There has no "class" in JavaScript, and even the "class" keyword is introduced in ES6 as syntactic sugar. The essence of the "class" keyword is a function. 

```
class Dog{

}

console.log(typeof Dog) //function

```

But how to understand the "new" keyword? The functions in Javascript could be a normal function or constructor function. The function is constructor function when we call it by "new" keyword. The simplified process of "new" is like the following codes.


```
function NEW(func) {
  var obj, result, proto;

  // Check if 'func.prototype' is an object, not a primitive
  proto =
    Object(func.prototype) === func.prototype
      ? func.prototype
      : Object.prototype;

  // Create an object that inherits from `proto`
  obj = Object.create(proto);

       
  // Apply the function setting `obj` as the `this` value
  //equals to Foo(obj.props = "bar")
  result = func.apply(obj, Array.prototype.slice.call(arguments, 1));  
 

  if (Object(result) === result) {
    // the result is an object?
    return result;
  }
  return obj;
}

function Foo(arg) {
  this.prop = arg;
}
Foo.prototype.inherited = "baz";

var obj = NEW(Foo, "bar"); 
console.log(obj) //Foo { prop: 'bar' }
console.log(obj.prop); // 'bar'
console.log(obj.inherited); // 'baz'
console.log(obj instanceof Foo); // true

```

## Method passes through the prototype chain

A method will pass through its prototype chain, which means every node in this chain should keep track of its next node(prototype). 

```
var child1 = Object.create(Object) //child1's prototype is Object

var child2 = Object.create(child1) //child2's prototype is child1

console.log(Object.values) // [Function:values]

console.log(Object.values === child2.values) //true

console.log(child2.hasOwnProperty === Object.prototype.hasOwnProperty) // true

```
`Object.create()` is a way to define the prototype of an object. 

The precedence code pieces show how a method is passing through the prototype chain. When we call `child2.hasOwnProperty`, the following process happens.

- It checks if `child2` owns this method. There has no such method in `child2`. So it goes up to its prototype, `child1`.
- It checks if `child1` owns this method. There has no such method in child2. So it goes up to its prototype, `Object.`
- It checks if `Object` owns this method. There has no such method in child2. So it goes up to its prototype, `Object.prototype.`
- `Object.prototype` owns this method, so return this method for calling.

That's how the prototype chain works. If a method does not exist in `Object.prototype,` it returns `undefined.`  Because the prototype of `Object.prototype` is `null,` `null` doesn't have property so that it returns `undefined.`

## Object keeps tracking of its prototype




In JavaScript, it has an internal `[[Prototype]]` property in every object is called `__proto__,` which can default pointer to the prototypes of its constructor.  

```

var a = new Object()
console.log(a.__proto__ === Object.prototype) //true

var b = []
console.log(b.__proto__ === Array.prototype) //true
```

There follows another way to connect an object, and it's prototype pointing.

```
function Person(name){
    this.name = name
}

Person.prototype.getName = function(){
    return this.name
}

var obj1 = {}
obj1.__proto__ = Person.prototype

console.log(obj1.getName === Person.prototype.getName) //true
console.log(obj1 instanceof Person) //true


var obj2 = {}
obj2.__proto__ = Array.prototype
console.log(obj2.values === Array.prototype.values) //true 
console.log(obj2 instanceof Array) //true

```
From the precedence code, we can see that even `obj2` was initialized as an object, we can manually change its type to `Array.`


Moreover, there is a prototype called `constructor` in `[[Prototype]],` which pointing backed to the constructor function.


```
console.log(obj1.__proto__.constructor) //[Function: Person]
console.log(Person.prototype.constructor) //[Function: Person]

```





