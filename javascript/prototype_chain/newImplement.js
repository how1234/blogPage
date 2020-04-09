function es5_NEW(f) {
    var obj, ret, proto;
  
    proto = Object(f.prototype) === f.prototype ? f.prototype : Object.prototype;

    obj = Object.create(proto);
  
    ret = f.apply(obj, Array.prototype.slice.call(arguments, 1));
  
    if (Object(ret) === ret) { // the result is an object?
      return ret;
    }
    return obj;
  }
  
  // Example usage:
  function Foo (arg) {
    this.prop = arg;
  }
  Foo.prototype.inherited = 'baz';

function es6_New(f,...arg){
  let obj = Object.create(f.prototype)
  let ret = f.apply(obj,arg)
  return ret instanceof Object ? ret : obj
}


  var obj = es5_NEW(Foo, 'bar');
  console.log(obj.prop);          // 'bar'
  console.log(obj.inherited);     // 'baz'
  console.log(obj instanceof Foo) // true   


  var obj1 = es6_New(Foo, 'bar1');
  console.log(obj1.prop);          // 'bar1'
  console.log(obj1.inherited);     // 'baz'
  console.log(obj1 instanceof Foo) // true   