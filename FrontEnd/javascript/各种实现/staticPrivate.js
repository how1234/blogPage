(function(){
    var privateVariable = 10;
    function privateFunction(){
        return false
    }
    //构造函数，因为不加var所以全局访问
    MyObject = function(){
    }

    MyObject.prototype.publicMethod = function(){
        privateVariable++;
        return privateFunction()
    }

})();



(function(){
    var name = ""
    Person = function(value){
        name = value
    }
    Person.prototype.getName = function(){
        return name
    }

    Person.prototype.setName = function(value){
        name = value
    }

})()

var person1 = new Person('a')
console.log(person1.getName()) //a

var person2 = new Person('b')
console.log(person1.getName()) //b
console.log(person2.getName()) //b