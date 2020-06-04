//原型链继承

function Parent(){
    this.name = "will"
}

Parent.prototype.getName = function(){
    console.log(this.name)
}

function Child(){

}

Child.prototype = new Parent()

var child1 = new Child()

child1.getName()

//借用构造函数

function Parent(name){
    this.name = ['calvin','will']
}
function Child(name){
    Parent.call(this,name)
}

Parent.prototype.getName = function(){
    return this.name
}

var child1 = new Child();

child1.name.push('yayu');

console.log(child1.name); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.name); // ["kevin", "daisy"]

console.log(child2.getName()); // ["kevin", "daisy"]



//组合式继承

function People(name,age){
    this.name = name || 'wangxiao'
    this.age = age || 27
  }
  People.prototype.eat = function(){
    return this.name + this.age + 'eat sleep'
  }
  
  function Woman(name,age){
    People.call(this,name,age)
  }
Woman.prototype = new People();
Woman.prototype.constructor = Woman;
let wonmanObj = new Woman(ren,27);
onmanObj.eat();
  


