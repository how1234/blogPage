function NEW(f) {
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
  
  var obj = NEW(Foo, 'bar');
  console.log(obj.prop);          // 'bar'
  console.log(obj.inherited);     // 'baz'
  console.log(obj instanceof Foo) // true