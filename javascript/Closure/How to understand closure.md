# How to understand closure in JavaScript


Before diving into closure, the first thing we need to understand is the scope of variables of JavaScript. There have two types of variables: global variable scope and local variable scope. 


In JavaScript, you can access the global variable within a function.

```javascript

var globalVariable = 100

function func1(){
    console.log(globalVariable) //100
}

func1()


```

However, you can access the internal variable of a function outside the function. And if you define a variable without `var` , `let` or `const` actually you define a global variable.


```javascript

function func2(){
    var variable = 100
    variable2 = 100
}

func2()
console.log(variable2) //100
console.log(variable) //ReferenceError: variable is not defined


```


That's why we need closure because we want to access the local variable inside functions.

We need to understand the concept `chain scope` in JavaScript, which means the children objects can keep going up to access the scope of their ancestors until they find the variable they need or reach the highest-level ancestor. On the contrary, the parent objects cannot access the scope of their children.


```
function func1(){
    var variable = 100
    console.log(variable2) //ReferenceError: variable is not defined
    function func2(){
        var variable2 =99
        console.log(variable) //100
    }
    
}

```

Then we notice we can get the `func2` to access the local variable in `func1`.  
**`func2` is a closure, which is the function that can read the local variables of other functions.**

## Usage of Closure


### 1. Access the local variables of functions.
The first usage is that we have mentioned in the precedence codes to access the local variable of a function.

### 2. Encapsulation
The second usage is **encapsulation**, which is wrapping a variable as a private variable. The `setName` and `getName` are closures, and we cannot access the `m_name` and `m_age` directly. 

```
function Student(param_name,param_age){
    var m_name,m_age;
 
    this.setName = function(name){
        m_name  = name;
    };   
   this.getName = function(){
        return m_name;
    };
 
 
    this.setName(param_name);
}
 
var student = new Student('John');
console.log(student._mname) //undefine
console.log(student.getName()); //john
 
student.setName('zjw');
console.log(student.getName());


```

### Keeps the lifecycle of variable

The third usage is making memory keeps tracking of the variable. Under normal circumstances, the garbage collection mechanism recycles a variable when its replied context(function) has been executed. JavaScript never recycle the global variable until you manually recycle it. 

However, closure can keep the lifecycle of variables.

```

var addN;

function func1() {
  var n = 999;

  addN = function() {
    n += 1;
  };
  
  function func2() {
    console.log(n)
  }

  return func2;
}

var globalResult = func1();

globalResult(); // 999

addN();

globalResult(); // 1000

```

From the precedent codes pieces, we can see that we can still access `n`. The reason why it happened is the `globalResult(func2)` is a global variable, and it still keeps a reference to `n`, which means the context of `n` still exists so that JavaScript won't recycle the `n` variable.





 



