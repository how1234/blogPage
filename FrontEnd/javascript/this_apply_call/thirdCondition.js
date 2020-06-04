function myClass1() {
  this.name = "myName";
}

var obj1 = new myClass1();

console.log(obj1.name); //myName

function myClass2() {
  this.name = `myName`;
  return {
    name: "explicit Name"
  };
}

var obj2 = new myClass2();

console.log(obj2.name); //explicit Name

function myClass3() {
  this.name = `myName`;
  return "explicit Name";
}

var obj3 = new myClass3();

console.log(obj3.name); //myName
