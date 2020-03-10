Function.prototype.bindImp = function(context) {
  var __self = this; // Keep the reference of this object(func)

  return function() {
    return __self.apply(context, arguments);
  };
};

var obj = { name: "obj name" };
var func = function() {
  console.log(this.name);
};




var funcBinded = func.bindImp(obj)
funcBinded()