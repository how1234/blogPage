// class Dog{

// }

// console.log(typeof Dog)

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
  result = func.apply(obj, Array.prototype.slice.call(arguments, 1));  //equals to Foo(obj.props = "bar")

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

