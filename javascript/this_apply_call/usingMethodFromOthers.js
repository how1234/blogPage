var A = function(name) {
  this.name = name;
};

var B = function() {
  A.apply(this, arguments);
};

b.prototype.getName = function() {
  return this.name;
};

var b = new B("new name");

console.log(b.getName());
