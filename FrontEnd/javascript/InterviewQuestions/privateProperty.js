function product() {
  let name = "x";
  this.getName = function() {
    return name;
  };
}

var obj = new product();
console.log(obj.getName());
console.log(obj.name);

